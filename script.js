var panels = document.querySelectorAll(".panel");

panels.forEach( panel => {
    panel.addEventListener("click", () => {
        activeClassList()
        panel.classList.add('active')
    })
})


function activeClassList(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}