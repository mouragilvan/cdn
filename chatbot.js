
/*IMPORTS CSS*/
var style = document.createElement('style');
style.type = 'text/css';
style.innerText = '@import "https://cdn.jsdelivr.net/gh/mouragilvan/cdn@master/chatbot.css";';
$('body').append(style);

var style = document.createElement('style');
style.type = 'text/css';
style.innerText = '@import "https://cdn.jsdelivr.net/gh/mouragilvan/cdn@master/animate.css";';
$('body').append(style);

/*IMPORTS JS*/
var js = document.createElement('script');
js.src = 'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
$('body').append(js);  

var html_chatbot = '<div id="webchat" class="bottom-right animated" style="opacity: 0;display: none" role="main"></div> <div id="webchatBtn" class="bottom-right" ><img src="" ></img></div>';
$('body').append(html_chatbot);

 function animateCSS(element, animationName, callback) {
        const node = document.querySelector(element)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

    if($('#webchat').children().length == 0){
        $('#webchatBtn').click(function (e) {
            if($('#webchat').css("opacity") == 1){
                animateCSS('#webchat', 'fadeOutDown', function() {
                    $('#webchat').css('opacity', 0);
                    $('#webchat').css('display', 'none');
                    $('#webchat').removeClass('fadeOutDown');
                })
            }else{
                $('#webchat').css('display', 'block');
                animateCSS('#webchat', 'fadeInUp', function() {
                    $('#webchat').css('opacity', 1);

                    $('#webchat').removeClass('fadeInUp');
                })
            }
            
        });
    }

    function chatbotInit(token, image)
    {
       $('#webchatBtn > img').attr('src',image);
    
      setTimeout(function(){
        WebChat.renderWebChat(
        {
            directLine: WebChat.createDirectLine({
                token:  token
            }),
            userID: 'YOUR_USER_ID',
            username: 'voce',
             locale: 'pt-BR',
            botAvatarInitials: 'AC',
            userAvatarInitials: 'VC'
        },
        document.getElementById('webchat')
      );
    },3000); 
    
   } 