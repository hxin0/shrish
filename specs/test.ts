import { browser, element, by } from "protractor";
// import { ConsoleReporter } from "jasmine";

describe('protractor', function(){
    beforeEach(function () {
        browser.ignoreSynchronization = true;
      });

    fit('errors in protractor', ()=>{
        browser.get("https://google.com");
        let flag = true;
        element(by.name("btnI")).getAttribute("aria-label")
        .then(null, function(err){
            flag = false
            console.log("the error occured is: " + err.name)
        })
        .then(null, function(aria){
            if (flag) {
                console.log('****');
                console.log(aria);
            } else {
                console.log('$$$$')
            }
        })
        
    })

    it('test', async()=>{
        console.log("asdf");
    })
});
