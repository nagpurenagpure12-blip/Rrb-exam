<?php
// submit.php - Exam Submission Handler
session_start();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

$exam = isset($_POST['exam']) ? strtolower(trim($_POST['exam'])) : 'ntpc';
$answers_json = isset($_POST['answers']) ? $_POST['answers'] : '{}';
$time_taken = isset($_POST['time_taken']) ? (int)$_POST['time_taken'] : 0;

// Validate
$allowed_exams = ['ntpc', 'groupd', 'alp', 'je'];
if (!in_array($exam, $allowed_exams)) {
    header('Location: index.html');
    exit;
}

$user_answers = json_decode($answers_json, true);
if (!is_array($user_answers)) {
    $user_answers = [];
}

// Store in session for result page
$_SESSION['exam_submission'] = [
    'exam'        => $exam,
    'user_answers' => $user_answers,
    'time_taken'  => $time_taken,
    'submitted_at' => time(),
];

// Redirect to result page
header('Location: result.php');
exit;
?>
