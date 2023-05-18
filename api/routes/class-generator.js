import { getClassRecords } from "../controllers/class-generator.js";

export const connectClassRoute = (router) => {
  router.route("/class").post(getClassRecords);
};
