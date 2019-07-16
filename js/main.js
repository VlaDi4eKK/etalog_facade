$(document).ready(function(){
  // $('.js_columns_item')
  //   .mouseenter(function () {
  //     $('.js_columns_item').removeClass('hovered').addClass('minified');
  //     $(this).removeClass('minified').addClass('hovered');
  //   })
  //   .mouseleave(function () {
  //     $('.js_columns_item').removeClass('minified');
  //     $(this).removeClass('hovered');
  //   });

  $('#burger-button').on('click', function() {
    var $menu = $('#burger-menu');
    var $button = $(this);

    if($menu.hasClass('active')) {
      $menu.removeClass('active');
      $button.html('☰');
    } else {
      $menu.addClass('active');
      $button.html('&times;');
    }
  });

  $('#burger-menu a[data-content]').on('click', function(e) {
    e.preventDefault();
    var content = $(this).data('content');

    $('.columns_item--' + content).trigger('click');
    $('#burger-button').trigger('click');
  });


  $('.js_columns_item').on('click', function() {
    if($(this).hasClass('columns_item--opened')) {
      $('.js_columns_item').removeClass('columns_item--hidden');
      $('.js_columns_item').removeClass('columns_item--opened');
      $('.content').removeClass('visible');
    } else {
      $('.js_columns_item').addClass('columns_item--hidden');
      $('.js_columns_item').removeClass('columns_item--opened');

      $(this).removeClass('columns_item--hidden');
      $(this).addClass('columns_item--opened');

      // отображаем контент
      $('.content').removeClass('visible');
      $content = $('#' + $(this).data('content'));
      $content.addClass('visible');

      $content.find('.content_pagination-item:first').trigger('click');
    }
  });

  $('.content_pagination-item').on('click', function() {
    var $parentContentBlock = $(this).closest('.content');
    var $slides = $parentContentBlock.find('.content-slide');
    var order = $(this)[0].innerText - 1;

    $('.content_pagination-item').removeClass('active');
    $(this).addClass('active');
    $slides.removeClass('active');
    $($slides[order]).addClass('active');
  });

  $('.ripplelink').each(function() {
    var $this = $(this);

    var ink, d, x, y;

    setInterval(function() {
      if($this.find(".ink").length === 0){
        $this.prepend("<span class='ink'></span>");
      }

      ink = $this.find(".ink");
      ink.removeClass("animate");

      if(!ink.height() && !ink.width()){
        d = Math.max($this.outerWidth(), $this.outerHeight());
        ink.css({height: d, width: d});
      }

      x = Math.round(Math.random()*ink.width() - ink.width()/2);
      y = Math.round(Math.random()*ink.height() - ink.height()/2);
      // y = 0;
      // x = e.pageX - $this.offset().left - ink.width()/2;
      // y = e.pageY - $this.offset().top - ink.height()/2;

      ink.css({top: y+'px', left: x+'px'}).addClass("animate");
    }, 3000)
  });
});
