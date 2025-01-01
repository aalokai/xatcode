<?php

$server = "";
$username = "";
$password = ""; 
$database = "";

// Create connection
$con = mysqli_connect($server, $username, $password, $database);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone'];
    $subject = $_POST['Subject'];
    $message = $_POST['Message'];

    // Insert data into the database
    $query = "INSERT INTO messages (Name, Email, Phone, Subject, Message) VALUES ('$name', '$email', '$phone', '$subject', '$message')";

    if (mysqli_query($con, $query)) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . mysqli_error($con);
    }
}

// Close connection
mysqli_close($con);
?>
