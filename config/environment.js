/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'hot-streak',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.hotStreak = {
      sessionUrl: 'http://localhost:4200/api/sessions'
    }

    ENV.torii = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: '46f6d2ee97ee37afb39c',
          redirectUri: 'http://localhost:4200',
        }
      }
    };

    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://localhost:3000"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.torii = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: '195936f3c943104b8c08',
          redirectUri: 'http://committen.herokuapp.com',
        }
      }

    }

    ENV.contentSecurityPolicy = {
      'connect-src': "'self' http://committen-rails.herokuapp.com"
    }

    ENV.hotStreak = {
      sessionUrl: '/__/proxy/api/sessions'
    }
  }

  return ENV;
};
