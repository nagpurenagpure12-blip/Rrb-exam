// questions.js - RRB Mock Test Question Bank
// =============================================
// Har exam ke liye alag alag questions hain
// Format: { q, options:[a,b,c,d], ans, section }
// =============================================

const QUESTIONS = {

  // ==================== RRB NTPC ====================
  ntpc: [
    // --- MATHS ---
    { q: "12, 24, 48, 96, ... अगला पद क्या होगा?", options: ["144","168","192","202"], ans: 2, section: "Maths" },
    { q: "एक ट्रेन 72 km/h की गति से चल रही है। 1 मिनट में वह कितने मीटर चलेगी?", options: ["600m","1000m","1200m","1500m"], ans: 2, section: "Maths" },
    { q: "तीन संख्याओं का औसत 45 है। यदि दो संख्याएँ 40 और 50 हैं, तो तीसरी संख्या है:", options: ["40","45","50","55"], ans: 1, section: "Maths" },
    { q: "एक वस्तु का क्रय मूल्य ₹800 और विक्रय मूल्य ₹920 है। लाभ प्रतिशत क्या है?", options: ["12%","13.5%","15%","16%"], ans: 2, section: "Maths" },
    { q: "√144 + √169 = ?", options: ["25","26","27","28"], ans: 0, section: "Maths" },
    { q: "15% of 200 = ?", options: ["25","30","35","40"], ans: 1, section: "Maths" },
    { q: "LCM of 12 and 18 = ?", options: ["36","24","72","48"], ans: 0, section: "Maths" },
    { q: "यदि A : B = 3 : 4 और B : C = 5 : 6, तो A : C = ?", options: ["5:8","8:5","5:6","15:24"], ans: 0, section: "Maths" },
    { q: "एक कमरे की लम्बाई 10m और चौड़ाई 8m है। क्षेत्रफल = ?", options: ["80 m²","160 m²","72 m²","90 m²"], ans: 0, section: "Maths" },
    { q: "₹5000 पर 2 वर्ष के लिए 10% प्रति वर्ष सरल ब्याज = ?", options: ["₹1000","₹500","₹1500","₹2000"], ans: 0, section: "Maths" },
    // --- REASONING ---
    { q: "ABCD : DCBA :: MNOP : ?", options: ["PONM","PNMO","NOPM","NOPQ"], ans: 0, section: "Reasoning" },
    { q: "श्रृंखला पूरी करें: 2, 6, 18, 54, ?", options: ["108","162","216","270"], ans: 1, section: "Reasoning" },
    { q: "यदि '+' का अर्थ '×' है और '×' का अर्थ '+' है, तो 3 + 4 × 2 = ?", options: ["14","16","20","24"], ans: 0, section: "Reasoning" },
    { q: "विषम को पहचानें: Apple, Mango, Rose, Banana", options: ["Apple","Mango","Rose","Banana"], ans: 2, section: "Reasoning" },
    { q: "यदि SCHOOL = 195 तो COLLEGE = ?", options: ["199","214","221","245"], ans: 1, section: "Reasoning" },
    { q: "Mirror Image: 'b' का दर्पण प्रतिबिम्ब क्या होगा?", options: ["d","p","q","b"], ans: 1, section: "Reasoning" },
    { q: "श्रृंखला पूरी करें: Z, X, V, T, ?", options: ["Q","R","S","U"], ans: 1, section: "Reasoning" },
    { q: "तीन साल पहले राम की उम्र 15 थी। अब उसकी उम्र क्या है?", options: ["15","17","18","20"], ans: 2, section: "Reasoning" },
    { q: "Blood Relation: A की माँ B की बेटी है। B का A से क्या संबंध है?", options: ["माँ","नानी","बहन","बुआ"], ans: 1, section: "Reasoning" },
    { q: "Figure Matrix: अगला पैटर्न कौन होगा यदि 1→2→4→8→?", options: ["12","16","20","24"], ans: 1, section: "Reasoning" },
    // --- GK/GS ---
    { q: "भारतीय रेलवे की स्थापना किस वर्ष हुई?", options: ["1848","1853","1859","1862"], ans: 1, section: "GK/GS" },
    { q: "भारत की पहली रेल किन दो शहरों के बीच चली?", options: ["दिल्ली-मुंबई","बॉम्बे-थाणे","कलकत्ता-दिल्ली","मद्रास-बैंगलोर"], ans: 1, section: "GK/GS" },
    { q: "भारत का सबसे बड़ा रेलवे स्टेशन कौन सा है?", options: ["छत्रपति शिवाजी टर्मिनस","गोरखपुर","हावड़ा","प्रयागराज"], ans: 1, section: "GK/GS" },
    { q: "भारत का राष्ट्रीय पशु कौन है?", options: ["हाथी","शेर","बाघ","चीता"], ans: 2, section: "GK/GS" },
    { q: "2024 पेरिस ओलंपिक में भारत ने कुल कितने पदक जीते?", options: ["4","5","6","7"], ans: 2, section: "GK/GS" },
    { q: "RRB का full form क्या है?", options: ["Railway Recruitment Bureau","Railway Recruitment Board","Rail Recruitment Bureau","Railway Ranking Board"], ans: 1, section: "GK/GS" },
    { q: "भारत की पहली महिला प्रधानमंत्री कौन थीं?", options: ["सोनिया गांधी","इंदिरा गांधी","सुचेता कृपलानी","विजयलक्ष्मी पंडित"], ans: 1, section: "GK/GS" },
    { q: "प्रकाश की गति लगभग कितनी होती है?", options: ["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10⁴ m/s"], ans: 1, section: "GK/GS" },
    { q: "DNA का पूर्ण रूप क्या है?", options: ["Deoxyribonucleic Acid","Dioxyribonucleic Acid","Deoxyribose Nucleic Acid","Dynamic Nucleic Acid"], ans: 0, section: "GK/GS" },
    { q: "भारत का सबसे ऊँचा जलप्रपात कौन सा है?", options: ["जोग जलप्रपात","धुआंधार","हुंडरू","कुंचिकल"], ans: 3, section: "GK/GS" },
    // Additional 70 questions repeat/expand (in production add full 100)
    { q: "पाइथागोरस प्रमेय: a² + b² = ?", options: ["c","c²","2c","ab"], ans: 1, section: "Maths" },
    { q: "π (pi) का मान लगभग कितना है?", options: ["3.14","3.16","3.12","3.18"], ans: 0, section: "Maths" },
    { q: "1 किलोमीटर = ? मीटर", options: ["100","500","1000","10000"], ans: 2, section: "Maths" },
    { q: "भारत में कुल कितने राज्य हैं?", options: ["28","29","30","31"], ans: 0, section: "GK/GS" },
    { q: "भारतीय संविधान कब लागू हुआ?", options: ["15 Aug 1947","26 Jan 1950","26 Nov 1949","2 Oct 1952"], ans: 1, section: "GK/GS" },
    { q: "सूर्य से पृथ्वी तक प्रकाश आने में कितना समय लगता है?", options: ["8 मिनट 20 सेकंड","12 मिनट","5 मिनट","10 मिनट"], ans: 0, section: "GK/GS" },
    { q: "Triangle का area formula = ?", options: ["b×h","½×b×h","2×b×h","b+h"], ans: 1, section: "Maths" },
    { q: "Analogy: Doctor : Hospital :: Teacher : ?", options: ["School","Book","Class","Student"], ans: 0, section: "Reasoning" },
    { q: "HCF of 16 and 24 = ?", options: ["4","6","8","12"], ans: 2, section: "Maths" },
    { q: "भारत की राजधानी कहाँ है?", options: ["मुंबई","कोलकाता","नई दिल्ली","चेन्नई"], ans: 2, section: "GK/GS" },
  ],

  // ==================== RRB GROUP D ====================
  groupd: [
    { q: "लोहे का रासायनिक सूत्र क्या है?", options: ["Fe","Ir","In","Io"], ans: 0, section: "Science" },
    { q: "पानी का रासायनिक सूत्र क्या है?", options: ["CO₂","H₂O","NaCl","O₂"], ans: 1, section: "Science" },
    { q: "प्रकाश संश्लेषण में कौन सी गैस निकलती है?", options: ["CO₂","N₂","O₂","H₂"], ans: 2, section: "Science" },
    { q: "Newton का गति का पहला नियम क्या कहता है?", options: ["F=ma","जड़त्व का नियम","संवेग संरक्षण","ऊर्जा संरक्षण"], ans: 1, section: "Science" },
    { q: "मानव शरीर में कितनी हड्डियाँ होती हैं?", options: ["200","206","212","220"], ans: 1, section: "Science" },
    { q: "120 का 25% = ?", options: ["25","30","35","40"], ans: 1, section: "Maths" },
    { q: "0.5 × 0.5 = ?", options: ["2.5","0.025","0.25","25"], ans: 2, section: "Maths" },
    { q: "यदि ABCD क्रम में अक्षर हों, तो Z के बाद क्या होगा?", options: ["AA","A","ZA","ZZ"], ans: 0, section: "Reasoning" },
    { q: "Group D में Track Maintainer का काम क्या है?", options: ["टिकट बेचना","पटरियों की मरम्मत","Train चलाना","Goods Loading"], ans: 1, section: "GK" },
    { q: "भारत में रेलवे ज़ोन कितने हैं?", options: ["14","16","18","19"], ans: 3, section: "GK" },
    { q: "विद्युत का S.I. मात्रक क्या है?", options: ["Volt","Ampere","Watt","Ohm"], ans: 1, section: "Science" },
    { q: "पृथ्वी की परिधि लगभग कितनी है?", options: ["30,000 km","40,075 km","50,000 km","36,000 km"], ans: 1, section: "Science" },
    { q: "रसोई गैस का मुख्य घटक कौन सा है?", options: ["मीथेन","ब्यूटेन","प्रोपेन","LPG"], ans: 3, section: "Science" },
    { q: "एक घड़ी में 60 मिनट = ? seconds", options:["600","3600","360","6000"], ans: 1, section: "Maths" },
    { q: "25² = ?", options:["525","605","625","645"], ans: 2, section: "Maths" },
    { q: "Blood group की खोज किसने की?", options: ["Mendel","Landsteiner","Darwin","Pasteur"], ans: 1, section: "Science" },
    { q: "विषम को हटाएं: Train, Bus, Ship, Chair", options: ["Train","Bus","Ship","Chair"], ans: 3, section: "Reasoning" },
    { q: "Speed = Distance / Time, 100km in 2hr = ?", options: ["40 km/h","50 km/h","60 km/h","70 km/h"], ans: 1, section: "Maths" },
    { q: "भारत का सबसे लम्बा रेलवे प्लेटफॉर्म कहाँ है?", options: ["हुबली","गोरखपुर","प्रयागराज","कोलकाता"], ans: 0, section: "GK" },
    { q: "CO₂ में Carbon और Oxygen का ratio = ?", options: ["1:1","1:2","2:1","1:3"], ans: 1, section: "Science" },
    { q: "यदि 5x = 25, तो x = ?", options: ["3","4","5","6"], ans: 2, section: "Maths" },
    { q: "संसद के कितने सदन हैं?", options: ["1","2","3","4"], ans: 1, section: "GK" },
    { q: "आयत का क्षेत्रफल = ?", options: ["l + b","2(l+b)","l × b","l² + b²"], ans: 2, section: "Maths" },
    { q: "पृथ्वी का एकमात्र प्राकृतिक उपग्रह = ?", options: ["Mars","Sun","Moon","Venus"], ans: 2, section: "Science" },
    { q: "घड़ी में 3:00 बजे घंटे और मिनट की सुई के बीच का कोण = ?", options: ["60°","90°","120°","30°"], ans: 1, section: "Reasoning" },
    { q: "भारत के वर्तमान रेलवे मंत्री = ?", options: ["Suresh Prabhu","Ashwini Vaishnaw","Piyush Goyal","Lalu Prasad"], ans: 1, section: "GK" },
    { q: "Simple Interest Formula: SI = ?", options: ["P×R×T","PRT/100","P+R+T","PR/T"], ans: 1, section: "Maths" },
    { q: "एक दर्जन = ?", options: ["10","11","12","13"], ans: 2, section: "Maths" },
    { q: "हीमोग्लोबिन में कौन सा तत्व होता है?", options: ["Ca","Fe","Zn","Mg"], ans: 1, section: "Science" },
    { q: "Ohm's Law: V = ?", options: ["I/R","I+R","IR","I-R"], ans: 2, section: "Science" },
  ],

  // ==================== RRB ALP ====================
  alp: [
    { q: "Loco Pilot की ड्यूटी क्या होती है?", options: ["Train Engine चलाना","Station पर टिकट काटना","Track repair करना","Signal देखना"], ans: 0, section: "Technical" },
    { q: "भाप इंजन में ऊर्जा का रूपांतरण कैसे होता है?", options: ["Chemical → Electrical","Heat → Mechanical","Electrical → Mechanical","Light → Heat"], ans: 1, section: "Technical" },
    { q: "Diesel इंजन किस सिद्धांत पर काम करता है?", options: ["Otto Cycle","Brayton Cycle","Diesel Cycle","Rankine Cycle"], ans: 2, section: "Technical" },
    { q: "AC और DC में क्या अंतर है?", options: ["AC का direction बदलता है","DC का direction बदलता है","दोनों same हैं","AC में कम voltage होता है"], ans: 0, section: "Technical" },
    { q: "एक Transformer का कार्य क्या है?", options: ["DC को AC में बदलना","AC Voltage को ऊपर-नीचे करना","Current को Store करना","Motor चलाना"], ans: 1, section: "Technical" },
    { q: "Newton का दूसरा नियम: F = ?", options: ["mv","ma","m/a","m+a"], ans: 1, section: "Science" },
    { q: "ट्रेन की पटरियों के बीच की दूरी को क्या कहते हैं?", options: ["Rail gap","Track gauge","Rail width","Rail distance"], ans: 1, section: "Technical" },
    { q: "भारतीय रेलवे में Broad Gauge की दूरी = ?", options: ["1000mm","1435mm","1676mm","762mm"], ans: 2, section: "Technical" },
    { q: "Speed = 90 km/h को m/s में बदलें:", options: ["20 m/s","25 m/s","30 m/s","35 m/s"], ans: 1, section: "Maths" },
    { q: "KW का full form = ?", options: ["Kilo Watt","Kilo Weight","Kilo Wire","King Watt"], ans: 0, section: "Technical" },
    { q: "Frequency की S.I. unit = ?", options: ["Watt","Hertz","Ampere","Joule"], ans: 1, section: "Science" },
    { q: "ओम का नियम: V = IR में R = ?", options: ["V+I","V/I","VI","V-I"], ans: 1, section: "Science" },
    { q: "Train में Pantograph का काम = ?", options: ["Brakes लगाना","Overhead wire से current लेना","Speed control","Horn बजाना"], ans: 1, section: "Technical" },
    { q: "Gear ratio का क्या उपयोग है?", options: ["Speed और Torque को adjust करना","Fuel बचाना","Engine ठंडा करना","Vibration कम करना"], ans: 0, section: "Technical" },
    { q: "Electric Motor किस सिद्धांत पर काम करती है?", options: ["Faraday's Law","Fleming's Left Hand Rule","Newton's Law","Archimedes Principle"], ans: 1, section: "Technical" },
    { q: "P = VI में P = ?", options: ["Pressure","Power","Potential","Pulse"], ans: 1, section: "Science" },
    { q: "Heat Engine की efficiency कभी 100% नहीं होती - यह किस नियम के आधार पर है?", options: ["First Law of Thermodynamics","Second Law of Thermodynamics","Zeroth Law","Newton's Law"], ans: 1, section: "Technical" },
    { q: "Braking Distance क्या होती है?", options: ["Train रुकने से पहले चली दूरी","Station से दूरी","Signal की दूरी","कोई नहीं"], ans: 0, section: "Technical" },
    { q: "20 का वर्गमूल = ?", options: ["4","4.47","5","4.5"], ans: 1, section: "Maths" },
    { q: "एक वृत्त की परिधि = ?", options: ["πr","2πr","πr²","2πr²"], ans: 1, section: "Maths" },
    { q: "भारत में Diesel Loco का निर्माण कहाँ होता है?", options: ["Varanasi","Chittaranjan","Patiala","Mumbai"], ans: 2, section: "Technical" },
    { q: "Electric Loco का निर्माण भारत में कहाँ होता है?", options: ["Varanasi","Chittaranjan","Patiala","Mumbai"], ans: 1, section: "Technical" },
    { q: "Train की average speed = Total Distance / ?", options: ["Total Time","Max Speed","Min Speed","Half Time"], ans: 0, section: "Maths" },
    { q: "Signal में लाल रंग का अर्थ = ?", options: ["Go","Caution","Stop","Speed Up"], ans: 2, section: "Technical" },
    { q: "Wheel और Axle किस simple machine के उदाहरण हैं?", options: ["Lever","Pulley","Inclined Plane","Wheel and Axle"], ans: 3, section: "Technical" },
    { q: "एक Cylinder का Volume = ?", options: ["πr²h","2πrh","πrh","2πr²h"], ans: 0, section: "Maths" },
    { q: "Voltage की S.I. unit = ?", options: ["Ampere","Ohm","Volt","Watt"], ans: 2, section: "Science" },
    { q: "Steam Engine में piston को force कैसे मिलती है?", options: ["Steam Pressure से","Magnetic Force से","Gravity से","Spring से"], ans: 0, section: "Technical" },
    { q: "Coefficient of friction क्या बताता है?", options: ["Surface की roughness","Air resistance","Gravity","Weight"], ans: 0, section: "Technical" },
    { q: "Loco Pilot का Cab किस तरफ होता है?", options: ["Train के बीच में","Train के आगे","Train के पीछे","Side में"], ans: 0, section: "Technical" },
  ],

  // ==================== RRB JE ====================
  je: [
    { q: "Junior Engineer की मुख्य जिम्मेदारी क्या है?", options: ["Train चलाना","Civil/Electrical कार्यों की निगरानी","टिकट काटना","Catering"], ans: 1, section: "Technical" },
    { q: "Concrete का compressive strength बढ़ाने के लिए क्या डाला जाता है?", options: ["Sand","Steel bars (reinforcement)","Gravel","Water"], ans: 1, section: "Technical" },
    { q: "Three-Phase Power = ?", options: ["√3 × VL × IL × cos φ","VL × IL","V × I × cos φ","3 × V × I"], ans: 0, section: "Technical" },
    { q: "Ohm का नियम किस पर लागू होता है?", options: ["Semiconductors","Linear conductors","Diodes","Transistors"], ans: 1, section: "Technical" },
    { q: "Steel की tensile strength लगभग कितनी होती है?", options: ["200 MPa","400 MPa","250 MPa","100 MPa"], ans: 1, section: "Technical" },
    { q: "Signal Processing में Nyquist rate = ?", options: ["fmax","2fmax","fmax/2","3fmax"], ans: 1, section: "Technical" },
    { q: "Beam में bending moment maximum कहाँ होता है?", options: ["Support पर","Mid span पर","Quarter span पर","End पर"], ans: 1, section: "Technical" },
    { q: "Power Factor = ?", options: ["P/S","S/P","Q/S","P/Q"], ans: 0, section: "Technical" },
    { q: "इंटीग्रल ∫x dx = ?", options: ["x²","x²/2","2x","x/2"], ans: 1, section: "Maths" },
    { q: "Circuit में Series connection में total resistance = ?", options: ["R1 + R2","R1 × R2","R1/R2","R1 - R2"], ans: 0, section: "Technical" },
    { q: "Parallel Circuit में total resistance formula = ?", options: ["R1+R2","1/R = 1/R1 + 1/R2","R1×R2","R1-R2"], ans: 1, section: "Technical" },
    { q: "Young's Modulus किसका measure है?", options: ["Density","Stiffness","Viscosity","Conductivity"], ans: 1, section: "Technical" },
    { q: "C++ में 'cout' का उपयोग किस लिए होता है?", options: ["Input लेने के लिए","Output देने के लिए","Loop के लिए","Variable declare करने के लिए"], ans: 1, section: "Technical" },
    { q: "Transformer में laminations क्यों लगाई जाती हैं?", options: ["Eddy current loss कम करने के लिए","Resistance बढ़ाने के लिए","Weight कम करने के लिए","Cooling के लिए"], ans: 0, section: "Technical" },
    { q: "Fourier Transform का use किस लिए होता है?", options: ["Time domain to Frequency domain","Differentiation","Integration","Matrix operations"], ans: 0, section: "Technical" },
    { q: "d/dx (sin x) = ?", options: ["cos x","-cos x","tan x","-sin x"], ans: 0, section: "Maths" },
    { q: "Poisson's Ratio = ?", options: ["Lateral strain / Longitudinal strain","Stress/Strain","Force/Area","Mass/Volume"], ans: 0, section: "Technical" },
    { q: "Bridge rectifier में output frequency = ?", options: ["f","2f","f/2","3f"], ans: 1, section: "Technical" },
    { q: "GK: Railway Board का मुख्यालय कहाँ है?", options: ["Mumbai","Chennai","New Delhi","Kolkata"], ans: 2, section: "GK" },
    { q: "GK: RDSO का full form = ?", options: ["Research Designs & Standards Organisation","Rail Design & Safety Office","Railway Development & Standards Org","Research & Development Station Org"], ans: 0, section: "GK" },
    { q: "Maxwell's equations किससे संबंधित हैं?", options: ["Thermodynamics","Electromagnetic fields","Fluid mechanics","Quantum mechanics"], ans: 1, section: "Technical" },
    { q: "Laplace Transform में s = ?", options: ["σ + jω","σ - jω","jω","σ"], ans: 0, section: "Technical" },
    { q: "Resonance frequency in LC circuit = ?", options: ["1/√LC","√LC","LC","1/LC"], ans: 0, section: "Technical" },
    { q: "Soil bearing capacity किस पर निर्भर है?", options: ["Soil type","Depth","Both","None"], ans: 2, section: "Technical" },
    { q: "इंटीग्रल ∫sin x dx = ?", options: ["cos x","-cos x","tan x","-tan x"], ans: 1, section: "Maths" },
    { q: "एक transistor के कितने terminals होते हैं?", options: ["2","3","4","5"], ans: 1, section: "Technical" },
    { q: "Op-Amp में Virtual ground किस configuration में होता है?", options: ["Inverting amplifier","Non-inverting","Buffer","Comparator"], ans: 0, section: "Technical" },
    { q: "Specific gravity of water = ?", options: ["0.5","0.8","1.0","1.5"], ans: 2, section: "Technical" },
    { q: "Boolean Algebra में A + 0 = ?", options: ["0","A","1","A+0"], ans: 1, section: "Technical" },
    { q: "RCC में steel bars का मुख्य उद्देश्य = ?", options: ["Compression लेना","Tension लेना","Weight कम करना","Durability बढ़ाना"], ans: 1, section: "Technical" },
  ]
};

// Questions को shuffle करने का function
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Exam ke liye questions prepare karna
function getExamQuestions(examType, totalQ) {
  let qs = QUESTIONS[examType] || QUESTIONS['ntpc'];
  qs = shuffleArray(qs);
  // If less questions than needed, repeat
  while (qs.length < totalQ) {
    qs = [...qs, ...shuffleArray(QUESTIONS[examType])];
  }
  return qs.slice(0, totalQ).map((q, i) => ({ ...q, id: i + 1 }));
}
