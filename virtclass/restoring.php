<?php
	session_start();
	include ('./config/config.php');
        $u=(int)$_REQUEST['u'];
	
	if ($u == 1){
                $open="SELECT vid,vm,vm_status,user,time FROM vm;";
                $pc = mysqli_query($link,$open);
                $rows = array();
                while($r = mysqli_fetch_assoc($pc)) {
                        $rows[] = $r;
                }
                echo json_encode($rows);
        }
	if ($u == 4){
		#$data="SELECT original_system,original_person FROM original;";
		$data="SELECT original_system FROM original;";
		$aa = mysqli_query($link,$data);
		$rrow = array();
		while($r =  mysqli_fetch_assoc($aa)) {
            		$rrow[] = $r;
    		}
   		        echo json_encode($rrow);
	}
	if ($u == 3){
		$imgname=str_replace("'","''",$_POST['imgname']);
		#$personimg=str_replace("'","''",$_POST['personimg']);
		$pcnum=str_replace("'","''",$_POST['pcnum']);
		$pcnum=implode(" ",$pcnum);
		$pcaction=str_replace("'","''",$_POST['pcaction']);
		$pcaction=substr("$pcaction", -1);
	        $arr = explode(" ", $pcnum);
		$arr = array_filter($arr);
		$j=count($arr);


		if (!$pcnum){
			echo '請選擇電腦編號';
		}
		elseif (!$pcaction){
                        echo '請選擇還原動作';
                }
		elseif ($pcaction==1 && $imgname=='NULL'){
                        echo '請選擇系統磁碟';
                }
		#elseif ($pcaction==1 && $personimg=='NULL'){
                 #       echo '請選擇用戶磁碟';
                #}
		else{
			if ($pcaction == 2){
		#	 $personimg=0;
			 $imgname=0;
			}
			for ($i=0;$i<$j;$i++){
				$Q="update vm set vm_status=5 where vm='$arr[$i]';";
				$result = mysqli_query($link,$Q);
				echo '正在還原'.$arr[$i].'';
			}
			#shell_exec("echo 'sudo /bin/sh ".$shpath."nc_restore_host.sh  $pcaction  $imgname  $personimg  $pcnum  &>/dev/null' |at now");
			shell_exec("echo 'sudo /bin/sh ".$shpath."newnc_restore_host.sh  $pcaction  $imgname   $pcnum  &>/dev/null' |at now");
		}
        }
	mysqli_close($link);
?>
