function loadAclib() {
  const script = document.createElement("script");
  script.src = "//acscdn.com/script/aclib.js";
  script.async = true;

  script.onload = () => {
    if (window.aclib) {
      window.aclib.runPop({
        zoneId: "11139394",
      });
    }
  };

  document.head.appendChild(script);
}

// call it when you want
loadAclib();
