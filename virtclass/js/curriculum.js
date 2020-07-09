$(document).ready(function(){
        $.ajax({
                type:"POST",
                url: classip + "curriculum.php",
                success: function(response){
                        $("#classtable").html(response);
                }
        });
   });

   $(document).ready(function(){     //登入判斷
        $.ajax({
                type:"POST",
                url:  classip + "sidenav.php",
                success: function(response){
                        $("#mySidenav").html(response);
                }
        });
   });

function classbtn(cats){
	week="week"+cats;
	period="period"+cats;
	classname="classname"+cats;
	classtotal="classtotal"+cats;
	time="time"+cats;
		$.ajax({
			type:"POST",
			url:  classip + "setcurriculum.php?set=1",
			data:{week:$('#'+week+'').val(),period:$('#'+period+'').val(),classname:$('#'+classname+'').val(),classtotal:$('#'+classtotal+'').val(),time:$('#'+time+'').val()},
				success: function(response,status){
				var result = response.trim();
				if (result == '課程修改完畢'){
					alert(result);
					window.location.href= classip + "curriculum.html"
				}else{
					alert(result);	
			}	
		}
	});
}

function addclassbtn(cats){
        addweek="addweek"+cats;
        addperiod="addperiod"+cats;
        addclassname="addclassname"+cats;
        addclasstotal="addclasstotal"+cats;
        addtime="addtime"+cats;
                $.ajax({
                        type:"POST",
                        url:  classip + "setcurriculum.php?set=2",
                        data:{addweek:$('#'+addweek+'').val(),addperiod:$('#'+addperiod+'').val(),addclassname:$('#'+addclassname+'').val(),addclasstotal:$('#'+addclasstotal+'').val(),addtime:$('#'+addtime+'').val()},
                                success: function(response,status){
                                var result = response.trim();
                                if (result == '課程新增完畢'){
                                        alert(result);
                                        window.location.href= classip + "curriculum.html"
                        }
                                else{
                                        alert(result);
                        }
                }
        });
}

function delclassbtn(cats){
	if (confirm('您確定要刪除本課程嗎?')){
	classname="classname"+cats;
                $.ajax({
                        type:"POST",
                        url:  classip + "setcurriculum.php?set=3",
                        data:{classname:$('#'+classname+'').val()},
                                success: function(response,status){
                                var result = response.trim();
                                if (result == '刪除中'){
                        	$('button').prop('disabled', true); 
				toastr.options = {
				  "debug": true,
				  "progressBar": true,
				  "positionClass": "toast-top-center",
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "2000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
				}
				toastr["success"](response);
				setTimeout('window.location.href= classip + "curriculum.html"', 2000 );
				return false;
				}
                                else{
                                        alert(result);
                        	}	
                }
        });
	}
}	
