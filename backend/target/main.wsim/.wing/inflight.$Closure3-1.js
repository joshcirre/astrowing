"use strict";
module.exports = function({ $counter, $math_Util, $std_Json }) {
  class $Closure3 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(req) {
      const count = (await $math_Util.round((await $math_Util.random(1000))));
      (await $counter.set(count));
      return ({"body": ((args) => { return JSON.stringify(args[0], null, args[1]?.indent) })([count]), "status": 200});
    }
  }
  return $Closure3;
}
//# sourceMappingURL=inflight.$Closure3-1.js.map