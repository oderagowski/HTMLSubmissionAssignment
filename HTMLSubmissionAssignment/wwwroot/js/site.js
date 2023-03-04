// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// Animation

myMove = () => {
    const elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 5);
    let direction = 1; // 1 for right-down, -1 for left-up
    function frame() {
        if (pos === 350) {
            direction = -1; // change direction when hitting right or bottom edge
        } else if (pos === 0) {
            direction = 1; // change direction when hitting left or top edge
        }
        pos += direction;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
    }
};

