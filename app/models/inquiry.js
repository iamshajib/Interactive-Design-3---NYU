import DS from 'ember-data';

export default DS.Model.extend({
  problem: DS.attr('string'),
  age: DS.attr('number'),
  gender: DS.attr('string'),
  countuntry: DS.attr('string'),
  email: DS.attr('string'),
  howlong: DS.attr('string'),
  description: DS.attr('string'),
  imageURL: DS.attr('string'),
  timestamp: DS.attr('number'),
  comments: DS.hasMany('comment', { async: true, inverse: null }),
  author: DS.belongsTo('profile', { async: true, inverse: null })
});
