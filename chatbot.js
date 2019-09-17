if (window.jQuery == undefined){
     js = document.createElement('script');
     js.src = 'https://code.jquery.com/jquery-3.4.1.js';
     
     document.body.appendChild(js);     
}

setTimeout(function(){
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
document.body.appendChild
$('body').append(js);  

var html_chatbot = '<div id="vertice_webchat" class="animated" style="opacity: 0;display: none" role="main"></div> <div id="vertice_webchatBtn" class="bottom-right" ><img src="" ></img></div>';
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

    if($('#vertice_webchat').children().length == 0){
        $('#vertice_webchatBtn').click(function (e) {
            if($('#vertice_webchat').css("opacity") == 1){
                animateCSS('#vertice_webchat', 'fadeOutDown', function() {
                    $('#vertice_webchat').css('opacity', 0);
                    $('#vertice_webchat').css('display', 'none');
                    $('#vertice_webchat').removeClass('fadeOutDown');
                })
            }else{
                $('#vertice_webchat').css('display', 'block');
                animateCSS('#vertice_webchat', 'fadeInUp', function() {
                    $('#vertice_webchat').css('opacity', 1);

                    $('#vertice_webchat').removeClass('fadeInUp');
                })
            }
            
        });
    }
},2000);

function chatbotInit(token, image, userID, username,locale,botAvatarInitials,userAvatarInitials,class_webchat){
     
      setTimeout(function(){
        $('#vertice_webchatBtn > img').attr('src',image);
        if(class_webchat == "" || class_webchat == null){
            $('#vertice_webchat').addClass('bottom-right');
        }else{
            $('#vertice_webchat').addClass(class_webchat);
        }
        WebChat.renderWebChat(
        {
            directLine: WebChat.createDirectLine({
                token:  token
            }),
            userID: userID,
            username: username,
             locale: locale,
            botAvatarInitials: botAvatarInitials,
            userAvatarInitials: userAvatarInitials
        },
        document.getElementById('vertice_webchat')
      );
     },3000); 
    
} 
