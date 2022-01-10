const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    try {
      if (req.method === "GET") {
        if (req.url === "/") {
          const data = await fs.readFile("./home.html");
          res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
          return res.end(data);
        } else if (req.url === "/user") {
        } else if (req.url === "/corp") {
        }
        try {
        } catch (err) {
          // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
        }
      } else if (req.method === "POST") {
        // post
      }
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트에서 서버 대기 중입니다");
  });
