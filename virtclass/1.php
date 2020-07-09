<?php

$mysqli = new mysqli("localhost", "root", "2727175#356", "GFDO");


$sql="select * from original";
$result=$link->query($sql);

    
$mysqli -> close();
?>
