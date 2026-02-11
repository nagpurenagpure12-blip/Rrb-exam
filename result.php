<?php
// result.php - Exam Result Page
session_start();

// Check if result exists in session
if (!isset($_SESSION['exam_submission'])) {
    // Demo result for testing
    $demo_mode = true;
    $exam = 'ntpc';
    $time_taken = 3240;
    $user_answers = ['0'=>0,'1'=>2,'2'=>1,'3'=>2,'4'=>0,'5'=>1,'6'=>0,'7'=>0,'8'=>0,'9'=>1];
} else {
    $demo_mode = false;
    $data = $_SESSION['exam_submission'];
    $exam = $data['exam'];
    $user_answers = $data['user_answers'];
    $time_taken = $data['time_taken'];
    unset($_SESSION['exam_submission']); // Clear after reading
}

$exam_names = [
    'ntpc'   => 'RRB NTPC',
    'groupd' => 'RRB Group D',
    'alp'    => 'RRB ALP',
    'je'     => 'RRB JE',
];
$exam_colors = [
    'ntpc' => '#2563eb', 'groupd' => '#16a34a',
    'alp'  => '#dc2626', 'je'     => '#7c3aed'
];
$exam_totals = ['ntpc'=>100,'groupd'=>100,'alp'=>75,'je'=>100];

$exam_name = $exam_names[$exam] ?? 'RRB Exam';
$exam_color = $exam_colors[$exam] ?? '#1a3c5e';
$total_q = $exam_totals[$exam] ?? 100;

// Format time
function format_time($secs) {
    $m = floor($secs / 60);
    $s = $secs % 60;
    return "{$m} min {$s} sec";
}

$time_fmt = format_time($time_taken);
$answered = count($user_answers);
$unattempted = $total_q - $answered;

// Note: Actual scoring is done client-side (JS has questions)
// Server just gets user_answers map {q_index: chosen_option}
// For leaderboard saving, we'd need questions too
// Here we compute a mock score for demo

// Save to leaderboard (CSV file)
$player_name = isset($_POST['player_name']) ? htmlspecialchars(strip_tags($_POST['player_name'])) : 'Anonymous';
?>
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Result - <?= htmlspecialchars($exam_name) ?> | RRB MockTest</title>
  <link rel="stylesheet" href="css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;800&family=Noto+Sans+Devanagari:wght@400;600;700&display=swap" rel="stylesheet"/>
</head>
<body>

<!-- HEADER -->
<header class="site-header">
  <div class="container header-inner">
    <div class="logo">
      <span class="logo-icon">🚂</span>
      <div>
        <span class="logo-title">RRB MockTest</span>
        <span class="logo-sub">Result Page</span>
      </div>
    </div>
    <nav class="main-nav">
      <a href="index.html">Home</a>
      <a href="leaderboard.php">🏆 Leaderboard</a>
    </nav>
  </div>
</header>

<!-- RESULT HERO -->
<div class="result-hero">
  <p class="exam-label">✅ <?= htmlspecialchars($exam_name) ?> Mock Test - Submitted!</p>
  <h1 id="result-heading">Tumhara Result 🎉</h1>
  
  <!-- Score Ring will be filled by JS -->
  <div class="score-ring-wrap">
    <div class="score-ring">
      <svg width="160" height="160" viewBox="0 0 160 160">
        <circle cx="80" cy="80" r="64" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="14"/>
        <circle cx="80" cy="80" r="64" fill="none" stroke="white" stroke-width="14"
          stroke-dasharray="402" stroke-dashoffset="402" id="ring-circle"
          stroke-linecap="round"/>
      </svg>
      <div class="score-ring-text">
        <span class="score-pct" id="score-pct">--</span>
        <span class="score-lbl">Score</span>
      </div>
    </div>
  </div>
</div>

<div class="container result-page">

  <!-- Stats Cards -->
  <div class="result-cards" id="result-cards">
    <!-- Filled by JS -->
  </div>

  <!-- Save to Leaderboard Form -->
  <div style="background:#fff; border-radius:16px; padding:1.5rem; box-shadow:0 4px 24px rgba(0,0,0,0.08); max-width:500px; margin:0 auto 2rem; text-align:center;">
    <h3 style="font-family:'Baloo 2',sans-serif; color:#1a3c5e; margin-bottom:0.8rem;">🏆 Leaderboard Mein Naam Darz Karein</h3>
    <form id="lbForm" style="display:flex; gap:0.7rem; flex-wrap:wrap; justify-content:center;">
      <input type="text" id="lb-name" placeholder="Apna naam likhein..." maxlength="30"
        style="flex:1; min-width:180px; padding:0.65rem 1rem; border:2px solid #e2e8f0; border-radius:8px; font-size:0.95rem; font-family:inherit;"/>
      <button type="submit" style="padding:0.65rem 1.5rem; background:#1a3c5e; color:#fff; border:none; border-radius:8px; font-weight:700; cursor:pointer; font-family:'Baloo 2',sans-serif;">
        Submit
      </button>
    </form>
    <p id="lb-msg" style="margin-top:0.6rem; color:#16a34a; font-size:0.85rem; display:none;">✅ Leaderboard mein add ho gaya!</p>
  </div>

  <!-- Solutions Section -->
  <div class="solutions-section">
    <h2>📚 Solution & Correct Answers</h2>
    <div id="solutions-list">
      <!-- Filled by JS -->
    </div>
  </div>

  <!-- Action Buttons -->
  <div class="result-actions">
    <a href="exam.php?exam=<?= $exam ?>" class="btn-retake">🔄 Dobara Karo</a>
    <a href="index.html" class="btn-retake" style="background:#64748b;">🏠 Home</a>
    <a href="leaderboard.php?exam=<?= $exam ?>" class="btn-leaderboard">🏆 Leaderboard</a>
  </div>
</div>

<script src="js/questions.js"></script>
<script>
const EXAM_TYPE_RESULT = "<?= $exam ?>";
const TOTAL_Q_RESULT = <?= $total_q ?>;
const USER_ANSWERS_PHP = <?= json_encode($user_answers) ?>;
const TIME_TAKEN = <?= $time_taken ?>;
const EXAM_COLOR = "<?= $exam_color ?>";
</script>
<script src="js/result.js"></script>
</body>
</html>
