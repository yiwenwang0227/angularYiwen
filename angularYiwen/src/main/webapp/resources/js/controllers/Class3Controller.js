'use strict';

/**
 * CarController
 * @constructor
 */
var Class3Controller = function($scope, $http) {
	
	var gems =[{
		name: 'Dodecahedron',
		price: 2,
		description: 'Some gems',
		canPurchase: true,
		images:[{full:'resources/images/dod1.jpg', thumb: 'resources/images/dod1thumb.jpg'},
		{full:'resources/images/dod2.png', thumb: 'resources/images/dod2thumb.png'}],
		reviews:[{
		stars: 5,
		body: "I love this product",
		author: "joe@thomas.com"
		},{
		stars: 1,
		body: "This product sucks",
		author: "time@hater.com"
		}]
		},{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'You are a gem',
		canPurchase: false,
		images:[{full:'resources/images/dod2.png', thumb: 'resources/images/dod2thumb.png'},
		{full:'resources/images/dod1.jpg', thumb: 'resources/images/dod1thumb.jpg'}],
		reviews:[]
		}];
		$scope.products = gems;
		
		$scope.tab = 1;
		
		$scope.isSelected = function(checkTab) {
			return checkTab === $scope.tab;
		};
		
		$scope.selectTab = function(setTab) {
			return $scope.tab = setTab;
		}	;	
};

App.controller("PanelController", function() {
	this.tab = 1;
	this.selectTab = function(setTab) {
		this.tab = setTab;	
	};
	
	this.isSelected = function(checkTab) {
		return checkTab === this.tab;
	};
});

App.controller("ReviewController", function($scope) {
	this.view = {};
	this.addReview = function(product) {
		this.review.createdOn = Date.now();
		product.reviews.push(this.review);
		this.review={};
	};
});