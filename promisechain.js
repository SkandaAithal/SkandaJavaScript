let cart = ["bags", "footwear", "clothes", "watches"];

function OrderId() {
  let id = Math.floor(1000 + Math.random() * 9000);
  //   console.log(id);
  //   let id = 0;
  let orderid = new Promise((resolve, reject) => {
    if (id) {
      resolve(id);
    } else {
      let err = new Error("lol:)");
      reject("no id generated" + err);
    }
  });
  return orderid;
}

function creatOrder(cart) {
  function validate() {
    if (cart.length === 0) {
      return false;
    } else {
      return true;
    }
  }
  return new Promise((resolve, reject) => {
    if (validate()) {
      resolve("valid cart");
    } else {
      //   let err = new Error();
      reject("invalid cart");
    }
  });
}

function proceedToPayment(orderid) {
  return new Promise((resolve, reject) => {
    if (orderid) {
      resolve("payment done");
    } else {
      reject("payment Unsuccesfull");
    }
  });
}

function seeYouOrder(orderid) {
  return new Promise((resolve, reject) => {
    if (orderid) {
      resolve(`see your order `);
    } else {
      reject("cant show your order");
    }
  });
}

// then catch starts
creatOrder(cart)
  .then((validity) => {
    console.log(validity);
    return OrderId();
  })

  .then((orderid) => {
    console.log(`order ID is ${orderid}`);
    return proceedToPayment(orderid);
  })

  .then((data) => {
    // console.log(seeYouOrder(data));
    console.log(data);
    return seeYouOrder(data);
  })

  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
