jQuery(window).on("load", function () {
    $('#preloader').fadeOut(500);
    $('#main-wrapper').addClass('show');
});


jQuery(document).ready(function () {

    $(function () {
        loadGA();
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
// Waves.init();
// Waves.attach('.wave-effect');
// Waves.attach('.btn');
// Waves.attach('button');


function loadGA(){
    
    var  r = document.createElement("script");
  r.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-G53ZKZ3BQY"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'G-G53ZKZ3BQY');
  
    },document.head.appendChild(r);
    
}
window.addEventListener('load', function() {
      loadGA();
      console.log(window.location.href.indexOf("localhost"));
    if(window.location.href.indexOf("localhost") == -1 && window.location.href.indexOf("127.0.0.1") == -1){
      
       
    }
    
})
window.alert = {};  