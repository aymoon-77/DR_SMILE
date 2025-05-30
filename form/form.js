//phone number 

const phoneInput = document.getElementById("phoneNumber");
const errorMsg = document.getElementById("phoneError");

phoneInput.addEventListener("input", () => {
  const phone = phoneInput.value.trim();

  if (phone.length === 0) {
    errorMsg.textContent = "";
    phoneInput.setCustomValidity("");
    return;
  }

  if (!/^(010|011|012|015)\d{8}$/.test(phone)) {
    errorMsg.textContent = "رقم الهاتف يجب أن يتكون من 11 رقمًا ويبدأ بـ 010- 011- 012- 015";
    phoneInput.setCustomValidity("Invalid");
  } else {
    errorMsg.textContent = "";
    phoneInput.setCustomValidity("");
  }
});

// person age control

const dobInput = document.getElementById('dob');
const errorMessage = document.getElementById('error-message');

dobInput.addEventListener('input', function () {
  const dobValue = dobInput.value;

  if (!dobValue) {
    errorMessage.style.display = 'none';
    return;
  }

  const dob = new Date(dobValue);
  const today = new Date();

  const ageInMilliseconds = today - dob;
  const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

  if (ageInYears < 3) {
    errorMessage.style.display = 'inline';
  } else {
    errorMessage.style.display = 'none';
  }
});

//   email
function isValidEmail(email) {
  const basicEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!basicEmailRegex.test(email)) return false;

  const [local, domain] = email.split('@');
  if (!local || !domain) return false;
  if (local.length > 64) return false;
  if (local.startsWith('.') || local.endsWith('.')) return false;
  if (local.includes('..')) return false;
  if (domain.length > 255) return false;
  if (domain.startsWith('-') || domain.endsWith('-')) return false;
  if (domain.startsWith('.') || domain.endsWith('.')) return false;
  if (domain.includes('..')) return false;
  if (!domain.includes('.')) return false;

  const invalidChars = /[()<>[\]\\,;:\s"]/;
  if (invalidChars.test(email)) return false;

  return true;
}

const emailInput = document.getElementById("email");
const resultDiv = document.getElementById("result");

emailInput.addEventListener("input", function () {
  const email = emailInput.value;

  if (email === "") {
    resultDiv.textContent = "";
    resultDiv.className = "";
    return;
  }

  if (isValidEmail(email)) {
    resultDiv.textContent = "✅ البريد الإلكتروني صحيح";
    resultDiv.className = "valid";
  } else {
    resultDiv.textContent = "❌ البريد الإلكتروني غير صحيح";
    resultDiv.className = "invalid";
  }
});