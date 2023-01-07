import express from "express";
import cors from "cors";
import { DbClientInstance } from "./libs/mongodb";
import { GlobalValues } from "./utils/constants";
import { initUserRouter } from "./modules/users/users-router";

// init db
DbClientInstance.init(GlobalValues.DB_HOST, GlobalValues.DB_NAME);

const app: express.Application = express();
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

app.use(GlobalValues.API + GlobalValues.V1 + '/users', initUserRouter(app));

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
