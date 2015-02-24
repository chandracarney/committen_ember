import DS from 'ember-data';

let User = DS.Model.extend({
  name: DS.attr('string'),
  thumbnailUrl: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
});

User.reopenClass({
  FIXTURES: [
    {
      id: 1,
      "name": "sam",
      "thumbnailUrl": "https://avatars2.githubusercontent.com/u/6923345?v=3&s=460",
      "email": "sam@example.com",
      "phone": "3333333333",
    },
    {
      id: 2,
      "name": "yoder",
      "thumbnailUrl": "https://avatars1.githubusercontent.com/u/6809782?v=3&s=460",
      "email": "yoder@example.com",
      "phone": "3333333333",
    }
  ]
});

export default User;
