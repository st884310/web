<?php
	session_start();
	$set=(int)$_REQUEST['set'];
	include ('./config/config.php');
	
	if ($set == 1){
		
   	 $id=(int)$_POST['id'];
  	 $uname=trim(str_replace("'","''",$_POST['uname']));
  	 $unum=trim(str_replace("'","''",$_POST['unum']));
  	 $level=trim(str_replace("'","''",$_POST['level']));
	
	 $setmember="update member set uname='$uname',unum='$unum',level='$level' where id='$id';";
	 $member=mysqli_query($link,$setmember);
	
		if (!$member) {
			echo '修改失敗';
		}
		else{
			echo '修改成功';
		}
	}	
	
	//刪會員
	if ($set == 2){
	$ids=(int)$_POST['ids'];
        $deleteid="delete from member where id='$ids';";
        $delete=mysqli_query($link,$deleteid);

		if (!$delete){
	            echo '刪除失敗';
		}
		else
		{
		   echo '已刪除成功';
		}
    	}
	
	//重置密碼
	if ($set == 3){
	$ids=(int)$_POST['ids'];
	$sunum=trim($_POST['sunum']);
	$SUNUM=trim(hash('sha384',$sunum));
        $setpwd="UPDATE member SET passwd='$SUNUM' WHERE id='$ids';";
        $setpasswd=mysqli_query($link,$setpwd);	
	
		if (!$setpasswd){
	            echo '重置密碼失敗';
		}
		else{
		    echo '重置密碼成功';
		}
    	}
	mysqli_close($link);
?>
