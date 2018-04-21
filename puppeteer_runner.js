os = require('os');
puppeteer = require ('puppeteer');



async function exec(){
    
    const cores = os.cpus().length;
    
    const browser = await puppeteer.launch({headless:false});

    pages = Array(cores);
    for (let page of pages.keys()){
	pages[page] = await browser.newPage();
	await pages[page].goto ("file://" + __dirname + "/resources/public/index.html")

	pages[page].on('console', msg => {
	    console.log(msg._text);
	});

    }

    

    result_tally = {test:0,pass:0,fail:0,error:0};
    function report_tally(){
	console.log (result_tally.test + " tests run, " + result_tally.pass + " passed, " + result_tally.fail + " failures, " + result_tally.error + " errors.");
    }

    
    function merge_with_add(obj1, obj2){
	for (property in obj1){
	    obj1[property] = obj1[property] + obj2[property];
	}
    }


    available_pages = Array.from(pages.keys())

    total_namespaces = await pages[0].evaluate (() => {
	return cljs_parallel_test_example.runner.get_total_namespaces();
    });


    current_namespace = 0;
    
    function queue_next(){


	var page = available_pages.shift();

	promise = pages[page].evaluate(n => {
	    return cljs_parallel_test_example.runner.run_ns_block(n);
	}, current_namespace);

	current_namespace ++;
	promise.then(function(result){

	    merge_with_add(result_tally,result);
	    
	    available_pages.push(page);

	    if (current_namespace < total_namespaces){
		queue_next();
	    }
	    else if (available_pages.length == cores){
		report_tally();
		browser.close();
	    }
	});

	return promise;
    }

    function queue_start(){
	var p;
	while(available_pages.length>0 && current_namespace < total_namespaces){
	    p=queue_next();
	}
	return p;
    }

    await queue_start();    
}
 

exec();
