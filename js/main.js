//format the links in the sidebar
document.querySelectorAll(".sidebar ul li a").forEach((link) =>{
    link.addEventListener("click",(e) =>{
        document.querySelector(".sidebar").classList.remove("active");
    })
})


//formath the featured slider
let btns = document.querySelectorAll(".featured .controle i");
let carousel = document.querySelector(".featured .slider");
let firstImg = document.querySelector(".featured .slider .item");
let firstImgWidth = firstImg.clientWidth + 9;

btns.forEach((i)=>{
    i.addEventListener("click",(e)=>{

        e.target.id == "next"? carousel.scrollLeft+= firstImgWidth: carousel.scrollLeft-= firstImgWidth;
    })
})


// format the minu btn for the side bar
document.querySelector(".minu-btn").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("active");
})

//format the active links in the sidebar
let sections = [];
document.querySelectorAll(".sec").forEach((sec,i)=>{
    sections[i] = sec.offsetTop;
});

window.onscroll = ()=>{
    for(let i = 0;i<sections.length;i++){
        if(window.scrollY > sections[i] - 20){
        document.querySelectorAll(".sidebar ul li a").forEach((e)=>{
            e.classList.remove("active");
            
        })
        document.querySelectorAll(".sidebar ul li a")[i].classList.add("active");        
        }
    }
}
//format the projects images
let imgs = ["./img/portfolio_1.jpg","./img/portfolio_2.jpg","./img/portfolio_3.jpg","./img/portfolio_4.jpg","./img/portfolio_5.jpg"];

document.querySelectorAll(".projects .item").forEach((item,i)=>{
    item.style.backgroundImage = `url(${imgs[i]})`;
})

//format the blog section
document.querySelectorAll(".blog .select span").forEach((span,index)=>{
    span.addEventListener("click",()=>{
    document.querySelectorAll(".blog .select span").forEach((e)=>{
        e.classList.remove("active");
    })
    span.classList.add("active");
    document.querySelectorAll(".blog .slide").forEach((slide)=>{
        slide.classList.add("hidden");
        slide.classList.remove("active");
    })
    document.querySelectorAll(".blog .slide")[index].classList.add("active");
    setTimeout(()=>{
        document.querySelectorAll(".blog .slide").forEach((slide)=>{
        slide.classList.remove("hidden");
    })
    },200)
    })
})