function Objects(App) {
  var Objects = Objects || {};

  // bgImage
  Objects.bgImageReady = false;
  Objects.bgImage = new Image();
  Objects.bgImage.onload = function () {
    Objects.bgImageReady = true
  };
  Objects.bgImage.src = 'assets/background.png';

  // Spaceship
  Objects.ufoReady = false;
  Objects.ufoImage = new Image();
  Objects.ufoImage.onload = function () {
    Objects.ufoReady = true;
  };
  Objects.ufoImage.src = "assets/ufo.png";

  Objects.ufo = {
    speed: 256,
    x: 0,
    y: 0
  };

  // Cow
  Objects.cowReady = false;
  Objects.cowImage = new Image();
  Objects.cowImage.onload = function () {
    Objects.cowReady = true;
  };
  Objects.cowImage.src = "assets/cow.png";

  Objects.cow = {
    x: 0,
    y: 0
  };

  App.Objects = Objects;
  return Objects;
}
