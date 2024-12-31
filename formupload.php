<?php

$servername = "localhost";
$username = "u361794793_xatcode";
$password = "1@jTZx5[@"; 
$database = "u361794793_xatcodeQuotes";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $phone = $_POST['Phone'];
    $subject = $_POST['Subject'];
    $message = $_POST['Message'];

    // Insert data into the database
    $sql = "INSERT INTO messages (Name, Email, Phone, Subject, Message) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $name, $email, $phone, $subject, $message);

    if ($stmt->execute()) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $conn->error;
    }

    $stmt->close();
}

$conn->close();
?>
