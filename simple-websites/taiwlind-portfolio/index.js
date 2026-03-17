
    function updateClock() {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      const timeStr = `[${hours}:${minutes} ${ampm}]`;
      document.getElementById('clock').textContent = timeStr;
    }
    setInterval(updateClock, 1000);
    updateClock();
