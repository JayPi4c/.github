---
layout: post
title:  "Configure Eclipse Snap with Lombok"
date:   2024-02-01 14:30:00 +0100
tags: Ubuntu Linux Snap Eclipse Lombok
---

Eclipse was the first real IDE I used to code in Java. This more or less changed to Intellij during the time I studied. But I still have reasons to come back to Eclipse from time to time. Using Ubuntu, I really like the convenience of just installing Eclipse with one command using snap. This is, it just takes the following command to have a fully working Eclipse IDE on your machine:

```bash
sudo snap install eclipse --classic
```

The problem with this way of installing Eclipse is, that it does not come with the Lombok plugin. Lombok is a really nice tool to reduce boilerplate code in Java. It does this by adding annotations to your code, which are then processed by the Lombok compiler. This is really nice, but it requires you to install the Lombok plugin for your IDE. This is not a problem, if you install Eclipse the normal way. But if you install it using snap, you have to do some extra steps to get it to work.

[This](https://www.xceno.io/posts/2019-05-15-install-lombok-to-eclipse-snap) website describes the steps you had to do to get it to work. But I also found an interesting thread on [Stackoverflow](https://stackoverflow.com/a/67207195) that describes a more convenient way to do it. In the thread, they mention, that an [update](https://github.com/snapcrafters/eclipse/pull/41) in the snap package of Eclipse allows to overwrite the `eclipse.ini` file. As this is the only thing we need to do, in order to get Lombok to work with Eclipse, we can do the following steps:
1. Install Eclipse using snap
2. Download Lombok jar file (you may already have the jar on your machine in the maven m2 folder)
3. Copy the default `eclipse.ini` file to `$SNAP_USER_DATA/eclipse.ini` (e.g. `~/snap/eclipse/XX/eclipse.ini` where XX is the version number of your Eclipse installation) (The default `eclipse.ini` file can be found in the `/snap/eclipse/XX/` folder)
4. Add the following line to the end of the `eclipse.ini` file:
    ```ini
    -javaagent:/path/to/lombok.jar
    ```

That's it! Now you can use Lombok with Eclipse installed using snap.