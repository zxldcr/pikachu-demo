!function(){
    var duration = 50
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')  //attr方法设置或返回被选元素的属性值。
        console.log(speed)
        $button.addClass('active')
            .siblings('.active').removeClass('active')
            switch(speed){
                case 'slow':
                    duration = 100
                    break
                case 'normal':
                    duration = 50
                    break
                case 'fast':
                    duration = 10
                    break
    
            }
    })
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run(){
            n+=1
            container.innerHTML = code.substring(0,n)
            styleTag. innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                setTimeout(run,duration)
                
            }else{
                fn&&fn.call()
            }
        },20)
    }

    let code = `
/*
首先准备皮卡丘的皮肤
*/
.preview{
  height: 50vh;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FEE433;
}
.wrapper{
  width: 100%;
  height: 180px;

  position: relative;
}
/*
接下来准备皮卡丘的鼻子
*/
.nose{
  width: 0px;
  height: 0px;
  border:11px solid;
  border-color: black transparent transparent;
  border-radius: 11px; 
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -11px;
}
/*
接下来准备皮卡丘的眼睛
*/
.eye{
  width: 49px;
  height: 49px;
  background: #2F2E2E;
  position: absolute;   
  border-radius: 50%;
  border: 2px solid black
}
.eye::before{
  content: '';
  display: block;
  height: 24px;
  width: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 5px;
  border: 2px solid #000000;
  
}
.eye.left{
  right: 50%;
  margin-right: 90px;
}
.eye.right{
  left: 50%;
  margin-left: 90px;
}
/*
接下来准备皮卡丘的脸
*/
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
}
.face.left{
  right: 50%;
  margin-right: 116px;
  top: 85px;
}
 .face.right{
  left: 50%;
  margin-left: 116px;
  top: 85px;
}
/*
接下来准备皮卡丘的上嘴唇
*/
.upperLip{
  height: 20px;
  width: 80px;
  border: 3px solid black;
  position: absolute;
  background: #FEE433;
}
.upperLip.left{
  border-bottom-left-radius: 40px 22px;
  transform: rotate(-15deg);
  border-top: none;
  border-right: none;
  top: 51px;
  right:50%;     
}
.upperLip.right{
  border-bottom-right-radius: 40px 22px;
  transform: rotate(15deg);
  border-top: none;
  border-left: none;
  top: 51px;
  left: 50%;
  
}/*
接下来准备皮卡丘的下嘴唇
*/

.lowerLip-wrapper{
  
  width: 300px;
  height: 120px;
  left: 50%;
  bottom: 0;
  position: absolute;
  margin-left: -150px;
  
  overflow: hidden;
}
.lowerLip{
  width: 160px;
  height: 2000px;
  
  background: #990513;
  border-radius: 500px/2000px;
  border: 2px solid black;
  margin-left: 70px;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: -20px;
  width: 120px;
  height: 120px;
  background: #FC4A62;
  left: 50%;
  margin-left: -60px;
  border-radius: 120px/100px;
  
}
/*
好了，这只皮卡丘送给你。
*/
`

writeCode('',code)


}.call()

