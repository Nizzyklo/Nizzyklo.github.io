var navbar = document.getElementById("navbar");

onscroll = function() {
    if (document.body.scrollTop > 200) {
        navbar.style.top = "0"
    }
    else {
        navbar.style.top = "2em"
    }
}
