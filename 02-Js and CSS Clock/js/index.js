(function () {
    const secondPoint=document.querySelector('.second-hand')
    const minutePoint=document.querySelector('.minute-hand')
    const hourPoint=document.querySelector('.hour-hand')

    function setTime(){
        // 这是获取现在的时间
        const now =new Date()

        // 获取当前仅有的秒数
        const seconds =now.getSeconds();
        // 在这里是求出秒指针的度数 在这里加90是为了矫正角度，因为在css中一开始的时候加了90度，所以说必须要加90度
        const secondDegrees=((seconds / 60) *360) +90

        const minutes =now.getMinutes()
        const minuteDegrees=((minutes/60)*360)+90

        const hours =now.getHours()
        const hourDegrees=((hours/12)*360)+90

        secondPoint.style.transform =`rotate(${secondDegrees}deg)`
        minutePoint.style.transform = `rotate(${minuteDegrees}deg)`;
        hourPoint.style.transform = `rotate(${hourDegrees}deg)`;

        
    }

    setInterval(setTime, 1000);
  }());

//   这种写法是立即执行函数  这是其中的一种调用方式，也可以用另外的一种写法，就是括号写在外面的这种形式  (function(){})()
