from selenium import webdriver
from selenium.webdriver.firefox.options import Options
import time
i=0
while True:
	i=i+1

	options = Options()
	options.headless = True
	print("Starting auto Admin Logger Session "+str(i))
	driver = webdriver.Firefox(options=options)
	# driver = webdriver.Firefox()
	driver.get('http://localhost/php-mysql-login/')
	username = driver.find_element_by_id("name")
	password = driver.find_element_by_id("password")

	username.send_keys("admin")
	password.send_keys("wubbalubbadubdub")

	driver.find_element_by_name("submit").click()
	print("Login Successful")
	time.sleep(5)
	driver.quit()
time.sleep(60)
