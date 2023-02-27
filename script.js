const navbar = document.querySelector('.nav');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu');
const menuClose = document.querySelector('.close');

const btnViibale = ()=>{   
    navbar.style.visibility = "visible";
    menuClose.style.display = "block" ;
}

const btnClose = ()=>{   
    navbar.style.visibility = "hidden";
    menuClose.style.display = "none";
}
menuClose.addEventListener('click', btnClose);
menuBtn.addEventListener('click', btnViibale);

const navHeight = header.getBoundingClientRect().height;  // calculate height

const stickyNav = function(entries){
    const [entry] = entries;
    // console.log(entry);
  
    if(!entry.isIntersecting) header.classList.add('sticky');

    else navbar.classList.remove('sticky');
  };
  
  const headObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: null,
    // rootMargin: '-90px', call culate height and use it 
    rootMargin: `${navHeight}px`, // this method not calculate because javascitp calculated heigt
  });
  
  // call a function 
  headObserver.observe(header);