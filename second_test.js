//Check if Images are there in google home page

var webdriver = require('selenium-webdriver');

 

var driver = new webdriver.Builder().

   withCapabilities(webdriver.Capabilities.chrome()).

   build();

 

driver.get('http://www.google.com');

if (driver.findElement(webdriver.By.linkText('Images')).isDisplayed()){
	console.log('Images Link Exists – Passed');
	}

else{
	console.log('Images Link Not Exists – Failed');
}
driver.quit();

