   $(document).ready(function(){
		$.ajax({
			type:"POST",
			url: classip + "sidenav.php",
			success: function(response){
				$("#mySidenav").html(response);
			}
		});
	});
	
   $(document).ready(function(){
        $.ajax({
                type:"POST",
                url: classip + "status.php?u=1",
                success: function(response){
                        $("#statustable").html(response);
                }
        });
   });

function delbtn(cats){
        if (confirm('您確定要刪除嗎?')){
	if (confirm('刪除後檔案將無法復原，即使這樣仍然要繼續嗎?')){
                imgname="imgname"+cats;
                $.ajax({
                        type:"POST",
                        url: classip + "status.php?u=2",
                        data:{imgname:$('#'+imgname+'').text()},
                        success:function(response){
                        var result = response.trim();
				if(result == '刪除成功'){
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
                                setTimeout('window.location.href= classip + "status.html"', 2000 );
                                return false;
				}else{
					alert(result);
				}
                }
        });
	}
    }
}

function renamebtn(cats){
	var person = prompt("請輸入新名稱(請加上附檔名.img)");
                imgname="imgname"+cats;
                $.ajax({
                        type:"POST",
                        url: classip + "status.php?u=3",
                        data:{imgname:$('#'+imgname+'').text(),newname:person},
                        success:function(response){
                        var result = response.trim();
                                if(result == '修改成功'){
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
				setTimeout('window.location.href= classip + "status.html"', 2000 );
				return false;
                                }
                }
        });
}

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
