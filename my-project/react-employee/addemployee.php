<?php 
    include('connect.php');

    $_POST = json_decode(file_get_contents("php://input"), true);

    $name = addslashes(htmlentities($_POST['name']));
    $job = addslashes(htmlentities($_POST['job']));

    if ($_POST === null) {
        $result = "";
    } else {
        $sql = $connect->query("INSERT INTO employee_data VALUES('', '$name', '$job')");
    }

    if ($sql === TRUE) {
        $result = "Success!";
    } else {
        $result = "Error: " . $sql . "<br/>" . $connect->error;
    }

    echo json_encode($result);
    $connect->close();
?>