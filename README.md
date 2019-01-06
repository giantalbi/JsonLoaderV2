# JsonLoaderV2
_Simple JSON loading and saving utility_

`npm i jsonloaderv2`

## The loader
The "loader" works as a JSON file manager than can read and write

You simply import the loader then call it with a designated name and filename
```javascript
var jsonloader = require('jsonloaderv2');

var configLoader = jsonloader("config", "config.json");
```
This way the `configLoader` object can now manage the `config.json` file and can be recreated later only using the designated name `config` without the filename argument
```javascript
var anotherConfigLoader = jsonload("config");
```
### get()
Returns the content of the JSON file

```javascript
var config = configLoader.get()
```

### save(json)
Saves the modification to the original file
and returns a promise 