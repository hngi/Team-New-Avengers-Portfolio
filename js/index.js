function toggleMe(x) {
    // if(x.parentNode.classList[0] == "app-title"){
    //     if(x.parentNode.children[0].className == "active-type"){
    //         x.parentNode.children[0].className = "";
    //         x.parentNode.children[1].className = "active-type";
    //     }else{
    //         x.parentNode.children[1].className = "";
    //         x.parentNode.children[0].className = "active-type";
    //     }
    // }

    if(window.innerWidth <= 768){
        x.classList.toggle("change");
    }
}

document.addEventListener("click", e => {
    if(e.target.parentNode.className == "app-title"){
        if(e.target.parentNode.children[0] == e.target){
            e.target.parentNode.children[1].classList = "";
            e.target.parentNode.children[0].classList = "active-type";
        }else if(e.target.parentNode.children[1] == e.target){
            e.target.parentNode.children[0].classList = "";
            e.target.parentNode.children[1].classList = "active-type";
        }
    }
});