$(function (){
	$("#gray").attr('src',gray);
	$("#blue").attr('src',blue);
	$("#green").attr('src',green);
	$("#red").attr('src',red);
});
setTimeout('window.location.reload(pcimg)', 180000 );
function pcimg() {
	$.ajax({
        type:"POST",
        url: classip + "index.php?u=3",
                success: function(response){
                        var a =JSON.parse(response);
                        for (var i=0;i<a.length;i++){
                                if (a[i].vm_status==0) {
                                        $("#pcimg"+[i+1]).attr('src', gray);
                                        $("#pcmodal"+[i+1]).attr('data-target', "#Modal"+[i+1]+"");
                                        $("#openbtn"+[i+1]).attr('onclick', "openbtn("+[i+1]+")");
                                } else if (a[i].vm_status==1){
				        $("#pcimg"+[i+1]).attr('src', blue);
                                } else if (a[i].vm_status==2) {
                                        $("#pcimg"+[i+1]).attr('src', green);
                                        $("#pcmodal"+[i+1]).attr('data-target', "#PoweroffModal"+[i+1]+"");
                                        $("#openbtn"+[i+1]).attr('onclick', "closebtn("+[i+1]+")");
                                } else if (a[i].vm_status==3){
					$("#pcimg"+[i+1]).attr('src', red);
				} else if (a[i].vm_status==4){
                                        $("#pcimg"+[i+1]).attr('src', "./images/orange.png");
                                } else if (a[i].vm_status==5){
                                        $("#pcimg"+[i+1]).attr('src', "./images/yellow.png");
                                }
                        }
                }
        });
}

	window.addEventListener("load",init);
	var com,pcid,seat;
	function init(){
	$("body").tooltip({ selector: '[data-toggle=tooltip]' });
	$('.alert').alert();
		com = document.getElementById("comarea");
		commsg="";
		for(i=1;i<=6;i++){
			commsg=commsg+"<tr>";
			for(j=0;j<=30;j=j+6){
				seat=parseInt(i) + parseInt(j);
				aa=Math.ceil(seat/2);
				bb=(seat%2);			
				seat1="PC"+aa+"-1";	
				seat2="PC"+aa+"-2";
				if( bb==0 )
					pcid = seat2;
				else
					pcid = seat1;
				if (j==6 || j==18) commsg=commsg;
				commsg=commsg+"<td class=\"bg-khaki border border-top-0 border-bottom-0 border-left-0 border-white text-center\" style=\"width:10%;\" />"+
						"<div id=\"openbtn"+seat+"\" class=\"pointer\" type=\"hidden\" onclick=\"\">"+
						"<input type=\"hidden\" value=\""+pcid+"\" id=\"pcid"+seat+"\" maxlength=\"6\" />"+
						"<input type=\"hidden\" value=\""+aa+"\" id=\"hostnum"+seat+"\" maxlength=\"6\" />"+
						"<input type=\"hidden\" id=\"cpcid"+seat+"\" value=\""+pcid+"\" maxlength=\"6\" />"+
						"<input type=\"hidden\" id=\"chostnum"+seat+"\" value=\""+aa+"\" maxlength=\"6\" />"+
						"<input type=\"hidden\" id=\"mod"+seat+"\" value=\"0\" maxlength=\"1\" />"+
						"<img class=\"w-100\" title=\""+seat+"號\" data-toggle=\"tooltip\" id=\"pcimg"+seat+"\" src=\"\"/></div></td>"
			if (j==18 || j==6) commsg=commsg+"<td class=\"t01\"></td>";
			}
			if (i==4){
				commsg=commsg+"<tr>"+
						"<td class=\"three1 bg-amber\"></td><td class=\"three2 bg-amber\"></td><td class=\"t01\"></td>"+
						"<td class=\"three1 bg-amber\"></td><td class=\"three2 bg-amber\"></td><td class=\"t01\"></td>"+
						"<td class=\"three1 bg-amber\"></td><td class=\"three2 bg-amber\"></td><tr/>"+
						"<tr class=\"t00\"><td class=\"t02\"></td></tr>"
			}
                        if (i==2){
				commsg=commsg+"<tr>";
				for(a=0; a<=0; a++){
					for(b=37;b<=42;b=b+1){
					seat=parseInt(a) + parseInt(b);
	                                aa=Math.ceil(seat/2);
	                                bb=(seat%2);
				seat1="PC"+aa+"-1";	
				seat2="PC"+aa+"-2";
				if( bb==0 )
					pcid = seat2;
				else
					pcid = seat1;
                                commsg=commsg+"<td class=\"bg-amber text-center\" style=\"border:none;\"><div id=\"openbtn"+seat+"\" class=\"pointer\" type=\"hidden\" onclick=\"\">"+
                                                "<input type=\"hidden\" value=\""+pcid+"\" id=\"pcid"+seat+"\" maxlength=\"6\" />"+
                                                "<input type=\"hidden\" value=\""+aa+"\" id=\"hostnum"+seat+"\" maxlength=\"6\" />"+
                                                "<input type=\"hidden\" id=\"cpcid"+seat+"\" value=\""+pcid+"\" maxlength=\"6\" />"+
                                                "<input type=\"hidden\" id=\"chostnum"+seat+"\" value=\""+aa+"\" maxlength=\"6\" />"+
                                                "<input type=\"hidden\" id=\"mod"+seat+"\" value=\"0\" maxlength=\"1\" />"+
                                                "<img class=\"w-100\" title=\""+seat+"號\" data-toggle=\"tooltip\" id=\"pcimg"+seat+"\" src=\"\"/></div></td>";
						if (b==38 || b==40){
							commsg=commsg+"<td class=\"t01\"></td>";
						}
					}
				}
                                                commsg=commsg+"</tr>";
                                commsg=commsg+"<tr class=\"t00\"><td class=\"t02\"></td></tr>";
                        }
			
		}
		com.innerHTML=commsg;
	}
	
(function() {
   'use strict';
   window.addEventListener('load', function() {
           var forms = document.getElementsByClassName('js_twbs_form');
                   // Loop over them and prevent submission
                       var validation = Array.prototype.filter.call(forms, function(form) {
                               form.addEventListener('submit', function() {
                                         }, false);
                                $("#sendbtn").click(function(event) {
                                         if (form.checkValidity() === false) {
                                              form.classList.add('was-validated');
                                              event.preventDefault();
                                              event.stopPropagation();
                                          }
                                      });
				 $("#changebtn").click(function(event) {
				          if (form.checkValidity() === false) {
				            form.classList.add('was-validated');
            				    event.preventDefault();
      					    event.stopPropagation();
  			       }
  		      });
              });
      }, false);
})();
                                                                                                                             
function checkPasswords(type="text/javascript") {
                    var passwd1 = document.getElementById('passwd1');
                    var passwd2 = document.getElementById('passwd2');
		    var newpasswd1 = document.getElementById('newpasswd1');
		    var newpasswd2 = document.getElementById('newpasswd2');
                    if (passwd1.value != passwd2.value || newpasswd1.value != newpasswd2.value){
                        passwd2.setCustomValidity('密碼不一致 請重新確認');
			newpasswd2.setCustomValidity('密碼不一致 請重新確認');
                    } else {
                       passwd2.setCustomValidity('');
		       newpasswd2.setCustomValidity('');
                  }
}

$(function (){
	$('#sendbtn').click(function(){
			$.ajax({
				type:"POST",
				url: classip + "index.php?u=1",
				data:{uname:$('#uname').val(),unum:$('#unum').val(),passwd1:$('#passwd1').val(),passwd2:$('#passwd2').val()},
				success:function(response){
					var result=response.trim();
					if(result == '註冊成功 返回首頁'){
						alert (result);
						window.location.href= classip + "index.html"
					}
					else if(result == '學號已經被註冊囉! 請重新確認'){
						alert (result);
						//window.location.href="http://172.31.255.31/GFDO/index.html"
					}else {
						alert (result);
						return false;
				}
			}
		});
	});
});

$(function (){
	$('#changebtn').click(function(){
			$.ajax({
				type:"POST",
				url: classip + "index.php?u=2",
				data:{suname:$('#suname').val(),sunum:$('#sunum').val(),oldpasswd:$('#oldpasswd').val(),newpasswd1:$('#newpasswd1').val(),newpasswd2:$('#newpasswd2').val()},
				success:function(response){
					var result = response.trim();
					if(result == '更新密碼成功'){
						alert (result);
					window.location.href= classip + "index.html"
					}
					else if(result == '查無使用者 您可能尚未註冊'){
						alert (result);
						//window.location.href="http://172.31.255.31/GFDO/index.html"
					}
					else if(result == '舊密碼錯誤'){
						//window.location.href="http://172.31.255.31/GFDO/index.html"
						alert (result);
					}
					else{
						alert (result);
						return false;
					}
				}
			});
	});
});

function openbtn(cats){
		openunum="openunum"+cats;
		openpasswd="openpasswd"+cats;
		pcid="pcid"+cats;
		hostnum="hostnum"+cats;
		if (confirm('您確定要開機嗎?')){
		$.ajax({
			type:"POST",
			url: classip + "index.php?u=4",
			data:{unum:$('#'+openunum+'').val(),passwd:$('#'+openpasswd+'').val(),pcid:$('#'+pcid+'').val(),hostnum:$('#'+hostnum+'').val()},
			success:function(response){
			var result = response.trim();
			if (result == '請輸入正確的資料！'){
				alert (result);
			}
			else if(result == '查無使用者！'){
				alert (result);
			}
			else if(result == '密碼錯誤！'){
				alert (result);
			}
			else if(result == '您已經有開機中的電腦，請重新確認'){
				alert (result);
			}
			else if(result == '開機成功，因實體主機尚未開機，所以需等待3~5分鐘 (;ﾟдﾟ)'){
				$('button').prop('disabled', true);
				toastr.options = {
				  "debug": true,
				  "progressBar": true,
				  "positionClass": "toast-top-center",
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "500",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
				}
				toastr["warning"](result);				
				//setTimeout('window.location.href= classip + "index.html"', 5000 );
				setTimeout('window.location.reload(pcimg)', 500 );

			}
			else{ 
				$('button').prop('disabled', true);
				toastr.options = {
				  "debug": true,
				  "progressBar": true,
				  "positionClass": "toast-top-center",
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "500",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
				}
				toastr["success"](response);
				//setTimeout('window.location.href= classip + "index.html"', 3000 );
				setTimeout('window.location.reload(pcimg)', 500 );
				return false;
			}
		}
	});
    }
}

function closebtn(cats){
	if (confirm('您確定要關機嗎?')){
	if (confirm('請注意!!!電腦進度是否已經儲存，並且確認關機的電腦是否正確')){
		cunum="cunum"+cats;
		cpasswd="cpasswd"+cats;
		cpcid="cpcid"+cats;
		chostnum="chostnum"+cats;
		mod="mod"+cats;
		$.ajax({
			type:"POST",
			url: classip + "index.php?u=5",
			data:{cunum:$('#'+cunum+'').val(),cpasswd:$('#'+cpasswd+'').val(),cpcid:$('#'+cpcid+'').val(),chostnum:$('#'+chostnum+'').val(),mod:$('#'+mod+'').val()},
			success:function(response){
			var result = response.trim();
			if(result == '請輸入正確的資料！'){
				alert (result);
			}
			else if(result == '使用者錯誤，請確認您使用的電腦'){
				alert (result);
			}
			else if(result == '使用者密碼錯誤'){
				alert (result);
			}
			else{ 
				$('button').prop('disabled', true); 
				toastr.options = {
				  "debug": true,
				  "progressBar": true,
				  "positionClass": "toast-top-center",
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "1500",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
				}
				toastr["success"](response);
				//setTimeout('window.location.href= classip + "index.html"', 1500 );
				setTimeout('window.location.reload(pcimg)', 1500 );
				return false;
			}
		}
	});
    }
  }
}

var vm_state = setInterval("update()",5000);
function update(){
	$.ajax({
		type:"POST",
		url: classip + "index.php?u=6",
		success: function(response){
			var result = response.trim();
			var sum = localStorage.getItem('sum');
			if ( !sum ){
				localStorage.setItem('sum', result);
				var sum = localStorage.getItem('sum');
			}
			else if ( sum > result ){
				localStorage.setItem('sum', result);
				window.location.reload(pcimg);
				//window.location.href= classip + "index.html"
			}
			else if ( sum < result ){
				localStorage.setItem('sum', result);
				var sum = localStorage.getItem('sum');
			}
			if ( result == 0 && sum == 0 ){
				localStorage.removeItem('sum');
				clearTimeout(vm_state);
			}
		}
      });
}

$(function (){
	$('#msgbtn').click(function(){
			$.ajax({
				type:"POST",
				url: classip + "index.php?u=7",
				data:{mnum:$('#mnum').val(),mpc:$('#mpc').val(),msg:$('#msg').val(),detail:$('#detail').val()},
				success:function(response){
					var result=response.trim();
					if(result == '謝謝您的回報，我們將盡快處理'){
						$('button').prop('disabled', true); 
						toastr.options = {
						  "debug": true,
						  "progressBar": true,
						  "positionClass": "toast-top-center",
						  "showDuration": "300",
						  "hideDuration": "1000",
						  "timeOut": "3000",
						  "extendedTimeOut": "1000",
						  "showEasing": "swing",
						  "hideEasing": "linear",
						  "showMethod": "fadeIn",
						  "hideMethod": "fadeOut"
				}
						toastr["success"](response);
						setTimeout('window.location.href= classip + "index.html"', 3000 );
						return false;
					}
					else {
						alert (result);
						return false;
					}
				}
			});
	});
});

$(function (){
	$('#allbtn').click(function(){
			$.ajax({
				type:"POST",
				url: classip + "index.php?u=9",
				data:{allunum:$('#allunum').val(),allpasswd:$('#allpasswd').val()},
				success:function(response){
					var result=response.trim();
					if(result == '請輸入正確的資料！'){
						alert (result);
						return false;
					}
					else if(result == '查無使用者！'){
						alert (result);
						return false;
					}
					else if(result == '密碼錯誤！'){
						alert (result);
						return false;
					}else {
                                        $('button').prop('disabled', true);
                        	        toastr.options = {
                	                  "debug": true,
        	                          "progressBar": true,
	                                  "positionClass": "toast-top-center",
                                	  "showDuration": "300",
                        	          "hideDuration": "1000",
                	                  "timeOut": "5000",
        	                          "extendedTimeOut": "1000",
	                                  "showEasing": "swing",
                                	  "hideEasing": "linear",
                        	          "showMethod": "fadeIn",
                	                  "hideMethod": "fadeOut"
        	                        }
	
        	                        toastr["warning"](result);
	                                setTimeout('window.location.href= classip + "index.html"', 5000 );        
					return false;
                                        }

					
				}
		});
	});
});
