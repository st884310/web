<?php
$classtime = array("08:10", "09:10", "10:10", "11:10", "13:30", "14:30", "15:30", "16:30", "18:30", "19:20", "20:15", "21:05", "21:55");
$t=$i-1;
//新增課程
           echo "<div class='modal fade' id='ClassModalCenter$j$i' tabindex='-1' role='dialog' aria-hidden='true'>";
                 echo '<div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content box-shadow">
                     <div class="modal-header">
                <h4 class="modal-title font-weight-bold">選擇時間：星期'.$j.' 第'.$i.'節</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleFormControlInput1">請輸入課程名稱：</label>
		    <input type="text" id="addclassname'.$j.''.$i.'" class="form-control">
                  </div>
                    <input type="hidden" value='.$j.' id="addweek'.$j.''.$i.'">
                    <input type="hidden" value='.$i.' id="addperiod'.$j.''.$i.'">
                    <input type="hidden" value="'.$classtime[$t].'" id="addtime'.$j.''.$i.'">
               <div class="form-group">
                       <label class="col-form-label font-weight-bold">請輸入課程節數：</label>
  		       <input type="number" id="addclasstotal'.$j.''.$i.'" min="1" max="13" class="form-control" autocomplete="off" maxlength="2"/>
               </div>
              </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-info btn-lg btn-block font-weight-bold" onclick="addclassbtn('.$j.''.$i.');">新增課程</button>
              </div>
            </div>
          </div>
        </div>';

//修改課程
        echo "<div class='modal fade' id='ManageModalCenter$j$i' tabindex='-1' role='dialog' aria-hidden='true'>";
                 echo '<div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content box-shadow">
                     <div class="modal-header">
                <h4 class="modal-title font-weight-bold">修改課程</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                   <label for="exampleFormControlInput1">請輸入課程名稱：</label>
                   <input type="text" class="form-control" value="'.$row[1].'" id="classname'.$j.''.$i.'">
		   <input type="hidden" value='.$j.' id="week'.$j.''.$i.'">
		   <input type="hidden" value='.$i.' id="period'.$j.''.$i.'">
                  </div>
                  <div class="form-group">
                        <label class="col-form-label font-weight-bold">請輸入課程節數：</label>
                        <input type="number" min="1" max="13" id="classtotal'.$j.''.$i.'" class="form-control" autocomplete="off" maxlength="2" value="'.$row[5].'"/>
                 </div>
                </form>
              </div>
              <div class="modal-footer">
		<div class="container">
			<div class="row">
				<button type="button" class="btn btn-danger btn-lg font-weight-bold col m-1" onclick="delclassbtn('.$j.''.$i.');">刪除課程</button>
		                <button type="button" class="btn btn-success btn-lg btn-block font-weight-bold col m-1" onclick="classbtn('.$j.''.$i.');">修改課程</button>
			</div>
		</div>
              </div>
            </div>
          </div>
        </div>';
?>
