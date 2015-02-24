import DS from 'ember-data';

let User = DS.Model.extend({
  name: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  twitter: DS.attr('string'),
  commits: DS.hasMany('commit', { async: true }),
  goals: DS.hasMany('goal', { async: true }),
});

User.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "name": "sam",
      "thumbnailUrl": "https://avatars2.githubusercontent.com/u/6923345?v=3&s=460",
      "email": "sam@example.com",
      "phone": "3333333333",
      "twitter": "@samskuhlmann",
      "commits": [1,2],
      "goals": [1],
    },
    {
      "id": 2,
      "name": "yoder",
      "thumbnailUrl": "https://avatars1.githubusercontent.com/u/6809782?v=3&s=460",
      "email": "yoder@example.com",
      "phone": "3333333333",
      "twitter": "@yetiyoder",
      "commits": [3],
      "goals": [2,3],
    },
  ]
});

export default User;
