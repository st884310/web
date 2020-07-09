function pcimg(){
	$.ajax({
	type:"POST",
	url: classip + "restoring.php?u=1",
		success: function(response){
			var a =JSON.parse(response);
			for (var i=0;i<a.length;i++){
				if (a[i].vm_status==0) {
					$("#pcimg"+[i+1]).attr('src', gray);
				} else if (a[i].vm_status==1) {
					$("#pcimg"+[i+1]).attr('src', blue);
				} else if (a[i].vm_status==2) {
					$("#pcimg"+[i+1]).attr('src', green);
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
};

	
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
				if( bb==0 )
					pcid = seat2;
				else
					pcid = seat1;
			if (j==12 || j==24) commsg=commsg+"<td class=\"t01\"></td>";
			commsg=commsg+"<td class=\"bg-khaki border border-top-0 border-bottom-0 border-left-0 border-white\" style=\"width:10%;\"/>"+
					   "<img id=\"pcimg"+seat+"\" class=\"w-100 pointer\" data-toggle=\"tooltip\" title=\""+seat+"號\" src=\"\" />"+
	  			      "</td>";

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
					commsg=commsg+"<td class=\"bg-amber text-center\" style=\"border:none;\"/>"+
					   "<img id=\"pcimg"+seat+"\" class=\"w-100 pointer\" data-toggle=\"tooltip\" title=\""+seat+"號\" src=\"\" />"+
	  				   "</td>";
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
                url: classip + "restoring.php?u=4",
                success: function(response){
		var system = '<option value="NULL" selected>----選擇映像檔----</option>';
          	var obj = JSON.parse(response);
          	for (var i = 0; i < obj.length; i++){
          		system += '<option class="align-middle" value="'+obj[i].original_system +'">'+obj[i].original_system+'</option>';
          	}
         		 $('#system').html(system);
                }
        });
});

$(document).ready(function(){
    $("#haha").hide();
  $("#backing").click(function(){
    $("#haha").hide();
  });
  $("#original").click(function(){
    $("#haha").show();
  });
});

$(document).ready(function mounted(){
	$("#pcnum").multipleSelect({
            multiple: true,
            multipleWidth: 55,
	    placeholder: 'Please select the vm number'
	})
        $('#restorebtn').click(function(){
			var formData = $('#restoreing').serialize();
			if (confirm('請確認您要還原的電腦編號：'+ $('#pcnum').multipleSelect('getSelects', 'text')+"\r\n"+'您選擇的映像檔：'+$('#system').val())){
	       	                $.ajax({
	               	        type:"POST",
	                       	url: classip + "restoring.php?u=3",
	                        data:{imgname:$('#system').val(),pcnum:$('#pcnum').multipleSelect('getSelects'),pcaction:formData},
	                        //data:{imgname:$('#system').val(),personimg:$('#person').val(),pcnum:$('#pcnum').multipleSelect('getSelects'),pcaction:formData},
	                        success:function(response){
				var result=response.trim();
					if(result == '正在還原'+$('#pcnum').multipleSelect('getSelects')){
						alert (result);
						window.location.href= classip + "restore.html"
					}else{
						alert (result);
					}
        	                }
        	        });
		}
        });
});
