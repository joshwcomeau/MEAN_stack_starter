MEAN_stack_starter
==================

A ready-to-go initialized set of MEAN + SASS + Bower + Gulp + CSS Normalize.

<h2>File Structure</h2>

I've decided to go with a modularized, by-the-function style of file organization. Looks something like this:

public/
-- shared/                  // acts as reusable components or partials of our site
-- components/              // each component is treated as a mini Angular app
---- nerds/
------ views/
-------- nerds.index.html
-------- nerds.show.html
------ nerds.ctrl.js
------ nerds.module.js
------ nerds.service.js
-- assets/
---- img/                   // Images and icons for your app
---- css/                   // All styles and style related files (SCSS or LESS files)
---- js/                    // JavaScript files written for your app that are not for angular
---- libs/                  // Third-party libraries such as jQuery, Moment, Underscore, etc.
-- app.js
-- app.routes.js
-- index.html


<h2>In order to use me, update:</h2>

-> Package.json with the new app name/description.
-> Config/db.js with proper DB name and credentials
-> Our model name from 'Nerd' in app/models
-> Our /public/nerds folder and its files to reflect whatever model you want.
-> The back-end routes in /app/routes.js
-> The front-end routes in /public/appRoutes.js