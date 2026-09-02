const overlay = document.getElementById('accessOverlay');
const siteShell = document.getElementById('siteShell');
const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');
const lockdownButton = document.getElementById('lockdownButton');
const statusPill = document.querySelector('.status-pill');
const lockdownTimer = document.getElementById('lockdownTimer');

const correctPassword = '7709';
const lockdownDurationMs = 10 * 60 * 1000;
let lockdownLockedUntil = 0;
let lockdownTimerInterval = null;

function randomizeFieldValue() {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let randomCode = '';

  for (let i = 0; i < 4; i += 1) {
    randomCode += digits[Math.floor(Math.random() * digits.length)];
  }

  passwordInput.value = randomCode;
}

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function applyLockedState() {
  const remainingMs = Math.max(0, lockdownLockedUntil - Date.now());
  const remainingText = formatTime(remainingMs);

  passwordInput.disabled = true;
  form.querySelector('button').disabled = true;
  errorMessage.textContent = 'LOCKDOWN ACTIVE. ACCESS RESTRICTED.';
  errorMessage.classList.add('visible');
  lockdownTimer.textContent = `LOCKDOWN WINDOW: ${remainingText}`;
  lockdownTimer.classList.add('visible');

  overlay.style.display = 'grid';
  siteShell.classList.remove('visible');
  statusPill.classList.add('locked');
  statusPill.innerHTML = '<span class="dot"></span>LOCKDOWN // ACTIVE';

  if (lockdownButton) {
    lockdownButton.disabled = true;
    lockdownButton.textContent = `LOCKDOWN // ${remainingText}`;
    lockdownButton.style.opacity = '0.6';
    lockdownButton.style.cursor = 'not-allowed';
  }
}

function clearLockedState() {
  passwordInput.disabled = false;
  form.querySelector('button').disabled = false;
  errorMessage.textContent = 'ACCESS DENIED.';
  errorMessage.classList.remove('visible');
  lockdownTimer.textContent = '';
  lockdownTimer.classList.remove('visible');
  statusPill.classList.remove('locked');
  statusPill.innerHTML = '<span class="dot"></span>LOCKDOWN ZONE';

  if (lockdownButton) {
    lockdownButton.disabled = false;
    lockdownButton.textContent = 'LOCKDOWN ACTIVE';
    lockdownButton.style.opacity = '1';
    lockdownButton.style.cursor = 'pointer';
  }
}

function updateLockdownStatus() {
  if (Date.now() < lockdownLockedUntil) {
    applyLockedState();
    return;
  }

  clearLockedState();
}

lockdownButton.addEventListener('click', function () {
  if (Date.now() < lockdownLockedUntil) {
    updateLockdownStatus();
    return;
  }

  lockdownLockedUntil = Date.now() + lockdownDurationMs;
  overlay.style.display = 'grid';
  siteShell.classList.remove('visible');
  updateLockdownStatus();

  if (lockdownTimerInterval) {
    clearInterval(lockdownTimerInterval);
  }

  lockdownTimerInterval = setInterval(function () {
    if (Date.now() >= lockdownLockedUntil) {
      clearInterval(lockdownTimerInterval);
      lockdownTimerInterval = null;
      clearLockedState();
      return;
    }

    updateLockdownStatus();
  }, 1000);
});

passwordInput.addEventListener('focus', function () {
  if (!passwordInput.value) {
    randomizeFieldValue();
  }
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (Date.now() < lockdownLockedUntil) {
    updateLockdownStatus();
    return;
  }

  const entered = passwordInput.value.trim();

  if (entered === correctPassword) {
    overlay.style.display = 'none';
    siteShell.classList.add('visible');
    clearLockedState();
  } else {
    errorMessage.textContent = 'ACCESS DENIED. INVALID AUTHORIZATION CODE.';
    errorMessage.classList.add('visible');
    randomizeFieldValue();
    passwordInput.focus();
  }
});

updateLockdownStatus();
