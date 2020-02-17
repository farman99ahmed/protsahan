// Read the article
// https://css-tricks.com/polylion

var tmax_opts = {
    delay: 0.5,
    repeat: -1,
    repeatDelay: 0.5,
    yoyo: true
  };
  
  var tmax_tl           = new TimelineMax(tmax_opts),
      polylion_shapes   = $('svg.polylion > g polygon'),
      polylion_stagger  = 0.00475,
      polylion_duration = 1.5;
  
  var polylion_staggerFrom = {
    scale: 0,
    opacity: 0,
    transformOrigin: 'center center',
  };
  
  var polylion_staggerTo = {
    opacity: 1,
    scale: 1,
    ease: Elastic.easeInOut
  };
  
  tmax_tl.staggerFromTo(polylion_shapes, polylion_duration, polylion_staggerFrom, polylion_staggerTo, polylion_stagger, 0);






  //HTML CSS JSResult
var $w = $( window ).width();
var $dW = $('.bb8').css('width');
$dW = $dW.replace('px', '');
$dW = parseInt($dW);
var $dPos = 0;
var $dSpeed = 1;
var $dMinSpeed = 1;
var $dMaxSpeed = 4;
var $dAccel = 1.04;
var $dRot = 0;
var $mPos = $w - $w/5;
var $slowOffset = 120;
var $movingRight = false;

function moveDroid(){
  if($mPos > $dPos + ($dW/4)){
    // moving right
    if(!$movingRight){
      $movingRight = true;
      $('.antennas').addClass('right');
      $('.eyes').addClass('right');
    }
    if($mPos - $dPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($mPos-$dPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos + $dSpeed;
    $dRot = $dRot + $dSpeed;
  } else if($mPos < $dPos - ($dW/4)){
    // moving left
    if($movingRight){
      $movingRight = false;
      $('.antennas').removeClass('right');
      $('.eyes').removeClass('right');
    }
    if($dPos - $mPos > $slowOffset){
      if($dSpeed < $dMaxSpeed){
        // speed up
        $dSpeed = $dSpeed * $dAccel;
      }
    } else if($dPos - $mPos < $slowOffset){
      if($dSpeed > $dMinSpeed){
        // slow down
        $dSpeed = $dSpeed / $dAccel;
      }
    }
    $dPos = $dPos - $dSpeed;
    $dRot = $dRot - $dSpeed;
  } else { }
  $('.bb8').css('left', $dPos);
  $('.ball').css({ WebkitTransform: 'rotate(' + $dRot + 'deg)'});
  $('.ball').css({ '-moz-transform': 'rotate(' + $dRot + 'deg)'});
}

setInterval(moveDroid, 10);

$( document ).on( "mousemove", function( event ) {
  $('h2').addClass('hide');
  $mPos = event.pageX;
  return $mPos;
});

//======== COC Card Event Starts========//
$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");
  
});
//========== COC Card JS Ends===========//

//==========Competition Card Starts Here=========//
$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");
  
});
//=========Competition Card Ends Here ===========//
