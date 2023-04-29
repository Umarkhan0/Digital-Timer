var timerInterval;
function startTimer() {
    let hours = Number(document.getElementById("hours").value);
    let minutes = Number(document.getElementById("minutes").value);
    let seconds = Number(document.getElementById("seconds").value);
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    timerInterval = setInterval(function() {
    
        let hoursRemaining = Math.floor(totalSeconds / 3600);
        let minutesRemaining = Math.floor((totalSeconds - hoursRemaining * 3600) / 60);
        let secondsRemaining = totalSeconds % 60;
        let timerDisplay = hoursRemaining + " Hours, " + minutesRemaining + " Minutes, " + secondsRemaining + " Seconds remaining";
        document.getElementById("timer").innerHTML = timerDisplay;
        totalSeconds--;
       if (totalSeconds < 0) {
        clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "Time's up!";
          }
        }, 1000);
      }

      function resetTimer() {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "";
      }


    