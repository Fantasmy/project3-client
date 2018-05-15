# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


Project 2 (liveBeats). Jenny. EXPRESS + ANGULAR

EXPRESS

MC (data models, controllers/routes)

DATA MODELS


Bar:
- _id: objectid
- barname	: string
- password: string
- venue: string
- imgUrl: trig
- phone number: number
- website: string
- location: {
	street: {
		type: String,
		required: true},
	number: {
		type: String,
		required: true},
	postcode: {
		type: Number,
		required: true},
	city: {
		type: String,
		required: true}


For maps:
- location: {
		type {
			Type: String,
			 (Address) → Coordinates: [Number]}
}

Event:
- bar_host: ObjectId 
- image: srcUrl
- title: string
- date: Date
- time: time
- type: enum: [“rock”, “rap”, “ska”, “classic”,”folklore”, “others”]
- description: string




USER STORIES
The user will see error 404 page if the page is not found
The user will be able to sign up
The user will be able to login
The user will be able to logout
The user will be able to create a new event
The user will be able to delete an event
The user will be able to update an event or profile
The user will be able to see event details
The user will be able to search events by type of music and date
The user will be able to see the list of the bar’s events





CONTROLLERS

Routes Auth:
Post / auth/ login
Post / auth/ signup
Post / auth / logout
Get / auth / me

Routes Events:
Post / events
Get / events / ?type= & date=   (req.query.type + req.query.date)
Get /events / :id
Put /events /:id
Delete /events /:id


ANGULAR (controllers?)

PAGES:
- home-page
- signup-page
- login-page
- event-create-page
- event-edit-page
- event-details-page
- bar-details-page


COMPONENTS:
- bar-card
- event-form
- search-form
- events-list


SERVICES:
- EventService:
	- create
	- listAll
	- update
	- delete
	- filter (by type and date)


- BarService:
	- create 
	- update 
	- delete


- AuthService:
	- post login
	- post signup 
	- post logout 


GUARDS SERVICES:
- init-auth-guard
- require-anon-guard
- require-user-guard



BACKLOG (TODO after the MVP is done)
- maps with address instead of coordinates
- search from day A to day B events
- upload images
- user login, to place likes on the bars or have favorite bars
- list the bar’s event
- mail suggestions