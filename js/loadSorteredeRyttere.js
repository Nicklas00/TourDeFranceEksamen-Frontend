/*const sorteretUrl = "http://localhost:8181/api/cykelrytter/sortereftertid"

async function loadAlleRyttereSorteret(url){
  let table = document.getElementById("myTableRyttereEfterTid");
  let ryttere = getEntities(url);

  // Remove all elements inside table
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }
  alert("hej")

  for (let i = 0; i < ryttere.length; i++){
    let row =
      "<tr>" +
      "<td>" + ryttere[i].cykelrytterNavn + "</td>" +
      "<td>" + ryttere[i].cykelrytterAlder + "</td>" +
      "<td>" + ryttere[i].cykelrytterNationalitet + "</td>" +
      "<td>" + ryttere[i].cykelhold.cykelholdNavn + "</td>" +
      "<td>" + ryttere[i].samletTidIMin + "'</td>" +
      "<td>" + ryttere[i].bjergPoints + "</td>" +
      "<td>" + ryttere[i].spurtPoints + "</td>" +
      "</tr>";

    table.innerHTML += row;
  }
}

async function loadSortedRiders(){
  await loadAlleRyttereSorteret(loadAlleSorteretURL);
}

loadSortedRiders();

 */
