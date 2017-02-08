	$(document).ready(function(){
     $("#but").click(function(){
		 var city = $("#first_name2").val();
        $.get("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d8ab3459a68d80e631d742bfa3ab88b9",function(data){
		debugger;
		var ans=data.main.temp- 273.15;
		var ans = ans.toFixed(2);
		$("#temp").html(ans);
		if(ans>30)
		{
			$("#im").html("<h1>It's very hot!!</h1>");
		}
				
		else if(ans>0 && ans<30)
		{
			$("#im").html("<h1>Weather is Nice!!</h1>");
		}
		else
		{
			$("#im").html("<h1>It's Frezzing!!</h1>");
		}
				console.log(data);
		
		});
    });
});
