
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick =()=>{
    navbar.classList.toggle("active")
    cartitem.classList.remove("cart-itemsactive")
    serchform.classList.remove("earch-formactive")
}

let cartitem = document.querySelector(".cart-items-container")
document.querySelector("#cart-btn").onclick =()=>{
    cartitem.classList.toggle("cart-itemsactive")
}

let serchform = document.querySelector(".search-form")
document.querySelector("#search-btn").onclick =()=>{
    serchform.classList.toggle("earch-formactive")
}
window.onscroll =()=>{
    navbar.classList.remove("active")
    cartitem.classList.remove("cart-itemsactive")
    serchform.classList.remove("earch-formactive")
}