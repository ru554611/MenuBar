$(document).ready(function(){
                $("#circle").click(function(){
                    if ($(this).attr('src') == 'images/menu.png')   
                    {
                        $('.navWrapper').removeAttr('style');
                        $(this).attr('src', 'images/red.png');
                        $('.navWrapper').addClass("slideDown");                        
                    }
                    else
                    {
                        $(this).attr('src', 'images/menu.png');
                        $('.navWrapper').css('display', 'none');
                        $('.navWrapper').removeClass('slideDown');
                    }
                });
            });