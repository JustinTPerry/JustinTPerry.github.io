let openButton = document.getElementById("open-modal")

openButton.addEventListener("click", function openModal(event){
    document.getElementById("modal").style.display = "block";
})


let closeButton = document.getElementById("close")

closeButton.addEventListener("click", function closeModal(event) {
    document.getElementById("modal").style.display = "none";
})