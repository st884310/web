//JSON叫出圖片
function pcimg(){
	$.ajax({
	type:"POST",
	url: classip + "backing.php?u=2",
		success: function(response){
			var a =JSON.parse(response);
			for (var i=0;i<a.length;i++){
				if (a[i].vm_status==0) {
					$("#pcimg"+[i+1]).attr('src', gray);
					$("#modal"+[i+1]).attr('data-target', "#myModal"+[i+1]+"");
				} else if (a[i].vm_status==1) {
					$("#pcimg"+[i+1]).attr('src', blue);
				} else if (a[i].vm_status==2) {
					$("#pcimg"+[i+1]).attr('src', green);
					$("#modal"+[i+1]).attr('data-target', "#myModal"+[i+1]+"");
				}else if (a[i].vm_status==3){
					$("#pcimg"+[i+1]).attr('src', red);
					$("#modal"+[i+1]).attr('data-target', "#myModal"+[i+1]+"");
				} else if (a[i].vm_status==4){
                                        $("#pcimg"+[i+1]).attr('src', "./images/orange.png");
                                } else if (a[i].vm_status==5){
                                        $("#pcimg"+[i+1]).attr('src', "./images/yellow.png");
                                }
			}
		}
	});
};
//虛擬機IMAGE
	window.addEventListener("load",init);
	var com;
	var seat = 0;
	function init(){
		$("body").tooltip({ selector: '[data-toggle=tooltip]' });
		com = document.getElementById("comarea");
		commsg="";
		 for(i=1;i<=6;i++){
                        commsg=commsg+"<tr>";
                        for(j=0;j<=30;j=j+6){
				seat=parseInt(i) + parseInt(j);
				aa=Math.ceil(seat/2);	//商數無條件進位-host
				bb=(seat%2);			//取餘數-vm
				seat1="PC"+aa+"-1";	//host-vm
				seat2="PC"+aa+"-2";	//host-vm
				if (j==12 || j==24) commsg=commsg+"<td class=\"t01\"></td>";
				if( bb==0 )
					pcid = seat2;
				else
					pcid = seat1;
				//虛擬機IMAGE
				commsg=commsg+"<td class=\"bg-khaki border border-top-0 border-bottom-0 border-left-0 border-white\" style=\"width:10%;\"/><a id=\"modal"+seat+"\" class=\"pointer\" data-toggle=\"modal\" data-target=\"\" href=\"#\" data-no-instant><img id=\"pcimg"+seat+"\" class=\"w-100\" data-toggle=\"tooltip\" title=\""+seat+"號\" src=\"\"/></a></td>";
					//備份框
					commsg=commsg+
					"<div class=\"modal fade\" id=\"myModal"+seat+"\" role=\"dialog\">"+
						"<div class=\"modal-dialog modal-dialog-centered\">"+
							"<form>"+
							"<div class=\"modal-content box-shadow\">"+
								"<div class=\"modal-header\">"+
									"<h4 class=\"modal-title\">PC"+seat+"</h4>"+
									"<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>"+ 
								"</div>"+
								"<div class=\"modal-body\">"+
									"<input type=\"hidden\" id=\"bmod"+seat+"\" maxlength=\"1\" value=\"0\"/>"+
									"<input type=\"hidden\" value=\""+pcid+"\" id=\"pcid"+seat+"\" maxlength=\"6\" />"+
									"<label for=\"usr\">1.要備份的電腦號碼：</label>"+
									"<a class=\"font-weight-bold\">"+seat+"</a>"+
									"<br/><br/>"+
									"<label for=\"usr\">2.輸入映像檔名稱<strong class=\"text-danger\">(請加上附檔名.img)</strong>：</label>"+
									"<input type=\"text\" class=\"form-control mb-2\" id=\"imgname"+seat+"\" maxlength=\"100\" placeholder=\"Ex：i3501-20180807-1T\"/>"+
									"<br/>"+
									"<label for=\"sel1\">3.選擇備份後的動作：</label>"+
									"<select class=\"form-control\" id=\"choice"+seat+"\" name=\"sellist1\">"+
										"<option value=\"3\">--不做選擇--</option>"+
										"<option value=\"1\">開機</option>"+
										"<option value=\"2\">還原</option>"+
										"<option value=\"3\">不動作</option>"+
									"</select>"+
								"</div>"+
								"<div class=\"modal-footer\">"+
									//"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>"+
									"<button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block font-weight-bold\" onclick=\"backup('"+seat+"');\">備份</button>"+
								"</div>"+
							"</div>"+
							"</form>"+
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
					
				commsg=commsg+"<td class=\"bg-amber text-center\" style=\"border:none;\"/><a id=\"modal"+seat+"\" class=\"pointer\" data-toggle=\"modal\" data-target=\"\" href=\"#\" data-no-instant><img id=\"pcimg"+seat+"\" class=\"w-100\" data-toggle=\"tooltip\" title=\""+seat+"號\" src=\"\"/></a></td>";
					//備份框
					commsg=commsg+
					"<div class=\"modal fade\" id=\"myModal"+seat+"\" role=\"dialog\">"+
						"<div class=\"modal-dialog modal-dialog-centered\">"+
							"<form>"+
							"<div class=\"modal-content box-shadow\">"+
								"<div class=\"modal-header\">"+
									"<h4 class=\"modal-title\">PC"+seat+"</h4>"+
									"<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>"+ 
								"</div>"+
								"<div class=\"modal-body\">"+
									"<input type=\"hidden\" id=\"bmod"+seat+"\" maxlength=\"1\" value=\"0\"/>"+
									"<input type=\"hidden\" value=\""+pcid+"\" id=\"pcid"+seat+"\" maxlength=\"6\" />"+
									"<label for=\"usr\">1.要備份的電腦號碼：</label>"+
									"<a class=\"font-weight-bold\">"+seat+"</a>"+
									"<br/><br/>"+
									"<label for=\"usr\">2.輸入映像檔名稱<strong class=\"text-danger\">(請加上附檔名.img)</strong>：</label>"+
									"<input type=\"text\" class=\"form-control mb-2\" id=\"imgname"+seat+"\" maxlength=\"100\" placeholder=\"Ex：i3501-20180807-1T\"/>"+
									"<br/>"+
									"<label for=\"sel1\">3.選擇備份後的動作：</label>"+
									"<select class=\"form-control\" id=\"choice"+seat+"\" name=\"sellist1\">"+
										"<option value=\"3\">--不做選擇--</option>"+
										"<option value=\"1\">開機</option>"+
										"<option value=\"2\">還原</option>"+
										"<option value=\"3\">不動作</option>"+
									"</select>"+
								"</div>"+
								"<div class=\"modal-footer\">"+
									//"<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>"+
									"<button type=\"button\" class=\"btn btn-outline-primary btn-lg btn-block font-weight-bold\" onclick=\"backup('"+seat+"');\">備份</button>"+
								"</div>"+
							"</div>"+
							"</form>"+
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
	
function backup(seat){
                //var pcnum="pcnum"+seat;
                var imgname="imgname"+seat;
                var choice="choice"+seat;
		var bmod="bmod"+seat;
		var pcid="pcid"+seat;
		var unum=localStorage.getItem('user');
                $.ajax({
                        type:"POST",
                        url: classip + "backing.php?u=1",
                        data:{imgname:$('#'+imgname+'').val(),choice:$('#'+choice+'').val(),bmod:$('#'+bmod+'').val(),pcid:$('#'+pcid+'').val(),unum:unum},
                        success: function(response){
                        var result=response.trim();
	                        if(result == '請輸入映像檔名稱'){
                                	alert (result);
                        }
                	        else if(confirm("請確認您的備份動作"+"\n"+"映像檔名字："+$('#'+imgname+'').val()+"\n"+"結束後的動作："+$('#'+choice+'').val())){
                        	        alert (result);
					window.location.href= classip + "backup.html"
                        }
                        },
                        error: function(result,status){
                        }
                });
}

$(document).ready(function(){
        $.ajax({
                type:"POST",
                url:  classip + "sidenav.php",
                success: function(response){
                        $("#mySidenav").html(response);
                }
        });
});
