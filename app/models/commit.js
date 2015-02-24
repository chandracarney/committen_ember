import DS from 'ember-data';

let Commit = DS.Model.extend({
  message: DS.attr('string'),
  date: DS.attr('date'),
  url: DS.attr('string'),
  user: DS.belongsTo('user')
});

Commit.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "message": "Adds a user model",
      "date": "2015-01-30-14T16:00:49Z",
      "url": "https://github.com/trayo/committen_ember/commit/6623f2914739e2d1151e655aa06622294d6ef4db"
    },
    {
      "id": 2,
      "message": "Fix all the bugs",
      "date": "2015-02-13-14T16:00:49Z",
      "url": "https://github.com/trayo/committen_ember/commit/5366942e5c1dff687d7bc3fcfd1a7ce14c97282d"
    },
    {
      "id": 3,
      "message": "Updates the readme",
      "date": "2015-02-15-14T16:00:49Z",
      "url": "https://github.com/trayo/committen_ember/commit/f4c9a08db9e475e7e4ccd532124689a0130b4f56"
    }
      ]
});

export default Commit;
