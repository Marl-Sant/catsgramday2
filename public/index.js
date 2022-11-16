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
        count = 0
        upvoteButton.innerText = `Upvote`
        downvoteButton.innerText = `Downvote`
        popularity.innerText = `Popularity Score: ${count}`
        const newList = document.querySelectorAll("li")
        newList.forEach(li => {
            li.remove()
        })

    })

    const upvoteButton = document.createElement("button")
    const downvoteButton = document.createElement("button")
    body.appendChild(upvoteButton)
    body.appendChild(downvoteButton)
    let count = 0
    upvoteButton.innerText = `Upvote`
    downvoteButton.innerText = `Downvote`

    upvoteButton.addEventListener("click", (e) => {
        e.preventDefault()
        popularity.innerText = `Popularity Score: ${++count}`
    })

    downvoteButton.addEventListener("click", () => {
        popularity.innerText = `Popularity Score: ${--count}`
    })

    const commentArea = document.createElement("input")
    commentArea.dataset.type = "text"
    commentArea.setAttribute("id", "comment-box")
    commentArea.setAttribute("placeholder", "Comment here!")
    const commentSubmit = document.createElement("button")
    commentSubmit.innerText = "Submit"
    const commentTable = document.createElement("ul")
    commentTable.setAttribute("id", "comments")
    const popularity = document.createElement("h3")
    popularity.setAttribute("id", "popularity-count")
    popularity.innerText = `Popularity Score: ${count}`

    body.append(popularity)
    body.appendChild(commentArea)
    body.appendChild(commentSubmit)
    body.appendChild(commentTable)

    commentSubmit.addEventListener("click", (e) => {
        e.preventDefault()
        let newComment = document.createElement("li")
        commentTable.appendChild(newComment)

        const commentBox = document.getElementById("comment-box").value

        newComment.innerText = `${commentBox}`
        commentArea.value = ""
    })

})
