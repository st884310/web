<?php
	//彈跳視窗Modal
	session_start();
	$modal=(int)$_REQUEST['modal'];
	$login=$_SESSION["login"];
	include ('./config/config.php');
	
	if ($login == 0){															//如果沒有登入跳到login.hmtl
		$_SESSION['login']=0;
		$_SESSION['unum']='';
		$_SESSION['level']='';
		echo'<meta http-equiv="refresh" content="0; url=login.html">';
	}
		
	elseif ($modal == 1){													//Modal裡的資料
		$data = "SELECT id,uname,unum,passwd,level FROM member order by id";
		$memberdata = mysqli_query($link,$data);
		$membernum=mysqli_num_rows($memberdata);							
		for($i=0;$i<$membernum;$i++)
			{
			$Q=mysqli_fetch_row($memberdata);						  		//陣列Q
			echo '<div class="modal fade" id="myModal'.$Q[0].'">
				<div class="modal-dialog">
					<div class="modal-content box-shadow" >
						<div class="modal-header">
							<h4 class="modal-title font-weight-bold">修改  '.$Q[1].'  會員的資料</h4>
							<button type="button" class="close" data-dismiss="modal">&times;</button>
						</div>
							<input type="hidden" id="id'.$Q[0].'" value="'.$Q[0].'" />
						<div class="modal-body" id="modal2">
							 <label for="uname">修改姓名：</label>
						 	 <input type="text" autocomplete="off" class="form-control" placeholder="請輸入您的姓名" id="uname'.$Q[0].'" maxlength="10" value="'.$Q[1].'" required />
						</div>
						
						<div class="modal-body">
							 <label for="unum">修改學號：</label>
							<input type="text" autocomplete="off" class="form-control" placeholder="請輸入您的學號" id="unum'.$Q[0].'" maxlength="10" value="'.$Q[2].'" required />
						</div>
						
						<div class="modal-body">
						 <label class="my-1 mr-2">修改權限：</label>
						  <select class="custom-select my-1" id="level'.$Q[0].'">
							<option value="'.$Q[4].'" selected>選擇權限</option>
							<option value="Student">學生</option>
							<option value="Teacher">老師</option>
							<option value="Admin">管理員</option>
						  </select>
						</div>
						
						<div class="modal-footer">
							<button id="setmember'.$Q[0].'" type="button" role="button" class="btn btn-dark btn-block btn-lg font-weight-bold" data-dismiss="modal" onclick="member('.$Q[0].');">修改</button>
						</div>
					</div>
				</div>
			</div>';
			}
		mysqli_close($link);
	}
?>
