<?php

$mysqli = new mysqli("localhost", "root", "2727175#356", "GFDO");

/* check connection */
if ($mysqli->connect_error) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}


    if ($result = $mysqli->query("SELECT vm  FROM vm")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }
   echo   json_encode($myArray);
    }
    $mysqli -> close();
?>

