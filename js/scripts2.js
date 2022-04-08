// UPDATED WITH TEXTAREA

let nameInput = document.getElementById("nameInput");
let nameListDisplay = document.getElementById("nameListDisplay");
let assignmentDisplay = document.getElementById("assignmentDisplay");
let calculatedDisplay = document.getElementById("calculatedDisplay");

let namesList = [];
let assignedList = [];

displayNames();

function calculate() {
	assignedList = [];
	
	for (let i=0; i<namesList.length; i++) {
		let randomIndex = -1;
		let attempts = 0;
		
		while (randomIndex == -1 || randomIndex == i || assignedList.indexOf(namesList[randomIndex]) != -1) {
			randomIndex = Math.floor(Math.random() * namesList.length);
			attempts++;
			
			if (attempts >= namesList.length) {
				console.log("bad");
				calculate();
				return;
			}
		}
		
		assignedList.push(namesList[randomIndex]);
		
		console.log(namesList);
		console.log(assignedList);
		
	}
	
	displayCalculated();
}

function displayCalculated() {
	let html = '<ul>';
	for (let i=0; i<namesList.length; i++) {
		html += '<li>' + namesList[i] + ' => ' + assignedList[i] + '</li>';
	}
	html += '</ul>';
	calculatedDisplay.innerHTML = html;	
}
 
function displayNames() {
	let html = '<ul>';
	for (let name of namesList) {
		html += '<li>' + name + '</li>';
	}
	html += '</ul>';
	nameListDisplay.innerHTML = html;
}

function addName(){
	
	$.each($('textarea').val().split(/\n/), function(i, line){
	   if(line && line.length){
	      namesList.push(line);
	   }
	});
/*
	namesList.push(nameInput.value);
	nameInput.value = '';
*/
	nameInput.value = '';

	console.log(namesList);
	
	displayNames();
}

function reset() {
	namesList = [];
	assignedList = [];
	calculatedDisplay.innerHTML = '';
	nameListDisplay.innerHTML = '';
}