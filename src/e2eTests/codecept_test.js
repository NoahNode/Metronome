Feature('My test');

Scenario('test', (I) => {
    I.amOnPage('http://localhost:3000')
    I.see('Start')
});