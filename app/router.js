import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {path: '/' }, function() {});

  this.resource('users', function() {
    this.route('show', {path: ':user_id'});
  });

  // this.route('user', { path: 'users/:user_id' }, function() {
  //   this.resource('goal', function() {
  //     this.route('new');
  //   });
  // });
});


export default Router;
