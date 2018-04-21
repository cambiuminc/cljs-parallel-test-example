// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_parallel_test_example.runner');
goog.require('cljs.core');
goog.require('cljs_parallel_test_example.ns_split');
goog.require('cljs.test');
goog.require('cljs.analyzer.api');
goog.require('cljs_parallel_test_example.sample');
goog.require('cljs_parallel_test_example.test_1');
goog.require('cljs_parallel_test_example.test_2');
goog.require('cljs_parallel_test_example.test_3');
goog.require('cljs_parallel_test_example.test_4');
cljs.core.enable_console_print_BANG_.call(null);
cljs_parallel_test_example.runner.tests_block_seq = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.get_current_env.call(null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.test-1","cljs-parallel-test-example.test-1",-826753885,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10406__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10406__auto__))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cljs_parallel_test_example.test_1.ident;},new cljs.core.Symbol("cljs-parallel-test-example.test-1","ident","cljs-parallel-test-example.test-1/ident",1763804035,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.test-1","cljs-parallel-test-example.test-1",-826753885,null),new cljs.core.Symbol(null,"ident","ident",1639789181,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/test_1.cljs",15,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.test_1.ident)?cljs_parallel_test_example.test_1.ident.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10406__auto__))
], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.test-1","cljs-parallel-test-example.test-1",-826753885,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.get_current_env.call(null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.test-2","cljs-parallel-test-example.test-2",-2018823099,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10406__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10406__auto__))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cljs_parallel_test_example.test_2.ident;},new cljs.core.Symbol("cljs-parallel-test-example.test-2","ident","cljs-parallel-test-example.test-2/ident",1763804034,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.test-2","cljs-parallel-test-example.test-2",-2018823099,null),new cljs.core.Symbol(null,"ident","ident",1639789181,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/test_2.cljs",15,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.test_2.ident)?cljs_parallel_test_example.test_2.ident.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10406__auto__))
], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.test-2","cljs-parallel-test-example.test-2",-2018823099,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.get_current_env.call(null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.test-4","cljs-parallel-test-example.test-4",-325525115,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10406__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10406__auto__))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cljs_parallel_test_example.test_4.ident;},new cljs.core.Symbol("cljs-parallel-test-example.test-4","ident","cljs-parallel-test-example.test-4/ident",1763804032,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.test-4","cljs-parallel-test-example.test-4",-325525115,null),new cljs.core.Symbol(null,"ident","ident",1639789181,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/test_4.cljs",15,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.test_4.ident)?cljs_parallel_test_example.test_4.ident.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10406__auto__))
], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.test-4","cljs-parallel-test-example.test-4",-325525115,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.get_current_env.call(null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.runner","cljs-parallel-test-example.runner",2107228903,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10406__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10406__auto__))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10406__auto__))
], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.runner","cljs-parallel-test-example.runner",2107228903,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.get_current_env.call(null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.test-3","cljs-parallel-test-example.test-3",-979145168,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10406__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10406__auto__))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cljs_parallel_test_example.test_3.ident;},new cljs.core.Symbol("cljs-parallel-test-example.test-3","ident","cljs-parallel-test-example.test-3/ident",1763804033,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.test-3","cljs-parallel-test-example.test-3",-979145168,null),new cljs.core.Symbol(null,"ident","ident",1639789181,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/test_3.cljs",15,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.test_3.ident)?cljs_parallel_test_example.test_3.ident.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10406__auto__))
], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.test-3","cljs-parallel-test-example.test-3",-979145168,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.get_current_env.call(null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.sample","cljs-parallel-test-example.sample",583621297,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10406__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10406__auto__))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return cljs_parallel_test_example.sample.addition;},new cljs.core.Symbol("cljs-parallel-test-example.sample","addition","cljs-parallel-test-example.sample/addition",-590894255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.sample","cljs-parallel-test-example.sample",583621297,null),new cljs.core.Symbol(null,"addition","addition",-897891761,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/sample.cljs",18,1,4,4,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.sample.addition)?cljs_parallel_test_example.sample.addition.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs_parallel_test_example.sample.subtraction;},new cljs.core.Symbol("cljs-parallel-test-example.sample","subtraction","cljs-parallel-test-example.sample/subtraction",-1412545297,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.sample","cljs-parallel-test-example.sample",583621297,null),new cljs.core.Symbol(null,"subtraction","subtraction",-1532826131,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/sample.cljs",21,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.sample.subtraction)?cljs_parallel_test_example.sample.subtraction.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10406__auto__))
], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.sample","cljs-parallel-test-example.sample",583621297,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_.call(null,cljs.test.get_current_env.call(null));

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.ns-split","cljs-parallel-test-example.ns-split",-1389588675,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10406__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10406__auto__))
], null),cljs.test.test_vars_block.call(null,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10406__auto__){
return (function (){
if((env__10406__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10406__auto__))
], null));
})());
}),(function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs-parallel-test-example.ns-split","cljs-parallel-test-example.ns-split",-1389588675,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
})], null)], null);
cljs_parallel_test_example.runner.get_total_namespaces = (function cljs_parallel_test_example$runner$get_total_namespaces(){
return cljs.core.count.call(null,cljs_parallel_test_example.runner.tests_block_seq);
});
cljs_parallel_test_example.runner.run_ns_block = (function cljs_parallel_test_example$runner$run_ns_block(n){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));

try{cljs.test.run_block.call(null,cljs_parallel_test_example.runner.tests_block_seq.call(null,n));
}catch (e16862){if((e16862 instanceof Error)){
var e_16863 = e16862;
cljs.core.println.call(null,e_16863);
} else {
throw e16862;

}
}
return cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env.call(null)));
});
