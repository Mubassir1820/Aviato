const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");
const contentContainer = document.getElementById("contentContainer")
const contentSpanElement = document.querySelector("#contentContainer span")
const contentH1Element = document.querySelector("#contentContainer h1")
const contentButtonElement = document.querySelector("#contentContainer Button")

console.log(contentH1Element)
console.log(contentSpanElement)
console.log(contentButtonElement)

nextBtn.addEventListener("click", function() {
    // console.log("Next Btn has been clicked");
    contentSpanElement.innerText = "Products Next"
    contentH1Element.innerText = "The beauty of nature is hidden in details Next"
    contentButtonElement.innerText = "Shop Now Next"
    contentContainer.style.backgroundImage = "url(https://images.pexels.com/photos/28078490/pexels-photo-28078490/free-photo-of-st-peter-s-church.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)";
})
previousBtn.addEventListener("click", function() {
    // console.log("Previous Btn has been clicked");
    contentSpanElement.innerText = "Products previous"
    contentH1Element.innerText = "The beauty of nature is hidden in details previous"
    contentButtonElement.innerText = "Shop Now previous"
    contentContainer.style.backgroundImage = "url(https://images.pexels.com/photos/27962172/pexels-photo-27962172/free-photo-of-a-grassy-hillside-with-a-mountain-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"

})