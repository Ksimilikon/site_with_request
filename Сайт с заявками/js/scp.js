let fio, login, password, rpassword, solVal;
let checkbox, email;
let bool1, bool2, bool3;
solVal=0;

localStorage.setItem("solution", solVal);
function removeP(pointer){
    if(pointer.html()!==''){
        return pointer.text('');
    }
    else {
        return pointer;
    }
}
function getAllBool(b1, b2, b3,b4,b5,b6){
    if (b1){
        b1=true;
    }else{return false;}
    if(b2){
        b1=true
    }else{return false;}
    if(b3){
        b1=true
    }else{return false;}
    if(b4){
        b1=true
    }else{return false;}
    if(b5){
        b1=true
    }else{return false;}
    if(b6){
        b1=true
    }else{return false;}
    return b1;
}

$("#reg").click(function(){
    // removeP($("#warning1"));
    // removeP($("#warning2"));
    // removeP($("#warning3"));

    fio=$("#FIO").val();
    login=$("#login").val();
    password=$("#password").val();
    rpassword=$("#repeat_password").val();
    
    email=$("#email").val();
    email=validateEmail(email);

    function validateEmail(email) {
        let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
      }
    function validateFIO(fio){
        let re= /[а-яА-Я]/;
        return re.test(String(fio).toLowerCase());
    }
    function validateLOG(login){
        let re=/[a-zA-Z]/;
        return re.test(String(login).toLowerCase());
    }

    //alert(validateFIO($("#FIO").val()));
    //alert(validateLOG($("#login").val()));
if(validateFIO($('#FIO').val())){
    removeP($("#warning4"));
}
else{
    $("#warning4").text('В ФИО поддерживаются только кириллические буквы, дефис и пробелы');
}
if(validateLOG($('#FIO').val())){
    removeP($("#warning5"));
}
else{
    $("#warning5").text('В логине поддерживается только латиница');
}
let boolpassword;
if(password===''){
    $("#warning5").text('Введите пароль');
    boolpassword=false;
}
else{
    removeP($("#warning5"))
    boolpassword=true;
}

/////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\
    if($("#checkbx").is(":checked")){
        checkbox=true;
    }
    else{
        checkbox=false;
    }
    
    if(boolpassword){
        if(password===rpassword)
        {
            
            bool1=true;
            removeP($("#warning1"));
        }
        else{
            $("#warning1").text('Пароли не совпадают');
            localStorage.clear();
        }
    }

    if(checkbox){
        bool2=true;
        removeP($("#warning2"));
    }
    else{
        $("#warning2").text('Примите соглашение для регистрации');
    }
    if(email){
        bool3=true;
        removeP($("#warning3"));
    }
    else{
        $("#warning3").text('Неправильно введенна почта');
    }
    //success
    let AllBool;
    AllBool=getAllBool(bool1,bool2,bool3,boolpassword,validateFIO($("#FIO").val()),validateLOG($("#login").val()));
    if(AllBool){
            localStorage.setItem('username', fio);
            localStorage.setItem('login', login);
            localStorage.setItem('password', password);
       
        solVal=1;
        localStorage.removeItem("solution");
        localStorage.setItem("solution", solVal);
        window.location.href="../html/main.html";
    }
});

$("#autoriz").click(function(){
    let autlog, autpass;
    autlog=$("#logn").val();
    autpass=$("#passw").val();
    if(autlog===localStorage.getItem('login') && autpass===localStorage.getItem('password')){ 
        solVal=1;
        localStorage.removeItem("solution");
        localStorage.setItem("solution", solVal);
        window.location.href="../html/main.html";
    }
    else{
        $("#error").text('Ошибка пароля или логина');
    }

});

