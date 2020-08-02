function myMove(){
    var element = document.getElementById("animate");
    var position = 0;
    var id = setInertval(frame,5);
    function frame(){
        if(pos ==250){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}