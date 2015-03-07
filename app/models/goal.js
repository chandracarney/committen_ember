import DS from 'ember-data';

let Goal = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr('string'),
  endDate: DS.attr('string'),
  dailyQuantity: DS.attr('number'),
  completed: DS.attr('boolean'),
  user: DS.belongsTo('user'),
});

Goal.reopenClass({
  FIXTURES: [
    {
      "id": 1,
      "title": "doing push ups with steve",
      "description": "steve does push ups, come join him.",
      "startDate": "2015-01-30-14T16:00:49Z",
      "endDate": "2015-03-30-14T16:00:49Z",
      "status": true,
      "dailyQuantity": 30,
    },
    {
      "id": 2,
      "title": "I'm commit'n!",
      "description": "David is the commit master, but he is falling behind.",
      "startDate": "2015-01-30-14T16:00:49Z",
      "endDate": "2016-01-30-14T16:00:49Z",
      "status": false,
      "dailyQuantity": 30,
    },
    {
      "id": 3,
      "title": "Trello looks like Solitaire",
      "description": "let's do some commits and send pull requests to fix that.",
      "startDate": "2015-07-30-14T16:00:49Z",
      "endDate": "2015-09-30-14T16:00:49Z",
      "status": true,
      "dailyQuantity": 30,
    },
  ]
});

export default Goal;
