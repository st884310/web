<?php
	include ('./config/config.php');
	session_start();
	$u=(int)$_REQUEST['u'];
	$login=$_SESSION["login"];
        $level=$_SESSION["level"];
        $uname=$_SESSION["uname"];
	
	//未處理
	if ($u == 1){
	if($login != null && $level =="Admin" ||  $level =="Teacher"){              //如果權限不足不會顯示資料

                        $data = "SELECT mid,mnum,mpc,message,detail,mtime,megstatus FROM message where megstatus=0;";
                        $msgdata = mysqli_query($link,$data);
                        $msg=mysqli_num_rows($msgdata);
			
                        for($i=0;$i<$msg;$i++){
			$msgrow=mysqli_fetch_row($msgdata);
			  echo '<tr>';
				echo '<th scope="row" class="align-middle" id="mid'.$msgrow[0].'">'.$msgrow[0].'</th>';
			       	      echo '<td class="align-middle">'.$msgrow[1].'</td>';
			              echo '<td class="align-middle">'.$msgrow[2].'</td>';
			              echo '<td class="align-middle">'.$msgrow[3].'</td>';
				      echo '<td class="align-middle">'.$msgrow[4].'</td>';
				      echo '<td class="align-middle">'.$msgrow[5].'</td>';
			  	      echo '<td class="align-middle">未處理</td>';
  				echo '<td class="align-middle"><button type="button" onclick="dealbtn('.$msgrow[0].');" class="btn btn-success">已處理</button></td>';
			   echo '</tr>';
			}
		}
	}
	//已處理
	if ($u == 2){
	if($login != null && $level =="Admin" ||  $level =="Teacher"){              //如果權限不足不會顯示資料
                        $data = "SELECT mid,mnum,mpc,message,detail,mtime,megstatus FROM message where megstatus=1;";
                        $msgdata = mysqli_query($link,$data);
                        $msg=mysqli_num_rows($msgdata);

                        for($i=0;$i<$msg;$i++){
                        $msgrow=mysqli_fetch_row($msgdata);
			  echo '<tr>
				<th scope="row" class="align-middle" id="unmid'.$msgrow[0].'">'.$msgrow[0].'</th>
			       	        <td class="align-middle">'.$msgrow[1].'</td>
			       	        <td class="align-middle">'.$msgrow[2].'</td>
			        	<td class="align-middle">'.$msgrow[3].'</td>
				       	<td class="align-middle">'.$msgrow[4].'</td>
					<td class="align-middle">'.$msgrow[5].'</td>
					<td class="align-middle"><button type="button" onclick="undealbtn('.$msgrow[0].');" class="btn btn-success">未處理</button></td>
					<td class="align-middle"><button type="button" onclick="delbtn('.$msgrow[0].');" class="btn btn-danger">刪除</button></td>
			  </tr>';
			}
		}
	}

	//已處理按鈕
	if ($u == 3){
	$mid=(int)$_POST['mid'];	
	$deal="UPDATE message SET megstatus=1 WHERE mid=$mid;";
        $result=mysqli_query($link,$deal);
		
		if (!$result){
        	    echo '資料庫修改失敗';
	        }
	        else{
	            echo '資料庫修改成功';
	        }
	}

	//已處理按鈕
        if ($u == 4){

        $unmid=(int)$_POST['unmid'];
        $undeal="UPDATE message SET megstatus=0 WHERE mid=$unmid;";
        $unresult=mysqli_query($link,$undeal);

	        if (!$unresult){
	            echo '資料庫修改失敗';
	        }
	        else{
	            echo '資料庫修改成功';
	        }
        }
	
	//刪除按鈕
        if ($u == 5){

        $unmid=(int)$_POST['unmid'];
        $del="delete from message WHERE mid=$unmid;";
        $delete=mysqli_query($link,$del);

	        if (!$delete){
	            echo '資料庫刪除失敗';
	        }
	        else{
	            echo '資料庫刪除成功';
	        }
        }
	mysqli_close($link);
?>
