function startTimer(timeInSec, timeout) {
    console.log('Timer started!');
    let counter = timeInSec;
  
    function displayTime() {
      if (counter >= 0) {
        console.log(counter);
        counter--;
        setTimeout(displayTime, 1000);
      } else {
        console.log('Timer expired!');
      }
    }
  
    setTimeout(displayTime, timeout);
  }
  
  startTimer(10, 5000);
  