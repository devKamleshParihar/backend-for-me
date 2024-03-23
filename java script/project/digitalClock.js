let clock = document.querySelector('#clock')
    setInterval(function(){
      let date = new Date()
      clock.innerHTML=date.toLocaleTimeString('en-In')
    },1000)