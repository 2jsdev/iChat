import express from "express";
import fs from "fs";
import removeExtension from "../utils/handleRemoveExtension";

const router = express.Router();

const PATH_ROUTES = __dirname;

fs.readdirSync(PATH_ROUTES).filter((file) => {
  const fileName = removeExtension(file);

  if (fileName !== "index") {
    router.use(`/${fileName}`, require(`./${fileName}`).default);
  }
});

export default router;
