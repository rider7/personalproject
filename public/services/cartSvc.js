angular.module('myApp')
	.service('cartSvc', function( $http ) {

// product._id passed to product to fulfil cart Schema
// user id hardcoded in use npm passport in the future
// quantity also hardcoded and should be chosen by user in the future
		this.createCart = function( product ) {
			return $http.post('/api/cart/:user_id',
			{ item: product, quantity: 1})
		}

		this.getCart = function() {
			return $http.get('/api/cart')
					.then(function(response) {
						return response.data;
					})
		}

		this.updateCart = function( cart ) {
			return $http.put('/api/cart/' + cartId, cart)
		}

	})
