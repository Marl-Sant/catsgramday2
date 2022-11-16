import { createMainContent } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createMainContent();
};

window.addEventListener("DOMContentLoaded", () => {
    let body = document.body

    const newCatButton = document.createElement("button")
    newCatButton.innerText = "Get a new cat!"
    body.appendChild(newCatButton)
    newCatButton.addEventListener("click", e => {
        let image = document.getElementsByTagName("img")
        image[0].remove()
        let header = document.getElementsByTagName("h1")
        header[0].remove()
        createMainContent()
    })

    const upvoteButton = document.createElement("button")
    const downvoteButton = document.createElement("button")
    body.appendChild(upvoteButton)
    body.appendChild(downvoteButton)
    let upCount = 0
    let downCount = 0
    upvoteButton.innerText = `Likes: ${upCount}`
    downvoteButton.innerText = `Dislikes: ${downCount}`

    upvoteButton.addEventListener("click", (e) => {
        e.preventDefault()
        upvoteButton.innerText = `Likes: ${upCount++}`
    })

    downvoteButton.addEventListener("click", () => {
        downvoteButton.innerText = `Dislikes: ${downCount++}`
    })

    const commentArea = document.createElement("input")
    commentArea.dataset.type = "text"
    const commentSubmit = document.createElement("button")
    commentSubmit.innerText = "Submit"
    const commentTable = document.createElement("ul")
    commentTable.innerText = "COMMENTS"


    body.appendChild(commentArea)
    body.appendChild(commentSubmit)
    body.appendChild(commentTable)

    commentSubmit.addEventListener("click", (e) => {
        e.preventDefault()
        
    })

})
