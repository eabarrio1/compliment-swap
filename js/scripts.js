// @codekit-prepend "_cookie.js",

let nameInput = document.getElementById("nameInput");
let nameListDisplay = document.getElementById("nameListDisplay");
let assignmentDisplay = document.getElementById("assignmentDisplay");
let calculatedDisplay = document.getElementById("calculatedDisplay");

let namesList = [];
let assignedList = [];
let finalComboList = [];

displayNames();

function calculate() {
	
	addName();

	assignedList = [];
	
	for (let i=0; i<namesList.length; i++) {
		let randomIndex = -1;
		let attempts = 0;
		
		while (randomIndex == -1 || randomIndex == i || assignedList.indexOf(namesList[randomIndex]) != -1) {
			randomIndex = Math.floor(Math.random() * namesList.length);
			attempts++;
			
			if (attempts >= namesList.length) {
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
		// finalComboList.push(combo);
	}
	html += '</ul>';
	

	calculatedDisplay.innerHTML = html;

	$('#calculated li').each(function() {
		var combo = this.innerHTML.replace(/=&gt;/g, ' - ');
		finalComboList.push(combo);
	});

	console.log(html);
	console.log(finalComboList);

}
 
function displayNames() {
	let html = '<ul>';
	for (let name of namesList) {
		html += '<li' + 'class=' + i +'>' + name + '</li>';
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
	
// 	displayNames();
}

function toggleForm() {
  var x = document.getElementById("form");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function reset() {
	namesList = [];
	assignedList = [];
	calculatedDisplay.innerHTML = '';
	nameListDisplay.innerHTML = '';
}

// namesList.join(',');

// console.log(namesList);

// $.post('php/ajax.php', {namesList: namesList})

// PHP 

// $(document).ready(function(){
//     $('button.send').click(function(){
//         var clickBtnValue = $(this).val();
//         var ajaxurl = 'php/ajax.php';
//         data =  {'action': clickBtnValue};
//         $.post(ajaxurl, data, function () {
//             // Response div goes here.
//             alert("action performed successfully");
//         });
//     });
// });

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