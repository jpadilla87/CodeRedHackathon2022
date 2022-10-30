navigator.geolocation

function successCallback(val)
{
  console.log(val);
}

if ('geolocation' in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition((position) => {
    doSomething(position.coords.latitude, position.coords.longitude);
  });
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  /* geolocation IS NOT available */
  return "Location not available";
}

function displayData() {
  var x = document.getElementById("plants");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}