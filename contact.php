<?php
// Load PHPMailer classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer library files
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars(trim($_POST["firstName"]));
    $lastName = htmlspecialchars(trim($_POST["lastName"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $phoneNumber = htmlspecialchars(trim($_POST["phoneNumber"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Initialize PHPMailer
    $mail = new PHPMailer();
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Set the SMTP server to send through Gmail
        $mail->SMTPAuth = true;
        $mail->Username = 'vijay.anand@crosscloudops.com'; // Your Gmail address
        $mail->Password = 'rbyrfwtwvqmbyfap'; // App-specific password
        $mail->SMTPSecure = 'tls'; // Enable TLS encryption
        $mail->Port = 587; // TCP port for TLS

        // Email content
        $mail->setFrom($email, $firstName . ' ' . $lastName);
        $mail->addAddress('vijay.anand@crosscloudops.com'); // Recipient email
        $mail->isHTML(true);
        $mail->Subject = 'Contact Form Submission from ' . $firstName . ' ' . $lastName;
        $mail->Body = "
            <h3>New Contact Form Submission</h3>
            <p><strong>First Name:</strong> $firstName</p>
            <p><strong>Last Name:</strong> $lastName</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone Number:</strong> $phoneNumber</p>
            <p><strong>Message:</strong> $message</p>
        ";

        // Send email
        if ($mail->send()) {
            echo json_encode(["message" => "Email sent successfully!"]);
        } else {
            echo json_encode(["message" => "Failed to send email."]);
        }
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}
?>
