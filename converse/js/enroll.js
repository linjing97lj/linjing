window.onload = function(){
    $("userphone").onblur = function(){
        var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if(this.value.length==0){
            this.nextElementSibling.innerHTML = "请输入手机号码！";
        }else if(!reg.test(this.value)){
            this.nextElementSibling.innerHTML = "请输入11位有效中国手机号码！";
            }
        }   

    $("useremail").onblur = function(){
        var reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if(this.value.length==0){
            this.nextElementSibling.innerHTML = "请输入电子邮箱地址！";
        }else if(!reg.test(this.value)){
            this.nextElementSibling.innerHTML = "请输入有效的电子邮箱地址！";
        }
    }


    $("password").onblur = function(){
        var reg = /^[a-zA-Z0-9-]{6,12}/;
        if(this.value.length==0){
            this.nextElementSibling.innerHTML = "请输入密码！";
        }else if(!reg.test(this.value)){
            this.nextElementSibling.innerHTML = "密码为6-12位字符！";
        }
    }

    $("confirmPass").onblur = function(){
        var pwd = $("password");
        if(this.value.length==0){
            this.nextElementSibling.innerHTML = "请再次输入密码！";
        }else if(pwd!=this.value){
            this.nextElementSibling.innerHTML = "抱歉，两次输入的密码不匹配！";
        }
    }





function $(id){
    return document.getElementById(id);
}











}




