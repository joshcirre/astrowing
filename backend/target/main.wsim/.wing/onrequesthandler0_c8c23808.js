"use strict";
exports.handler = async function(event) {
  return await (
          (await (async () => {
            const $Closure1Client = 
          require("./inflight.$Closure1-1.js")({
            $counter: (function() {
  let handle = process.env.COUNTER_HANDLE_e5a56560;
  if (!handle) {
    throw new Error("Missing environment variable: COUNTER_HANDLE_e5a56560");
  }
  const simulatorUrl = process.env.WING_SIMULATOR_URL;
  if (!simulatorUrl) {
    throw new Error("Missing environment variable: WING_SIMULATOR_URL");
  }
  return require("@winglang/sdk/lib/simulator/client").makeSimulatorClient(simulatorUrl, handle);
})(),
            $std_Json: require("/Users/josh/.volta/tools/image/packages/winglang/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ).handle(event);
};