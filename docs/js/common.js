$(document).ready(function () {
			$('.preloader').hide();
			$('[aria-expanded="false"]').click(function(){
				$('i.fa-chevron-down').toggleClass("up down");
			})
			$('[aria-expanded="true"]').click(function(){
				$('i.fa-chevron-down').toggleClass("up down");
			})
			$('button.cd-btn').click(function() {
				$('body').css('overflowY', 'hidden')
			});
			$('a.svg_close').click(function() {
				$('body').css('overflowY', 'auto')
			});
			/*$('#order_now_modal').attr('style', 'display:block').attr('style', 'paddingRight:0px');*/
			$("#owl-example").owlCarousel({
				items: 1,
				center: true,
				autoWidth: true,
				nav: true,
				autoHeight : true,
				navigation: true,
				pagination: false,
				margin: 100,
				addClassActive : true,
				itemsDesktop : [1199,1],
				itemsDesktopSmall : [980,1],
				itemsTablet: [768,1],
				navigationText: ['&#xf053','&#xf054']
			});
			var carousel = $("#owl-example");
			$('div.first_row_1').click(function(){
				carousel.trigger('owl.jumpTo', 0);
				$('.owl-wrapper-outer').attr("style", "height: auto");
				document.body.style.paddingRight = '0px';
			});
			$('div.first_row_2').click(function(){
				carousel.trigger('owl.jumpTo', 1);
				$('.owl-wrapper-outer').attr("style", "height: auto");
			});
			$('div.first_row_3').click(function(){
				carousel.trigger('owl.jumpTo', 2);
				$('.owl-wrapper-outer').attr("style", "height: auto");
			});
			$('div.second_row_1').click(function(){
				carousel.trigger('owl.jumpTo', 3);
				$('.owl-wrapper-outer').attr("style", "height: auto");
			});
			$('div.second_row_2').click(function(){
				carousel.trigger('owl.jumpTo', 4);
				$('.owl-wrapper-outer').attr("style", "height: auto");
			});
			$('div.second_row_3').click(function(){
				carousel.trigger('owl.jumpTo', 5);
				$('.owl-wrapper-outer').attr("style", "height: auto");
			});


			/*------------Video handler----------*/
			/*Love video*/
			$('.love').mouseenter(function(){
				$('.love_overlay').show();
				$('.heart_icon').hide();
			});
			$('i.love_video_trigger').click(function(){
				$('.love_overlay').hide();
				$('.love_video_container').show();
				$('video.love_video')[0].play();
				$('.water').css('zIndex', '55555');
			});
			$('.love').mouseleave(function(){
				$('.love_video_container').hide();
				$('video.love_video')[0].pause();
				$('.water').css('zIndex', '999');
				$('.love_overlay').hide();
				$('.heart_icon').show();
			});

			/*Water video*/
			$('.water').mouseenter(function(){
				$('.water_overlay').show();
				$('.drop_icon').hide();
			});
			$('i.water_video_trigger').click(function(){
				$('.water_overlay').hide();
				$('.water_video_container').show();
				$('video.water_video')[0].play();
			});
			$('.water').mouseleave(function(){
				$('.water_video_container').hide();
				$('video.water_video')[0].pause();
				$('.water_overlay').hide();
				$('.drop_icon').show();
			});

			/*Tree video*/
			$('.tree').mouseenter(function(){
				$('.tree_overlay').show();
				$('.leaf_icon').hide();
			});
			$('i.tree_video_trigger').click(function(){
				$('.tree_overlay').hide();
				$('.tree_video_container').show();
				$('video.tree_video')[0].play();
			});
			$('.tree').mouseleave(function(){
				$('.tree_video_container').hide();
				$('video.tree_video')[0].pause();
				$('.tree_overlay').hide();
				$('.leaf_icon').show();
			});
			/*-------------Mobile sliders------------*/
			$('.travel_slick').slick({
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				adaptiveHeight: false,
				nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
				prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>'
			});
			$('.gallery_slick').slick({
				dots: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				adaptiveHeight: false,
				autoplay: true,
				autoplaySpeed: 1000,
				nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
				prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
				responsive: [
				{
					breakpoint: 480,
					settings: {
						centerPadding: '20px'
					}
				}
				]  
			});
			$('.feedback_slick').slick({
				dots: true,
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '5px',
				adaptiveHeight: false,
				responsive: [
				{
					breakpoint: 480,
					settings: {
						centerPadding: '1px'
					}
				}
				]  
			});
			/*----------Animation----------*/
			var width = document.body.clientWidth;
			if (width < 751 ) {

				$('a.gallery_ref').attr('data-toggle', 'none')
			}
			$(window).resize(function(){
				var width = document.body.clientWidth;
				if (width < 751 ) {

					$('a.gallery_ref').attr('data-toggle', 'none')
				}
				if (width >= 751 ) {

					$('a.gallery_ref').attr('data-toggle', 'modal')
				}
			});
			$('img.about_girls').mouseenter(function(){
				$(this).addClass('tada');
			});
			$('img.about_girls').mouseleave(function(){
				$(this).removeClass('tada');
			});
			$('img.about_foot').mouseenter(function(){
				$(this).addClass('wobble');
			});
			$('img.about_foot').mouseleave(function(){
				$(this).removeClass('wobble');
			});
			$('.logo_img').mouseenter(function(){
				$(this).addClass('tada');
			});
			$('.logo_img').mouseleave(function(){
				$(this).removeClass('tada');
			});
		$('button.ok').click(function(){
				$('#order_now_modal, #call_us_modal').modal('hide');
		});
		$('#call_us').validate({//form validation
			rules: {
				phone_call_back: {
					required: true,
					digits: true
				}
			},
			messages: {
				phone_call_back: {
					digits: 'Please enter correct phone number'
				}
			},
			submitHandler: function() {
				$.ajax({
					beforeSend: function() {
						$('.overlay_load').show();
						$('.modal_load').show();
					},
					type: 'POST',
					url: $('#call_us').attr('action'),
					data: $('#call_us').serialize(),
					success: setTimeout(function() {
						$('.modal_success').show();
						$('button.ok').click(function() {
							$('.overlay_load, .modal_load, .modal_success').hide();
						})
						$('#call_us')[0].reset();
					}, 3000)
				});
			}
		});
		//Order now modal form
		$('#order_modal').validate({//form validation
			rules: {
				client_name: {
					required: true
				},
				order_phone: {
					required: true,
					digits: true
				}
			},
			messages: {
				order_phone: {
					digits: 'Please enter correct phone number'
				}
			},
			submitHandler: function() {
				$.ajax({
					beforeSend: function() {
						$('.overlay_load').show();
						$('.modal_load').show();
					},
					type: 'POST',
					url: $('#order_modal').attr('action'),
					data: $('#order_modal').serialize(),
					success: setTimeout(function() {
						$('.modal_success').show();
						$('button.ok').click(function() {
							$('.overlay_load, .modal_load, .modal_success').hide();
						})
						$('#order_modal')[0].reset();
					}, 3000) 
				});
			}
		});
		
		//Order at parallax BIG section
		$('#parallax_order_big').validate({//form validation
			rules: {
				parallax_name: {
					required: true
				},
				parallax_phone: {
					required: true,
					digits: true
				}
			},
			messages: {
				parallax_phone: {
					digits: 'Please enter correct phone number'
				}
			},
			submitHandler: function() {
				$.ajax({
					beforeSend: function() {
						$('.overlay_load').show();
						$('.modal_load').show();
					},
					type: 'POST',
					url: $('#parallax_order_big').attr('action'),
					data: $('#parallax_order_big').serialize(),
					success: setTimeout(function() {
						$('.modal_success').show();
						$('button.ok').click(function() {
							$('.overlay_load, .modal_load, .modal_success').hide();
						})
						$('#parallax_order_big')[0].reset();
					}, 3000) 
				});
			}
		});

		//Order at parallax XS section
		$('#parallax_order_small').validate({//form validation
			rules: {
				parallax_name: {
					required: true
				},
				parallax_phone: {
					required: true,
					digits: true
				}
			},
			messages: {
				parallax_phone: {
					digits: 'Please enter correct phone number'
				}
			},
			submitHandler: function() {
				$.ajax({
					beforeSend: function() {
						$('.overlay_load').show();
						$('.modal_load').show();
					},
					type: 'POST',
					url: $('#parallax_order_small').attr('action'),
					data: $('#parallax_order_small').serialize(),
					success: setTimeout(function() {
						$('.modal_success').show();
						$('button.ok').click(function() {
							$('.overlay_load, .modal_load, .modal_success').hide();
						})
						$('#parallax_order_small')[0].reset();
					}, 3000) 
				});
			}
		});

		//Contacts form validation
		$('#contacts_form').validate({//form validation
			rules: {
				footer_name: {
					required: true
				},
				footer_phone: {
					required: true,
					digits: true
				},
				footer_mail: {
					required: true,
					email: true
				}
			},
			messages: {
				footer_phone: {
					digits: 'Please enter correct phone number'
				},
				footer_mail: {
					email: 'Please enter correct e-mail'
				}
			},
			submitHandler: function() {
				$.ajax({
					beforeSend: function() {
						$('.overlay_load').show();
						$('.modal_load').show();
					},
					type: 'POST',
					url: $('#contacts_form').attr('action'),
					data: $('#contacts_form').serialize(),
					success: setTimeout(function() {
						$('.modal_success').show();
						$('button.ok').click(function() {
							$('.overlay_load, .modal_load, .modal_success').hide();
						})
						$('#contacts_form')[0].reset();
					}, 3000) 
				});
			}
		});

		  /*-------IE styles--------*/


		  if($.browser.msie) {
				// тут пишем обработчик для IE броузера
				var $width = document.body.clientWidth;
				$('.modal-backdrop.in').attr('style', 'opacity: 0.9')
				$('.owl-prev, .owl-next').css('position', 'absolute')
				$('form').css({
					position: 'relative',
					height: 'auto'
				})
				$('option').css('zIndex', '10000')
				$('.modal_success').css('background', 'white')
				$('select').css({
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7,
					overflow: 'visible',
					overflowX: 'visible'
				})
				$('input[name="phone_call_back"]').css({
					marginTop: '5%'
				})
				$('label.error').css("float", 'left')
				/*labels styles*/
				$('label[for="call_back"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '3%',
					top: '9%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="order_now_name"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '3%',
					top: '5%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="order_now_phone"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '3%',
					top: '27%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="par_lg_name"], label[for="par_lg_phone"], label[for="par_sm_name"], label[for="par_sm_phone"], label[for="footer_name"], label[for="footer_phone"], label[for="footer_mail"]').show();

				$('label[for="par_lg_name"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '1%',
					top: '27%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="par_lg_phone"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '23.5%',
					top: '27%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="par_sm_name"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '12%',
					top: '8%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="par_sm_phone"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '12%',
					top: '45%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="footer_name"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '7%',
					top: '4%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="footer_phone"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '7%',
					top: '27%',
					fontFamily: 'Roboto',
					fontSize: '16px',
					marginBottom: "0px",
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				$('label[for="footer_mail"]').css({
					visibility: 'visible',
					position: 'absolute',
					left: '7%',
					top: '51%',
					marginBottom: "0px",
					fontFamily: 'Roboto',
					fontSize: '16px',
					color: 'rgb(44, 46, 55)',
					fontWeight: 400,
					opacity: 0.7
				})
				/*===Adaptive====*/
				if($width>=497 && $width<=784) {
					$('label[for="footer_name"]').css({
						top: '6%'
					})
					$('label[for="footer_phone"]').css({
						top: '30%'
					})
					$('label[for="footer_phone"]').css({
						top: '53%'
					})
				}
				if($width>=785 && $width<=1008) {
					$('label[for="par_lg_phone"]').css({
						left: '1%',
						top: '44%'
					})
					$('label[for="par_lg_name"]').css({
						left: '1%',
						top: '9%'
					})
				}
				if($width>=1009 && $width<=1216) {
					$('label[for="par_lg_phone"]').css('left', '28%')
				}

				$(window).resize(function(){
					var $width = document.body.clientWidth;
					if($width>=497 && $width<=784) {
					$('label[for="footer_name"]').css({
						top: '6%'
					})
					$('label[for="footer_phone"]').css({
						top: '30%'
					})
					$('label[for="footer_phone"]').css({
						top: '53%'
					})
				}
					if($width>=785 && $width<=1008) {
					$('label[for="par_lg_phone"]').css({
						left: '1%',
						top: '44%'
					})
					$('label[for="par_lg_name"]').css({
						left: '1%',
						top: '9%'
					})
				}
				if($width>=1009 && $width<=1216) {
					$('label[for="par_lg_phone"]').css({
						left: '28%',
						top: '27%'
					})
					$('label[for="par_lg_name"]').css({
						left: '1%',
						top: '27%'
					})
				}
				if ($width > 1216) {
					$('label[for="par_lg_phone"]').css({
						left: '23.5%',
						top: '27%'
					})
					$('label[for="par_lg_name"]').css({
						left: '1%',
						top: '27%'
					})
				}
				})

				/*=====labels hide=====*/
				$('input.order_now').css('marginTop', '4%')
				$('.work_ico').mouseenter(function(){
					$(this).css('zoom', '1')
				});

				
					
				$('input.call_back').focusin(function(){
					$('label[for="call_back"]').hide();
				})
				$('input.call_back').focusout(function(){
					$('label[for="call_back"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="call_back"]').hide();
					}
				})
				$('input.call_back').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="call_back"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="call_back"]').css('zIndex', '1')
					}
					
				})
				$('input.order_now_name').focusin(function(){
					$('label[for="order_now_name"]').hide();
				})
				$('input.order_now_name').focusout(function(){
					$('label[for="order_now_name"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="order_now_name"]').hide();
					}
				})
				$('input.order_now_name').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="order_now_name"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="order_now_name"]').css('zIndex', '1')
					}
					
				})
				$('input.order_now_phone').focusin(function(){
					$('label[for="order_now_phone"]').hide();
				})
				$('input.order_now_phone').focusout(function(){
					$('label[for="order_now_phone"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="order_now_phone"]').hide();
					}
				})
				$('input.order_now_phone').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="order_now_phone"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="order_now_phone"]').css('zIndex', '1')
					}
					
				})
				$('input.par_lg_name').focusin(function(){
					$('label[for="par_lg_name"]').hide();
				})
				$('input.par_lg_name').focusout(function(){
					$('label[for="par_lg_name"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="par_lg_name"]').hide();
					}
				})
				$('input.par_lg_name').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="par_lg_name"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="par_lg_name"]').css('zIndex', '1')
					}
					
				})
				$('input.par_lg_phone').focusin(function(){
					$('label[for="par_lg_phone"]').hide();
				})
				$('input.par_lg_phone').focusout(function(){
					$('label[for="par_lg_phone"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="par_lg_phone"]').hide();
					}
				})
				$('input.par_lg_phone').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="par_lg_phone"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="par_lg_phone"]').css('zIndex', '1')
					}
					
				})
				$('input.par_sm_name').focusin(function(){
					$('label[for="par_sm_name"]').hide();
				})
				$('input.par_sm_name').focusout(function(){
					$('label[for="par_sm_name"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="par_sm_name"]').hide();
					}
				})
				$('input.par_sm_name').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="par_sm_name"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="par_sm_name"]').css('zIndex', '1')
					}
					
				})
				$('input.par_sm_phone').focusin(function(){
					$('label[for="par_sm_phone"]').hide();
				})
				$('input.par_sm_phone').focusout(function(){
					$('label[for="par_sm_phone"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="par_sm_phone"]').hide();
					}
				})
				$('input.par_sm_phone').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="par_sm_phone"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="par_sm_phone"]').css('zIndex', '1')
					}
					
				})
				$('input.footer_name').focusin(function(){
					$('label[for="footer_name"]').hide();
				})
				$('input.footer_name').focusout(function(){
					$('label[for="footer_name"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="footer_name"]').hide();
					}
				})
				$('input.footer_name').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="footer_name"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="footer_name"]').css('zIndex', '1')
					}
					
				})
				$('input.footer_phone').focusin(function(){
					$('label[for="footer_phone"]').hide();
				})
				$('input.footer_phone').focusout(function(){
					$('label[for="footer_phone"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="footer_phone"]').hide();
					}
				})
				$('input.footer_phone').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="footer_phone"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="footer_phone"]').css('zIndex', '1')
					}
					
				})
				$('input.footer_mail').focusin(function(){
					$('label[for="footer_mail"]').hide();
				})
				$('input.footer_mail').focusout(function(){
					$('label[for="footer_mail"]').show();
					if (document.createElement("input").placeholder != undefined){
						$('label[for="footer_mail"]').hide();
					}
				})
				$('input.footer_mail').keypress(function(){
					if ($(this).val().length>0) {
						
						$('label[for="footer_mail"]').css('zIndex', '-1')
					}
					if ($(this).val().length==0) {
						
						$('label[for="footer_mail"]').css('zIndex', '1')
					}
					
				})
				$('button.ok').click(function(){
					$('label').css('zIndex', '1')
				})


		}
		if (document.createElement("input").placeholder != undefined){
    // Placeholder is not supported
    		$('label[for="par_lg_name"], label[for="par_lg_phone"], label[for="par_sm_name"], label[for="par_sm_phone"], label[for="footer_name"], label[for="footer_phone"], label[for="footer_mail"], label[for="call_back"], label[for="order_now_name"], label[for="order_now_phone"]').hide();
			}
		/*Nice scroll*/
		$("#lg_menu").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;
			
			//анимируем переход на расстояние - top за 500 мс
			$('body,html').animate({scrollTop: top}, 750);
		});

		$('#modal_slider').on('show.bs.modal', function (e) {
	     $('body').addClass('test');
	     $(this).css('zIndex', '80000');
		});
		$('#order_now_modal').on('show.bs.modal', function (e) {
	     $('body').addClass('test');
	     $(this).css('zIndex', '80000');
		});
		$('#call_us_modal').on('show.bs.modal', function (e) {
	     $('body').addClass('test');
	     $(this).css('zIndex', '80000');
		}); 
		$('#cd_modal').on('show.bs.modal', function (e) {
	     $('body').addClass('test');
	     $(this).css('zIndex', '80000');
		});
		
		var scene = document.getElementById('scene');
				var parallax = new Parallax(scene, {
					limitY: 1
				});

		});