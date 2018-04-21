You can test this out by:

1) install dependencies

    lein deps && npm install

2) compile the cljs test runner.

     lein cljsbuild once test-build
	 
3) run the coordinating script

    node puppeteer_runner.js
