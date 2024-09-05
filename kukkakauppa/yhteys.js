document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nimiInput = document.getElementById("nimi");
    const sahkopostiInput = document.getElementById("sahkoposti");
    const viestiInput = document.getElementById("viesti");
    const aiheSelect = document.getElementById("aihe");
  
    const nimiError = document.querySelector("#nimi + .error");
    const sahkopostiError = document.querySelector("#sahkoposti + .error");
    const viestiError = document.querySelector("#viesti + .error");
    const aiheError = document.querySelector("#aihe + .error");
  
    function updateErrorPadding(errorSpan) {
      if (errorSpan.textContent.trim() !== "") {
        errorSpan.style.padding = "5px";
      } else {
        errorSpan.style.padding = "0";
      }
    }
  
    // Validate the name field
    nimiInput.addEventListener("input", function() {
      if (nimiInput.validity.patternMismatch) {
        nimiError.textContent = "Kirjoita nimi (väh. 2 merkkiä) ilman erikoismerkkejä";
      } else {
        nimiError.textContent = "";
      }
      updateErrorPadding(nimiError);
    });
  
    // Validate the email field
    sahkopostiInput.addEventListener("input", function() {
      if (sahkopostiInput.validity.patternMismatch) {
        sahkopostiError.textContent = "Sähköpostin tulee noudattaa oikeaa muotoilua";
      } else {
        sahkopostiError.textContent = "";
      }
      updateErrorPadding(sahkopostiError);
    });
  
    // Validate the message field
    viestiInput.addEventListener("input", function() {
      if (viestiInput.value.trim() === "") {
        viestiError.textContent = "Viesti on pakollinen kenttä.";
      } else if (viestiInput.value.length < 3) {
        viestiError.textContent = "Viestin tulee olla vähintään 3 merkkiä pitkä.";
      } else if (viestiInput.value.length > 500) {
        viestiError.textContent = "Viestin pituus ei saa ylittää 500 merkkiä.";
      } else {
        viestiError.textContent = "";
      }
      updateErrorPadding(viestiError);
    });
  
    // Validate the subject field
    aiheSelect.addEventListener("change", function() {
      if (aiheSelect.value === "") {
        aiheError.textContent = "Valitse aihe.";
      } else {
        aiheError.textContent = "";
      }
      updateErrorPadding(aiheError);
    });
  
    // Prevent form submission if there are invalid fields
    form.addEventListener("submit", function(event) {
      if (!nimiInput.checkValidity()) {
        nimiError.textContent = "Pakollinen kenttä";
        event.preventDefault();
      }
      if (!sahkopostiInput.checkValidity()) {
        sahkopostiError.textContent = "Pakollinen kenttä";
        event.preventDefault();
      }
      if (!viestiInput.checkValidity() || viestiInput.value.trim() === "") {
        viestiError.textContent = "Pakollinen kenttä";
        event.preventDefault();
      }
      if (aiheSelect.value === "") {
        aiheError.textContent = "Pakollinen kenttä";
        event.preventDefault();
      }
  
      updateErrorPadding(nimiError);
      updateErrorPadding(sahkopostiError);
      updateErrorPadding(viestiError);
      updateErrorPadding(aiheError);
    });
  });
  