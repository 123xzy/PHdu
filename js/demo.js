<script>
	//跑动的次数
	var count=0;
	//动画的执行方向
	var isgo = false;
	//定时器
	var timer;

	window.onload = function(){
		//获取ul元素
		var cont_img = document.getElementByClassName("ul_img")[0];
		//获取li元素
		var list_img = document.getElementByClassName("list_img");

		var cont_buttons = document.getElementByClassName("buttons");
		cont_buttons[0].style.backgroundColor = "aqua";

		showtime();
		function showtime() {
			timer = setInterval(function(){
				if (isgo == false) {
					count++;
					cont_img.style.left = - 1000 "px";
					if(count >= li_img.length -1){
						count = li_img.length -1;
						isgo = true;
					}
				}
				else{
					count--;
					ul_img.style.transform = "translate(" + -1000*count + "px)";
					if(count <= 0){
						count = 0;
						isgo = false;
					}
				}

				for (var i = 0; i < cont_buttons.length; i++) {
					cont_buttons[i].style.backgroundColor = "aquamarine";
				}

				cont_buttons[count].style.backgroundColor = "aqua";
			},40)
	}

</script>

