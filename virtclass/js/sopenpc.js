$(function (){
        $("#gray").attr('src',gray);
        $("#blue").attr('src',blue);
        $("#green").attr('src',green);
        $("#red").attr('src',red);
});

function pcimg(){
	$.ajax({
	type:"POST",
	url: classip + "sopenpc.php?u=1",
		success: function(response){
			var a =JSON.parse(response);
			for (var i=0;i<a.length;i++){
				if (a[i].vm_status==0) {
					$("#pcimg"+[i+1]).attr('src', gray);
					$("#pcbtn"+[i+1]).attr('onclick', "openbtn("+[i+1]+")");
					$("#cpcmodal"+[i+1]).attr('data-target', "#openModal"+[i+1]+"");
				} else if (a[i].vm_status==1) {
					$("#pcimg"+[i+1]).attr('src', blue);
				} else if (a[i].vm_status==2) {
					$("#pcimg"+[i+1]).attr('src', green);
					$("#cpcbtn"+[i+1]).attr('onclick', "closebtn("+[i+1]+")");
					$("#cpcmodal"+[i+1]).attr('data-target', "#myModal"+[i+1]+"");
				} else if (a[i].vm_status==3){
					$("#pcimg"+[i+1]).attr('src', red);
					$("#cpcmodal"+[i+1]).attr('data-target', "#okModal"+[i+1]+"");
				} else if (a[i].vm_status==4){
                                        $("#pcimg"+[i+1]).attr('src', "./images/orange.png");
                                } else if (a[i].vm_status==5){
                                        $("#pcimg"+[i+1]).attr('src', "./images/yellow.png");
                                }

			}
		}
	});
};

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
				commsg=commsg+"<td class=\"bg-khaki border border-top-0 border-bottom-0 border-left-0 border-white text-center pointer\" style=\"width:10%;\"/>"+
				"<a id=\"cpcmodal"+seat+"\" data-toggle=\"modal\" data-target=\"\" href=\"#\" data-no-instant>"+
				"<img class=\"w-100\" title=\""+seat+"號\" data-toggle=\"tooltip\" id=\"pcimg"+seat+"\" src=\"\"/>"+
				"</a>"+
				"</td>"
				if (j==6 || j==18) commsg=commsg+"<td class=\"t01\"></td>";
				commsg=commsg+"<div class=\"modal fade\" tabindex=\"-1\" id=\"myModal"+seat+"\" role=\"dialog\">"+
						"<div class=\"modal-dialog modal-dialog-centered modal-sm\">"+
							"<div class=\"modal-content box-shadow\">"+
								"<div class=\"modal-header\">"+
          								"<h4 class=\"modal-title font-weight-bold\">選擇關機模式</h4>"+
   								       "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>"+
							        "</div>"+
						"<div class=\"modal-footer\">"+
          					  	  "<button type=\"button\" id=\"cpcbtn"+seat+"\"onclick=\"\" class=\"btn btn-success btn-block\">正常關機</button>"+
						          "<button type=\"butiiton\" onclick=\"closebtn(111)\" class=\"btn btn-danger btn-block m-1\">強迫關機</button>"+
					       "</div>"+
					"</div>"+
					"</div>"+
 				"</div>"+
			"</div>"
			
			commsg=commsg+"<div class=\"modal fade\" tabindex=\"-1\" id=\"openModal"+seat+"\" role=\"dialog\">"+
                                                "<div class=\"modal-dialog modal-dialog-centered modal-sm\">"+
                                                        "<div class=\"modal-content box-shadow\">"+
                                                                "<div class=\"modal-header\">"+
                                                                        "<h4 class=\"modal-title font-weight-bold\">選擇電腦動作</h4>"+
                                                                       "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>"+
                                                                "</div>"+
                                                "<div class=\"modal-footer\">"+
							  "<input type=\"hidden\" value=\""+pcid+"\" id=\"pcid"+seat+"\"/>"+
                		                          "<input type=\"hidden\" value=\""+aa+"\" id=\"hostnum"+seat+"\"/>"+
		                                          "<input type=\"hidden\" value=\"0\" id=\"mod"+seat+"\"/>"+
                                                          "<button type=\"button\" id=\"pcbtn"+seat+"\" onclick=\"\" class=\"btn btn-secondary btn-block\">電腦開機</button>"+
                                                          "<button type=\"button\" onclick=\"errorpc("+seat+")\" class=\"btn btn-danger btn-block m-1\">電腦故障</button>"+
                                               "</div>"+
                                        "</div>"+
                                        "</div>"+
                                "</div>"+
                        "</div>"

                        commsg=commsg+"<div class=\"modal fade\" id=\"okModal"+seat+"\" role=\"dialog\">"+
                                                "<div class=\"modal-dialog modal-dialog-centered modal-sm\">"+
                                                        "<div class=\"modal-content box-shadow\">"+
                                                                "<div class=\"modal-header\">"+
                                                                        "<h4 class=\"modal-title font-weight-bold\">更改電腦狀態</h4>"+
                                                                       "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>"+
                                                                "</div>"+
                                                "<div class=\"modal-footer\">"+
                                                          "<button type=\"button\" onclick=\"okstatus("+seat+")\" class=\"btn btn-success btn-block m-1\">電腦正常</button>"+
                                               "</div>"+
                                        "</div>"+
                                        "</div>"+
                                "</div>"+
                        "</div>"
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
						 "<a id=\"cpcmodal"+seat+"\" data-toggle=\"modal\" data-target=\"\" href=\"#\" data-no-instant>"+
                                                "<img class=\"w-100\" title=\""+seat+"號\" data-toggle=\"tooltip\" id=\"pcimg"+seat+"\" src=\"\"/></a></div></td>";
				 commsg=commsg+"<div class=\"modal fade\" tabindex=\"-1\" id=\"myModal"+seat+"\" role=\"dialog\">"+
                                                "<div class=\"modal-dialog modal-dialog-centered modal-sm\">"+
                                                        "<div class=\"modal-content box-shadow\">"+
                                                                "<div class=\"modal-header\">"+
                                                                        "<h4 class=\"modal-title font-weight-bold\">選擇關機模式</h4>"+
                                                                       "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>"+
                                                                "</div>"+
                                                "<div class=\"modal-footer\">"+
                                                          "<button type=\"button\" id=\"cpcbtn"+seat+"\"onclick=\"\" class=\"btn btn-success btn-block\">正常關機</button>"+
                                                          "<button type=\"butiiton\" onclick=\"closebtn(111)\" class=\"btn btn-danger btn-block m-1\">強迫關機</button>"+
                                               "</div>"+
                                        "</div>"+
                                        "</div>"+
                                "</div>"+
                        "</div>"
			
			 commsg=commsg+"<div class=\"modal fade\" tabindex=\"-1\" id=\"openModal"+seat+"\" role=\"dialog\">"+
                                                "<div class=\"modal-dialog modal-dialog-centered modal-sm\">"+
                                                        "<div class=\"modal-content box-shadow\">"+
                                                                "<div class=\"modal-header\">"+
                                                                        "<h4 class=\"modal-title font-weight-bold\">選擇電腦動作</h4>"+
                                                                       "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>"+
                                                                "</div>"+
                                                "<div class=\"modal-footer\">"+
                                                          "<input type=\"hidden\" value=\""+pcid+"\" id=\"pcid"+seat+"\"/>"+
                                                          "<input type=\"hidden\" value=\""+aa+"\" id=\"hostnum"+seat+"\"/>"+
                                                          "<input type=\"hidden\" value=\"0\" id=\"mod"+seat+"\"/>"+
                                                          "<button type=\"button\" id=\"pcbtn"+seat+"\" onclick=\"\" class=\"btn btn-secondary btn-block\">電腦開機</button>"+
                                                          "<button type=\"button\" onclick=\"errorpc("+seat+")\" class=\"btn btn-danger btn-block m-1\">電腦故障</button>"+
                                               "</div>"+
                                        "</div>"+
                                        "</div>"+
                                "</div>"+
                        "</div>"

                        commsg=commsg+"<div class=\"modal fade\" id=\"okModal"+seat+"\" role=\"dialog\">"+
                                                "<div class=\"modal-dialog modal-dialog-centered modal-sm\">"+
                                                        "<div class=\"modal-content box-shadow\">"+
                                                                "<div class=\"modal-header\">"+
                                                                        "<h4 class=\"modal-title font-weight-bold\">更改電腦狀態</h4>"+
                                                                       "<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>"+
                                                                "</div>"+
                                                "<div class=\"modal-footer\">"+
                                                          "<button type=\"button\" onclick=\"okstatus("+seat+")\" class=\"btn btn-success btn-block m-1\">電腦正常</button>"+
                                               "</div>"+
                                        "</div>"+
                                        "</div>"+
                                "</div>"+
                        "</div>"
                                                if (b==38 || b==40){
                                                        commsg=commsg+"<td class=\"t01\"></td>";
                                                }
                                        }
                                }
                                                commsg=commsg+"</tr>";
                                commsg=commsg+"<tr class=\"t00\"><td class=\"t02\"></td></tr>";
                        }

			if (i==4){
				commsg=commsg+"<tr/><tr>"+
						"<td class=\"three1 bg-amber\"></td><td class=\"three2 bg-amber\"></td><td class=\"t01\"></td>"+
						"<td class=\"three1 bg-amber\"></td><td class=\"three2 bg-amber\"></td><td class=\"t01\"></td>"+
						"<td class=\"three1 bg-amber\"></td><td class=\"three2 bg-amber\"></td><tr/>"+
						"<tr class=\"t00\"><td class=\"t02\"></td></tr>"
			}
		}
		com.innerHTML=commsg;
	}

var vm_state = setInterval("update()",5000);
function update(){
	$.ajax({
		type:"POST",
		url: classip + "sopenpc.php?u=2",
		success: function(response){
			var result = response.trim();
			var sum = localStorage.getItem('sum');
			if ( !sum ){
				localStorage.setItem('sum', result);
			}
			else if ( sum > result ){
				localStorage.setItem('sum', result);
				//window.location.href= classip + "sopenpc.html"
				window.location.reload(pcimg);
			}
			else if ( sum < result ){
				localStorage.setItem('sum', result);
			}
			if ( result == 0 && sum == 0 ){
				localStorage.removeItem('sum');
				clearTimeout(vm_state);
			}
		}
	});
}

function openbtn(cats){
	if (confirm('即將開啟電腦?')){
		pcid="pcid"+cats;
		hostnum="hostnum"+cats;
		openmod=cats;
		$.ajax({
			type:"POST",
			url: classip + "sopenpc.php?u=3",
			data:{pcid:$('#'+pcid+'').val(),hostnum:$('#'+hostnum+'').val(),openmod:openmod},
			success:function(response){
			var result = response.trim();
			if(result == '開機成功，因實體主機尚未開機，所以需等待3~5分鐘 (;ﾟдﾟ)'){
				$('button').prop('disabled', true); 
				toastr.options = {
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
				setTimeout('window.location.href= classip + "sopenpc.html"', 5000 );
			}
			else{ 
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
				setTimeout('window.location.href= classip + "sopenpc.html"', 3000 );
				return false;
			}
		}
	});
    }
}


function closebtn(cats){
	if (confirm('您確定要關機嗎?')){
                pcid="pcid"+cats;
                hostnum="hostnum"+cats;
                mod="mod"+cats;
		tmod=cats;
                $.ajax({
                        type:"POST",
                        url: classip + "sopenpc.php?u=4",
                        data:{pcid:$('#'+pcid+'').val(),hostnum:$('#'+hostnum+'').val(),mod:$('#'+mod+'').val(),tmod:tmod},
                        success:function(response){
                        var result = response.trim();
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
                                toastr["success"](result);
                                setTimeout('window.location.href= classip + "sopenpc.html"', 1500 );
                                return false;
                }
        });
    }
}

function errorpc(cats){
	pcid="pcid"+cats;
	$.ajax({
		type:"POST",
		url: classip + "sopenpc.php?u=5",
		data:{pcid:$('#'+pcid+'').val()},
		success: function(response,status){
		var result = response.trim();
			if(result == '修改成功'){
				window.location.href= classip + "sopenpc.html"
			}
		}
	});
}

function okstatus(cats){
        pcid="pcid"+cats;
        $.ajax({
                type:"POST",
                url: classip + "sopenpc.php?u=6",
                data:{pcid:$('#'+pcid+'').val()},
                success: function(response,status){
                var result = response.trim();
        	        if(result == '修改成功'){
                	        window.location.href= classip + "sopenpc.html"
                	}
                }
        });
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

$(function (){
	$('#updatebtn').click(function(){
		$.ajax({
			type:"POST",
			url: classip + "sopenpc.php?u=7",
			success:function(response){
				var result=response.trim();
				if(result == '更新狀態中，請稍後'){
				$('button').prop('disabled', true); 
				toastr.options = {
				  "debug": true,
				  "progressBar": true,
				  "positionClass": "toast-top-center",
				  "showDuration": "300",
				  "hideDuration": "1000",
				  "timeOut": "20000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
				}
				toastr["success"](response);
				setTimeout('window.location.href= classip + "sopenpc.html"', 20000 );
				return false;
				}
			}
		});
	});
});
