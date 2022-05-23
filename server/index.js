require("dotenv").config();

const { DB_CONFIG } = require("./Config");
var cookieParser = require("cookie-parser");
var express = require("express");
var mysql = require("mysql");
const cors = require("cors");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const authenticate = require("./Middlewares/Authenticate");
var nodemailer = require("nodemailer");
var mail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bee3now.1@gmail.com",
    pass: "Bee3Now_1_2_3",
  },
});

//
var app = express();
var jsonParser = bodyParser.json();
//
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

//Api Endpoints
var bestSellingProductsApi = "/api/products";
var allProductsApi = "/api/allproducts";
var walletsAndBagsApi = "/api/walletsandbags";
var adminAddProductsApi = "/api/admin/addproduct";

//Database Connection
var connection = mysql.createConnection(DB_CONFIG);

connection.connect((error) => {
  if (!!error) {
    console.log("error");
    throw error;
  } else console.log("connected");
});

// Create Token

const maxAge = 3 * 24 * 60 * 60;
const createToken = (user_id) => {
  return jwt.sign({ user_id }, "lvmbxsvlrkuvxjvbimzjvkzsawwjtfkg", {
    expiresIn: maxAge,
  });
};

const verifyToken = () => {
  app.post("/", async (req, res) => {
    const token = await req.body.token;
    if (typeof token !== "undefined") {
      res.sendStatus(200);
      next();
    }

    //res.status(403);
    console.log("error verifying token");
  });
};

//register

app.post(adminAddProductsApi, jsonParser, (req, res) => {
  console.log("inside addpr");
  const productName = req.body.ProductName;
  const productPrice = req.body.ProductPrice;
  const productProfit = req.body.ProductProfit;
  const productFirstImg = req.body.FirstImgUrl;
  const productSecImg = req.body.SecImgUrl;
  const productThirdImg = req.body.ThirdImgUrl;
  const productForthImg = req.body.ForthImgUrl;
  const productFifthImg = req.body.FifthImgUrl;
  const productCategory = req.body.ProductCategory;

  connection.query(
    "INSERT INTO product (Name,Price,Profit,Category,ImgUrl,SecImgUrl,ThirdImgUrl,ForthImgUrl,FifthImgUrl) VALUES (?,?,?,?,?,?,?,?,?)",
    [
      productName,
      productPrice,
      productProfit,
      productCategory,
      productFirstImg,
      productSecImg,
      productThirdImg,
      productForthImg,
      productFifthImg,
    ],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log("inserting new product is done ");
      }
    }
  );
});

app.get(adminAddProductsApi, jsonParser, (req, res) => {
  res.json({ Message: "yeaaa true" });
});

app.post("/api/register", jsonParser, (req, res) => {
  const userfirstname = req.body.Firstname;
  const userlastname = req.body.Lastname;
  const useremail = req.body.Email;
  const userpass = req.body.Pass;

  connection.query(
    "SELECT *FROM users WHERE Email='" + useremail + "'",
    (error, result, rows) => {
      if (!!error) {
        console.log(error);
      } else {
        if (result.length == 0) {
          connection.query(
            "INSERT INTO users (Firstname,Lastname,Email,Password) VALUES (?,?,?,?)",
            [userfirstname, userlastname, useremail, userpass],

            (error, resulttt) => {
              if (!!error) {
                console.log(error);
                res.status(400).json({ error });
              } else {
                const token = createToken(useremail);
                res.cookie("woow", token);
                res.header("Access-Control-Allow-Credentials", "true");
                res.header("Access-Control-Allow-Headers", "true");
                res.status(201).json({ accessToken: token, email: useremail });
              }
            }
          );
        } else {
          res.status(200).json({ Email: "This Email is registered before" });
          console.log("this user registered before", res);
        }
      }
    }
  );
});

app.get("/api/register", (req, res) => {
  connection.query(
    "SELECT * FROM users",

    (error, result) => {
      if (!!error) {
        console.log(error);
      }
      res.json(result);
    }
  );
});

app.get("/api/users", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE Id=" + req.current_user_id + "  ",

    (error, result) => {
      if (!!error) {
        console.log(error);
      }

      res.json(result);
    }
  );
});

app.get("/api/currentuserrr", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE Id=" + req.current_user_id + "  ",

    (error, result) => {
      if (!!error) {
        console.log(error);
      }

      res.json(result[0]);
      var result = result[0];
    }
  );
});

app.patch("/api/currentuserrr", authenticate, (req, res) => {
  connection.query(
    "UPDATE users  SET Email = ?, Number = ?, FirstName = ?, LastName = ? WHERE Id=" +
      req.current_user_id +
      " ",
    [req.body.Email, req.body.Number, req.body.FirstName, req.body.LastName],
    (error, result) => {
      if (!!error) {
        console.log(error);
      }
      res.json(result);
    }
  );
});

app.patch("/api/updatepassword", authenticate, (req, res) => {
  connection.query(
    "UPDATE users  SET Password = ? WHERE Id=" + req.current_user_id + " ",
    [req.body.Password],
    (error, result) => {
      if (!!error) {
        console.log(error);
      }
      res.json("تم تغيير كلمة المرور بنجاح");
    }
  );
});

//login

app.post("/api/login", jsonParser, (req, res) => {
  const useremail = req.body.Email;
  const userpass = req.body.Password;

  connection.query(
    "SELECT * FROM users WHERE Email=? AND Password=?",

    [useremail, userpass],

    (error, rows, fields) => {
      if (!!error) {
        console.log(error);
        return res
          .status(500)
          .send("There was a problem registering the user.");
      } else {
        if (rows.length == 1) {
          //res.cookie("woow", token, { maxAge: maxAge * 1000 });
          console.log(rows.length);

          const token = createToken(rows[0].Id);
          // res.setHeader("Authorization", "bearer" + token);

          res.status(201).json({
            accessToken: token,
            email: useremail,
            headers: token,
          });

          // console.log(res);
        } else {
          res.status(200).json({ Email: "not found on database" });
        }
      }
    }
  );
});

app.post("/api/adminlogin", jsonParser, (req, res) => {
  const username = req.body.Username;
  const userpass = req.body.Password;

  connection.query(
    "SELECT * FROM admins WHERE username=? AND password=?",

    [username, userpass],

    (error, rows, fields) => {
      if (!!error) {
        console.log(error);
        return res
          .status(500)
          .send("There was a problem registering the user.");
      } else {
        if (rows.length == 1) {
          console.log(rows.length);

          const token = createToken(rows[0].id);

          res.status(201).json({
            accessToken: token,
            username: username,
            headers: token,
          });
        } else {
          res.status(200).json({ Email: "not found on database" });
        }
      }
    }
  );
});

app.post("/api/orders", authenticate, async (req, res) => {
  const customerName = await req.body.CustomerName,
    customerAddress = await req.body.CustomerAddress,
    customerNum = await req.body.CustomerNumber,
    customerSecNum = await req.body.CustomerSecNum,
    fbPage = await req.body.FbPage,
    fbPageLink = await req.body.FbPageLink,
    notes = await req.body.Notes,
    requestttt = await req.body.Request,
    shippingPrice = await req.body.ShippingPrice,
    governerate = await req.body.Governerate,
    user_id = await req.current_user_id;

  // decode access token
  // get user_id

  connection.query(
    "INSERT INTO orders (user_id, CustomerName,CustomerAddress,Governerate,CustomerNum,CustomerSecNum,FbPage,FbPageLink,Notes,Request,ShippingPrice) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
    [
      user_id,
      customerName,
      customerAddress,
      governerate,
      customerNum,
      customerSecNum,
      fbPage,
      fbPageLink,
      notes,
      requestttt,
      shippingPrice,
    ],
    (error, result) => {
      if (error) {
        res.status(400).json({
          newrow: "notinserted",
        });

        throw error;
        console.log(error);
      } else {
        res.status(201).json({
          newrow: "is inserted",
        });
        console.log(res);
      }
    }
  );
});

app.get("/api/orders", authenticate, async (req, res) => {
  connection.query("SELECT * FROM orders", (error, result) => {
    if (error) {
      return res.status(422);
    } else {
      return res.json(result);
    }
  });
});

app.patch("/api/currentsorder", authenticate, (req, res) => {
  console.log("inside patch");
  connection.query(
    "UPDATE orders SET Status=? WHERE Id=" + req.body.Order_Id + " ",
    [req.body.Status],
    (error, result) => {
      if (error) {
        throw error;
        return res.status(422);
      } else {
        console.log("not error");
        return res.json(result);
      }
    }
  );
});

app.get("/api/profile", authenticate, async (req, res) => {
  connection.query(
    `SELECT * FROM orders WHERE user_id=${req.current_user_id}`,
    (error, result) => {
      if (error) {
        return res.status(422);
      } else {
        return res.json(result);
      }
    }
  );
});

app.post("/api/forgotpassword", async (req, res) => {
  connection.query(
    `SELECT * FROM users WHERE Email='${req.body.Email}'`,
    (error, rows) => {
      if (error) {
        throw error;
      } else {
        if (rows.length == 1) {
          console.log("true");
          const token = createToken(rows[0].Id);
          var mailOptions = {
            from: "bee3now.1@gmail.com",
            to: "" + req.body.Email + "",
            subject: "Reset Password",
            text: "Click Link to Change Password",

            html:
              '<p>Click <a href="' +
              process.env.REACT_APP_API_URL +
              "/retypepassword/" +
              token +
              '">here</a> to reset your password</p>',
          };

          mail.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });

          res.json(
            "تم ارسال رساله جديده الي بريدك الالكتروني تحتوي علي Link لتغيير الpassword"
          );
        } else {
          console.log("not found");
          res.json("هذا المستخدم ليس مسجل علي الموقع");
        }
      }
    }
  );
});

app.patch("/api/wallet", authenticate, async (req, res) => {
  connection.query(
    "UPDATE users SET Wallet=Wallet+? WHERE Id=" + req.body.user_id + " ",

    [req.body.wallet],

    (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log(req.body.wallet);
        console.log(req.body.user_id);
        res.json(result);
      }
    }
  );
});

app.patch("/api/emptywallet", authenticate, async (req, res) => {
  connection.query(
    "UPDATE users SET Wallet=" +
      req.body.Wallet +
      " WHERE Id=" +
      req.current_user_id +
      " ",

    [req.body.wallet],

    (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log(req.body.wallet);
        console.log(req.body.user_id);
        res.json(result);
      }
    }
  );
});

app.patch("/api/expectedprofit", authenticate, async (req, res) => {
  connection.query(
    "UPDATE users SET expectedprofit=expectedprofit+? WHERE Id=" +
      req.body.user_id +
      " ",

    [req.body.ExpectedProfit],

    (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log(req.body.ExpectedProfit);
        console.log(req.body.user_id);
        console.log("inside expectedprofit patch");
        res.json(result);
      }
    }
  );
});

app.patch("/api/decreaseexpectedprofit", authenticate, async (req, res) => {
  connection.query(
    "UPDATE users SET expectedprofit=expectedprofit-? WHERE Id=" +
      req.body.user_id +
      " ",

    [req.body.ExpectedProfit],

    (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log(req.body.ExpectedProfit);
        console.log(req.body.user_id);
        console.log("inside expectedprofit patch");
        res.json(result);
      }
    }
  );
});

app.post("/", async (req, res) => {
  const token = await req.body.token;

  console.log(token);
  if (typeof token != "undefined") {
    res.sendStatus(200);
  } else {
    console.log("error again");
  }
});

app.post("/admin/dashboard", async (req, res) => {
  const token = await req.body.token;

  console.log(token);
  if (typeof token != "undefined") {
    res.sendStatus(200);
  } else {
    console.log("error again");
  }
});

app.get(bestSellingProductsApi, (req, res) => {
  connection.query(
    `SELECT * FROM product ORDER BY id DESC LIMIT 4`,
    (err, rows, fields) => {
      if (err) {
        console.log(error);
      }

      res.json(rows);
    }
  );
});

app.get(allProductsApi, authenticate, (req, res) => {
  connection.query(`SELECT * FROM product `, (err, rows, fields) => {
    if (err) {
      console.log(error);
    }

    res.json(rows);
  });
});

app.get("/api/allproducts", authenticate, (req, res) => {
  connection.query(`SELECT * FROM product `, (err, rows, fields) => {
    if (err) {
      console.log(error);
    }

    res.json(rows);
  });
});

app.post("/api/profitwithdrawalemail", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE Id=" + req.current_user_id + "  ",

    (error, result) => {
      if (!!error) {
        console.log(error);
      }

      const token = createToken(result[0].Id);
      var href =
        process.env.REACT_APP_API_URL + "/withdrawalconfirmation/" + token + "";
      res.json(result[0]);
      var mailOptions = {
        from: "bee3now.1@gmail.com",
        to: "" + result[0].Email + "",
        subject: "سحب الارباح",

        html:
          "<h3>لقد طلبت تحويل مبلغ : " +
          result[0].Wallet +
          " جنيه علي رقم : " +
          req.body.TransferNumber +
          " بطريقة :" +
          req.body.TransferWay +
          "   للتأكيد اضغط <a href= " +
          href +
          " >هنا</a></h3>",
      };

      mail.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      mailOptions = {
        from: "bee3now.1@gmail.com",
        to: "bee3now.1@gmail.com",
        subject: "سحب الارباح",

        html:
          "<h3>لقد طلب العميل رقم :" +
          result[0].Id +
          " تحويل مبلغ : " +
          result[0].Wallet +
          " جنيه علي رقم : " +
          req.body.TransferNumber +
          " بطريقة :" +
          req.body.TransferWay +
          "</h3>",
      };

      mail.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  );
});

app.patch("/api/emptywallet", (req, res) => {
  connection.query(
    "UPDATE users SET Wallet=" +
      req.body.Wallet +
      "WHERE Id=" +
      req.current_user_id +
      "",
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/api/products/:category", (req, res) => {
  const category = req.params.category;

  connection.query(
    `SELECT * FROM product WHERE Category='${category}'`,
    (error, rows, fields) => {
      if (!!error) {
        console.log("query Error");
      } else {
        res.json(rows);
      }
    }
  );
});

app.get(walletsAndBagsApi, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='wallets' ||Category='bags '",
    (error, result) => {
      if (error) {
        console.log(error);
      } else {
        res.json(result);
      }
    }
  );
});

app.get("/api/bestselling/clothes", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='clothes' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/watches", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='watches' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/houseproducts", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='houseproducts' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/childproducts", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='childproducts' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/electricproducts", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='electricproducts' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/shavingproducts", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='shavingproducts' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/beautyproducts", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='beautyproducts' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/wallets", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='wallets' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/bags", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='bags' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

app.get("/api/bestselling/mobileaccessories", authenticate, (req, res) => {
  connection.query(
    "SELECT * FROM product WHERE Category='mobileaccessories' ORDER BY id DESC LIMIT 4",
    (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
        console.log(rows);
      }
    }
  );
});

// server/index.js

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
