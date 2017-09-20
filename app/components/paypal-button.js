/* global paypal */
import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);

    paypal.Button.render({
      env: 'sandbox',
      commit: true,
      style: {
        shape: 'rect',
        size: 'responsive'
      },
      onEnter() {
        return this;
      },

      payment() {
        // Set up the payment here
      },

      onAuthorize() { // (data, actions)
        // Execute the payment here
      }
    }, this.elementId);
  }

});
