if (localStorage.getItem('num')!==null)
{
    let num = localStorage.getItem('num');
    $(".InFoot").click(function(){ // функция для демонстрации на главной
        num = Number(localStorage.getItem('num')) + 1;
        localStorage.setItem('num', num);

        let audio = new Audio();
        audio.src = './time-resumes.mp3';
        audio.autoplay = true;
        document.getElementById("num").innerHTML = num + " за всё время";
        document.getElementById("num1").innerHTML = num + " за этот месяц";

});
    $('#make').click(function(){
        num = Number(localStorage.getItem('num')) + 1;
        localStorage.setItem('num', num);
        let audio = new Audio();
        audio.src = './time-resumes.mp3';
        audio.autoplay = true;
    });
        document.getElementById("num").innerHTML = num + " за всё время";
        document.getElementById("num1").innerHTML = num + " за этот месяц";
}
else {
    localStorage.setItem('num', 0);
    document.getElementById("num").innerHTML = 0 + " за всё время";
    document.getElementById("num1").innerHTML = 0 + " за этот месяц";
}