// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs_parallel_test_example.ns_split');
goog.require('cljs.core');
goog.require('cljs.analyzer.api');
goog.require('cljs.analyzer');
goog.require('cljs.test');
cljs_parallel_test_example.ns_split.get_testable_nss = (function cljs_parallel_test_example$ns_split$get_testable_nss(){
return cljs.core.filter.call(null,(function (p1__16853_SHARP_){
return cljs.core.re_matches.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_)].join(''),/\./))),"\\..*"].join('')),cljs.core.name.call(null,p1__16853_SHARP_));
}),cljs.analyzer.api.all_ns.call(null));
});
var ret__10191__auto___16858 = cljs_parallel_test_example.ns_split.gen_ns_test_calls = (function cljs_parallel_test_example$ns_split$gen_ns_test_calls(_AMPERSAND_form,_AMPERSAND_env){
var nspaces = cljs_parallel_test_example.ns_split.get_testable_nss.call(null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var iter__9748__auto__ = ((function (nspaces){
return (function cljs_parallel_test_example$ns_split$gen_ns_test_calls_$_iter__16854(s__16855){
return (new cljs.core.LazySeq(null,((function (nspaces){
return (function (){
var s__16855__$1 = s__16855;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__16855__$1);
if(temp__5457__auto__){
var s__16855__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16855__$2)){
var c__9746__auto__ = cljs.core.chunk_first.call(null,s__16855__$2);
var size__9747__auto__ = cljs.core.count.call(null,c__9746__auto__);
var b__16857 = cljs.core.chunk_buffer.call(null,size__9747__auto__);
if((function (){var i__16856 = (0);
while(true){
if((i__16856 < size__9747__auto__)){
var nspace = cljs.core._nth.call(null,c__9746__auto__,i__16856);
cljs.core.chunk_append.call(null,b__16857,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-ns-block","cljs.test/test-ns-block",844162337,null)),(function (){var x__9820__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","get-current-env","cljs.test/get-current-env",1274262302,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})(),(function (){var x__9820__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9820__auto__ = nspace;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})()))));

var G__16859 = (i__16856 + (1));
i__16856 = G__16859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16857),cljs_parallel_test_example$ns_split$gen_ns_test_calls_$_iter__16854.call(null,cljs.core.chunk_rest.call(null,s__16855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16857),null);
}
} else {
var nspace = cljs.core.first.call(null,s__16855__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","test-ns-block","cljs.test/test-ns-block",844162337,null)),(function (){var x__9820__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.test","get-current-env","cljs.test/get-current-env",1274262302,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})(),(function (){var x__9820__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9820__auto__ = nspace;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9820__auto__);
})()))),cljs_parallel_test_example$ns_split$gen_ns_test_calls_$_iter__16854.call(null,cljs.core.rest.call(null,s__16855__$2)));
}
} else {
return null;
}
break;
}
});})(nspaces))
,null,null));
});})(nspaces))
;
return iter__9748__auto__.call(null,nspaces);
})()))));
});
cljs_parallel_test_example.ns_split.gen_ns_test_calls.cljs$lang$macro = true;

