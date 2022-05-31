const yellowShirtUrl = "http://localhost:8181/api/cykelrytter/gultrøje";
const polkadotUrl = "http://localhost:8181/api/cykelrytter/prikkettrøje";
const greenUrl = "http://localhost:8181/api/cykelrytter/spurttrøje"
const hvidUrl = "http://localhost:8181/api/cykelrytter/hvidtrøje"
const loadAlleSorteretURL = "http://localhost:8181/api/cykelrytter/sortereftertid"

async function loadFørendeRyttere(url){
  let gulTrøje = await getEntities(url);
  let polkaDot = await getEntities(polkadotUrl);
  let greenShirt = await getEntities(greenUrl);
  let hvidShirt = await getEntities(hvidUrl);
  let table = document.getElementById("myTableGulTrøje");

  // Remove all elements inside table
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }
  //Loader den gule førertrøje
  let img = "<img src='https://img.aso.fr/core_app/img-cycling-tdf-jpg/jaune/34290/0:0,600:500-600-0-100/ba71f ' +  alt='føretrøje' width=" + 40 + " height=" + 30+ ">";
  for (let i = 0; i < gulTrøje.length; i++){
    let row =
      "<tr>" +
      "<td>" + img + "</td>" +
      "<td>" + gulTrøje[i].cykelrytterNavn + "</td>" +
      "<td>" + gulTrøje[i].cykelrytterAlder + "</td>" +
      "<td>" + gulTrøje[i].cykelrytterNationalitet + "</td>" +
      "<td>" + gulTrøje[i].cykelhold.cykelholdNavn + "</td>" +
      "<td>" + gulTrøje[i].samletTidIMin + "'</td>" +
      "<td>" + gulTrøje[i].bjergPoints + "</td>" +
      "<td>" + gulTrøje[i].spurtPoints + "</td>" +
      "</tr>";

    table.innerHTML += row;
  }
  //Loader bjergtrøjen
  let img2 = "<img src='https://img.aso.fr/core_app/img-cycling-tdf-jpg/a-pois/34289/0:0,600:500-600-0-100/76c70' +  alt='føretrøje' width=" + 40 + " height=" + 30+ ">";
  for (let i = 0; i < polkaDot.length; i++){
    let row =
      "<tr>" +
      "<td>" + img2 + "</td>" +
      "<td>" + polkaDot[i].cykelrytterNavn + "</td>" +
      "<td>" + polkaDot[i].cykelrytterAlder + "</td>" +
      "<td>" + polkaDot[i].cykelrytterNationalitet + "</td>" +
      "<td>" + polkaDot[i].cykelhold.cykelholdNavn + "</td>" +
      "<td>" + polkaDot[i].samletTidIMin + "'</td>" +
      "<td>" + polkaDot[i].bjergPoints + "</td>" +
      "<td>" + polkaDot[i].spurtPoints + "</td>" +
      "</tr>";

    table.innerHTML += row;
  }
  //Loader den grønne sprinttrøje
  let img3 = "<img src='https://img.aso.fr/core_app/img-cycling-tdf-jpg/vert/34288/0:0,600:500-600-0-100/7b022' +  alt='føretrøje' width=" + 40 + " height=" + 30+ ">";
  for (let i = 0; i < greenShirt.length; i++){
    let row =
      "<tr>" +
      "<td>" + img3 + "</td>" +
      "<td>" + greenShirt[i].cykelrytterNavn + "</td>" +
      "<td>" + greenShirt[i].cykelrytterAlder + "</td>" +
      "<td>" + greenShirt[i].cykelrytterNationalitet + "</td>" +
      "<td>" + greenShirt[i].cykelhold.cykelholdNavn + " </td>" +
      "<td>" + greenShirt[i].samletTidIMin + "' </td>" +
      "<td>" + greenShirt[i].bjergPoints + "</td>" +
      "<td>" + greenShirt[i].spurtPoints + "</td>" +
      "</tr>";

    table.innerHTML += row;
  }

  //Loader den hvide førertrøje
  let img4 = "<img src='https://img.aso.fr/core_app/img-cycling-tdf-jpg/blanc/34287/0:0,600:500-600-0-100/cbb1c' +  alt='føretrøje' width=" + 40 + " height=" + 30+ ">";
    let row =
      "<tr>" +
      "<td>" + img4 + "</td>" +
      "<td>" + hvidShirt[0].cykelrytterNavn + "</td>" +
      "<td>" + hvidShirt[0].cykelrytterAlder + "</td>" +
      "<td>" + hvidShirt[0].cykelrytterNationalitet + "</td>" +
      "<td>" + hvidShirt[0].cykelhold.cykelholdNavn + "</td>" +
      "<td>" + hvidShirt[0].samletTidIMin + "'</td>" +
      "<td>" + hvidShirt[0].bjergPoints + "</td>" +
      "<td>" + hvidShirt[0].spurtPoints + "</td>" +
      "</tr>";

    table.innerHTML += row;



}

async function loadAlleRyttereSorteret(url){
  let table1 = document.getElementById("myTableRyttereEfterTid");
  let ryttereSorted = await getEntities(url);

  // Remove all elements inside table
  let child = table1.lastElementChild;
  while (child) {
    table1.removeChild(child);
    child = table1.lastElementChild;
  }

  for (let i = 0; i < ryttereSorted.length; i++){
    let row =
      "<tr>" +
      "<td>" + ryttereSorted[i].cykelrytterNavn + "</td>" +
      "<td>" + ryttereSorted[i].cykelrytterAlder + "</td>" +
      "<td>" + ryttereSorted[i].cykelrytterNationalitet + "</td>" +
      "<td>" + ryttereSorted[i].cykelhold.cykelholdNavn + "</td>" +
      "<td>" + ryttereSorted[i].samletTidIMin + "'</td>" +
      "<td>" + ryttereSorted[i].bjergPoints + "</td>" +
      "<td>" + ryttereSorted[i].spurtPoints + "</td>" +
      "</tr>";

    table1.innerHTML += row;
  }
}


async function loadSortedRiders(){
  await loadAlleRyttereSorteret(loadAlleSorteretURL);
}

async function loadLeaderboard(){
  await loadFørendeRyttere(yellowShirtUrl);
}


loadLeaderboard();
loadSortedRiders();

