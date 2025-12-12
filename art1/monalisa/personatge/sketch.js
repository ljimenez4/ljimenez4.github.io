let mic;
function setup() {
  createCanvas(800,1000)
  mic=new p5.AudioIn();
  mic.start();
  }
  
  
function draw() {
  let vol=mic.getLevel();
  let h=map(vol,0,1,0,6000,true);
  
  background(18,157,249);
  fill(246, 187, 215)
  background(220);
  beginShape();//cara de la pepa
curveVertex(507.5, 134.609375);
curveVertex(534.5, 154.609375);
curveVertex(573.5, 97.609375);
curveVertex(613.5, 78.609375);
curveVertex(648.5, 100.609375);
curveVertex(652.5, 135.609375);
curveVertex(637.5, 166.609375);
curveVertex(597.5, 208.609375);
curveVertex(639.5, 287.609375);
curveVertex(649.5, 341.609375);
curveVertex(646.5, 409.609375);
curveVertex(642.5, 426.609375);
curveVertex(636.5, 450.609375);
curveVertex(628.5, 473.609375);
curveVertex(594.5, 522.609375);
curveVertex(541.5, 563.609375);
curveVertex(491.5, 581.609375);
curveVertex(432.5, 589.609375);
curveVertex(360.5, 577.609375);
curveVertex(290.5, 551.609375);
curveVertex(251.5, 516.609375);
curveVertex(231.5, 485.609375);
curveVertex(208.5, 436.609375);
curveVertex(212.5, 373.609375);
curveVertex(228.5, 343.609375);
curveVertex(248.5, 302.609375);
curveVertex(179.5, 262.609375);
curveVertex(136.5, 217.609375);
curveVertex(112.5, 148.609375);
curveVertex(124.5, 108.609375);
curveVertex(143.5, 85.609375);
curveVertex(157.5, 72.609375);
curveVertex(199.5, 55.609375);
curveVertex(243.5, 56.609375);
curveVertex(262.5, 75.609375);
curveVertex(270.5, 109.609375);
curveVertex(263.5, 147.609375);
curveVertex(237.5, 191.609375);
curveVertex(218.5, 209.609375);
curveVertex(178.5, 224.609375);
curveVertex(138.5, 217.609375);
curveVertex(112.5, 149.609375);
curveVertex(125.5, 105.609375);
curveVertex(144.5, 86.609375);
curveVertex(161.5, 71.609375);
curveVertex(202.5, 56.609375);
curveVertex(243.5, 49.609375);
curveVertex(435.5, 103.609375);
curveVertex(466.5, 21.609375);
curveVertex(488.5, 9.609375);
curveVertex(508.5, 12.609375);
curveVertex(528.5, 22.609375);
curveVertex(538.5, 41.609375);
curveVertex(532.5, 80.609375);
curveVertex(507.5, 126.609375);
endShape(CLOSE);
  fill(252, 88, 79)
  beginShape();//vestit de la pepa
curveVertex(593.5, 523.609375);
curveVertex(617.5, 556.609375);
curveVertex(619.5, 568.609375);
curveVertex(632.5, 596.609375);
curveVertex(658.5, 679.609375);
curveVertex(668.5, 738.609375);
curveVertex(677.5, 831.609375);
curveVertex(675.5, 787.609375);
curveVertex(682.5, 836.609375);
curveVertex(656.5, 843.609375);
curveVertex(481.5, 846.609375);
curveVertex(201.5, 842.609375);
curveVertex(167.5, 833.609375);
curveVertex(173.5, 773.609375);
curveVertex(185.5, 694.609375);
curveVertex(207.5, 610.609375);
curveVertex(251.5, 524.609375);
curveVertex(317.5, 566.609375);
curveVertex(381.5, 586.609375);
curveVertex(453.5, 590.609375);
curveVertex(571.5, 547.609375);
curveVertex(593.5, 522.609375);
endShape(CLOSE);
  fill(246, 145, 189)
  beginShape();//mofletes de la pepa
curveVertex(541.5, 294.609375);
curveVertex(514.5, 304.609375);
curveVertex(489.5, 338.609375);
curveVertex(486.5, 374.609375);
curveVertex(501.5, 402.609375);
curveVertex(525.5, 417.609375);
curveVertex(559.5, 415.609375);
curveVertex(586.5, 394.609375);
curveVertex(601.5, 363.609375);
curveVertex(600.5, 335.609375);
curveVertex(583.5, 301.609375);
curveVertex(542.5, 293.609375);
endShape(CLOSE);
  fill(252, 67, 145)
  beginShape();//llavis de la peppa
curveVertex(290.5, 345.609375);
curveVertex(309.5, 369.609375);
curveVertex(347.5, 389.609375);
curveVertex(394.5, 404.609375);
curveVertex(430.5, 401.609375);
curveVertex(453.5, 398.609375);
curveVertex(462.5, 414.609375);
curveVertex(451.5, 439.609375);
curveVertex(433.5, 462.609375);
curveVertex(404.5, 475.609375);
curveVertex(361.5, 482.609375);
curveVertex(309.5, 472.609375);
curveVertex(287.5, 454.609375);
curveVertex(261.5, 407.609375);
curveVertex(264.5, 374.609375);
curveVertex(280.5, 341.609375);
curveVertex(287.5, 343.609375);
endShape(CLOSE);
  fill(39, 33, 33)
  beginShape();//boca de la pepa
curveVertex(285.5, 366.609375);
curveVertex(276.5, 394.609375);
curveVertex(292.5, 428.609375);
curveVertex(315.5, 456.609375);
curveVertex(354.5, 467.609375);
curveVertex(405.5, 462.609375);
curveVertex(439.5, 429.609375);
curveVertex(441.5, 414.609375);
curveVertex(405.5, 415.609375);
curveVertex(365.5, 414.609375);
curveVertex(323.5, 398.609375);
curveVertex(287.5, 366.609375);
endShape(CLOSE);
  fill(184, 92, 143)
  beginShape();//forat esquerre del nas de la pepa
curveVertex(163.5, 116.609375);
curveVertex(158.5, 120.609375);
curveVertex(156.5, 128.609375);
curveVertex(156.5, 134.609375);
curveVertex(158.5, 142.609375);
curveVertex(167.5, 144.609375);
curveVertex(177.5, 143.609375);
curveVertex(184.5, 133.609375);
curveVertex(179.5, 120.609375);
curveVertex(166.5, 115.609375);
endShape(CLOSE);
  fill(184, 92, 143)
  beginShape();//dret del nas de la pepa
curveVertex(210.5, 128.609375);
curveVertex(200.5, 138.609375);
curveVertex(204.5, 154.609375);
curveVertex(222.5, 155.609375);
curveVertex(226.5, 140.609375);
curveVertex(214.5, 124.609375);
endShape(CLOSE);
  fill(253, 249, 246)
  beginShape();//part  blanca de l'ull dret de la pepa
curveVertex(444.5, 171.609375);
curveVertex(433.5, 179.609375);
curveVertex(426.5, 197.609375);
curveVertex(428.5, 212.609375);
curveVertex(442.5, 227.609375);
curveVertex(466.5, 227.609375);
curveVertex(481.5, 213.609375);
curveVertex(481.5, 189.609375);
curveVertex(464.5, 167.609375);
curveVertex(448.5, 166.609375);
endShape(CLOSE);
  fill(253, 249, 246)
  beginShape();//part blanca de l'ull esquerre de la pepa
curveVertex(341.5, 127.609375);
curveVertex(329.5, 141.609375);
curveVertex(331.5, 164.609375);
curveVertex(360.5, 179.609375);
curveVertex(380.5, 173.609375);
curveVertex(377.5, 126.609375);
curveVertex(355.5, 126.609375);
curveVertex(344.5, 127.609375);
endShape(CLOSE);
  fill(37, 31, 33)
  beginShape();//pupila de l'ull dret
curveVertex(437.5, 182.609375);
curveVertex(445.5, 182.609375);
curveVertex(453.5, 186.609375);
curveVertex(457.5, 195.609375);
curveVertex(452.5, 205.609375);
curveVertex(441.5, 209.609375);
curveVertex(430.5, 202.609375);
curveVertex(429.5, 191.609375);
curveVertex(434.5, 184.609375);
curveVertex(437.5, 181.609375);
endShape(CLOSE);
  fill(37, 31, 33)
  beginShape();//pupila de l'ull esquerre
curveVertex(341.5, 134.609375);
curveVertex(333.5, 140.609375);
curveVertex(331.5, 150.609375);
curveVertex(338.5, 160.609375);
curveVertex(349.5, 160.609375);
curveVertex(356.5, 154.609375);
curveVertex(360.5, 147.609375);
curveVertex(357.5, 137.609375);
curveVertex(350.5, 133.609375);
curveVertex(341.5, 133.609375);
endShape(CLOSE);
  fill(239, 172, 205)
  beginShape();//cua de la pepa
curveVertex(669.5, 744.609375);
curveVertex(686.5, 744.609375);
curveVertex(681.5, 725.609375);
curveVertex(683.5, 713.609375);
curveVertex(693.5, 698.609375);
curveVertex(707.5, 692.609375);
curveVertex(720.5, 696.609375);
curveVertex(732.5, 707.609375);
curveVertex(736.5, 731.609375);
curveVertex(727.5, 746.609375);
curveVertex(747.5, 739.609375);
curveVertex(760.5, 726.609375);
curveVertex(772.5, 730.609375);
curveVertex(772.5, 743.609375);
curveVertex(757.5, 758.609375);
curveVertex(732.5, 768.609375);
curveVertex(703.5, 758.609375);
curveVertex(672.5, 760.609375);
curveVertex(668.5, 744.609375);
curveVertex(687.5, 744.609375);
curveVertex(708.5, 737.609375);
curveVertex(714.5, 725.609375);
curveVertex(709.5, 714.609375);
curveVertex(702.5, 717.609375);
curveVertex(706.5, 735.609375);
endShape(CLOSE);
  fill(238, 168, 202)
  beginShape();//braç dret de la pepa
curveVertex(613.5, 561.609375);
curveVertex(624.5, 563.609375);
curveVertex(670.5, 579.609375);
curveVertex(728.5, 604.609375);
curveVertex(769.5, 588.609375);
curveVertex(782.5, 597.609375);
curveVertex(778.5, 608.609375);
curveVertex(750.5, 614.609375);
curveVertex(777.5, 637.609375);
curveVertex(781.5, 650.609375);
curveVertex(772.5, 654.609375);
curveVertex(747.5, 637.609375);
curveVertex(747.5, 656.609375);
curveVertex(738.5, 657.609375);
curveVertex(731.5, 654.609375);
curveVertex(723.5, 627.609375);
curveVertex(628.5, 586.609375);
curveVertex(614.5, 561.609375);
endShape(CLOSE);
  fill(238, 168, 202)
  beginShape();//braç esquerre de la pepa
curveVertex(215.5, 587.609375);
curveVertex(125.5, 626.609375);
curveVertex(114.5, 655.609375);
curveVertex(105.5, 657.609375);
curveVertex(99.5, 653.609375);
curveVertex(99.5, 637.609375);
curveVertex(75.5, 655.609375);
curveVertex(65.5, 650.609375);
curveVertex(64.5, 642.609375);
curveVertex(96.5, 614.609375);
curveVertex(69.5, 608.609375);
curveVertex(63.5, 598.609375);
curveVertex(67.5, 591.609375);
curveVertex(97.5, 592.609375);
curveVertex(118.5, 604.609375);
curveVertex(224.5, 565.609375);
curveVertex(217.5, 584.609375);
curveVertex(214.5, 586.609375);
endShape(CLOSE);
  fill(242, 177, 207)
  beginShape();//CAMA dreta DE LA PEPA
curveVertex(538.5, 847.609375);
curveVertex(542.5, 935.609375);
curveVertex(562.5, 937.609375);
curveVertex(562.5, 846.609375);
curveVertex(539.5, 846.609375);
endShape(CLOSE);
  fill(242, 177, 207)
  beginShape();//cama esquerre de la pepa
curveVertex(322.5, 848.609375);
curveVertex(325.5, 938.609375);
curveVertex(347.5, 939.609375);
curveVertex(346.5, 848.609375);
curveVertex(324.5, 847.609375);
endShape(CLOSE);
  fill(37, 31, 33)
  beginShape();//sabata esquerre de la pepa
curveVertex(341.5, 936.609375);
curveVertex(251.5, 926.609375);
curveVertex(232.5, 930.609375);
curveVertex(225.5, 938.609375);
curveVertex(224.5, 948.609375);
curveVertex(235.5, 959.609375);
curveVertex(254.5, 959.609375);
curveVertex(348.5, 956.609375);
curveVertex(351.5, 942.609375);
curveVertex(342.5, 938.609375);
endShape(CLOSE);
  fill(37, 31, 33)
  beginShape();//SABATA DRETA DE LA PEPA
curveVertex(566.5, 937.609375);
curveVertex(461.5, 928.609375);
curveVertex(444.5, 934.609375);
curveVertex(440.5, 944.609375);
curveVertex(447.5, 954.609375);
curveVertex(463.5, 960.609375);
curveVertex(562.5, 955.609375);
curveVertex(569.5, 947.609375);
curveVertex(565.5, 937.609375);
endShape(CLOSE);
  
}
