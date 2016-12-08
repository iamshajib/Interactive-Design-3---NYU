import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(model) {
      model.save().then((post) =>
        this.transitionTo('inquiries.show', post)
      );
    },
    delete(model){
      model.destroyRecord().then(() =>
        this.transitionTo('doctorinbox')
      );
    },
    cancel(model) {
      model.rollbackAttributes();
      this.transitionTo('inquiries.show', model);
    }
  }
});
