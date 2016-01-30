window.onload=function(){
    var clock=document.getElementsByClassName("clock")[0];
    //创建表盘
    createMark();
    var time=new Date();
    var h=time.getHours();
    var m=time.getMinutes();
    var s=time.getSeconds();
    var hp=createPointer(50,5,"#2D2D2D",30*h-90+(6*m)/12);
    var mp=createPointer(70,4,"#484848",6*m-90);
    var sp=createPointer(90,2,"#949494",6*s-90);

    function createMark(){

        for(var i=0;i<60;i++){
            var w, h,l;
            if(i%5==0){
                w=4;h=10;
            }else{
                w=2;h=6;
            }
            l=(200-w)/2;
            var zheng=document.createElement("div");
            zheng.style.cssText="width:"+w+"px;height:"+h+"px;background:black;position:absolute;top:0;left:0";
            zheng.style.transform="translate("+l+"px,0px) rotate( "+i*6+"deg )";
            zheng.style.transformOrigin="center 100px";
            clock.appendChild(zheng);
        }
    }

    //创建指针
    function createPointer(w,h,c,a){
        var div=document.createElement("div");
        var t=(200-h)/2;
        div.t=t;
        div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";position:absolute:left:0;top:0;transform:translate(100px,"+t+"px) rotate("+a+"deg);transform-origin:left center ";
        clock.appendChild(div);
        return div;
    }


};