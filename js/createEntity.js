const rytterUrl = "http://localhost:8181/api/cykelrytter"

async function createRytter(){
  let navn = document.getElementById("rytter-navn").value;
  let alder = Number(document.getElementById("rytter-alder").value);
  let nationalitet = document.getElementById("rytter-nationalitet").value;
  let hold = Number(document.getElementById("rytter-hold").value);
  //let barId = JSON.parse(localStorage.getItem("barId"));
  alert(hold);
  let cykelrytter = {};

  cykelrytter.cykelrytterNavn = navn;
  cykelrytter.cykelrytterAlder = alder;
  cykelrytter.cykelrytterNationalitet = nationalitet;
  cykelrytter.cykelhold = {};
  cykelrytter.cykelhold.id = hold;

  await postEntity(cykelrytter, rytterUrl);
  window.location.href = "index.html";
}
