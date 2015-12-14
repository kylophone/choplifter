function loadSVG() {
  var request = new XMLHttpRequest();
  request.open('GET', './lander.svg', true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      document.getElementById("viewport").innerHTML = request.responseText;
      document.getElementById("svg").setAttribute("height", window.innerHeight);
      document.getElementById("svg").setAttribute("width", window.innerWidth);

      var CHOPLIFTER = choplifter_init();

      window.onresize = function() {
        document.getElementById("svg").setAttribute("height", window.innerHeight);
        document.getElementById("svg").setAttribute("width", window.innerWidth);
      };

      choplifter(CHOPLIFTER);
    } else {
      document.getElementById("viewport").innerHTML = "Error: Couldn't load SVG.";
    }
  };
  request.send();
};
