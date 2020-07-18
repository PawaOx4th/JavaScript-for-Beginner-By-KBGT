/* DOM Manipulation*/

/* 

document.querySelector() = เอา tag มาใช้
document.getElementById() = เอา ID มาใช้
document.createElement() = สร้าง element
document.appendChild() = สร้ง element ต่อจาก element ก่อนหน้า (Root => Child)

*/

function appendImageElem(keyword, index) {
  const imgElem = document.createElement("img");
  imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig${index}`;

  const galleryElem = document.querySelector(".gallery");
  galleryElem.appendChild(imgElem);
}

function run() {
  for (let i = 0; i <= 9; i++) {
      appendImageElem("cat", i);
      
  }
}

run();
