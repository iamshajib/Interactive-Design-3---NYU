import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  actions: {
    save(model) {
    let myInquiry = model;
      let currentUser = this.get('session.currentUser.uid');
      this.store.findRecord('profile', currentUser).then((profile) => {
          if (myInquiry.problem && myInquiry.age && myInquiry.gender && myInquiry.email && myInquiry.howlong && myInquiry.description) {
            let inquiry = this.store.createRecord('inquiry', {
              problem: myInquiry.problem,
              age: myInquiry.age,
              gender: myInquiry.gender,
              email: myInquiry.email,
              howlong: myInquiry.howlong,
              description: myInquiry.description,
              imageURL: myInquiry.imageURL,
              timestamp: new Date().getTime(),
              author: profile
            });
            inquiry.save().then( () => this.transitionTo('doctorinbox'));
      } else {
        alert('Please fill in all required fields');
      }
      });
    },
    cancel() {
      // Clear input fields
      this.set('model.problem', null);
      this.set('model.age', null);
      this.set('model.gender', null);
      this.set('model.email', null);
      this.set('model.howlong', null);
      this.set('model.description', null);
      this.transitionTo('doctorinbox');
    }
  }
});