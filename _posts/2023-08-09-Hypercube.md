---
layout: post
title:  "Hypercube"
date:   2023-08-09 19:50:00 +0200
tags: arduino freetime tinkering
repository: Hypercube
---

So, I saw a transparent display on the web and I knew before, that this technology was possible. In fact, I've seen a video by Linus Tech Tips (*quick YouTube search*, I think it was [this one](https://www.youtube.com/watch?v=oPOhKULOL4o)) that featured this technique. And when I saw it for an effordable price, I couldn't resist and had to buy [one](https://www.waveshare.com/1.51inch-transparent-oled.htm). After the initial tinkering to get it to work, I wanted to try somethink more challenging. Before it arrived I made already some plans of what I could do with it. While I did not had the time and materials to do these ideas (still no progress made by the time of writing this...), I remembered a video of the coding train about the [hypercube](https://www.youtube.com/watch?v=XE3YDVdQSPo).

While watching it, Dan's energy catched me and I wanted to implement it using the Arduino IDE and bring this 4 dimensional cinematic experience to my transperent display. At first, I wanted to stay as close to Dan's code as possible to omit any possible errors due to the new language. But quickly I realised, that some essential features of the Processing language are not present in Arduino and I, therefore, had to change my approach. I found some nice libraries to help me do the matrix calculations and I made the relevant matrix simplifications to have only as few operations as needed. You don't believe how happy I was to see the mathematics, I learned in University a year ago, applied to a real project of mine. 

With the math done, I only had to write the code down and connect the dots to draw the shapes on the screen. Done with the implementation I had a first look at the result and I was stunned by the result. But somehow I felt, I could do a little better. After some tweaking of the rotating axis and the speed of the roation I got a result, that I was really happy with. I even made a video of it, which you can see below.

{% include youtube.html id="ZFF1CO1Ako0" %}