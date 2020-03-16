if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var F$ = document.querySelector.bind(document);
    var $on = document.addEventListener.bind(document);

    var xmouse, ymouse;
    $on('mousemove', function (e) {
     xmouse = e.clientX || e.pageX;
     ymouse = e.clientY || e.pageY;
 });

    var ball = F$('#ball');
    var x = void 0,
    y = void 0,
    dx = void 0,
    dy = void 0,
    tx = 0,
    ty = 0,
    key = -1;

    var followMouse = function followMouse() {
     key = requestAnimationFrame(followMouse);

     if(!x || !y) {
      x = xmouse;
      y = ymouse;
  } else {
      dx = (xmouse - x) * 0.125;
      dy = (ymouse - y) * 0.125;
      if(Math.abs(dx) + Math.abs(dy) < 0.1) {
       x = xmouse;
       y = ymouse;
   } else {
       x += dx;
       y += dy;
   }
}
ball.style.left = x + 'px';
ball.style.top = y + 'px';
};


$("a, .btn, textarea, input, label").on({
    mouseenter: function() {
        $("#ball").css({
            'transition': 'transform .3s',
            'transform': 'scale(0.5)',
            'border-color': 'transparent',
            'background': 'rgba(0,0,0,0.4)'
        });
    },
    mouseleave: function() {
        $("#ball").css({
            'borderColor': '#eee',
            'transform': 'scale(1)',
            'border-color': '#fff',
            'background': "none"
        });
    }
});

$(".control-button, .bl-icon-close, .off-icon, modal-close").on({
    mouseenter: function() {
        $("#ball").css({
            'transition': 'transform .3s',
            'transform-origin': '36px 36px',
            'border-width': '1px',
            'transform': 'scale(1.8)'
        });
    },
    mouseleave: function() {
        $("#ball").css({
            'border-width': '2px',
            'transform': 'scale(1)'
        });
    }
});

$(".services_img").on({
    mouseenter: function() {
        $("#ball").addClass("dragImgIcon");
    },
    mouseleave: function() {
        $("#ball").removeClass("dragImgIcon");
    }
});
} else {
  $("#ball").css({
    'visibility': 'hidden!important'
  })
}