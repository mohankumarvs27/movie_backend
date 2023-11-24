import express from "express";
import { body } from "express-validator";
import reviewController from "../controller/review.controller.js";
import tokenMiddleware from "../middlewares/token.middleware.js";
import requestHandler from "../handlers/request.handler.js";

const router = express.Router({ mergeParams: true });

router.get("/", tokenMiddleware.auth, reviewController.getReviewsOfUser);

router.post(
  "/",
  tokenMiddleware.auth,
  body("mediaId")
    .exists()
    .withMessage("mediaId is required")
    .isLength({ min: 1 })
    .withMessage("mediaId can not be empty"),

  body("content").exists().withMessage("content is required"),
  body("mediaType")
    .exists()
    .withMessage("mediaType is required")
    .custom((type) => ["movie", "tv"].include(type))
    .withMessage("mediaType invalid"),
  body("mediaTitle").exists().withMessage("media Title is required"),
  body("mediaPoster").exists().withMessage("media Poster is required"),
  requestHandler.validate,
  reviewController.create
);

router.delete(
  "/:reviwId",
  tokenMiddleware.auth,
  reviewController.create,
  reviewController.remove
);

export default router;
