<?php
// exam.php - Main Exam Page
$allowed_exams = ['ntpc', 'groupd', 'alp', 'je'];
$exam = isset($_GET['exam']) ? strtolower(trim($_GET['exam'])) : 'ntpc';
if (!in_array($exam, $allowed_exams)) $exam = 'ntpc';

// Exam config
$exam_config = [
    'ntpc'   => ['name' => 'RRB NTPC',    'time' => 90, 'total' => 100, 'color' => '#2563eb', 'sections' => ['Maths', 'Reasoning', 'GK/GS']],
    'groupd' => ['name' => 'RRB Group D', 'time' => 90, 'total' => 100, 'color' => '#16a34a', 'sections' => ['Maths', 'Reasoning', 'Science', 'GK']],
    'alp'    => ['name' => 'RRB ALP',     'time' => 60, 'total' => 75,  'color' => '#dc2626', 'sections' => ['Maths', 'Reasoning', 'Science', 'Technical']],
    'je'     => ['name' => 'RRB JE',      'time' => 90, 'total' => 100, 'color' => '#7c3aed', 'sections' => ['Maths', 'Reasoning', 'GK', 'Technical']],
];
$cfg = $exam_config[$exam];
$time_seconds = $cfg['time'] * 60;
?>
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title><?= htmlspecialchars($cfg['name']) ?> Mock Test - RRB MockTest</title>
  <link rel="stylesheet" href="css/style.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;800&family=Noto+Sans+Devanagari:wght@400;600;700&display=swap" rel="stylesheet"/>
</head>
<body class="exam-page-body">

<!-- TOP BAR -->
<div class="exam-topbar">
  <div class="container exam-topbar-inner">
    <div>
      <div class="exam-title-tag">🚂 <?= htmlspecialchars($cfg['name']) ?> Mock Test</div>
      <div class="exam-info-tags" style="margin-top:0.3rem;">
        <span>📝 <?= $cfg['total'] ?> Questions</span>
        <span>⏱ <?= $cfg['time'] ?> Minutes</span>
        <span>➖ 1/3 Negative Marking</span>
      </div>
    </div>
    <div class="timer-box" id="timer">
      ⏱ <span id="timer-display">--:--</span>
    </div>
  </div>
</div>

<div class="container">
<form id="examForm" method="POST" action="submit.php" onsubmit="return confirmSubmit()">
  <input type="hidden" name="exam" value="<?= htmlspecialchars($exam) ?>"/>
  <input type="hidden" name="time_taken" id="time_taken" value="0"/>
  <input type="hidden" name="answers" id="answers_json" value="{}"/>

  <div class="exam-layout">

    <!-- LEFT: QUESTION PANEL -->
    <div class="question-panel">
      <div class="question-card" id="questionCard">
        <div class="q-header">
          <span class="q-number">Sawal <span id="q-num-display">1</span> / <?= $cfg['total'] ?></span>
          <span class="q-section-tag" id="q-section-tag">-</span>
        </div>
        <div class="q-text" id="q-text">Loading...</div>
        <div class="options-list" id="options-list"></div>
        <div class="q-nav-btns">
          <button type="button" class="btn-nav btn-prev" onclick="changeQuestion(-1)">← Pichla</button>
          <button type="button" class="btn-nav btn-nav" onclick="markForReview()" style="background:#f97316;color:#fff;">🚩 Review ke liye Mark</button>
          <button type="button" class="btn-nav btn-next" onclick="changeQuestion(1)">Agla →</button>
          <button type="button" class="btn-nav btn-submit" onclick="submitExam()">✅ Submit Karo</button>
        </div>
      </div>
    </div>

    <!-- RIGHT: SIDEBAR -->
    <div class="exam-sidebar">
      <!-- Timer Summary -->
      <div class="sidebar-card">
        <h4>📊 Tera Progress</h4>
        <div class="sidebar-stats">
          <div class="mini-stat"><div class="n" id="s-answered">0</div><div class="l">Attempt</div></div>
          <div class="mini-stat"><div class="n" id="s-marked">0</div><div class="l">Review</div></div>
          <div class="mini-stat"><div class="n" id="s-unattempted"><?= $cfg['total'] ?></div><div class="l">Baki</div></div>
        </div>
      </div>

      <!-- Question Palette -->
      <div class="sidebar-card">
        <h4>🗓 Question Map</h4>
        <div class="q-palette" id="q-palette"></div>
        <div class="palette-legend">
          <div class="legend-item"><div class="legend-dot l-current"></div> Current</div>
          <div class="legend-item"><div class="legend-dot l-answered"></div> Attempt kiya</div>
          <div class="legend-item"><div class="legend-dot l-marked"></div> Review Marked</div>
          <div class="legend-item"><div class="legend-dot l-unattempted"></div> Baki hai</div>
        </div>
      </div>
    </div>
  </div>
</form>
</div>

<!-- Confirm Modal -->
<div id="submitModal" style="display:none; position:fixed; inset:0; background:rgba(0,0,0,0.55); z-index:999; align-items:center; justify-content:center;">
  <div style="background:#fff; border-radius:18px; padding:2rem; max-width:400px; width:90%; text-align:center; box-shadow:0 20px 60px rgba(0,0,0,0.25);">
    <div style="font-size:2.5rem; margin-bottom:0.7rem;">⚠️</div>
    <h3 style="font-family:'Baloo 2',sans-serif; font-size:1.3rem; margin-bottom:0.5rem; color:#1a3c5e;">Test Submit Karein?</h3>
    <p style="color:#64748b; font-size:0.9rem; margin-bottom:1.2rem;" id="modal-summary">Kya aap sure hain?</p>
    <div style="display:flex; gap:0.8rem; justify-content:center;">
      <button onclick="closeModal()" style="padding:0.65rem 1.5rem; border:2px solid #e2e8f0; border-radius:8px; font-weight:700; cursor:pointer; background:#fff;">Wapas Jao</button>
      <button onclick="doSubmit()" style="padding:0.65rem 1.5rem; background:#f97316; color:#fff; border:none; border-radius:8px; font-weight:700; cursor:pointer; font-family:'Baloo 2',sans-serif;">✅ Submit!</button>
    </div>
  </div>
</div>

<script src="js/questions.js"></script>
<script>
const EXAM_TYPE = "<?= $exam ?>";
const TOTAL_Q = <?= $cfg['total'] ?>;
const TIME_SECONDS = <?= $time_seconds ?>;
</script>
<script src="js/exam.js"></script>
</body>
</html>
