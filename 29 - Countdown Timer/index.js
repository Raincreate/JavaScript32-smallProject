const displayTime=document.querySelector('.display__time-left')
const displayEndTime=document.querySelector('.display__end-time')
const timeArr=document.querySelectorAll('[data-time]')
let countdown;

// 时间函数倒计时
function timer(seconds){
    // 防止出现多个计时的情况
    clearInterval(countdown)
    const now =Date.now()
    const then =now+seconds*1000;
    showTimeLeft(seconds);
    // 传递then的原因是知道结束的时间是什么时候
    showTimeEnd(then);
    countdown=setInterval(()=>{
        // 这个地方一定是要四舍五入，不然的话会出现bug
        const secondsLeft=Math.round((then - Date.now())/1000);
        if(secondsLeft <0){
            clearInterval(countdown)
            return
        }
        showTimeLeft(secondsLeft)
    },1000)
}

// 这里计算时间，将时间放在相应的位置
function showTimeLeft(seconds){
    const min=Math.floor(seconds/60);
    const sec=seconds%60;
    const display =`${min}:${sec <10 ? '0':''}${sec}`
    // 在页面导航的时间倒计时
    document.title =display
    displayTime.textContent=display
    // console.log(display);
}

// 这个是显示倒计时之后 下面的那个信息
function showTimeEnd(timeStr){
    const timeEnd=new Date(timeStr);
    const hours=timeEnd.getHours();
    const minutes=timeEnd.getMinutes();
    const showTime=`${hours}:${minutes <10 ?'0':''}${minutes}停止`
    console.log(showTime);
    displayEndTime.textContent=showTime
}

// 这个是页面头部显示的时间，功能可以使时间变化
function clickTime(){
    timer(this.dataset.time)
}

timeArr.forEach((item)=>item.addEventListener('click',clickTime))

// 这是最后的自定义时间的表单，可以输入想要的时间
document.customForm.addEventListener('submit',function(e){
    // 因为input表单会自动提交刷新，所以需要组织他的提交
    e.preventDefault();
    const mins=this.minutes.value;
    // 将你输入的时间渲染到函数上，这样就能够实现功能
    timer(mins*60)
})