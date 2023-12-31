"use strict";
exports.handler = async function(event) {
  return await (
          (await (async () => {
            const $Closure3Client = 
          require("./inflight.$Closure3-1.js")({
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
            $math_Util: require("/Users/josh/.volta/tools/image/packages/winglang/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/math/math.js").Util,
            $std_Json: require("/Users/josh/.volta/tools/image/packages/winglang/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ).handle(event);
};