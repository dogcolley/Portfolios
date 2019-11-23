
<?php 
    $sectionName ="sub01";
    $subNum = "01";
    $subName = "회사소개";
    $dep2Num = "01";
    $dep2Name = "인사말";
    include_once("./header.php");
?>
    <!-- 컨텐츠 시작 -->  
	
	<div class="m_content">
		<ul class="dep2_list">
			<li <?if(isset($dep2Num)){if($dep2Num=="01" && $subNum=="01"){echo 'class="on"';}}?>><a href="sub1_1.php">인사말</a></li>
            <li <?if(isset($dep2Num)){if($dep2Num=="02" && $subNum=="01"){echo 'class="on"';}}?>><a href="sub1_2.php">조직도</a></li>
		</ul>
		<div class="m_sub1_1">
			<h2>인사말</h2>
			<img src="../img/m/sub1_1bg.jpg" alt="">
			<strong>안녕하십니까?<span>(주)리스크홀더그룹</span>을방문해주셔서 진심으로 감사드립니다.</strong>
			<p><span>(주)리스크홀더그룹은 기업의 경영전반에 대한 위험관리 (riskmanagement)를 시작으로 경영컨설팅과 기술지원 사업을 토대로 수많은 기업들과 함께 성장해오고 있습니다.</span>
			<span class="cr_333">"지속적인 성장"이라는 최고의 가치실현을 위해 매출 상승만이 전부는	아닐 것입니다. 실제로 여러분이 당면할 수 있는 리스크는 정부의 규제와	정책변화, 법적분쟁, 노사문제, 소비자 불만, 평판과 이미지, 사고와 질병,	천재지변 등 매우 다양하고 역동적인 모습으로 우리에게 영향을 미치고	있는게 사실입니다. 즉 반대급부 위험관리와 매출 성장, 두 가지 모두가 	갖추어야 "지속적인 성장"이 가능한 것입니다.</span>
			<span>리스크홀더그룹은 각계 산업의 성장과 위험을 관리하는 프리미엄 서비스를 제공하며, 여러분이 빠르고 안전하게 성과를 달성 할 수 있도록	도와드립니다. 여러분의 목표를 공유하고 직면한 현실을 이해하며	유기적인 관계를 지향합니다.</span>
			<span>여러분의 성공이 곧 저희의 성공입니다. 감사합니다.</span>
			<strong class="cr_333">(주) 리스크홀더그룹 임직원 일동</strong>
			</p>
		</div>
	</div> 
     <!-- 컨텐츠 끝 -->         
  <?php include_once("./footer.php");?>