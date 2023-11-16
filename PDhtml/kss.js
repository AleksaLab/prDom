class stuuu {
    constructor() {
      this.reddiv();
      this.sred();
      this.whtdiv();
      this.sgre();
      this.sblu();
      this.swht();
      this.sreddd();
      this.syell();
    }
    reddiv() {
      const czer = document.querySelector(".redd");
      czer.style.border = "double #ed1c24 5px";
      czer.style.alignContent = "center";
      czer.style.display = "flex";
      czer.style.flexWarp = "warp";
      czer.style.width = "min-content";
    }
    sred() {
      const sczer = document.querySelectorAll(".sred");
      const lista = Array.from(sczer);
      lista.forEach((el) => {
        el.style.margin = "5px";
        el.style.backgroundColor = "#ed1c24";
        el.style.width = "100px";
        el.style.height = "100px";
      });
    }
  
    whtdiv() {
      const bial = document.querySelector(".whit");
      bial.style.border = "double #bbbbbb 5px";
      bial.style.alignContent = "center";
      bial.style.width = "min-content";
    }
    sgre() {
      const sziel = document.querySelectorAll(".sgre");
      const lista = Array.from(sziel);
      lista.forEach((el) => {
        el.style.margin = "5px";
        el.style.backgroundColor = "#22b14c";
        el.style.width = "320px";
        el.style.height = "100px";
      });
    }
    sblu() {
      const snieb = document.querySelectorAll(".sblue");
      const lista = Array.from(snieb);
      lista.forEach((el) => {
        el.style.margin = "5px";
        el.style.backgroundColor = "#00a2e8";
        el.style.width = "320px";
        el.style.height = "100px";
      });
    }
    swht() {
      const sbial = document.querySelector(".swhit");
      sbial.style.border = "double #bbbbbb 5px";
      sbial.style.alignContent = "center";
      sbial.style.display = "flex";
      sbial.style.flexWarp = "warp";
      sbial.style.width = "min-content";
    }
  
    sreddd() {
      const scz2 = document.querySelectorAll(".sreddddd");
      const lista = Array.from(scz2);
      lista.forEach((el) => {
        el.style.margin = "3px";
        el.style.backgroundColor = "#ed1c24";
        el.style.width = "200px";
        el.style.height = "100px";
      });
    }
    syell() {
      const szol = document.querySelectorAll(".syello");
      const lista = Array.from(szol);
      lista.forEach((el) => {
        el.style.margin = "2px";
        el.style.backgroundColor = "#fff200";
        el.style.width = "120px";
        el.style.height = "100px";
      });
    }
  }
  const stuu = new stuuu();