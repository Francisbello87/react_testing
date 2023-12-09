import "@testing-library/jest-dom";
import 'whatwg-fetch';
import {server} from '@/mocks/server';

// import { TextEncoder, TextDecoder } from "text-encoding";
// import "web-streams-polyfill";

// global.TextEncoder = TextEncoder;
// global.TextDecoder = TextDecoder;
// import { worker } from "@/mocks/server";

beforeAll(() => {
    server.listen()
})

beforeEach(() => {})

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
    server.close()
});



