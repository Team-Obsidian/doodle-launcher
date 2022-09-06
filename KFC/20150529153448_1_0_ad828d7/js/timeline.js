$(document).ready(function() {

	var $container = $('#container'),
	$colForm = $("#colForm"),
	clearMePrevious = '',
	$sidebar   = $("#rightCol"),
	$window    = $(window),
	offset     = $sidebar.offset(),
	topPadding = 10;

	// Hide sidebar form by default
	$colForm.toggle().css({visibility:"visible"});

	// Add dropshadow to elements
	//$("#header, #options, #rightCol").dropShadow({left:-1,top:-1,blur:2,opacity:.4});

	// Show thanks box if querystring exists
	if(getQuerystring('f')) {
		$.fancybox(
		'<h2>Your Story has Been Submitted</h2><p>Thank you for adding to the legacy of the Colonel, and enjoy the other amazing stories throughout the site.</p>',
		{
			'transitionIn'		: 'none',
			'transitionOut'		: 'none'
		});
	}

	if(!readCookie("intro")) {
		playIntro();
		createCookie("intro","true",30);
	}

	function createCookie(name,value,days) {
		if (days) {
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}

	function readCookie(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function playIntro() {
		$.fancybox(
			{
				'overlayColor'		: '#000',
				'transitionIn'		: 'fade',
				'padding'			: 0,
				'speedIn'			: 300,
				'speedOut'			: 300,
				'zoomOpacity'		: true,
				'type'				: 'iframe',
				'scrolling'			: 'no',
				'width'				: 720,
				'height'			: 396,
				'href'				: 'includes/intro/intro.html'
			}
		);
	}

	$("#clickTerms").click(function(){
		$.fancybox(
			{
				'overlayColor'		: '#000',
				'transitionIn'		: 'fade',
				'padding'			: 20,
				'speedIn'			: 300,
				'speedOut'			: 300,
				'zoomOpacity'		: true,
				'autoDimensions'	: false,
				'height'			: '50%',
				'type'				: 'iframe',
				'href'				: 'includes/terms.html'
			}
		);
	});

function quoter() {
	var items = ['What is twelve minus five?','What is four plus three?', 'What is four minus three?'];
	console.log(items);
	var $chosenQuote = items[Math.floor(Math.random()*items.length)];
	console.log($chosenQuote);
	var $quoteBox = $("#quote-label");
	$($quoteBox).append($chosenQuote);

	if ($chosenQuote == items[0]) {
		quoteAnswer = "7";
	} else if ($chosenQuote == items[1]) {
		quoteAnswer = "7";
	} else {
		quoteAnswer = "1"
	}
	console.log(quoteAnswer);
}

	// Show form
	$('#shareStory').click(function(){
		$("#aboutCol").slideToggle(0, function(){
			$colForm.slideToggle("slow");
			quoter();
		});
		return false;
	});


	// Clear input on focus
	$('#csName, #csEmail, #quoteMe').focus(function(){
	if($(this).val()==$(this).attr('title')){
		clearMePrevious = $(this).val();
		$(this).val('');
	}
	}).blur(function(){
		if($(this).val()==''){
			$(this).val(clearMePrevious);
		}
	});

	// Wait until images are loaded to start isotope
	function imagesLoaded(callback){
		var elems = this.filter('img'),
		  len   = elems.length,
		  blank = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		elems.bind('load',function(){
		  if (--len <= 0 && this.src !== blank){ callback.call(elems,this); }
		}).each(function(){
		 if (this.complete || this.complete === undefined){
			var src = this.src;
			this.src = blank;
			this.src = src;
		 }
		});
		return this;
	};

	$container.delegate('.videos', 'click', function(event) {
		var $this = $(this),
		$title = $this.find(".name").text(),
		path = $this.attr('data-url'),
		vidPath = 'video.asp?vidID='+path;

		$.fancybox(
			{
				'overlayColor'		: '#000',
				'transitionIn'		: 'fade',
				'padding'			: 0,
				'speedIn'			: 300,
				'speedOut'			: 300,
				'zoomOpacity'		: true,
				'type'				: 'iframe',
				'width'				: 640,
				'height'			: 510,
				'href'				: vidPath
			}
		);
	});

	$container.delegate('.photos', 'click', function(event) {
		var $this = $(this),
		$title = $this.find(".name").text(),
		path = "images/timeline/"+$this.attr('data-full');

		$.fancybox(
			{
				'overlayColor'		: '#000',
				'transitionIn'		: 'fade',
				'padding'			: 0,
				'speedIn'			: 300,
				'speedOut'			: 300,
				'zoomOpacity'		: true,
				'href'				: path
			}
		);
	});

	$container.delegate('.stories', 'click', function(event) {
		var $this = $(this),
		$title = $this.find(".name").text(),
		$desc = $this.find(".longdesc"),
		$href = $desc.attr('id');

		$.fancybox(
			{
				'overlayColor'		: '#000',
				'transitionIn'		: 'fade',
				'padding'			: 20,
				'speedIn'			: 300,
				'speedOut'			: 300,
				'zoomOpacity'		: true,
				'autoDimensions'	: false,
				'height'			: '50%',
				'href'				: '#'+$href,
				onCleanup  :   function() {
					$desc.parent().css({'width':'auto','height':'auto'});
				}
			}
		);
	});

	$container.delegate('.element', 'hover', function(event) {
		if (event.type == 'mouseenter') {
			$(this).toggleClass('current');
		} else {
		   $(this).toggleClass('current');
		}
	});


	// Sorting Buttons
	$('#sort a').click(function(){
		var $this = $(this),
		sortName = $this.attr('href').slice(1)
		$container.isotope({
		  sortBy : sortName
		});
		$( "#slideHandle" ).slider( "value", $this.attr('data-pos') );

		if ( !$this.hasClass('selected') ) {
		  $this.parents('.option-set').find('.selected').removeClass('selected');
		  $this.addClass('selected');
		}

		return false;
	});

	// Load isotope after imagesLoaded is fired
  $container.imagesLoaded( function(){
	  $("#loading").hide();
	$(this).isotope({
		itemSelector : '.element',
		animationEngine : 'jquery',
		getSortData : {
		  photos : function( $elem ) {
			var $data = $elem.attr('data-type');
			if($data == 'photos') {
				return 'a';
			} else {
				return $elem.attr('data-type');
			}
		  },
		  quotes : function( $elem ) {
			var $data = $elem.attr('data-type');
			if($data == 'quotes') {
				return 'a';
			} else {
				return $elem.attr('data-type');
			}
		  },
		  stories : function( $elem ) {
			var $data = $elem.attr('data-type');
			if($data == 'stories') {
				return 'a';
			} else {
				return $elem.attr('data-type');
			}
		  },
		  videos : function( $elem ) {
			var $data = $elem.attr('data-type');
			if($data == 'videos') {
				return 'a';
			} else {
				return $elem.attr('data-type');
			}
		  }
		},
			masonry : {
			  columnWidth : 120
			},
			masonryHorizontal : {
			  rowHeight: 120
			},
			cellsByRow : {
			  columnWidth : 240,
			  rowHeight : 240
			},
			cellsByColumn : {
			  columnWidth : 240,
			  rowHeight : 240
			}
	  });

	  $container.css("visibility", "visible");



	});

	// UI Slider under navigation
	$( "#slideHandle" ).slider({
		value:0,
		min: 0,
		max: 4,
		step: 1,
		slide: function( event, ui ) {
			$("#sort a").eq(ui.value).click();
		}
	});

	$container.infinitescroll({
        navSelector  : '#page_nav',    // selector for the paged navigation
        nextSelector : '#page_nav a',  // selector for the NEXT link (to page 2)
        itemSelector : '.element',     // selector for all items you'll retrieve
        donetext  : 'No more pages to load.',
        loadingImg : 'images/loading.gif',
        debug: false,
        errorCallback: function() {
          // fade out the error message after 2 seconds
          $('#infscr-loading').animate({opacity: .8},2000).fadeOut('normal');
        }
        },
        // call Isotope as a callback
        function( newElements ) {
			$container.isotope( 'insert', $( newElements ) );
        }
      );

	// Keep sidebar pinned to top of page
	$window.scroll(function() {
		if ($window.scrollTop() > offset.top) {
			$("#rightCol_dropShadow, #rightCol").stop().animate({
				marginTop: $window.scrollTop() - offset.top + topPadding
			}, 600, 'easeInOutExpo');
		} else {
			$("#rightCol_dropShadow, #rightCol").stop().animate({
				marginTop: 0
			});
		}
	});


	function getQuerystring(key, default_)
	{
	  if (default_==null) default_="";
	  key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	  var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
	  var qs = regex.exec(window.location.href);
	  if(qs == null)
		return default_;
	  else
		return qs[1];
	}

	$("#topbtn").click(function(){
		$('html,body').animate({scrollTop: 0}, 500);
	});

});