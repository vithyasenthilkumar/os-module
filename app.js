const os = require('os')
console.log('tmpdir : ' + os.tmpdir());
console.log('endianness : '+ os.endianness());
console.log('hostname : '+ os.hostname());
console.log('type : '+ os.type());
console.log('platform : '+os.platform())
console.log('arch : '+os.arch())
console.log('release : '+os.release())
console.log('uptime : '+os.uptime())
console.log('loadavg : '+os.loadavg())
console.log('cpus : '+os.cpus())
console.log('networkInterfaces: '+os.networkInterfaces())
console.log('totalmemory : '+os.totalmem())
console.log('freememory : '+os.freemem())