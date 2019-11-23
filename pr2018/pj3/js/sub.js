$(document).ready(function(){
   for(var i = 0 ; i <=$('#stationMenu #content').children().length; i++ ){
      for(var i2 = 0 ; i2 < $('#stationMenu #content').children().eq(i).find('ul').children().length; i2++){
               $('#stationMenu #content').children().eq(i).find('li').eq(i2).css({opacity:1})
       }
   }
    
    
    
    
});