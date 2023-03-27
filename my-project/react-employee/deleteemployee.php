<?php 
    include('connect.php');

    $id = $_GET['id'];

    $sql = "DELETE from employee_data WHERE id = $id";

    $result = '';

    if ($connect->query($sql) === TRUE) {
        $result = "Data successfully deleted!";
    } else {
        $result = "Failed to delete data!" . $connect->error;
    }

    echo json_encode($result);
    $connect->close()
?>