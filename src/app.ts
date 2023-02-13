import express from "express";
import cors from "cors";
import { DbClientInstance } from "./libs/mongodb";
import { GlobalValues } from "./utils/constants";
import { initUserRouter } from "./modules/users/users-router";
import { initContentRouter } from "./modules/contents/contents-router";

// init db
DbClientInstance.init(GlobalValues.DB_HOST, GlobalValues.DB_NAME);

export const app: express.Application = express();
const port: number = GlobalValues.PORT;

// enabling cors for all requests by using cors middleware
app.use(cors());

// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());
// parse requests of application/x-www-form-urlencoded
app.use(express.urlencoded({
    extended: true
}));

app.use(GlobalValues.API + GlobalValues.V1 + '/users', initUserRouter());
app.use(GlobalValues.API + GlobalValues.V1 + '/contents', initContentRouter());

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
