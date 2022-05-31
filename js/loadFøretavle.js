const føreTrøjeUrl = "http://localhost:8181/api/cykelrytter/gultrøje";
const bjergTrøjeUrl = "http://localhost:8181/api/cykelrytter/prikkettrøje";
const spurtTrøjeUrl = "http://localhost:8181/api/cykelrytter/spurttrøje"
const ungFøreTrøjeUrl = "http://localhost:8181/api/cykelrytter/hvidtrøje"
const loadAlleSorteretURL = "http://localhost:8181/api/cykelrytter/sortereftertid"
//const getAllRyttereUrl = "http://localhost:8181/api/cykelrytter";
//const getAllHold = "http://localhost:8181/api/cykelhold";

async function loadFørendeRyttere(url){
  let gulTrøje = await getEntities(url);
  let polkaDot = await getEntities(bjergTrøjeUrl);
  let grønTrøje = await getEntities(spurtTrøjeUrl);
  let hvidTrøje = await getEntities(ungFøreTrøjeUrl);
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
  for (let i = 0; i < grønTrøje.length; i++){
    let row =
      "<tr>" +
      "<td>" + img3 + "</td>" +
      "<td>" + grønTrøje[i].cykelrytterNavn + "</td>" +
      "<td>" + grønTrøje[i].cykelrytterAlder + "</td>" +
      "<td>" + grønTrøje[i].cykelrytterNationalitet + "</td>" +
      "<td>" + grønTrøje[i].cykelhold.cykelholdNavn + " </td>" +
      "<td>" + grønTrøje[i].samletTidIMin + "' </td>" +
      "<td>" + grønTrøje[i].bjergPoints + "</td>" +
      "<td>" + grønTrøje[i].spurtPoints + "</td>" +
      "</tr>";

    table.innerHTML += row;
  }

  //Loader den hvide førertrøje
  let img4 = "<img src='https://img.aso.fr/core_app/img-cycling-tdf-jpg/blanc/34287/0:0,600:500-600-0-100/cbb1c' +  alt='føretrøje' width=" + 40 + " height=" + 30+ ">";
    let row =
      "<tr>" +
      "<td>" + img4 + "</td>" +
      "<td>" + hvidTrøje[0].cykelrytterNavn + "</td>" +
      "<td>" + hvidTrøje[0].cykelrytterAlder + "</td>" +
      "<td>" + hvidTrøje[0].cykelrytterNationalitet + "</td>" +
      "<td>" + hvidTrøje[0].cykelhold.cykelholdNavn + "</td>" +
      "<td>" + hvidTrøje[0].samletTidIMin + "'</td>" +
      "<td>" + hvidTrøje[0].bjergPoints + "</td>" +
      "<td>" + hvidTrøje[0].spurtPoints + "</td>" +
      "</tr>";

    table.innerHTML += row;



}

async function loadAlleRyttereSorteret(url){
  let table1 = document.getElementById("myTableRyttereEfterTid");
  let ryttere = await getEntities(url);

  // Remove all elements inside table
  let child = table1.lastElementChild;
  while (child) {
    table1.removeChild(child);
    child = table1.lastElementChild;
  }

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

    table1.innerHTML += row;
  }
}

//ikke nået at blive færdig med denne metode
/*async function loadFørendeHold(url){
  let table = document.getElementById("myTableRyttereEfterTid");
  let hold = await getEntities(url);
  let ryttere = await getEntities(url);
  let samletTidDSM;
  let samletTidLotto;
  let samletTidConfidis;
  let samletTidMovistar;

  // Remove all elements inside table
  let child = table.lastElementChild;
  while (child) {
    table.removeChild(child);
    child = table.lastElementChild;
  }

  for (let i = 0; i < ryttere.length; i++) {
    if (ryttere[i].cykelhold.id == 1) {
      samletTidDSM += ryttere[i].samletTidIMin;
    } else if (ryttere[i].cykelhold.id == 2) {
      samletTidLotto += ryttere[i].samletTidIMin;
    } else if (ryttere[i].cykelhold.id == 3) {
      samletTidConfidis += ryttere[i].samletTidIMin;
    } else if (ryttere[i].cykelhold.id == 4) {
      samletTidMovistar += ryttere[i].samletTidIMin;
    }
  }

  for (let i = 0; i < hold.length; i++) {
    let row =
      "<tr>" +
      "<td>" + hold[i].cykelholdNavn + "</td>" +
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

 */




async function loadSortedRiders(){
  await loadAlleRyttereSorteret(loadAlleSorteretURL);
}

async function loadLeaderboard(){
  await loadFørendeRyttere(føreTrøjeUrl);
}


loadLeaderboard();
loadSortedRiders();

