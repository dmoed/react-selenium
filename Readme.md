### Deployments 

```   
docker-compose -f frontend/compose-dev.yml -f selenium-py/compose-dev.yml down
docker-compose -f frontend/compose-dev.yml -f selenium-py/compose-dev.yml build
docker-compose -f frontend/compose-dev.yml -f selenium-py/compose-dev.yml up
```


### changelog

# 0.2.0

* added frontend

# 0.1.0

* initial commit
