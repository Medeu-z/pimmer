function getOS() {
    let imgs =  document.querySelectorAll(".os-img");
    let phone =  document.querySelector(".phone-img");
    let userAgent = window.navigator.userAgent,
        platform = navigator.userAgentData.platform,
        iosPlatforms = ['iPhone', 'iPad', 'iPod'];
    if (iosPlatforms.indexOf(platform) !== -1) {
        for (const img of imgs) {
            img.src = "./assets/images/App_Store.svg";
        }
        phone.src = "./assets/images/iphone_13_2.png";
    }else if (/Android/.test(userAgent)) {
        for (const img of imgs) {
            img.src = "./assets/images/Google-Play.svg";
        }
        phone.src = "https://pimmer.io/images/tild6231-3731-4563-b331-643436613362__01_-_google_pixel_5_.png";
    }
}
getOS();
function openCapabilitie(elem){
    let btn = elem.querySelector(".content-header-icon");
    let content = elem.nextElementSibling;
    let c = btn.classList.contains('rotate');
    btn.classList.toggle('rotate', !c);
    btn.classList.toggle('rotateBack', c);
    content.style.maxHeight = !c ? ((content.scrollHeight) + "px") : ("0px");
}
function openContent(elem){
    let contents =  document.querySelectorAll(".content");
    let btn = elem.querySelector(".content-header-icon");
    let openContent = elem.nextElementSibling;
    if(btn.classList.contains('rotateBack')){
        for(let e of contents){
            let e_body = e.querySelector(".content-body");
            let e_btn = e.querySelector(".content-header-icon");

            if(e_body === openContent){
                e_btn.classList.remove("rotateBack");
                e_btn.classList.add("rotate");
                openContent.style.maxHeight = (openContent.scrollHeight) + "px";
            }else{
                e_btn.classList.add("rotateBack");
                e_btn.classList.remove("rotate");
                e_body.style.maxHeight = "0px";

            }
        }
    }else{
        btn.classList.add("rotateBack");
        btn.classList.remove("rotate");
        openContent.style.maxHeight = "0px";
    }

}

function changePage(path){
    let url = '';
    switch(path) {
    case 'contacts':
        url = 'contacts.html';
        break;
    default:
        url = 'home.html';
    }
   // window.location = "/home.html";
    console.log(window.location.href);
    let  pathname = window.location.href;
    const paths = pathname.split("/");
    paths[paths.length - 1] = url;
    pathname = paths.join('/');
    console.log(pathname);

    // window.location.replace(pathname)
    window.location.assign(pathname)
   
    document.location.href = 'index.html/contacts';
    window.location.assign(pathname)

}
// changePage('');