function BAN() {
	var text = document.getElementById("input").value;
	document.getElementById("reason_text").innerHTML = text;

	var dt = new Date();
	var year = dt.getFullYear();
	var month = dt.getMonth()+1;
	var day = dt.getDate();
	var hours = dt.getHours();
	var minutes = dt.getMinutes();
	var date = year + '/' + month + '/' + day +' '+ hours + ':' + minutes + ' ～';

	document.getElementById("date").innerHTML = date;

	if($(".result").css("display") == "none"){
		$(".result").slideDown("fast");
	}
	window.scrollTo(0,0);
}