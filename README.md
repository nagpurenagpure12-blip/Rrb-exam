# 🚂 RRB Mock Test Website

**Complete RRB Exam Practice Platform - NTPC, Group D, ALP, JE**

---

## 📁 File Structure (Project Layout)

```
rrb-mock-test/
│
├── index.html          ← Home Page (Exam Select)
├── exam.php            ← Exam Page (Questions + Timer)
├── submit.php          ← Form Submission Handler
├── result.php          ← Result & Solutions Page
├── leaderboard.php     ← Live Leaderboard
│
├── css/
│   └── style.css       ← Main Stylesheet (All Pages)
│
└── js/
    ├── questions.js    ← Question Bank (NTPC/GroupD/ALP/JE)
    ├── exam.js         ← Timer + Navigation Logic
    └── result.js       ← Score Calculation + Display
```

---

## ✅ Features

| Feature | Status |
|---|---|
| RRB NTPC Mock Test | ✅ |
| RRB Group D Mock Test | ✅ |
| RRB ALP Mock Test | ✅ |
| RRB JE Mock Test | ✅ |
| Live Countdown Timer | ✅ |
| 1/3 Negative Marking | ✅ |
| Question Navigation Palette | ✅ |
| Mark for Review | ✅ |
| Score & Result Page | ✅ |
| Section-wise Analysis | ✅ |
| Detailed Solutions | ✅ |
| Leaderboard | ✅ |
| Mobile Responsive | ✅ |

---

## 🚀 GitHub Pages Setup (No PHP, Static)

> GitHub Pages **PHP support nahi karta**. Isliye agar sirf GitHub Pages pe lagana ho:

### Option 1: Pure HTML Version (GitHub Pages ke liye)
1. `exam.php` ko `exam.html` banao (PHP tags hata do)
2. `result.php` ko `result.html` banao
3. `leaderboard.php` ko `leaderboard.html` banao
4. GitHub Pages pe push karo

**Ya:** 000webhost, InfinityFree jaise **free PHP hosting** use karo.

---

## 🖥️ Local Setup (XAMPP / WAMP)

### Step 1: XAMPP Install karo
- https://www.apachefriends.org/ se download karo

### Step 2: Files copy karo
```
C:\xampp\htdocs\rrb-mock-test\
```

### Step 3: Start karo
- XAMPP Control Panel → Apache → Start
- Browser mein: `http://localhost/rrb-mock-test/`

---

## 🌐 Free Online Hosting (PHP Support)

### Option: InfinityFree (Free + PHP)
1. https://infinityfree.net/ pe account banao
2. File Manager mein saari files upload karo
3. Live URL milega!

### Option: 000webhost (Free + PHP)
1. https://www.000webhost.com/ pe signup karo
2. Files upload karo

---

## 📝 Aur Questions Kaise Add Karein?

`js/questions.js` file kholo, aur questions array mein add karo:

```javascript
// Format:
{ 
  q: "Sawaal likhein?",  
  options: ["Option A", "Option B", "Option C", "Option D"], 
  ans: 0,    // 0=A, 1=B, 2=C, 3=D (correct answer index)
  section: "Maths"  // ya "Reasoning", "GK/GS", "Science", "Technical"
}
```

---

## 🎨 Exam Colors Customize Karna

`css/style.css` mein top pe:

```css
:root {
  --ntpc:   #2563eb;  /* NTPC ka color */
  --groupd: #16a34a;  /* Group D ka color */
  --alp:    #dc2626;  /* ALP ka color */
  --je:     #7c3aed;  /* JE ka color */
}
```

---

## 📱 Mobile Friendly

Website puri tarah se mobile responsive hai. 
Phones, tablets, computers - sab pe kaam karti hai.

---

## 🔒 Scoring Formula

```
Score = Correct - (Wrong × 1/3)
Percentage = (Score / Total Questions) × 100
```

---

## 📊 Leaderboard

- Browser ke **localStorage** mein save hota hai
- Exam filter (NTPC / Group D / ALP / JE) ka option hai
- Top 3 podium display hota hai
- Clear karne ka option bhi hai

---

## 💡 Future Improvements (Add kar sakte ho)

- [ ] MySQL database leaderboard
- [ ] User login/register
- [ ] Multiple mock test sets
- [ ] Subject-wise practice
- [ ] Previous year papers
- [ ] Hindi + English bilingual questions
- [ ] PDF result download

---

## 📧 Support

Koi problem ho to GitHub Issues section mein likhein.

**Made for RRB Aspirants with ❤️**
