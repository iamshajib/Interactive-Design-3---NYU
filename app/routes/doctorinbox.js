import Ember from 'ember';

export default Ember.Route.extend({
    model() {
    //return books;
    return this.store.findAll('inquiry').then((inquiries) =>
      inquiries.sortBy('timestamp').reverse()
    );
  }
});
