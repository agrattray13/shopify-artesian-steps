/**
 * Artesian Steps — Theme JS
 */

/* -------------------------------------------------------
   Quantity input custom element
   ------------------------------------------------------- */
if (!customElements.get('quantity-input')) {
  customElements.define('quantity-input', class QuantityInput extends HTMLElement {
    constructor() {
      super();
      this.input = this.querySelector('input');
      this.changeEvent = new Event('change', { bubbles: true });
      this.querySelectorAll('button').forEach(button =>
        button.addEventListener('click', this.onButtonClick.bind(this))
      );
    }

    onButtonClick(event) {
      event.preventDefault();
      const previousValue = this.input.value;
      event.target.name === 'plus'
        ? this.input.stepUp()
        : this.input.stepDown();
      if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
    }
  });
}

/* -------------------------------------------------------
   Details disclosure (dropdown menus)
   ------------------------------------------------------- */
if (!customElements.get('details-disclosure')) {
  customElements.define('details-disclosure', class DetailsDisclosure extends HTMLElement {
    constructor() {
      super();
      this.mainDetailsToggle = this.querySelector('details');
      this.addEventListener('focusout', this.onFocusOut.bind(this));
      this.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    onFocusOut() {
      setTimeout(() => {
        if (!this.contains(document.activeElement)) this.close();
      });
    }

    onKeyUp(event) {
      if (event.code.toUpperCase() === 'ESCAPE') this.close();
    }

    close() {
      this.mainDetailsToggle.removeAttribute('open');
      this.mainDetailsToggle.querySelector('summary').setAttribute('aria-expanded', false);
    }
  });
}

/* -------------------------------------------------------
   Share button
   ------------------------------------------------------- */
if (!customElements.get('share-button')) {
  customElements.define('share-button', class ShareButton extends HTMLElement {
    constructor() {
      super();
      this.shareButton = this.querySelector('button');
      this.shareButton && this.shareButton.addEventListener('click', this.onClick.bind(this));
    }

    onClick(event) {
      event.preventDefault();
      if (navigator.share) {
        navigator.share({ title: document.title, url: document.location.href });
      } else {
        navigator.clipboard && navigator.clipboard.writeText(window.location.href)
          .then(() => {
            const notice = document.createElement('span');
            notice.textContent = 'Link copied!';
            notice.style.cssText = 'margin-left:1rem;font-size:1.2rem;';
            this.shareButton.insertAdjacentElement('afterend', notice);
            setTimeout(() => notice.remove(), 2500);
          });
      }
    }
  });
}

/* -------------------------------------------------------
   Predictive search (basic implementation)
   ------------------------------------------------------- */
document.querySelectorAll('input[type="search"]').forEach(input => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const form = input.closest('form');
      if (form) form.submit();
    }
  });
});

/* -------------------------------------------------------
   Sort-by select (collection page)
   ------------------------------------------------------- */
const sortBySelect = document.querySelector('.facets__sort-by-select');
if (sortBySelect) {
  sortBySelect.addEventListener('change', () => {
    const url = new URL(window.location.href);
    url.searchParams.set('sort_by', sortBySelect.value);
    window.location.assign(url.toString());
  });
}

/* -------------------------------------------------------
   Variant selection (product page, no-JS fallback)
   ------------------------------------------------------- */
document.querySelectorAll('.product-form__input input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const form = radio.closest('form');
    if (!form) return;
    const hiddenId = form.querySelector('input[name="id"]');
    if (!hiddenId) return;
    const productHandle = window.location.pathname.split('/products/')[1];
    if (!productHandle) return;

    const formData = new FormData(form.closest('form') || radio.closest('.product'));
    const selected = {};
    document.querySelectorAll('.product-form__input input[type="radio"]:checked').forEach(r => {
      selected[r.name] = r.value;
    });

    // Re-enable the submit button when variant changes
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) submitBtn.removeAttribute('disabled');
  });
});
