"use strict";
module.exports = function({ $counter, $std_Json }) {
  class $Closure4 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(req) {
      (await $counter.set(0));
      const count = 0;
      return ({"body": ((args) => { return JSON.stringify(args[0], null, args[1]?.indent) })([count]), "status": 200});
    }
  }
  return $Closure4;
}
//# sourceMappingURL=inflight.$Closure4-1.js.map