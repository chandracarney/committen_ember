import Ember from 'ember';

export default Ember.ObjectController.extend({

  editing: false,

  actions: {

    startEditing: function() {
      this.set('editing', true);
    },

    stopEditing: function() {
      var user = this.get('model');
      user.save().then(function() {
        this.set('editing', false);
      }.bind(this));
    }
  },

});
