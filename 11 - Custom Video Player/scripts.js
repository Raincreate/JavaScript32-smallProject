const player=document.querySelector('.player')
const audio=player.querySelector('.viewer')

const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle=player.querySelector('.toggle')
const dataSkip=player.querySelectorAll('[data-skip]')
const changeSpeed=player.querySelectorAll('.player__slider')

// 控制暂停的函数
function toggleFun(){
    const method=audio.paused ? 'play':'pause'
    audio[method]()
}

// 控制暂停播放的时候的用户看到的样式
function updateButton(){
    const icon=audio.paused? '►' : '❚ ❚';
    toggle.textContent=icon
}

// 实现快进时间或者倒退时间的设置
function skipTime(){
    // console.log('a');
    audio.currentTime+=parseFloat(this.dataset.skip)
}

// 改变声音以及播放速度的函数
function speedChange(){
    // console.log('a');
    audio[this.name]=this.value
}

// 进度条显示的函数
function audioSpeed(){
    const curTime=(audio.currentTime/audio.duration)*100
    progressBar.style.flexBasis=`${curTime}%`
}

// 鼠标改变进度条函数
function screb(e){
    const cur=(e.offsetX/progress.offsetWidth)*audio.duration
    audio.currentTime=cur
}
// 绑定函数 完成暂停开始的功能 audio是点击屏幕的时候可以出现内容 而toggle绑定的是那个播放按钮
audio.addEventListener('click',toggleFun)
audio.addEventListener('play',updateButton)
audio.addEventListener('pause',updateButton)
audio.addEventListener('timeupdate',audioSpeed)

toggle.addEventListener('click',toggleFun)
dataSkip.forEach(e=>{e.addEventListener('click',skipTime)})

changeSpeed.forEach(item=>item.addEventListener('change',speedChange))
changeSpeed.forEach(item=>{item.addEventListener('mousemove',speedChange)})

// 绑定监听 鼠标点击进度条，进度条改变
progress.addEventListener('click',screb)
let mouseDowm=false
progress.addEventListener('mousedown',()=> mouseDowm=true)
progress.addEventListener('mouseup',()=>mouseDowm=false)
progress.addEventListener('mousemove',(e)=>mouseDowm &&screb(e))
