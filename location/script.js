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

