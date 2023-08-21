
## Readme

The frontend application & selenium application codes are separated into subfolders. 
Each application has a dockerfile and docker-compose instructions for deployment.

* frontend application needs to be running before selenium can take a screenshot of the site. 
* images are exported to /selenium-py/images folder

Check the Readme files in each subfolders to see the local deployment options.

### Deployment with docker-compose

```   
docker-compose -f frontend/compose-dev.yml -f puppeteer/compose-dev.yml down
docker-compose -f frontend/compose-dev.yml -f selenium-py/compose-dev.yml build
docker-compose -f frontend/compose-dev.yml -f selenium-py/compose-dev.yml up
```


### changelog

# 0.3.0

* added puppeteer

# 0.2.0

* added frontend

# 0.1.0

* initial commit
