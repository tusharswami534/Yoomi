const navmenu = () => {
    document.getElementById("mobile-view").classList.toggle("max-md:top-0");
    document.getElementById("mobile-view").classList.toggle("max-md:right-0");
    document.getElementById("nav-line").classList.toggle("rotate-45");
    document.getElementById("nav-line").classList.toggle("after:rotate-90");
    document.getElementById("nav-line-out-side").classList.toggle("translate-x-6");
    document.getElementById("nav-line-out-side-1").classList.toggle("translate-x-6");
    document.body.classList.toggle("overflow-hidden");}