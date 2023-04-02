function lengthConvertion() {
  lengthUnits = ["mm", "cm", "dm", "m", "dam", "hm", "km"];

  firstValue = parseFloat(getElement("firstLengthValue").value);
  secondValue = parseFloat(getElement("secondLengthValue").value);

  operation = "";

  diff = lengthUnits.indexOf(getElement("firstLengthUnit").value) - lengthUnits.indexOf(getElement("secondLengthUnit").value);
  if (diff < 0) {
    operation = "division";
    diff *= -1;
  } else {
    operation = "multiplication";
  }

  getElement("secondLengthValue").value = operation == "division" ? multiplesDivision(firstValue, diff) : multiplesMultiplications(firstValue, diff);
}

function getElement(id) {
  return window.document.getElementById(id);
}

function multiplesDivision(value, quantityOfDivisions) {
  for(i = 0; i < quantityOfDivisions; i++) value /= 10;
  if(isNaN(value)) return "";
  return value;
}

function multiplesMultiplications(value, quantityOfMultiplications) {
  for(i = 0; i < quantityOfMultiplications; i++) value *= 10;
  if(isNaN(value)) return "";
  return value;
}
