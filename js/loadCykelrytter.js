const cykelrytterUrl = "http://localhost:8181/api/cykelrytter";
const cykelholdUrl = "http://localhost:8181/api/cykelhold";


async function loadCykelrytter(url){
  let cykelryttere = await getEntities(url);
  let cykelhold = getEntities(cykelholdUrl);
  let table = document.getElementById("myTable");
  let child = table.lastElementChild;

  while(child){
    table.removeChild(child);
    child = table.lastElementChild;
  }

  for(let i = 0; i < cykelryttere.length; i++){
    let row =
      "<tr>" +
      "<td><input value='" + cykelryttere[i].cykelrytterNavn + "'></td>" +
      "<td><input value='" + cykelryttere[i].cykelrytterAlder +  "'</td>" +
      "<td><input value='" + cykelryttere[i].cykelrytterNationalitet +  "' style='width: 105px'</td>" +
      "<td><input value='" + cykelryttere[i].samletTidIMin +  "' style='width: 75px'</td>" +
      "<td><input value='" + cykelryttere[i].bjergPoints +  "'style='width: 75px'</td>" +
      "<td><input value='" + cykelryttere[i].spurtPoints +  "' style='width: 75px'</td>" +
      //ddCykelhold2 +
      //"<td><select id='cykelhold'> <option value=" + cykelryttere[i].cykelhold.id + "> "+ cykelholdNavn +" </option></select> </td>"
      "<td><select id='cykelhold'> <option value=" + cykelryttere[i].cykelhold.id + "> "+ cykelryttere[i].cykelhold.cykelholdNavn +" </option></select> </td>" +
      "<td><button class='btn btn-outline-danger' id='delete-btn' onclick='deleteRytter(" + cykelryttere[i].id +")'>Fjern rytter</button> </td>" +
      "</tr>";

    table.innerHTML += row;
  }

  localStorage.setItem("ryttere", JSON.stringify(cykelryttere));
}

async function deleteRytter(id){
  await deleteEntity(rytterUrl + "/" + id);
  location.reload();
}


async function loadCykelryttere() {
  await loadCykelrytter(cykelrytterUrl);
}


loadCykelryttere();





