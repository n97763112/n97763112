window.onload=function(){
    // 获取屏幕的宽度
    var bodyWidth=document.documentElement.clientWidth;
    //做手机适配
    //1rem=20px
    var widthsize=bodyWidth*20/750;
    //alert(widthsize)
    document.documentElement.style.fontSize=widthsize+"px";
}
window.onscroll=function(){
    // 获取屏幕宽度
    var deviceWidth=document.documentElement.clientWidth;
    var widthsize=deviceWidth*20/750;
    document.documentElement.style.fontSize=widthsize+"px";
}
window.onresize=function(){
    // 获取屏幕的宽度
    var bodyWidth=document.documentElement.clientWidth;
    //做手机适配
    var widthsize=bodyWidth*20/750;
    document.documentElement.style.fontSize=widthsize+"px";
}
$("#img_1").click(function(){
if ($(".li").css("display") == "none"){
    $(".li").show(300);
}else{
    $(".li").hide(300);
}
});
