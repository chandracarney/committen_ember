import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('commit', {
  needs: ['model:user', 'model:goal']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
