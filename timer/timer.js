let timerEnabled = false;
let currentTick = 0;
let intervalRef = null;

const timerText = document.getElementById('timer-text');
const toggleButton = document.getElementById('toggle-button');

const onTick = () => {
  currentTick += 1;
  timerText.textContent = `Timer: ${currentTick}`;
}

const handleToggleTimer = () => {
  if (!timerEnabled) {
    toggleButton.textContent = 'Stop Timer'
    intervalRef = setInterval(onTick, 1000);
  } else {
    toggleButton.textContent = 'Start Timer'
    clearInterval(intervalRef);
  }

  timerEnabled = !timerEnabled;
};

toggleButton.addEventListener('click', handleToggleTimer);
