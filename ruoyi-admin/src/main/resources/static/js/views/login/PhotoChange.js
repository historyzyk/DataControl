var ary = ['hunau1.jpg','hunau2.jpg','hunau3.jpg','hunau4.jpg','hunau5.jpg','hunau6.jpg'];
var i = 0;
var img = document.querySelector(".xjw>img");

function _next(){
    i++;
    if(i == ary.length){
        i = 0;
    }
    img.src = "img/"+ary[i];
}

function _previous(){
    i--;
    if(i == -1){
        i = ary.length-1;
    }
    img.src = "img/"+ary[i];
}

function _show(i){
    img.src = "img/"+ary[i];
}

setInterval("_next()","3000");
