import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/' }, function() {});

  this.route('user', { path: 'users/1' }, function() {
    this.resource('goal', function() {
      this.route('new');
    });
  });
});


export default Router;
