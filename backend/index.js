import cors from "cors";
import express from "express";
import { productService } from "./ProductService.js";
import { login as loginService, register } from "./AuthService.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(cors({ origin: '*' }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/api/getProducts", async (req, res) => {
  const category = req.query.category;
  const name = req.query.name;
  // const startDate = req.query.startDate;
  // const endDate = req.query.endDate;
  const products = await productService.getProducts(category, name);
  res.json(products);
});

app.post("/api/login", async (req, res) => {
  console.log(req.body);
  const login = req.body.username;
  const password = req.body.password;
  const result = loginService(login, password);

  res.json(result);
});

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  const login = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  register(login, password, email);
  res.json(true);
});

app.listen(8081, () => {
  console.log("server is listening on port 8081");
});
