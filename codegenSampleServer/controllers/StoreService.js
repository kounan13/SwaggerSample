'use strict';

exports.deleteOrder = function(args, res, next) {
  /**
   * Delete purchase order by ID
   * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   *
   * orderId Long ID of the order that needs to be deleted
   * no response value expected for this operation
   **/
  res.end();
}

exports.getInventory = function(args, res, next) {
  /**
   * Returns pet inventories by status
   * Returns a map of status codes to quantities
   *
   * returns Map
   **/
  var examples = {};
  examples['application/json'] = {
  "key" : 123
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getOrderById = function(args, res, next) {
  /**
   * Find purchase order by ID
   * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   *
   * orderId Long ID of pet that needs to be fetched
   * returns Order
   **/
  var examples = {};
  examples['application/json'] = {
  "petId" : 123456789,
  "quantity" : 123,
  "id" : 123456789,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : true,
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.placeOrder = function(args, res, next) {
  /**
   * Place an order for a pet
   * 
   *
   * body Order order placed for purchasing the pet
   * returns Order
   **/
  var examples = {};
  examples['application/json'] = {
  "petId" : 123456789,
  "quantity" : 123,
  "id" : 123456789,
  "shipDate" : "2000-01-23T04:56:07.000+00:00",
  "complete" : true,
  "status" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

