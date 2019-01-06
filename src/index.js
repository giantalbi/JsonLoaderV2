/**
 * Json Loader v2
 */
import fs, { writeFile } from 'fs';
import path from 'path';

let loaded = {};

function _save(file, json) {
    return new Promise((success, reject) => {
        writeFile(path.resolve(file), JSON.stringify(json), err => {
            if (err)
                reject('[JsonLoaderV2] Error writing ' + file + ': ' + err.message);
            success('[JsonLoaderV2] Saved file ' + file);
        })
    })
}

export default function loader(name, file = undefined) {
    if (loaded[name] === undefined && file !== undefined) {
        // Create a loader object for the specified file
        let loader = {};
        loader.get = () => {
            return require(path.resolve(file));
        };
        loader.save = () => {
            return new Promise((success, reject) => {
                _save(file, loader.get()).then(message => {
                    console.log(message)
                    success();
                }).catch(message => {
                    console.log(message);
                    reject();
                })
            })
        };
        loaded[name] = loader;
        return loader;

    }else if(loaded[name]){
        return loaded[name];
    }else{
        throw new Error('[JsonLoaderV2] No chached file named ' + name);
    }
}