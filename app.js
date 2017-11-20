console.log('eyyyy');

const app = angular.module('ToDo', []);

app.controller('MainController', [function(){
	this.test = 'test';
}])