// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('test_namespaces.sample');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.test');
test_namespaces.sample.addition = (function test_namespaces$sample$addition(){
return cljs.test.test_var(test_namespaces.sample.addition.cljs$lang$var);
});
test_namespaces.sample.addition.cljs$lang$test = (function (){
try{var values__172__auto__ = cljs.core._conj((function (){var x__23030__auto__ = ((3) + (1));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(4));
var result__173__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__172__auto__);
if(cljs.core.truth_(result__173__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$message,null,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(4),cljs.core.list(cljs.core.cst$sym$_PLUS_,(3),(1))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__172__auto__)], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$message,null,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(4),cljs.core.list(cljs.core.cst$sym$_PLUS_,(3),(1))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__23030__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__172__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.cst$sym$not)], null));
}

return result__173__auto__;
}catch (e1253){var t__181__auto__ = e1253;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,null,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(4),cljs.core.list(cljs.core.cst$sym$_PLUS_,(3),(1))),cljs.core.cst$kw$actual,t__181__auto__], null));
}});

test_namespaces.sample.addition.cljs$lang$var = new cljs.core.Var(function(){return test_namespaces.sample.addition;},cljs.core.cst$sym$test_DASH_namespaces$sample_SLASH_addition,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$test_DASH_namespaces$sample,cljs.core.cst$sym$addition,null,(18),(1),(4),(4),cljs.core.List.EMPTY,null,(cljs.core.truth_(test_namespaces.sample.addition)?test_namespaces.sample.addition.cljs$lang$test:null)]));
test_namespaces.sample.subtraction = (function test_namespaces$sample$subtraction(){
return cljs.test.test_var(test_namespaces.sample.subtraction.cljs$lang$var);
});
test_namespaces.sample.subtraction.cljs$lang$test = (function (){
try{var values__172__auto__ = cljs.core._conj((function (){var x__23030__auto__ = ((55) - (51));
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),(4));
var result__173__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__172__auto__);
if(cljs.core.truth_(result__173__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$message,null,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(4),cljs.core.list(cljs.core.cst$sym$_DASH_,(55),(51))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__172__auto__)], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$message,null,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(4),cljs.core.list(cljs.core.cst$sym$_DASH_,(55),(51))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__23030__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__172__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__23030__auto__);
})(),cljs.core.cst$sym$not)], null));
}

return result__173__auto__;
}catch (e1254){var t__181__auto__ = e1254;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,null,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,(4),cljs.core.list(cljs.core.cst$sym$_DASH_,(55),(51))),cljs.core.cst$kw$actual,t__181__auto__], null));
}});

test_namespaces.sample.subtraction.cljs$lang$var = new cljs.core.Var(function(){return test_namespaces.sample.subtraction;},cljs.core.cst$sym$test_DASH_namespaces$sample_SLASH_subtraction,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$test_DASH_namespaces$sample,cljs.core.cst$sym$subtraction,null,(21),(1),(7),(7),cljs.core.List.EMPTY,null,(cljs.core.truth_(test_namespaces.sample.subtraction)?test_namespaces.sample.subtraction.cljs$lang$test:null)]));
