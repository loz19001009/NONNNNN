const client = require("../../index");
const set = require("../../settings/settings.js");
const chalk = require('chalk')
const db = require('quick.db')
console.clear()
var _0x5a00aa=_0xc0d9;function _0xc0d9(_0x1a3069,_0xb09555){var _0x5c0071=_0x2bab();return _0xc0d9=function(_0x80ae6e,_0x2baa87){_0x80ae6e=_0x80ae6e-(-0x948+0x209b+-0x15ac*0x1);var _0x260edd=_0x5c0071[_0x80ae6e];return _0x260edd;},_0xc0d9(_0x1a3069,_0xb09555);}function _0x2bab(){var _0x3a1d6e=['\x20\x20\x20\x20\x20║\x0a\x20\x20\x20','\x20\x20\x20║\x0a║\x20\x20\x20\x20','═══════╗\x0a║','3478641fBAVaK','username','\x20\x20Friday\x20Su','user','greenBrigh','1350jZKtvN','\x20\x20\x20\x20\x20\x20\x20[de','4358932gLkWUK','7155825oDVYXd','18632HjONFe','25069330xWwdEl','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','\x20\x20\x20\x20\x20\x20\x20','\x20║\x0a╚══════','2536rIokTX','log','\x0a╔════════','══════════','LINE\x0a║\x20\x20\x20\x20','═════════╝','\x20fridau.su]','7SHQchM','\x20IS\x20NOW\x20ON','6558666NKYgno','802MpUPqS','\x20\x20\x20\x20\x20\x20\x20\x20\x20©','veloper\x20by','ready','\x20\x20\x20\x20\x20║\x0a║\x20\x20'];_0x2bab=function(){return _0x3a1d6e;};return _0x2bab();}(function(_0xf526b9,_0x1eaa4a){var _0x5cbbc6=_0xc0d9,_0x441ced=_0xf526b9();while(!![]){try{var _0xc495dd=parseInt(_0x5cbbc6(0x1c1))/(0x169c+-0xb4f+0x5a6*-0x2)*(parseInt(_0x5cbbc6(0x1b7))/(-0x1*-0x134f+0x1*-0x1120+-0x22d*0x1))+parseInt(_0x5cbbc6(0x1a9))/(0x3b9*-0x9+0xdaf+-0x1*-0x13d5)+parseInt(_0x5cbbc6(0x1b0))/(-0x161e+0x2e2+0x1340)+parseInt(_0x5cbbc6(0x1b1))/(-0x448*0x8+-0x12d3+-0x4*-0xd46)+parseInt(_0x5cbbc6(0x1c0))/(-0x36*-0x27+0x1cb3+-0x24e7)*(-parseInt(_0x5cbbc6(0x1be))/(-0x2503*-0x1+0x3ae+0x1*-0x28aa))+-parseInt(_0x5cbbc6(0x1b2))/(-0x696*-0x1+-0x181c+0x118e)*(parseInt(_0x5cbbc6(0x1ae))/(-0x777+-0x359*-0x7+-0xfef))+-parseInt(_0x5cbbc6(0x1b3))/(-0x133f+0x1c97+-0x94e);if(_0xc495dd===_0x1eaa4a)break;else _0x441ced['push'](_0x441ced['shift']());}catch(_0x3dbe51){_0x441ced['push'](_0x441ced['shift']());}}}(_0x2bab,0x3e3c5+-0x13*0x36f+0x7c74b),client['on'](_0x5a00aa(0x1c4),()=>{var _0x498314=_0x5a00aa;console[_0x498314(0x1b8)](chalk[_0x498314(0x1ad)+'t'](_0x498314(0x1b9)+_0x498314(0x1ba)+_0x498314(0x1ba)+_0x498314(0x1ba)+_0x498314(0x1a8)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1c6)+_0x498314(0x1b5)+client[_0x498314(0x1ac)][_0x498314(0x1aa)]+(_0x498314(0x1bf)+_0x498314(0x1bb)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1b6)+_0x498314(0x1ba)+_0x498314(0x1ba)+_0x498314(0x1ba)+_0x498314(0x1bc)+_0x498314(0x1b9)+_0x498314(0x1ba)+_0x498314(0x1ba)+_0x498314(0x1ba)+_0x498314(0x1a8)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1c5)+_0x498314(0x1af)+_0x498314(0x1c3)+_0x498314(0x1bd)+_0x498314(0x1b4)+_0x498314(0x1a7)+_0x498314(0x1c2)+_0x498314(0x1ab)+_0x498314(0x1b4)+_0x498314(0x1b4)+_0x498314(0x1b6)+_0x498314(0x1ba)+_0x498314(0x1ba)+_0x498314(0x1ba)+_0x498314(0x1bc)+'\x0a')));}));


client.on('ready', async () => {
  const activites = [
    { name: `${client.users.cache.size} Users`, type: "PLAYING" },
  ];

  let activity = 0;
  client.user.setPresence({ status: "online", activity: activites[0] });

  setInterval(() => {
    if (activity === activites.length) return activity = 0;
    activity++;
    client.user.setActivity(activites[activity]);
  }, 200 * 200);
});



