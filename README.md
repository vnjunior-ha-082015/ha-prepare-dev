# temp

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Step to setup

1.  Pull project
2.  Tools will have manually given to you, place it in your project folder 
3.  Create batch file with this command (modify the path point to proper location)
```
set JAVA_HOME=C:\jdk1.7.0_25
set JAVA_OPTS=-Xms512m -Xmx512m -XX:MaxPermSize=256m
set no_proxy=127.0.0.1, localhost
set PATH=%JAVA_HOME%\bin;%M3_HOME%\bin;%PATH%;C:\Tools\Ruby21\bin;%APPDATA%\npm
d:
cd D:\source\
cmd
cls
exit
```
4.  Run this batch
5.  Run `npm install`
6.  Run `bower install`
7.  Run `grunt serve`
8.  In the browser that has just opened, go to [login page](http://localhost:9000/#/login)
