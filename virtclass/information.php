<!DOCTYPE html>
<?php
	session_start();
	include ('./config/config.php');
	$login=(int)$_REQUEST['login'];
	$login=$_SESSION["login"];
	$level=$_SESSION["level"];
	$uname=$_SESSION["uname"];

	if ($login==0){															//如果沒有登入跳到login.hmtl
			$_SESSION['login']=0;
			$_SESSION['unum']='';
			echo'<meta http-equiv="refresh" content="0; url=loginout.php">';
			exit;
	}

	elseif($login != null && $level =="Admin" ||  $level =="Teacher")		//如果權限不足不會顯示資料
		{
			$data = "SELECT id,uname,unum,passwd,level FROM member";
			$memberdata = mysqli_query($link,$data);
			$membernum=mysqli_num_rows($memberdata);

			for($i=0;$i<$membernum;$i++){
			$urow=mysqli_fetch_row($memberdata);
			echo "<tr>";
			echo "<th class='align-middle' id='ids".$urow[0]."'>$urow[0]</th>";
			echo "<td class='align-middle'>$urow[1]</td>";
			echo "<td class='align-middle' id='sunum".$urow[0]."'>$urow[2]</td>";
			echo "<td class='align-middle'>$urow[4]</td>";
			echo '<td><button type="button" class="btn btn-primary font-weight-bold" data-target="#myModal'.$urow[0].'" data-toggle="modal">修改</button></td>';
			echo '<td><button type="button" class="btn btn-danger font-weight-bold" id="deleterid'.$urow[0].'" onclick="deleter('.$urow[0].');" >刪除</button></td>';
			echo '<td><button type="button" class="btn btn-info font-weight-bold" id="$setpwd'.$urow[0].'" onclick="set('.$urow[0].');" >重置密碼</button></td>';
			echo "</tr>";
			}
			mysqli_close($link);
		}
?>
