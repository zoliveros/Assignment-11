$(document).ready(function(){

$('button').click(function NewTask() {
		var inputItem = document.getElementById("AddTask").value;
		var i = document.createTextNode(inputItem);
		var newItem = document.createElement("li");
		newItem.appendChild(i);
	});


	$('ol').on('click', 'li', function(){
    	$(this).hide("slow");
    });


});
