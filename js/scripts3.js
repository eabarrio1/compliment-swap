// WORKING JUST ONE TEXT INPUT

let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");

// let nameInput = [].concat(firstInput, emailInput);

let nameListDisplay = document.getElementById("nameListDisplay");
let assignmentDisplay = document.getElementById("assignmentDisplay");
let calculatedDisplay = document.getElementById("calculatedDisplay");

let namesList = [];
let assignedList = [];
let finalComboList = [];

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
	let html = '<ul id="calculated">';
	for (let i=0; i<namesList.length; i++) {
		html += '<li ' + 'class="' + i +'">' + namesList[i] + ' => ' + assignedList[i] + '</li>';
	}
	html += '</ul>';
	calculatedDisplay.innerHTML = html;	

	$('#calculated li').each(function() {
		var combo = this.innerHTML.replace(/=&gt;/g, ' - ');
		finalComboList.push(combo);
	});
}
 
function displayNames() {
	let html = '<ul id="display">';
	for (let name of namesList) {
		html += '<li><span>' + name + '</span><button class="remove">-</button></li>';
	}
	html += '</ul>';
	nameListDisplay.innerHTML = html;

	
	$( "li .remove" ).each(function() {
		var removethisName = $(this).parent().innerHTML;

		$(this).click(function(){
			console.log('mewooo');
			
			var parentLi = $(this).parent();
			var removethisName = $(this).parent().find('span').html();

			// remove li item
			parentLi.slideUp("normal", function() { $(this).remove(); } );

			// remove name from namesList array to keep it from the calculation
			var index = namesList.indexOf(removethisName);
			
			if (index > -1) {
				namesList.splice(index, 1);
			 }

		});
	  });
}


function addName(){
	namesList.push('<strong>' + nameInput.value + '</strong> ' +  emailInput.value);
	nameInput.value = '';
	emailInput.value = '';

	console.log(namesList);

	displayNames();

}

function recalculate() {
	assignedList = [];
	calculatedDisplay.innerHTML = '';
}

function reset() {
	namesList = [];
	assignedList = [];
	calculatedDisplay.innerHTML = '';
	nameListDisplay.innerHTML = '';
}

$(document).ready(function(){

	$('button.send').click(function(){

		dataString = finalComboList;
		var jsonString = JSON.stringify(dataString);

		console.log('ass data' + dataString);
		console.log('ass json' + jsonString);

		// data = {
		// 	name: 'elena',
		// 	email: 'elena.a.barrio@gmail.com',
		// 	message: 'hey u da best'
		// };
		$.ajax({
			type: "POST",
			url: "php/ajax.php",
			data: {data : jsonString},
			success: function(){
				console.log('success');
				$('.success').fadeIn(1000);
			}
		});

	});

 });

 console.log('ass');

