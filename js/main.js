
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


function leerDiv(div){
  var contenido= $(div).text();
  var url="https://translate.google.com.pe/translate_tts?ie=UTF-8&q=Paty%20Arakawa&tl=es&total=1&idx=0&textlen=12&tk=67250.471141&client=t&prev=input";
  var audio = $("#audio")[0];

      $("#audio").attr("src", url);

      audio.play();

}

function stop(){
  var audio = $("#audio")[0];
    audio.pause();
}
