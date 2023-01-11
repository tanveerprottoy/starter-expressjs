import { ErrorUtils } from "../../utils/error-utils";
import { RedisClientInstance } from "./redis-client";

class RedisOps {
    private static instance: RedisOps;

    private constructor() {
        console.log("DbDataOps init");
        if(RedisOps.instance) {
            ErrorUtils.throwError(
                new Error("Error - already initialized")
            );
        }
    }

    async set(
        key: string,
        value: string,
    ) {
        try {
            return RedisClientInstance.client.set(
                key,
                value
            );
        }
        catch(e) {
            ErrorUtils.throwError(e);
        }
    }

    async get(
        key: string
    ) {
        try {
            return RedisClientInstance.client.get(
                key
            );
        }
        catch(e) {
            ErrorUtils.throwError(e);
        }
    }

    static getInstance(): RedisOps {
        RedisOps.instance = RedisOps.instance || new RedisOps();
        return RedisOps.instance;
    }
}

export const DbDataOpsInstance = RedisOps.getInstance();