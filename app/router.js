import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/' }, function(){});

  this.resource('users', { path: '/users' }, function () {
  });

});


export default Router;
