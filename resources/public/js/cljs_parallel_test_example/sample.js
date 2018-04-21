// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_parallel_test_example.sample');
goog.require('cljs.core');
goog.require('cljs.test');
cljs_parallel_test_example.sample.addition = (function cljs_parallel_test_example$sample$addition(){
return cljs.test.test_var.call(null,cljs_parallel_test_example.sample.addition.cljs$lang$var);
});
cljs_parallel_test_example.sample.addition.cljs$lang$test = (function (){
try{var values__10293__auto__ = cljs.core._conj.call(null,(function (){var x__9820__auto__ = ((3) + (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})(),(4));
var result__10294__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__10293__auto__);
if(cljs.core.truth_(result__10294__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10293__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9820__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10293__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__10294__auto__;
}catch (e16849){var t__10338__auto__ = e16849;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"+","+",-740910886,null),(3),(1))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10338__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

cljs_parallel_test_example.sample.addition.cljs$lang$var = new cljs.core.Var(function(){return cljs_parallel_test_example.sample.addition;},new cljs.core.Symbol("cljs-parallel-test-example.sample","addition","cljs-parallel-test-example.sample/addition",-590894255,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.sample","cljs-parallel-test-example.sample",583621297,null),new cljs.core.Symbol(null,"addition","addition",-897891761,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/sample.cljs",18,1,4,4,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.sample.addition)?cljs_parallel_test_example.sample.addition.cljs$lang$test:null)]));
cljs_parallel_test_example.sample.subtraction = (function cljs_parallel_test_example$sample$subtraction(){
return cljs.test.test_var.call(null,cljs_parallel_test_example.sample.subtraction.cljs$lang$var);
});
cljs_parallel_test_example.sample.subtraction.cljs$lang$test = (function (){
try{var values__10293__auto__ = cljs.core._conj.call(null,(function (){var x__9820__auto__ = ((55) - (51));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})(),(4));
var result__10294__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__10293__auto__);
if(cljs.core.truth_(result__10294__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(55),(51))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10293__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(55),(51))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9820__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10293__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__10294__auto__;
}catch (e16850){var t__10338__auto__ = e16850;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(4),cljs.core.list(new cljs.core.Symbol(null,"-","-",-471816912,null),(55),(51))),new cljs.core.Keyword(null,"actual","actual",107306363),t__10338__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

cljs_parallel_test_example.sample.subtraction.cljs$lang$var = new cljs.core.Var(function(){return cljs_parallel_test_example.sample.subtraction;},new cljs.core.Symbol("cljs-parallel-test-example.sample","subtraction","cljs-parallel-test-example.sample/subtraction",-1412545297,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.sample","cljs-parallel-test-example.sample",583621297,null),new cljs.core.Symbol(null,"subtraction","subtraction",-1532826131,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/sample.cljs",21,1,7,7,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.sample.subtraction)?cljs_parallel_test_example.sample.subtraction.cljs$lang$test:null)]));
