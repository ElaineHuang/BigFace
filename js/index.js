$(document).ready(function() {
	createjs.Sound.registerSound("media/by_chance.mp3","sound");
	createjs.Sound.registerSound("media/button.wav","btn");
	createjs.Sound.registerSound("media/index.mp3","index_music");
	createjs.Sound.registerSound("media/blackout5.mp3","piano");
	$("#catch").hide(); 
	$("#doctor").hide(); 
	$("#smart").hide(); 
	$("#story1").hide();
	
	rwdResize();
	
	createjs.Sound.on("fileload", loadHandler, this);
	
	$( window ).resize(function() {
	 rwdResize();
	});
	
	$("#wood").hover(
	    function() {
		    $(this).addClass('swing animated');
			createjs.Sound.play("sound");
	    },
	    function() {
			$(this).removeClass();
	    }
	 );
	
	$("#bf").hover(
	    function() {
		   $(this).addClass('pulse animated');
	    },
	    function() {
			$(this).removeClass();
	    }
	 );
	 
	$("#circle1").hover(
	    function() {
		   $("#catch").show().removeClass().addClass('rotateIn animated match');
		   circlehover($('#back1'));
		   createjs.Sound.play("btn");
	    },
	    function() {
			$("#catch").addClass('rotateOut animated match');
		    circleself($('#back1'));
		}
	);
	
	$("#circle2").hover(
	    function() {
		   $("#doctor").show().removeClass().addClass('rotateIn animated match');
		   circlehover($('#back2'));
		   createjs.Sound.play("btn");
	    },
	    function() {
			$("#doctor").addClass('rotateOut animated match');
			circleself($('#back2'));
		}
	);
	
	$("#circle3").hover(
	    function() {
		   $("#smart").show().removeClass().addClass('rotateIn animated match');
		  circlehover($('#back3'));
		  createjs.Sound.play("btn");
	    },
	    function() {
			$("#smart").addClass('rotateOut animated match');
			circleself($('#back3'));
		}
	);
	
	$("#story").hover(
	    function() {
		   $("#story1").show().removeClass().addClass('tada animated storymatch');	
			createjs.Sound.play("piano");
	    },
	    function() {
			$("#story1").addClass('bounceOut animated');				
		}
	);
});

function loadHandler() {
     createjs.Sound.play("index_music");  // play using id.  Could also use full source path or event.src.
 }

function circlehover(back)
{
   
  if($(window).width()>767)
  {
  back.css({"width":"150px","height":"150px"});
  }
  else
  {
  back.css({"width":"100px","height":"100px"});
  }
  if($(window).width()>979)
  {
  back.css({"width":"200px","height":"200px"});
  }
  if($(window).width()>1200)
  {
  back.css({"width":"250px","height":"250px"});
  }
}

function circleself(back)
{
	
	if($(window).width()>767)
	{
		back.css({"width":"100px","height":"100px"});
	}
	else 
	{
		back.css({"width":"100px","height":"100px"});
	}
	if($(window).width()>979)
	{
		back.css({"width":"150px","height":"150px"});
	}
	if($(window).width()>1200)
	{
		back.css({"width":"200px","height":"200px"});
	}
}

function rwdResize() {
	if($(window).width()>480)
	 {
	  $("#story1").css("width","400px");
	  $('#back1,#back2,#back3,#catch,#doctor,#smart').css({"width":"100px","height":"100px"});
	 }
	 else
	 {
	  $('#back1,#back2,#back3,#catch,#doctor,#smart').css({"width":"100px","height":"100px"});		  
	  $("#story1").css("width","300px");
	  
	 }
	 
	 if($(window).width()>767)
	 {
	  $("#catch,#doctor,#smart").css({"width":"150px","height":"150px"});
	  $("#story1").css("width","400px");
	 }
	 
	 if($(window).width()>979)
	 {
	  $('#back1,#back2,#back3').css({"width":"150px","height":"150px"});
	  $("#catch,#doctor,#smart").css({"width":"200px","height":"200px"});
	  $("#story1").css("width","600px");
	 }
	 if($(window).width()>1200)
	 {
	  $('#back1,#back2,#back3').css({"width":"200px","height":"200px"});
	  $("#catch,#doctor,#smart").css({"width":"250px","height":"250px"});
	  $("#story1").css("width","600px");
	 } 
}