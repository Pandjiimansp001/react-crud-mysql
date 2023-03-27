<?php 
    include('connect.php');

    $id = (int) $_GET['id'];

    $sql = $connect->query("SELECT * FROM employee_data WHERE id = $id");
    $data = $sql->fetch_assoc();
    echo json_encode($data);

    if ($data === null) {
        echo "
            <script>
                document.location.href = 'http://localhost:3000';
            </script>
        ";
    }

    mysqli_close($connect);
?>