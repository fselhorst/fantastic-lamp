# NERD stack

## How to run

- Install Docker on machine or server
- Clone the repo to desired location
- Go to root of the cloned directory and run following commands:

```bash
    # BUILD CONTAINERS
    ~ docker-compose build api web
    
    # RUN CONTAINERS
    # OPTION 1: ATTACHED MODE
    ~ docker-compose up
    # this runs in attached mode  
    # ctrl-c to kill the app

    # OPTION 2:
    docker-compose up -d 
    # this runs in detached mode 
    # to stop it do 
    docker ps
    # then 
    docker stop CONTAINER_ID
```

- The app should be running on the machine/server now at http://localhost the api is available under http://localhost/api


## What is all this

Currently the repo contains 2 folders **web** and **api** pretty self explanatory what they are.
In the web folder is also an **nginx** folder which functions as the bridge between api and web.

The **web** app currently is a *create-react-app* static production build

The **api** is a very simple node.js express setup that currently only returns a json object