function openCapabilitie(elem){
    let btn = elem.querySelector(".content-header-icon");
    let content = elem.nextElementSibling;
    let c = btn.classList.contains('rotate');
    btn.classList.toggle('rotate', !c);
    btn.classList.toggle('rotateBack', c);
    content.style.maxHeight = !c ? ((content.scrollHeight) + "px") : ("0px");
}
function openContent(elem){
    let contents =  document.querySelectorAll(".content")
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
   }

}
