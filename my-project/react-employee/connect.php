<?php 
    $connect = new mysqli("localhost", "root", "", "employee"); 

    if($connect->connect_error) {
        die("Database connection is failed!");
    }
?>
