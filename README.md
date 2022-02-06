# bonk-modded-electron

 A simple desktop electron wrapper for bonk.io, a fun online game I tend to play a lot. I dunno how useful it'd be for other players, maybe they'd like the fullscreen of it, but it'll probably mostly just be for myself to play around with the source code of the game.

## Building

 This was built using `electron-forge`, [follow their instructions to build it on your machine if there isn't an executable provided for whatever operating system you're on](https://www.electronjs.org/docs/latest/tutorial/quick-start#package-and-distribute-your-application)

 In the project folder:

 ```batch
 npm install --save-dev @electron-forge/cli
 npx electron-forge import
 npm run make
 ```

 The built binaries will be in the `out/` directory.
