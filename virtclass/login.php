<?php
	session_start();
	include ('./config/config.php');
		
		$unum=str_replace("'","''",$_POST['unum']);
		$passwd=str_replace("'","''",$_POST['passwd']);
		$SPWD=hash('sha384',$passwd);

		$Q="SELECT id,uname,unum,passwd,level FROM member WHERE unum='$unum';";
		$result = mysqli_query($link,$Q);
		$row = mysqli_fetch_row($result);
		
		if (!$unum || !$passwd){
			echo'請輸入正確的資料！';
		}
		elseif ($unum != $row[2]){
			echo'查無使用者！';
		}
		elseif($SPWD != $row[3]){
			echo'密碼錯誤 認證失敗！';
		}
		else{
		if($row[4] == "Student"){
			$_SESSION['login']=0;
		 	$_SESSION['level']=$row[4];
			$_SESSION['unum'] = $row[2];
			echo'錯誤的使用者 你沒有權限';
		}
		elseif($row[4] == "Admin"){
			$_SESSION['login']=1000;
			$_SESSION['uname']=$row[1];
			$_SESSION['level']=$row[4];
			$_SESSION['unum'] =$row[2];
			echo 'success';
		}
		elseif($row[4] == "Teacher"){
			$_SESSION['login']=10000;
			$_SESSION['uname']=$row[1];
			$_SESSION['level']=$row[4];
			$_SESSION['unum'] =$row[2];
			echo '登入成功！ 您的會員權限為：老師';
		}
		else{
			$_SESSION['login']=0;
			echo'登入失敗！';
		}
		}
	mysqli_close($link);

?>
