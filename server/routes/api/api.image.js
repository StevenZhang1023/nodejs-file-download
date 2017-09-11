const path = require('path');
module.exports.imageProvider = function(req, res) {
  const baseUrl = path.join("./", process.env.FILE_PATH);
  let filename = req.params.filename;
  let file = path.join(baseUrl, "/" +  filename + '.jpg');
  res.download(file, filename + '.jpg');
}
