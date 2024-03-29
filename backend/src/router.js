const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// Destination de stockage des fichiers
const uploadAvatar = multer({
  dest: "public/uploads/avatar/",
  limits: { fileSize: "10485760" },
  fileFilter: (_req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      `Error: File upload only supports the following filetypes - ${fileTypes}`
    );
    return "";
  },
});
const uploadCV = multer({
  dest: "public/uploads/cv/",
  limits: { fileSize: "10485760" },
  fileFilter: (_req, file, cb) => {
    const fileTypes = /pdf/;
    const mimetype = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(
      `Error: File upload only supports the following filetypes - ${fileTypes}`
    );
    return "";
  },
});

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");
const offerControllers = require("./controllers/offerControllers");
const companyControllers = require("./controllers/companyControllers");
const infoControllers = require("./controllers/infoControllers");
const addressControllers = require("./controllers/addressControllers");

const adminControllers = require("./controllers/adminControllers");

const uofferControllers = require("./controllers/uofferControllers");

// const decodeToken = require("./services/jwt");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// routes User
router.post("/register", userControllers.add);
router.post("/login", userControllers.log);

// routes offers
router.get("/offers", offerControllers.browse);
router.get("/offers/:id", offerControllers.read);
router.post("/offers", offerControllers.add);
router.put("/offers/:id", offerControllers.edit);
router.delete("/offers/:id", offerControllers.destroy);

// routes company
router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.post("/company", companyControllers.add);
router.put("/company/:id", companyControllers.edit);
router.delete("/company/:id", companyControllers.destroy);
router.patch("/company/validate/:id", companyControllers.validate);

// routes information
router.get("/information", infoControllers.browse);
router.get("/information/:id", infoControllers.read);
router.put("/information/:id", infoControllers.edit);
router.put("/information/cv/:id", infoControllers.editCV);
router.put(
  "/information/currentSituation/:id",
  infoControllers.editCurrentSituation
);

// routes address
router.get("/address", addressControllers.browse);
router.get("/address/:id", addressControllers.read);
router.put("/address/:id", addressControllers.edit);

// router.use(decodeToken);
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.put("/users/edit-password/:id", userControllers.editPassword);
router.delete("/users/:id", userControllers.destroy);

// routes user_offer

router.post("/uoffer", uofferControllers.add);
router.delete("/uoffer/:id/:offer", uofferControllers.destroyWhatever);
router.get("/user-offers/:id", uofferControllers.browser);

// route admin for deleting multiple users and all associated entries
router.delete("/users-deletion", adminControllers.destroyMultiple);
router.put("/edit-role", adminControllers.updateRole);

// route POST pour recevoir un fichier
router.post("/uploads/avatar", uploadAvatar.single("avatar"), (req, res) => {
  const { originalname } = req.file;

  const { filename } = req.file;

  fs.rename(
    `${path.join(__dirname, "../public")}/uploads/avatar/${filename}`,
    `${path.join(__dirname, "../public")}/uploads/avatar/${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

router.post("/uploads/cv", uploadCV.single("cv"), (req, res) => {
  const { originalname } = req.file;
  const { filename } = req.file;

  fs.rename(
    `${path.join(__dirname, "../public")}/uploads/cv/${filename}`,
    `${path.join(__dirname, "../public")}/uploads/cv/${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

module.exports = router;
