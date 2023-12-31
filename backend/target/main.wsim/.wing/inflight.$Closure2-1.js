"use strict";
module.exports = function({ $counter, $std_Json }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle(req) {
      (await $counter.inc());
      const count = (await $counter.peek());
      return ({"body": ((args) => { return JSON.stringify(args[0], null, args[1]?.indent) })([count]), "status": 200});
    }
  }
  return $Closure2;
}
//# sourceMappingURL=inflight.$Closure2-1.js.map