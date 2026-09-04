//Image switcher
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat_sticker.jpg") {
    myImage.setAttribute("src", "images/war_cat.jpg");
  } else {
    myImage.setAttribute("src", "images/cat_sticker.jpg");
  }
});

// --- Personalized Welcome Message ---
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName(); // Prompt again if input is null or empty
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

// Initialization check
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// Button event listener
myButton.addEventListener("click", () => {
  setUserName();
});
