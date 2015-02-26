import {
  moduleForModel,
  test
} from 'ember-qunit';

import DS from 'ember-data';
import User from 'hot-streak/models/user';

moduleForModel('user', {
  needs: ['model:commit', 'model:goal']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it is an ember data model', function(assert) {
  assert.ok(this.subject() instanceof DS.Model);
});

test('it has a name property', function(assert) {
  var property = User.metaForProperty('name');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a thumbnailUrl property', function(assert) {
  var property = User.metaForProperty('thumbnailUrl');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a phone property', function(assert) {
  var property = User.metaForProperty('phone');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a email property', function(assert) {
  var property = User.metaForProperty('email');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a twitter property', function(assert) {
  var property = User.metaForProperty('twitter');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});


