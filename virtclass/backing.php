<?php	
	include ('./config/config.php');
	$u=(int)$_REQUEST['u'];
	
	if ($u == 1){
		$pcnum=str_replace("'","''",$_POST['pcnum']);
        	$imgname=str_replace("'","''",$_POST['imgname']);
        	$choice=str_replace("'","''",$_POST['choice']);
        	$bmod=str_replace("'","''",$_POST['bmod']);
		$pcid=str_replace("'","''",$_POST['pcid']);
		$unum=str_replace("'","''",$_POST['unum']);
		$datetime= date("Y/m/d H:i:s");

		if (!$imgname){
        		echo '請輸入映像檔名稱';                                        //判斷是否有正確輸入
       		}
		else{
			#$Q="insert into original select max(oid)+1,'$imgname','$datetime','20' from original";
			#$result = mysqli_query($link,$Q);
			#if(!$result){
		#		echo '失敗';
			#}
			#else{
				echo '備份中';
				#$C="update vm set vm_status=4,user='NULL',time='NULL' where vm='$pcid';";
				#$result = mysqli_query($link,$C);
				#shell_exec("echo 'sudo /bin/sh ".$shpath."backing_host.sh $unum $imgname $choice $pcid' |at now");
				shell_exec("echo 'sudo /bin/sh ".$shpath."newbackup.sh  $imgname $pcid' |at now");
			#}
		}
	}
	
	//交換電腦圖片JSON

        if ($u == 2){
                $open="SELECT vid,vm,vm_status,user,time FROM vm;";
                $pc = mysqli_query($link,$open);
                $rows = array();
                while($r = mysqli_fetch_assoc($pc)) {
                        $rows[] = $r;
                }
                echo json_encode($rows);
        }
	mysqli_close($link);	
