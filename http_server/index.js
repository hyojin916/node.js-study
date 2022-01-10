const http = require("http");

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    // 근데 hrml을 이렇게 작성하는 것은 비효율적이기때문에, html 파일을 따로 만들어서 파일을 읽어주는 것이 좋다.

    res.write("<h1>Hello Node!</h1>");
    res.write("<p>Hello Server</p>");
    res.end("<p>Hello Hyojin</p>");
  })
  .listen(8080);

server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중입니다.");
});

server.on("error", (error) => {
  console.log(error);
});
