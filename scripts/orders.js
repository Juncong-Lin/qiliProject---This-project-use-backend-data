import { orders } from '../data/orders.js';

function renderOrders() {
  const ordersGrid = document.querySelector('.orders-grid');
  ordersGrid.innerHTML = '';
  orders.forEach(order => {
    let orderHTML = `
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${order.date}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${order.total}</div>
            </div>
          </div>
          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${order.id}</div>
          </div>
        </div>
        <div class="order-details-grid">
    `;
    order.items.forEach(item => {
      orderHTML += `
        <div class="product-image-container">
          <img src="${item.product.image}">
        </div>
        <div class="product-details">
          <div class="product-name">${item.product.name}</div>
          <div class="product-delivery-date">Arriving on: (date TBD)</div>
          <div class="product-quantity">Quantity: ${item.quantity}</div>
          <button class="buy-again-button button-primary">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>
        <div class="product-actions">
          <a href="tracking.html">
            <button class="track-package-button button-secondary">Track package</button>
          </a>
        </div>
      `;
    });
    orderHTML += '</div></div>';
    ordersGrid.innerHTML += orderHTML;
  });
}

document.addEventListener('DOMContentLoaded', renderOrders); 