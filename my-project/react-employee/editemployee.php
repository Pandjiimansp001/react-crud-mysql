<?php 
    include('connect.php');

    $_POST = json_decode(file_get_contents("php://input"), true);

    $id = $_POST['id'];
    $name = $_POST['name'];
    $job = $_POST['job'];

    $result = '';

    $sql = $connect->query("UPDATE employee_data SET name = '$name', job = '$job' WHERE id = '$id' ");

    if (mysqli_query($connect, $sql)) {
        $result = "Update Successfully!";
    } else {
        $result = "Update Failed!" . mysqli_error($connect);
    }

    echo json_encode($result);
    mysqli_close($connect);
?>