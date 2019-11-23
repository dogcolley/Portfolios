<?
define('G5_MOBILE_AGENT','phone|samsung|lgtel|mobile|[^A]skt|nokia|blackberry|BB10|android|sony');
function is_mobile()
{
    return preg_match('/'.G5_MOBILE_AGENT.'/i', $_SERVER['HTTP_USER_AGENT']);
}
if(is_mobile()){
	/* 모바일페이지 이동하기 */
	header('Location: /m/');
	exit;
	/* 모바일페이지 불러오기
	include("./m/index.php");
	exit;
	*/
}
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <title>리스크홀더그룹</title>
    <link rel="stylesheet" href="./css/style.css">
    <meta name="description" content="프리미엄 경영컨설팅, 치과경영사업부, 금융서비스, 치과경영지도사 검정, IT R&D ">
	<!--[if lt IE 9]>
    <script src="js/html5shiv.min.js"></script>
  <![endif]-->
    <script src="./js/jquery-1.12.4.min.js"></script>
    <script src="./js/style.js"></script>	

</head>

<body id="<?=$sectionName ?>">
    <div class="area">
        <header id="header">
            <h1 id="log"><a href="./"><img src="./img/pc/log.png" alt="Risk Holder Group" width="200" height="150"></a></h1>
            <nav id="gnb"> 
                <ul>
                    <li><a href="html/sub1_1.php">회사소개</a>
                        <ul>
                            <li><a href="html/sub1_1.php">인사말</a></li>
                            <li><a href="html/sub1_2.php">조직도</a></li>
                        </ul>   
                    </li>
                    <li><a href="html/sub2.php">경영컨설팅</a></li>
                    <li><a href="html/sub3.php">치과경영사업부</a></li>
                    <li><a href="html/sub4.php">금융사업부</a></li>
                    <li><a href="html/sub5.php">교육사업부</a></li>
                    <li><a href="html/sub6.php">R&amp;D 사업부</a></li>
                    <li><a href="html/sub7.php">컨설팅 문의</a></li>
                </ul>
            </nav>
            <div class="utile">
                <span class="list1"><span>컨설팅</span> 이용문의</span>
                <span class="list2">(02) 534-6262</span>
                <span class="list3"><span>E-mail</span>ceorichplan@gmail.com</span>
            </div>
        </header>
<section id="content">