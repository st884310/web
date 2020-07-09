var user = localStorage.getItem('user');
$(function(){	 
	if (user != null){
		window.location = classip + "information.html";
	}
});

/*$(document).ready(function(){
	if (navigator.userAgent.indexOf('Firefox') >= 0) {
		document.getElementById('logbtn').type = "button";
	} else {
		document.getElementById('logbtn').type = "submit";
	}
});*/

function Redirect(){
	window.location = classip + "index.html";
}
setTimeout('Redirect()', 30000);
        $(function (){
                $("form").submit(function(e){
			var unumval = $('#unum').val();
			var passwdval = $('#passwd').val();
                        $.ajax({
                                type:"POST",
                                url: classip + "login.php",
                                data:{unum:unumval,passwd:passwdval},
                                success:function(response){
                                        var result=response.trim();
					var user = localStorage.getItem('user');
                                        if(result == '錯誤的使用者 你沒有權限'){
                                                alert (result);
                                                window.location.href= classip + "index.html";
                                        }
                                        else if(result == '查無使用者！'){
                                                alert (result);
                                        }
                                        else if(result == '密碼錯誤'){
                                                alert (result);
                                        }
                                        else if(result == 'success'){
                                                window.location.href= classip + "information.html";
						localStorage.setItem('user', $('#unum').val());
                                        }
                                        else if(result == '登入成功！ 您的會員權限為：老師'){
                                                window.location.href= classip + "information.html";
						localStorage.setItem('user', $('#unum').val());
                                        }
					else{
						alert (result);
					}
                                },
                                error:function(response){
                                        alert(請重新登入);
                                }
                        });
			e.preventDefault();
                });
        });

(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
