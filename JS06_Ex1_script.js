// JS-06 DOM Manipulation
// Exercise #1


const body = document.body
const div = document.createElement("div")

const text = document.createElement("p")
text.setAttribute("id","text")
body.appendChild(text)
text.innerText="JavaScript Exercises #1"

body.append(div)

const btn = document.createElement("button")
btn.innerText = "Style"
btn.setAttribute("id","jsstyle")
btn.setAttribute("onclick","js_style()")
div.appendChild(btn)

btn.addEventListener("click", (e) => {
    text.classList.add("textStyle")
})