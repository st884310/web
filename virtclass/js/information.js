$(document).ready(function(){
	$.ajax({
		type:"POST",
		url: classip + "information.php?login=0",
		success: function(response){
			$("#member").html(response);
				$('#datable').DataTable({
				"lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
				  language: {
					"lengthMenu": "每頁顯示 _MENU_ 筆",
					 "zeroRecords": "沒有符合的結果",
					 "info": "從 _START_ 到 _END_ /共 _TOTAL_ 筆",
					 "infoEmpty": "無任何資料",
					 "infoFiltered": "(過濾總筆數 _MAX_)",
					 "search": "搜尋：",
					 "searchPlaceholder": "輸入關鍵字",
					 "paginate": {
					 "first":      "首頁",
					 "last":       "末頁",
					 "next":       "下頁",
					 "previous":   "上頁"
					 },
				  },
				  "columnDefs": [
					{ "searchable": false, "targets": [0] },
					{ "searchable": false, "targets": [4] },
					{ "orderable": false, "targets": [4] },
					{ "searchable": false, "targets": [5] },
					{ "orderable": false, "targets": [5] },
					{ "searchable": false, "targets": [6] },
					{ "orderable": false, "targets": [6] }
				  ]
				});
		}
	});
});

$(document).ready(function(){
	$.ajax({
		type:"POST",
		url: classip + "modal.php?modal=1",
		success: function(response){
			$("#modal").html(response);
		}
	});
});

function member(cat){
	id="id"+cat;
	uname="uname"+cat;
	unum="unum"+cat;
	level="level"+cat;
	$.ajax({
		type:"POST",
		url: classip + "setmember.php?set=1",
		data:{id:$('#'+id+'').val(),uname:$('#'+uname+'').val(),unum:$('#'+unum+'').val(),level:$('#'+level+'').val()},
		success: function(response,status){
			var result = response.trim();
			if(result == '修改成功'){
				alert (result);
				window.location.href= classip + "information.html"
			}
			else {alert(response);}
		},
		error:function(res){
			alert(error);
		}
	});
}

function deleter(cats){
	if (confirm('您確定要刪除此使用者嗎?')){
	ids="ids"+cats;
	$.ajax({
		type:"POST",
		url: classip + "setmember.php?set=2",
		data:{ids:$('#'+ids+'').text()},
		success: function(response,status){
			var result = response.trim();
			if(result == '已刪除成功'){
				alert (result);
				window.location.href= classip + "information.html"
			}
			else {alert(response);}
		},
		error:function(res){
			alert(error);
		}
	});
  }
}

function set(cats){
	if (confirm('您確定要重置密碼為學號嗎?')){
	ids="ids"+cats;
	sunum="sunum"+cats;
	$.ajax({
		type:"POST",
		url: classip + "setmember.php?set=3",
		data:{ids:$('#'+ids+'').text(),sunum:$('#'+sunum+'').text()},
		success: function(response,status){
			var result = response.trim();
			if(result == '重置密碼成功'){
				alert (result);
				window.location.href= classip + "information.html"
			}
			else {alert(response);}
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
