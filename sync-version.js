const fs = require('fs');

// Get version number from package.json
const version = JSON.parse(
  fs.readFileSync(__dirname + '/package.json', 'utf8')
).version;

// Files to update
const files = ['composer.json'];
for (let i = 0; i < files.length; i++) {
  const filename = __dirname + '/' + files[i];
  const content = JSON.parse(fs.readFileSync(filename, 'utf8'));
  if (content.version !== version) {
    content.version = version;
    const newContent = JSON.stringify(content, null, '\t');
    fs.writeFileSync(filename, newContent, 'utf8');
    console.log('Updated version in', files[i]);
  }
}
