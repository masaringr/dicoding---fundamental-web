//ambil url
let pathurl = window.location.pathname.split('/')
// let hostname = window.location.hostname

//set icon & link home by url 
let iconhome = document.getElementById("icon-home")
let linkhome = document.getElementById("link-home")

if (pathurl[pathurl.length-1] === 'index.html') {
    iconhome.setAttribute("src", "./img/icons/home-active.png");
    linkhome.setAttribute("class", "active")
} else {
    iconhome.setAttribute("src", "./img/icons/home.png");
}

//set icon profile by url
let iconprofile = document.getElementById("icon-profile")
let linkprofile = document.getElementById("link-profile")

if (pathurl[pathurl.length-1] === 'profile.html') {
    iconprofile.setAttribute("src", "./img/icons/user-active.png");
    linkprofile.setAttribute("class", "active")
} else {
    iconprofile.setAttribute("src", "./img/icons/user.png");
}

//fungsi panggil page
function openpage(params) {
    if (params === 1){
        location.href = "index.html";
    } else if (params === 2) {
        location.href = "profile.html";
    }
}

//fungsi open social media with new tab
function opensocial(params) {
    if (params === 1) {
        window.open(
            "https://twitter.com/ari_ngr",
            "_blank"
        );
    } else if (params === 2) {
        window.open(
            "https://github.com/Aringr",
            "_blank"
        );
    } else if (params === 3) {
        window.open(
            "https://www.instagram.com/aringr",
            "_blank"
        );
    }
}