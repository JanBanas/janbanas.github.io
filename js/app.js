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