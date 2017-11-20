console.log('eyyyy');

const app = angular.module('ToDo', []);

app.controller('MainController', [function(){
	this.test = 'test';
	this.tasks = ['apply for credit card', 'pick up turkey', 'finish stage 1 of react app'];
	this.newTask = '';
	this.handleSubmit = function(x){
		x = this.newTask;
		this.tasks.push(x);
		console.log(this.tasks);
	}
}])