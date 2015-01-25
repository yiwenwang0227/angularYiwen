'use strict';

/**
 * CarController
 * @constructor
 */
var Class2Controller = function($scope, $http) {
	
	var  gems =[{
		name: 'Dodecahedron',
		price: 2,
		description: 'Some gems',
		canPurchase: true,
		images:[{full:'resources/images/dod1.jpg', thumb: 'resources/images/dod1thumb.jpg'},
		        {full:'resources/images/dod2.png', thumb: 'resources/images/dod2thumb.png'}],
	},{
		name: 'Pentagonal Gem',
		price: 5.95,
		description: 'You are a gem',
		canPurchase: false,
		images:[{full:'resources/images/dod2.png', thumb: 'resources/images/dod2thumb.png'},
		        {full:'resources/images/dod1.jpg', thumb: 'resources/images/dod1thumb.jpg'}],
	}];
	
	$scope.products = gems;
		
};