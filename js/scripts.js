jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});


jQuery(document).ready(function () {

    $(function () {
        for (var nk = window.location,
            o = $(".menu a, .settings-menu a").filter(function () {
                return this.href == nk;
            })
                .addClass("active")
                .parent()
                .addClass("active"); ;) {
            // console.log(o)
            if (!o.is("li")) break;
            o = o.parent()
                .addClass("show")
                .parent()
                .addClass("active");
        }

    });

    var html = "";
    fetch("/data/game.json").then(response => response.json())
    .then(data => {
        
        data.forEach(item => {
            var img = item.slug;
            if(item.img){
                img = item.img;
            }
            var html = `<div class="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <div class="card items">
            <div class="card-body">
                <div class="items-img position-relative">
                <img src="/images/game/${img}.png" class="img-fluid rounded mb-3" alt="${item.title}" style="min-height:170px">
                </div>
                <h4 class="card-title">${item.title}</h4>
                <p></p>

                <div class="d-flex justify-content-center mt-3">
                <a href="/${item.slug}.html" class="btn btn-primary">Play</a>
                </div>
            </div>
            </div>
        </div>`;
        $('#list-game').append(html);
        })
    });

});


(function () {
    let onpageLoad = localStorage.getItem("theme") || "";
    let element = document.body;
    element.classList.add(onpageLoad);
    // document.getElementById("theme").textContent =
    //     localStorage.getItem("theme") || "light";
    
})();

function themeToggle() {
    let element = document.body;
    element.classList.toggle("dark-theme");

    let theme = localStorage.getItem("theme");
    if (theme && theme === "dark-theme") {
        localStorage.setItem("theme", "");
    } else {
        localStorage.setItem("theme", "dark-theme");
    }
}










//ripple effect on button
Waves.init();
Waves.attach('.wave-effect');
Waves.attach('.btn');
Waves.attach('button');