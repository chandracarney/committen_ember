import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('user', {
  needs: ['model:commit', 'model:goal']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
