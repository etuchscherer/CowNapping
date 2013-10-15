function Initialize() {
  var App = App || {};
  var Config = Config || {};

  App.canvas = document.createElement("canvas");
  App.ctx = App.canvas.getContext("2d");
  App.canvas.width = 640;
  App.canvas.height = 480;
  document.body.appendChild(App.canvas);

  Config.ceiling = 0;
  Config.floor   = 380;
  Config.left_border = 0;
  Config.right_border = 600; // bgWidth - ufoWidth

  App.Config = Config;
  return App;
}
