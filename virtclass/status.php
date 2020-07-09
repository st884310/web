<?php
	session_start();
        $u=(int)$_REQUEST['u'];
	require('./config/config.php');
	require('./filesize.php');	

 	if($u==1){ 
	$result=(glob(''.$score.'*.img'));
	$j=count($result);
		for ($i=0;$i<$j;$i++){
			$filesize=formatSizeUnits(filesize($result[$i]));
			$num=$i+1;
			echo '<tr>
				<th class="align-middle">'.$num.'</th>
				<td class="align-middle" id="imgname'.$i.'"><small>'.basename($result[$i]).'</small></td>
				<td class="align-middle">'.$filesize.'</td>
				<td class="align-middle">'.date("Y-m-d H:i:s",filemtime($result[$i])).'</td>
				<td><button type="button" class="btn btn-primary font-weight-bolder" onclick="renamebtn('.$i.')">修改</button></td>
				<td><button type="button" class="btn btn-danger font-weight-bolder" onclick="delbtn('.$i.')">刪除</button></td>
			</tr>';
		}
	}
	
	if ($u==2){
	$imgname=str_replace("'","''",$_POST['imgname']);
		if(file_exists($score.$imgname)){
		    shell_exec("echo 'sudo /bin/sh ".$shpath."delete.sh $score$imgname' |at now");
		    echo '刪除成功';
	        }else{
		    echo '刪除失敗';
		}
	}
	
	if ($u==3){
	$imgname=str_replace("'","''",$_POST['imgname']);
	$newname=str_replace("'","''",$_POST['newname']);
 	
	//$score='/home/original/img/'.$imgname.'';
	$explode = explode('.',$score);
	$ext = end($explode);
	
                if(file_exists($score.$imgname) && $newname != ''){
		    shell_exec("echo 'sudo /bin/sh ".$shpath."rename.sh $score$imgname $score$newname' |at now");
                    echo '修改成功';
                }else{
                    echo '修改失敗';
                }

        }
?>
