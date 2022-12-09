const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  const userArray = ["An", "Binh"];
  console.log(req.url, req.method);

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Lab2_1</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" value="" name="user"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Lab2_1</title></head>");
    userArray.map((user) => {
      res.write(`<li>${user}</li>`);
    });
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const newUser = parsedBody.split("=")[1];
      userArray.push(newUser);
      console.log(userArray);
      res.write("<html>");
      res.write("<head><title>Lab2_1</title></head>");
      userArray.map((user) => {
        res.write(`<li>${user}</li>`);
      });
      res.write("</html>");
      return res.end();
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hi from my Node.js server!</h1></body>");
  res.write("</html>");
  res.end();
};

module.exports.requestHandler = requestHandler;
