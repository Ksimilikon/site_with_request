let solution=localStorage.getItem("solution");

$(document).ready(function(){
console.log(localStorage.getItem("solution"));
if(solution==1){
    $("#portal").append('<form  action="#"><a href="../html/user_main.html"><input class="button_enter" type="button" value="Личный кабинет"></a></form>');
}
else{
    $("#portal").append('<form  action="#"><a href="../html/autoriz.html"><input class="button_enter" type="button" value="Вход"></a></form><form  action="#"><a href="../html/reg.html"><input class="button_enter" type="button" value="Регистрация"></a></form>');
}
})