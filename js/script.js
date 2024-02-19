let seatsLeft = parseInt(document.getElementById("seats-left").innerText);
let seatsCount = parseInt(document.getElementById("seats-count").innerText);
let totalPrice = parseInt(document.getElementById("total-price").innerText);
let grandTotal = parseInt(document.getElementById("grand-total").innerText);
const applyBtn = document.getElementById("apply-btn");
const inputInfoBtn = document.getElementById("input-info-btn");

const selectSeats = [];

const seats = document.getElementsByClassName("seats");
for (const seat of seats) {
  seat.addEventListener("click", function () {
    if (selectSeats.length < 4) {
      seat.classList.add("bg-[#1dd100]");
      const seatName = seat.innerText;
      selectSeat(seatName);
    } else {
      alert("You can't buy more than 4 tickets");
    }
  });
}

function selectSeat(seatName) {
  if (!selectSeats.includes(seatName)) {
    selectSeats.push(seatName);
    seatsLeft = seatsLeft - 1;
    seatsCount = seatsCount + 1;
    document.getElementById("seats-left").innerText = seatsLeft;
    document.getElementById("seats-count").innerText = seatsCount;

    // seats information !
    const seatInfo = document.getElementById("seats-info");
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");
    const h1 = document.createElement("h1");
    h1.classList.add("text-lg");
    h1.innerText = seatName;
    const h2 = document.createElement("h1");
    h2.innerText = "Economy";
    const h3 = document.createElement("h3");
    h3.innerText = 550;

    div.appendChild(h1);
    div.appendChild(h2);
    div.appendChild(h3);
    seatInfo.appendChild(div);

    // price add system
    totalPrice = totalPrice + 550;
    grandTotal = grandTotal + 550;
    document.getElementById("total-price").innerText = totalPrice;
    document.getElementById("grand-total").innerText = grandTotal;

    if (seatsCount >= 4) {
      applyBtn.disabled = false;
    }
    if (seatsCount >= 1) {
      inputInfoBtn.disabled = false;
    }
  }
}

//  discount coupon function
const discountInfo = document.getElementById("discount-info");
function couponBtn() {
  const inputCoupon = document.getElementById("input-coupon").value;

  if (inputCoupon === "NEW15") {
    const discount = grandTotal * 0.15;
    grandTotal = grandTotal - discount;
    document.getElementById("grand-total").innerText = grandTotal;
    // discount div
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");
    const h2 = document.createElement("h1");
    h2.classList.add("text-[#ffbf0f]");
    h2.innerText = "15 % Discount";
    const h1 = document.createElement("h1");
    h1.classList.add("text-lg");
    h1.innerText = "-" + discount;
    div.appendChild(h2);
    div.appendChild(h1);
    discountInfo.appendChild(div);

    document.getElementById("input-coupon").classList.add("hidden");
    applyBtn.classList.add("hidden");
  } else if (inputCoupon === "Couple 20") {
    const discount = grandTotal * 0.2;
    grandTotal = grandTotal - discount;
    document.getElementById("grand-total").innerText = grandTotal;
    // discount section
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");
    const h2 = document.createElement("h1");
    h2.classList.add("text-[#f78c9c]");
    h2.innerText = "20% Discount";
    const h1 = document.createElement("h1");
    h1.classList.add("text-lg");
    h1.innerText = "-" + discount;
    div.appendChild(h2);
    div.appendChild(h1);
    discountInfo.appendChild(div);

    document.getElementById("input-coupon").classList.add("hidden");
    applyBtn.classList.add("hidden");
  } else {
    alert("Invalid Coupon Code !");
  }
}

//  next button and Continue button function
const mainSection = document.getElementById("main-section");
const mainSection2 = document.getElementById("main-section-2");

function nextBtn() {
  mainSection.classList.add("hidden");
  mainSection2.classList.remove("hidden");
}
function continueBtn() {
  mainSection2.classList.add("hidden");
  mainSection.classList.remove("hidden");
  window.location.reload();
}