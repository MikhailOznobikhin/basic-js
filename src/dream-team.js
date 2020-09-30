const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false
  let team = '';
  members.forEach(e => {
    if(typeof(e)==='string'){
      e = e.trim()
      e = e.toLowerCase()
      if(/^[a-z]$/.test(e[0])){
        team = team + e[0]
      }  
    }
  });

  return team.split('').sort().join('').toUpperCase()
};
