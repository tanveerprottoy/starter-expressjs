import { createClient, RedisClientType } from "redis";
import { ErrorUtils } from "../../utils/error-utils";

class RedisClient {
    private static instance: RedisClient;
    client: RedisClientType;

    private constructor() {
        console.log("RedisClient init");
        if(RedisClient.instance) {
            ErrorUtils.throwError(
                new Error("Error - already initialized")
            );
        }
    }

    /**
     * @param uri - mongodb uri.
     * @param name - the db name.
     */
    async init(
        url: string
    ) {
        try {
            this.client = createClient({
                url: url
            });
            this.client.on("error", (err: Error) => console.log("Redis Client Error", err));
            await this.client.connect();
            console.log("Connected successfully");
        }
        catch(e) {
            this.disconnect();
            ErrorUtils.throwError(e);
        }
    }

    disconnect() {
        this.client.disconnect();
    }

    static getInstance(): RedisClient {
        RedisClient.instance = RedisClient.instance || new RedisClient();
        return RedisClient.instance;
    }
}

export const RedisClientInstance = RedisClient.getInstance();