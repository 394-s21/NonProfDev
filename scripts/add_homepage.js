// For GH pages, add {homepage: "/NonProfDev"} to package.json
// so expo builds the web version with that url prefix
const fs = require('fs')
const fname = './package.json'
try {
  const json = JSON.parse(fs.readFileSync(fname, 'utf8'))
  json['homepage'] = '/NonProfDev'
  fs.writeFileSync(fname, JSON.stringify(json), 'utf8')
} catch (err) {
  console.log(err)
}
