// this function will be called once the page loads completely.
function pageLoaded() {
    // get a handle to the canvas object
    var canvas = document.getElementById('testcanvas');

    // get the 2d context for this canvas
    var context = canvas.getContext('2d');

    // drawing a filled rectangles

    // draw a solid square with width/height of 100px at (200, 10)
    context.fillRect(200, 10, 100, 100);

    // draw a solid square with width of 90px and height of 30px at (50, 70)
    context.fillRect(50, 70, 90, 30);


    // Stroked Rectangles

    // draw a rectangular outline with width/height of 50px at (110, 10)
    context.strokeRect(100, 10, 50, 50);
    context.strokeRect(30, 10, 50, 50);
    
    // clearing rectangles
    context.clearRect(210, 20, 30, 20);
    context.clearRect(260, 20, 30, 20);
    

    // draw complex shapes 
    context.beginPath();
    context.moveTo(10, 120);   
    context.lineTo(10, 180);
    context.lineTo(110, 150);
    context.fill(); 
}