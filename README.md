# JsonLoaderV2
_Simple JSON loading and saving utility_

`npm i jsonloaderv2`

## The loader
The "loader" works as a JSON file manager than can read and write

You simply import the loader then call it with its designated filename
```javascript
var jsonloader = require('jsonloaderv2');

var configLoader = new jsonloader("config.json");
```
This way the `configLoader` object can now manage the `config.json` file with `get()` and `save()`

### get([force = false])
Returns the content of the JSON file.
Use the `force` argument to force loading from the file and not from cache

```javascript
/*
 * Returns the content of the file then caches it
 * for future call
 */
var config = configLoader.get();

// Will always return the content from the file itself
var config = configLoader.get(true);
```


### save(json)
Saves the given JSON to the original file
and returns a promise 

```javascript
var configLoader = new jsonloader("config.json");

var config = configLoader.get();
config.value = "Something else";

configLoader.save(config).then(function(message){    
    // Save success
    console.log(message);    
}, function(err){
    // Save failure
    console.log(err)
})    

```