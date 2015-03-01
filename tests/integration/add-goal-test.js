import Ember from 'ember';
import { test } from 'ember-qunit';
import { module } from 'qunit';
import startApp from '../helpers/start-app';

var App, store, user;

module('Integration - Add Goal', {
  setup: function() {
    App = startApp();
    store = App.__container__.lookup('store:main');
    user = store.createRecord('user');
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('add new goal', function(assert) {
  
  visit('/users/' + user.get('id'));
  click('button.new-goal');
  fillIn('input.goal-title', 'My new goal title');
  fillIn('input.goal-description', '05/14/2015');
  fillIn('input.goal-start-date', '05/18/2015');
  fillIn('input.goal-end-date', 'My new goal description.');
  fillIn('input.goal-quantity', '5');
  click('button.submit');

  andThen(function() {
    equal(find('ul.posts li:last').text(), 'My new goal title');
  });
});
