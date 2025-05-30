
const questions = [
  { text: "هل تم استقبالكم بطريقة لائقة عند دخولكم إلى المركز؟", options: ["نعم", "لا", "لم يتم الترحيب"] },
  { text: "كيف تقيم تعامل موظف الاستقبال معك؟", options: ["ممتاز", "جيد", "ضعيف"] },
  { text: "هل كانت إجراءات تسجيل البيانات سهلة وسريعة؟", options: ["نعم", "لا", "تحتاج لتحسين"] },
  { text: "كم كانت مدة الانتظار قبل الدخول إلى الطبيب؟", options: ["قصيرة", "متوسطة", "طويلة"] },
  { text: "كيف تقيم نظافة قاعة الانتظار ورائحة المكان؟", options: ["ممتازة", "جيدة", "تحتاج تحسين"] },
  { text: "هل تم سؤالك أثناء فترة الانتظار عما إذا كنت بحاجة إلى أي مساعدة؟", options: ["نعم", "لا", "لم يتم سؤالي"] },
  { text: "عند دخولك إلى العيادة، هل قام الطبيب بالترحيب بك وتعريف نفسه؟", options: ["نعم", "لا", "لم يقدم نفسه"] },
  { text: "هل شرح لك الطبيب تفاصيل الفحص أو العلاج قبل البدء؟", options: ["شرح مفصل", "شرح مختصر", "لم يشرح"] },
  { text: "في حال شعرت بأي ألم أثناء العلاج، هل استجاب الطبيب لذلك بشكل مناسب؟", options: ["نعم", "لا", "لم أشعر بألم"] },
  { text: "هل شعرت أن الطبيب يركز مع حالتك ولم يكن مستعجلاً أثناء الجلسة؟", options: ["نعم", "إلى حد ما", "لا"] },
  { text: "كيف تقيم نظافة وتعقيم الأدوات المستخدمة أثناء العلاج؟", options: ["ممتازة", "جيدة", "تحتاج لتحسين"] },
  { text: "هل كان الطاقم الطبي (التمريض والمساعدون) ملتزمًا بإجراءات الوقاية والنظافة؟", options: ["نعم", "لا", "غير متأكد"] },
  { text: "بعد انتهاء العلاج، هل قام الطبيب أو الطاقم بشرح التعليمات الخاصة بما بعد العلاج؟", options: ["نعم", "لا", "لم أتلقى شرح"] },
  { text: "كيف تقيم تكلفة الخدمة مقارنة بجودة الرعاية التي تلقيتها؟", options: ["مناسبة جدًا", "مناسبة", "مرتفعة"] },
  { text: "هل كانت إجراءات حجز موعد المتابعة أو الاستفسار سهلة وواضحة؟", options: ["نعم", "لا", "لم أحجز موعدًا"] },
  { text: "بناءً على تجربتك، هل توصي الآخرين بزيارة المركز؟", options: ["نعم بالتأكيد", "ربما", "لا"] },
];

let currentQuestion = 0;
const answers = [];

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");

function renderQuestion() {
  const q = questions[currentQuestion];
  let html = `<p>${q.text}</p>`;
  q.options.forEach(option => {
    html += `
          <label>
            <input type="radio" name="answer" value="${option}"> ${option}
          </label><br>`;
  });
  questionContainer.innerHTML = html;
}

nextBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) {
    alert("من فضلك اختر إجابة");
    return;
  }

  answers.push(selected.value);
  currentQuestion++;

  if (currentQuestion < questions.length) {
    renderQuestion();
  } else {
    submitAnswers();
  }
});

function submitAnswers() {
  questionContainer.innerHTML = "<h3>شكرًا لمشاركتك!</h3>";
  nextBtn.style.display = "none";

  const hiddenForm = document.createElement("form");
  hiddenForm.action = "https://formsubmit.co/ayman249arafa@gmail.com";
  hiddenForm.method = "POST";

  answers.forEach((ans, index) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = `السؤال ${index + 1}`;
    input.value = ans;
    hiddenForm.appendChild(input);
  });

  // تعطيل الكابتشا
  const captchaInput = document.createElement("input");
  captchaInput.type = "hidden";
  captchaInput.name = "_captcha";
  captchaInput.value = "false";
  hiddenForm.appendChild(captchaInput);

  // رابط صفحة الشكر
  const nextInput = document.createElement("input");
  nextInput.type = "hidden";
  nextInput.name = "_next";
  nextInput.value = "http://127.0.0.1:5501/home%20page/home.html";
  hiddenForm.appendChild(nextInput);

  document.body.appendChild(hiddenForm);
  hiddenForm.submit();
}

renderQuestion();