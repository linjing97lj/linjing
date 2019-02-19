window.onload = function(){
    function $(id){
        return document.getElementById(id);
        }

        $("btnLogin").onclick = function(){

            let xhr = new XMLHttpRequest();
        
            // console.log("new完了："+xhr.readyState);
        
            xhr.open("post","userSave.php",true);
        
            xhr.onreadystatechange = function(){
                if(xhr.readyState==4 && xhr.status==200){
                    if(xhr.responseText=="1"){
                        location.href="index.html";
                    }else{
                        $("errorMessage").innerHTML="注册失败！";
                        $("errorMessage").style.display="block";
                    }
                }
            }
            xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            let str = `userphone=${$("userphone").value}&password=${$("password").value}`;
           
            xhr.send(str);
        
        
        }







}