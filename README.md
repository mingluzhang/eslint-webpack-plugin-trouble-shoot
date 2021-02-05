This is the repo for trouble shooting of eslint-plugin-webpack.

/Client/Project is the working directory. The project references files in /Client/Core.
The directory of /Client/OtherProject means there's another project which may reference /Client/Core as well.
So there should be no modification in /Client/Core.

The problem is,
- When using webpack4 + eslint-webpack-plugin + babel-loader, no error can be detected.

To start webpack, go to /Client/Project and run "npm run start".
The configuration for webpack is in /Client/Project/Configuration
The source codes have been simplified as much as possible. When focusing on the config issue of eslint-webpack-plugin, the meaning of source codes can be totally ignored.