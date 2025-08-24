// 图片切换 Image switcher code
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

/*
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});
*/

// 个性化欢迎信息 Personalized welcome message code
/*
const userName = prompt("Plz send your name:");
if (userName) {
	const myHeading = document.querySelector("h1");
	myHeading.textContent += `, ${userName}`;
}
*/
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// 本地存储
function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
	  setUserName();
  } else {
	  localStorage.setItem("name", myName);		// 将数据存储在浏览器中并供后续获取
	  // myHeading.textContent = `Mozilla is cool, ${myName}`;
	  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

// 初始化代码
if (!localStorage.getItem("name")) {		// 从浏览器中获取数据
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	// myHeading.textContent = `Mozilla is cool, ${storedName}`;
	myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

// 按钮添加点击事件
myButton.onclick = function () {
	setUserName();
};

/*
myButton.addEventListener("click", () => {
  setUserName();
});
*/
