$(window).on("load",function(){
    setTimeout(
        function(){
            $(".LoadingAnimation").fadeOut("slow");
        },100);
});

$(document).ready(function(){
    $(window).scroll(function(){
        $(".fadeinAnimation").each( function(i){
            var bottom_of_object = null;
            if($(document).width() > 700){
                bottom_of_object = $(this).offset().top + ($(this).outerHeight()/2);
            }else{
                bottom_of_object = $(this).offset().top + ($(this).outerHeight()/4);
            }
            
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){
                    
                    $(this).animate({'opacity':'1'},600);
                        
                }
        });
    });
    $(".WhatsappChat").hover(function(){
        $(".WhatsappName").animate({width: 'toggle'});
    },
    function(){
        $(".WhatsappName").animate({width: 'toggle'});
    });

    $("#NavbarButton").click(function(){
        document.getElementById('FirstLine').classList.toggle('line1');
        document.getElementById('SecondLine').classList.toggle('line2');
        document.getElementById('ThirdLine').classList.toggle('line3');
        var content = document.getElementById('content');
        var Navigationbar = document.getElementById('Navbar');
        if(content.style.marginLeft==="300px"){
          Navigationbar.style.width = "0";
          content.style.marginLeft="0px";
          $('.Logo').css({'opacity':'0','transition-duration':'0.1s','margin-top':'20px'});
          $('.MenuItems').css({'opacity':'0','transition-duration':'0.1s','margin-top':'20px'});
        }else{
          Navigationbar.style.width = "300px";
          content.style.marginLeft="300px"; 
          setTimeout(function(){
            $('.Logo').css({'opacity':'1','transition-duration':'0.1s','margin-top':'0px'});
            $('.MenuItems').css({'opacity':'1','transition-duration':'0.5s','margin-top':'0px'});
          },400);
        }
      });
      
});