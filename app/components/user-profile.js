import Ember from 'ember';

export default Ember.Component.extend({

  editing: false,

  actions: {

    startEditing: function() {
      this.set('editing', true);
    },

    stopEditing: function() {
      var user = this.get('user');
      user.save().then(function() {
        this.set('editing', false);
      }.bind(this));
    }
  },


});
