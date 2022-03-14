$('#navbar-topCasaFina').on('show.bs.collapse', function () {
    $('.topCasaFina-Banner').css('transform','translate(-50%,10%)');
  })
 $('#navbar-topCasaFina').on('hide.bs.collapse', function () {
    $('.topCasaFina-Banner').css('transform','translate(-50%,-50%)');
  })