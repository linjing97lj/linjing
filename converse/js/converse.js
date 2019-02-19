// banner
let myTimer = null;
let currIndex = 0;



//自动播放
function autoPlay(){
	if(myTimer!=null){
		return;
	}
	myTimer = setInterval(function(){
		//1.处理数据
		currIndex=currIndex+1;
		if(currIndex>=5){
			currIndex=0;
		}
		//2.改变外观
		//图片
		let imgDoms = document.getElementById("imgBox").children;
		for(let i=0;i<imgDoms.length;i++){
			imgDoms[i].style.zIndex = 1;
		}
		imgDoms[currIndex].style.zIndex = 2;
		//菜单
		let navBox = document.getElementById("navBox");
		let navDoms = navBox.getElementsByTagName("li");
		for(var i=0;i<navDoms.length;i++){
			navDoms[i].style.color = "#999";
			navDoms[i].style.borderTop = "1px solid white";
		}
		navDoms[currIndex].style.color = "black";
		navDoms[currIndex].style.borderTop = "1px solid black";

	},3000)
}

//停止播放
function stopPlay(){
	window.clearInterval(myTimer);
	myTimer = null;
}

function goImg(index){
	currIndex = index;
	if(currIndex>=5 || currIndex<0){
		currIndex=0;
	}

//2.改变外观
//2.改变外观
		//图片
		let imgBox = document.getElementById("imgBox");
		let imgDoms = imgBox.getElementsByTagName("img");
		for(var i=0;i<imgDoms.length;i++){
			imgDoms[i].style.zIndex = 1;
		}
		imgDoms[currIndex].style.zIndex = 2;
		//菜单
		let navBox = document.getElementById("navBox");
		let navDoms = navBox.getElementsByTagName("li");
		for(var i=0;i<navDoms.length;i++){
			navDoms[i].style.color = "#999";
			navDoms[i].style.borderTop = "1px solid white";
		}
		navDoms[currIndex].style.color = "black";
		navDoms[currIndex].style.borderTop = "1px solid black";


}

window.onload = function(){
//轮播图动画
   //1.自动播放
   autoPlay();

   //2、鼠标进入停止播放
   $("#imgBox").onmousemove = function(){
		stopPlay();
   }

   //3、鼠标离开继续播放
	$("#imgBox").onmouseout = function(){
		autoPlay();
	}

	//跳转到对应的图片上
	$("#navBox").onclick = function(event){
		let evt = event || window.event;
		if(evt.target.tagName.toLowerCase()=="li"){
			goImg(evt.target.getAttribute("index"));
		}
	}

	//设置两个按钮
	// let leftBttn = $("#leftBttn");
	// let rightBttn = $("#rightBttn");
	// let imgBox = document.getElementById("imgBox");
	// let imgDoms = imgBox.getElementsByTagName("img");
	
	// rightBttn.onclick = function(){
	// 	currIndex++;
	// 	if(currIndex<0){
	// 		currIndex = imgDoms.length-1;
	// 	}
	// }
	// leftBttn.onclick = function(){
	// 	currIndex--;
	// 	if(currIndex>imgDoms.length-1){
	// 		currIndex = 0;
	// 	}
	// }


	function $(str){
		if(str.charAt(0)=="#"){
			return document.getElementById(str.substring(1));
		}else if(str.charAt(0)=="."){
			return document.getElementsByClassName(str.substring(1));
		}else{
			return document.getElementsByTagName(str);
		}
	}
    
}
























