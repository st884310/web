<!DOCTYPE html>
<?php
	session_start();
        include ('./config/config.php');
	
	function thisweek($getdate = "", $first_day = 1){
	if(!$getdate) $getdate = date("Y-m-d");

	//取得一周的第幾天,星期天開始0-6
	$weekday = date("w", strtotime($getdate));

	$del_day = $weekday - $first_day ;
	//本週開始日期
	//$week_start_day = date("Y-m-d", strtotime("$getdate -".($w ? $w - $del_day : 6)." days"));
	$week_start_day = date("Y-m-d", strtotime("$getdate -".$del_day." days"));

	//星期一
	$Mon = date("Y-m-d", strtotime("$week_start_day + 0 days"));

	//星期二
	$Tue = date("Y-m-d", strtotime("$week_start_day + 1 days"));

	//星期三
	$Wed = date("Y-m-d", strtotime("$week_start_day + 2 days"));
	
	 //星期四
        $Thu = date("Y-m-d", strtotime("$week_start_day + 3 days"));

	 //星期五
        $Fri = date("Y-m-d", strtotime("$week_start_day + 4 days"));
	
	 //星期六
        $Sat = date("Y-m-d", strtotime("$week_start_day + 5 days"));

	 //星期日
        $Sun = date("Y-m-d", strtotime("$week_start_day + 6 days"));
	

	//返回開始和結束日期
	return array($Mon,$Tue,$Wed,$Thu,$Fri,$Sat,$Sun);
	}

	$week_array = thisweek();
?>
<div class="table-responsive">
 <table class="table table-bordered table-hover">
    <thead class="text-center">
      <tr class="bg-dark text-white shadow">
        <th class="align-middle p-3">時間 &frasl; 日期</th>
        <th class="align-middle p-3">星期一<br/><?php echo $week_array[0]; ?></th>
        <th class="align-middle p-3">星期二<br/><?php echo $week_array[1]; ?></th>
	<th class="align-middle p-3">星期三<br/><?php echo $week_array[2]; ?></th>
	<th class="align-middle p-3">星期四<br/><?php echo $week_array[3]; ?></th>
	<th class="align-middle p-3">星期五<br/><?php echo $week_array[4]; ?></th>
	<th class="align-middle p-3">星期六<br/><?php echo $week_array[5]; ?></th>
	<th class="align-middle p-3">星期日<br/><?php echo $week_array[6]; ?></th>
      </tr>
    </thead> 
<tbody class="text-center">
<?php
        for ($i=1; $i<=13; $i++){
           echo "<tr>";
           for ($j=0; $j<=7; $j++){
           $class="select cid,classname,week,time,period,classtotal from curriculum where week = $j and period <= $i and classnumber like '%$i%';";
           $classrow = mysqli_query($link,$class);
           $row = mysqli_fetch_row($classrow);

	   $classnumber="SELECT classnumber FROM curriculum where week = $j and period = $i;";
           $number = mysqli_query($link,$classnumber);
	   $rows = mysqli_fetch_row($number);
	   $array = array($rows[0]);
	   $arrlength = count($array);
	   for($x = 0; $x < $arrlength; $x++) {
	#	    echo $array[$x];
	   }

           if ($j == 0 && $i != 0){
                if ($i == 1) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第1節 <br/>08:10~09:00</th>';
                elseif ($i == 2) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第2節 <br/>09:10~10:00</th>';
                elseif ($i == 3) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第3節 <br/>10:10~11:00</th>';
                elseif ($i == 4) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第4節 <br/>11:10~12:00</th>';
                elseif ($i == 5) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第5節 <br/>13:30~14:20</th>';
                elseif ($i == 6) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第6節 <br/>14:30~15:20</th>';
                elseif ($i == 7) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第7節 <br/>15:30~16:20</th>';
                elseif ($i == 8) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第8節 <br/>16:30~17:20</th>';
                elseif ($i == 9) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第9節 <br/>18:30~19:20</th>';
                elseif ($i == 10) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第10節 <br/>19:20~20:10</th>';
                elseif ($i == 11) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第11節 <br/>20:15~21:05</th>';
                elseif ($i == 12) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第12節 <br/>21:05~21:55</th>';
                elseif ($i == 13) echo '<th class="align-middle table-active border border-white shadow-sm p-4">第13節 <br/>21:55~22:45</th>';
           }
           elseif ($j == $row[2] ){
                echo "<td class='p-4 align-middle table-danger font-weight-bolder border border-white shadow-lg pointer' data-toggle='modal' data-target='#ManageModalCenter$j$i'>$row[1]</td>";
           }
           else{
                echo "<td class='p-2 align-middle pointer' title='空堂' data-toggle='modal' data-target='#ClassModalCenter$j$i'></td>";
           }
           include ('./curriculummodal.php');
        }
        echo "</tr>";
           if($i == 4){
           echo '<tr>
                <td class="p-4 align-middle text-center table-warning shadow h3" colspan="8"><strong>午休</strong></td>
           </tr>';
           }
           if($i == 8){
           echo '<tr>
                <td class="p-4 align-middle text-center table-primary shadow h3" colspan="8"><strong>晚上</strong></td>
                </tr>';
           }
        }
        mysqli_close($link);
?>
</tbody>
</table>
</div>
