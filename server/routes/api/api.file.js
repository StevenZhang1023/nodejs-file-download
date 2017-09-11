const path = require('path');
module.exports.downloadFiles = function(req, res) {
  const baseUrl = path.join("./", process.env.FILE_PATH);
  let filename = req.params.filename;
  let file = path.join(baseUrl, "/" +  filename + '.pdf');
  res.download(file, filename + '.pdf');
}
