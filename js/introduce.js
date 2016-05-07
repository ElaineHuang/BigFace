$(document).ready(function() {
  createjs.Sound.registerSound("media/introduce.mp3","introducemusic");
  
  createjs.Sound.on("fileload", loadHandler, this);
  
  $("#wood").hover(
        function() {
		    $(this).addClass('swing animated wood');
			
        },
        function() {
			$(this).removeClass();
			$(this).addClass('wood');
        }
     );

  $("#bf").hover(
        function() {
		   $(this).addClass('pulse animated bf');
        },
        function() {
			$(this).removeClass();
			$(this).addClass('bf');
        }
     );
	 
  $("#return").hover(
    function() {
	    $(this).addClass('rubberBand animated');
		
    },
    function() {
		$(this).removeClass();
    }
  );
});

function loadHandler() {
  createjs.Sound.play("introducemusic");
}
