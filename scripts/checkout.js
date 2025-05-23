import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
//import '../data/cart-class.js'
import '../data/backend-practice.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

// 1、 await is used in async, and async is more cleaner than Promise.
async function loadPage() {
  try {
    await loadProductsFetch(),
    await new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });  
  } catch (error) {
    console.log('Unexpect error , please try again later')
  }

  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

/* 2、 this is the new way to do Promise, it is load at the same time.
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) =>{
    loadProducts(() => {
      resolve();
    });
    }),
 
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/ // ^^^ this is Promise method ^^^  


/* 3、 this is the old way to do Promise,for each step ,it is not load at the same time.
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




