You can test this out by:

1) Install dependencies

    `lein deps && npm install`

2) Compile the cljs test runner.

     `lein cljsbuild once test-build`
	 
3) Run the coordinating script

    `node puppeteer_runner.js`
