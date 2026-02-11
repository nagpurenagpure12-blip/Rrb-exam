// result.js - Result Calculation and Display
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  // Try to get questions from sessionStorage (set during exam)
  let examResult = null;
  try {
    examResult = JSON.parse(sessionStorage.getItem('examResult'));
  } catch(e) {}

  let questions = [];
  let userAnswers = {};

  if (examResult && examResult.exam === EXAM_TYPE_RESULT) {
    questions = examResult.questions;
    userAnswers = examResult.answers;
  } else {
    // Fallback: generate questions and use PHP-passed answers
    questions = getExamQuestions(EXAM_TYPE_RESULT, TOTAL_Q_RESULT);
    // Convert PHP answers (keys are string indices)
    Object.keys(USER_ANSWERS_PHP).forEach(k => {
      userAnswers[parseInt(k)] = USER_ANSWERS_PHP[k];
    });
  }

  // Calculate score
  let correct = 0, wrong = 0, skipped = 0;
  const resultsPerQ = [];

  questions.forEach((q, i) => {
    const given = userAnswers[i];
    if (given === undefined || given === null) {
      skipped++;
      resultsPerQ.push({ q, given: null, status: 'skipped' });
    } else if (parseInt(given) === q.ans) {
      correct++;
      resultsPerQ.push({ q, given: parseInt(given), status: 'correct' });
    } else {
      wrong++;
      resultsPerQ.push({ q, given: parseInt(given), status: 'wrong' });
    }
  });

  // Marks: +1 correct, -1/3 wrong
  const marks = correct - (wrong / 3);
  const totalMarks = TOTAL_Q_RESULT;
  const percentage = Math.max(0, ((marks / totalMarks) * 100)).toFixed(1);

  // Determine grade
  let grade = '', gradeColor = '';
  if (percentage >= 80) { grade = 'Excellent! 🏆'; gradeColor = '#16a34a'; }
  else if (percentage >= 60) { grade = 'Good! 👍'; gradeColor = '#2563eb'; }
  else if (percentage >= 40) { grade = 'Average 📚'; gradeColor = '#f97316'; }
  else { grade = 'Keep Practicing! 💪'; gradeColor = '#dc2626'; }

  // Update heading
  document.getElementById('result-heading').textContent = `${grade}`;

  // Animate score ring
  const pct = Math.min(100, Math.max(0, parseFloat(percentage)));
  const circumference = 402;
  const offset = circumference - (pct / 100) * circumference;
  const ring = document.getElementById('ring-circle');
  ring.style.transition = 'stroke-dashoffset 1.5s ease';
  ring.style.stroke = EXAM_COLOR;
  setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);
  document.getElementById('score-pct').textContent = `${percentage}%`;

  // Result cards
  const cards = document.getElementById('result-cards');
  cards.innerHTML = `
    <div class="result-stat-card">
      <div class="big score-num">${marks.toFixed(2)}</div>
      <div class="lbl">Marks (out of ${totalMarks})</div>
    </div>
    <div class="result-stat-card">
      <div class="big correct-num">${correct}</div>
      <div class="lbl">✅ Sahi Jawab</div>
    </div>
    <div class="result-stat-card">
      <div class="big wrong-num">${wrong}</div>
      <div class="lbl">❌ Galat Jawab</div>
    </div>
    <div class="result-stat-card">
      <div class="big skipped-num">${skipped}</div>
      <div class="lbl">⏭ Chhoda</div>
    </div>
    <div class="result-stat-card">
      <div class="big" style="color:var(--je)">${formatTime(TIME_TAKEN)}</div>
      <div class="lbl">⏱ Liya Gaya Samay</div>
    </div>
    <div class="result-stat-card">
      <div class="big" style="color:${gradeColor}">${percentage}%</div>
      <div class="lbl">Accuracy</div>
    </div>
  `;

  // Solutions
  const solList = document.getElementById('solutions-list');
  solList.innerHTML = '';
  resultsPerQ.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = `solution-item ${item.status}-ans`;
    const statusIcon = item.status === 'correct' ? '✅' : item.status === 'wrong' ? '❌' : '⏭';
    const yourAns = item.given !== null ? `${String.fromCharCode(65+item.given)}. ${item.q.options[item.given]}` : 'Chhoda (Unattempted)';
    const correctAns = `${String.fromCharCode(65+item.q.ans)}. ${item.q.options[item.q.ans]}`;
    div.innerHTML = `
      <div class="sol-q-num">${statusIcon} Question ${i+1} | Section: ${item.q.section}</div>
      <div class="sol-q-text">${item.q.q}</div>
      <div class="sol-ans-row">
        <span class="${item.status === 'correct' ? 'sol-correct' : 'sol-your'}">Tumhara Jawab: ${yourAns}</span>
        <span class="sol-correct">✅ Sahi Jawab: ${correctAns}</span>
      </div>
    `;
    solList.appendChild(div);
  });

  // Save to leaderboard
  const lbForm = document.getElementById('lbForm');
  lbForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('lb-name').value.trim() || 'Anonymous';
    saveToLeaderboard(name, marks, correct, wrong, skipped, percentage);
  });

  function saveToLeaderboard(name, marks, correct, wrong, skipped, pct) {
    const entry = {
      name,
      exam: EXAM_TYPE_RESULT,
      marks: parseFloat(marks.toFixed(2)),
      correct,
      wrong,
      skipped,
      percentage: parseFloat(pct),
      time: TIME_TAKEN,
      date: new Date().toLocaleDateString('hi-IN')
    };
    // Get existing leaderboard
    let lb = [];
    try { lb = JSON.parse(localStorage.getItem('rrb_leaderboard') || '[]'); } catch(e) {}
    lb.push(entry);
    lb.sort((a, b) => b.marks - a.marks);
    if (lb.length > 200) lb = lb.slice(0, 200);
    localStorage.setItem('rrb_leaderboard', JSON.stringify(lb));

    document.getElementById('lb-msg').style.display = 'block';
    document.getElementById('lbForm').style.display = 'none';
  }
});

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}m ${s}s`;
}
