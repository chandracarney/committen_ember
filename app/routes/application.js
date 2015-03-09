import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    this.get("session").fetch();
  },

  actions: {
    signInViaGithub: function() {
      var route = this;

      this.get('session').open('github-oauth2').then(function(){
        alert('Success! Redirecting you to Dashboard');
        route.controller.transitionToRoute('user', 4);
        // how do we get the user id???
        // var user = this.store.find('user', 4);
        // do the things after login, like redirect to dashboard
      }, function(error) {
        route.controller.set('error', 'Could not sign you in: ' + error.message);
      });
    }
  }
});
