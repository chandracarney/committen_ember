import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('commit', {
  needs: ['model:user']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
