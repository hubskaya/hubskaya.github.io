Building
===

To work with project files you will need to install its dependencies first:

    npm install

In order to build project you will need to have gulp installed globally.
    
    npm install gulp -g
    
To build CSS - run

    gulp less
    
from project directory. To watch for changes in less files - rin

    gulp watch
    
note that sometimes you will have to restart a watcher (it may misbehave). Also it needs to be restarted whenever
new less files are added.