var expect = require('chai').expect;
var jsonLoader = require("../index");

const testFileContent = {
    "description": "This is a simple test JSON",
    "value": 42
};

describe("save(content)", function(){
    it("Save the file", function(){
        var testLoader = new jsonLoader("testSave", "test/testSave.json");
        var test = testLoader.get();
        test.value++;
        return testLoader.save(test).then(function(message){    
            console.log(message);
            // Save success
            var testSaved = testLoader.get();
            expect(testSaved.value).to.not.eql(testFileContent.value);
        }, function(err){
            // Save failure
            console.log(err)
        })        
    })

})