# Committen

[![Circle CI](https://circleci.com/gh/trayo/committen_ember.svg?style=svg)](https://circleci.com/gh/trayo/committen_ember)
[![Code Climate](https://codeclimate.com/github/trayo/committen_ember/badges/gpa.svg)](https://codeclimate.com/github/trayo/committen_ember)

Welcome to Committen! Committen is an Ember app with a Rails backend that allows users to track their Github commits. It also provides the user the ability to set up commit goals that they want to reach based on time frame, such as two commits per day. Future features will allow a user to sign up with their Twitter account and allow the user to easily post tweets regarding the status of their goals. The user can also set up e-mail notifications to remind them to meet their goals.

Created by: [Chandra Carney](https://github.com/chandracarney), [Sam Kuhlmann](https://github.com/skuhlmann) and [Travis Yoder](https://github.com/trayo)


## Requirements

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)


## Installation

* Clone the repo  
`$ git clone https://github.com/trayo/committen_ember`

* Change into the new directory:  
`$ cd committen_ember`

* Run Node and Bower installation commands  
`$ npm install`  
`$ bower install`


## Running / Development

* `ember server`
* Visit the app at [http://localhost:4200](http://localhost:4200).


## Running / Development with the Rails backend server

* `ember server --proxy http://localhost:3000`
* Visit the app at [http://localhost:4200](http://localhost:4200).


### Running Tests

* `ember test`
* `ember test --server`


### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

