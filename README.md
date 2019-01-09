# gitFinder


## Live demo
Live example: https://michau132.github.io/gitFinder/#/


## Installation

1. [`clone`](https://github.com/michau132/gitFinder.git) this repository and go into the project root
1. `yarn install` | `npm install` to install the website's npm dependencies

### Running locally

1. `yarn start | npm start` to start the hot-reloading development server 
1. `open http://localhost:3000` to open the site in your favorite browser - it should be done automaticlly

## Description
gitFinder is app which is showing profile from [github](https://github.com/). It is using [github API](https://developer.github.com/v3/) for fetching data for displaying user. If we change the url it would also search for user in github. It's show deatils, like: name, github login, email adress, and location and also  his repositories sorted by lasted update. With repositories we can open/hide single repository, open/hide multiple repositories, reseting to default view with button "Show All". With full coverage of tests made in [jest](https://jestjs.io/)

P.S. If you wants to open multiple windows in chrome you can do it  [here](chrome://settings/content/popups)


## Tech stack
+ react
+ mobx 
+ react-router
+ material-ui
+ styled components
+ jest

To run this app:

Clone this repo

npm start
