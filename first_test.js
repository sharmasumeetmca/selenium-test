//Open google.com and search for a term.

var webdriver = require('selenium-webdriver');

 

var driver = new webdriver.Builder().

   withCapabilities(webdriver.Capabilities.chrome()).

   build();

 

driver.get('http://www.google.com');


driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');

driver.findElement(webdriver.By.name('btnK')).click();
//driver.findElement(webdriver.By.id("_fZl")).click();
//driver.findElement(webdriver.By.xpath("//*[@id='gbqfb']/span")).click(); 

//driver.quit();