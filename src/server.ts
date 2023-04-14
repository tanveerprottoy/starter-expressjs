import express from "express";
import cors from "cors";
import helmet from "helmet";
import { GlobalValues } from "./utils/constants";
import { initUserRouter } from "./modules/users/users-router";
import { initContentRouter } from "./modules/contents/contents-router";
import { DbClientInstance } from "./libs/mongodb";

export async function createServer() {
    // init db
    await DbClientInstance.init(GlobalValues.DB_HOST, GlobalValues.DB_NAME);
    const app: express.Application = express();
    const port: number = GlobalValues.PORT;

    // enabling cors for all requests by using cors middleware
    app.use(cors());

    app.use(helmet());

    // parse requests of content-type: application/json
    // parses incoming requests with JSON payloads
    app.use(express.json());
    // parse requests of application/x-www-form-urlencoded
    app.use(express.urlencoded({
        extended: true
    }));

    app.use(GlobalValues.API + GlobalValues.V1 + "/users", initUserRouter());
    app.use(GlobalValues.API + GlobalValues.V1 + "/contents", initContentRouter());

    app.listen(port, () => {
        console.log(`server started at http://localhost:${port}`);
    });
    return app;
}

/* export async function createServerCluster() {
    const numCPUs = availableParallelism();

    if(cluster.isPrimary) {
        console.log(`Primary ${process.pid} is running`);

        // Fork workers.
        for(let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        // Workers can share any TCP connection
        // In this case it is an HTTP server
        http.createServer((req, res) => {
            res.writeHead(200);
            res.end('hello world\n');
        }).listen(8000);

        console.log(`Worker ${process.pid} started`);
    }
} */