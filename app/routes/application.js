import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.get('session').fetch();
  },

  actions: {
    closeSession: function() {
      var route = this;

      this.get('session').close('github-oauth2').then(function(){
        alert('Logging out!');
      }, function(error) {
        route.controller.set();
      });
    },
    
    signInViaGithub: function() {
      var route = this;

      this.get('session').open('github-oauth2').then(function(){
        // do the things after login, like redirect to dashboard
        route.controller.transitionToRoute('user', 1);
      }, function(error) {
        route.controller.set('error', 'Could not sign you in: ' + error.message);
      });
    }
  }
});
