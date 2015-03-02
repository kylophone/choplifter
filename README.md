#choplifter

Inside the <a href="http://en.wikipedia.org/wiki/Teenage_Engineering_OP-1">Teenage Engineering OP-1</a>, there's a beautiful little choplifter game. This is a javascript clone // still in-progress.

##demo
<b>Playable demo <a href = "http://104.236.207.104/">here!</a></b> Try pressing keys `d`, `f`, `j`, & `k`. You can also you use your mouse to toss the objects around. 

##lander.svg
It's pretty trival to unarchive and `binwalk` the firmware for the OP-1. Poke around the files and you'll find lots of interesting things. You'll see that all of the OP-1's display & animations are done with svg files. There's a file called `lander.svg` which lays out everything in the choplifter world in all it's glory.

##Box2D
Having the lander.svg image is nice, but it'd also be nice to know more about which physics engine TE's game uses. Fortunately, there's a few clues in the OP-1 firmware. If you run the `strings` command on the file called `OP1_vdk.ldr` you'll find that there's still quite a few ASCII strings hiding in the firmware. Most of this is probably debug info, but it tells us a lot about how the OP-1, and choplifter were built.

```
..\ext\Box2D\Source\Common\b2BlockAllocator.cpp:185 found
..\ext\Box2D\Source\Dynamics\b2Body.cpp:117 m_world->m_lock == false
..\ext\Box2D\Source\Dynamics\b2Body.cpp:240 m_world->m_lock == false
..\ext\Box2D\Source\Dynamics\b2Body.cpp:273 m_I > 0.0f
..\ext\Box2D\Source\Dynamics\b2Body.cpp:314 m_world->m_lock == false
..\ext\Box2D\Source\Dynamics\b2Body.cpp:26 world->m_lock == false
..\ext\Box2D\Source\Dynamics\b2Body.cpp:111 m_world->m_lock == false
```

##SVG-Box2dWeb
Rebuilding the choplifter world with all its objects and fixtures with Box2dWeb would require >2000 lines of javascript. Rather than coding this all out by hand, I decided to write a small Python script to parse all the circles, rectangles, and polygons in an SVG drawing. The same program also defines and initalizes a Box2dWeb world with all its physics bodies & fixtures. Check it out: <a href="https://github.com/kylophone/SVG-Box2dWeb">SVG-Box2dWeb</a>. About 95% of the code in `./js/choplifter.js` was generated using this script. 

##to-do
* implement claw
* implement scale & doors
* animate with original .svg
* implement sound


