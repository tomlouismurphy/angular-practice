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
	this.handleDelete = function($event){
		const array = $event.currentTarget.parentNode.innerHTML.split('<');
		console.log(array[0]);
		for (let i = 0; i < this.tasks.length; i++){
			if (array[0] === this.tasks[i]){
				this.tasks.splice(i, 1);
			}
		}
	}
}])