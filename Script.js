var siteWidth = $(window).width();
for (i = 0; i <= 100; i++) {
  var start = $('<div>')
  .addClass('star star_'+i)
  .css({
    top: Math.floor(Math.random()*500),
    left: Math.floor(Math.random()*siteWidth)
  })
  .appendTo('.stars');
}