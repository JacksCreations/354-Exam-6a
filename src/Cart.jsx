import React from 'react';
import CartData from './cart.json';

const Cart = () => {
  //sums up all of the prices in the cart.json
  // not familiar enough with advanced JS to do in one line
  const getSubTotal = () => {
    var total = 0;
    var qty = 0;
    for (var i = 0; i < 4; i++) {
      qty = CartData.lineItems[i].qty;
      total += CartData.lineItems[i].price * qty;
    }
    return total;
  };

  const getTax = () => {
    var tax = 0;
    for (var i = 0; i < CartData.lineItems.length; i++) {
      tax += CartData.lineItems[i].price * 0.075;
    }
    tax = Math.round(tax * 100) / 100;
    return tax;
  };

  const getTotal = () => {
    var total = 0;
    for (var i = 0; i < 4; i++) {
      total += CartData.lineItems[i].price;
    }
    total += CartData.shipping;
    total += getTax();
    return total;
  };

  return (
    <div>
      <div id="w">
        <header id="title">
          <h1>{CartData.title}</h1>
        </header>
        <div id="page">
          <table id="cart">
            <thead>
              <tr>
                <th className="first">Photo</th>
                <th className="second">Qty</th>
                <th className="third">Product</th>
                <th className="fourth">Line Total</th>
                <th className="fifth">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- shopping cart contents --> */}
              <tr className="productitm">
                <td>
                  <img
                    src="https://i.imgur.com/8goC6r6.png"
                    className="thumb"
                  ></img>
                </td>
                <td>
                  <input
                    type="number"
                    // value="1"
                    min="0"
                    max="6"
                    className="qtyinput"
                  ></input>
                </td>
                <td>Design Bundle Package</td>
                <td>79.00</td>
                <td>
                  <span className="remove">
                    <img src="https://i.imgur.com/h1ldGRr.png" alt="X"></img>
                  </span>
                </td>
              </tr>

              <tr className="productitm">
                <td>
                  <img
                    src="https://i.imgur.com/RkzoXzZ.png"
                    className="thumb"
                  ></img>
                </td>
                <td>
                  <input
                    type="number"
                    // value="1"
                    min="0"
                    max="6"
                    className="qtyinput"
                  ></input>
                </td>
                <td>Stuff On My Cat: The Book</td>
                <td>8.95</td>
                <td>
                  <span className="remove">
                    <img src="https://i.imgur.com/h1ldGRr.png" alt="X"></img>
                  </span>
                </td>
              </tr>

              <tr className="productitm">
                <td>
                  <img
                    src="https://i.imgur.com/vZ26Uwy.png"
                    className="thumb"
                  ></img>
                </td>
                <td>
                  <input
                    type="number"
                    // value="1"
                    min="0"
                    max="6"
                    className="qtyinput"
                  ></input>
                </td>
                <td>SpongeBob's First 100 Episodes</td>
                <td>75.00</td>
                <td>
                  <span className="remove">
                    <img src="https://i.imgur.com/h1ldGRr.png" alt="X"></img>
                  </span>
                </td>
              </tr>

              <tr className="productitm">
                <td>
                  <img
                    src="https://i.imgur.com/tEdRnz4.png"
                    className="thumb"
                  ></img>
                </td>
                <td>
                  <input
                    type="number"
                    // value="1"
                    min="0"
                    max="6"
                    className="qtyinput"
                  ></input>
                </td>
                <td>JavaScript &amp; jQuery: The Missing Manual</td>
                <td>27.50</td>
                <td>
                  <span className="remove">
                    <img src="https://i.imgur.com/h1ldGRr.png" alt="X"></img>
                  </span>
                </td>
              </tr>

              {/* <!-- subtotal --> */}
              <tr className="extracosts">
                <td className="light">Subtotal</td>
                <td colSpan="2" className="light"></td>
                <td>${getSubTotal()}</td>
                <td>&nbsp;</td>
              </tr>

              {/* <!-- add tax  section here --> */}
              <tr className="extracosts">
                <td className="light">Tax</td>
                <td colSpan="2" className="light"></td>
                <td>${getTax()}</td>
                <td>&nbsp;</td>
              </tr>

              {/* shipping*/}
              <tr className="extracosts">
                <td className="light">Shipping</td>
                <td colSpan="2" className="light"></td>
                <td>${CartData.shipping}</td>
                <td>&nbsp;</td>
              </tr>

              <tr className="totalprice">
                <td className="light">Total:</td>
                <td colSpan="2">&nbsp;</td>
                <td colSpan="2">
                  <span className="thick">${getTotal()}</span>
                </td>
              </tr>

              {/* <!-- checkout btn --> */}
              <tr className="checkoutrow">
                <td colSpan="5" className="checkout">
                  <button id="submitbtn" onClick={getTax()} onClick={getTotal}>
                    Checkout Now!
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
