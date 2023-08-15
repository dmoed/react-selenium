

### run in development machine

outputs an image out.png of the site page 

```
python ./main.py 
```

### deployment & docker builds

``` 
docker build -t react-selenium-py .
docker run react-selenium-py
```

```   
docker-compose -f compose-dev.yml down
docker-compose -f compose-dev.yml build
docker-compose -f compose-dev.yml up
```

#### chrome driver 
