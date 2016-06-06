     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


### NODEJS + REDIS SETUP

#### Create a workspace on C9 
```
1) Name your workspace: nodejs-benchmark
2) Choose "blank" template as workspace configuration
3) On input "Clone from Git or Mercurial URL (optional)" enter: https://github.com/Groupe-Atallah/turbo.git
4) Once your environment is loaded, in the console you will be requested to enter your git username and password	
5) Checkout the nodejs branch: git checkout nodejs
```

#### Initialize the project (Press enter and accept the options when requested)
```
sh ./setup.sh
```

#### Start redis and node server
```
sudo service redis-server start
node express-nodejs-benchmark.js
```

#### Endpoints
```
URL "/" for redis simple pipe
URL "/redis-multi-pipe" for redis multi-pipe
URL "/redis-simple" for simple redis without pipe
```
