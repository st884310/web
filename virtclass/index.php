<?php
	//註冊
	session_start();
	$u=(int)$_REQUEST['u'];
	include ('./config/config.php');
	
	if ($u == 1){
	$uname=str_replace("'","''",$_POST['uname']);		      	    //姓名
	$unum=str_replace("'","''",$_POST['unum']); 		           //學號		           	  												   
	$passwd1=str_replace("'","''",$_POST['passwd1']); 			  //密碼
	$passwd2=str_replace("'","''",$_POST['passwd2']);			 //確認密碼
	$SPWD=hash('sha384',$passwd1);								//加密方式sha384

	$sql="SELECT id,uname,unum,passwd,level FROM member WHERE unum='$unum';";		  //抓出學號
	$checkunum = mysqli_query($link,$sql);
	$row = mysqli_fetch_row($checkunum);  					//陣列row
	if(!$checkunum)die('輸入失敗！');
	// 註冊防呆
	if (!$uname || !$unum || !$passwd1){
		echo '請輸入正確的資料!'; 					//判斷是否有正確輸入
	}
	elseif ($unum == $row[2]){
		echo '學號已經被註冊囉! 請重新確認';//判斷學號是否重複
	}
	elseif ($passwd1 != $passwd2){
		echo '密碼不一致 請重新確認';//判斷密碼是否正確
	}
	else{
	$Q="insert into member select max(id)+1,'$uname','$unum','$SPWD','Student' from member";//輸入至資料庫
	$result = mysqli_query($link,$Q);//判斷是否有與資料庫連接
		if(!$result){
			echo '註冊失敗 請重新確認';
		}
		else{
			echo '註冊成功 返回首頁';
		}
	}
	}

	//修改資料
	if ($u == 2){
	$suname=str_replace("'","''",$_POST['suname']);		      	 		   	    //姓名
	$sunum=str_replace("'","''",$_POST['sunum']);							   //學號
	$oldpasswd=str_replace("'","''",$_POST['oldpasswd']); 		   		     //舊密碼
	$OLDSPWD=hash('sha384',$oldpasswd);										//舊密碼加密方式sha384
	$newpasswd1=str_replace("'","''",$_POST['newpasswd1']); 			   //新密碼
	$SPWD=hash('sha384',$newpasswd1);									  //加密方式sha384
	$newpasswd2=str_replace("'","''",$_POST['newpasswd2']);			   	 //確認新密碼

	$sql="SELECT id,uname,unum,passwd,level FROM member WHERE unum='$sunum';";	   //抓出姓名和密碼
	$checkpasswd = mysqli_query($link,$sql);
	$row = mysqli_fetch_row($checkpasswd);  						 //陣列row
	if(!$checkpasswd)die('輸入失敗！');

	if (!$suname || !$sunum || !$oldpasswd || !$newpasswd1 ){
		echo '請輸入正確的資料!'; 				   	 //判斷是否有正確輸入
	}
	elseif ($suname != $row[1] || $sunum !=$sunum ){
		echo '查無使用者 您可能尚未註冊';	//判斷密碼是否正確
	}
	elseif ($OLDSPWD != $row[3]){
		echo '舊密碼錯誤';					//判斷密碼是否正確
	}
	elseif ($newpasswd1 != $newpasswd2){
		echo '新密碼不一致 請重新確認';			//判斷密碼是否正確
	}
	else{
	$Q="update member set passwd='$SPWD' where uname='$suname' and unum='$sunum';";
	$result = mysqli_query($link,$Q);
		if(!$result){
			echo '更新失敗 請重新確認';
		}
		else{
			echo '更新密碼成功';
		}
	}
	}
	
	//交換電腦圖片JSON
	if ($u == 3){
		$open="SELECT vid,vm,vm_status,user,time FROM vm;";
		$pc = mysqli_query($link,$open);
		$rows = array();
		while($r = mysqli_fetch_assoc($pc)) {
			$rows[] = $r;
    		}
		echo json_encode($rows);
	}
	
	//開啟虛擬機
	if ($u == 4){
	/*$unum=str_replace("'","''",$_POST['unum']);
	$passwd=str_replace("'","''",$_POST['passwd']);
	$PASSWD=hash('sha384',$passwd);*/
	$pcid=str_replace("'","''",$_POST['pcid']);
	$hostnum=str_replace("'","''",$_POST['hostnum']);
	$datetime= date("Y/m/d H:i:s");

	$member="SELECT id,uname,unum,passwd,level FROM member where unum='$unum';";   					 //會員
	$checkmember = mysqli_query($link,$member);
	$row = mysqli_fetch_row($checkmember);
	$open="SELECT user FROM vm where user='$unum';";						  					 //電腦狀態
	$op=mysqli_query($link,$open);
	$openpc = mysqli_fetch_row($op);
	$mac="SELECT hid,host_num,host_status,host_ip,mac FROM host where host_num=$hostnum;";			 //電腦網卡號及實體機狀態
	$opmac=mysqli_query($link,$mac);
	$pcmac= mysqli_fetch_row($opmac);

	/*if (!$unum || !$passwd){
		echo '請輸入正確的資料！';
	}
	else if ($unum != $row[2]){
		echo '查無使用者！';
	}
	else if ($PASSWD != $row[3]){
		echo '密碼錯誤！';
	}
	else if ($unum == $openpc[0] && $row[4] == 'Student' ){
		echo '您已經有開機中的電腦，請重新確認';
	}*/
	if ($pcmac[2] == 0){
		echo '開機成功，因實體主機尚未開機，所以需等待3~5分鐘 (;ﾟдﾟ)';
		$M="update host set host_status=1 where host_num=$hostnum;";
		$result = mysqli_query($link,$M);
		$Q="update vm set vm_status=1,user='Server',time='$datetime' where vm='$pcid';";
		$result = mysqli_query($link,$Q);
		shell_exec("sudo /bin/sh ".$shpath."openctrl.sh Server $pcid $hostnum");
		#shell_exec("sudo /bin/sh ".$shpath."new_open.sh $hostnum $pcid");
	}
	else{
		echo '開機成功，請等待1~3分鐘( ﾟДﾟ)σ';
		$Q="update vm set vm_status=1,user='Server',time='$datetime' where vm='$pcid';";
		$result = mysqli_query($link,$Q);
		shell_exec("sudo /bin/sh ".$shpath."openctrl.sh Server $pcid $hostnum");
		#shell_exec("sudo /bin/sh ".$shpath."new_open.sh $hostnum $pcid");
	}
	}
	
	//虛擬機關機
	if ($u == 5){
	/*$cunum=str_replace("'","''",$_POST['cunum']);
        $cpasswd=str_replace("'","''",$_POST['cpasswd']);
        $PASSWD=hash('sha384',$cpasswd);*/
        $cpcid=str_replace("'","''",$_POST['cpcid']);
        $chostnum=str_replace("'","''",$_POST['chostnum']);
	$mod=str_replace("'","''",$_POST['mod']);

        $member="SELECT id,uname,unum,passwd,level FROM member where unum='$cunum';";//會員
        $checkmember = mysqli_query($link,$member);
        $row = mysqli_fetch_row($checkmember);
	$close="SELECT vid,vm,vm_status,user,time FROM vm where vm='$cpcid';";//電腦狀態
        $cl=mysqli_query($link,$close);
        $closepc = mysqli_fetch_row($cl);
        $mac="SELECT hid,host_num,host_status,host_ip,mac FROM host where host_num=$chostnum;";//電腦網卡號及實體機狀態
        $opmac=mysqli_query($link,$mac);
        $pcmac= mysqli_fetch_row($opmac);

        /*if (!$cunum || !$cpasswd){
        	echo '請輸入正確的資料！';
        }
	else if ($cunum != $closepc[3] && $row[4] == 'Student'){
		echo '使用者錯誤，請確認您使用的電腦';
	}
	else if ($PASSWD != $row[3]){
		echo '使用者密碼錯誤';
	}
	else {*/
		echo '虛擬機關機中 ─=≡Σ((( つ•̀ω•́)つ';
	 	$C="update vm set vm_status=1,user='NULL',time='NULL' where vm='$cpcid';";
		$result = mysqli_query($link,$C);
		shell_exec("echo 'sudo /bin/sh ".$shpath."shutdown_vm.sh Server $cpcid $chostnum $mod' |at now");
	//}
	}

	//跳轉判斷
	if ($u == 6){
		$open=" SELECT vm_status FROM vm where vm_status=1;";                                                                                         //電腦狀態
        	$op=mysqli_query($link,$open);
		$num_rows = mysqli_num_rows($op);
		echo "$num_rows";
	}
	
	//問題回報
	if ($u == 7){
	$mnum=str_replace("'","''",$_POST['mnum']);
        $mpc=str_replace("'","''",$_POST['mpc']);
	$msg=str_replace("'","''",$_POST['msg']);
        $detail=str_replace("'","''",$_POST['detail']);
	$datetime= date("Y/m/d H:i:s");
	
	if (!$mnum || !$mpc){
		echo '請輸入正確的資料';
	}
	elseif($mpc>36){
		echo '虛擬機只有36台喔(･ω´･ )';
	}
	elseif ($msg == "其他..." && !$detail){
		echo '請描述您所遇到的問題';
	}
	elseif (!$detail){
	$M="insert into message select max(mid)+1,'$mnum',$mpc,'$msg','沒有詳細的描述','$datetime',0 from message";
	$result = mysqli_query($link,$M);
                if(!$result){
	               	echo '回報失敗，請重新確認';
                }
                else{
                        echo '謝謝您的回報，我們將盡快處理';
                }
	}
	else{
	$M="insert into message select max(mid)+1,'$mnum',$mpc,'$msg','$detail','$datetime',0 from message";
	$result = mysqli_query($link,$M);
		if(!$result){
                        echo '回報失敗，請重新確認';
                }
                else{
                        echo '謝謝您的回報，我們將盡快處理';
                }
	}
	}

	//更改電腦狀態
	if ($u == 8){
		shell_exec("sudo /bin/sh ".$shpath."check_class_status.sh");
	}

	//一鍵開機
	if ($u == 9){
        $allunum=str_replace("'","''",$_POST['allunum']);
        $allpasswd=str_replace("'","''",$_POST['allpasswd']);
        $PASSWD=hash('sha384',$allpasswd);
        $datetime= date("Y/m/d H:i:s");

	$member="SELECT id,uname,unum,passwd,level FROM member where unum='$allunum';";
        $checkmember = mysqli_query($link,$member);
        $row = mysqli_fetch_row($checkmember);
        
	if (!$allunum || !$allpasswd){
              echo '請輸入正確的資料！';
        }
        elseif ($allunum != $row[2]){
              echo '查無使用者！';
        }
        elseif ($PASSWD != $row[3]){
              echo '密碼錯誤！';
        }
        else{
                echo '全電腦開啟中，請等待幾分鐘( ﾟДﾟ)σ';
                $Q="update vm set vm_status=1,user='$allunum',time='$datetime';";
                $result = mysqli_query($link,$Q);
                $M="update host set host_status=1;";
                $result = mysqli_query($link,$M);
                shell_exec("echo 'sudo /bin/sh ".$shpath."all_open.sh' |at now ");
        }
        }
	
	if ($u == 10){
		$vm_num=$_REQUEST['vm_num'];
		$data = "SELECT vm_status FROM vm where vm='$vm_num';";
	        $res = mysqli_query($link,$data);
	        $vm_status = mysqli_fetch_assoc($res);
	        echo $vm_status['vm_status'];
        }
	#if ($u == 11){
	#	$vm_num=$_REQUEST['vm_num'];
	#	$state=$_REQUEST['state'];
	#	$data = "update vm set vm_status=$state where vm='$vm_num';";
	#        $res = mysqli_query($link,$data);
        #}
	mysqli_close($link);
?>
