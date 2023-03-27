<?php 
    include('connect.php');

    $sql = $connect->query("SELECT * FROM employee_data");
    $result = array();

    while ($data = $sql->fetch_assoc()) {
        $result[] = $data;
    }

    echo json_encode($result);

    mysqli_close($connect);
?>