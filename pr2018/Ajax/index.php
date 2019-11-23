<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Ajax : 사용법</title>
	<script type="text/javascript" src="js/jquery-1.12.4.min.js"></script>
	<script type="text/javascript">
        $(document).ready(function(){
           $('#loadbtn').on('click',function(){
				$('#load_text_box').load('./load_test.php');
		   });
			$('#ajexbutton').on('click',function(){
				$.ajax({
					  type: "POST",
					  url: "./load_test.php",
					  datatype: "html",
					  data: dataString,
					  success: function(data) {
						alert(data);
						}
					});
			});
        });
    </script>
</head>
<body>
	<h1>Ajext 및 Load 테스트</h1>
	<br />
	<p>현재 사용중인 아이피 <?php echo $_SERVER['REMOTE_ADDR'];?></p>
	<p>url가져오기 <?php echo $_SERVER["HTTP_HOST"];?></p>
	<p>겟값 가져오기 <?php echo  getenv("QUERY_STRING"); ?></p>
	<p>현재 ulr 가져오기 <?php echo  $_SERVER["PHP_SELF"];?></p>
	<p>현재페이지만 가져오기<?php echo  basename($_SERVER["PHP_SELF"]); ?></p>


	<br />
	<h2>Load Test</h2>
	<button type="button" id="loadbtn">LOAD button</button>
	<div id="load_text_box"></div>
	<br />
	<h2>Ajex Test</h2>
	<button type="button" id="ajexbutton">Ajex button</button>
	<div id="Ajex_text_box"></div>
</body>
</html>