<?php
include_once 'DB.php';
session_start();
$_SESSION['username'] = null;

function checkLogin() {
	if (isset($_POST["username"]) && isset($_POST["password"])) {
		$DB       = new DB();
		$username = $_POST["username"];
		$password = $_POST["password"];
		$query    = "select * from `profile` where `username`='$username' and `password`='$password'";
		return $DB->get_row($query);
	}
}
?>