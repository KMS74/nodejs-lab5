const fs = require("fs");

let URL = fs.readFileSync(`./.env`, "utf-8");

let fileData;
try {
  fileData = fs.readFileSync(URL, "utf8");
} catch (error) {
  fs.writeFileSync(URL, JSON.stringify([]));
}
// console.log(fileData);

fileData = fs.readFileSync(URL, "utf-8");
let fileDataJSON = JSON.parse(fileData);

// add data
function add(data) {
  let currentId;

  if (fileDataJSON.length == 0) {
    currentId = 1;
  } else {
    currentId = fileDataJSON[fileDataJSON.length - 1].id + 1;
  }

  todo = {
    id: currentId,
    title: data.title,
    body: data.body,
    check: false,
  };

  fileDataJSON.push(todo);

  fs.writeFileSync(URL, JSON.stringify(fileDataJSON));
}

//edit data

function edit(data) {
  for (const id in fileDataJSON) {
    if (Object.hasOwnProperty.call(fileDataJSON, id)) {
      if (fileDataJSON[id].id == data.id) {
        fileDataJSON[id].title = data.title;
        fileDataJSON[id].body = data.body;
      }
    } else {
      console.log("Invalid");
    }
  }
  fs.writeFileSync(URL, JSON.stringify(fileDataJSON));
}

// remove

function remove(data) {
  for (const id in fileDataJSON) {
    if (Object.hasOwnProperty.call(fileDataJSON, id)) {
      if (fileDataJSON[id].id == data.id) {
        fileDataJSON = fileDataJSON.filter((item) => item !== fileDataJSON[id]);
      }
    }
  }
  fs.writeFileSync(URL, JSON.stringify(fileDataJSON));
}

// checked

function check(data) {
  for (const id in fileDataJSON) {
    if (Object.hasOwnProperty.call(fileDataJSON, id)) {
      if (fileDataJSON[id].id == data.id) {
        fileDataJSON[id].check = true;
      }
    }
  }
  fs.writeFileSync(URL, JSON.stringify(fileDataJSON));
}
function uncheck(data) {
  for (const id in fileDataJSON) {
    if (Object.hasOwnProperty.call(fileDataJSON, id)) {
      if (fileDataJSON[id].id == data.id) {
        fileDataJSON[id].check = false;
      }
    }
  }
  fs.writeFileSync(URL, JSON.stringify(fileDataJSON));
}

// listAll
function list() {
  for (const id in fileDataJSON) {
    if (Object.hasOwnProperty.call(fileDataJSON, id)) {
      console.log(fileDataJSON[id]);
    }
  }
}

//List Checked Items

function ListCheckedItems() {
  for (const id in fileDataJSON) {
    if (Object.hasOwnProperty.call(fileDataJSON, id)) {
      if (fileDataJSON[id].check == true) {
        console.log(fileDataJSON[id]);
      }
    }
  }
}

//List unChecked Items

function ListUncheckedItems() {
  for (const id in fileDataJSON) {
    if (Object.hasOwnProperty.call(fileDataJSON, id)) {
      if (fileDataJSON[id].check == false) {
        console.log(fileDataJSON[id]);
      }
    }
  }
}

module.exports = {
  add,
  edit,
  remove,
  check,
  uncheck,
  list,
  ListCheckedItems,
  ListUncheckedItems,
};
