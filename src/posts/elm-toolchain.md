---
slug: "/a-simple-elm-toolchain"
title: "A simple Elm, SCSS toolchain"
short: "I wanted to build a simple Elm toolchain with other familiar tools."
date: "2019-10-28"
featuredImage: "../images/posts/elm-toolchain/elm-toolchain.jpg"
tags: ["webdev", "elm", "productivity"]
---

Recently I have been knee deep in Typescript, React and Redux code. It is what I write every day at work and I love it! Typescript feels like one of those love hate things. You hate it until you try it and then you feel like writing Javascript without types is modern day savagery.

One morning during my daily morning scroll through Twitter I found this [post](https://ohanhi.com/react-typescript-vs-elm.html). It talks about how if you use the stack I mentioned above (Typescript, React and Redux) that you would love [Elm](https://elm-lang.org/). I had looked at Elm before and although it interested me it never captured me enough to stick it out but this time I thought it might be different. This post is not about my journey into Elm as it is still in its infancy but about how I set up a simple project with Elm, SCSS and hot-reloading.

This post is not about my journey into Elm as it is still in its infancy. I am gonna run through how I set up a simple project with Elm, SCSS and hot-reloading. I realise there are lots of boilerplates out there but many of them just do too much. I want to learn in a simple understandable environment but with the perks of using something like CRA (create-react-app).

I required my starter package to do a few things.

1. Compile Elm
2. Compile SCSS
3. Create a dev server and hot reload
   I also wanted to stay away from the usual bundlers that we use in the JS world, like Webpack and Parcel. These tools are great but add a load of packages.

The project folder structure is as follows:

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/6dsvr5x0yt98ld4qk86a.png)

This is obviously personal taste, and this is how I like to set things up. SCSS folder structure is also personal taste but I use this as a [starting point](https://github.com/jim-at-jibba/grumpasaurus-scss).

Most of the action happens in the `package.json`. We run and build our project with a number of **npm scripts**.

## Elm

### Watching Elm

The first task we are gonna cover is the compilation of our Elm code. We also need the compiler to be able to watch for changes and recompile. This is standard in JS projects these days and so why should it be any different in Elm. We are going to be using a file watcher called chokidar-cli. This is the same file watcher used in many of the most popular bundlers and task runners. First, let’s install it:

```bash
 # npm
 npm install — save-dev chokidar-cli

 # yarn
 yarn add -D chokidar-cli

```

and then add the following to the scripts section of the **package.json**

```json
"scripts": {
   […]
   "watch:elm": "chokidar './src/**/*.elm' -c 'elm make ./src/Main.elm —
     output ./public/js/elm.compiled.js' — initial"
   […]
 }

```

Here we are using chokidar to watch for changes to any file matching this regex ./src/\*_/_.elm and then running the Elm make command `elm make ./src/Main.elm — output ./public/js/elm.compiled.js`

### Building Elm

While we are dealing with Elm, let’s write the script to build the Elm project. This is very similar to the script above except we won’t use **chokidar** as we are not watching for changes. We are also adding the `— optimize` flag so that the js output is minified and optimised.

```json
"scripts": {
   […]
   "build-elm": "elm make ./src/Main.elm — output
     ./public/js/elm.compiled.js — optimize",
  […]
 }
```

## SCSS

### Watching and building SCSS

Next, we are gonna tackle watching and building our scss files. When watching we want the scss to recompile when changes are made. We will be using [node-sass-chokidar](https://www.npmjs.com/package/node-sass-chokidar) for this. Let’s install the package:

```bash
 # npm
 npm install — save-dev node-sass-chokidar

 # yarn
 yarn add -D node-sass-chokidar
```

## Dev server and hot reloading

This would not be a serious modern frontend toolchain without a dev server and hot reloading. For this we are gonna use [browser-sync](https://www.browsersync.io/). Let’s install it.

```bash
 # npm
 npm install -g browser-sync

 # yarn
 yarn global add browser-sync
```

Let’s add another script. This once will start a server and watch all files in our **public** folder. Because the other watch scripts all compile into the public folder anytime we make any changes **browser-sync** will detect them and restart the server and refresh the browser.

```json
"scripts": {
   […]
   "dev-server": "browser-sync start — server 'public' — files
     'public/**/*.*'"
   […]
 }
```

## Tying it all together.

Let’s tie it all together with a build and start script. For these, we want to be able to run multiple npm scripts at once. For this we will use one last package — [npm-run-all](https://www.npmjs.com/package/npm-run-all). This allows you to run scripts sequentially or in parallel.

```bash
 # npm
 npm install — save-dev npm-run-all

 # yarn
 yarn add -D npm-run-all
```

With this installed we can write 2 final scripts. Let’s tackle the build script. We want to be able to compile both the scss and elm in a single command. All we do is pass the names on the scripts and we want them to run in parallel so we use the `-p` flag.

```json
"scripts": {
   […]
   "build": "npm-run-all -p build-css build-elm "
   […]
 }
```

The last script is the one we will use the most. This starts our dev server and compiles (with file watching) both the Elm and SCSS.

```json
"scripts": {
   […]
   "start": "npm-run-all -p watch-css watch:elm dev-server"
   […]
 }
```

And that is it. The complete scripts section should look like this:

```json
{
  "scripts": {
   "start": "npm-run-all -p watch-css watch:elm dev-server",
   "watch:elm": "chokidar './src/**/*.elm' -c 'elm make ./src/Main.elm - 
     output ./public/js/elm.compiled.js' - initial",
   "build-css": "node-sass-chokidar sass/ -o public/css",
   "watch-css": "npm run build-css && node-sass-chokidar sass/ -o
     public/css - watch - recursive",
   "build-elm": "elm make ./src/Main.elm - output
     ./public/js/elm.compiled.js - optimize",
   "build": "npm-run-all -p build-css build-elm ",
   "dev-server": "browser-sync start - server 'public' - files
     'public/**/*.*'"
   }
}
```

I am still really new to Elm development and I am sure there are better ways to build your projects but I wanted something simple that I could easily understand. I hope this helps in some way.

# Thanks for reading 🙏

If there is anything I have missed, or if there is a better way to do something then please let me know.

Check out our software focused podcast - [Salted Bytes](https://open.spotify.com/show/7IdlgpiDfYcOdCn57mPLvH?si=X1ArfHvqQXSOAfc1h7Y_Eg)
