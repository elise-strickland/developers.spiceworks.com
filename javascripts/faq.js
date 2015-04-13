(function() {
  (function($) {
    return developers['how-it-works'] = {
      faq: {
        init: function() {
          return $('.faq').children('li').click(function() {
            return $(this).toggleClass('on');
          });
        }
      }
    };
  })(jQuery);

}).call(this);
