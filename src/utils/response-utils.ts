import express from "express";

export class ResponseUtils {

    static buildData(
        data: any
    ): any {
        return {
            data: data
        };
    }

    static respond(
        code: number,
        payload: any,
        res: express.Response,
    ): any {
        res.status(code).send(payload);
    }
}