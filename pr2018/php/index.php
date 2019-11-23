<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>php 기초</title>
	
</head>
<body>
	<header id="header">
	    <h1>php 수업</h1>
	</header>
	<nav id="gnb">
	    <ul>
        <?php
         echo file_get_contents("list1.txt");      
        ?>
	    </ul>
	</nav>
	<section id="content">
	    <?php
        if(empty($_GET['id'])==false){
        echo file_get_contents($_GET['id'].".txt");
        }
        ?>
	</section>
	<footer id="footer"></footer>
</body>
</html>