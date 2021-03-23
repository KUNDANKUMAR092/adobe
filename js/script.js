$(".right_container_for_mobile").click(function(){
   $(".right_container").addClass("active");
});
$(".close_inmobile").click(function(){
	$(".right_container").removeClass("active");
})