const images=[
  {img:"cc.png",
   fun:"C++",
    text:"Painting for kids",
   text1:"Platform",
   id:1,
  },
  {
     img: "python1.jpeg",
     fun:"python",
     text:"platform for learning python",
     text1:"Platform",
     id:2,
  },
  {
      img: "python2.jpeg",
      fun:"python",
      text:"learning Embedded System(circuits) ",
      text1:"Platform",
      id:3,
  },
  {
      img: "python3.jpeg",
      fun:"python",
      text:"learning Embedded System(components) ",
      text1:"Platform",
      id:4,
  },
  {
      img: "python4.png",
      fun:"python",
      text:"BMI",
      text1:"Game",
      id:5,
  },
  {
      img: "python5.png",
      fun:"python",
      text:"X-o Advanced",
      text1:"Game",
      id:6,
  },
  {
      img: "python6.png",
      fun:"python",
      text:"Password Generator",
      text1:"Game",
      id:7,
  },
  {
      img: "python7.png",
      fun:"python",
      text:"Calculator",
      text1:"Project",
      id:8,
  },
  {
      img: "python8.png",
      fun:"Html",
      text:"Iframe in Html",
      text1:"Project Iframe",
      id:9,
  },
  {
      img: "python9.png",
      fun:"python",
      text:"Table",
      text1:"Project Table",
      id:10,
  },
  {
      img: "python10.png",
      fun:"python",
      text:"X-o beginners",
      text1:"Game",
      id:11,
  },
  {
      img: "python11.png",
      fun:"python",
      text:"Text to Speech",
      text1:"Project Text to Speech",
      id:12,
  },
  {
      img: "python12.png",
      fun:"Html",
      text:"Registration form",
      text1:"Project Html &CSS",
      id:13,
  },
  {
      img: "python13.png",
      fun:"Html",
      text:"Platform",
      text1:"Project web development",
      id:14,
  },
];
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
displayImageItems(images);
displayImageButtons();
});

function displayImageItems(imagesItems) {
let displayImage = imagesItems.map(function (item) {
  return `<article class="image-item">
        <img src=${item.img} class="photo" />
        <div>
          <header class="item-info">
            <h4>${item.text}</h4>
          </header>
          <p class="item-text">
            ${item.text1}
          </p>
        </div>
      </article>`;
});
displayImage = displayImage.join("");
sectionCenter.innerHTML = displayImage;
}

function displayImageButtons() {
const categories = images.reduce(
  function (values, item) {
    if (!values.includes(item.fun)) {
      values.push(item.fun);
    }
    return values;
  },
  ["all"]
);
const categoryBtns = categories
  .map(function (fun) {
    return `<button class="filter-btn" data-id=${fun}>
    ${fun}
    </button>`;
  })
  .join("");
container.innerHTML = categoryBtns;
const filterBtns = container.querySelectorAll(".filter-btn");
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (app) {
    const fun = app.currentTarget.dataset.id;
    const ImageCategory = images.filter(function (ImagesItem) {
      if (ImagesItem.fun === fun) {
        return ImagesItem;
      }
    });
    if (fun === "all") {
      displayImageItems(images);
    } else {
      displayImageItems(ImageCategory);
    }
  });
});
}
document.addEventListener('scroll',()=>{
  const header=document.querySelector('.hdd');
  if(window.scrollY>170)
  {
    header.classList.add('scrolled');
  }
  else{
    header.classList.remove('scrolled');

      
  }

})
