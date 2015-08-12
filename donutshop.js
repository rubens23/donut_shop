'use strict'

var DonutShop = function(name, minCustomers, maxCustomers, avgDonuts, hoursOfOperation) {
	this.name = name;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.avgDonuts = avgDonuts;
	this.hoursOfOperation = hoursOfOperation;
	this.shopList = [ ];
	this.calcSales = 0;

	DonutShop.prototype.total = function( ) {
    for(var i = 0; i < this.hoursOfOperation; i++) {
        this.shopList.push((Math.floor(Math.random( ) * 100 + 1)) * this.avgDonuts);
    }
};
	DonutShop.prototype.getRandomCustomers = function() {
		var range = this.maxCustomers - this.minCustomers + 1;
		var random = Math.floor(Math.random() * range + this.minCustomers);
		return random;
	};

	DonutShop.prototype.getDonutsPerHour = function() {
		var donutHour = Math.floor(this.getRandomCustomers() * this.avgDonuts);
		return donutHour;
	};


	DonutShop.prototype.calcSales = function() {
		this.hourlySales = [];
		this.dailySales = 0;
	
		for(var x = 0; x < 11; x++){
		this.salesHourly[x] =  Math.floor(this.randomGenerator() * this.avgDonuts);
		this.dailySales += this.hourlySales[x];
	}
	};

};

	DonutShop.prototype.render = function() {
		var getTable = document.getElementById('donut-table');
		var newRow = document.createElement('tr');
		newRow.id=this.name;
		newRow.innerHTML = this.name;
		getTable.appendChild(newRow);
		this.calcSales += this.shopList[i];

		for (var i = 0; i < 11; i++); {
			var newCell = document.createElement('td');
			newCell.innerHTML = this.hourlySales[i];
			newRow.appendChild(newCell);
		}
	};

	var donutButton = document.getElementById('submit');

	var handleShopSubmit = function(event) {
	event.preventDefault();
	var nameForm=document.getElementById('nameForm').value;
	var hoursOfOperationForm = document.getElementById('hoursOfOperationForm').value;
	var minCustomersForm = document.getElementById('minCustomersForm').value;
	var maxCustomersForm = document.getElementById('maxCustomersForm').value;
	var avgDonutsForm = document.getElementById('avgDonutsForm').value;
	var NewDonutShop = new DonutShop(nameForm, hoursOfOperationForm, minCustomersForm, maxCustomersForm, avgDonutsForm);
	  NewDonutShop.render( );
};

	donutButton.addEventListener('click', handleShopSubmit);

	var donutForm = document.getElementById('donut-form');
	var donutTable = document.getElementById('donut-table');

	var downtown = new DonutShop('downtown', 8, 43, 4.50);
	var capitolHill = new DonutShop('capitolHill', 4, 37, 2.00);
	var southLakeUnion = new DonutShop('southLakeUnion', 9, 23, 6.33);
	var wedgewood = new DonutShop('wedgewood', 2, 28, 1.25);
	var ballard = new DonutShop('ballard', 8, 58, 3.75);

	var shopList = [downtown, capitolHill, southLakeUnion, wedgewood, ballard,];

	for (var i = 0; i < shopList.length; i++) {
	
	console.log('The donut shop in ' + shopList[i].name + ' is part of the shops.');
	console.log('This donut shop gets ' + shopList[i].getRandomCustomers() + ' customers per hour.');
	console.log('And makes ' + shopList[i].getDonutsPerHour() + ' donuts per hour.');
}

	downtown.render();
	capitolHill.render();
	southLakeUnion.render();
	wedgewood.render();
	ballard.render();