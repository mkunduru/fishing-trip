/*
Version: 1.0
Author: Meenakshi Kunduru
Author URL: your site
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/

$(document).ready(function() { // when the document has loaded the structure but not every image or media file
	var fish;

	intro();

	function intro() {
		$('#basket').show();
		$('#fishing_gear').show();
		$('#full-boat').show().css({"z-index": "400"}).addClass('small');
		$('.rock').addClass('rock-boat');

		//Show prompt
		setTimeout(function(){
			show_prompt($('#intro_prompt1'));
			show_cursor($('#full-boat'));
		}, 2000);

		$('#full-boat').on('click', function(){
			$('#full-boat').off('click');
			hide_prompt($('#intro_prompt1'));
			hide_cursor($('#full-boat'));

			start_boat("0");
			// Move the boat to the end of the screen
			$('#full-boat').animate({left: '1400px'}, 5000, 'swing', function(){
				stop_boat();
				$('.scene-overlay').animate({"top": "-75%", "left": "-25%", "width": "150%", "height": "250%"}, 500, 'swing', function(){
					$('#intro').hide();

					$('#full-boat').css({left: '200px'});
					$('#basket').hide();
					$('#fishing_gear').hide();
					$('#full-boat').css({"z-index": "0"}).removeClass('small');
					$('.rock').removeClass('rock-boat');
					$('.scene-overlay').animate({"top": "50%", "left": "50%", "width": "0", "height": "0"}, 500, 'swing', function(){
						sceneOne();
					});
				});
			});
		});
	}

	function sceneOne() {

		//Show prompt
		setTimeout(function(){
			show_prompt($('#scene1_prompt1'));
			show_cursor($('#standing_man'));
		}, 2000);
		
		// Play the nature sound
		$("#background-sound").prop("currentTime", "0");
		$("#background-sound").prop("volume", ".2");
		$("#background-sound").trigger("play");

		// First action is to click the man
		$('#standing_man').on('click', function(){
			// Disable Click
			$('#standing-man').off('click');
			hide_prompt($('#scene1_prompt1'));
			hide_cursor($('#standing_man'));

			// Hide the man on the dock
			$(this).hide();

			// Show the man and gear in the boat
			$('#basket').show();
			$('#sitting_man').show();
			$('#fishing_gear').show();

			// Start rocking the boat
			$('.rock').addClass('rock-boat');
			
			//Show prompt
			setTimeout(function(){
				show_prompt($('#scene1_prompt2'));
				show_cursor($('#motor'));
			}, 2000);

			// Second action is to click the motor
			$('#motor').on('click', function(){
				$('#motor').off('click');
				hide_prompt($('#scene1_prompt2'));
				hide_cursor($('#motor'));

				// Play the boat start sound
				start_boat("0");

				// Move the boat to the end of the screen
				$('#full-boat').animate({left: '1400px'}, 10000, 'swing', function(){
					// Stop the sound of starting the boat
					stop_boat();

					$('.scene-overlay').animate({"top": "-75%", "left": "-25%", "width": "150%", "height": "250%"}, 500, 'swing', function(){
						$('#dock').hide();
						$('#full-boat').stop().css({left: '-450px'});
						$('.scene-overlay').animate({"top": "50%", "left": "50%", "width": "0", "height": "0"}, 500, 'swing', function(){
							sceneTwo();
						});
					});
				});
			});
		});
	}

	function sceneTwo() {
		start_boat("5");

		// Boat enters the scene from the left
		$('#full-boat').stop().animate({left: '250px'}, 5000, 'swing', function(){
			setTimeout(function(){
				stop_boat();
			}, 1000);
			
			//Show prompt
			setTimeout(function(){
				show_prompt($('#scene2_prompt1'));
				show_cursor($('#fishing_gear'));
			}, 2000);

			// First action is to click on the fishing gear
			$('#fishing_gear').on('click', function(){
				$('#fishing_gear').off('click');
				hide_prompt($('#scene2_prompt1'));
				hide_cursor($('#fishing_gear'));

				// Hide the fishing gear and idle man
				$('#sitting_man').hide();
				$('#fishing_gear').hide();

				// Show the man with fishing gear in his hand
				$('#man_with_gear').show();
				$('#thread').show();
				$('#hook').show();

				// Drop the thread and hook in the water to start fishing
				setTimeout(function(){
					$('#thread').addClass('extend');
					$('#thread_dipped').addClass('extend_dipped');
					$('#hook').addClass('drop');
				}, 1000);

				show_ripple(3400);
				
				// Transition to next scene after css animation is complete
				setTimeout(function(){
					$('.scene-overlay').animate({"top": "-75%", "left": "-25%", "width": "150%", "height": "250%"}, 500, 'swing', function(){
						$('.scene-overlay').animate({"top": "50%", "left": "50%", "width": "0", "height": "0"}, 500, 'swing', function(){
							sceneThree();
						});
					});
				}, 7000);
			});
		});
	}

	function sceneThree() {
		// Initialize scene with fishes
		setTimeout(function(){
			$('.fish1').css({"bottom": "60px", "left": "1300px"}).show().animate({"left": "900px"}, 3000);
			$('.fish2').css({"bottom": "100px", "left": "1350px"}).show().animate({"left": "950px"}, 2400);
			$('.fish3').css({"bottom": "150px", "left": "1310px"}).show().animate({"left": "910px"}, 4800);
			$('.fish4').css({"bottom": "70px", "left": "1400px"}).show().animate({"left": "800px"}, 5600);
			$('.fish5').css({"bottom": "130px", "left": "1350px"}).show().animate({"left": "1000px"}, 3200);
			$('.fish6').css({"bottom": "90px", "left": "1260px"}).show().animate({"left": "860px"}, 3600, 'swing', function(){
				//Show prompt
				show_prompt($('#scene3_prompt1'));
				show_cursor($('.fish'));
			});
		}, 2000);

		// First action is to click on the fish 
		$('.fish').on('click', function(){
			$('.fish').off('click');
			hide_prompt($('#scene3_prompt1'));
			hide_cursor($('.fish'));
			fish = $(this);

			// Stop rocking the boat
			$('.rock').removeClass('rock-boat');

			// Move the fish to the hook
			$(this).animate({"left": "700px", "bottom": "135px"}, 2000, 'swing', function(){
				// Rotate the fish to resemble a caught fish
				$(this).animate({"rotate": "90deg"}, 500, 'swing', function(){

					//Show prompt
					setTimeout(function(){
						show_prompt($('#scene3_prompt2'));
						show_cursor($('#man_with_gear'));
					}, 2000);
					
					// Second action is to click the gear to unwind
					$('#man_with_gear').on('click', function(){
						$('#man_with_gear').off('click');
						hide_prompt($('#scene3_prompt2'));
						hide_cursor($('#man_with_gear'));

						// CSS animation to unwind
						// $('#thread').addClass('wind_thread');
						// $('#thread_dipped').addClass('wind_thread_dipped');
						// $('#hook').addClass('wind_hook');
						// fish.addClass('wind_fish');

						$('#thread').addClass('wind_thread');
						$('#thread_dipped').addClass('wind_thread_dipped');
						$('#hook').addClass('wind_hook');
						fish.addClass('wind_fish');

						// Play winding sound
						$("#winding-sound").prop("currentTime", "0");
						$("#winding-sound").prop("volume", ".4");
						$("#winding-sound").trigger("play");

						show_ripple(600);
						//animate_fish();

						setTimeout(function(){
							$("#winding-sound").trigger("pause");
						}, 3000);

						// Transition to next scene after CSS animation is complete
						setTimeout(function(){
							$('.scene-overlay').animate({"top": "-75%", "left": "-25%", "width": "150%", "height": "250%"}, 500, 'swing', function(){
								$('.scene-overlay').animate({"top": "50%", "left": "50%", "width": "0", "height": "0"}, 500, 'swing', function(){
									sceneFour();
								});
							});
						}, 5000);
					});
				});
			});
		});
	}

	function sceneFour() {
		//Show prompt
		setTimeout(function(){
			show_prompt($('#scene4_prompt1'));
			show_cursor($('#basket'));
		}, 2000);

		// First action is to click on the basket to store fish
		$('#basket').on('click', function(){
			$('#basket').off('click');
			hide_prompt($('#scene4_prompt1'));
			hide_cursor($('#basket'));

			fish.hide();
			$(this).hide();
			$('#load-basket').show();
			setTimeout(function(){
				$('.scene-overlay').animate({"top": "-75%", "left": "-25%", "width": "150%", "height": "250%"}, 500, 'swing', function(){
					$('#load-basket').hide();
					$('#full-basket').show();
					$('.fish').hide();

					// Hide the man with fishing gear in his hand
					$('#man_with_gear').hide();
					$('#thread').hide();
					$('#hook').hide();

					// Show the fishing gear and idle man
					$('#sitting_man').show();
					$('#fishing_gear').show();
					$('#thought-bubble').show();

					// $('#thread').removeClass('wind_thread');
					// $('#thread_dipped').hide().removeClass('wind_thread_dipped');
					// $('#hook').removeClass('wind_hook');
					$('#thread').removeClass('extend').removeClass('wind_thread');
					$('#thread_dipped').removeClass('extend_dipped').removeClass('wind_thread_dipped');
					$('#hook').removeClass('drop').removeClass('wind_hook');
					fish.removeClass('wind_fish');
					fish.animate({"rotate": "0deg"});

					$('.scene-overlay').animate({"top": "50%", "left": "50%", "width": "0", "height": "0"}, 500, 'swing', function(){
						sceneFive();
					});
				});
			}, 3000);
		});
	}

	function sceneFive() {
		//Show prompt
		setTimeout(function(){
			show_prompt($('#scene5_prompt1'));
			show_cursor($('#motor'));
		}, 2000);

		// Second action is to click the motor
		$('#motor').on('click', function(){
			$('#motor').off('click');
			hide_prompt($('#scene5_prompt1'));
			hide_cursor($('#motor'));

			$('#thought-bubble').hide();

			// Play the boat start sound
			start_boat("0");

			// Start rocking the boat
			$('.rock').addClass('rock-boat');

			// Move the boat to the end of the screen
			$('#full-boat').animate({left: '1500px'}, 10000, 'swing', function(){
				// Stop the sound of starting the boat
				stop_boat();

				$('.scene-overlay').animate({"top": "-75%", "left": "-25%", "width": "150%", "height": "250%"}, 500, 'swing', function(){
					$('#full-boat').hide();
					$('#dock').show();
					$('#reverse-full-boat').show().css({"left": "1500px"});
					$('.rock').addClass('rock-boat');

					$('.scene-overlay').animate({"top": "50%", "left": "50%", "width": "0", "height": "0"}, 500, 'swing', function(){
						sceneSix();
					});
				});
			});
		});
	}

	function sceneSix(){	
		// Play the boat start sound
		start_boat("5");

		$('#reverse-full-boat').animate({"left": "250px"}, 7000, 'swing', function(){
			setTimeout(function(){
				stop_boat();
			}, 1000);
			setTimeout(function(){
				$('.scene-overlay').animate({"top": "-75%", "left": "-25%", "width": "150%", "height": "250%"}, 500, 'swing', function(){
					$('#conclusion').show();
					$('#basket').show();
					$('#fishing_gear').show();
					$('#sitting_man').hide();
					$('#full-boat').show().css({"z-index": "400", "left": "600px"}).addClass('small');

					$('.scene-overlay').animate({"top": "50%", "left": "50%", "width": "0", "height": "0"}, 500, 'swing', function(){
						conclusion();	
					});
				});
			}, 3000);
		});
	}

	function conclusion() {
		//Show prompt
		show_prompt($('#conclusion_prompt1'));
		show_cursor($('#full-boat'));

		$('#full-boat').on('click', function(){
			$('#full-boat').off('click');
			hide_prompt($('#conclusion_prompt1'));
			hide_cursor($('#full-boat'));

			$('.scene-overlay').animate({"top": "-75%", "left": "-25%", "width": "150%", "height": "250%"}, 500, 'swing', function(){
				$('#conclusion').hide();

				$('#basket').hide();
				$('#full-basket').hide();
				$('#fishing_gear').hide();
				$('#full-boat').css({"z-index": "0", "left": "200px"}).removeClass('small');
				$('.rock').removeClass('rock-boat');
				$('#reverse-full-boat').hide();
				$('#standing_man').show();
				$('.scene-overlay').animate({"top": "50%", "left": "50%", "width": "0", "height": "0"}, 500, 'swing', function(){
					sceneOne();
				});
			});
		});
	}

	function start_boat(time) {
		$('#motor').addClass("shake shake-constant");
		$("#boat-start-sound").prop("currentTime", time);
		$("#boat-start-sound").prop("volume", ".4");
		$("#boat-start-sound").trigger("play");
	}

	function stop_boat() {
		$('#motor').removeClass("shake shake-constant");
		$("#boat-start-sound").trigger("pause");
	}

	function show_ripple(timeout) {
		setTimeout(function(){
			// Play ripple sound
			$("#ripple-sound").prop("currentTime", "0");
			$("#ripple-sound").prop("volume", ".4");
			$("#ripple-sound").trigger("play");
			$('#ripples').fadeIn(500);
		}, timeout);

		setTimeout(function(){
			$('#ripples').fadeOut(500);
			$("#ripple-sound").trigger("pause");
		}, timeout+500);
	}

	function show_prompt(prompt) {
		prompt.show();
		animate_arrow();
	}

	function hide_prompt(prompt) {
		prompt.hide();
		clearTimeout(prompt_timeout);
	}

	function show_cursor(element) {
		element.css({"cursor": "pointer"});
	}

	function hide_cursor(element) {
		element.css({"cursor": "default"});
	}

	var prompt_timeout;
	function animate_arrow() {
		$('.arrow:visible').animate({
		    left: '+=5px',
		    bottom: '-=5px'
		  }, 400).animate({
		    left: '-=5px',
		    bottom: '+=5px'
		  }, 400).animate({
		    left: '+=5px',
		    bottom: '-=5px'
		  }, 400).animate({
		    left: '-=5px',
		    bottom: '+=5px'
		  }, 400);

		  prompt_timeout = setTimeout(function(){
		  	animate_arrow();
		  }, 2400);
	}

	function animate_fish() {
		fish.animate({
		    "rotate": "100deg"
		  }, 400).animate({
		    "rotate": "80deg"
		  }, 400).animate({
		    "rotate": "100deg"
		  }, 400).animate({
		    "rotate": "80deg"
		  }, 400);

		  setTimeout(function(){
		  	animate_fish();
		  }, 2400);
	}

});

