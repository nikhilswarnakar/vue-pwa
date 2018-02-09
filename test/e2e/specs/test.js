// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Crew Leave e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    // browser
    //   .url(devServer)
    //   .waitForElementVisible('#app', 5000)
    //   .assert.elementPresent('.hello')
    //   .assert.containsText('h1', 'Welcome to Your Vue.js PWA')
    //   .assert.elementCount('img', 1)
    //   .end()

      browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      //.assert.elementPresent('app')
      .assert.containsText('h1', 'Welcome to App!')
      .assert.containsText('h3', 'CREW LEAVE')
      .assert.elementCount('img', 1)
      .waitForElementVisible('button[id=showquotabtn]', 500)
      .waitForElementVisible('button[id=cancelbtn]', 500)
      .saveScreenshot('crew-leave-home-page.png')
      .end()
  }
}
