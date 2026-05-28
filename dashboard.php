<?php
session_start();

if(!isset($_SESSION['username'])){
    header("Location: login.php");
    exit();
}
?>

<h1>Welcome Partner</h1>

<p>Hello <?php echo $_SESSION['username']; ?></p>

<a href="logout.php">Logout</a>