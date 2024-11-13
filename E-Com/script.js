document.addEventListener("mousemove", function (e) {
  var follower = document.getElementById("follower");
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  // Calculate the center position of the screen
  var centerX = windowWidth / 2;
  var centerY = windowHeight / 2;

  // Calculate the offset from the center
  var offsetX = (centerX - e.pageX) * 0.05; // Scale down the movement
  var offsetY = (centerY - e.pageY) * 0.05; // Scale down the movement

  // Limit the movement to a range of 10-20px
  offsetX = Math.min(20, Math.max(-20, offsetX));
  offsetY = Math.min(20, Math.max(-20, offsetY));

  follower.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
