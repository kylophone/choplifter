function box2d_init(){
  var b2Vec2 = Box2D.Common.Math.b2Vec2;
  var b2AABB = Box2D.Collision.b2AABB;
  var b2BodyDef = Box2D.Dynamics.b2BodyDef;
  var b2Body = Box2D.Dynamics.b2Body;
  var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
  var b2Fixture = Box2D.Dynamics.b2Fixture;
  var b2World = Box2D.Dynamics.b2World;
  var b2MassData = Box2D.Collision.Shapes.b2MassData;
  var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
  var b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef;

  var gravity = new b2Vec2(0, 8);
  var objects_can_sleep = true;
  var world = new b2World(gravity, objects_can_sleep);
  var SCALE = 30;
  choplifter(world, SCALE);

  //setup debug draw
  var debugDraw = new b2DebugDraw();
  debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
  debugDraw.SetDrawScale(SCALE);
  debugDraw.SetFillAlpha(0.5);
  debugDraw.SetLineThickness(0.5);
  debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
  world.SetDebugDraw(debugDraw);

  window.setInterval(update, 1000 / 60);

  //mouse
  var mouseX, mouseY, mousePVec, isMouseDown, selectedBody, mouseJoint;
  var canvas = document.getElementById("canvas");
  var canvasPosition = getElementPosition(canvas);

  document.addEventListener("mousedown", function(e) {
    isMouseDown = true;
    handleMouseMove(e);
    document.addEventListener("mousemove", handleMouseMove, true);
  }, true);

  document.addEventListener("mouseup", function() {
    document.removeEventListener("mousemove", handleMouseMove, true);
    isMouseDown = false;
    mouseX = undefined;
    mouseY = undefined;
  }, true);

  function handleMouseMove(e) {
    mouseX = (e.clientX - canvasPosition.x) / SCALE;
    mouseY = (e.clientY - canvas.getBoundingClientRect().top) / SCALE;
  };

  function getBodyAtMouse() {
    mousePVec = new b2Vec2(mouseX, mouseY);
    var aabb = new b2AABB();
    aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
    aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);

    // Query the world for overlapping shapes.
    selectedBody = null;
    world.QueryAABB(getBodyCB, aabb);
    return selectedBody;
  }

  function getBodyCB(fixture) {
    if(fixture.GetBody().GetType() != b2Body.b2_staticBody) {
      if(fixture.GetShape().TestPoint(fixture.GetBody().GetTransform(), mousePVec)) {
        selectedBody = fixture.GetBody();
        return false;
      }
    }
    return true;
  }


  //detect keypress 	
  var chopperForce = new b2Vec2(0, -1);
  document.addEventListener("keydown", function(e){
    switch(e.keyCode) {
      case 74: //j
        yVector -= 0.03;
        break;
      case 70: //f
        if (chopperForce.y < 0) {
          yVector += 0.02;
        }
        break; 
      case 75: //k
        if (activeChopper.GetAngle() < ((2 * Math.PI) * (15 / 360))) {
          activeChopper.ApplyTorque(0.6);
        }
        break;
      case 68: //d
        if (activeChopper.GetAngle() > (-1 * (2 * Math.PI) * (15 / 360))) {
          activeChopper.ApplyTorque(-0.6);
        }
        break;
      case 76: //l
        if (rope.m_length > 0.5) {
          rope.m_length -= (2 / SCALE);
        }
        break;
      case 83: //s
        if (rope.m_length < 4) {
          rope.m_length += (2 / SCALE);
        }
        break;
      case 186: //;
        break;
      case 65: //a
        break;
    };
  }, true);


  //update
  function update() {
    activeChopper.ApplyForce(update_chopper_forces(), activeChopper.GetWorldCenter());
    update_choppers();
    limit_chopper_angle();

    if(isMouseDown && (!mouseJoint)) {
      var body = getBodyAtMouse();
      if(body) {
        var md = new b2MouseJointDef();
        md.bodyA = world.GetGroundBody();
        md.bodyB = body;
        md.target.Set(mouseX, mouseY);
        md.collideConnected = true;
        md.maxForce = 300.0 * body.GetMass();
        mouseJoint = world.CreateJoint(md);
        body.SetAwake(true);
      }
    }

    if(mouseJoint) {
      if(isMouseDown) {
        mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
      } else {
        world.DestroyJoint(mouseJoint);
        mouseJoint = null;
      }
    }

    world.Step(1 / 60, 10, 10);
    world.DrawDebugData();
    world.ClearForces();
  }


  function getElementPosition(element) {
    var elem=element, tagname="", x=0, y=0;

    while((typeof(elem) == "object") && (typeof(elem.tagName) != "undefined")) {
      y += elem.offsetTop;
      x += elem.offsetLeft;
      tagname = elem.tagName.toUpperCase();

      if(tagname == "BODY")
        elem=0;

      if(typeof(elem) == "object") {
        if(typeof(elem.offsetParent) == "object")
          elem = elem.offsetParent;
      }
    }

    return {x: x, y: y};
  }


  var activeChopper = chopperFaceRight;
  var inactiveChopper = chopperFaceLeft;
  var chopperChangeDirection = false;
  function update_choppers() {
    inactiveChopper.SetPosition(activeChopper.GetWorldCenter());
    inactiveChopper.SetAngle(activeChopper.GetAngle());
    inactiveChopper.SetLinearVelocity(activeChopper.GetLinearVelocity());
    inactiveChopper.SetAngularVelocity(activeChopper.GetAngularVelocity());

    if (activeChopper == chopperFaceLeft && activeChopper.GetLinearVelocity().x > 0.5) {
      activeChopper = chopperFaceRight;
      inactiveChopper = chopperFaceLeft;
      chopperChangeDirection = true;
    } else if (activeChopper == chopperFaceRight && activeChopper.GetLinearVelocity().x < -0.5) {
      activeChopper = chopperFaceLeft;
      inactiveChopper = chopperFaceRight;
      chopperChangeDirection = true;
    }

    if (chopperChangeDirection) {
      activeChopper.SetActive(true);
      inactiveChopper.SetActive(false);
      hookJointDef.bodyB = activeChopper;
      hookJointDef.length = rope.m_length;
      world.DestroyJoint(rope);
      rope = world.CreateJoint(hookJointDef);
      chopperChangeDirection = false;
    }
  }


  function limit_chopper_angle() {
    if (activeChopper.GetAngle() > ((2 * Math.PI) * (20 / 360))) {
      activeChopper.SetAngle((2 * Math.PI) * (20 / 360))
      activeChopper.SetAngularVelocity(0);
    } else if (activeChopper.GetAngle() < (-1 * (2 * Math.PI) * (20 / 360))) {
      activeChopper.SetAngle(-1 * (2 * Math.PI) * (20 / 360))
      activeChopper.SetAngularVelocity(0);
    }
  }


  var yVector = -9.3;
  function update_chopper_forces() {
    var updateForce = activeChopper.GetWorldVector(chopperForce);
    updateForce.y += yVector;

    /*
       if (updateForce.y < -3.3) {
       yVector += 0.03;
       updateForce.y = -3.3;
       } else if (updateForce.y > -3) {
       updateForce.y = -3;
       }
       */

    return updateForce;
  }
}
