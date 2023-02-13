export const GlobalValues = {
    PORT: 8080,
    API: "api",
    V1: "v1",
    DB_HOST: "mongodb://localhost:27017",
    DB_USER: "root",
    DB_PASS: "root",
    DB_NAME: "starterExpressDb",
    UPDATE_FAILED: "Update failed",
    GENERIC_ERROR: "An error occurred",
} as const;

export const HttpCodes = {
    HTTP_200: 200,
}