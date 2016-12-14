//插件模块化
// SuperSlide
var Slide = {
  init: function (e,op) {
    require(['jquery', 'js/jquery.SuperSlide.2.1.1'], function ($, slide) {
      $(e).slide(op);
    })
  }
}

// Pikaday
var Datepicker = {
  init: function (op) {
    require(['pikaday/pikaday'], function (Pikaday) {
      var picker = new Pikaday(op);
    })
  }
}


exports.Slide = Slide;
exports.Datepicker = Datepicker;
