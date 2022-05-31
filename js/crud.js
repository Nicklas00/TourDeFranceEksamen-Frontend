async function getEntities(url) {
  return await fetch(url).then(res => res.json());
}

async function updateEntity(entity, url) {
  let fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entity)
  };
  return await fetch(url, fetchOptions);
}

async function postEntity(entity, url) {
  let fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entity)
  };
  return await fetch(url, fetchOptions);
}

function deleteEntity(url) {
  const fetchOptions = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, fetchOptions);
}

async function updateRyttere() {
  let ryttere = JSON.parse(localStorage.getItem("ryttere"));
  let table = document.getElementById("myTable");

  for (let i in table.rows) {
    let row = table.rows[i];
    let oldValNavn = ryttere[i].cykelrytterNavn;
    let newValNavn = row.cells[0].children[0].value;

    let oldValAlder = ryttere[i].cykelrytterAlder;
    let newValAlder = row.cells[1].children[0].value;

    let oldValNationalitet = ryttere[i].cykelrytterNationalitet;
    let newValNationalitet = row.cells[2].children[0].value;

    let oldValSamletTid = ryttere[i].samletTidIMin;
    let newValSamletTid = row.cells[3].children[0].value;

    let oldValBjergpoints = ryttere[i].bjergPoints;
    let newValBjergpoints = row.cells[4].children[0].value;

    let oldValSpurtpoints = ryttere[i].spurtPoints;
    let newValSpurtPoints = row.cells[5].children[0].value;

    if (oldValNavn != newValNavn || oldValAlder != newValAlder || oldValNationalitet != newValNationalitet || oldValSamletTid != newValSamletTid || oldValBjergpoints != newValBjergpoints || oldValSpurtpoints != newValSpurtPoints) {
      ryttere[i].cykelrytterNavn = newValNavn;
      ryttere[i].cykelrytterAlder = newValAlder;
      ryttere[i].cykelrytterNationalitet = newValNationalitet;
      ryttere[i].samletTidIMin = newValSamletTid;
      ryttere[i].bjergPoints = newValBjergpoints;
      ryttere[i].spurtPoints = newValSpurtPoints;

      await updateEntity(ryttere[i], cykelrytterUrl);
    }
  }
}
