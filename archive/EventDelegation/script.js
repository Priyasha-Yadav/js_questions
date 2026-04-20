const grandparent = document.getElementById("grandparent")
const parent = document.getElementById("parent")
const child = document.getElementById("child")

grandparent.addEventListener('click', (event) => {
    console.log("GrandParent Called!")
    // console.log(event.target)
    // console.log(event.currentTarget)
}, true)


parent.addEventListener('click', (event) => {
    console.log("Parent Called!")
    // console.log(event.target)
    // console.log(event.currentTarget)
}, true)


child.addEventListener('click', (event) => {
    console.log("Child Called!")
    // console.log(event.target)
    // console.log(event.currentTarget)
    // event.stopPropagation();

}, true)