
function getApiImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        document.getElementById("container").innerHTML = `
        <img src=${data.message} />
        <button id="fetch">Fetch New Image</button>
        `
        document.getElementById("fetch").addEventListener("click", getApiImage)
    })
}

getApiImage()

