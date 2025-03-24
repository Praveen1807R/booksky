var a=document.getElementById("popup-button")
var popupoverlay=document.querySelector(".popupoverlay")
var popupbox=document.querySelector(".popupbox")
a.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var b=document.getElementById("cancel-popup")
b.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container")
var addpopup=document.getElementById("add-popup")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdescription=document.getElementById("book-description")
addpopup.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML= `<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletee(event)">Delete</button>`
    container.append(div)
    
})

function deletee(event){
    event.target.parentElement.remove()
}


