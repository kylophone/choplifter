/* Initialization for all bodies, fixtures, and joints. */

function choplifter(world, SCALE) {
  var b2BodyDef = Box2D.Dynamics.b2BodyDef;
  var b2Body = Box2D.Dynamics.b2Body;
  var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
  var b2Fixture = Box2D.Dynamics.b2Fixture;
  var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
  var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
  var b2Vec2 = Box2D.Common.Math.b2Vec2;
  var b2RevoluteJointDef = Box2D.Dynamics.Joints.b2RevoluteJointDef;
  var b2WeldJointDef = Box2D.Dynamics.Joints.b2WeldJointDef;
  var b2DistanceJointDef =  Box2D.Dynamics.Joints.b2DistanceJointDef;


  //addedRect_ironbar_2_ (rect)
  var bodyDefaddedRect_ironbar_2_ = new b2BodyDef;
  var fixDefaddedRect_ironbar_2_ = new b2FixtureDef;
  fixDefaddedRect_ironbar_2_.density = 0.5;
  fixDefaddedRect_ironbar_2_.friction = 0.5;
  fixDefaddedRect_ironbar_2_.restitution = 0.2;
  bodyDefaddedRect_ironbar_2_.type = b2Body.b2_staticBody;
  fixDefaddedRect_ironbar_2_.shape = new b2PolygonShape;
  fixDefaddedRect_ironbar_2_.shape.SetAsBox(16.0 / SCALE, 3.5 / SCALE);
  bodyDefaddedRect_ironbar_2_.position.Set(21.239 / SCALE, 179.283 / SCALE);
  world.CreateBody(bodyDefaddedRect_ironbar_2_).CreateFixture(fixDefaddedRect_ironbar_2_);


  //addedRect_ironbar_1_ (rect)
  var bodyDefaddedRect_ironbar_1_ = new b2BodyDef;
  var fixDefaddedRect_ironbar_1_ = new b2FixtureDef;
  fixDefaddedRect_ironbar_1_.density = 0.5;
  fixDefaddedRect_ironbar_1_.friction = 0.5;
  fixDefaddedRect_ironbar_1_.restitution = 0.2;
  bodyDefaddedRect_ironbar_1_.type = b2Body.b2_staticBody;
  fixDefaddedRect_ironbar_1_.shape = new b2PolygonShape;
  fixDefaddedRect_ironbar_1_.shape.SetAsBox(16.0 / SCALE, 3.5 / SCALE);
  bodyDefaddedRect_ironbar_1_.position.Set(21.239 / SCALE, 107.283 / SCALE);
  world.CreateBody(bodyDefaddedRect_ironbar_1_).CreateFixture(fixDefaddedRect_ironbar_1_);


  //physics_35_ (rect)
  var bodyDefphysics_35_ = new b2BodyDef;
  var fixDefphysics_35_ = new b2FixtureDef;
  fixDefphysics_35_.density = 0.5;
  fixDefphysics_35_.friction = 0.5;
  fixDefphysics_35_.restitution = 0.2;
  bodyDefphysics_35_.type = b2Body.b2_staticBody;
  fixDefphysics_35_.shape = new b2PolygonShape;
  fixDefphysics_35_.shape.SetAsBox(22.8955 / SCALE, 35.0 / SCALE);
  bodyDefphysics_35_.position.Set(1237.6035 / SCALE, 441.928 / SCALE);
  var physics_35_ = world.CreateBody(bodyDefphysics_35_)
  physics_35_.CreateFixture(fixDefphysics_35_);


  //physics_38_ (rect)
  var bodyDefphysics_38_ = new b2BodyDef;
  var fixDefphysics_38_ = new b2FixtureDef;
  fixDefphysics_38_.density = 0.5;
  fixDefphysics_38_.friction = 0.5;
  fixDefphysics_38_.restitution = 0.2;
  bodyDefphysics_38_.type = b2Body.b2_staticBody;
  fixDefphysics_38_.shape = new b2PolygonShape;
  fixDefphysics_38_.shape.SetAsBox(34.5 / SCALE, 73.0 / SCALE);
  bodyDefphysics_38_.position.Set(709.208 / SCALE, 461.928 / SCALE);
  world.CreateBody(bodyDefphysics_38_).CreateFixture(fixDefphysics_38_);


  //physics_39_ (rect)
  var bodyDefphysics_39_ = new b2BodyDef;
  var fixDefphysics_39_ = new b2FixtureDef;
  fixDefphysics_39_.density = 0.5;
  fixDefphysics_39_.friction = 0.5;
  fixDefphysics_39_.restitution = 0.2;
  bodyDefphysics_39_.type = b2Body.b2_staticBody;
  fixDefphysics_39_.shape = new b2PolygonShape;
  fixDefphysics_39_.shape.SetAsBox(47.0 / SCALE, 22.0 / SCALE);
  bodyDefphysics_39_.position.Set(1062.708 / SCALE, 428.928 / SCALE);
  var physics_39_ = world.CreateBody(bodyDefphysics_39_)
  physics_39_.CreateFixture(fixDefphysics_39_);


  //physics_67_ (rect)
  var bodyDefphysics_67_ = new b2BodyDef;
  var fixDefphysics_67_ = new b2FixtureDef;
  fixDefphysics_67_.density = 0.5;
  fixDefphysics_67_.friction = 0.5;
  fixDefphysics_67_.restitution = 0.2;
  bodyDefphysics_67_.type = b2Body.b2_staticBody;
  fixDefphysics_67_.shape = new b2PolygonShape;
  fixDefphysics_67_.shape.SetAsBox(24.879 / SCALE, 3.4375 / SCALE);
  bodyDefphysics_67_.position.Set(745.158 / SCALE, 218.8835 / SCALE);
  world.CreateBody(bodyDefphysics_67_).CreateFixture(fixDefphysics_67_);


  //physics_80_ (rect)
  var bodyDefphysics_80_ = new b2BodyDef;
  var fixDefphysics_80_ = new b2FixtureDef;
  fixDefphysics_80_.density = 0.5;
  fixDefphysics_80_.friction = 0.5;
  fixDefphysics_80_.restitution = 0.2;
  bodyDefphysics_80_.type = b2Body.b2_staticBody;
  fixDefphysics_80_.shape = new b2PolygonShape;
  fixDefphysics_80_.shape.SetAsBox(40.906 / SCALE, 3.0535 / SCALE);
  bodyDefphysics_80_.position.Set(659.919 / SCALE, 92.5805 / SCALE);
  world.CreateBody(bodyDefphysics_80_).CreateFixture(fixDefphysics_80_);


  //rect4585 (rect)
  var bodyDefrect4585 = new b2BodyDef;
  var fixDefrect4585 = new b2FixtureDef;
  fixDefrect4585.density = 0.5;
  fixDefrect4585.friction = 0.5;
  fixDefrect4585.restitution = 0.2;
  bodyDefrect4585.type = b2Body.b2_staticBody;
  fixDefrect4585.shape = new b2PolygonShape;
  fixDefrect4585.shape.SetAsBox(34.292 / SCALE, 1.989 / SCALE);
  bodyDefrect4585.position.Set(120.342 / SCALE, 583.142 / SCALE);
  world.CreateBody(bodyDefrect4585).CreateFixture(fixDefrect4585);


  //rect4646 (rect)
  var bodyDefrect4646 = new b2BodyDef;
  var fixDefrect4646 = new b2FixtureDef;
  fixDefrect4646.density = 0.5;
  fixDefrect4646.friction = 0.5;
  fixDefrect4646.restitution = 0.2;
  bodyDefrect4646.type = b2Body.b2_staticBody;
  fixDefrect4646.shape = new b2PolygonShape;
  fixDefrect4646.shape.SetAsBox(2.333 / SCALE, 16.851 / SCALE);
  bodyDefrect4646.position.Set(1059.209 / SCALE, 638.435 / SCALE);
  world.CreateBody(bodyDefrect4646).CreateFixture(fixDefrect4646);


  //rect4648 (rect)
  var bodyDefrect4648 = new b2BodyDef;
  var fixDefrect4648 = new b2FixtureDef;
  fixDefrect4648.density = 0.5;
  fixDefrect4648.friction = 0.5;
  fixDefrect4648.restitution = 0.2;
  bodyDefrect4648.type = b2Body.b2_staticBody;
  fixDefrect4648.shape = new b2PolygonShape;
  fixDefrect4648.shape.SetAsBox(21.416 / SCALE, 5.042 / SCALE);
  bodyDefrect4648.position.Set(1042.292 / SCALE, 653.289 / SCALE);
  world.CreateBody(bodyDefrect4648).CreateFixture(fixDefrect4648);


  //rect4719 (rect)
  var bodyDefrect4719 = new b2BodyDef;
  var fixDefrect4719 = new b2FixtureDef;
  fixDefrect4719.density = 0.5;
  fixDefrect4719.friction = 0.5;
  fixDefrect4719.restitution = 0.2;
  bodyDefrect4719.type = b2Body.b2_dynamicBody;
  fixDefrect4719.shape = new b2PolygonShape;
  fixDefrect4719.shape.SetAsBox(34.292 / SCALE, 8.967 / SCALE);
  bodyDefrect4719.position.Set(172.296 / SCALE, 317.961 / SCALE);
  var rect4719 = world.CreateBody(bodyDefrect4719);
  rect4719.CreateFixture(fixDefrect4719);


  //rect4852 (rect)
  var bodyDefrect4852 = new b2BodyDef;
  var fixDefrect4852 = new b2FixtureDef;
  fixDefrect4852.density = 0.5;
  fixDefrect4852.friction = 0.5;
  fixDefrect4852.restitution = 0.2;
  bodyDefrect4852.type = b2Body.b2_staticBody;
  fixDefrect4852.shape = new b2PolygonShape;
  fixDefrect4852.shape.SetAsBox(38.8705 / SCALE, 86.6245 / SCALE);
  bodyDefrect4852.position.Set(503.2545 / SCALE, 261.5535 / SCALE);
  world.CreateBody(bodyDefrect4852).CreateFixture(fixDefrect4852);


  //rect4854 (rect)
  var bodyDefrect4854 = new b2BodyDef;
  var fixDefrect4854 = new b2FixtureDef;
  fixDefrect4854.density = 0.5;
  fixDefrect4854.friction = 0.5;
  fixDefrect4854.restitution = 0.2;
  bodyDefrect4854.type = b2Body.b2_staticBody;
  fixDefrect4854.shape = new b2PolygonShape;
  fixDefrect4854.shape.SetAsBox(40.906 / SCALE, 3.053 / SCALE);
  bodyDefrect4854.position.Set(503.385 / SCALE, 174.928 / SCALE);
  world.CreateBody(bodyDefrect4854).CreateFixture(fixDefrect4854);


  //rect4856 (rect)
  var bodyDefrect4856 = new b2BodyDef;
  var fixDefrect4856 = new b2FixtureDef;
  fixDefrect4856.density = 0.5;
  fixDefrect4856.friction = 0.5;
  fixDefrect4856.restitution = 0.2;
  bodyDefrect4856.type = b2Body.b2_staticBody;
  fixDefrect4856.shape = new b2PolygonShape;
  fixDefrect4856.shape.SetAsBox(7.6115 / SCALE, 10.5505 / SCALE);
  bodyDefrect4856.position.Set(484.5945 / SCALE, 167.4315 / SCALE);
  world.CreateBody(bodyDefrect4856).CreateFixture(fixDefrect4856);


  //rect4871 (rect)
  var bodyDefrect4871 = new b2BodyDef;
  var fixDefrect4871 = new b2FixtureDef;
  fixDefrect4871.density = 0.5;
  fixDefrect4871.friction = 0.5;
  fixDefrect4871.restitution = 0.2;
  bodyDefrect4871.type = b2Body.b2_dynamicBody;
  fixDefrect4871.shape = new b2PolygonShape;
  fixDefrect4871.shape.SetAsBox(11.959 / SCALE, 3.566 / SCALE);
  bodyDefrect4871.position.Set(861.794 / SCALE, 339.516 / SCALE);
  var rect4871 = world.CreateBody(bodyDefrect4871);
  rect4871.CreateFixture(fixDefrect4871);


  //rect4915 (rect)
  var bodyDefrect4915 = new b2BodyDef;
  var fixDefrect4915 = new b2FixtureDef;
  fixDefrect4915.density = 0.5;
  fixDefrect4915.friction = 0.5;
  fixDefrect4915.restitution = 0.2;
  bodyDefrect4915.type = b2Body.b2_dynamicBody;
  fixDefrect4915.shape = new b2PolygonShape;
  fixDefrect4915.shape.SetAsBox(12.1495 / SCALE, 3.566 / SCALE);
  bodyDefrect4915.position.Set(715.5745 / SCALE, 337.96 / SCALE);
  var rect4915 = world.CreateBody(bodyDefrect4915);
  rect4915.CreateFixture(fixDefrect4915);


  //boyhead (circle)
  var bodyDefboyhead = new b2BodyDef;
  var fixDefboyhead = new b2FixtureDef;
  fixDefboyhead.density = 0.5;
  fixDefboyhead.friction = 0.5;
  fixDefboyhead.restitution = 0.6;
  bodyDefboyhead.type = b2Body.b2_dynamicBody;
  fixDefboyhead.shape = new b2CircleShape(3.192 / SCALE);
  bodyDefboyhead.position.Set(201.52 / SCALE, 291.387 / SCALE);
  var boyhead = world.CreateBody(bodyDefboyhead);
  boyhead.CreateFixture(fixDefboyhead);


  //circle_1_ (circle)
  var bodyDefcircle_1_ = new b2BodyDef;
  var fixDefcircle_1_ = new b2FixtureDef;
  fixDefcircle_1_.density = 0.5;
  fixDefcircle_1_.friction = 0.9;
  fixDefcircle_1_.restitution = 0.6;
  bodyDefcircle_1_.type = b2Body.b2_dynamicBody;
  fixDefcircle_1_.shape = new b2CircleShape(4.562 / SCALE);
  bodyDefcircle_1_.position.Set(656.095 / SCALE, 342.287 / SCALE);
  world.CreateBody(bodyDefcircle_1_).CreateFixture(fixDefcircle_1_);


  //circle_2_ (circle)
  var bodyDefcircle_2_ = new b2BodyDef;
  var fixDefcircle_2_ = new b2FixtureDef;
  fixDefcircle_2_.density = 0.5;
  fixDefcircle_2_.friction = 0.9;
  fixDefcircle_2_.restitution = 0.6;
  bodyDefcircle_2_.type = b2Body.b2_dynamicBody;
  fixDefcircle_2_.shape = new b2CircleShape(4.562 / SCALE);
  bodyDefcircle_2_.position.Set(668.714 / SCALE, 342.304 / SCALE);
  world.CreateBody(bodyDefcircle_2_).CreateFixture(fixDefcircle_2_);


  //circle_3_ (circle)
  var bodyDefcircle_3_ = new b2BodyDef;
  var fixDefcircle_3_ = new b2FixtureDef;
  fixDefcircle_3_.density = 0.5;
  fixDefcircle_3_.friction = 0.9;
  fixDefcircle_3_.restitution = 0.6;
  bodyDefcircle_3_.type = b2Body.b2_dynamicBody;
  fixDefcircle_3_.shape = new b2CircleShape(4.562 / SCALE);
  bodyDefcircle_3_.position.Set(662.281 / SCALE, 333.292 / SCALE);
  world.CreateBody(bodyDefcircle_3_).CreateFixture(fixDefcircle_3_);


  //circle_4_ (circle)
  var bodyDefcircle_4_ = new b2BodyDef;
  var fixDefcircle_4_ = new b2FixtureDef;
  fixDefcircle_4_.density = 0.5;
  fixDefcircle_4_.friction = 0.9;
  fixDefcircle_4_.restitution = 0.6;
  bodyDefcircle_4_.type = b2Body.b2_dynamicBody;
  fixDefcircle_4_.shape = new b2CircleShape(4.562 / SCALE);
  bodyDefcircle_4_.position.Set(680.009 / SCALE, 343.017 / SCALE);
  world.CreateBody(bodyDefcircle_4_).CreateFixture(fixDefcircle_4_);


  //circle_5_ (circle)
  var bodyDefcircle_5_ = new b2BodyDef;
  var fixDefcircle_5_ = new b2FixtureDef;
  fixDefcircle_5_.density = 0.5;
  fixDefcircle_5_.friction = 0.9;
  fixDefcircle_5_.restitution = 0.6;
  bodyDefcircle_5_.type = b2Body.b2_dynamicBody;
  fixDefcircle_5_.shape = new b2CircleShape(4.562 / SCALE);
  bodyDefcircle_5_.position.Set(675.449 / SCALE, 333.069 / SCALE);
  world.CreateBody(bodyDefcircle_5_).CreateFixture(fixDefcircle_5_);


  //circle_7_ (circle)
  var bodyDefcircle_7_ = new b2BodyDef;
  var fixDefcircle_7_ = new b2FixtureDef;
  fixDefcircle_7_.density = 0.5;
  fixDefcircle_7_.friction = 0.5;
  fixDefcircle_7_.restitution = 0.6;
  bodyDefcircle_7_.type = b2Body.b2_staticBody;
  fixDefcircle_7_.shape = new b2CircleShape(17.983 / SCALE);
  bodyDefcircle_7_.position.Set(1041.181 / SCALE, 636.762 / SCALE);
  world.CreateBody(bodyDefcircle_7_).CreateFixture(fixDefcircle_7_);


  //circle_9_ (circle)
  var bodyDefcircle_9_ = new b2BodyDef;
  var fixDefcircle_9_ = new b2FixtureDef;
  fixDefcircle_9_.density = 0.5;
  fixDefcircle_9_.friction = 0.5;
  fixDefcircle_9_.restitution = 0.6;
  bodyDefcircle_9_.type = b2Body.b2_dynamicBody;
  fixDefcircle_9_.shape = new b2CircleShape(3.569 / SCALE);
  bodyDefcircle_9_.position.Set(1218.216 / SCALE, 542.658 / SCALE);
  var circle_9_ = world.CreateBody(bodyDefcircle_9_);
  circle_9_.CreateFixture(fixDefcircle_9_);


  //circle_8_ (circle)
  var bodyDefcircle_8_ = new b2BodyDef;
  var fixDefcircle_8_ = new b2FixtureDef;
  fixDefcircle_8_.density = 0.5;
  fixDefcircle_8_.friction = 0.5;
  fixDefcircle_8_.restitution = 0.6;
  bodyDefcircle_8_.type = b2Body.b2_staticBody;
  fixDefcircle_8_.shape = new b2CircleShape(5.216 / SCALE);
  bodyDefcircle_8_.position.Set(1218.216 / SCALE, 529.771 / SCALE);
  var circle_8_ = world.CreateBody(bodyDefcircle_8_);
  circle_8_.CreateFixture(fixDefcircle_8_);


  //wheel_2_ (circle)
  var bodyDefwheel_2_ = new b2BodyDef;
  var fixDefwheel_2_ = new b2FixtureDef;
  fixDefwheel_2_.density = 0.5;
  fixDefwheel_2_.friction = 0.5;
  fixDefwheel_2_.restitution = 0.6;
  bodyDefwheel_2_.type = b2Body.b2_dynamicBody;
  fixDefwheel_2_.shape = new b2CircleShape(3.273 / SCALE);
  bodyDefwheel_2_.position.Set(855.16 / SCALE, 345.496 / SCALE);
  var wheel_2_ = world.CreateBody(bodyDefwheel_2_);
  wheel_2_.CreateFixture(fixDefwheel_2_);


  //wheel_1_ (circle)
  var bodyDefwheel_1_ = new b2BodyDef;
  var fixDefwheel_1_ = new b2FixtureDef;
  fixDefwheel_1_.density = 0.5;
  fixDefwheel_1_.friction = 0.5;
  fixDefwheel_1_.restitution = 0.6;
  bodyDefwheel_1_.type = b2Body.b2_dynamicBody;
  fixDefwheel_1_.shape = new b2CircleShape(3.273 / SCALE);
  bodyDefwheel_1_.position.Set(868.812 / SCALE, 345.496 / SCALE);
  var wheel_1_ = world.CreateBody(bodyDefwheel_1_);
  wheel_1_.CreateFixture(fixDefwheel_1_);


  //circle_19_ (circle)
  var bodyDefcircle_19_ = new b2BodyDef;
  var fixDefcircle_19_ = new b2FixtureDef;
  fixDefcircle_19_.density = 0.5;
  fixDefcircle_19_.friction = 0.5;
  fixDefcircle_19_.restitution = 0.6;
  bodyDefcircle_19_.type = b2Body.b2_dynamicBody;
  fixDefcircle_19_.shape = new b2CircleShape(3.014 / SCALE);
  bodyDefcircle_19_.position.Set(854.515 / SCALE, 331.833 / SCALE);
  var circle_19_ = world.CreateBody(bodyDefcircle_19_);i
  circle_19_.CreateFixture(fixDefcircle_19_);


  //circle_16_ (circle)
  var bodyDefcircle_16_ = new b2BodyDef;
  var fixDefcircle_16_ = new b2FixtureDef;
  fixDefcircle_16_.density = 0.5;
  fixDefcircle_16_.friction = 0.5;
  fixDefcircle_16_.restitution = 0.6;
  bodyDefcircle_16_.type = b2Body.b2_dynamicBody;
  fixDefcircle_16_.shape = new b2CircleShape(11.707 / SCALE);
  bodyDefcircle_16_.position.Set(1080.533 / SCALE, 393.939 / SCALE);
  var circle_16_ = world.CreateBody(bodyDefcircle_16_);
  circle_16_.CreateFixture(fixDefcircle_16_);


  //wheel (circle)
  var bodyDefwheel = new b2BodyDef;
  var fixDefwheel = new b2FixtureDef;
  fixDefwheel.density = 0.5;
  fixDefwheel.friction = 0.5;
  fixDefwheel.restitution = 0.6;
  bodyDefwheel.type = b2Body.b2_dynamicBody;
  fixDefwheel.shape = new b2CircleShape(3.121 / SCALE);
  bodyDefwheel.position.Set(1063.628 / SCALE, 402.527 / SCALE);
  var wheel = world.CreateBody(bodyDefwheel):
  wheel.CreateFixture(fixDefwheel);


  //wheel_4_ (circle)
  var bodyDefwheel_4_ = new b2BodyDef;
  var fixDefwheel_4_ = new b2FixtureDef;
  fixDefwheel_4_.density = 0.5;
  fixDefwheel_4_.friction = 0.5;
  fixDefwheel_4_.restitution = 0.6;
  bodyDefwheel_4_.type = b2Body.b2_dynamicBody;
  fixDefwheel_4_.shape = new b2CircleShape(3.078 / SCALE);
  bodyDefwheel_4_.position.Set(708.683 / SCALE, 344.744 / SCALE);
  var wheel_4_ = world.CreateBody(bodyDefwheel_4_);
  wheel_4_.CreateFixture(fixDefwheel_4_);


  //wheel_3_ (circle)
  var bodyDefwheel_3_ = new b2BodyDef;
  var fixDefwheel_3_ = new b2FixtureDef;
  fixDefwheel_3_.density = 0.5;
  fixDefwheel_3_.friction = 0.5;
  fixDefwheel_3_.restitution = 0.6;
  bodyDefwheel_3_.type = b2Body.b2_dynamicBody;
  fixDefwheel_3_.shape = new b2CircleShape(3.078 / SCALE);
  bodyDefwheel_3_.position.Set(722.332 / SCALE, 344.744 / SCALE);
  var wheel_3_ = world.CreateBody(bodyDefwheel_3_);
  wheel_3_.CreateFixture(fixDefwheel_3_);


  //circle_20_ (circle)
  var bodyDefcircle_20_ = new b2BodyDef;
  var fixDefcircle_20_ = new b2FixtureDef;
  fixDefcircle_20_.density = 0.5;
  fixDefcircle_20_.friction = 0.5;
  fixDefcircle_20_.restitution = 0.6;
  bodyDefcircle_20_.type = b2Body.b2_dynamicBody;
  fixDefcircle_20_.shape = new b2CircleShape(3.369 / SCALE);
  bodyDefcircle_20_.position.Set(1101.259 / SCALE, 386.013 / SCALE);
  var circle_20_ = world.CreateBody(bodyDefcircle_20_);
  circle_20_.CreateFixture(fixDefcircle_20_);


  //circle_21_ (circle)
  var bodyDefcircle_21_ = new b2BodyDef;
  var fixDefcircle_21_ = new b2FixtureDef;
  fixDefcircle_21_.density = 0.5;
  fixDefcircle_21_.friction = 0.5;
  fixDefcircle_21_.restitution = 0.6;
  bodyDefcircle_21_.type = b2Body.b2_dynamicBody;
  fixDefcircle_21_.shape = new b2CircleShape(3.369 / SCALE);
  bodyDefcircle_21_.position.Set(642.822 / SCALE, 654.895 / SCALE);
  var circle_21_ = world.CreateBody(bodyDefcircle_21_);
  circle_21_.CreateFixture(fixDefcircle_21_);


  //circle_12_ (circle)
  var bodyDefcircle_12_ = new b2BodyDef;
  var fixDefcircle_12_ = new b2FixtureDef;
  fixDefcircle_12_.density = 0.5;
  fixDefcircle_12_.friction = 0.5;
  fixDefcircle_12_.restitution = 0.6;
  bodyDefcircle_12_.type = b2Body.b2_dynamicBody;
  fixDefcircle_12_.shape = new b2CircleShape(3.369 / SCALE);
  bodyDefcircle_12_.position.Set(1164.265 / SCALE, 608.222 / SCALE);
  var circle_12_ = world.CreateBody(bodyDefcircle_12_);
  circle_12_.CreateFixture(fixDefcircle_12_);


  //circle_13_ (circle)
  var bodyDefcircle_13_ = new b2BodyDef;
  var fixDefcircle_13_ = new b2FixtureDef;
  fixDefcircle_13_.density = 0.5;
  fixDefcircle_13_.friction = 0.5;
  fixDefcircle_13_.restitution = 0.6;
  bodyDefcircle_13_.type = b2Body.b2_dynamicBody;
  fixDefcircle_13_.shape = new b2CircleShape(3.369 / SCALE);
  bodyDefcircle_13_.position.Set(693.699 / SCALE, 329.256 / SCALE);
  var circle_13_ = world.CreateBody(bodyDefcircle_13_);
  circle_13_.CreateFixture(fixDefcircle_13_);


  //circle_14_ (circle)
  var bodyDefcircle_14_ = new b2BodyDef;
  var fixDefcircle_14_ = new b2FixtureDef;
  fixDefcircle_14_.density = 0.5;
  fixDefcircle_14_.friction = 0.5;
  fixDefcircle_14_.restitution = 0.6;
  bodyDefcircle_14_.type = b2Body.b2_dynamicBody;
  fixDefcircle_14_.shape = new b2CircleShape(3.369 / SCALE);
  bodyDefcircle_14_.position.Set(839.575 / SCALE, 329.295 / SCALE);
  var circle_14_ = world.CreateBody(bodyDefcircle_14_);
  circle_14_.CreateFixture(fixDefcircle_14_);


  //physics_53_ (polygon)
  var bodyDefphysics_53_ = new b2BodyDef;
  var fixDefphysics_53_ = new b2FixtureDef;
  fixDefphysics_53_.density = 0.5;
  fixDefphysics_53_.friction = 0.5;
  fixDefphysics_53_.restitution = 0.4;
  bodyDefphysics_53_.type = b2Body.b2_staticBody;
  fixDefphysics_53_.shape = new b2PolygonShape;
  bodyDefphysics_53_.position.Set(1088.708 / SCALE, 676.928 / SCALE);
  fixDefphysics_53_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(12.0 / SCALE, 0.0 / SCALE),
      new b2Vec2(6.0 / SCALE, 4.572 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_53_).CreateFixture(fixDefphysics_53_);


  //physics_52_ (polygon)
  var bodyDefphysics_52_ = new b2BodyDef;
  var fixDefphysics_52_ = new b2FixtureDef;
  fixDefphysics_52_.density = 0.5;
  fixDefphysics_52_.friction = 0.5;
  fixDefphysics_52_.restitution = 0.4;
  bodyDefphysics_52_.type = b2Body.b2_staticBody;
  fixDefphysics_52_.shape = new b2PolygonShape;
  bodyDefphysics_52_.position.Set(1005.708 / SCALE, 670.928 / SCALE);
  fixDefphysics_52_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(13.0 / SCALE, -12.0 / SCALE),
      new b2Vec2(62.0 / SCALE, -12.0 / SCALE),
      new b2Vec2(83.0 / SCALE, 6.0 / SCALE),
  ], 4);
  world.CreateBody(bodyDefphysics_52_).CreateFixture(fixDefphysics_52_);


  //physics_51_ (polygon)
  var bodyDefphysics_51_ = new b2BodyDef;
  var fixDefphysics_51_ = new b2FixtureDef;
  fixDefphysics_51_.density = 0.5;
  fixDefphysics_51_.friction = 0.5;
  fixDefphysics_51_.restitution = 0.4;
  bodyDefphysics_51_.type = b2Body.b2_staticBody;
  fixDefphysics_51_.shape = new b2PolygonShape;
  bodyDefphysics_51_.position.Set(982.708 / SCALE, 648.928 / SCALE);
  fixDefphysics_51_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(23.0 / SCALE, 22.0 / SCALE),
      new b2Vec2(0.0 / SCALE, 19.94 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_51_).CreateFixture(fixDefphysics_51_);


  //physics_50_ (polygon)
  var bodyDefphysics_50_ = new b2BodyDef;
  var fixDefphysics_50_ = new b2FixtureDef;
  fixDefphysics_50_.density = 0.5;
  fixDefphysics_50_.friction = 0.5;
  fixDefphysics_50_.restitution = 0.4;
  bodyDefphysics_50_.type = b2Body.b2_staticBody;
  fixDefphysics_50_.shape = new b2PolygonShape;
  bodyDefphysics_50_.position.Set(926.533 / SCALE, 540.928 / SCALE);
  fixDefphysics_50_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(14.175 / SCALE, 3.0 / SCALE),
      new b2Vec2(50.175 / SCALE, 59.0 / SCALE),
      new b2Vec2(56.175 / SCALE, 108.0 / SCALE),
  ], 4);
  world.CreateBody(bodyDefphysics_50_).CreateFixture(fixDefphysics_50_);


  //physics_49_ (polygon)
  var bodyDefphysics_49_ = new b2BodyDef;
  var fixDefphysics_49_ = new b2FixtureDef;
  fixDefphysics_49_.density = 0.5;
  fixDefphysics_49_.friction = 0.5;
  fixDefphysics_49_.restitution = 0.4;
  bodyDefphysics_49_.type = b2Body.b2_staticBody;
  fixDefphysics_49_.shape = new b2PolygonShape;
  bodyDefphysics_49_.position.Set(851.708 / SCALE, 520.928 / SCALE);
  fixDefphysics_49_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(34.0 / SCALE, -39.0 / SCALE),
      new b2Vec2(50.825 / SCALE, -42.0 / SCALE),
      new b2Vec2(74.825 / SCALE, 20.0 / SCALE),
  ], 4);
  world.CreateBody(bodyDefphysics_49_).CreateFixture(fixDefphysics_49_);


  //physics_48_ (polygon)
  var bodyDefphysics_48_ = new b2BodyDef;
  var fixDefphysics_48_ = new b2FixtureDef;
  fixDefphysics_48_.density = 0.5;
  fixDefphysics_48_.friction = 0.5;
  fixDefphysics_48_.restitution = 0.4;
  bodyDefphysics_48_.type = b2Body.b2_staticBody;
  fixDefphysics_48_.shape = new b2PolygonShape;
  bodyDefphysics_48_.position.Set(828.708 / SCALE, 593.928 / SCALE);
  fixDefphysics_48_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(23.0 / SCALE, -73.0 / SCALE),
      new b2Vec2(23.0 / SCALE, -30.428 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_48_).CreateFixture(fixDefphysics_48_);


  //physics_46_ (polygon)
  var bodyDefphysics_46_ = new b2BodyDef;
  var fixDefphysics_46_ = new b2FixtureDef;
  fixDefphysics_46_.density = 0.5;
  fixDefphysics_46_.friction = 0.5;
  fixDefphysics_46_.restitution = 0.4;
  bodyDefphysics_46_.type = b2Body.b2_staticBody;
  fixDefphysics_46_.shape = new b2PolygonShape;
  bodyDefphysics_46_.position.Set(812.708 / SCALE, 615.928 / SCALE);
  fixDefphysics_46_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(5.0 / SCALE, -18.0 / SCALE),
      new b2Vec2(16.0 / SCALE, -22.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_46_).CreateFixture(fixDefphysics_46_);


  //physics_47_ (polygon)
  var bodyDefphysics_47_ = new b2BodyDef;
  var fixDefphysics_47_ = new b2FixtureDef;
  fixDefphysics_47_.density = 0.5;
  fixDefphysics_47_.friction = 0.5;
  fixDefphysics_47_.restitution = 0.4;
  bodyDefphysics_47_.type = b2Body.b2_staticBody;
  fixDefphysics_47_.shape = new b2PolygonShape;
  bodyDefphysics_47_.position.Set(768.708 / SCALE, 676.928 / SCALE);
  fixDefphysics_47_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(22.0 / SCALE, -44.0 / SCALE),
      new b2Vec2(44.0 / SCALE, -61.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_47_).CreateFixture(fixDefphysics_47_);


  //physics_45_ (polygon)
  var bodyDefphysics_45_ = new b2BodyDef;
  var fixDefphysics_45_ = new b2FixtureDef;
  fixDefphysics_45_.density = 0.5;
  fixDefphysics_45_.friction = 0.5;
  fixDefphysics_45_.restitution = 0.4;
  bodyDefphysics_45_.type = b2Body.b2_staticBody;
  fixDefphysics_45_.shape = new b2PolygonShape;
  bodyDefphysics_45_.position.Set(680.5 / SCALE, 676.928 / SCALE);
  fixDefphysics_45_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(88.208 / SCALE, 0.0 / SCALE),
      new b2Vec2(43.908 / SCALE, 13.572 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_45_).CreateFixture(fixDefphysics_45_);


  //physics_44_ (polygon)
  var bodyDefphysics_44_ = new b2BodyDef;
  var fixDefphysics_44_ = new b2FixtureDef;
  fixDefphysics_44_.density = 0.5;
  fixDefphysics_44_.friction = 0.5;
  fixDefphysics_44_.restitution = 0.4;
  bodyDefphysics_44_.type = b2Body.b2_staticBody;
  fixDefphysics_44_.shape = new b2PolygonShape;
  bodyDefphysics_44_.position.Set(593.708 / SCALE, 676.928 / SCALE);
  fixDefphysics_44_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(86.792 / SCALE, 0.0 / SCALE),
      new b2Vec2(42.833 / SCALE, 13.572 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_44_).CreateFixture(fixDefphysics_44_);


  //physics_43_ (polygon)
  var bodyDefphysics_43_ = new b2BodyDef;
  var fixDefphysics_43_ = new b2FixtureDef;
  fixDefphysics_43_.density = 0.5;
  fixDefphysics_43_.friction = 0.5;
  fixDefphysics_43_.restitution = 0.4;
  bodyDefphysics_43_.type = b2Body.b2_staticBody;
  fixDefphysics_43_.shape = new b2PolygonShape;
  bodyDefphysics_43_.position.Set(522.708 / SCALE, 481.928 / SCALE);
  fixDefphysics_43_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(45.0 / SCALE, 0.0 / SCALE),
      new b2Vec2(59.292 / SCALE, 107.176 / SCALE),
      new b2Vec2(0.0 / SCALE, 108.072 / SCALE),
  ], 4);
  world.CreateBody(bodyDefphysics_43_).CreateFixture(fixDefphysics_43_);


  //physics_42_ (polygon)
  var bodyDefphysics_42_ = new b2BodyDef;
  var fixDefphysics_42_ = new b2FixtureDef;
  fixDefphysics_42_.density = 0.5;
  fixDefphysics_42_.friction = 0.5;
  fixDefphysics_42_.restitution = 0.4;
  bodyDefphysics_42_.type = b2Body.b2_staticBody;
  fixDefphysics_42_.shape = new b2PolygonShape;
  bodyDefphysics_42_.position.Set(522.708 / SCALE, 677.928 / SCALE);
  fixDefphysics_42_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(0.0 / SCALE, -87.928 / SCALE),
      new b2Vec2(59.292 / SCALE, -88.824 / SCALE),
      new b2Vec2(71.0 / SCALE, -1.0 / SCALE),
  ], 4);
  world.CreateBody(bodyDefphysics_42_).CreateFixture(fixDefphysics_42_);


  //physics_41_ (polygon)
  var bodyDefphysics_41_ = new b2BodyDef;
  var fixDefphysics_41_ = new b2FixtureDef;
  fixDefphysics_41_.density = 0.5;
  fixDefphysics_41_.friction = 0.5;
  fixDefphysics_41_.restitution = 0.4;
  bodyDefphysics_41_.type = b2Body.b2_staticBody;
  fixDefphysics_41_.shape = new b2PolygonShape;
  bodyDefphysics_41_.position.Set(418.709 / SCALE, 677.928 / SCALE);
  fixDefphysics_41_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(103.999 / SCALE, 0.0 / SCALE),
      new b2Vec2(54.79 / SCALE, 12.572 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_41_).CreateFixture(fixDefphysics_41_);


  //physics_31_ (polygon)
  var bodyDefphysics_31_ = new b2BodyDef;
  var fixDefphysics_31_ = new b2FixtureDef;
  fixDefphysics_31_.density = 0.5;
  fixDefphysics_31_.friction = 0.5;
  fixDefphysics_31_.restitution = 0.4;
  bodyDefphysics_31_.type = b2Body.b2_staticBody;
  fixDefphysics_31_.shape = new b2PolygonShape;
  bodyDefphysics_31_.position.Set(1100.708 / SCALE, 676.928 / SCALE);
  fixDefphysics_31_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(48.0 / SCALE, -48.0 / SCALE),
      new b2Vec2(79.0 / SCALE, -48.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_31_).CreateFixture(fixDefphysics_31_);


  //physics_32_ (polygon)
  var bodyDefphysics_32_ = new b2BodyDef;
  var fixDefphysics_32_ = new b2FixtureDef;
  fixDefphysics_32_.density = 0.5;
  fixDefphysics_32_.friction = 0.5;
  fixDefphysics_32_.restitution = 0.4;
  bodyDefphysics_32_.type = b2Body.b2_staticBody;
  fixDefphysics_32_.shape = new b2PolygonShape;
  bodyDefphysics_32_.position.Set(1179.708 / SCALE, 628.928 / SCALE);
  fixDefphysics_32_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(18.5 / SCALE, -18.5 / SCALE),
      new b2Vec2(18.5 / SCALE, 0.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_32_).CreateFixture(fixDefphysics_32_);


  //physics_33_ (polygon)
  var bodyDefphysics_33_ = new b2BodyDef;
  var fixDefphysics_33_ = new b2FixtureDef;
  fixDefphysics_33_.density = 0.5;
  fixDefphysics_33_.friction = 0.5;
  fixDefphysics_33_.restitution = 0.4;
  bodyDefphysics_33_.type = b2Body.b2_staticBody;
  fixDefphysics_33_.shape = new b2PolygonShape;
  bodyDefphysics_33_.position.Set(1198.208 / SCALE, 610.428 / SCALE);
  fixDefphysics_33_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(0.0 / SCALE, -56.5 / SCALE),
      new b2Vec2(41.5 / SCALE, -56.5 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_33_).CreateFixture(fixDefphysics_33_);


  //physics_34_ (polygon)
  var bodyDefphysics_34_ = new b2BodyDef;
  var fixDefphysics_34_ = new b2FixtureDef;
  fixDefphysics_34_.density = 0.5;
  fixDefphysics_34_.friction = 0.5;
  fixDefphysics_34_.restitution = 0.4;
  bodyDefphysics_34_.type = b2Body.b2_staticBody;
  fixDefphysics_34_.shape = new b2PolygonShape;
  bodyDefphysics_34_.position.Set(1239.708 / SCALE, 553.928 / SCALE);
  fixDefphysics_34_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(0.0 / SCALE, -77.0 / SCALE),
      new b2Vec2(9.292 / SCALE, -41.373 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_34_).CreateFixture(fixDefphysics_34_);


  //physics_37_ (polygon)
  var bodyDefphysics_37_ = new b2BodyDef;
  var fixDefphysics_37_ = new b2FixtureDef;
  fixDefphysics_37_.density = 0.5;
  fixDefphysics_37_.friction = 0.5;
  fixDefphysics_37_.restitution = 0.4;
  bodyDefphysics_37_.type = b2Body.b2_staticBody;
  fixDefphysics_37_.shape = new b2PolygonShape;
  bodyDefphysics_37_.position.Set(881.5 / SCALE, 433.928 / SCALE);
  fixDefphysics_37_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-137.792 / SCALE, 0.0 / SCALE),
      new b2Vec2(-68.139 / SCALE, -22.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_37_).CreateFixture(fixDefphysics_37_);


  //physics_36_ (polygon)
  var bodyDefphysics_36_ = new b2BodyDef;
  var fixDefphysics_36_ = new b2FixtureDef;
  fixDefphysics_36_.density = 0.5;
  fixDefphysics_36_.friction = 0.5;
  fixDefphysics_36_.restitution = 0.4;
  bodyDefphysics_36_.type = b2Body.b2_staticBody;
  fixDefphysics_36_.shape = new b2PolygonShape;
  bodyDefphysics_36_.position.Set(949.361 / SCALE, 411.928 / SCALE);
  fixDefphysics_36_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(66.347 / SCALE, 22.0 / SCALE),
      new b2Vec2(-66.361 / SCALE, 22.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_36_).CreateFixture(fixDefphysics_36_);


  //physics_40_ (polygon)
  var bodyDefphysics_40_ = new b2BodyDef;
  var fixDefphysics_40_ = new b2FixtureDef;
  fixDefphysics_40_.density = 0.5;
  fixDefphysics_40_.friction = 0.5;
  fixDefphysics_40_.restitution = 0.4;
  bodyDefphysics_40_.type = b2Body.b2_staticBody;
  fixDefphysics_40_.shape = new b2PolygonShape;
  bodyDefphysics_40_.position.Set(1031.708 / SCALE, 406.928 / SCALE);
  fixDefphysics_40_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-154.0 / SCALE, 0.0 / SCALE),
      new b2Vec2(-154.0 / SCALE, -57.323 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_40_).CreateFixture(fixDefphysics_40_);


  //physics_27_ (polygon)
  var bodyDefphysics_27_ = new b2BodyDef;
  var fixDefphysics_27_ = new b2FixtureDef;
  fixDefphysics_27_.density = 0.5;
  fixDefphysics_27_.friction = 0.5;
  fixDefphysics_27_.restitution = 0.4;
  bodyDefphysics_27_.type = b2Body.b2_staticBody;
  fixDefphysics_27_.shape = new b2PolygonShape;
  bodyDefphysics_27_.position.Set(877.708 / SCALE, 349.605 / SCALE);
  fixDefphysics_27_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-69.208 / SCALE, 17.95 / SCALE),
      new b2Vec2(-143.21 / SCALE, 0.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_27_).CreateFixture(fixDefphysics_27_);


  //physics_28_ (polygon)
  var bodyDefphysics_28_ = new b2BodyDef;
  var fixDefphysics_28_ = new b2FixtureDef;
  fixDefphysics_28_.density = 0.5;
  fixDefphysics_28_.friction = 0.5;
  fixDefphysics_28_.restitution = 0.4;
  bodyDefphysics_28_.type = b2Body.b2_staticBody;
  fixDefphysics_28_.shape = new b2PolygonShape;
  bodyDefphysics_28_.position.Set(734.498 / SCALE, 349.605 / SCALE);
  fixDefphysics_28_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-54.489 / SCALE, 14.86 / SCALE),
      new b2Vec2(-120.498 / SCALE, 0.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_28_).CreateFixture(fixDefphysics_28_);


  //physics_29_ (polygon)
  var bodyDefphysics_29_ = new b2BodyDef;
  var fixDefphysics_29_ = new b2FixtureDef;
  fixDefphysics_29_.density = 0.5;
  fixDefphysics_29_.friction = 0.5;
  fixDefphysics_29_.restitution = 0.4;
  bodyDefphysics_29_.type = b2Body.b2_staticBody;
  fixDefphysics_29_.shape = new b2PolygonShape;
  bodyDefphysics_29_.position.Set(614 / SCALE, 349.605 / SCALE);
  fixDefphysics_29_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-57.106 / SCALE, 14.745 / SCALE),
      new b2Vec2(-130.001 / SCALE, 0.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_29_).CreateFixture(fixDefphysics_29_);


  //physics_30_ (polygon)
  var bodyDefphysics_30_ = new b2BodyDef;
  var fixDefphysics_30_ = new b2FixtureDef;
  fixDefphysics_30_.density = 0.5;
  fixDefphysics_30_.friction = 0.5;
  fixDefphysics_30_.restitution = 0.4;
  bodyDefphysics_30_.type = b2Body.b2_staticBody;
  fixDefphysics_30_.shape = new b2PolygonShape;
  bodyDefphysics_30_.position.Set(483.999 / SCALE, 349.605 / SCALE);
  fixDefphysics_30_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-52.967 / SCALE, 10.34 / SCALE),
      new b2Vec2(-105.009 / SCALE, 0.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_30_).CreateFixture(fixDefphysics_30_);


  //physics_23_ (polygon)
  var bodyDefphysics_23_ = new b2BodyDef;
  var fixDefphysics_23_ = new b2FixtureDef;
  fixDefphysics_23_.density = 0.5;
  fixDefphysics_23_.friction = 0.5;
  fixDefphysics_23_.restitution = 0.4;
  bodyDefphysics_23_.type = b2Body.b2_staticBody;
  fixDefphysics_23_.shape = new b2PolygonShape;
  bodyDefphysics_23_.position.Set(240.709 / SCALE, 411.928 / SCALE);
  fixDefphysics_23_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-84.164 / SCALE, 22.127 / SCALE),
      new b2Vec2(-152.427 / SCALE, 0.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_23_).CreateFixture(fixDefphysics_23_);


  //polygon4378 (polygon)
  var bodyDefpolygon4378 = new b2BodyDef;
  var fixDefpolygon4378 = new b2FixtureDef;
  fixDefpolygon4378.density = 0.5;
  fixDefpolygon4378.friction = 0.5;
  fixDefpolygon4378.restitution = 0.4;
  bodyDefpolygon4378.type = b2Body.b2_staticBody;
  fixDefpolygon4378.shape = new b2PolygonShape;
  bodyDefpolygon4378.position.Set(296.412 / SCALE, 300.985 / SCALE);
  fixDefpolygon4378.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-19.644 / SCALE, 31.093 / SCALE),
      new b2Vec2(-12.857 / SCALE, 7.72 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4378).CreateFixture(fixDefpolygon4378);


  //polygon4380 (polygon)
  var bodyDefpolygon4380 = new b2BodyDef;
  var fixDefpolygon4380 = new b2FixtureDef;
  fixDefpolygon4380.density = 0.5;
  fixDefpolygon4380.friction = 0.5;
  fixDefpolygon4380.restitution = 0.4;
  bodyDefpolygon4380.type = b2Body.b2_staticBody;
  fixDefpolygon4380.shape = new b2PolygonShape;
  bodyDefpolygon4380.position.Set(320.561 / SCALE, 283.389 / SCALE);
  fixDefpolygon4380.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-24.149 / SCALE, 17.596 / SCALE),
      new b2Vec2(-15.582 / SCALE, 3.892 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4380).CreateFixture(fixDefpolygon4380);


  //polygon4382 (polygon)
  var bodyDefpolygon4382 = new b2BodyDef;
  var fixDefpolygon4382 = new b2FixtureDef;
  fixDefpolygon4382.density = 0.5;
  fixDefpolygon4382.friction = 0.5;
  fixDefpolygon4382.restitution = 0.4;
  bodyDefpolygon4382.type = b2Body.b2_staticBody;
  fixDefpolygon4382.shape = new b2PolygonShape;
  bodyDefpolygon4382.position.Set(369.254 / SCALE, 339.867 / SCALE);
  fixDefpolygon4382.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-48.693 / SCALE, -56.478 / SCALE),
      new b2Vec2(-37.008 / SCALE, -64.271 / SCALE),
      new b2Vec2(-23.377 / SCALE, -64.271 / SCALE),
  ], 4);
  world.CreateBody(bodyDefpolygon4382).CreateFixture(fixDefpolygon4382);


  //polygon4384 (polygon)
  var bodyDefpolygon4384 = new b2BodyDef;
  var fixDefpolygon4384 = new b2FixtureDef;
  fixDefpolygon4384.density = 0.5;
  fixDefpolygon4384.friction = 0.5;
  fixDefpolygon4384.restitution = 0.4;
  bodyDefpolygon4384.type = b2Body.b2_staticBody;
  fixDefpolygon4384.shape = new b2PolygonShape;
  bodyDefpolygon4384.position.Set(378.99 / SCALE, 349.605 / SCALE);
  fixDefpolygon4384.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-9.736 / SCALE, 0.0 / SCALE),
      new b2Vec2(-9.736 / SCALE, -9.738 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4384).CreateFixture(fixDefpolygon4384);


  //polygon4390 (polygon)
  var bodyDefpolygon4390 = new b2BodyDef;
  var fixDefpolygon4390 = new b2FixtureDef;
  fixDefpolygon4390.density = 0.5;
  fixDefpolygon4390.friction = 0.5;
  fixDefpolygon4390.restitution = 0.4;
  bodyDefpolygon4390.type = b2Body.b2_staticBody;
  fixDefpolygon4390.shape = new b2PolygonShape;
  bodyDefpolygon4390.position.Set(261.249 / SCALE, 352.261 / SCALE);
  fixDefpolygon4390.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-20.54 / SCALE, 59.667 / SCALE),
      new b2Vec2(-14.696 / SCALE, 26.557 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4390).CreateFixture(fixDefpolygon4390);


  //polygon4392 (polygon)
  var bodyDefpolygon4392 = new b2BodyDef;
  var fixDefpolygon4392 = new b2FixtureDef;
  fixDefpolygon4392.density = 0.5;
  fixDefpolygon4392.friction = 0.5;
  fixDefpolygon4392.restitution = 0.4;
  bodyDefpolygon4392.type = b2Body.b2_staticBody;
  fixDefpolygon4392.shape = new b2PolygonShape;
  bodyDefpolygon4392.position.Set(276.768 / SCALE, 332.078 / SCALE);
  fixDefpolygon4392.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-15.519 / SCALE, 20.183 / SCALE),
      new b2Vec2(-8.793 / SCALE, 0.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4392).CreateFixture(fixDefpolygon4392);


  //polygon4398 (polygon)
  var bodyDefpolygon4398 = new b2BodyDef;
  var fixDefpolygon4398 = new b2FixtureDef;
  fixDefpolygon4398.density = 0.5;
  fixDefpolygon4398.friction = 0.5;
  fixDefpolygon4398.restitution = 0.4;
  bodyDefpolygon4398.type = b2Body.b2_staticBody;
  fixDefpolygon4398.shape = new b2PolygonShape;
  bodyDefpolygon4398.position.Set(11.601 / SCALE, 184.092 / SCALE);
  fixDefpolygon4398.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(7.444 / SCALE, 20.403 / SCALE),
      new b2Vec2(12.572 / SCALE, 46.711 / SCALE),
      new b2Vec2(-8.142 / SCALE, 0.0 / SCALE),
  ], 4);
  world.CreateBody(bodyDefpolygon4398).CreateFixture(fixDefpolygon4398);


  //polygon4400 (polygon)
  var bodyDefpolygon4400 = new b2BodyDef;
  var fixDefpolygon4400 = new b2FixtureDef;
  fixDefpolygon4400.density = 0.5;
  fixDefpolygon4400.friction = 0.5;
  fixDefpolygon4400.restitution = 0.4;
  bodyDefpolygon4400.type = b2Body.b2_staticBody;
  fixDefpolygon4400.shape = new b2PolygonShape;
  bodyDefpolygon4400.position.Set(36.743 / SCALE, 252.227 / SCALE);
  fixDefpolygon4400.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-12.57 / SCALE, -0.874 / SCALE),
      new b2Vec2(-12.57 / SCALE, -20.194 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4400).CreateFixture(fixDefpolygon4400);


  //polygon4402 (polygon)
  var bodyDefpolygon4402 = new b2BodyDef;
  var fixDefpolygon4402 = new b2FixtureDef;
  fixDefpolygon4402.density = 0.5;
  fixDefpolygon4402.friction = 0.5;
  fixDefpolygon4402.restitution = 0.4;
  bodyDefpolygon4402.type = b2Body.b2_staticBody;
  fixDefpolygon4402.shape = new b2PolygonShape;
  bodyDefpolygon4402.position.Set(48.057 / SCALE, 343.764 / SCALE);
  fixDefpolygon4402.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-11.314 / SCALE, -3.709 / SCALE),
      new b2Vec2(-11.314 / SCALE, -91.537 / SCALE),
      new b2Vec2(-1.259 / SCALE, -23.371 / SCALE),
  ], 4);
  world.CreateBody(bodyDefpolygon4402).CreateFixture(fixDefpolygon4402);


  //polygon4404 (polygon)
  var bodyDefpolygon4404 = new b2BodyDef;
  var fixDefpolygon4404 = new b2FixtureDef;
  fixDefpolygon4404.density = 0.5;
  fixDefpolygon4404.friction = 0.5;
  fixDefpolygon4404.restitution = 0.4;
  bodyDefpolygon4404.type = b2Body.b2_staticBody;
  fixDefpolygon4404.shape = new b2PolygonShape;
  bodyDefpolygon4404.position.Set(0 / SCALE, 171.928 / SCALE);
  fixDefpolygon4404.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(3.459 / SCALE, 0.252 / SCALE),
      new b2Vec2(3.459 / SCALE, 12.164 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4404).CreateFixture(fixDefpolygon4404);


  //polygon4406 (polygon)
  var bodyDefpolygon4406 = new b2BodyDef;
  var fixDefpolygon4406 = new b2FixtureDef;
  fixDefpolygon4406.density = 0.5;
  fixDefpolygon4406.friction = 0.5;
  fixDefpolygon4406.restitution = 0.4;
  bodyDefpolygon4406.type = b2Body.b2_staticBody;
  fixDefpolygon4406.shape = new b2PolygonShape;
  bodyDefpolygon4406.position.Set(54.34 / SCALE, 355.449 / SCALE);
  fixDefpolygon4406.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-6.283 / SCALE, -3.188 / SCALE),
      new b2Vec2(-6.283 / SCALE, -11.685 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4406).CreateFixture(fixDefpolygon4406);


  //polygon4408 (polygon)
  var bodyDefpolygon4408 = new b2BodyDef;
  var fixDefpolygon4408 = new b2FixtureDef;
  fixDefpolygon4408.density = 0.5;
  fixDefpolygon4408.friction = 0.5;
  fixDefpolygon4408.restitution = 0.4;
  bodyDefpolygon4408.type = b2Body.b2_staticBody;
  fixDefpolygon4408.shape = new b2PolygonShape;
  bodyDefpolygon4408.position.Set(71.941 / SCALE, 390.504 / SCALE);
  fixDefpolygon4408.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-17.601 / SCALE, -1.539 / SCALE),
      new b2Vec2(-17.601 / SCALE, -35.055 / SCALE),
      new b2Vec2(-10.058 / SCALE, -35.055 / SCALE),
  ], 4);
  world.CreateBody(bodyDefpolygon4408).CreateFixture(fixDefpolygon4408);


  //polygon4410 (polygon)
  var bodyDefpolygon4410 = new b2BodyDef;
  var fixDefpolygon4410 = new b2FixtureDef;
  fixDefpolygon4410.density = 0.5;
  fixDefpolygon4410.friction = 0.5;
  fixDefpolygon4410.restitution = 0.4;
  bodyDefpolygon4410.type = b2Body.b2_staticBody;
  fixDefpolygon4410.shape = new b2PolygonShape;
  bodyDefpolygon4410.position.Set(88.282 / SCALE, 411.928 / SCALE);
  fixDefpolygon4410.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-16.341 / SCALE, -1.192 / SCALE),
      new b2Vec2(-16.341 / SCALE, -21.424 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4410).CreateFixture(fixDefpolygon4410);


  //physics_66_ (polygon)
  var bodyDefphysics_66_ = new b2BodyDef;
  var fixDefphysics_66_ = new b2FixtureDef;
  fixDefphysics_66_.density = 0.5;
  fixDefphysics_66_.friction = 0.5;
  fixDefphysics_66_.restitution = 0.4;
  bodyDefphysics_66_.type = b2Body.b2_staticBody;
  fixDefphysics_66_.shape = new b2PolygonShape;
  bodyDefphysics_66_.position.Set(340.709 / SCALE, 545.928 / SCALE);
  fixDefphysics_66_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(78.0 / SCALE, 132.0 / SCALE),
      new b2Vec2(21.895 / SCALE, 73.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_66_).CreateFixture(fixDefphysics_66_);


  //physics_65_ (polygon)
  var bodyDefphysics_65_ = new b2BodyDef;
  var fixDefphysics_65_ = new b2FixtureDef;
  fixDefphysics_65_.density = 0.5;
  fixDefphysics_65_.friction = 0.5;
  fixDefphysics_65_.restitution = 0.4;
  bodyDefphysics_65_.type = b2Body.b2_staticBody;
  fixDefphysics_65_.shape = new b2PolygonShape;
  bodyDefphysics_65_.position.Set(223.959 / SCALE, 545.928 / SCALE);
  fixDefphysics_65_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(116.75 / SCALE, 0.0 / SCALE),
      new b2Vec2(62.631 / SCALE, 16.072 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_65_).CreateFixture(fixDefphysics_65_);


  //physics_64_ (polygon)
  var bodyDefphysics_64_ = new b2BodyDef;
  var fixDefphysics_64_ = new b2FixtureDef;
  fixDefphysics_64_.density = 0.5;
  fixDefphysics_64_.friction = 0.5;
  fixDefphysics_64_.restitution = 0.4;
  bodyDefphysics_64_.type = b2Body.b2_staticBody;
  fixDefphysics_64_.shape = new b2PolygonShape;
  bodyDefphysics_64_.position.Set(223.959 / SCALE, 669.928 / SCALE);
  fixDefphysics_64_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(0.0 / SCALE, -124.0 / SCALE),
      new b2Vec2(21.04 / SCALE, -58.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_64_).CreateFixture(fixDefphysics_64_);


  //physics_63_ (polygon)
  var bodyDefphysics_63_ = new b2BodyDef;
  var fixDefphysics_63_ = new b2FixtureDef;
  fixDefphysics_63_.density = 0.5;
  fixDefphysics_63_.friction = 0.5;
  fixDefphysics_63_.restitution = 0.4;
  bodyDefphysics_63_.type = b2Body.b2_staticBody;
  fixDefphysics_63_.shape = new b2PolygonShape;
  bodyDefphysics_63_.position.Set(120.999 / SCALE, 669.928 / SCALE);
  fixDefphysics_63_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(102.96 / SCALE, 0.0 / SCALE),
      new b2Vec2(54.576 / SCALE, 14.286 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_63_).CreateFixture(fixDefphysics_63_);


  //physics_62_ (polygon)
  var bodyDefphysics_62_ = new b2BodyDef;
  var fixDefphysics_62_ = new b2FixtureDef;
  fixDefphysics_62_.density = 0.5;
  fixDefphysics_62_.friction = 0.5;
  fixDefphysics_62_.restitution = 0.4;
  bodyDefphysics_62_.type = b2Body.b2_staticBody;
  fixDefphysics_62_.shape = new b2PolygonShape;
  bodyDefphysics_62_.position.Set(30.709 / SCALE, 669.928 / SCALE);
  fixDefphysics_62_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(90.29 / SCALE, 0.0 / SCALE),
      new b2Vec2(45.145 / SCALE, 13.786 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_62_).CreateFixture(fixDefphysics_62_);


  //physics_61_ (polygon)
  var bodyDefphysics_61_ = new b2BodyDef;
  var fixDefphysics_61_ = new b2FixtureDef;
  fixDefphysics_61_.density = 0.5;
  fixDefphysics_61_.friction = 0.5;
  fixDefphysics_61_.restitution = 0.4;
  bodyDefphysics_61_.type = b2Body.b2_staticBody;
  fixDefphysics_61_.shape = new b2PolygonShape;
  bodyDefphysics_61_.position.Set(30.709 / SCALE, 562 / SCALE);
  fixDefphysics_61_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(0.0 / SCALE, 107.928 / SCALE),
      new b2Vec2(-15.21 / SCALE, 53.928 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_61_).CreateFixture(fixDefphysics_61_);


  //physics_60_ (polygon)
  var bodyDefphysics_60_ = new b2BodyDef;
  var fixDefphysics_60_ = new b2FixtureDef;
  fixDefphysics_60_.density = 0.5;
  fixDefphysics_60_.friction = 0.5;
  fixDefphysics_60_.restitution = 0.4;
  bodyDefphysics_60_.type = b2Body.b2_staticBody;
  fixDefphysics_60_.shape = new b2PolygonShape;
  bodyDefphysics_60_.position.Set(30.709 / SCALE, 456.928 / SCALE);
  fixDefphysics_60_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(0.0 / SCALE, 105.072 / SCALE),
      new b2Vec2(-19.21 / SCALE, 56.572 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_60_).CreateFixture(fixDefphysics_60_);


  //physics_59_ (polygon)
  var bodyDefphysics_59_ = new b2BodyDef;
  var fixDefphysics_59_ = new b2FixtureDef;
  fixDefphysics_59_.density = 0.5;
  fixDefphysics_59_.friction = 0.5;
  fixDefphysics_59_.restitution = 0.4;
  bodyDefphysics_59_.type = b2Body.b2_staticBody;
  fixDefphysics_59_.shape = new b2PolygonShape;
  bodyDefphysics_59_.position.Set(127.999 / SCALE, 456.928 / SCALE);
  fixDefphysics_59_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-97.29 / SCALE, 0.0 / SCALE),
      new b2Vec2(-57.0 / SCALE, -13.5 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_59_).CreateFixture(fixDefphysics_59_);


  //physics_58_ (polygon)
  var bodyDefphysics_58_ = new b2BodyDef;
  var fixDefphysics_58_ = new b2FixtureDef;
  fixDefphysics_58_.density = 0.5;
  fixDefphysics_58_.friction = 0.5;
  fixDefphysics_58_.restitution = 0.4;
  bodyDefphysics_58_.type = b2Body.b2_staticBody;
  fixDefphysics_58_.shape = new b2PolygonShape;
  bodyDefphysics_58_.position.Set(223.959 / SCALE, 456.928 / SCALE);
  fixDefphysics_58_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-95.96 / SCALE, 0.0 / SCALE),
      new b2Vec2(-51.48 / SCALE, -13.5 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_58_).CreateFixture(fixDefphysics_58_);


  //physics_57_ (polygon)
  var bodyDefphysics_57_ = new b2BodyDef;
  var fixDefphysics_57_ = new b2FixtureDef;
  fixDefphysics_57_.density = 0.5;
  fixDefphysics_57_.friction = 0.5;
  fixDefphysics_57_.restitution = 0.4;
  bodyDefphysics_57_.type = b2Body.b2_staticBody;
  fixDefphysics_57_.shape = new b2PolygonShape;
  bodyDefphysics_57_.position.Set(296.709 / SCALE, 497.928 / SCALE);
  fixDefphysics_57_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-72.75 / SCALE, 0.0 / SCALE),
      new b2Vec2(-72.75 / SCALE, -41.0 / SCALE),
      new b2Vec2(0.0 / SCALE, -109.0 / SCALE),
  ], 4);
  var physics_57_ = world.CreateBody(bodyDefphysics_57_);
  physics_57_.CreateFixture(fixDefphysics_57_);


  //physics_56_ (polygon)
  var bodyDefphysics_56_ = new b2BodyDef;
  var fixDefphysics_56_ = new b2FixtureDef;
  fixDefphysics_56_.density = 0.5;
  fixDefphysics_56_.friction = 0.5;
  fixDefphysics_56_.restitution = 0.4;
  bodyDefphysics_56_.type = b2Body.b2_staticBody;
  fixDefphysics_56_.shape = new b2PolygonShape;
  bodyDefphysics_56_.position.Set(426.762 / SCALE, 388.965 / SCALE);
  fixDefphysics_56_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-130.053 / SCALE, -0.037 / SCALE),
      new b2Vec2(-60.763 / SCALE, -14.887 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_56_).CreateFixture(fixDefphysics_56_);


  //physics_55_ (polygon)
  var bodyDefphysics_55_ = new b2BodyDef;
  var fixDefphysics_55_ = new b2FixtureDef;
  fixDefphysics_55_.density = 0.5;
  fixDefphysics_55_.friction = 0.5;
  fixDefphysics_55_.restitution = 0.4;
  bodyDefphysics_55_.type = b2Body.b2_staticBody;
  fixDefphysics_55_.shape = new b2PolygonShape;
  bodyDefphysics_55_.position.Set(536.5 / SCALE, 388.928 / SCALE);
  fixDefphysics_55_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-109.738 / SCALE, 0.037 / SCALE),
      new b2Vec2(-59.552 / SCALE, -12.428 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_55_).CreateFixture(fixDefphysics_55_);


  //physics_54_ (polygon)
  var bodyDefphysics_54_ = new b2BodyDef;
  var fixDefphysics_54_ = new b2FixtureDef;
  fixDefphysics_54_.density = 0.5;
  fixDefphysics_54_.friction = 0.5;
  fixDefphysics_54_.restitution = 0.4;
  bodyDefphysics_54_.type = b2Body.b2_staticBody;
  fixDefphysics_54_.shape = new b2PolygonShape;
  bodyDefphysics_54_.position.Set(674.708 / SCALE, 388.928 / SCALE);
  fixDefphysics_54_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-138.208 / SCALE, 0.0 / SCALE),
      new b2Vec2(-79.097 / SCALE, -14.85 / SCALE),
  ], 3);
  world.CreateBody(bodyDefphysics_54_).CreateFixture(fixDefphysics_54_);


  //polygon4546 (polygon)
  var bodyDefpolygon4546 = new b2BodyDef;
  var fixDefpolygon4546 = new b2FixtureDef;
  fixDefpolygon4546.density = 0.5;
  fixDefpolygon4546.friction = 0.5;
  fixDefpolygon4546.restitution = 0.4;
  bodyDefpolygon4546.type = b2Body.b2_dynamicBody;
  fixDefpolygon4546.shape = new b2PolygonShape;
  bodyDefpolygon4546.position.Set(648.019 / SCALE, 319.478 / SCALE);
  fixDefpolygon4546.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(6.277 / SCALE, -10.874 / SCALE),
      new b2Vec2(12.555 / SCALE, 0.0 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4546).CreateFixture(fixDefpolygon4546);


  //physics_75_ (polygon)
  var bodyDefphysics_75_ = new b2BodyDef;
  var fixDefphysics_75_ = new b2FixtureDef;
  fixDefphysics_75_.density = 0.5;
  fixDefphysics_75_.friction = 0.5;
  fixDefphysics_75_.restitution = 0.4;
  bodyDefphysics_75_.type = b2Body.b2_dynamicBody;
  fixDefphysics_75_.shape = new b2PolygonShape;
  bodyDefphysics_75_.position.Set(295.023 / SCALE, 502.4 / SCALE);
  fixDefphysics_75_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(45.897 / SCALE, 0.0 / SCALE),
      new b2Vec2(1.897 / SCALE, 1.896 / SCALE),
  ], 3);
  var hatch2 = world.CreateBody(bodyDefphysics_75_);
  hatch2.CreateFixture(fixDefphysics_75_);


  //polygon4557 (polygon)
  var bodyDefpolygon4557 = new b2BodyDef;
  var fixDefpolygon4557 = new b2FixtureDef;
  fixDefpolygon4557.density = 0.5;
  fixDefpolygon4557.friction = 0.5;
  fixDefpolygon4557.restitution = 0.4;
  bodyDefpolygon4557.type = b2Body.b2_dynamicBody;
  fixDefpolygon4557.shape = new b2PolygonShape;
  bodyDefpolygon4557.position.Set(615.964 / SCALE, 331.137 / SCALE);
  fixDefpolygon4557.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(7.248 / SCALE, 0.0 / SCALE),
      new b2Vec2(10.873 / SCALE, 6.278 / SCALE),
      new b2Vec2(7.248 / SCALE, 12.556 / SCALE),
      new b2Vec2(0.0 / SCALE, 12.556 / SCALE),
      new b2Vec2(-3.625 / SCALE, 6.278 / SCALE),
  ], 6);
  world.CreateBody(bodyDefpolygon4557).CreateFixture(fixDefpolygon4557);


  //polygon4587 (polygon)
  var bodyDefpolygon4587 = new b2BodyDef;
  var fixDefpolygon4587 = new b2FixtureDef;
  fixDefpolygon4587.density = 0.5;
  fixDefpolygon4587.friction = 0.5;
  fixDefpolygon4587.restitution = 0.4;
  bodyDefpolygon4587.type = b2Body.b2_staticBody;
  fixDefpolygon4587.shape = new b2PolygonShape;
  bodyDefpolygon4587.position.Set(93.906 / SCALE, 668.86 / SCALE);
  fixDefpolygon4587.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(14.218 / SCALE, -79.357 / SCALE),
      new b2Vec2(38.475 / SCALE, -79.357 / SCALE),
      new b2Vec2(52.441 / SCALE, 0.0 / SCALE),
  ], 4);
  world.CreateBody(bodyDefpolygon4587).CreateFixture(fixDefpolygon4587);


  //polygon4600 (polygon)
  var bodyDefpolygon4600 = new b2BodyDef;
  var fixDefpolygon4600 = new b2FixtureDef;
  fixDefpolygon4600.density = 0.5;
  fixDefpolygon4600.friction = 0.5;
  fixDefpolygon4600.restitution = 0.4;
  bodyDefpolygon4600.type = b2Body.b2_dynamicBody;
  fixDefpolygon4600.shape = new b2PolygonShape;
  bodyDefpolygon4600.position.Set(197.715 / SCALE, 306.856 / SCALE);
  fixDefpolygon4600.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(3.805 / SCALE, -11.652 / SCALE),
      new b2Vec2(6.25 / SCALE, 0.0 / SCALE),
  ], 3);
  var polygon4600 = world.CreateBody(bodyDefpolygon4600);
  polygon4600.CreateFixture(fixDefpolygon4600);


  //polygon4665 (polygon)
  var bodyDefpolygon4665 = new b2BodyDef;
  var fixDefpolygon4665 = new b2FixtureDef;
  fixDefpolygon4665.density = 0.5;
  fixDefpolygon4665.friction = 0.5;
  fixDefpolygon4665.restitution = 0.4;
  bodyDefpolygon4665.type = b2Body.b2_dynamicBody;
  fixDefpolygon4665.shape = new b2PolygonShape;
  bodyDefpolygon4665.position.Set(1214.646 / SCALE, 542.657 / SCALE);
  fixDefpolygon4665.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-1.645 / SCALE, -12.886 / SCALE),
      new b2Vec2(8.784 / SCALE, -12.886 / SCALE),
      new b2Vec2(7.142 / SCALE, 0.0 / SCALE),
  ], 4);
  var polygon4665 = world.CreateBody(bodyDefpolygon4665);
  polygon4665.CreateFixture(fixDefpolygon4665);


  //physics_69_ (polygon)
  var bodyDefphysics_69_ = new b2BodyDef;
  var fixDefphysics_69_ = new b2FixtureDef;
  fixDefphysics_69_.density = 0.5;
  fixDefphysics_69_.friction = 0.5;
  fixDefphysics_69_.restitution = 0.1;
  bodyDefphysics_69_.type = b2Body.b2_dynamicBody;
  fixDefphysics_69_.shape = new b2PolygonShape;
  bodyDefphysics_69_.position.Set(1211.71 / SCALE, 362.448 / SCALE);
  fixDefphysics_69_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-0.00500000000011 / SCALE, 45.894 / SCALE),
      new b2Vec2(-1.897 / SCALE, 44.0 / SCALE),
  ], 3);
  var physics_69_ = world.CreateBody(bodyDefphysics_69_);
  physics_69_.CreateFixture(fixDefphysics_69_);


  //physics_70_ (polygon)
  var bodyDefphysics_70_ = new b2BodyDef;
  var fixDefphysics_70_ = new b2FixtureDef;
  fixDefphysics_70_.density = 0.5;
  fixDefphysics_70_.friction = 0.5;
  fixDefphysics_70_.restitution = 0.1;
  bodyDefphysics_70_.type = b2Body.b2_dynamicBody;
  fixDefphysics_70_.shape = new b2PolygonShape;
  bodyDefphysics_70_.position.Set(1112.703 / SCALE, 362.445 / SCALE);
  fixDefphysics_70_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(1.894 / SCALE, 44.0 / SCALE),
      new b2Vec2(0.00400000000013 / SCALE, 45.899 / SCALE),
  ], 3);
  var physics_70_ = world.CreateBody(bodyDefphysics_70_);
  physics_70_.CreateFixture(fixDefphysics_70_);


  //polygon4721 (polygon)
  var bodyDefpolygon4721 = new b2BodyDef;
  var fixDefpolygon4721 = new b2FixtureDef;
  fixDefpolygon4721.density = 0.5;
  fixDefpolygon4721.friction = 0.5;
  fixDefpolygon4721.restitution = 0.4;
  bodyDefpolygon4721.type = b2Body.b2_dynamicBody;
  fixDefpolygon4721.shape = new b2PolygonShape;
  bodyDefpolygon4721.position.Set(145.861 / SCALE, 410.159 / SCALE);
  fixDefpolygon4721.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(14.217 / SCALE, -79.356 / SCALE),
      new b2Vec2(38.474 / SCALE, -79.356 / SCALE),
      new b2Vec2(52.44 / SCALE, 0.0 / SCALE),
  ], 4);
  var polygon4721 = world.CreateBody(bodyDefpolygon4721);
  polygon4721.CreateFixture(fixDefpolygon4721);


  //polygon4873 (polygon)
  var bodyDefpolygon4873 = new b2BodyDef;
  var fixDefpolygon4873 = new b2FixtureDef;
  fixDefpolygon4873.density = 0.5;
  fixDefpolygon4873.friction = 0.5;
  fixDefpolygon4873.restitution = 0.4;
  bodyDefpolygon4873.type = b2Body.b2_dynamicBody;
  fixDefpolygon4873.shape = new b2PolygonShape;
  bodyDefpolygon4873.position.Set(864.634 / SCALE, 329.441 / SCALE);
  fixDefpolygon4873.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(5.809 / SCALE, 0.0 / SCALE),
      new b2Vec2(9.119 / SCALE, 6.509 / SCALE),
      new b2Vec2(-2.125 / SCALE, 6.509 / SCALE),
  ], 4);
  var polygon4873 = world.CreateBody(bodyDefpolygon4873);
  polygon4873.CreateFixture(fixDefpolygon4873);


  //polygon4899 (polygon)
  var bodyDefpolygon4899 = new b2BodyDef;
  var fixDefpolygon4899 = new b2FixtureDef;
  fixDefpolygon4899.density = 0.5;
  fixDefpolygon4899.friction = 0.5;
  fixDefpolygon4899.restitution = 0.4;
  bodyDefpolygon4899.type = b2Body.b2_dynamicBody;
  fixDefpolygon4899.shape = new b2PolygonShape;
  bodyDefpolygon4899.position.Set(1063.628 / SCALE, 402.527 / SCALE);
  fixDefpolygon4899.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(3.928 / SCALE, -23.011 / SCALE),
      new b2Vec2(16.905 / SCALE, -28.817 / SCALE),
      new b2Vec2(16.905 / SCALE, -8.588 / SCALE),
  ], 4);
  var polygon4899 = world.CreateBody(bodyDefpolygon4899);
  polygon4899.CreateFixture(fixDefpolygon4899);


  //polygon4917 (polygon)
  var bodyDefpolygon4917 = new b2BodyDef;
  var fixDefpolygon4917 = new b2FixtureDef;
  fixDefpolygon4917.density = 0.5;
  fixDefpolygon4917.friction = 0.5;
  fixDefpolygon4917.restitution = 0.4;
  bodyDefpolygon4917.type = b2Body.b2_dynamicBody;
  fixDefpolygon4917.shape = new b2PolygonShape;
  bodyDefpolygon4917.position.Set(712.449 / SCALE, 327.885 / SCALE);
  fixDefpolygon4917.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(7.332 / SCALE, 0.0 / SCALE),
      new b2Vec2(11.051 / SCALE, 8.768 / SCALE),
      new b2Vec2(-3.766 / SCALE, 8.768 / SCALE),
  ], 4);
  var polygon4917 = world.CreateBody(bodyDefpolygon4917);
  polygon4917.CreateFixture(fixDefpolygon4917);


  //polyline4931 (polygon)
  var bodyDefpolyline4931 = new b2BodyDef;
  var fixDefpolyline4931 = new b2FixtureDef;
  fixDefpolyline4931.density = 1.0;
  fixDefpolyline4931.friction = 0.5;
  fixDefpolyline4931.restitution = 0.4;
  bodyDefpolyline4931.type = b2Body.b2_dynamicBody;
  fixDefpolyline4931.shape = new b2PolygonShape;
  bodyDefpolyline4931.position.Set(1094.863 / SCALE, 393.366 / SCALE);
  fixDefpolyline4931.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(12.793 / SCALE, 0.0 / SCALE),
      new b2Vec2(15.519 / SCALE, 11.238 / SCALE),
      new b2Vec2(-2.729 / SCALE, 11.238 / SCALE),
      new b2Vec2(-0.086 / SCALE, 0.351 / SCALE),
  ], 5);
  var polyline4931 = world.CreateBody(bodyDefpolyline4931);
  polyline4931.CreateFixture(fixDefpolyline4931);


  //polyline4945 (polygon)
  var bodyDefpolyline4945 = new b2BodyDef;
  var fixDefpolyline4945 = new b2FixtureDef;
  fixDefpolyline4945.density = 1.0;
  fixDefpolyline4945.friction = 0.5;
  fixDefpolyline4945.restitution = 0.4;
  bodyDefpolyline4945.type = b2Body.b2_dynamicBody;
  fixDefpolyline4945.shape = new b2PolygonShape;
  bodyDefpolyline4945.position.Set(636.423 / SCALE, 662.247 / SCALE);
  fixDefpolyline4945.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(12.793 / SCALE, 0.0 / SCALE),
      new b2Vec2(15.522 / SCALE, 11.239 / SCALE),
      new b2Vec2(-2.726 / SCALE, 11.239 / SCALE),
      new b2Vec2(-0.086 / SCALE, 0.352 / SCALE),
  ], 5);
  var polyline4945 = world.CreateBody(bodyDefpolyline4945);
  polyline4945.CreateFixture(fixDefpolyline4945);


  //polyline4959 (polygon)
  var bodyDefpolyline4959 = new b2BodyDef;
  var fixDefpolyline4959 = new b2FixtureDef;
  fixDefpolyline4959.density = 1.0;
  fixDefpolyline4959.friction = 0.5;
  fixDefpolyline4959.restitution = 0.4;
  bodyDefpolyline4959.type = b2Body.b2_dynamicBody;
  fixDefpolyline4959.shape = new b2PolygonShape;
  bodyDefpolyline4959.position.Set(1157.867 / SCALE, 615.575 / SCALE);
  fixDefpolyline4959.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(12.793 / SCALE, 0.0 / SCALE),
      new b2Vec2(15.521 / SCALE, 11.239 / SCALE),
      new b2Vec2(-2.727 / SCALE, 11.239 / SCALE),
      new b2Vec2(-0.086 / SCALE, 0.352 / SCALE),
  ], 5);
  var polyline4959 = world.CreateBody(bodyDefpolyline4959);
  polyline4959.CreateFixture(fixDefpolyline4959);


  //polyline4973 (polygon)
  var bodyDefpolyline4973 = new b2BodyDef;
  var fixDefpolyline4973 = new b2FixtureDef;
  fixDefpolyline4973.density = 1;
  fixDefpolyline4973.friction = 0.5;
  fixDefpolyline4973.restitution = 0.4;
  bodyDefpolyline4973.type = b2Body.b2_dynamicBody;
  fixDefpolyline4973.shape = new b2PolygonShape;
  bodyDefpolyline4973.position.Set(687.3 / SCALE, 336.609 / SCALE);
  fixDefpolyline4973.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(12.793 / SCALE, 0.0 / SCALE),
      new b2Vec2(15.522 / SCALE, 11.237 / SCALE),
      new b2Vec2(-2.726 / SCALE, 11.237 / SCALE),
      new b2Vec2(-0.0859999999999 / SCALE, 0.35 / SCALE),
  ], 5);
  var polyline4973 = world.CreateBody(bodyDefpolyline4973);
  polyline4973.CreateFixture(fixDefpolyline4973);


  //polyline4987 (polygon)
  var bodyDefpolyline4987 = new b2BodyDef;
  var fixDefpolyline4987 = new b2FixtureDef;
  fixDefpolyline4987.density = 1.0;
  fixDefpolyline4987.friction = 0.5;
  fixDefpolyline4987.restitution = 0.4;
  bodyDefpolyline4987.type = b2Body.b2_dynamicBody;
  fixDefpolyline4987.shape = new b2PolygonShape;
  bodyDefpolyline4987.position.Set(833.178 / SCALE, 336.648 / SCALE);
  fixDefpolyline4987.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(12.793 / SCALE, 0.0 / SCALE),
      new b2Vec2(15.52 / SCALE, 11.237 / SCALE),
      new b2Vec2(-2.728 / SCALE, 11.237 / SCALE),
      new b2Vec2(-0.086 / SCALE, 0.351 / SCALE),
  ], 5);
  var polyline4987 = world.CreateBody(bodyDefpolyline4987);
  polyline4987.CreateFixture(fixDefpolyline4987);


  //polygon4994 (polygon)
  var bodyDefpolygon4994 = new b2BodyDef;
  var fixDefpolygon4994 = new b2FixtureDef;
  fixDefpolygon4994.density = 0.5;
  fixDefpolygon4994.friction = 0.5;
  fixDefpolygon4994.restitution = 0.4;
  bodyDefpolygon4994.type = b2Body.b2_staticBody;
  fixDefpolygon4994.shape = new b2PolygonShape;
  bodyDefpolygon4994.position.Set(667.724 / SCALE, 659.004 / SCALE);
  fixDefpolygon4994.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(27.0 / SCALE, 0.0 / SCALE),
      new b2Vec2(13.557 / SCALE, 2.767 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4994).CreateFixture(fixDefpolygon4994);


  //polygon4996 (polygon)
  var bodyDefpolygon4996 = new b2BodyDef;
  var fixDefpolygon4996 = new b2FixtureDef;
  fixDefpolygon4996.density = 0.5;
  fixDefpolygon4996.friction = 0.5;
  fixDefpolygon4996.restitution = 0.4;
  bodyDefpolygon4996.type = b2Body.b2_staticBody;
  fixDefpolygon4996.shape = new b2PolygonShape;
  bodyDefpolygon4996.position.Set(698.724 / SCALE, 653.678 / SCALE);
  fixDefpolygon4996.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-0.838 / SCALE, 3.899 / SCALE),
      new b2Vec2(-4.0 / SCALE, 5.326 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4996).CreateFixture(fixDefpolygon4996);


  //polygon4998 (polygon)
  var bodyDefpolygon4998 = new b2BodyDef;
  var fixDefpolygon4998 = new b2FixtureDef;
  fixDefpolygon4998.density = 0.5;
  fixDefpolygon4998.friction = 0.5;
  fixDefpolygon4998.restitution = 0.4;
  bodyDefpolygon4998.type = b2Body.b2_staticBody;
  fixDefpolygon4998.shape = new b2PolygonShape;
  bodyDefpolygon4998.position.Set(667.724 / SCALE, 659.004 / SCALE);
  fixDefpolygon4998.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-3.463 / SCALE, -1.983 / SCALE),
      new b2Vec2(-4.0 / SCALE, -5.326 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon4998).CreateFixture(fixDefpolygon4998);


  //physics_77_ (polygon)
  var bodyDefphysics_77_ = new b2BodyDef;
  var fixDefphysics_77_ = new b2FixtureDef;
  fixDefphysics_77_.density = 0.5;
  fixDefphysics_77_.friction = 0.5;
  fixDefphysics_77_.restitution = 0.4;
  bodyDefphysics_77_.type = b2Body.b2_staticBody;
  fixDefphysics_77_.shape = new b2PolygonShape;
  bodyDefphysics_77_.position.Set(665.724 / SCALE, 676.269 / SCALE);
  fixDefphysics_77_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(2.877 / SCALE, -8.989 / SCALE),
      new b2Vec2(8.537 / SCALE, -13.847 / SCALE),
      new b2Vec2(15.5 / SCALE, -15.5 / SCALE),
      new b2Vec2(23.748 / SCALE, -13.126 / SCALE),
      new b2Vec2(28.928 / SCALE, -7.75 / SCALE),
      new b2Vec2(31.0 / SCALE, 0.0 / SCALE),
  ], 7);
  world.CreateBody(bodyDefphysics_77_).CreateFixture(fixDefphysics_77_);


  //polygon5017 (polygon)
  var bodyDefpolygon5017 = new b2BodyDef;
  var fixDefpolygon5017 = new b2FixtureDef;
  fixDefpolygon5017.density = 0.5;
  fixDefpolygon5017.friction = 0.5;
  fixDefpolygon5017.restitution = 0.4;
  bodyDefpolygon5017.type = b2Body.b2_staticBody;
  fixDefpolygon5017.shape = new b2PolygonShape;
  bodyDefpolygon5017.position.Set(1218.708 / SCALE, 388.059 / SCALE);
  fixDefpolygon5017.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(27.0 / SCALE, 0.0 / SCALE),
      new b2Vec2(13.555 / SCALE, 2.766 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon5017).CreateFixture(fixDefpolygon5017);


  //polygon5019 (polygon)
  var bodyDefpolygon5019 = new b2BodyDef;
  var fixDefpolygon5019 = new b2FixtureDef;
  fixDefpolygon5019.density = 0.5;
  fixDefpolygon5019.friction = 0.5;
  fixDefpolygon5019.restitution = 0.4;
  bodyDefpolygon5019.type = b2Body.b2_staticBody;
  fixDefpolygon5019.shape = new b2PolygonShape;
  bodyDefpolygon5019.position.Set(1249.708 / SCALE, 382.732 / SCALE);
  fixDefpolygon5019.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-0.837 / SCALE, 3.901 / SCALE),
      new b2Vec2(-4.0 / SCALE, 5.327 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon5019).CreateFixture(fixDefpolygon5019);


  //polygon5021 (polygon)
  var bodyDefpolygon5021 = new b2BodyDef;
  var fixDefpolygon5021 = new b2FixtureDef;
  fixDefpolygon5021.density = 0.5;
  fixDefpolygon5021.friction = 0.5;
  fixDefpolygon5021.restitution = 0.4;
  bodyDefpolygon5021.type = b2Body.b2_staticBody;
  fixDefpolygon5021.shape = new b2PolygonShape;
  bodyDefpolygon5021.position.Set(1218.708 / SCALE, 388.059 / SCALE);
  fixDefpolygon5021.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(-3.462 / SCALE, -1.984 / SCALE),
      new b2Vec2(-4.0 / SCALE, -5.327 / SCALE),
  ], 3);
  world.CreateBody(bodyDefpolygon5021).CreateFixture(fixDefpolygon5021);


  //physics_72_ (polygon)
  var bodyDefphysics_72_ = new b2BodyDef;
  var fixDefphysics_72_ = new b2FixtureDef;
  fixDefphysics_72_.density = 0.5;
  fixDefphysics_72_.friction = 0.5;
  fixDefphysics_72_.restitution = 0.4;
  bodyDefphysics_72_.type = b2Body.b2_staticBody;
  fixDefphysics_72_.shape = new b2PolygonShape;
  bodyDefphysics_72_.position.Set(1216.708 / SCALE, 405.323 / SCALE);
  fixDefphysics_72_.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(2.877 / SCALE, -8.988 / SCALE),
      new b2Vec2(8.538 / SCALE, -13.846 / SCALE),
      new b2Vec2(15.5 / SCALE, -15.5 / SCALE),
      new b2Vec2(23.749 / SCALE, -13.126 / SCALE),
      new b2Vec2(28.924 / SCALE, -7.75 / SCALE),
      new b2Vec2(31.0 / SCALE, 0.0 / SCALE),
  ], 7);
  world.CreateBody(bodyDefphysics_72_).CreateFixture(fixDefphysics_72_);


  //polygon5040 (polygon)
  var bodyDefpolygon5040 = new b2BodyDef;
  var fixDefpolygon5040 = new b2FixtureDef;
  fixDefpolygon5040.density = 0.5;
  fixDefpolygon5040.friction = 0.5;
  fixDefpolygon5040.restitution = 0.4;
  bodyDefpolygon5040.type = b2Body.b2_dynamicBody;
  fixDefpolygon5040.shape = new b2PolygonShape;
  bodyDefpolygon5040.position.Set(613.365 / SCALE, 340.789 / SCALE);
  fixDefpolygon5040.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(5.148 / SCALE, 5.734 / SCALE),
      new b2Vec2(4.5 / SCALE, 6.197 / SCALE),
      new b2Vec2(-0.604 / SCALE, 0.842 / SCALE),
  ], 4);
  var polygon5040 = world.CreateBody(bodyDefpolygon5040);
  polygon5040.CreateFixture(fixDefpolygon5040);


  //polygon5042 (polygon)
  var bodyDefpolygon5042 = new b2BodyDef;
  var fixDefpolygon5042 = new b2FixtureDef;
  fixDefpolygon5042.density = 0.5;
  fixDefpolygon5042.friction = 0.5;
  fixDefpolygon5042.restitution = 0.4;
  bodyDefpolygon5042.type = b2Body.b2_dynamicBody;
  fixDefpolygon5042.shape = new b2PolygonShape;
  bodyDefpolygon5042.position.Set(618.513 / SCALE, 346.523 / SCALE);
  fixDefpolygon5042.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(50.567 / SCALE, -30.824 / SCALE),
      new b2Vec2(25.957 / SCALE, -12.033 / SCALE),
  ], 3);
  var polygon5042 = world.CreateBody(bodyDefpolygon5042);
  polygon5042.CreateFixture(fixDefpolygon5042);


  //polygon5048 (polygon)
  var bodyDefpolygon5048 = new b2BodyDef;
  var fixDefpolygon5048 = new b2FixtureDef;
  fixDefpolygon5048.density = 0.5;
  fixDefpolygon5048.friction = 0.5;
  fixDefpolygon5048.restitution = 0.4;
  bodyDefpolygon5048.type = b2Body.b2_staticBody;
  fixDefpolygon5048.shape = new b2PolygonShape;
  bodyDefpolygon5048.position.Set(642.824 / SCALE, 332.037 / SCALE);
  fixDefpolygon5048.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(6.273 / SCALE, 15.92 / SCALE),
      new b2Vec2(-6.283 / SCALE, 15.92 / SCALE),
  ], 3);
  var polygon5048 = world.CreateBody(bodyDefpolygon5048);
  polygon5048.CreateFixture(fixDefpolygon5048);

  var chopperDensity = 2;

  /* BEGIN CHOPPER-FACERIGHT */
  //circle_17_ (circle)
  var bodyDefcircle_17_ = new b2BodyDef;
  var fixDefcircle_17_ = new b2FixtureDef;
  fixDefcircle_17_.filter.categoryBits = 2;
  fixDefcircle_17_.filter.maskBits = 1;
  fixDefcircle_17_.density = chopperDensity;
  fixDefcircle_17_.friction = 0.5;
  fixDefcircle_17_.restitution = 0;
  bodyDefcircle_17_.type = b2Body.b2_dynamicBody;
  fixDefcircle_17_.shape = new b2CircleShape(8.501 / SCALE);
  bodyDefcircle_17_.position.Set(175.378 / SCALE, 279.76 / SCALE);
  chopperFaceRight = world.CreateBody(bodyDefcircle_17_)
    chopperFaceRight.CreateFixture(fixDefcircle_17_);
  var chopperFaceRight_X = bodyDefcircle_17_.position.x * SCALE;
  var chopperFaceRight_Y = bodyDefcircle_17_.position.y * SCALE;

  //polygon5132 (polygon)
  var bodyDefpolygon5132 = new b2BodyDef;
  var fixDefpolygon5132 = new b2FixtureDef;
  fixDefpolygon5132.filter.categoryBits = 2;
  fixDefpolygon5132.filter.maskBits = 1;
  fixDefpolygon5132.density = chopperDensity;
  fixDefpolygon5132.friction = 0.5;
  fixDefpolygon5132.restitution = 0;
  bodyDefpolygon5132.type = b2Body.b2_dynamicBody;
  fixDefpolygon5132.shape = new b2PolygonShape;
  bodyDefpolygon5132.position.Set(168.211 / SCALE, 271.747 / SCALE);

  var x_offset = chopperFaceRight_X - 168.211; //1st
  var y_offset = chopperFaceRight_Y - 271.747; //2nd

  fixDefpolygon5132.shape.SetAsArray([
      new b2Vec2((0 - x_offset) / SCALE, (0 - y_offset) / SCALE),
      new b2Vec2((-26.848 - x_offset) / SCALE, (-5.102 - y_offset) / SCALE),
      new b2Vec2((27.503 - x_offset) / SCALE, (-5.102 - y_offset) / SCALE),
  ], 3);
  var polygon5132 = world.CreateBody(bodyDefpolygon5132);
  chopperFaceRight.CreateFixture(fixDefpolygon5132);chopperFaceRight_Y


  //polygon5127 (polygon)
  var bodyDefpolygon5127 = new b2BodyDef;
  var fixDefpolygon5127 = new b2FixtureDef;
  fixDefpolygon5127.filter.categoryBits = 2;
  fixDefpolygon5127.filter.maskBits = 1;
  fixDefpolygon5127.density = chopperDensity;
  fixDefpolygon5127.friction = 0.5;
  fixDefpolygon5127.restitution = 0;
  bodyDefpolygon5127.type = b2Body.b2_dynamicBody;
  fixDefpolygon5127.shape = new b2PolygonShape;
  bodyDefpolygon5127.position.Set(168.537 / SCALE, 284.984 / SCALE);

  x_offset = chopperFaceRight_X - 168.537; //1st
  y_offset = chopperFaceRight_Y - 284.984; //2nd

  fixDefpolygon5127.shape.SetAsArray([
      new b2Vec2((0 - x_offset) / SCALE, (0 - y_offset) / SCALE),
      new b2Vec2((-29.605 - x_offset) / SCALE, (-5.584 - y_offset) / SCALE),
      new b2Vec2((-0.326 - x_offset) / SCALE, (-6.938 - y_offset) / SCALE),
  ], 3);
  var polygon5127 = world.CreateBody(bodyDefpolygon5127);
  chopperFaceRight.CreateFixture(fixDefpolygon5127);


  //polygon5129 (polygon)
  var bodyDefpolygon5129 = new b2BodyDef;
  var fixDefpolygon5129 = new b2FixtureDef;
  fixDefpolygon5129.filter.categoryBits = 2;
  fixDefpolygon5129.filter.maskBits = 1;
  fixDefpolygon5129.density = chopperDensity;
  fixDefpolygon5129.friction = 0.5;
  fixDefpolygon5129.restitution = 0;
  bodyDefpolygon5129.type = b2Body.b2_dynamicBody;
  fixDefpolygon5129.shape = new b2PolygonShape;
  bodyDefpolygon5129.position.Set(188.939 / SCALE, 287.156 / SCALE);

  x_offset = chopperFaceRight_X - 188.939; //1st
  y_offset = chopperFaceRight_Y - 287.156; //2nd

  fixDefpolygon5129.shape.SetAsArray([
      new b2Vec2((0 - x_offset) / SCALE, (0 - y_offset) / SCALE),
      new b2Vec2((-4.992 - x_offset) / SCALE, (2.612 - y_offset) / SCALE),
      new b2Vec2((-28.964 - x_offset) / SCALE, (2.671 - y_offset) / SCALE),
  ], 3);
  var polygon5129 = world.CreateBody(bodyDefpolygon5129);
  chopperFaceRight.CreateFixture(fixDefpolygon5129);


  //circle_18_ (circle)
  var bodyDefcircle_18_ = new b2BodyDef;
  var fixDefcircle_18_ = new b2FixtureDef;
  fixDefcircle_18_.filter.categoryBits = 2;
  fixDefcircle_18_.filter.maskBits = 1;
  fixDefcircle_18_.density = chopperDensity;
  fixDefcircle_18_.friction = 0.5;
  fixDefcircle_18_.restitution = 0;
  bodyDefcircle_18_.type = b2Body.b2_dynamicBody;

  x_offset = 138.932 - chopperFaceRight_X; //1st
  y_offset = 279.761 - chopperFaceRight_Y; //2nd

  var circleShape = new b2CircleShape(5.174 / SCALE);
  circleShape.m_p.Set(x_offset / SCALE, y_offset / SCALE);

  fixDefcircle_18_.shape = circleShape;
  bodyDefcircle_18_.position.Set(138.932 / SCALE, 279.761 / SCALE);
  var circle_18_ = world.CreateBody(bodyDefcircle_18_);
  chopperFaceRight.CreateFixture(fixDefcircle_18_);

  chopperFaceRight.angularDamping = 3;
  chopperFaceRight.SetActive(true);
  /* END CHOPPER-FACERIGHT */


  /* BEGIN CHOPPER-FACELEFT */
  //circle_6_ (circle)
  var bodyDefcircle_6_ = new b2BodyDef;
  var fixDefcircle_6_ = new b2FixtureDef;
  fixDefcircle_6_.filter.categoryBits = 2;
  fixDefcircle_6_.filter.maskBits = 1;
  fixDefcircle_6_.density = chopperDensity;
  fixDefcircle_6_.friction = 0.5;
  fixDefcircle_6_.restitution = 0;
  bodyDefcircle_6_.type = b2Body.b2_dynamicBody;
  fixDefcircle_6_.shape = new b2CircleShape(8.501 / SCALE);
  bodyDefcircle_6_.position.Set(161.12 / SCALE, 279.949 / SCALE);
  chopperFaceLeft = world.CreateBody(bodyDefcircle_6_);
  chopperFaceLeft.CreateFixture(fixDefcircle_6_);
  var chopperFaceLeft_X = bodyDefcircle_6_.position.x * SCALE;
  var chopperFaceLeft_Y = bodyDefcircle_6_.position.y * SCALE;

  //polygon5118 (polygon)
  var bodyDefpolygon5118 = new b2BodyDef;
  var fixDefpolygon5118 = new b2FixtureDef;
  fixDefpolygon5118.filter.categoryBits = 2;
  fixDefpolygon5118.filter.maskBits = 1;
  fixDefpolygon5118.density = chopperDensity;
  fixDefpolygon5118.friction = 50;
  fixDefpolygon5118.restitution = 0;
  bodyDefpolygon5118.type = b2Body.b2_dynamicBody;
  fixDefpolygon5118.shape = new b2PolygonShape;
  bodyDefpolygon5118.position.Set(168.287 / SCALE, 278.234 / SCALE);

  x_offset = chopperFaceLeft_X - 168.287; //1st
  y_offset = chopperFaceLeft_Y - 278.234; //2nd

  fixDefpolygon5118.shape.SetAsArray([
      new b2Vec2((0 - x_offset) / SCALE, (0 - y_offset) / SCALE),
      new b2Vec2((29.283 - x_offset) / SCALE, (1.357 - y_offset) / SCALE),
      new b2Vec2((-0.326 - x_offset) / SCALE, (6.941 - y_offset) / SCALE),
  ], 3);
  var polygon5118 = world.CreateBody(bodyDefpolygon5118);
  chopperFaceLeft.CreateFixture(fixDefpolygon5118);


  //polygon5120 (polygon)
  var bodyDefpolygon5120 = new b2BodyDef;
  var fixDefpolygon5120 = new b2FixtureDef;
  fixDefpolygon5120.filter.categoryBits = 2;
  fixDefpolygon5120.filter.maskBits = 1;
  fixDefpolygon5120.density = chopperDensity;
  fixDefpolygon5120.friction = 0.5;
  fixDefpolygon5120.restitution = 0;
  bodyDefpolygon5120.type = b2Body.b2_dynamicBody;
  fixDefpolygon5120.shape = new b2PolygonShape;
  bodyDefpolygon5120.position.Set(176.527 / SCALE, 290.018 / SCALE);

  x_offset = chopperFaceLeft_X - 176.527; //1st
  y_offset = chopperFaceLeft_Y - 290.018; //2nd

  fixDefpolygon5120.shape.SetAsArray([
      new b2Vec2((0 - x_offset) / SCALE, (0 - y_offset) / SCALE),
      new b2Vec2((-23.972 - x_offset) / SCALE, (-0.062 - y_offset) / SCALE),
      new b2Vec2((-28.839 - x_offset) / SCALE, (-2.672 - y_offset) / SCALE),
  ], 3);
  var polygon5120 = world.CreateBody(bodyDefpolygon5120);
  chopperFaceLeft.CreateFixture(fixDefpolygon5120);


  //polygon5123 (polygon)
  var bodyDefpolygon5123 = new b2BodyDef;
  var fixDefpolygon5123 = new b2FixtureDef;
  fixDefpolygon5123.filter.categoryBits = 2;
  fixDefpolygon5123.filter.maskBits = 1;
  fixDefpolygon5123.density = chopperDensity;
  fixDefpolygon5123.friction = 0.5;
  fixDefpolygon5123.restitution = 0;
  bodyDefpolygon5123.type = b2Body.b2_dynamicBody;
  fixDefpolygon5123.shape = new b2PolygonShape;
  bodyDefpolygon5123.position.Set(140.785 / SCALE, 266.833 / SCALE);

  x_offset = chopperFaceLeft_X - 140.785; //1st
  y_offset = chopperFaceLeft_Y - 266.833; //2nd

  fixDefpolygon5123.shape.SetAsArray([
      new b2Vec2((0 - x_offset) / SCALE, (0 - y_offset) / SCALE),
      new b2Vec2((54.354 - x_offset) / SCALE, (0.0 - y_offset) / SCALE),
      new b2Vec2((27.502 - x_offset) / SCALE, (5.105 - y_offset) / SCALE),
  ], 3);
  var polygon5123 = world.CreateBody(bodyDefpolygon5123);
  chopperFaceLeft.CreateFixture(fixDefpolygon5123);


  //circle_10_ (circle)
  var bodyDefcircle_10_ = new b2BodyDef;
  var fixDefcircle_10_ = new b2FixtureDef;
  fixDefcircle_10_.filter.categoryBits = 2;
  fixDefcircle_10_.filter.maskBits = 1;
  fixDefcircle_10_.density = chopperDensity;
  fixDefcircle_10_.friction = 0.5;
  fixDefcircle_10_.restitution = 0;
  bodyDefcircle_10_.type = b2Body.b2_dynamicBody;

  x_offset = 197.57 - chopperFaceLeft_X; //1st
  y_offset = 279.95 - chopperFaceLeft_Y; //2nd

  var circleShape = new b2CircleShape(5.174 / SCALE);
  circleShape.m_p.Set(x_offset / SCALE, y_offset / SCALE); 

  fixDefcircle_10_.shape = circleShape;
  bodyDefcircle_10_.position.Set(197.57 / SCALE, 279.95 / SCALE);
  var circle_10_ = world.CreateBody(bodyDefcircle_10_);
  chopperFaceLeft.CreateFixture(fixDefcircle_10_);

  chopperFaceLeft.angularDamping = 3;
  chopperFaceLeft.SetActive(false);
  /* END CHOPPER-FACELEFT */


  /* BEGIN HOOKCENTER */
  //hookcenter (circle)
  var hookDensity = 0.025;
  var bodyDefhookcenter = new b2BodyDef;
  var fixDefhookcenter = new b2FixtureDef;
  fixDefhookcenter.filter.categoryBits = 2;
  fixDefhookcenter.filter.maskBits = 1;
  fixDefhookcenter.density = hookDensity;
  fixDefhookcenter.friction = 0;
  fixDefhookcenter.restitution = 0;
  bodyDefhookcenter.type = b2Body.b2_dynamicBody;
  fixDefhookcenter.shape = new b2CircleShape(3.624 / SCALE);
  bodyDefhookcenter.position.Set(168.064 / SCALE, 295.065 / SCALE);
  hookcenter = world.CreateBody(bodyDefhookcenter);
  hookcenter.CreateFixture(fixDefhookcenter);
  hookcenter.SetLinearDamping(1);
  hookcenter.SetActive(true);
  /* END HOOKCENTER */


  /* BEGIN RIGHTHOOK */
  //polygon4525 (polygon)
  var bodyDefpolygon4525 = new b2BodyDef;
  var fixDefpolygon4525 = new b2FixtureDef;
  fixDefpolygon4525.density = hookDensity;
  fixDefpolygon4525.friction = 5;
  fixDefpolygon4525.restitution = 0.4;
  bodyDefpolygon4525.type = b2Body.b2_dynamicBody;
  fixDefpolygon4525.shape = new b2PolygonShape;
  bodyDefpolygon4525.position.Set(168.064 / SCALE, 295.066 / SCALE);
  fixDefpolygon4525.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(0.61 / SCALE, -2.134 / SCALE),
      new b2Vec2(14.435 / SCALE, 2.58 / SCALE),
  ], 3);
  var righthook = world.CreateBody(bodyDefpolygon4525)
  righthook.CreateFixture(fixDefpolygon4525);
  var polygon4525_x = bodyDefpolygon4525.position.x * SCALE;
  var polygon4525_y = bodyDefpolygon4525.position.y * SCALE;


  //polygon4527 (polygon)
  var bodyDefpolygon4527 = new b2BodyDef;
  var fixDefpolygon4527 = new b2FixtureDef;
  fixDefpolygon4527.density = hookDensity;
  fixDefpolygon4527.friction = 5;
  fixDefpolygon4527.restitution = 0.4;
  bodyDefpolygon4527.type = b2Body.b2_dynamicBody;
  fixDefpolygon4527.shape = new b2PolygonShape;
  bodyDefpolygon4527.position.Set(178.374 / SCALE, 306.413 / SCALE);

  x_offset = polygon4525_x - 178.374; //1st
  y_offset = polygon4525_y - 306.413; //2nd

  fixDefpolygon4527.shape.SetAsArray([
      new b2Vec2((0 - x_offset) / SCALE, (0 - y_offset) / SCALE),
      new b2Vec2((2.19 - x_offset) / SCALE, (-9.115 - y_offset) / SCALE),
      new b2Vec2((4.125 - x_offset) / SCALE, (-8.767 - y_offset) / SCALE),
  ], 3);
  var polygon4527 = world.CreateBody(bodyDefpolygon4527);
  righthook.CreateFixture(fixDefpolygon4527);
  righthook.SetActive(true);
  /* END RIGHTHOOK */


  /* BEGIN LEFTHOOK */
  //polygon4535 (polygon)
  var bodyDefpolygon4535 = new b2BodyDef;
  var fixDefpolygon4535 = new b2FixtureDef;
  fixDefpolygon4535.density = hookDensity;
  fixDefpolygon4535.friction = 5;
  fixDefpolygon4535.restitution = 0.4;
  bodyDefpolygon4535.type = b2Body.b2_dynamicBody;
  fixDefpolygon4535.shape = new b2PolygonShape;
  bodyDefpolygon4535.position.Set(167.613 / SCALE, 293.087 / SCALE);
  fixDefpolygon4535.shape.SetAsArray([
      new b2Vec2(0, 0),
      new b2Vec2(0.451 / SCALE, 2.138 / SCALE),
      new b2Vec2(-13.988 / SCALE, 4.715 / SCALE),
  ], 3);
  var lefthook = world.CreateBody(bodyDefpolygon4535)
  lefthook.CreateFixture(fixDefpolygon4535);
  var polygon4535_x = bodyDefpolygon4535.position.x * SCALE;
  var polygon4535_y = bodyDefpolygon4535.position.y * SCALE;


  //polygon4537 (polygon)
  var bodyDefpolygon4537 = new b2BodyDef;
  var fixDefpolygon4537 = new b2FixtureDef;
  fixDefpolygon4537.density = hookDensity;
  fixDefpolygon4537.friction = 5;
  fixDefpolygon4537.restitution = 0.4;
  bodyDefpolygon4537.type = b2Body.b2_dynamicBody;
  fixDefpolygon4537.shape = new b2PolygonShape;
  bodyDefpolygon4537.position.Set(155.564 / SCALE, 297.456 / SCALE);

  x_offset = polygon4535_x - 155.564; //1st
  y_offset = polygon4535_y - 297.456; //2nd

  fixDefpolygon4537.shape.SetAsArray([
      new b2Vec2((0 - x_offset) / SCALE, (0 - y_offset) / SCALE),
      new b2Vec2((2.186 - x_offset) / SCALE, (9.11 - y_offset) / SCALE),
      new b2Vec2((-1.939 - x_offset) / SCALE, (0.346 - y_offset) / SCALE),
  ], 3);
  var polygon4537 = world.CreateBody(bodyDefpolygon4537)
  lefthook.CreateFixture(fixDefpolygon4537);
  lefthook.SetActive(true);
  /* END LEFTHOOK */


  /* BEGIN JOINTS */

  //boyhead && polygon4600 (boy)
  var joint = new b2WeldJointDef();   
  joint.Initialize(polygon4600, boyhead, polygon4600.GetWorldCenter());
  world.CreateJoint(joint);


  //rect4719 && polygon4721 (starttower)
  var joint = new b2WeldJointDef();   
  joint.Initialize(rect4719, polygon4721, polygon4721.GetWorldCenter());
  world.CreateJoint(joint);


  //polygon5040 && polygon5042 (swingbase)
  var joint = new b2WeldJointDef();   
  joint.Initialize(polygon5040, polygon5042, polygon5040.GetWorldCenter());
  world.CreateJoint(joint);


  //polygon5048 && polygon5042 (swinghinge)
  var joint = new b2RevoluteJointDef();   
  joint.Initialize(polygon5048, polygon5042, polygon5048.GetWorldCenter());
  world.CreateJoint(joint);


  //circle_20_ && polyline4931 (weight)
  var joint = new b2WeldJointDef();   
  joint.Initialize(circle_20_, polyline4931, polyline4931.GetWorldCenter());
  world.CreateJoint(joint);


  //circle_21_ && polyline4945 (weight_1_)
  var joint = new b2WeldJointDef();   
  joint.Initialize(circle_21_, polyline4945, polyline4945.GetWorldCenter());
  world.CreateJoint(joint);


  //circle_12_ && polyline4959 (weight_2_)
  var joint = new b2WeldJointDef();   
  joint.Initialize(circle_12_, polyline4959, polyline4959.GetWorldCenter());
  world.CreateJoint(joint);


  //circle_13_ && polyline4973 (weight_3_)
  var joint = new b2WeldJointDef();   
  joint.Initialize(circle_13_, polyline4973, polyline4973.GetWorldCenter());
  world.CreateJoint(joint);


  //circle_14_ && polyline4987 (weight_4_)
  var joint = new b2WeldJointDef();   
  joint.Initialize(circle_14_, polyline4987, polyline4987.GetWorldCenter());
  world.CreateJoint(joint);


  //wheel && polygon4899 (bicycle and tiny wheel)
  var joint = new b2RevoluteJointDef();   
  joint.Initialize(wheel, polygon4899, wheel.GetWorldCenter());
  world.CreateJoint(joint);


  //circle_16_ && polygon4899 (bicycle and big wheel)
  var joint = new b2RevoluteJointDef();   
  joint.Initialize(circle_16_, polygon4899, circle_16_.GetWorldCenter());
  world.CreateJoint(joint);  


  //rect4915 && polygon4917 (carbody and cabin)
  var joint = new b2WeldJointDef();   
  joint.Initialize(rect4915, polygon4917, polygon4917.GetWorldCenter());
  world.CreateJoint(joint);


  //wheel_3_ && rect4915 (carbody and wheel1)
  var joint = new b2RevoluteJointDef();   
  joint.Initialize(wheel_3_, rect4915, wheel_3_.GetWorldCenter());
  world.CreateJoint(joint);  


  //wheel_4_ && rect4915 (carbody and wheel2)
  var joint = new b2RevoluteJointDef();   
  joint.Initialize(wheel_4_, rect4915, wheel_4_.GetWorldCenter());
  world.CreateJoint(joint);


  //circle_8_ && polygon4665 (bigwheel and crank)
  var joint = new b2RevoluteJointDef();   
  joint.Initialize(circle_8_, polygon4665, circle_8_.GetWorldCenter());
  joint.motorSpeed = Math.PI / 2;
  joint.maxMotorTorque = 10;
  joint.enableMotor = true;
  world.CreateJoint(joint);


  //circle_9_ && polygon4665 (tinywheel and crank)
  var joint = new b2WeldJointDef();   
  joint.Initialize(circle_9_, polygon4665, circle_9_.GetWorldCenter());
  world.CreateJoint(joint);


  //rect4871 && polygon4873 (stroller)
  var joint = new b2WeldJointDef();   
  joint.Initialize(rect4871, polygon4873, polygon4873.GetWorldCenter());
  world.CreateJoint(joint);


  //circle_19_ && rect4871 (stroller)
  var joint = new b2WeldJointDef();   
  joint.Initialize(rect4871, circle_19_, circle_19_.GetWorldCenter());
  world.CreateJoint(joint);


  //wheel_1_ && rect4871 (stroller)
  var joint = new b2RevoluteJointDef();   
  joint.Initialize(wheel_1_, rect4871, wheel_1_.GetWorldCenter());
  world.CreateJoint(joint);


  //wheel_2_ && rect4871 (stroller)
  var joint = new b2RevoluteJointDef();   
  joint.Initialize(wheel_2_, rect4871, wheel_2_.GetWorldCenter());
  world.CreateJoint(joint);


  //physics_35_ && physics_69_ (righthatch)
  var joint = new b2RevoluteJointDef();
  joint.bodyA = physics_35_;
  joint.bodyB = physics_69_;
  joint.localAnchorA.Set(-22.8955 / SCALE, -35.0 / SCALE);
  joint.localAnchorB.Set(-0.00500000000011 / SCALE, 45.894 / SCALE);
  joint.enableLimit = true;
  joint.lowerAngle = -Math.PI / 2;
  world.CreateJoint(joint);


  //physics_39_ && physics_70_ (lefthatch)
  var joint = new b2RevoluteJointDef();
  joint.bodyA = physics_39_;
  joint.bodyB = physics_70_;
  joint.localAnchorA.Set(47.0 / SCALE, -22.0 / SCALE);
  joint.localAnchorB.Set(0.00400000000013 / SCALE, 45.899 / SCALE);
  joint.enableLimit = true;
  joint.upperAngle = Math.PI / 2;
  world.CreateJoint(joint);


  //physics_57_ && hatch2 (hatch2)
  var joint = new b2RevoluteJointDef();
  joint.bodyA = physics_57_;
  joint.bodyB = hatch2;
  joint.localAnchorA.Set(0, 0);
  joint.localAnchorB.Set(0, 0);
  joint.enableLimit = true;
  joint.upperAngle = Math.PI / 2;
  world.CreateJoint(joint);


  //lefthook && hookcenter
  var lefthook_joint = new b2WeldJointDef();
  lefthook_joint.referenceAngle = 0.10 * (2 * Math.PI);
  lefthook_joint.bodyA = lefthook;
  lefthook_joint.bodyB = hookcenter;
  lefthook_joint.localAnchorA.Set(0, 2.186 / SCALE);
  lefthook_joint.localAnchorB.Set(0, 0);
  world.CreateJoint(lefthook_joint);


  //righthook && hookcenter
  var righthook_joint = new b2WeldJointDef();
  righthook_joint.referenceAngle = -0.10 * (2 * Math.PI);
  righthook_joint.bodyA = righthook;
  righthook_joint.bodyB = hookcenter;
  righthook_joint.localAnchorA.Set(0, 0);
  righthook_joint.localAnchorB.Set(0, 0);
  world.CreateJoint(righthook_joint);


  //distance joint for chopper and hookcenter
  hookJointDef = new b2DistanceJointDef();
  hookJointDef.bodyB = chopperFaceRight;
  hookJointDef.bodyA = hookcenter;
  hookJointDef.localAnchorA.Set(0, 0);
  hookJointDef.localAnchorB.Set(0 / SCALE, 8.501 / SCALE);
  hookJointDef.length = 0.5;
  hookJointDef.collideConnected = true;
  rope = world.CreateJoint(hookJointDef);
  /* END JOINTS */
}
