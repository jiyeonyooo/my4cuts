var string = "하나\u00a0,둘\u00a0,셋\u00a0,찰칵!";
var array = string.split(",");
console.log(array);

function onetwothree () {
    if (array.length > 0) {
        document.querySelector(".name-header__sub").innerText += array.shift(); //배열 맨 앞의 요소 제거
    } 
    else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('onetwothree()', 800);
}
onetwothree();

//https://codepen.io/lscsaqib/pen/xwPwmY

