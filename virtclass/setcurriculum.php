<?php
	session_start();
        $set=(int)$_REQUEST['set'];
        include ('./config/config.php');

        if ($set == 1){
		$classname=str_replace("'","''",$_POST['classname']);
		$week=str_replace("'","''",$_POST['week']);
		$period=str_replace("'","''",$_POST['period']);
		$classtotal=str_replace("'","''",$_POST['classtotal']);
		//$time=str_replace("'","''",$_POST['time']);
		//$hour=substr_replace($time,'',2);
		//$min=substr($time,-2);
		
		if (!$classname){
			echo '請輸入課程名稱';
		}
		elseif (!$classtotal){
			echo '請輸入課程節數';
		}
		elseif ($classtotal > 13){
                        echo '課程最多只到13節喔';
                }
		elseif ($classtotal == 1){
				$set="update curriculum set classname='$classname',classtotal=$classtotal,classnumber=$classtotal where week=$week and period=$period;";
                		$setclass=mysqli_query($link,$set);
                		if (!$setclass){
                	                echo '修改失敗';
				}
                        	else{
                                	echo'課程修改完畢';
	                        }
                	}
		else{
		$stack = array();
                        for($i=$period;$i<$classtotal+$period;$i++){
                                array_push($stack, $i);
                        }
                        $classnumber = trim(join(',', $stack));
		$set="update curriculum set classname='$classname',classtotal=$classtotal,classnumber='$classnumber' where week=$week and period=$period;";
                $setclass=mysqli_query($link,$set);
			if (!$setclass){
				echo '修改失敗';
			}	
			else{
				echo'課程修改完畢';
			}
		}
	}

	if ($set == 2){
                $addclassname=str_replace("'","''",$_POST['addclassname']);
                $addweek=str_replace("'","''",$_POST['addweek']);
                $addperiod=str_replace("'","''",$_POST['addperiod']);
                $addclasstotal=str_replace("'","''",$_POST['addclasstotal']);
                $addtime=str_replace("'","''",$_POST['addtime']);
                $hour=substr_replace($addtime,'',2);
                $min=substr($addtime,-2);
                if (!$addclassname){
                        echo '請輸入課程名稱';
                }
                elseif (!$addclasstotal){
                        echo '請輸入課程節數';
                }
                elseif ($addclasstotal > 13){
                        echo '課程最多只到13節喔';
                }
		/*elseif ($hour == '' || $min == ''){
                        echo '請輸入正確的課程時間';
                }*/
		elseif ($addclasstotal == 1){
			shell_exec("echo 'sudo /bin/sh ".$shpath."curriculum.sh $addclassname $addweek $hour $min $addperiod $addclasstotal $addclasstotal' |at now");
                        echo '課程新增完畢';
                }
                else{
			$stack = array();
			for($i=$addperiod;$i<$addclasstotal+$addperiod;$i++){
				array_push($stack, $i);
        	        }
			$classnumber = trim(join(',', $stack));
			shell_exec("echo 'sudo /bin/sh ".$shpath."curriculum.sh $addclassname $addweek $hour $min $addperiod $addclasstotal $classnumber' |at now");
			echo '課程新增完畢';
                }
        }
	
	if ($set == 3){
		$classname=str_replace("'","''",$_POST['classname']);
		if ($classname != ""){
			shell_exec("echo 'sudo /bin/sh ".$shpath."rm_curriculum.sh $classname' |at now");
	                echo '刪除中';
	                echo ".$classname.";
		}else{
			 echo 'false';
		}
	}
	mysqli_close($link);
?>
