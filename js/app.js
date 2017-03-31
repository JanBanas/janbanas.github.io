var countStars = function () {
  var checkedRadio = document.querySelector('.stars input:checked');
  console.log(checkedRadio.value);
};

document.querySelector('.stars').addEventListener('click', countStars);


function zmiana()
{
	boxik = document.getElementById("secOne");
	
	if (boxik.style.visibility == "hidden") boxik.style.visibility="visible";
	else boxik.style.visibility="hidden";
}




$(document).ready(function() {
$("#click").click(function () { 
$('#show').slideToggle('normal');
});
});

$(document).ready(function() {
$("#click2").click(function () { 
$('#show2').slideToggle('normal');
});
});

jQuery(function(){
    $("map.mainnav area")
      .on("mouseenter", function(){
        $("#menu_img").attr("src", $(this).data("menu-src"));
      })
      .on("mouseleave", function(){
        $("#menu_img").attr("src", $("#menu_img").data("menu-src"));
      });
});