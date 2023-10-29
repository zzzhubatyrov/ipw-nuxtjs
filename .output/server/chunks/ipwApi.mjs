import { d as defineEventHandler } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const ipwApi = defineEventHandler(() => {
  return {
    message: "Hello World!"
  };
});

export { ipwApi as default };
//# sourceMappingURL=ipwApi.mjs.map
