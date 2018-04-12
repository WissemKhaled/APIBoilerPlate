
$(document).ready(function() {
 	// all the JS and Jquery code would be written inside the anonymous function

 	// This function launch our application, and is tasked with the initialisation of every aspect of it
 	function init(showAtStartup) {
 		navigateView(showAtStartup);
 		// document.querySelector('[data-target="contact"]').addEventListener()
 		$('[data-target]').on('click', function () {
 			// this.dataset.target is the name of the 'click' for "data-target"
 			navigateView(this.dataset.target);
 		});
 		$('[data-ajax]').on('click', function () {
 			//https://swapi.co/api/people/1/
 			$.get("https://swapi.co/api/people/1", function (data) {
 				let values = [
 				// On recuperer le nom, le prénom, le poids et date de naissance
 				"le poid est " + data.mass,
 				"le nom est " + data.name,
 				"la date de naissance est " + data.birth_year,
 				];

 				
 				for (let i = 0; i < values.length; i++) {
 					let p = document.createElement('p');
 					p.innerHTML = values[i];
 					document.querySelector('[data-page="home"]').append(p);
 				}

 				/* Jquery

 				// On recuperer le nom, le prénom, le poids et date de naissance
 				let name = "le poid est " + data.mass;
 				let mass = "le nom est " + data.name;
 				let birthdate = "la date de naissance est " + data.birth_year;

 				$('[data-page=home]').append('<p>' + name + '<p>');
 				$('[data-page=home]').append('<p>' + mass + '<p>');
 				$('[data-page=home]').append('<p>' + birthdate + '<p>');

 				 Javascript

 				let name = createElement('p');
 				name.innerHTML = name;
 				document.querySelector('[data-page="home"]').append(name);*/
 			});
 		});
 	}
 	// Allow to hide and show every section of your computeur
 	function navigateView(sectionToShow) {
 		let sections = $('[data-page]');
 		let error = true;
 		//$.each(section, function(key, value){   // It's a JQuery but it does not work with some things we want to create after
 		for (let i = 0; i < sections.length; i++) {
 			if (sections[i].dataset.page == sectionToShow) {
 				sections[i].classList.remove('hidden');
 				error = false;
 			} else {
				sections[i].classList.add('hidden');
 			}	
 		}
 		if (error) {
 				throw ('Selector error, nothing found for ' + sectionToShow);
 		}		
 		// it's the same at : document.querySelector('[data-page="home"]').classList.remove('hidden') 
 		//$('[data-page="' + sectionToShow + '"]').removeClass('hidden');//
 	}
 	init('home');
})	