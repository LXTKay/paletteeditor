const mousePosition = {
  x: 0,
  y: 0,
  update: function (event) {
    window.mousePosition = {};
    window.mousePosition.x = event.clientX;
    window.mousePosition.y = event.clientY;
  }
}

export default mousePosition;