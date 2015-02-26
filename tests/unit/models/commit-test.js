import {
  moduleForModel,
  test
} from 'ember-qunit';

import DS from 'ember-data';
import Commit from 'hot-streak/models/commit';

moduleForModel('commit', {
  needs: ['model:user', 'model:goal']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('it is an ember data model', function(assert) {
  assert.ok(this.subject() instanceof DS.Model);
});

test('it has a message property', function(assert) {
  var property = Commit.metaForProperty('message');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});

test('it has a date property', function(assert) {
  var property = Commit.metaForProperty('date');
  assert.strictEqual(property.type, 'date');
  assert.ok(property.isAttribute);
});

test('it has a url property', function(assert) {
  var property = Commit.metaForProperty('url');
  assert.strictEqual(property.type, 'string');
  assert.ok(property.isAttribute);
});




