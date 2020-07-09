<?php
	session_start();
        $u=(int)$_REQUEST['u'];
        $login=$_SESSION["login"];
        include ('./config/config.php');
	
	if($_SESSION['login'] == ''){
                $url = "loginout.php";
                echo "<script type='text/javascript'>";
                echo "window.location.href='$url'";
                echo "</script>";
        }
	
	//JSON叫出圖片
	if ($u == 1){
                $open="SELECT vid,vm,vm_status,user,time FROM vm ORDER BY vid ASC;";
                $pc = mysqli_query($link,$open);
                $rows = array();
                while($r = mysqli_fetch_assoc($pc)) {
                        $rows[] = $r;
                }
                echo json_encode($rows);
        }

	//跳轉判斷
        if ($u == 2){
                $open=" SELECT vm_status FROM vm where vm_status=1;";                                                                                         //電腦狀態
                $op=mysqli_query($link,$open);
                $num_rows = mysqli_num_rows($op);
                echo "$num_rows";
        }
	
	//開啟虛擬機
	if ($u == 3){

        $pcid=str_replace("'","''",$_POST['pcid']);
        $hostnum=str_replace("'","''",$_POST['hostnum']);
        $datetime= date("Y/m/d H:i:s");
	$openmod=str_replace("'","''",$_POST['openmod']);

	$mac="SELECT hid,host_num,host_status,host_ip,mac FROM host where host_num=$hostnum;";                   //電腦網卡號及實體機狀態
        $opmac=mysqli_query($link,$mac);
        $pcmac= mysqli_fetch_row($opmac);

        if ($pcmac[2] == 0 && $openmod != 9999){
                echo '開機成功，因實體主機尚未開機，所以需等待3~5分鐘 (;ﾟдﾟ)';
                $M="update host set host_status=1 where host_num=$hostnum;";
                $result = mysqli_query($link,$M);
                $Q="update vm set vm_status=1,user='Admin',time='$datetime' where vm='$pcid';";
                $result = mysqli_query($link,$Q);
                shell_exec("sudo /bin/sh ".$shpath."openctrl.sh $_SESSION[unum] $pcid $hostnum");
        }
	elseif($openmod == 9999){
		echo '全電腦開機中~';
		$M="update host set host_status=1;";
                $result = mysqli_query($link,$M);
                $Q="update vm set vm_status=1,user='Admin',time='$datetime' where vm_status=0;";
                $result = mysqli_query($link,$Q);
		shell_exec("echo 'sudo /bin/sh ".$shpath."all_open.sh' |at now ");
	}
        else{
                echo '開機成功，請等待1~3分鐘( ﾟДﾟ)σ';
                $Q="update vm set vm_status=1,user='Admin',time='$datetime' where vm='$pcid';";
                $result = mysqli_query($link,$Q);
                shell_exec("sudo /bin/sh ".$shpath."openctrl.sh $_SESSION[unum] $pcid $hostnum");
        }
        }

	 //虛擬機關機
        if ($u == 4){
        $pcid=str_replace("'","''",$_POST['pcid']);
        $hostnum=str_replace("'","''",$_POST['hostnum']);
        $mod=str_replace("'","''",$_POST['mod']);
	$tmod=str_replace("'","''",$_POST['tmod']);
	
	if($pcid != '' && $hostnum != '' && $mod != ''){
	       echo '虛擬機關機中 ─=≡Σ((( つ•̀ω•́)つ';
	       $C="update vm set vm_status=1,user='NULL',time='NULL' where vm='$pcid';";
	       $result = mysqli_query($link,$C);
	       shell_exec("echo 'sudo /bin/sh ".$shpath."shutdown_vm.sh $_SESSION[unum] $pcid $hostnum $mod' |at now");
	}
	elseif($tmod == 1111){		//強迫關機
		echo '全電腦強迫關機中';
		$C="update vm set vm_status=1,user='NULL',time='NULL' where vm_status=2;";
                $result = mysqli_query($link,$C);
                shell_exec("echo 'sudo /bin/sh ".$shpath."poweroff.sh 1' |at now");
	
	}
	elseif($tmod == 111){
		$mod=1;
		$C="update vm set vm_status=1,user='NULL',time='NULL' where vm='$pcid' where vm_status=2;";
                $result = mysqli_query($link,$C);
                shell_exec("echo 'sudo /bin/sh ".$shpath."shutdown_vm.sh $_SESSION[unum] $pcid $hostnum $mod' |at now");
		echo '電腦強迫關機中';
	}
	else{
		echo '全電腦關機中';
                $C="update vm set vm_status=1,user='NULL',time='NULL' where vm_status=2;";
                $result = mysqli_query($link,$C);
                shell_exec("echo 'sudo /bin/sh ".$shpath."poweroff.sh 0' |at now");
	}
        }

	//電腦故障
	if ($u == 5){
        $pcid=str_replace("'","''",$_POST['pcid']);
	$Q="update vm set vm_status=3 where vm='$pcid';";
        $result = mysqli_query($link,$Q);
	if(!$result){
                        echo '錯誤';
                }
                else{
                        echo '修改成功';
                }
        }
	
	//更改故障電腦狀態
        if ($u == 6){
        $pcid=str_replace("'","''",$_POST['pcid']);
        $Q="update vm set vm_status=0 where vm='$pcid';";
        $result = mysqli_query($link,$Q);
         if(!$result){
                        echo '錯誤';
                }
                else{
                        echo '修改成功';
                }
        }
	
	//更新電腦狀態
        if ($u == 7){
		echo '更新狀態中，請稍後';
                shell_exec("echo 'sudo /bin/sh ".$shpath."check_class_status.sh' |at now");
        }
	mysqli_close($link);
?>
