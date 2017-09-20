import Ember from 'ember';

export default Ember.Component.extend({
  shouldShowButton: false,
  actions: {
    toggleButton() {
      this.toggleProperty('shouldShowButton');
    }
  }
});
