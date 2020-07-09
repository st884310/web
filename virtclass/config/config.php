<?php
	//連接資料庫
	$link = new mysqli('localhost','root','2354159','GFDO');
	mysqli_set_charset($link,'utf8mb4');
	if (!$link) die('mysql not connect!');

	//跨來源資源共用（CORS）
	header('Access-Control-Allow-Origin: http://172.31.255.32/virtclass/');
	header('Access-Control-Allow-Methods: POST');
	header('Access-Control-Allow-Headers: X-PINGOTHER, Content-Type');
	header('Access-Control-Max-Age: 86400');

	$shpath='/root/script/';//腳本路徑
	$score='/partfile/original/';//原始碟路徑
	
	date_default_timezone_set('Asia/Taipei');//設定系統時區
?> 
