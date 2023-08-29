<?php
// Database configuration
$username = 'name';
$database = 'number';

// Connect to the database
$conn = mysqli_connect($hostname, $username, $password, $database);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Insert a contact into the database
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $number = $_POST['number'];

    $sql = "INSERT INTO contacts (name, number) VALUES ('$name', '$number')";
    if (mysqli_query($conn, $sql)) {
        echo "Contact inserted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

while ($row = mysqli_fetch_assoc($result)):
echo $row['name'];, 
echo $row['number']; 
endwhile; 

// Retrieve contacts from the database
$sql = "SELECT name, number FROM contacts";
$result = mysqli_query($conn, $sql);

// Close the database connection
mysqli_close($conn);
?>