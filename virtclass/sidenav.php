<!DOCTYPE html>
<?php
session_start();

        if ($_SESSION['login'] != ''){
                echo '<a class="text-break rounded-shadow font-weight-bold text-white border border-white border-left-0" style="font-size:80%;" id="blog" href="#" data-no-instant>'.$_SESSION['uname'].' &nbsp;'.$_SESSION['level'].'</a>';
        }
        else if($_SESSION['login'] == ''){
                $url = "loginout.php";
                echo "<script type='text/javascript'>";
                echo "window.location.href='$url'";
                echo "</script>";
        }
?>
<script>
$(document).ready(function (){
        var user = localStorage.getItem('user');
        $(document).ready(function(){
                if (user == null){
			window.location.href="loginout.php"
                }
        });
});
</script>
