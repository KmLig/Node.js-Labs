const Product = require("../models/product");


exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.send(products);
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    console.log(products);
    res.send(products);
  });
}

/*
exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your cart"
  })
}

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your orders"
  })
}

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "checkout",
    pageTitle: "Checkout"
  })
}
*/
