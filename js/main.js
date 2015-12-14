function choplifter(CHOPLIFTER){
  var b2Vec2 = Box2D.Common.Math.b2Vec2;
  var b2AABB = Box2D.Collision.b2AABB;
  var b2BodyDef = Box2D.Dynamics.b2BodyDef;
  var b2Body = Box2D.Dynamics.b2Body;
  var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
  var b2Fixture = Box2D.Dynamics.b2Fixture;
  var b2MassData = Box2D.Collision.Shapes.b2MassData;
  var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
  var b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef;

  var activeChopper = CHOPLIFTER.chopperFaceRight;
  var inactiveChopper = CHOPLIFTER.chopperFaceLeft;
  var chopperGravitionalForce = activeChopper.GetMass() * CHOPLIFTER.GRAVITY.y; 
  var yVector = 0.99 * (-chopperGravitionalForce + 2);


  /* DETECT KEYPRESS */
  document.addEventListener("keydown", function(e){
    switch(e.keyCode) {
      case 74: //j
        yVector -= 0.004 * (chopperGravitionalForce + 2);
        break;
      case 70: //f
          yVector += 0.004 * (chopperGravitionalForce + 2);
        break; 
      case 75: //k
        if (activeChopper.GetAngle() < ((2 * Math.PI) * (20 / 360))) {
          activeChopper.ApplyTorque(0.8);
        }
        break;
      case 68: //d
        if (activeChopper.GetAngle() > (-1 * (2 * Math.PI) * (20 / 360))) {
          activeChopper.ApplyTorque(-0.8);
        }
        break;
      case 76: //l
        if (CHOPLIFTER.rope.m_length > 0.5) {
          CHOPLIFTER.rope.m_length -= (2 / CHOPLIFTER.SCALE);
        }
        break;
      case 83: //s
        if (CHOPLIFTER.rope.m_length < 4) {
          CHOPLIFTER.rope.m_length += (2 / CHOPLIFTER.SCALE);
        }
        break;
      case 186: //;
        clawAngle = CHOPLIFTER.leftClaw.m_referenceAngle - ((2 / 360) * (2 * Math.PI));
        if (clawAngle < 0) {
          clawAngle = 0;
        }
        update_pincher();
        break;
      case 65: //a
        clawAngle = CHOPLIFTER.leftClaw.m_referenceAngle + ((2 / 360) * (2 * Math.PI));
        if (clawAngle > (0.15 * 2 * Math.PI)) {
          clawAngle = 0.15 * 2 * Math.PI; 
        }
        update_pincher();
        break;
    };

    function update_pincher() {
      CHOPLIFTER.righthookJointDef.referenceAngle = -clawAngle;
      CHOPLIFTER.WORLD.DestroyJoint(CHOPLIFTER.rightClaw);
      CHOPLIFTER.rightClaw = CHOPLIFTER.WORLD.CreateJoint(CHOPLIFTER.righthookJointDef);
      CHOPLIFTER.lefthookJointDef.referenceAngle = clawAngle;
      CHOPLIFTER.WORLD.DestroyJoint(CHOPLIFTER.leftClaw);
      CHOPLIFTER.leftClaw = CHOPLIFTER.WORLD.CreateJoint(CHOPLIFTER.lefthookJointDef);
    };

  }, true);


  /* DRAW SVG */
  function drawSVG() {
    drawShape(CHOPLIFTER.triangle.GetFixtureList().GetShape(), CHOPLIFTER.triangle.m_xf, "triangle");
    drawShape(CHOPLIFTER.hexagon.GetFixtureList().GetShape(),  CHOPLIFTER.hexagon.m_xf,   "hexagon");

    function drawShape(shape, xf, id) {
      var b2Shape = Box2D.Collision.Shapes.b2Shape
      var b2Math = Box2D.Common.Math.b2Math;
      var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

      switch (shape.m_type) {
        case b2Shape.e_circleShape:
          {
            var circle = ((shape instanceof b2CircleShape ? shape : null));
            var center = b2Math.MulX(xf, circle.m_p);
            var radius = circle.m_radius;
            var axis = xf.R.col1;
          }
          break;
        case b2Shape.e_polygonShape:
          {
            var i = 0;
            var poly = ((shape instanceof b2PolygonShape ? shape : null));
            var vertexCount = parseInt(poly.GetVertexCount());
            var localVertices = poly.GetVertices();
            var vertices = new Vector(vertexCount);
            var string = "";
            for (i = 0; i < vertexCount; ++i) {
              vertices[i] = b2Math.MulX(xf, localVertices[i]);
              string += ((vertices[i].x * CHOPLIFTER.SCALE).toString() + "," + (vertices[i].y * CHOPLIFTER.SCALE).toString() + " ");
            }
            document.getElementById(id).setAttribute("points", string);
          }
          break;
        case b2Shape.e_edgeShape:
          {
            var edge = (shape instanceof b2EdgeShape ? shape : null);
            this.m_debugDraw.DrawSegment(b2Math.MulX(xf, edge.GetVertex1()), b2Math.MulX(xf, edge.GetVertex2()), color);
          }
          break;
      }
    };

  };


  /* UPDATE CHOPPERS */
  function update_choppers() {

    activeChopper.ApplyForce(update_chopper_forces(), activeChopper.GetWorldCenter());
    inactiveChopper.SetPosition(activeChopper.GetWorldCenter());
    inactiveChopper.SetAngle(activeChopper.GetAngle());
    inactiveChopper.SetLinearVelocity(activeChopper.GetLinearVelocity());
    inactiveChopper.SetAngularVelocity(activeChopper.GetAngularVelocity());

    if (activeChopper == CHOPLIFTER.chopperFaceLeft && activeChopper.GetLinearVelocity().x > 0.5) {
      activeChopper = CHOPLIFTER.chopperFaceRight;
      inactiveChopper = CHOPLIFTER.chopperFaceLeft;
      chopperChangeDirection(); 
    } else if (activeChopper == CHOPLIFTER.chopperFaceRight && activeChopper.GetLinearVelocity().x < -0.5) {
      activeChopper = CHOPLIFTER.chopperFaceLeft;
      inactiveChopper = CHOPLIFTER.chopperFaceRight;
      chopperChangeDirection(); 
    }


    if (activeChopper.GetAngle() > ((2 * Math.PI) * (25 / 360))) {
      activeChopper.SetAngle((2 * Math.PI) * (25 / 360))
      activeChopper.SetAngularVelocity(0);
    } else if (activeChopper.GetAngle() < (-1 * (2 * Math.PI) * (25 / 360))) {
      activeChopper.SetAngle(-1 * (2 * Math.PI) * (25 / 360))
      activeChopper.SetAngularVelocity(0);
    }

    function chopperChangeDirection() {
      activeChopper.SetActive(true);
      inactiveChopper.SetActive(false);
      CHOPLIFTER.hookJointDef.bodyB = activeChopper;
      CHOPLIFTER.hookJointDef.length = CHOPLIFTER.rope.m_length;
      CHOPLIFTER.WORLD.DestroyJoint(CHOPLIFTER.rope);
      CHOPLIFTER.rope = CHOPLIFTER.WORLD.CreateJoint(CHOPLIFTER.hookJointDef);
    }

    function update_chopper_forces() {
      var updateForce = activeChopper.GetWorldVector(new b2Vec2(0, -2));

      if (yVector < 1.05 * (-chopperGravitionalForce + 2)) {
        yVector = 1.05 * (-chopperGravitionalForce + 2);
      } else if (yVector > 0.95 * (-chopperGravitionalForce + 2)) {
        yVector = 0.95 * (-chopperGravitionalForce + 2);
      }

      updateForce.y += yVector;
      return updateForce;
    };

  };


  /* MAIN LOOP */
  function main() {
    update_choppers();
    drawSVG();

    if(isMouseDown && (!mouseJoint)) {
      var body = getBodyAtMouse();
      if(body) {
        var md = new b2MouseJointDef();
        md.bodyA = CHOPLIFTER.WORLD.GetGroundBody();
        md.bodyB = body;
        md.target.Set(mouseX, mouseY);
        md.collideConnected = true;
        md.maxForce = 300.0 * body.GetMass();
        mouseJoint = CHOPLIFTER.WORLD.CreateJoint(md);
        body.SetAwake(true);
      }
    }

    if(mouseJoint) {
      if(isMouseDown) {
        mouseJoint.SetTarget(new b2Vec2(mouseX, mouseY));
      } else {
        CHOPLIFTER.WORLD.DestroyJoint(mouseJoint);
        mouseJoint = null;
      }
    }

    CHOPLIFTER.WORLD.Step(1 / 60, 10, 10);
    CHOPLIFTER.WORLD.DrawDebugData();
    CHOPLIFTER.WORLD.ClearForces();
  };

  window.setInterval(main, 1000 / 60);


  //setup debug draw
  var debugDraw = new b2DebugDraw();
  debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
  debugDraw.SetDrawScale(CHOPLIFTER.SCALE);
  debugDraw.SetFillAlpha(0.3);
  debugDraw.SetLineThickness(0.5);
  debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
  CHOPLIFTER.WORLD.SetDebugDraw(debugDraw);

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
    mouseX = (e.clientX - canvasPosition.x) / CHOPLIFTER.SCALE;
    mouseY = (e.clientY - canvas.getBoundingClientRect().top) / CHOPLIFTER.SCALE;
  };

  function getBodyAtMouse() {
    mousePVec = new b2Vec2(mouseX, mouseY);
    var aabb = new b2AABB();
    aabb.lowerBound.Set(mouseX - 0.001, mouseY - 0.001);
    aabb.upperBound.Set(mouseX + 0.001, mouseY + 0.001);

    // Query the CHOPLIFTER.WORLD for overlapping shapes.
    selectedBody = null;
    CHOPLIFTER.WORLD.QueryAABB(getBodyCB, aabb);
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
}
