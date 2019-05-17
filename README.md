# Webpack build to develop a reactAPP
following the steps and base prosess of [Adeel Imran](https://medium.freecodecamp.org/how-to-combine-webpack-4-and-babel-7-to-create-a-fantastic-react-app-845797e036ff) for development 
## Objectives
* Setting up Webpack 4 with Babel 7 for React
* Support for .SCSS
* Development environment with HMR [For both .js & .scss]
* Production configuration
* Dividing your Webpack configuration into chunks
* Generating a visualizer in production build to check which chunk of code is how big and what are the dependencies of the chunks. Super useful.
* Support for static files
* Add support for async/await in our code
* Create a NodeJS server using ExpressJS for our production build
* Code Splitting
* Prettie code implementing by the estlint come from [Wesbos](https://github.com/wesbos/eslint-config-wesbos)
* Unit Test 

### Installing
has 2 configurations production and development
the first command generate the assets, and with vizualizer plugin, it generates a statistics.html file in the dist/ folder for you. Open the file, and you’ll see a graphic at dist/statistics.html
```
npm run prebuild
```
after that you can run a dev hot server to develop
```
npm run start
```
### Unit test 
this will run Jest and execute all the tests
```
npm run test 
```
 will run all the tests and keep on watch mode, so that when we make any changes to our test cases, it will execute those test cases again.
```
npm run test:watch
```

will generate a coverage report based on all the tests it executes, and give you a detailed coverage report in the root/coverage folder.
```
npm run test:coverage 
```
