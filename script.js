let products = {
    data: [{
            productName: "White T-Shirt",
            catagory: "shirts",
            price: "400",
            image: "https://media.istockphoto.com/id/482948743/photo/blank-white-t-shirt-front-with-clipping-path.webp?b=1&s=170667a&w=0&k=20&c=0ZVjmNfhpgTmkvGZk2Um2UnZEdTT14rcUsQeTBmhuWA="
        },
        {
            productName: "black T-Shirt",
            catagory: "shirts",
            price: "400",
            image: "https://media.istockphoto.com/id/483960103/photo/blank-black-t-shirt-front-with-clipping-path.webp?s=612x612&w=is&k=20&c=c78F8vXl8aDAH_Oxfp6UM2ytUw5qXGp_As0Q_TUpxOU="
        },
        {
            productName: "black Pant",
            catagory: "Pants",
            price: "500",
            image: "https://media.istockphoto.com/id/1440041986/photo/black-pants-isolated-in-white-background-invisible-mannequin.webp?s=612x612&w=is&k=20&c=_ffR8UL0O1xA1K4GyCiIAyfVrGL9aGU7aur-VChmf1I="
        },
        {
            productName: "White T-Shirt",
            catagory: "Pants",
            price: "500",
            image: "https://media.istockphoto.com/id/1281298019/photo/blank-white-sport-pants-mockup-front-and-back-view.jpg?s=612x612&w=0&k=20&c=aDX_m4Pv6MMqncePVBbC_-JZhe4Lm7oOwCi8LoRF-PE="
        },
        {
            productName: "Watch",
            catagory: "Watches",
            price: "1000",
            image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            productName: "shoes",
            catagory: "shoes",
            price: "1500",
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
    ]
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.catagory, "hide");

    let imagecont = document.createElement("div");
    imagecont.classList.add("image-container");

    let image = document.createElement("img")
    image.setAttribute("src", i.image);
    imagecont.appendChild(image);
    card.appendChild(imagecont);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h2");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h3");
    price.innerText = i.price;
    container.appendChild(price);

    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    })

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            if (element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    })
}

document.getElementById("search-button").addEventListener("click", () => {
    let searchInput = document.getElementById("searching").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    })


})
window.onload = () => {
    filterProduct("all");
}
