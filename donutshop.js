'use strict'

var DonutShop = function(name, minCustomers, maxCustomers, avgDonuts) {
	this.name = name;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.avgDonuts = avgDonuts;

	this.getRandomCustomers = function() {
		var range = this.maxCustomers - this.minCustomers + 1;
		var random = Math.floor(Math.random() * range + this.minCustomers);
		return random;
	};

	this.getDonutsPerHour = function() {
		var donutHour = Math.floor(this.getRandomCustomers() * this.avgDonuts);
		return donutHour;
	};
};

var downtown = new DonutShop('downtown', 8, 43, 4.50);
var capitolHill = new DonutShop('capitolHill', 4, 37, 2.00);
var southLakeUnion = new DonutShop('southLakeUnion', 9, 23, 6.33);
var wedgewood = new DonutShop('wedgewood', 2, 28, 1.25);
var ballard = new DonutShop('ballard', 8, 58, 3.75);

var shopList = [downtown, capitolHill, southLakeUnion, wedgewood, ballard,];

for (var i = 0; i < shopList.length; i++) {
	
	console.log('The donut shop named ' + shopList[i].name + ' is part of the shops');
	console.log('This donut shop gets ' + shopList[i].getRandomCustomers() + ' customers per hour.');
	console.log('And makes ' + shopList[i].getDonutsPerHour() + ' donuts per hour.');
}

function addRowsToTable() {
	var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    document.getElementById('add-row').appendChild(rowItem);

}