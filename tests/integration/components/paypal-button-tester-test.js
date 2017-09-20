import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paypal-button-tester', 'Integration | Component | paypal button tester', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paypal-button-tester}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paypal-button-tester}}
      template block text
    {{/paypal-button-tester}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
