$(document).ready(function() {
//   createjs.Sound.registerSound("introduce.mp3","introducemusic");
//   createjs.Sound.play("introducemusic");
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