// app.js
const http = require("http");
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello Upsun! 🚀 This is the test app.\n");
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
