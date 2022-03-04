window.addEventListener("load", () => {
  document.querySelectorAll(".kart").forEach((e) => {
    e.style.backgroundColor = "#f4f4f4";
  });
  document.querySelector("body").style.backgroundColor = "#f4f4f4";
  let düğme = document.getElementById("flexSwitchCheckDefault");

  düğme.addEventListener("click", (e) => {
    console.log(e.target.value);
    e.target.toggleAttribute("checked");
    if (düğme.hasAttribute("checked")) {
      document.querySelector("body").style.backgroundColor = "#131414";
      document.querySelector("body").style.color = "white";
      document.querySelectorAll(".kart").forEach((e) => {
        e.style.Color = "white";
        e.style.backgroundColor = "#131414";
      });
    } else {
      document.querySelector("body").style.backgroundColor = "#f4f4f4";
      document.querySelector("body").style.color = "black";
      document.querySelectorAll(".kart").forEach((e) => {
        e.style.Color = "black";
        e.style.backgroundColor = "#f4f4f4";
      });
    }
  });
});
