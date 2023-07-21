const express = require("express");
const UseRouters = require("./routes/UseRouters");
const path = require("path")
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const Details = require("./models/Detail");
const login = require("./models/login");
const bodyParser = require("body-parser");
app.use(express.static("public"));
const dotenv = require("dotenv");
const db ="mongodb+srv://shreyash:shreyashsoni@cluster0.ajzhkkh.mongodb.net/db?retryWrites=true&w=majority";
const routes = require("./routes/main");
app.set("view engine", "ejs");
app.set("views", "views");
const slider = require("./models/slider");
const section = require("./models/section2");
const enquiry = require("./models/enquiry");
const contact = require("./models/contact");
const Blogdetail = require("./models/Blogdetails");
const product = require("./models/product");
const product1 = require("./models/product1");
const product2 = require("./models/product2");
const product3 = require("./models/product3");
const product4 = require("./models/product4");
const product5 = require("./models/product5");
const project = require("./models/project");
const video = require("./models/video");
const gallery = require("./models/gallery");
const gallery1 = require("./models/gallery1");
const gallery2 = require("./models/gallery2");
const gallery3 = require("./models/gallery3");
const Policies = require("./models/privacypolicy");
const Terms = require("./models/Terms_of_use");
const career = require("./models/career");
const apply = require("./models/apply");
const Parts = require("./models/parts");
const Subscription = require("./models/Subscription");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
// const { Session } = require('inspector');
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 7000;

const staticpath = path.join(__dirname,"./views");
app.use(express.static(staticpath));
app.use(cookieParser());
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));


//Routes

app.use("/api/v1", UseRouters);
app.use("", routes);

//Routes

// dotenv.config()
mongoose.set("strictQuery", true);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db connected");
  });
app.listen(port, () => {
  console.log("Server started");
});
