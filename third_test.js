//Search for Gmail on google home page and open it.

var webdriver = require('selenium-webdriver');

 

var driver = new webdriver.Builder().

   withCapabilities(webdriver.Capabilities.chrome()).

   build();

 

driver.get('http://www.google.com');

if (driver.findElement(webdriver.By.linkText('Gmail')).isDisplayed()){
	driver.findElement(webdriver.By.linkText('Gmail')).click();

	}

else{
	console.log('Gmail Link Not Exists – Failed');
}
driver.quit();

