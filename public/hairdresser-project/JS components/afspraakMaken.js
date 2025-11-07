const steps = Array.from(document.querySelectorAll(".step"));
const nextBtn = document.querySelectorAll(".next-btn");
const prevBtn = document.querySelectorAll(".previous-btn");
const form = document.querySelector("form");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    // check if the button's parent element has a specific class or if the button has a specific data attribute
    if (
      !button.parentElement.classList.contains("skip-validity") &&
      !button.hasAttribute("data-skip-validity")
    ) {
      // check if input is valid before changing step
      if (button.parentElement.querySelector("input").checkValidity()) {
        changeStep("next");
      }
    } else {
      changeStep("next");
    }
  });
});

// On click, change step to previous
prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

// On submit, log all inputs
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    localStorage.setItem(name, value);
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

// Change step
function changeStep(btn) {
  const active = document.querySelector(".active");
  active.classList.remove("active");
  if (btn === "next") {
    active.nextElementSibling.classList.add("active");
  } else if (btn === "prev") {
    active.previousElementSibling.classList.add("active");
  }
}

// TIMEPICKER

$(".timepicker").timepicker({
  timeFormat: "HH:mm ",
  interval: 15,
  minTime: "09:00",
  maxTime: "19:00",
  defaultTime: "11",
  startTime: "09:00",
  dynamic: false,
  dropdown: true,
  scrollbar: true,
});
