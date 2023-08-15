from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from PIL import Image

options = Options()
options.add_argument("--headless")
options.add_argument("--disable-gpu")
options.add_argument("--window-size=1920,1080")
options.add_argument("--no-sandbox")
options.add_argument('--disable-dev-shm-usage')
options.add_argument("--log-level=3")
driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()), options=options)

def take_screenshot():
    return 'taken!'

def main():   
    url = 'http://localhost:3000/'
    driver.get(url)
    print("open", url)
    #take & save screenshot
    driver.save_screenshot('images/out.png')
    driver.quit()

if __name__ == '__main__':
    main()
