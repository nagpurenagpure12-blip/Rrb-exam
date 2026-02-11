<?php
// leaderboard.php - Live Leaderboard Page
$exam_filter = isset($_GET['exam']) ? strtolower(trim($_GET['exam'])) : 'all';
$allowed = ['all','ntpc','groupd','alp','je'];
if (!in_array($exam_filter, $allowed)) $exam_filter = 'all';

$exam_names = [
    'ntpc' => 'RRB NTPC', 'groupd' => 'RRB Group D',
    'alp'  => 'RRB ALP',  'je'     => 'RRB JE'
];
?>
<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Leaderboard | RRB MockTest</title>
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
        <span class="logo-sub">Leaderboard</span>
      </div>
    </div>
    <nav class="main-nav">
      <a href="index.html">Home</a>
      <a href="leaderboard.php">🏆 Leaderboard</a>
    </nav>
  </div>
</header>

<!-- HERO -->
<div class="leaderboard-hero">
  <h1>🏆 Hall of Fame</h1>
  <p>RRB Mock Test Toppers - Apni rank dekho!</p>
</div>

<div class="container leaderboard-page">

  <!-- FILTER TABS -->
  <div class="filter-tabs">
    <button class="tab-btn <?= $exam_filter==='all' ? 'active' : '' ?>" data-exam="all" onclick="filterLB('all')">🌐 All Exams</button>
    <button class="tab-btn <?= $exam_filter==='ntpc' ? 'active' : '' ?>" data-exam="ntpc" onclick="filterLB('ntpc')">RRB NTPC</button>
    <button class="tab-btn <?= $exam_filter==='groupd' ? 'active' : '' ?>" data-exam="groupd" onclick="filterLB('groupd')">RRB Group D</button>
    <button class="tab-btn <?= $exam_filter==='alp' ? 'active' : '' ?>" data-exam="alp" onclick="filterLB('alp')">RRB ALP</button>
    <button class="tab-btn <?= $exam_filter==='je' ? 'active' : '' ?>" data-exam="je" onclick="filterLB('je')">RRB JE</button>
  </div>

  <!-- TOP 3 PODIUM -->
  <div class="top3-grid" id="top3-grid">
    <!-- Filled by JS -->
  </div>

  <!-- FULL LEADERBOARD TABLE -->
  <div class="lb-table-wrap">
    <table class="lb-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Naam</th>
          <th>Exam</th>
          <th>Score</th>
          <th>Sahi</th>
          <th>Galat</th>
          <th>%</th>
          <th>Samay</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody id="lb-tbody">
        <!-- Filled by JS -->
      </tbody>
    </table>
  </div>

  <div id="lb-empty" style="text-align:center; padding:3rem; display:none;">
    <div style="font-size:3rem;">📭</div>
    <p style="font-family:'Baloo 2',sans-serif; font-size:1.1rem; color:#64748b; margin-top:0.5rem;">
      Abhi koi entry nahi hai.<br/>
      <a href="index.html" style="color:#1a3c5e; font-weight:700;">Test do aur leaderboard mein aao! 🚂</a>
    </p>
  </div>

  <div style="text-align:center; margin-top:2rem;">
    <button onclick="clearLeaderboard()" style="padding:0.5rem 1.2rem; background:#fee2e2; color:#dc2626; border:1px solid #fca5a5; border-radius:8px; cursor:pointer; font-size:0.82rem;">
      🗑 My Data Clear Karo
    </button>
  </div>
</div>

<script>
let currentFilter = "<?= $exam_filter ?>";

function getLeaderboard() {
  try { return JSON.parse(localStorage.getItem('rrb_leaderboard') || '[]'); }
  catch(e) { return []; }
}

function filterLB(exam) {
  currentFilter = exam;
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.exam === exam);
  });
  renderLeaderboard();
}

function renderLeaderboard() {
  let lb = getLeaderboard();
  if (currentFilter !== 'all') {
    lb = lb.filter(e => e.exam === currentFilter);
  }
  lb.sort((a,b) => b.marks - a.marks);

  const examNames = { ntpc:'RRB NTPC', groupd:'RRB Group D', alp:'RRB ALP', je:'RRB JE' };
  const examBadge = { ntpc:'badge-ntpc', groupd:'badge-groupd', alp:'badge-alp', je:'badge-je' };

  // TOP 3 PODIUM
  const top3 = document.getElementById('top3-grid');
  top3.innerHTML = '';
  const podiumOrder = [1, 0, 2]; // 2nd, 1st, 3rd
  podiumOrder.forEach(idx => {
    if (!lb[idx]) return;
    const entry = lb[idx];
    const rank = idx + 1;
    const medals = ['🥇','🥈','🥉'];
    const rankClass = ['rank1','rank2','rank3'][rank-1] || '';
    const card = document.createElement('div');
    card.className = `top-card ${rankClass}`;
    card.innerHTML = `
      <div class="rank-badge">${medals[rank-1] || rank}</div>
      <div class="top-name">${entry.name}</div>
      <div class="top-score">${entry.marks} pts</div>
      <div class="top-exam-tag"><span class="exam-badge ${examBadge[entry.exam] || ''}">${examNames[entry.exam] || entry.exam}</span></div>
      <div style="font-size:0.75rem; color:#64748b; margin-top:0.3rem;">${entry.percentage}%</div>
    `;
    top3.appendChild(card);
  });

  // TABLE
  const tbody = document.getElementById('lb-tbody');
  const empty = document.getElementById('lb-empty');
  tbody.innerHTML = '';

  if (lb.length === 0) {
    empty.style.display = 'block';
    document.querySelector('.lb-table-wrap').style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  document.querySelector('.lb-table-wrap').style.display = 'block';

  lb.forEach((entry, i) => {
    const tr = document.createElement('tr');
    const rankIcon = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i+1;
    tr.innerHTML = `
      <td class="rank-col">${rankIcon}</td>
      <td><strong>${entry.name}</strong></td>
      <td><span class="exam-badge ${examBadge[entry.exam] || ''}">${examNames[entry.exam] || entry.exam}</span></td>
      <td class="score-col">${entry.marks}</td>
      <td style="color:#16a34a; font-weight:700;">${entry.correct}</td>
      <td style="color:#dc2626;">${entry.wrong}</td>
      <td>${entry.percentage}%</td>
      <td>${formatTime(entry.time)}</td>
      <td style="color:#64748b; font-size:0.8rem;">${entry.date || '-'}</td>
    `;
    tbody.appendChild(tr);
  });
}

function formatTime(secs) {
  if (!secs) return '-';
  const m = Math.floor(secs/60);
  const s = secs%60;
  return `${m}m ${s}s`;
}

function clearLeaderboard() {
  if (confirm('Kya aap apna leaderboard data clear karna chahte hain?')) {
    localStorage.removeItem('rrb_leaderboard');
    renderLeaderboard();
  }
}

// Initial render
renderLeaderboard();
</script>

</body>
</html>
