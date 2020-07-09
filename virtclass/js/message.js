function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-light-grey", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-light-grey";
}

//未處理表格
$(document).ready(function(){
        $.ajax({
                type:"POST",
                url: classip + "message.php?u=1",
                success: function(response){
                        $("#msgtable").html(response);
                }
        });
});

//已處理表格
$(document).ready(function(){
        $.ajax({
                type:"POST",
                url: classip + "message.php?u=2",
                success: function(response){
                        $("#altable").html(response);
                }
        });
});

//已處理按鈕
function dealbtn(cats){
	if (confirm('您確定已處理完畢了?')){
	mid="mid"+cats;
	$.ajax({
		type:"POST",
		url: classip + "message.php?u=3",
		data:{mid:$('#'+mid+'').text()},
		success: function(response,status){
		var result = response.trim();
		if(result == '資料庫修改成功'){
			//alert (result);
			window.location.href= classip + "message.html"
		}
		else {alert(result);}
		},
		error:function(res){
			alert(error);
		}
	});
  }
}

//未處理按鈕
function undealbtn(cats){
        unmid="unmid"+cats;
        $.ajax({
                type:"POST",
                url:  classip + "message.php?u=4",
                data:{unmid:$('#'+unmid+'').text()},
                success: function(response,status){
                var result = response.trim();
                if(result == '資料庫修改成功'){
                        //alert (result);
                        window.location.href= classip + "message.html"
                }
                else {alert(result);}
                },
                error:function(res){
                        alert(error);
                }
        });
}

//刪除按鈕
function delbtn(cats){
        if (confirm('您確定要刪除嗎?')){
        unmid="unmid"+cats;
        $.ajax({
                type:"POST",
                url: classip + "message.php?u=5",
                data:{unmid:$('#'+unmid+'').text()},
                success: function(response,status){
                var result = response.trim();
                if(result == '資料庫刪除成功'){
                        //alert (result);
                        window.location.href= classip + "message.html"
                }
                else {alert(result);}
                },
                error:function(res){
                        alert(error);
                }
        });
  }
}

$(document).ready(function(){
        $.ajax({
                type:"POST",
                url: classip + "sidenav.php",
                success: function(response){
                        $("#mySidenav").html(response);
                }
        });
});

