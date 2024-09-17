const openEl = document.getElementById("openEl");
const closeEl = document.getElementById("closeEl");
const navEl = document.querySelector("nav")

openEl.addEventListener("click", () =>{
    navEl.style.display = "flex";
    openEl.style.display="none";
    closeEl.style.display = "flex";
})

closeEl.addEventListener("click", () =>{
    navEl.style.display = "none";
    openEl.style.display="flex";
    closeEl.style.display = "none";
});

//getting tag elements
const orderBtnEls = document.querySelectorAll("#order-btn");
// console.log(orderBtnEls);
const cartItems =[];

orderBtnEls.forEach((orderBtn) =>{
    orderBtn.addEventListener("click", () =>{
        const parentEl = orderBtn.parentElement;
        // console.log(parentEl);
        const item = {
            image: parentEl.querySelector("img").src,
            price: parentEl.querySelector("#price").innerHTML,
            name: parentEl.querySelector("#name").innerHTML,
            quantity:1,
            id: Date.now() + Math.random(),

        };
        //  cartItems.unshift(item);
        //  console.log(cartItems);
        addItemTocart(item)
    });
});

// const item = {
//     name: "laptop"

// };

function addItemTocart(item){
    const cartItem = JSON.parse(localStorage.getItem("cart-item"))|| [];
    cartItems.unshift(item);

    localStorage.getItem("cart-items", JSON.stringify(cartItems) )
    console.log(cartItem);
   
};