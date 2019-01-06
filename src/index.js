/**
 * Json Loader v2
 */
import fs, { writeFile } from 'fs';
import path from 'path';

export default class Loader{
    constructor(name, file = undefined){
        this.name = name;
        this.file = file;
    }

    get(force = false){
        if(!this.cache && !force){
            this.cache = require(path.resolve(this.file));            
        }
        return this.cache;
    }

    save(json){
        return new Promise((success, reject) => {
            writeFile(path.resolve(this.file), JSON.stringify(json), err => {
                if (err)
                    reject('[JsonLoaderV2] Error writing ' + this.file + ': ' + err.message);
                else
                    success('[JsonLoaderV2] Saved file ' + this.file);
            })
        })
    }
}