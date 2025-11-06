// Side bar navigation
function sideBarNav(num) {
  if (num == 1) {
    document.getElementById("agenda").classList.remove("flex");
    document.getElementById("agenda").classList.add("hidden");
    document.getElementById("user").classList.add("flex");
    document.getElementById("user").classList.remove("hidden");
  } else if (num == 2) {
    document.getElementById("agenda").classList.add("flex");
    document.getElementById("agenda").classList.remove("hidden");
    document.getElementById("user").classList.remove("flex");
    document.getElementById("user").classList.add("hidden");
  }
}

let newAppEnabled = false;
let adjustAppEnabled = false;

// Calls to agendaData.php to check database for appointments -> output to element with ID appointmentOutput
function callMyAjax(func, appID) {
  var date = document.getElementById("date-input").value;
  if (newAppEnabled == true) {
    var time = document.getElementById("time-input").value;
    var type = document.getElementById("type-input").value;
    var barber = document.getElementById("barber-input").value;

    // Phone number format control
    const phoneFormat = /^06\s[0-9]{8}$/;
    var phone = document.getElementById("phone-input").value;
    if (!phone.match(phoneFormat)) {
      alert(
        "Incorrect telefoonnummer, controleer of het goed is ingevuld. Voorbeeld: 06 12345678",
      );
      return;
    }
  }
  if (adjustAppEnabled == true) {
    var adjustDate = document.getElementById("adjust-date-input").value;
    var adjustTime = document.getElementById("adjust-time-input").value;
    var adjustType = document.getElementById("adjust-type-input").value;
    var adjustBarber = document.getElementById("adjust-barber-input").value;
  }
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "../pages/agendaData.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var element = document.getElementById("appointmentOutput");
      element.innerHTML = xhr.responseText;
      adjustAppEnabled = false;
      newAppEnabled = false;
    }
  };
  if (newAppEnabled == true) {
    xhr.send(
      "date=" +
        date +
        "&function=" +
        func +
        "&appID=" +
        appID +
        "&time=" +
        time +
        "&type=" +
        type +
        "&barber=" +
        barber +
        "&phone=" +
        phone,
    );
  } else if (adjustAppEnabled == true) {
    xhr.send(
      "date=" +
        date +
        "&function=" +
        func +
        "&appID=" +
        appID +
        "&adjustDate=" +
        adjustDate +
        "&adjustTime=" +
        adjustTime +
        "&adjustType=" +
        adjustType +
        "&adjustBarber=" +
        adjustBarber,
    );
  } else {
    xhr.send("date=" + date + "&function=" + func + "&appID=" + appID);
  }
}

// Previous date arrow
function previousDate() {
  var dateInput = document.getElementById("date-input");

  // Remove one day from the display date if a date was selected
  if (dateInput.value != "") {
    let displayDate = new Date(dateInput.value);
    displayDate.setDate(displayDate.getDate() - 1);
    dateInput.value = displayDate.toISOString().substring(0, 10);
    callMyAjax(0, 0);
  } else {
    currentDate();
  }
}

// Previous date arrow
function previousDate() {
  // Disabling new appointment selection if this was opened
  if (newAppEnabled == true) {
    newAppEnabled = false;
    var newAppDiv = document.getElementById("newAppointment");
    newAppDiv.innerHTML =
      "<h1 class='text-xl hover:cursor-pointer hover:underline' onclick='newAppointment()'>+ Nieuwe afspraak inplannen</h1>";
  }

  var dateInput = document.getElementById("date-input");
  // Remove one day from the display date if a date was selected
  if (dateInput.value != "") {
    let displayDate = new Date(dateInput.value);
    displayDate.setDate(displayDate.getDate() - 1);
    dateInput.value = displayDate.toISOString().substring(0, 10);
    callMyAjax(0, 0);
  } else {
    currentDate();
  }
}

// Next date arrow
function nextDate() {
  // Disabling new appointment selection if this was opened
  if (newAppEnabled == true) {
    newAppEnabled = false;
    var newAppDiv = document.getElementById("newAppointment");
    newAppDiv.innerHTML =
      "<h1 class='text-xl hover:cursor-pointer hover:underline' onclick='newAppointment()'>+ Nieuwe afspraak inplannen</h1>";
  }

  var dateInput = document.getElementById("date-input");
  // Add one day from the display date if a date was selected
  if (dateInput.value != "") {
    let displayDate = new Date(dateInput.value);
    displayDate.setDate(displayDate.getDate() + 1);
    dateInput.value = displayDate.toISOString().substring(0, 10);
    callMyAjax(0, 0);
  } else {
    currentDate();
  }
}

// Enter current real date into display date
function currentDate() {
  var dateInput = document.getElementById("date-input");
  let today = new Date();
  dateInput.value = today.toISOString().substring(0, 10);
  callMyAjax(0, 0);
}

// New appointment 'form'
function newAppointment() {
  if (adjustAppEnabled == true) {
    callMyAjax(0, 0);
  }

  var appDiv = document.getElementById("newAppointment");
  appDiv.innerHTML =
    "<div class='inline-block'><h1>Tijd</h1><input class='text-black' type='time' id='time-input'></div><div class='inline-block ml-4'><h1>Behandeling</h1><input class='text-black w-64' autocomplete='off' placeholder='Bijvoorbeeld: knippen' type='text' id='type-input'></div><div class='inline-block ml-4'><h1>Kapper</h1><select name='barber-input' class='text-black' id='barber-input'><option value='marjolein'>Marjolein</option><option value='henk'>Henk</option><option value='peter'>Peter</option><option value='marieke'>Marieke</option></select></div><div class='inline-block ml-4'><div class='inline-block'><h1>Telefoonnummer</h1><input class='text-black' autocomplete='off' placeholder='06 12345678' type='text' id='phone-input'></div><div class='inline-block ml-4 mt-4'><button class='bg-gray-50 text-black p-2 rounded hover:scale-105' onclick='callMyAjax(1)'>Maak afspraak aan</button></div><div class='inline-block ml-4'><h1>*Deze afspraak zal worden aangemaakt onder 'Gast'.</h1></div>";
  newAppEnabled = true;
}

// Delete appointment function
function delAppointment(appID) {
  var result = prompt(
    "Weet je zeker dat je deze afspraak wil verwijderen? Dit is permanent, en kan niet ongedaan gemaakt worden! Vul hier 'JA' in om te bevestigen en klik dan op OK.",
    "",
  );
  if (result === "JA") {
    callMyAjax(2, appID);
  } else {
    return;
  }
}

// Adjust appointment function + form
function adjustAppointment(appID) {
  if (adjustAppEnabled == true) {
    callMyAjax(0, 0);
  }
  if (newAppEnabled == true) {
    newAppEnabled = false;
    var newAppDiv = document.getElementById("newAppointment");
    newAppDiv.innerHTML =
      "<h1 class='text-xl hover:cursor-pointer hover:underline' onclick='newAppointment()'>+ Nieuwe afspraak inplannen</h1>";
  }

  var appDate = document.getElementById("date-input").value;
  var appDiv = document.getElementById("appointment-" + appID);
  var appTime = document.getElementById(
    "appointment-" + appID + "-appTime",
  ).innerHTML;
  var appBarber = document.getElementById(
    "appointment-" + appID + "-appBarber",
  ).innerHTML;
  var appType = document.getElementById(
    "appointment-" + appID + "-appType",
  ).innerHTML;

  appDiv.innerHTML =
    "<div class='inline-block'><h1>Datum</h1><input class='text-black w-32' type='date' id='adjust-date-input' value='" +
    appDate +
    "'></div><div class='inline-block ml-4'><h1>Tijd</h1><input class='text-black' type='time' id='adjust-time-input' value='" +
    appTime +
    "'></div><div class='inline-block ml-4'><h1>Behandeling</h1><input class='text-black w-64' autocomplete='off' placeholder='Bijvoorbeeld: knippen' type='text' id='adjust-type-input' value='" +
    appType +
    "'></div><div class='inline-block ml-4'><h1>Kapper</h1><select name='barber-input' class='text-black' id='adjust-barber-input'><option value='marjolein'>Marjolein</option><option value='henk'>Henk</option><option value='peter'>Peter</option><option value='marieke'>Marieke</option></select></div><div class='inline-block ml-4 mt-4'><div class='inline-block'><button class='bg-gray-50 text-black p-2 rounded hover:scale-105' onclick='callMyAjax(3, " +
    appID +
    ")'>Pas afspraak aan</button></div>";

  var select = document.getElementById("adjust-barber-input");
  if (appBarber == "marjolein") {
    select.options[0].selected = true;
  } else if (appBarber == "henk") {
    select.options[1].selected = true;
  } else if (appBarber == "peter") {
    select.options[2].selected = true;
  } else if (appBarber == "marieke") {
    select.options[3].selected = true;
  }
  adjustAppEnabled = true;
}

setTimeout(() => {
  nextDate();
}, 100);
