# instructions
jest:
npm install --save-dev jest

ts-jest:
// used for typescript
npm install --save-dev ts-jest
npx/npm ts-jest config:init

jest/globals:
npm install --save-dev @jest/globals
import {describe, expect, test} from '@jest/globals';

supertest:
npm i -D @types/supertest
import { agent as request } from "supertest";

package.json:
"scripts": {
    "test": "jest --watchAll --verbose"
}