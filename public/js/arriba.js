(function($, w, d) {

  function startApp() {
      // EVENT BOTTON  GO TOP 
      $('.ir-arriba').click(function() {
          $('body, html').animate({
              scrollTop: '0px'
          }, 300);
      });
      // ANIMATION SCROLL
      $(w).scroll(function() {
          
          if ($(this).scrollTop() > 0) {
              $('.ir-arriba').slideDown(300);// SHOW BOTTON GO TOP
              $('.nav_header').addClass('scroll');// ADD BACKGROUND HEADER
          } else {
              $('.ir-arriba').slideUp(300);// HIDE BOTTON GO TOP
              $('.nav_header').removeClass('scroll');// REMOVE BACKGROUND HEADER
          }
      });
      acordeon(); // EVENTO SLIDE


      $('.menu_desplegable a').on('click',function(event){
        $('#hamburguer').prop('checked',false);
      });

  }

  function acordeon(){
   
    $("#accordion1 li").on("click", function() {       
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });

  }

  $(d).ready(startApp);

})(jQuery, window, document)