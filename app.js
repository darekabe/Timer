

class Timer{
  constructor(startValue, startBtn, stopBtn, callbacks){
    this.startValue = startValue;
    this.startBtn = startBtn;
    this.stopBtn = stopBtn;
    this.startBtn.addEventListener('click', this.start);
    this.stopBtn.addEventListener('click', this.stop);
    if (callbacks){
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;

    }
  }
  
  start=()=>{
    if(this.onStart){
      this.onStart(this.timeLeft);
    }
  this.tick();
   this.interval = setInterval(this.tick,10)
  };
  
  stop=()=>{
    clearInterval(this.interval);
  };
  
  onDurationChange=()=>{

  };
  
  tick=()=>{

    const timeLeft = this.timeLeft;
    if(timeLeft>0){
      this.timeLeft = timeLeft-0.01;
      if(this.onTick){
        this.onTick(this.timeLeft);
      }
    }else{
      clearInterval(this.interval);
      if(this.onComplete){
        this.onComplete();
      }
    }
   
  };
  get timeLeft(){
    return parseFloat(this.startValue.value);
  }
  set timeLeft(time){
    this.startValue.value = time.toFixed(2);
  }
}
if(this.onStart){
  this.onStart();
}


const startValue = document.querySelector('#timer');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const circle = document.querySelector('circle');
const application = document.querySelector('.timer');
const perimeter = circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);
let duration;

const Test = new Timer(startValue, startBtn, stopBtn,{
    onStart(totalDuration){
      application.style.backgroundColor = 'rgb(46, 46, 46,0.8)';
      startValue.style.backgroundColor = 'red';
      duration = totalDuration;
  },onTick(timeLeft){
    circle.setAttribute('stroke-dashoffset', perimeter*timeLeft/duration-perimeter);
    
  },onComplete(){
    application.style.backgroundColor = 'green';
    startValue.style.backgroundColor = 'blue';
    startValue.value = 'DONE';
  }
});
