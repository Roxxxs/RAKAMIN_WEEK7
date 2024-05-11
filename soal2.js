const fs = require("fs");

fs.readFile("homework.log", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  fs.appendFile("log.txt", data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Data telah ditulis ke log.txt");
  });
});
