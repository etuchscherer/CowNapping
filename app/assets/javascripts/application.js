// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require initialize
//= require objects
//= require controls
//= require_tree .

$(document).ready(function() {

var App = Initialize();
Objects(App);
Controls(App);


// Draw everything
var render = function () {
  if (App.Objects.bgImageReady) {
    App.ctx.drawImage(App.Objects.bgImage, 0, 0);
  }

  if (App.Objects.ufoReady) {
    App.ctx.drawImage(App.Objects.ufoImage, App.Objects.ufo.x, App.Objects.ufo.y);
  }

  if (App.Objects.cowReady) {
    App.ctx.drawImage(App.Objects.cowImage, App.Objects.cow.x, App.Objects.cow.y);
  }
};

// The main game loop
var main = function () {
  var now = Date.now();
  var delta = now - then;

  App.Controls.update(delta / 1000);
  render();

  then = now;
};

// Let's play this game!
App.Controls.reset();
var then = Date.now();
setInterval(main, 1); // Execute as fast as possible

});