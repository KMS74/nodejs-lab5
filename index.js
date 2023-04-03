const ops = require("./helpers");

function PrepareData(data) {
  const newData = data.reduce((prev, elm) => {
    const [key, value] = elm.split("=");
    prev[key] = value;

    return prev;
  }, {});

  return newData;
}

function main(args) {
  const [, , operation, ...options] = args;

  switch (operation) {
    case "add":
      ops.add(PrepareData(options));
      break;
    case "edit":
      ops.edit(PrepareData(options));
      break;
    case "delete":
      ops.remove(PrepareData(options));
      break;
    case "check":
      ops.check(PrepareData(options));
      break;
    case "uncheck":
      ops.uncheck(PrepareData(options));
      break;
    case "list":
      ops.list();
      break;
    case "checked":
      ops.ListCheckedItems();
      break;
    case "unchecked":
      ops.ListUncheckedItems();
      break;

    default:
      break;
  }
}

main(process.argv);
