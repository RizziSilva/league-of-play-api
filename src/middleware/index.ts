import { handleBodyRequestParser, handleCors } from './common';

const middlewares: Array<Function> = [handleBodyRequestParser, handleCors];

export default [middlewares[Symbol.iterator]()];
