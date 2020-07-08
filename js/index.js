document.addEventListener("click", e => {
    if(e.target.parentNode.className == "app-title"){
        for(let i = 0; i < e.target.parentNode.children.length; i++){
            if(e.target == e.target.parentNode.children[i]){
                e.target.classList.add('active-type');
            }else{
                e.target.parentNode.children[i].classList.remove('active-type');
            }
        }
    }
});