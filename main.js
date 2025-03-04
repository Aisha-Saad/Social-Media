const menuItems = document.querySelectorAll(".menu-item");

const messagesNotifiction = document.getElementById("msg-notication");
const messages = document.querySelector(".messages");
const message = document.querySelector(".message");
const messageSearch = document.querySelector("#message-search");

const them = document.getElementById("them");
const themModel = document.querySelector(".customiz-them");
const fontSize=document.querySelectorAll('.choose-size span')

var root =document.querySelector(':root')
const ColorPalette=document.querySelectorAll('.choose-color span')


const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.add("active");
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notication") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector("#notication .notication-count").style.display =
        "none";
    }
  });
});

// messages

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();

  const arr = Array.from(message)
  arr.forEach((chat) => {
    let name = chat.querySelectorAll("h5").textContent.toLowerCase();
    if (name.indexOf(val) !== -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
      
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

messagesNotifiction.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotifiction.querySelector(".notication-count").style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

const openThemModel = () => {
  themModel.style.display = "grid";
};
const closeThemModel = (e) => {
  if (e.target.classList.contains("customiz-them")) {
    themModel.style.display = "none";
  }
};
themModel.addEventListener("click", closeThemModel);

them.addEventListener("click", openThemModel);
//remove active class
const removeSize=()=>{
  fontSize.forEach(size =>{
    size.classList.remove('active')
  })
}

// FONY SIZE
fontSize.forEach(size =>{
  
  size.addEventListener('click',()=>{
  removeSize()
  let fontSize
  size.classList.toggle('active')


  if(size.classList.contains('font-size-1')){
    fontSize='10px'
    root.style.setProperty('----sticky-top-left',"5.4rem")
    root.style.setProperty('----sticky-top-right',"5.4rem")
  
  }else if(size.classList.contains('font-size-2')){
    fontSize='13px'
    root.style.setProperty('----sticky-top-left',"5.4rem")
    root.style.setProperty('----sticky-top-right',"-7rem")
    
   }else if(size.classList.contains('font-size-3')){
    fontSize='16px'
    root.style.setProperty('----sticky-top-left',"-2rem")
    root.style.setProperty('----sticky-top-right',"-17rem")
    
  }else if(size.classList.contains('font-size-4')){
    fontSize='19px'
    root.style.setProperty('----sticky-top-left',"-5rem")
    root.style.setProperty('----sticky-top-right',"-25rem")
    
  }else if(size.classList.contains('font-size-5')){
    fontSize='22px'
    root.style.setProperty('----sticky-top-left',"-12rem")
    root.style.setProperty('----sticky-top-right',"-35rem")
  }

  
  //change font size of the root html element
  document.querySelector('html').style.fontSize=fontSize
  })

})
//remove active color
const changeActiveColor=()=>{
  ColorPalette.forEach(ColorPalette =>{
    ColorPalette.classList.remove('active')
  })
}

//chage color

ColorPalette.forEach(color =>{
  color.addEventListener('click', ()=>{
    let primary
    changeActiveColor()
    if(color.classList.contains('color-1')){
      primaryHue=252
    }else if(color.classList.contains('color-2')){
      primaryHue=52
    }else if(color.classList.contains('color-3')){
      primaryHue=352
    }else if(color.classList.contains('color-4')){
      primaryHue=152
    }else if(color.classList.contains('color-5')){
      primaryHue=202
    }
    color.classList.add('active')
    root.style.setProperty('--primary-color-hue', primaryHue)
  })
})