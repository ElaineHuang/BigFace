var beautynumber = 0;
var modifynumber = 0;

image1 = new Image();
image1.src = "images/again.png";
image2 = new Image();
image2.src = "images/again1.png";
image3 = new Image();
image3.src = "images/return.png";
image4 = new Image();
image4.src = "images/return1.png";

function beauty()
{
	beautynumber++;
	if(beautynumber+modifynumber == 5)
	{
	  show();
	  $("#beauty").off('hover');
	  $("#modify").off('hover');
	  leave();
	  Return();
	  resize();
	}
}

function modify()
{
	modifynumber++;
	if(beautynumber+modifynumber == 5)
	{
	  show();
	  $("#beauty").off('hover');
	  $("#modify").off('hover');
	  leave();
	  Return();
	  resize();
	}
}

function leave()
{
	
	$('#modify').attr( "src","images/again.png" );
	$('#modify').attr( "height","80" ); 
	$('#modify').attr( "width","350" );
	$('#modify').attr( "style","position:absolute;bottom:10px; right:10px;");
	$("#modify").hover(
            function() {
              $(this).addClass('pulse animated');
            },
            function() {
              $(this).removeClass();
            }
         );
	$('#modify').click(function(){ location.href="operation.html"; });
	
}
function Return()
{
	$('#beauty').attr("src","images/return.png");
	$('#beauty').attr( "height","80" ); 
	$('#beauty').attr( "width","350" );
	$('#beauty').attr( "style","position:absolute;bottom:10px; left:10px;");
	$("#beauty").hover(
            function() {
               $(this).addClass('pulse animated');
            },
            function() {
               $(this).removeClass();
            }
         );
	$('#beauty').click(function(){ location.href="index.html"; });
}

function show()
{

if(beautynumber == 5)
{
	$("#please").attr( "src", "images/bigface.png");
	$("#bf").attr( "src", "images/big.jpg");
	
}

else if(beautynumber == 4 && modifynumber == 1)
{
	$("#please").attr( "src", "images/moonface.png");
	$("#bf").attr( "src", "images/moonface1.png");
}

else if(beautynumber == 3 && modifynumber == 2)
{
	$("#please").attr( "src", "images/babyface.png");
	$("#bf").attr( "src", "images/babyface1.jpg");
}

else if(beautynumber == 2 && modifynumber == 3)
{
	$("#please").attr( "src", "images/prettyface.png");
	$("#bf").attr( "src", "images/thinface.jpg");
}

else if(beautynumber == 1 && modifynumber == 4)
{
	$("#please").attr( "src", "images/noface.png");
	$("#bf").attr( "src", "images/noface1.jpg");
}

if(modifynumber == 5)
{
	$("#please").attr( "src", "images/shyface.png");
	$("#bf").attr( "src", "images/shyface1.png");

}

}
