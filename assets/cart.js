/**
 * Artesian Steps — Cart JS
 * Handles add-to-cart form submissions and cart count updates.
 */

class CartForm extends HTMLElement {
  constructor() {
    super();
    this.form = this.querySelector('form[data-type="add-to-cart-form"]');
    if (this.form) {
      this.form.addEventListener('submit', this.onSubmit.bind(this));
    }
  }

  async onSubmit(event) {
    event.preventDefault();
    const submitButton = this.form.querySelector('[type="submit"]');
    const originalText = submitButton.querySelector('span') ? submitButton.querySelector('span').textContent : submitButton.textContent;

    submitButton.setAttribute('disabled', true);
    if (submitButton.querySelector('span')) {
      submitButton.querySelector('span').textContent = 'Adding...';
    } else {
      submitButton.textContent = 'Adding...';
    }

    try {
      const formData = new FormData(this.form);
      const response = await fetch('/cart/add.js', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Network response was not ok');

      await this.updateCartCount();
      this.showAddedState(submitButton);

    } catch (error) {
      console.error('Error adding to cart:', error);
      window.location = this.form.getAttribute('action') || '/cart';
    } finally {
      setTimeout(() => {
        submitButton.removeAttribute('disabled');
        if (submitButton.querySelector('span')) {
          submitButton.querySelector('span').textContent = originalText;
        } else {
          submitButton.textContent = originalText;
        }
      }, 2000);
    }
  }

  async updateCartCount() {
    try {
      const response = await fetch('/cart.js');
      if (!response.ok) return;
      const cart = await response.json();
      const cartBubble = document.getElementById('cart-icon-bubble');
      if (!cartBubble) return;

      let bubble = cartBubble.querySelector('.cart-count-bubble');
      if (cart.item_count > 0) {
        if (!bubble) {
          bubble = document.createElement('div');
          bubble.className = 'cart-count-bubble';
          cartBubble.appendChild(bubble);
        }
        bubble.innerHTML = `<span aria-hidden="true">${cart.item_count < 100 ? cart.item_count : '99+'}</span>`;
      } else if (bubble) {
        bubble.remove();
      }
    } catch (e) {
      // Non-critical; silently ignore
    }
  }

  showAddedState(button) {
    const span = button.querySelector('span');
    if (span) {
      span.textContent = 'Added!';
    } else {
      button.textContent = 'Added!';
    }
  }
}

if (!customElements.get('cart-form')) {
  customElements.define('cart-form', CartForm);
}

/* -------------------------------------------------------
   Quantity input on cart page — live AJAX update
   ------------------------------------------------------- */
document.querySelectorAll('.cart-item .quantity__input').forEach(input => {
  input.addEventListener('change', async function () {
    const key = this.getAttribute('data-index');
    if (!key) return;
    const updates = {};
    updates[key] = parseInt(this.value, 10);
    try {
      const response = await fetch('/cart/update.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates }),
      });
      if (response.ok) window.location.reload();
    } catch (e) {
      // Non-critical
    }
  });
});
