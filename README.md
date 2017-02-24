# ecs-patternlab
A reusable UI patterns library that embraces the [Pattern Lab philosophy] (http://patternlab.io/) of atomic design.

The Pattern Lab is [Angular 2](https://angular.io) and TypeScript project, packaged with [npm](https://npmjs.org) and built with [angular-cli](https://github.com/angular/angular-cli). As part of angular-cli, this project uses webpack as a module loader and bundler.  See the [wiki]() for details on the Lab's architecture and how it integrates into client projects and applications.

## Build

To build, run, and interact with an instance of pattern lab:

 - List item
 - install the latest version of [node.js](https://nodejs.org), which includes [npm](https://docs.npmjs.com/getting-started/what-is-npm)
 - navigate to project's root directory (where package.json is) on the cmd line and enter the following command to download and install dependencies:
```
> npm install
```
Install the angular-cli globally to serve Pattern Lab with a lite server that will watch for local code changes and redeploy with on-the-fly updates.
```
> npm install -g @angular/cli
```

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

- See Development Server instructions below.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Running unit tests (TBD)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests (TBD)

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).