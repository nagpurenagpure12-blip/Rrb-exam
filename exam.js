// exam.js - Exam Engine
// =============================================

let questions = [];
let currentQ = 0;
let answers = {};      // { qIndex: optionIndex }
let markedForReview = new Set();
let timeLeft = TIME_SECONDS;
let timerInterval;
let startTime;

// ============= INIT =============
document.addEventListener('DOMContentLoaded', () => {
  questions = getExamQuestions(EXAM_TYPE, TOTAL_Q);
  buildPalette();
  renderQuestion(0);
  startTimer();
  startTime = Date.now();
});

// ============= TIMER =============
function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 300) { // Last 5 minutes - warning
      document.getElementById('timer').classList.add('warning');
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('⏰ Samay khatam ho gaya! Test automatic submit ho raha hai.');
      doSubmit();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const s = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('timer-display').textContent = `${m}:${s}`;
}

// ============= QUESTION RENDER =============
function renderQuestion(idx) {
  if (idx < 0 || idx >= questions.length) return;
  currentQ = idx;
  const q = questions[idx];

  document.getElementById('q-num-display').textContent = idx + 1;
  document.getElementById('q-section-tag').textContent = q.section;
  document.getElementById('q-text').textContent = q.q;

  const optList = document.getElementById('options-list');
  optList.innerHTML = '';

  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'option-item' + (answers[idx] === i ? ' selected' : '');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = `q_${idx}`;
    radio.value = i;
    radio.id = `opt_${idx}_${i}`;
    radio.checked = answers[idx] === i;
    radio.addEventListener('change', () => selectAnswer(idx, i));

    const label = document.createElement('label');
    label.htmlFor = `opt_${idx}_${i}`;
    label.textContent = `${String.fromCharCode(65+i)}. ${opt}`;

    div.appendChild(radio);
    div.appendChild(label);
    div.addEventListener('click', () => {
      radio.checked = true;
      selectAnswer(idx, i);
    });
    optList.appendChild(div);
  });

  updatePalette();
  updateSidebarStats();
}

function selectAnswer(qIdx, optIdx) {
  answers[qIdx] = optIdx;
  // Update visual
  document.querySelectorAll(`[name="q_${qIdx}"]`).forEach(r => {
    r.closest('.option-item').classList.toggle('selected', r.value == optIdx);
  });
  updatePalette();
  updateSidebarStats();
}

// ============= NAVIGATION =============
function changeQuestion(dir) {
  const next = currentQ + dir;
  if (next >= 0 && next < questions.length) {
    renderQuestion(next);
  }
}

function goToQuestion(idx) {
  renderQuestion(idx);
}

function markForReview() {
  if (markedForReview.has(currentQ)) {
    markedForReview.delete(currentQ);
  } else {
    markedForReview.add(currentQ);
  }
  updatePalette();
  changeQuestion(1); // auto next
}

// ============= PALETTE =============
function buildPalette() {
  const palette = document.getElementById('q-palette');
  palette.innerHTML = '';
  for (let i = 0; i < TOTAL_Q; i++) {
    const dot = document.createElement('div');
    dot.className = 'q-dot';
    dot.textContent = i + 1;
    dot.id = `dot_${i}`;
    dot.onclick = () => goToQuestion(i);
    palette.appendChild(dot);
  }
}

function updatePalette() {
  for (let i = 0; i < TOTAL_Q; i++) {
    const dot = document.getElementById(`dot_${i}`);
    if (!dot) continue;
    dot.className = 'q-dot';
    if (i === currentQ) dot.classList.add('current');
    else if (markedForReview.has(i)) dot.classList.add('marked');
    else if (answers[i] !== undefined) dot.classList.add('answered');
  }
}

// ============= STATS =============
function updateSidebarStats() {
  const answered = Object.keys(answers).length;
  const marked = markedForReview.size;
  const unattempted = TOTAL_Q - answered;
  document.getElementById('s-answered').textContent = answered;
  document.getElementById('s-marked').textContent = marked;
  document.getElementById('s-unattempted').textContent = unattempted;
}

// ============= SUBMIT =============
function submitExam() {
  const answered = Object.keys(answers).length;
  const unattempted = TOTAL_Q - answered;
  document.getElementById('modal-summary').textContent =
    `Aapne ${answered} sawal attempt kiye hain aur ${unattempted} sawal chhode hain. Kya aap submit karna chahte hain?`;
  document.getElementById('submitModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('submitModal').style.display = 'none';
}

function confirmSubmit() { return false; } // prevent default form submit

function doSubmit() {
  clearInterval(timerInterval);
  const timeTaken = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById('time_taken').value = timeTaken;

  // Store questions + answers for result page
  const payload = {
    exam: EXAM_TYPE,
    questions: questions,
    answers: answers,
    markedForReview: [...markedForReview],
    timeTaken: timeTaken,
    totalQ: TOTAL_Q
  };
  sessionStorage.setItem('examResult', JSON.stringify(payload));

  // Submit to server
  document.getElementById('answers_json').value = JSON.stringify(answers);
  document.getElementById('examForm').submit();
}
