const cypress = require('cypress');
const fs = require('fs');
const path = require('path');

cypress.run({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: './tests/reporter-config.json'
  },
  screenshotsFolder: 'cypress/screenshots/',
  testFiles: "**/*.{feature,features}",
  browser: 'firefox',
  spec: './cypress/integration/challenge/**.feature',
  config: {
    baseUrl: 'http://qainterview.pythonanywhere.com/',
    video: false
  }
})
    .then((results) => {
      let foundFiles = screenshotList('cypress/screenshots');
      foundFiles.forEach( f => {
        fs.renameSync(f.oldSrc, f.newSrc);
      });

      return;
    })
    .catch((err) => {
      console.log(err);
      return;
    });

const screenshotList = (dir, filelist = []) => {
  let files = fs.readdirSync(dir);

  files.forEach(file => {
    if(fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = screenshotList(path.join(dir, file), filelist);
    } else {
      let name = file.replace('#', '');
      let src = path.join(dir, file);
      let newSrc = path.join(dir, name);
      filelist.push({
        oldSrc: src,
        newSrc: newSrc
      });
    }
  })
  return filelist;
}