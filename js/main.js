
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


$(window).resize(function(){
 if($(window).width()<320){
  $('.ih-item').removeClass('top_to_bottom');
 }
});

function leerDiv(div){
  var url;
  var id=$(div).attr('id');
  switch(id){
    case "paty":
        url="audios/paty.mp3"
        break;
    case "desarrolladora":
        url="audios/desarrolladora.mp3";
        break;
    case "mi-nombre":
        url="audios/mi-nombre.mp3"
        break;
    case "sobre":
        url="audios/sobre.mp3";
        break;
    case "portafolio-title":
        url="audios/portafolio-title.mp3";
        break;
    case "proyectos":
        url="audios/proyectos.mp3";
        break;
    case "flatness":
        url="audios/flatness.mp3";
        break;
    case "flatness-text":
        url="audios/flatness-text.mp3";
        break;
    case "estudio":
        url="audios/estudio.mp3";
        break;
    case "estudio-text":
        url="audios/estudio-text.mp3";
        break;
    case "primes":
        url="audios/primes.mp3";
        break;
    case "primes-text":
        url="audios/primes-text.mp3";
        break;
    case "makerlab":
        url="audios/makerlab.mp3";
        break;
    case "makerlab-text":
        url="audios/makerlab-text.mp3";
        break;
    case "cip":
        url="audios/cip.mp3";
        break;
    case "cip-text":
        url="audios/cip-text.mp3";
        break;
    case "whatsapp":
        url="audios/whatsapp.mp3";
        break;
    case "whatsapp-text":
        url="audios/whatsapp-text.mp3";
        break;
    case "contacto-text":
        url="audios/contacto-text.mp3";
        break;
    case "numeros":
        url="audios/numeros.mp3";
        break;
    case "correo":
        url="audios/correo.mp3";
        break;
    case "descarga":
        url="audios/descarga.mp3";
        break;
    default:
        alert("bug")
  }
  
  var audio = $("#audio")[0];

      $("#audio").attr("src", url);

      audio.play();

}

function stop(){
  var audio = $("#audio")[0];
    audio.pause();
}

function invidentes(){
    var audio = $("#audio")[0];
    var url="audios/bienvenido.mp3"
      $("#audio").attr("src", url);

      audio.play();
  $("#paty").attr("onmouseover", "leerDiv(this)");
  $("#paty").attr("onmouseout", "stop()");
  $("#desarrolladora").attr("onmouseover", "leerDiv(this)");
  $("#desarrolladora").attr("onmouseout", "stop()");
  $("#mi-nombre").attr("onmouseover", "leerDiv(this)");
  $("#mi-nombre").attr("onmouseout", "stop()");
  $("#portafolio-title").attr("onmouseover", "leerDiv(this)");
  $("#portafolio-title").attr("onmouseout", "stop()");
  $("#sobre").attr("onmouseover", "leerDiv(this)");
  $("#sobre").attr("onmouseout", "stop()");
  $("#proyectos").attr("onmouseover", "leerDiv(this)");
  $("#proyectos").attr("onmouseout", "stop()");
  $("#flatness").attr("onmouseover", "leerDiv(this)");
  $("#flatness").attr("onmouseout", "stop()");
  $("#flatness-text").attr("onmouseover", "leerDiv(this)");
  $("#flatness-text").attr("onmouseout", "stop()");
  $("#estudio").attr("onmouseover", "leerDiv(this)");
  $("#estudio").attr("onmouseout", "stop()");
  $("#estudio-text").attr("onmouseover", "leerDiv(this)");
  $("#estudio-text").attr("onmouseout", "stop()");
  $("#primes").attr("onmouseover", "leerDiv(this)");
  $("#primes").attr("onmouseout", "stop()");
  $("#primes-text").attr("onmouseover", "leerDiv(this)");
  $("#primes-text").attr("onmouseout", "stop()");
  $("#makerlab").attr("onmouseover", "leerDiv(this)");
  $("#makerlab").attr("onmouseout", "stop()");
  $("#makerlab-text").attr("onmouseover", "leerDiv(this)");
  $("#makerlab-text").attr("onmouseout", "stop()");
  $("#cip").attr("onmouseover", "leerDiv(this)");
  $("#cip").attr("onmouseout", "stop()");
  $("#cip-text").attr("onmouseover", "leerDiv(this)");
  $("#cip-text").attr("onmouseout", "stop()");
  $("#whatsapp").attr("onmouseover", "leerDiv(this)");
  $("#whatsapp").attr("onmouseout", "stop()");
  $("#whatsapp-text").attr("onmouseover", "leerDiv(this)");
  $("#whatsapp-text").attr("onmouseout", "stop()");
  $("#contacto-text").attr("onmouseover", "leerDiv(this)");
  $("#contacto-text").attr("onmouseout", "stop()");
  $("#numeros").attr("onmouseover", "leerDiv(this)");
  $("#numeros").attr("onmouseout", "stop()");
  $("#correo").attr("onmouseover", "leerDiv(this)");
  $("#correo").attr("onmouseout", "stop()");
  $("#descarga").attr("onmouseover", "leerDiv(this)");
  $("#descarga").attr("onmouseout", "stop()");
}


