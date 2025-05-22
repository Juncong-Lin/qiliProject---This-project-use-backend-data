import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
//import '../data/cart-class.js'
import '../data/backend-practice.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

// this is the new way to do Promise, it is load at the same time.
Promise.all([
  loadProductsFetch(),
  /* vvv Use FFetch is more clear than Promise vvv
  new Promise((resolve) =>{
    loadProducts(() => {
      resolve();
    });
    }),
  */ // ^^^ this is Promise method ^^^  
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
    })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});


/*  this is the old way to do Promise, it is not load at the same time.
new Promise((resolve) =>{
  loadProducts(() => {
    resolve();
  });

}).then(() => {
  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/* 
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/




