<?php
    header("Content-type:text/html;charset=utf-8");

    $userphone = $_POST['userphone'];
	$useremail = $_POST['useremail'];
	$password = $_POST['password'];

    $conn = mysql_connect('localhost','root','root');

    if(!$conn){
        echo"服务器端出错，数据库没有连接上";
    }else{
        mysql_select_db("registration",$conn);

        $sqlstr = "insert into userinfo(userphone,useremail,password)
                    values('$userphone','$useremail','$password')";

        $result = mysql_query( $sqlstr,$conn);


        mysql_close($conn);
        if($result==1){
            echo "1";
        }else{
            echo "0";
        }
    }







?>