window.addEventListener("load" ,() => {
    let düğme = document.getElementById("flexSwitchCheckDefault");

    düğme.addEventListener("click",(e) => {
        console.log(e.target.value);
        e.target.toggleAttribute("checked");
        if (düğme.hasAttribute("checked")) {
            document.querySelector("body").style.backgroundColor="black";
        }else {
            document.querySelector("body").style.backgroundColor="white";
        }
    })
})

