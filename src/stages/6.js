const banco = require("../banco");
const stages = require("../stages");


let estagioInterno = 0;

function execute(user, msg) {
  
    return stages.step[4].obj.execute(user, "");


}

exports.execute = execute;