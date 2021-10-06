class Scroll {
  constructor(obj) {
    if (typeof obj.el == `string`) {
      this.el = document.querySelector(".header__center");
    } else if (obj.el instanceof HTMLElement) {
      this.el = obj.el;
    }
    this.el.style.position = "fixed";
    this.scroll();
    window.addEventListener("scroll", () => this.scroll());
    window.addEventListener("resize", () => this.scroll());
  }
  scroll() {
    // console.log(window.innerHeight);
    console.log(scrollY);
    // if (window.innerHeight  - window.scrollY >= 0) {
    //     this.el.style.top = window.innerHeight - this.el.clientHeight - window.scrollY + 'px'
    // } else {
    //     this.el.style.top = 0
    // } 44 < 0
    if (this.el.offsetTop < scrollY) {
      this.el.style.position = "fixed";
      this.el.style.top = 0;
    } else {
      this.el.style.position = "static";
    }
  }
}
const scroll = new Scroll({
  el: ".header__center",
});

class TEXT {
  constructor(obj) {
    this.el = document.querySelector(obj.el);
    this.text = this.el.innerHTML;
    this.el.innerHTML = "";
    this.str();
  }
  str(i = 0) {
    this.el.innerHTML += this.text[i];
    i++;
    if (i < this.text.length) {
      setTimeout(() => {
        this.str(i);
      }, 100);
    }
  }
}
const text = new TEXT({
  el: ".bottom-box a",
});
const text2 = new TEXT({
  el: ".bottom-box h2",
});
const text3 = new TEXT({
  el: ".cotalog__left h2"
});
const text4 = new TEXT({
  el: ".cotalog__img-title h3"
});
const text5 = new TEXT({
  el: ".collaction__right h3"
});
const text6 = new TEXT({
  el: ".main__center h3"
});



document.querySelector('.burger-button').addEventListener('click', () => {
  
document.querySelector('.center__list').classList.toggle('active');
})