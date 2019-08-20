<?php
    include('session.php');
    $current_user = $_SESSION['username'];
    if ($current_user != 'admin') {
        include 'partials/user_only.php';
        
    }
    else{
        
        include 'partials/admin_only.php';
    }
?>

