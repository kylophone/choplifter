require(["Box2dWeb-2.1.a.3.min", "level1"], function(box2dweb) {
	  
	var b2Vec2 = Box2D.Common.Math.b2Vec2;
	var b2AABB = Box2D.Collision.b2AABB;
	var b2BodyDef = Box2D.Dynamics.b2BodyDef;
	var b2Body = Box2D.Dynamics.b2Body;
	var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
	var b2Fixture = Box2D.Dynamics.b2Fixture;
	var b2World = Box2D.Dynamics.b2World;
	var b2MassData = Box2D.Collision.Shapes.b2MassData;
	var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
	var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
	var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
	var b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef;

	var SCALE = 30;
	var gravity = new b2Vec2(0, 8);
	var objects_can_sleep = true;
	var world = new b2World(gravity, objects_can_sleep);

	level1(world);
	 
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
	 
	 
	 //update
	 
	 function update() {
	 
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
	 };
	 
	 //helpers
	 
	 //http://js-tut.aardon.de/js-tut/tutorial/position.html
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

});