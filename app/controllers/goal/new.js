import Ember from 'ember';

export default Ember.Controller.extend({

  title: null,
  description: null,
  startDate: null,
  endDate: null,
  dailyQuantity: null,
  user: null,

  actions: {

    saveGoal: function () {
      var title = this.get('title');
      var description = this.get('description');
      var startDate = this.get('startDate');
      var endDate = this.get('endDate');
      var dailyQuantity = this.get('dailyQuantity');
      var user = this.get('model');
      var goal = { title: title,
                   description: description,
                   startDate: startDate,
                   endDate: endDate,
                   dailyQuantity: dailyQuantity,
                   user: user,
                  };

      this.store.createRecord('goal', goal).save().then(function(goal) {
        this.transitionToRoute('user', goal.user);
      }).bind(this);
    }

  }

});
