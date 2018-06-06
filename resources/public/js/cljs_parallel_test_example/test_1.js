// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_parallel_test_example.test_1');
goog.require('cljs.core');
goog.require('cljs.test');
cljs_parallel_test_example.test_1.ident_1 = (function cljs_parallel_test_example$test_1$ident_1(){
return cljs.test.test_var.call(null,cljs_parallel_test_example.test_1.ident_1.cljs$lang$var);
});
cljs_parallel_test_example.test_1.ident_1.cljs$lang$test = (function (){
try{var values__10293__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__10294__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__10293__auto__);
if(cljs.core.truth_(result__10294__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__10293__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__9820__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__10293__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__10294__auto__;
}catch (e16847){var t__10338__auto__ = e16847;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__10338__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

cljs_parallel_test_example.test_1.ident_1.cljs$lang$var = new cljs.core.Var(function(){return cljs_parallel_test_example.test_1.ident_1;},new cljs.core.Symbol("cljs-parallel-test-example.test-1","ident-1","cljs-parallel-test-example.test-1/ident-1",1160810604,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs-parallel-test-example.test-1","cljs-parallel-test-example.test-1",-826753885,null),new cljs.core.Symbol(null,"ident-1","ident-1",1570595194,null),"/home/daniel/projects/node-parallel/cljs-parallel-test-example/test/cljs/cljs_parallel_test_example/test_1.cljs",17,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs_parallel_test_example.test_1.ident_1)?cljs_parallel_test_example.test_1.ident_1.cljs$lang$test:null)]));
