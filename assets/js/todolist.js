// Strikethrough post click
$("ul").on("click","li",function(){
	$(this).toggleClass('done');
})


// Delete by clicking on X
$("ul").on('click','span',function(event){
	event.stopPropagation();
	$(this).parent().fadeOut('500', function() {
		$(this).remove();
	});;
})

// Adding new To Do items
$("input[type='text']").keypress(function(event) {
	if(event.which === 13)
		{
			var newToDo = $(this).val();
			$(this).val("");
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+ newToDo +"</li>")
		}
});


// Hiding input box
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle('slow/400/fast')
})