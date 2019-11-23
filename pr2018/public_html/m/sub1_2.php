
<?php 
    $sectionName ="sub01";
    $subNum = "01";
    $subName = "회사소개";
    $dep2Num = "02";
    $dep2Name = "조직도";
    include_once("./header.php");
?>
    <!-- 컨텐츠 시작 -->  
	<div class="m_content">
		<ul class="dep2_list">
			<li <?if(isset($dep2Num)){if($dep2Num=="01" && $subNum=="01"){echo 'class="on"';}}?>><a href="sub1_1.php">인사말</a></li>
            <li <?if(isset($dep2Num)){if($dep2Num=="02" && $subNum=="01"){echo 'class="on"';}}?>><a href="sub1_2.php">조직도</a></li>
		</ul>
		<div class="sub1_2m">
		    <h2>조직도</h2>
			<img src="../img/m/sub1_2tit.jpg" class="img1" alt="">
			<img src="../img/m/sub1_2list.jpg" alt="Risk Holder Group " class="img2" alt="">
			<ul> 
            <li>대표이사</li>
            <li>법무회계</li>
            <li>감사</li>
            <li>전략기획실
                <ul>
                    <li>경영컨설팅</li>
                    <li>치과경영사업부</li>
                    <li>금융사업부</li>
                    <li>교육사업부</li>
                    <li>R&amp;D 사업부</li>
                </ul>
            </li>
        </ul>
		</div>
	</div>

     <!-- 컨텐츠 끝 -->         
  <?php include_once("./footer.php");?>