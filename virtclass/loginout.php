<!DOCTYPE html>
<?php
session_start(); 
session_unset(); 
session_destroy();
?>
<script type='text/javascript'>
 	 localStorage.clear();
	 window.location = "index.html";
</script>
