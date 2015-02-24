import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('goal', {
  needs: ['model:user', 'model:commit']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
