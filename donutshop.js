'use strict';

var DonutShop = function(name, minCustomers, maxCustomers, avgDonuts) {
	this.name = name;
	this.minCustomers = minCustomers;
	this.maxCustomers = maxCustomers;
	this.avgDonuts = avgDonuts;
	this.hourlyDonuts = [ ];
	this.totalDonuts = 0;
};

DonutShop.prototype.getCustomersPerHour = function() {
		for (var i = 0; i < 11; i++) {
			this.hourlyDonuts.push(Math.floor(Math.random() * this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
		}
	};

DonutShop.prototype.getDonutsPerCustomer = function() {
		for (var i = 0; i < this.hours; i++) {
			var customersPerHour = this.getCustomersPerHour();
			var donutsThisHour = Math.round(customersPerHour * this.avgDonuts);
			this.getDonutsPerCustomer.push(donutsThisHour);
			this.hourlyDonuts.push(donutsThisHour);
			this.totalDonuts += donutsThisHour;
			console.log(donutsThisHour);
		}
			
	};

DonutShop.prototype.render = function() {
	var getTable = document.getElementById('donut-table');
	var tr = document.createElement('tr');
	tr.id=this.name;
	tr.innerHTML = this.name;
	var th = document.createElement('th');
	getTable.appendChild(tr);
	this.getCustomersPerHour();

		for (var i = 0; i < 12; i++) {
			var td = document.createElement('td');
			td.innerHTML = this.hourlyDonuts[i];
			tr.appendChild(td);	
	}
		td.textContent = this.totalDonuts;
		td.setAttribute('class', this.name);
		tr.appendChild(td);

};
	var donutButton = document.getElementById('donut-button');

	var handleShopSubmit = function(event) {
	event.preventDefault();
	var nameForm=document.getElementById('nameForm').value;
	var minCustomersForm = document.getElementById('minCustomersForm').value;
	var maxCustomersForm = document.getElementById('maxCustomersForm').value;
	var avgDonutsForm = document.getElementById('avgDonutsForm').value;
	var NewDonutShop = new DonutShop(nameForm, minCustomersForm, maxCustomersForm, avgDonutsForm);
	  NewDonutShop.render( );
};

	donutButton.addEventListener('click', handleShopSubmit);

	var donutForm = document.getElementById('donut-form');
	var donutTable = document.getElementById('donut-table');
	var shopList = document.getElementById('shop-list');
	
	var shopList = [downtown, capitolHill, southLakeUnion, wedgewood, ballard];
	
	var downtown = new DonutShop('Downtown', 8, 43, 4.50);
	var capitolHill = new DonutShop('Capitol Hill', 4, 37, 2.00);
	var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6.33);
	var wedgewood = new DonutShop('Wedgewood', 2, 28, 1.25);
	var ballard = new DonutShop('Ballard', 8, 58, 3.75);
	
	downtown.render( );
	
	capitolHill.render( );
	
	southLakeUnion.render( );
	
	wedgewood.render( );
	
	ballard.render( );
		





















