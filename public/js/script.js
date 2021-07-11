const sectionMenu = document.querySelector(".sectionMenu"),
  wrap = document.querySelector(".wrap"),
  header = document.querySelector("header");
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("bg-menu-line")) {
    sectionMenu.style.left = "0";
    wrap.style.left = "100%";
    header.style.left = "100%";
  } else if (e.target.alt === "close.svg") {
    sectionMenu.style.left = "-100%";
    wrap.style.left = "0";
    header.style.left = "0";
  }
});

window.addEventListener("scroll", () => {
  if (scrollY >= 50) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0, 0.25)";
    header.style.marginTop = "0";
    header.style.top = "0";
    document.querySelector(".menu").style.transform = "translateY(-110px)";
  } else {
    header.style.marginTop = "32px";
    header.style.top = "inherit";
    header.style.boxShadow = "none";
    document.querySelector(".menu").style.transform = "translateY(0)";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    sectionMenu.style.left = "-100%";
    wrap.style.left = "0";
    header.style.left = "0";
  }
});

const cards = document.querySelectorAll("figure"),
  imageBanner = document.getElementById("banner-img"),
  arrowPrev = document.getElementById("prev"),
  arrowNext = document.getElementById("next");

function selectCarPrev() {
  if (cards[1].classList.contains("active-car")) {
    cards[1].classList.remove("active-car");
    cards[0].classList.add("active-car");
    imageBanner.src = cards[0].children[0].src;
    arrowPrev.style.visibility = "hidden";
  } else if (cards[2].classList.contains("active-car")) {
    cards[2].classList.remove("active-car");
    cards[1].classList.add("active-car");
    imageBanner.src = cards[1].children[0].src;
  } else if (cards[3].classList.contains("active-car")) {
    cards[3].classList.remove("active-car");
    cards[2].classList.add("active-car");
    imageBanner.src = cards[2].children[0].src;
  }
}

function selectCarActivePrev() {
  if (cards[0].classList.contains("active-car")) {
    cards[0].classList.remove("-ml-80");
  } else if (cards[1].classList.contains("active-car")) {
    cards[1].classList.remove("-ml-80");
  } else if (cards[2].classList.contains("active-car")) {
    cards[2].classList.remove("-ml-80");
  }
}

arrowPrev.addEventListener("click", () => {
  arrowNext.style.visibility = "visible";

  selectCarPrev();
  selectCarActivePrev();

  imageBanner.classList.add("move");
  setTimeout(() => imageBanner.classList.remove("move"), 500);
});

function selectCarNext() {
  if (cards[0].classList.contains("active-car")) {
    cards[0].classList.remove("active-car");
    cards[1].classList.add("active-car");
    imageBanner.src = cards[1].children[0].src;
  } else if (cards[1].classList.contains("active-car")) {
    cards[1].classList.remove("active-car");
    cards[2].classList.add("active-car");
    imageBanner.src = cards[2].children[0].src;
  } else if (cards[2].classList.contains("active-car")) {
    cards[2].classList.remove("active-car");
    cards[3].classList.add("active-car");
    imageBanner.src = cards[3].children[0].src;
    arrowNext.style.visibility = "hidden";
  }
}

function selectCarActiveNext() {
  if (cards[1].classList.contains("active-car")) {
    cards[0].classList.add("-ml-80");
  } else if (cards[2].classList.contains("active-car")) {
    cards[1].classList.add("-ml-80");
  } else if (cards[3].classList.contains("active-car")) {
    cards[2].classList.add("-ml-80");
  }
}

arrowNext.addEventListener("click", () => {
  arrowPrev.style.visibility = "visible";

  selectCarNext();
  selectCarActiveNext();

  imageBanner.classList.add("move");
  setTimeout(() => imageBanner.classList.remove("move"), 500);
});

const notification = document.getElementById("notifikasi");

const selectCarsValue = document.getElementById("listCars");
function compareSelectCar() {
  if (selectCarsValue.value === "Ferrari 458 Italia" || selectCarsValue.value === "Ford Mustang GT" || selectCarsValue.value === "Porsche 911" || selectCarsValue.value === "Mercedes Benz") {
  } else {
    notification.classList.remove("scale-0");
    notification.classList.remove("opacity-0");
    notification.classList.add("fadeIn");
    if (selectCarsValue.value === "Ferrari 458 Italia " || selectCarsValue.value === "Ford Mustang GT " || selectCarsValue.value === "Porsche 911 " || selectCarsValue.value === "Mercedes Benz ") {
      document.getElementById("selectCarLost").classList.remove("hidden");
      document.getElementById("selectCarLost").innerHTML = 'Hilangkan spasi di akhir kalimat<sup class="text-red-400">*</sup>';
    } else {
      document.getElementById("selectCarLost").classList.remove("hidden");
      document.getElementById("selectCarLost").innerHTML = 'Pilihan mobil harus sesuai<sup class="text-red-400">*</sup>';
    }
  }
}

const inputPhone = document.getElementById("phone");
const sisaKarakter = document.getElementById("sisaKarakter");
inputPhone.addEventListener("input", () => {
  sisaKarakter.parentElement.classList.remove("opacity-0");
  const totalKarakter = 12 - inputPhone.value.length;
  sisaKarakter.innerText = totalKarakter;
  if (inputPhone.value.length === 0) {
    sisaKarakter.parentElement.classList.add("opacity-0");
  } else if (totalKarakter <= 5) {
    sisaKarakter.parentElement.classList.remove("text-green-500");
    sisaKarakter.parentElement.classList.add("text-red-500");
  } else {
    sisaKarakter.parentElement.classList.add("text-green-500");
    sisaKarakter.parentElement.classList.remove("text-red-500");
  }

  if (inputPhone.value.length > 12) {
    document.getElementById("phoneLost").classList.remove("hidden");
    notification.classList.remove("scale-0");
    notification.classList.remove("opacity-0");
    notification.classList.add("fadeIn");
  } else {
    document.getElementById("phoneLost").classList.add("hidden");
  }
});

const message = document.getElementById("pesanInput");
message.addEventListener("input", () => {
  const sisaKarakterPesan = document.getElementById("sisaKarakterPesan");
  sisaKarakterPesan.parentElement.classList.remove("opacity-0");
  totalSisaKarakterPesan = 200 - message.value.length;
  sisaKarakterPesan.innerText = totalSisaKarakterPesan;
  if (message.value.length >= 150) {
    sisaKarakterPesan.parentElement.classList.replace("text-green-500", "text-red-500");
  } else if (message.value.length === 0) {
    sisaKarakterPesan.parentElement.classList.add("opacity-0");
  } else {
    sisaKarakterPesan.parentElement.classList.replace("text-red-500", "text-green-500");
  }
});

function sendData() {
  return false;
}

const form = document.querySelector("form");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
form.addEventListener("submit", () => {
  if (inputPhone.value !== "" && inputPhone.value.length < 12) {
    document.getElementById("phoneLost").classList.remove("hidden");
    document.getElementById("phoneLost").innerHTML = `Nomor telepon harus 12 digit: 08xxx<sup class="text-red-400">*</sup>`;
    notification.classList.remove("scale-0");
    notification.classList.remove("opacity-0");
    notification.classList.add("fadeIn");
  } else if (selectCarsValue.value === "Ferrari 458 Italia" || selectCarsValue.value === "Ford Mustang GT" || selectCarsValue.value === "Porsche 911" || selectCarsValue.value === "Mercedes Benz" || inputPhone.value.length === 12) {
    const btnSubmit = document.getElementById("submit");
    const formData = document.getElementById("success");
    btnSubmit.innerHTML = `<img src="assets/icons/loader-4-line.svg" alt="loader.svg" />`;

    document.getElementById("nameSuccess").innerText = inputName.value;
    document.getElementById("emailSuccess").innerText = inputEmail.value;
    document.getElementById("selectCarSuccess").innerText = selectCarsValue.value;
    if (inputPhone.value !== "" && inputPhone.value.length === 12) {
      document.getElementById("phoneSuccess").innerText = inputPhone.value;
    }

    if (message.value !== "") {
      document.getElementById("messageSuccess").innerText = message.value;
    }

    setTimeout(() => {
      btnSubmit.innerHTML = `Beli Sekarang`;
      formData.classList.replace("hidden", "flex");
    }, 5000);

    document.getElementById("sudah").addEventListener("click", () => {
      formData.classList.replace("flex", "hidden");
      inputName.value = "";
      inputEmail.value = "";
      inputPhone.value = "";
      selectCarsValue.value = "";
      message.value = "";
      document.getElementById("sisaKarakter").parentElement.classList.add("opacity-0");
      document.getElementById("sisaKarakterPesan").parentElement.classList.add("opacity-0");
    });
    document.getElementById("belum").addEventListener("click", () => {
      formData.classList.replace("flex", "hidden");
    });
  } else {
    notification.classList.remove("scale-0");
    notification.classList.remove("opacity-0");
    notification.classList.add("fadeIn");
    if (selectCarsValue.value === "Ferrari 458 Italia " || selectCarsValue.value === "Ford Mustang GT " || selectCarsValue.value === "Porsche 911 " || selectCarsValue.value === "Mercedes Benz ") {
      document.getElementById("selectCarLost").classList.remove("hidden");
      document.getElementById("selectCarLost").innerHTML = 'Hilangkan spasi di akhir kalimat pilih mobil<sup class="text-red-400">*</sup>';
    } else {
      document.getElementById("selectCarLost").classList.remove("hidden");
      document.getElementById("selectCarLost").innerHTML = 'Pilihan mobil harus sesuai<sup class="text-red-400">*</sup>';
    }
  }
});

const close = document.getElementById("close");
close.addEventListener("click", () => {
  notification.classList.remove("fadeIn");
  notification.classList.add("scale-0");
  if (inputPhone.value.length > 12) {
    document.getElementById("phoneLost").classList.remove("hidden");
    inputPhone.value = "08";
    sisaKarakter.innerText = 9;
    sisaKarakter.parentElement.classList.add("text-green-500");
    sisaKarakter.parentElement.classList.remove("text-red-500");
    sisaKarakter.parentElement.classList.remove("opacity-0");
  }
});

const answersContainer = document.querySelectorAll(".answer");

answersContainer.forEach((answerContainer) => {
  answerContainer.previousElementSibling.addEventListener("click", function () {
    if (this.children[1].classList.contains("rotate-0")) {
      answerContainer.classList.replace("opacity-0", "opacity-1");
      answerContainer.classList.replace("h-0", "h-full");
      answerContainer.classList.add("px-2.5");
      answerContainer.classList.add("py-5");
    } else {
      answerContainer.classList.remove("px-2.5");
      answerContainer.classList.remove("py-5");
      answerContainer.classList.replace("opacity-1", "opacity-0");
      answerContainer.classList.replace("h-full", "h-0");
      answerContainer.classList.add("overflow-y-hidden");
    }
  });
});

const questionsContainer = document.querySelectorAll(".bg-accordion");
questionsContainer.forEach((questionContainer) => {
  questionContainer.addEventListener("click", function () {
    if (this.children[1].classList.contains("rotate-0")) {
      this.children[1].classList.replace("rotate-0", "rotate-180");
      this.classList.remove("rounded-xl");
      this.classList.add("rounded-tl-xl");
      this.classList.add("rounded-tr-xl");
    } else {
      this.children[1].classList.replace("rotate-180", "rotate-0");
      this.classList.remove("rounded-tl-xl");
      this.classList.remove("rounded-tr-xl");
      this.classList.add("rounded-xl");
    }
  });
});

const subscribe = document.getElementById("subscribe");
subscribe.addEventListener("click", () => {
  if (subscribe.previousElementSibling.value !== "") {
    alert("Terima kasih telah berlangganan");
    subscribe.previousElementSibling.value = "";
  }
});

const selectCarContainer = document.querySelector("div[aria-label='select-car']");
sectionMenu.addEventListener("click", function (e) {
  if (e.target.innerText === "Tentang") {
    selectCarContainer.classList.replace("inline-flex", "flex");
  } else if (e.target.alt === "close.svg") {
    setTimeout(() => {
      selectCarContainer.classList.replace("flex", "inline-flex");
    }, 800);
  }
});
