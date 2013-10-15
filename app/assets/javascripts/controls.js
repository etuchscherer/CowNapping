function Controls(App) {

  var Controls = Controls || {};
  // Player Input
  Controls.keysDown = {};

  addEventListener("keydown", function (e) {
    Controls.keysDown[e.keyCode] = true;
  }, false);

  addEventListener("keyup", function (e) {
    delete Controls.keysDown[e.keyCode];
  }, false);

  // Start with the ship in the middle of the screen
  Controls.reset = function () {
    App.Objects.ufo.x = App.canvas.width / 2;
    App.Objects.ufo.y = App.canvas.height / 2;

    App.Objects.cow.x = App.canvas.width / 2;
    App.Objects.cow.y = App.canvas.height - 50;
  };
  // Update object poition
  Controls.update = function (modifier) {
    if (38 in Controls.keysDown) { // Player holding up
      if (App.Objects.ufo.y >= App.Config.ceiling)  {
        App.Objects.ufo.y -= App.Objects.ufo.speed * modifier;
      }
    }
    if (40 in Controls.keysDown) { // Player holding down
      if (App.Objects.ufo.y <= App.Config.floor) {
        App.Objects.ufo.y += App.Objects.ufo.speed * modifier;
      }
    }
    if (37 in Controls.keysDown) { // Player holding left
      if (App.Objects.ufo.x >= App.Config.left_border) {
        App.Objects.ufo.x -= App.Objects.ufo.speed * modifier;
      }
    }
    if (39 in Controls.keysDown) { // Player holding right
      if (App.Objects.ufo.x <= App.Config.right_border) {
        App.Objects.ufo.x += App.Objects.ufo.speed * modifier;
      }
    }
  };

  App.Controls = Controls;
  return Controls;
}