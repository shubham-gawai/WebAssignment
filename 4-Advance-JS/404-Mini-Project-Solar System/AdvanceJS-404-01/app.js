//
document.getElementById("calculateF").style.display = "none";

let calculateWeight = () => {

        var nameOfPlanet = document.getElementById("nameOfPlanet");
        var planetImage = document.getElementById("planetImage");
        var mass = document.getElementById("mass");
        var weight = document.getElementById("weight");
        var dropd = document.getElementById("dropd");

  if (mass.value === "" || dropd.value === "selectPlanet") {
    if (mass.value === "") {
      // alert("Please enter the value of Mass");
      document.getElementById("calculateF").style.display = "none";
      document.getElementById("default").style.display = "none";
      document.getElementById("required-msg1").style.display = "block";
      document.getElementById("required-msg2").style.display = "none";

      return;
    } else if (dropd.value === "selectPlanet") {
      // alert("Please Select Planet");
      document.getElementById("calculateF").style.display = "none";
      document.getElementById("default").style.display = "none";
      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "block";

      return;
    }
  } else {
    document.getElementById("calculateF").style.display = "block";

    if (dropd.value === "mercury") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "MERCURY";
      planetImage.src = "ProjectImage/mercury.png";
      weight.innerText = `${parseFloat(mass.value * 3.59).toFixed(2)} N`;
    } else if (dropd.value === "venus") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "VENUS";
      planetImage.src = "ProjectImage/venus.png";
      weight.innerText = `${parseFloat(mass.value * 8.87).toFixed(2)} N`;
    } else if (dropd.value === "earth") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "EARTH";
      planetImage.src = "earth.png";
      weight.innerText = `${parseFloat(mass.value * 9.81).toFixed(2)} N`;
    } else if (dropd.value === "moon") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "MOON";
      planetImage.src = "ProjectImage/moon.png";
      weight.innerText = `${parseFloat(mass.value * 1.62).toFixed(2)} N`;
    } else if (dropd.value === "mars") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "MARS";
      planetImage.src = "ProjectImage/mars.png";
      weight.innerText = `${parseFloat(mass.value * 3.77).toFixed(2)} N`;
    } else if (dropd.value === "jupiter") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "JUPITER";
      planetImage.src = "ProjectImage/jupiter.png";
      weight.innerText = `${parseFloat(mass.value * 25.95).toFixed(2)} N`;
    } else if (dropd.value === "saturn") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "SATURN";
      planetImage.src = "ProjectImage/saturn.png";
      weight.innerText = `${parseFloat(mass.value * 11.08).toFixed(2)} N`;
    } else if (dropd.value === "uranus") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "URANUS";
      planetImage.src = "ProjectImage/uranus.png";
      weight.innerText = `${parseFloat(mass.value * 10.67).toFixed(2)} N`;
    } else if (dropd.value === "neptune") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "NEPTUNE";
      planetImage.src = "ProjectImage/neptune.png";
      weight.innerText = `${parseFloat(mass.value * 14.07).toFixed(2)} N`;
    } else if (dropd.value === "pluto") {
      document.getElementById("default").style.display = "none";

      document.getElementById("required-msg1").style.display = "none";
      document.getElementById("required-msg2").style.display = "none";

      nameOfPlanet.innerText = "PLUTO";
      planetImage.src = "ProjectImage/pluto.png";
      weight.innerText = `${parseFloat(mass.value * 0.42).toFixed(2)} N`;
    }
    dropd.value = "selectPlanet";
    mass.value = "";
  }
};
