import { DbClientInstance } from "./libs/mongodb";
import { GlobalValues } from "./utils/constants";
import { createServer } from "./server";

// init db
DbClientInstance.init(GlobalValues.DB_HOST, GlobalValues.DB_NAME);

createServer();
