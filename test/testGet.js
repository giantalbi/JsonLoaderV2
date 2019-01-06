var expect = require('chai').expect;
var jsonLoader = require("../index");

const testFileContent = {
    "description": "This is a simple test JSON",
    "value": 42
};

describe("get([force = false])", function(){
    it("should load the file", function(){
        var testLoader = new jsonLoader("test/test.json");
        var test = testLoader.get();

        expect(test).to.eql(testFileContent);
    })
})