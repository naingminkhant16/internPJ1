const scrollBtn = document.querySelector("#upArrow");
// navbar and scrollTop 
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            //add nav shadow
            document.getElementById('navbar_top').classList.add("add-shadow");
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            // remove padding top from body
            document.body.style.paddingTop = '0';
            //remove nav shadow
            document.getElementById('navbar_top').classList.remove("add-shadow");
        }
        scrollTopbtn();
    });
});
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("hi");
})

function scrollTopbtn() {
    if (document.documentElement.scrollTop <= 150) {
        scrollBtn.style.display = 'none';
    } else {
        scrollBtn.style.display = 'block';
    }
}