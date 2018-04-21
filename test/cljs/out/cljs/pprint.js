// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true, :target :nodejs}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__23329__auto__ = [];
var len__23326__auto___58 = arguments.length;
var i__23327__auto___59 = (0);
while(true){
if((i__23327__auto___59 < len__23326__auto___58)){
args__23329__auto__.push((arguments[i__23327__auto___59]));

var G__60 = (i__23327__auto___59 + (1));
i__23327__auto___59 = G__60;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((0) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__23330__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq57){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__23329__auto__ = [];
var len__23326__auto___62 = arguments.length;
var i__23327__auto___63 = (0);
while(true){
if((i__23327__auto___63 < len__23326__auto___62)){
args__23329__auto__.push((arguments[i__23327__auto___63]));

var G__64 = (i__23327__auto___63 + (1));
i__23327__auto___63 = G__64;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((0) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__23330__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq61){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq61));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__65 = cljs.core._EQ_;
var expr__66 = c;
if(cljs.core.truth_((pred__65.cljs$core$IFn$_invoke$arity$2 ? pred__65.cljs$core$IFn$_invoke$arity$2("\b",expr__66) : pred__65.call(null,"\b",expr__66)))){
return "\\backspace";
} else {
if(cljs.core.truth_((pred__65.cljs$core$IFn$_invoke$arity$2 ? pred__65.cljs$core$IFn$_invoke$arity$2("\t",expr__66) : pred__65.call(null,"\t",expr__66)))){
return "\\tab";
} else {
if(cljs.core.truth_((pred__65.cljs$core$IFn$_invoke$arity$2 ? pred__65.cljs$core$IFn$_invoke$arity$2("\n",expr__66) : pred__65.call(null,"\n",expr__66)))){
return "\\newline";
} else {
if(cljs.core.truth_((pred__65.cljs$core$IFn$_invoke$arity$2 ? pred__65.cljs$core$IFn$_invoke$arity$2("\f",expr__66) : pred__65.call(null,"\f",expr__66)))){
return "\\formfeed";
} else {
if(cljs.core.truth_((pred__65.cljs$core$IFn$_invoke$arity$2 ? pred__65.cljs$core$IFn$_invoke$arity$2("\r",expr__66) : pred__65.call(null,"\r",expr__66)))){
return "\\return";
} else {
if(cljs.core.truth_((pred__65.cljs$core$IFn$_invoke$arity$2 ? pred__65.cljs$core$IFn$_invoke$arity$2("\"",expr__66) : pred__65.call(null,"\"",expr__66)))){
return "\\\"";
} else {
if(cljs.core.truth_((pred__65.cljs$core$IFn$_invoke$arity$2 ? pred__65.cljs$core$IFn$_invoke$arity$2("\\",expr__66) : pred__65.call(null,"\\",expr__66)))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__23329__auto__ = [];
var len__23326__auto___69 = arguments.length;
var i__23327__auto___70 = (0);
while(true){
if((i__23327__auto___70 < len__23326__auto___69)){
args__23329__auto__.push((arguments[i__23327__auto___70]));

var G__71 = (i__23327__auto___70 + (1));
i__23327__auto___70 = G__71;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((0) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__23330__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq68){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq68));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__23329__auto__ = [];
var len__23326__auto___73 = arguments.length;
var i__23327__auto___74 = (0);
while(true){
if((i__23327__auto___74 < len__23326__auto___73)){
args__23329__auto__.push((arguments[i__23327__auto___74]));

var G__75 = (i__23327__auto___74 + (1));
i__23327__auto___74 = G__75;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((0) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__23330__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq72){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__76 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76,(1),null);
var G__79 = new_context;
var G__80 = remainder;
var G__81 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__79;
lis__$1 = G__80;
acc = G__81;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__82 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__85 = new_context;
var G__86 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__85;
acc = G__86;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__87 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__87,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__90 = new_context;
var G__91 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__90;
acc = G__91;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__22960__auto__ = (function cljs$pprint$unzip_map_$_iter__92(s__93){
return (new cljs.core.LazySeq(null,(function (){
var s__93__$1 = s__93;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__93__$1);
if(temp__22039__auto__){
var s__93__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__93__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__93__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__95 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__94 = (0);
while(true){
if((i__94 < size__22959__auto__)){
var vec__96 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__94);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96,(0),null);
var vec__99 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__96,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99,(1),null);
cljs.core.chunk_append(b__95,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__124 = (i__94 + (1));
i__94 = G__124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__95),cljs$pprint$unzip_map_$_iter__92(cljs.core.chunk_rest(s__93__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__95),null);
}
} else {
var vec__102 = cljs.core.first(s__93__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102,(0),null);
var vec__105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__102,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__105,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__92(cljs.core.rest(s__93__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__22960__auto__ = (function cljs$pprint$unzip_map_$_iter__108(s__109){
return (new cljs.core.LazySeq(null,(function (){
var s__109__$1 = s__109;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__109__$1);
if(temp__22039__auto__){
var s__109__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__109__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__109__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__111 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__110 = (0);
while(true){
if((i__110 < size__22959__auto__)){
var vec__112 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__110);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112,(0),null);
var vec__115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__112,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__115,(1),null);
cljs.core.chunk_append(b__111,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__125 = (i__110 + (1));
i__110 = G__125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__111),cljs$pprint$unzip_map_$_iter__108(cljs.core.chunk_rest(s__109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__111),null);
}
} else {
var vec__118 = cljs.core.first(s__109__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118,(0),null);
var vec__121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__118,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__121,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__108(cljs.core.rest(s__109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__22960__auto__ = (function cljs$pprint$tuple_map_$_iter__126(s__127){
return (new cljs.core.LazySeq(null,(function (){
var s__127__$1 = s__127;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__127__$1);
if(temp__22039__auto__){
var s__127__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__127__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__127__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__129 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__128 = (0);
while(true){
if((i__128 < size__22959__auto__)){
var vec__130 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__128);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__130,(1),null);
cljs.core.chunk_append(b__129,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__136 = (i__128 + (1));
i__128 = G__136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__129),cljs$pprint$tuple_map_$_iter__126(cljs.core.chunk_rest(s__127__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__129),null);
}
} else {
var vec__133 = cljs.core.first(s__127__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__133,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__126(cljs.core.rest(s__127__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__137 = (n - (1));
n = G__137;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__138 = (n + (1));
n = G__138;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__140) : test.call(null,G__140));
})()))){
return pos;
} else {
var G__141 = (pos + (1));
pos = G__141;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__22826__auto__ = (((pp == null))?null:pp);
var m__22827__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__22826__auto__)]);
if(!((m__22827__auto__ == null))){
return (m__22827__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22827__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__22827__auto__.call(null,pp));
} else {
var m__22827__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__22827__auto____$1 == null))){
return (m__22827__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22827__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__22827__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__142 = cljs.core.deref(cljs.core.deref(this$));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__142) : sym.call(null,G__142));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$cur);
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$line);
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$max);
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,cljs.core.cst$kw$max,new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,cljs.core.cst$kw$base);
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(0));

cljs.pprint.set_field(this$,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$,cljs.core.cst$kw$line) + (1)));
} else {
cljs.pprint.set_field(this$,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$,cljs.core.cst$kw$cur) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,cljs.core.cst$kw$base),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__144 = arguments.length;
switch (G__144) {
case (1):
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max,max_columns,cljs.core.cst$kw$cur,(0),cljs.core.cst$kw$line,(0),cljs.core.cst$kw$base,writer], null));
if(typeof cljs.pprint.t_cljs$pprint145 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint145 = (function (writer,max_columns,fields,meta146){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta146 = meta146;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_147,meta146__$1){
var self__ = this;
var _147__$1 = this;
return (new cljs.pprint.t_cljs$pprint145(self__.writer,self__.max_columns,self__.fields,meta146__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_147){
var self__ = this;
var _147__$1 = this;
return self__.meta146;
});})(fields))
;

cljs.pprint.t_cljs$pprint145.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint145.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint145.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__148 = cljs.core._EQ_;
var expr__149 = cljs.core.type(x);
if(cljs.core.truth_((pred__148.cljs$core$IFn$_invoke$arity$2 ? pred__148.cljs$core$IFn$_invoke$arity$2(String,expr__149) : pred__148.call(null,String,expr__149)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$cur) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$cur,((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,cljs.core.cst$kw$line,(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$line) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__148,expr__149,this$__$1,fields){
return (function (p1__1_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__1_SHARP_,"\n");
});})(s,nl,pred__148,expr__149,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,cljs.core.cst$kw$base),s);
} else {
if(cljs.core.truth_((pred__148.cljs$core$IFn$_invoke$arity$2 ? pred__148.cljs$core$IFn$_invoke$arity$2(Number,expr__149) : pred__148.call(null,Number,expr__149)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__149)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint145.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta146], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint145.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint145.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint145";

cljs.pprint.t_cljs$pprint145.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint145");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint145 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint145(writer__$1,max_columns__$1,fields__$1,meta146){
return (new cljs.pprint.t_cljs$pprint145(writer__$1,max_columns__$1,fields__$1,meta146));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint145(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = (2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k153,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__157 = k153;
var G__157__$1 = (((G__157 instanceof cljs.core.Keyword))?G__157.fqn:null);
switch (G__157__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k153,else__22796__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.logical-block{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__152){
var self__ = this;
var G__152__$1 = this;
return (new cljs.core.RecordIter((0),G__152__$1,(10),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parent,cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((10) + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__158 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((1977012399) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__158(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this154,other155){
var self__ = this;
var this154__$1 = this;
return (!((other155 == null))) && ((this154__$1.constructor === other155.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.parent,other155.parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.section,other155.section)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.start_col,other155.start_col)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.indent,other155.indent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.done_nl,other155.done_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.intra_block_nl,other155.intra_block_nl)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.prefix,other155.prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.per_line_prefix,other155.per_line_prefix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.suffix,other155.suffix)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.logical_block_callback,other155.logical_block_callback)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this154__$1.__extmap,other155.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.cst$kw$suffix,null,cljs.core.cst$kw$indent,null,cljs.core.cst$kw$parent,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$done_DASH_nl,null,cljs.core.cst$kw$start_DASH_col,null,cljs.core.cst$kw$prefix,null,cljs.core.cst$kw$per_DASH_line_DASH_prefix,null,cljs.core.cst$kw$logical_DASH_block_DASH_callback,null,cljs.core.cst$kw$intra_DASH_block_DASH_nl,null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__152){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__159 = cljs.core.keyword_identical_QMARK_;
var expr__160 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__162 = cljs.core.cst$kw$parent;
var G__163 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__162,G__163) : pred__159.call(null,G__162,G__163));
})())){
return (new cljs.pprint.logical_block(G__152,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__164 = cljs.core.cst$kw$section;
var G__165 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__164,G__165) : pred__159.call(null,G__164,G__165));
})())){
return (new cljs.pprint.logical_block(self__.parent,G__152,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__166 = cljs.core.cst$kw$start_DASH_col;
var G__167 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__166,G__167) : pred__159.call(null,G__166,G__167));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__152,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__168 = cljs.core.cst$kw$indent;
var G__169 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__168,G__169) : pred__159.call(null,G__168,G__169));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__152,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__170 = cljs.core.cst$kw$done_DASH_nl;
var G__171 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__170,G__171) : pred__159.call(null,G__170,G__171));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__152,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__172 = cljs.core.cst$kw$intra_DASH_block_DASH_nl;
var G__173 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__172,G__173) : pred__159.call(null,G__172,G__173));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__152,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__174 = cljs.core.cst$kw$prefix;
var G__175 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__174,G__175) : pred__159.call(null,G__174,G__175));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__152,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__176 = cljs.core.cst$kw$per_DASH_line_DASH_prefix;
var G__177 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__176,G__177) : pred__159.call(null,G__176,G__177));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__152,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__178 = cljs.core.cst$kw$suffix;
var G__179 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__178,G__179) : pred__159.call(null,G__178,G__179));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__152,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__180 = cljs.core.cst$kw$logical_DASH_block_DASH_callback;
var G__181 = expr__160;
return (pred__159.cljs$core$IFn$_invoke$arity$2 ? pred__159.cljs$core$IFn$_invoke$arity$2(G__180,G__181) : pred__159.call(null,G__180,G__181));
})())){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__152,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__152),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$parent,self__.parent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$section,self__.section],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_col,self__.start_col],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indent,self__.indent],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$done_DASH_nl,self__.done_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$intra_DASH_block_DASH_nl,self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prefix,self__.prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$per_DASH_line_DASH_prefix,self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$suffix,self__.suffix],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block_DASH_callback,self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__152){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__152,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$parent,cljs.core.cst$sym$section,cljs.core.cst$sym$start_DASH_col,cljs.core.cst$sym$indent,cljs.core.cst$sym$done_DASH_nl,cljs.core.cst$sym$intra_DASH_block_DASH_nl,cljs.core.cst$sym$prefix,cljs.core.cst$sym$per_DASH_line_DASH_prefix,cljs.core.cst$sym$suffix,cljs.core.cst$sym$logical_DASH_block_DASH_callback], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__156){
return (new cljs.pprint.logical_block(cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$section.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(G__156),cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(G__156),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__156,cljs.core.cst$kw$parent,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$section,cljs.core.cst$kw$start_DASH_col,cljs.core.cst$kw$indent,cljs.core.cst$kw$done_DASH_nl,cljs.core.cst$kw$intra_DASH_block_DASH_nl,cljs.core.cst$kw$prefix,cljs.core.cst$kw$per_DASH_line_DASH_prefix,cljs.core.cst$kw$suffix,cljs.core.cst$kw$logical_DASH_block_DASH_callback], 0))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__183 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__183;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k185,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__189 = k185;
var G__189__$1 = (((G__189 instanceof cljs.core.Keyword))?G__189.fqn:null);
switch (G__189__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k185,else__22796__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__184){
var self__ = this;
var G__184__$1 = this;
return (new cljs.core.RecordIter((0),G__184__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((5) + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__190 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((1809113693) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__190(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this186,other187){
var self__ = this;
var this186__$1 = this;
return (!((other187 == null))) && ((this186__$1.constructor === other187.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this186__$1.type_tag,other187.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this186__$1.data,other187.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this186__$1.trailing_white_space,other187.trailing_white_space)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this186__$1.start_pos,other187.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this186__$1.end_pos,other187.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this186__$1.__extmap,other187.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$data,null,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$end_DASH_pos,null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__184){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__191 = cljs.core.keyword_identical_QMARK_;
var expr__192 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__194 = cljs.core.cst$kw$type_DASH_tag;
var G__195 = expr__192;
return (pred__191.cljs$core$IFn$_invoke$arity$2 ? pred__191.cljs$core$IFn$_invoke$arity$2(G__194,G__195) : pred__191.call(null,G__194,G__195));
})())){
return (new cljs.pprint.buffer_blob(G__184,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__196 = cljs.core.cst$kw$data;
var G__197 = expr__192;
return (pred__191.cljs$core$IFn$_invoke$arity$2 ? pred__191.cljs$core$IFn$_invoke$arity$2(G__196,G__197) : pred__191.call(null,G__196,G__197));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__184,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__198 = cljs.core.cst$kw$trailing_DASH_white_DASH_space;
var G__199 = expr__192;
return (pred__191.cljs$core$IFn$_invoke$arity$2 ? pred__191.cljs$core$IFn$_invoke$arity$2(G__198,G__199) : pred__191.call(null,G__198,G__199));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__184,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__200 = cljs.core.cst$kw$start_DASH_pos;
var G__201 = expr__192;
return (pred__191.cljs$core$IFn$_invoke$arity$2 ? pred__191.cljs$core$IFn$_invoke$arity$2(G__200,G__201) : pred__191.call(null,G__200,G__201));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__184,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__202 = cljs.core.cst$kw$end_DASH_pos;
var G__203 = expr__192;
return (pred__191.cljs$core$IFn$_invoke$arity$2 ? pred__191.cljs$core$IFn$_invoke$arity$2(G__202,G__203) : pred__191.call(null,G__202,G__203));
})())){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__184,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__184),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$data,self__.data],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$trailing_DASH_white_DASH_space,self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__184){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__184,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$data,cljs.core.cst$sym$trailing_DASH_white_DASH_space,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__188){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__188),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(G__188),cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(G__188),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__188),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__188),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__188,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$data,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(cljs.core.cst$kw$buffer_DASH_blob,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__96__auto__),cljs.core.cst$kw$buffer_DASH_blob);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k206,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__210 = k206;
var G__210__$1 = (((G__210 instanceof cljs.core.Keyword))?G__210.fqn:null);
switch (G__210__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k206,else__22796__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.nl-t{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__205){
var self__ = this;
var G__205__$1 = this;
return (new cljs.core.RecordIter((0),G__205__$1,(5),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((5) + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__211 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-1640656800) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__211(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this207,other208){
var self__ = this;
var this207__$1 = this;
return (!((other208 == null))) && ((this207__$1.constructor === other208.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this207__$1.type_tag,other208.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this207__$1.type,other208.type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this207__$1.logical_block,other208.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this207__$1.start_pos,other208.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this207__$1.end_pos,other208.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this207__$1.__extmap,other208.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$type,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$end_DASH_pos,null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__205){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__212 = cljs.core.keyword_identical_QMARK_;
var expr__213 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__215 = cljs.core.cst$kw$type_DASH_tag;
var G__216 = expr__213;
return (pred__212.cljs$core$IFn$_invoke$arity$2 ? pred__212.cljs$core$IFn$_invoke$arity$2(G__215,G__216) : pred__212.call(null,G__215,G__216));
})())){
return (new cljs.pprint.nl_t(G__205,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__217 = cljs.core.cst$kw$type;
var G__218 = expr__213;
return (pred__212.cljs$core$IFn$_invoke$arity$2 ? pred__212.cljs$core$IFn$_invoke$arity$2(G__217,G__218) : pred__212.call(null,G__217,G__218));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,G__205,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__219 = cljs.core.cst$kw$logical_DASH_block;
var G__220 = expr__213;
return (pred__212.cljs$core$IFn$_invoke$arity$2 ? pred__212.cljs$core$IFn$_invoke$arity$2(G__219,G__220) : pred__212.call(null,G__219,G__220));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__205,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__221 = cljs.core.cst$kw$start_DASH_pos;
var G__222 = expr__213;
return (pred__212.cljs$core$IFn$_invoke$arity$2 ? pred__212.cljs$core$IFn$_invoke$arity$2(G__221,G__222) : pred__212.call(null,G__221,G__222));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__205,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__223 = cljs.core.cst$kw$end_DASH_pos;
var G__224 = expr__213;
return (pred__212.cljs$core$IFn$_invoke$arity$2 ? pred__212.cljs$core$IFn$_invoke$arity$2(G__223,G__224) : pred__212.call(null,G__223,G__224));
})())){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__205,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__205),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type,self__.type],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__205){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__205,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$type,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__209){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__209),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(G__209),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__209),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__209),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__209),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__209,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(cljs.core.cst$kw$nl_DASH_t,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__96__auto__),cljs.core.cst$kw$nl_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k227,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__231 = k227;
var G__231__$1 = (((G__231 instanceof cljs.core.Keyword))?G__231.fqn:null);
switch (G__231__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k227,else__22796__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__226){
var self__ = this;
var G__226__$1 = this;
return (new cljs.core.RecordIter((0),G__226__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__232 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-414877272) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__232(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this228,other229){
var self__ = this;
var this228__$1 = this;
return (!((other229 == null))) && ((this228__$1.constructor === other229.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this228__$1.type_tag,other229.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this228__$1.logical_block,other229.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this228__$1.start_pos,other229.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this228__$1.end_pos,other229.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this228__$1.__extmap,other229.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$end_DASH_pos,null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__226){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__233 = cljs.core.keyword_identical_QMARK_;
var expr__234 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__236 = cljs.core.cst$kw$type_DASH_tag;
var G__237 = expr__234;
return (pred__233.cljs$core$IFn$_invoke$arity$2 ? pred__233.cljs$core$IFn$_invoke$arity$2(G__236,G__237) : pred__233.call(null,G__236,G__237));
})())){
return (new cljs.pprint.start_block_t(G__226,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__238 = cljs.core.cst$kw$logical_DASH_block;
var G__239 = expr__234;
return (pred__233.cljs$core$IFn$_invoke$arity$2 ? pred__233.cljs$core$IFn$_invoke$arity$2(G__238,G__239) : pred__233.call(null,G__238,G__239));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,G__226,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__240 = cljs.core.cst$kw$start_DASH_pos;
var G__241 = expr__234;
return (pred__233.cljs$core$IFn$_invoke$arity$2 ? pred__233.cljs$core$IFn$_invoke$arity$2(G__240,G__241) : pred__233.call(null,G__240,G__241));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__226,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__242 = cljs.core.cst$kw$end_DASH_pos;
var G__243 = expr__234;
return (pred__233.cljs$core$IFn$_invoke$arity$2 ? pred__233.cljs$core$IFn$_invoke$arity$2(G__242,G__243) : pred__233.call(null,G__242,G__243));
})())){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__226,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__226),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__226){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__226,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__230){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__230),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__230),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__230),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__230),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__230,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(cljs.core.cst$kw$start_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__96__auto__),cljs.core.cst$kw$start_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k246,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__250 = k246;
var G__250__$1 = (((G__250 instanceof cljs.core.Keyword))?G__250.fqn:null);
switch (G__250__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k246,else__22796__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__245){
var self__ = this;
var G__245__$1 = this;
return (new cljs.core.RecordIter((0),G__245__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__251 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((1365867980) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__251(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this247,other248){
var self__ = this;
var this247__$1 = this;
return (!((other248 == null))) && ((this247__$1.constructor === other248.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this247__$1.type_tag,other248.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this247__$1.logical_block,other248.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this247__$1.start_pos,other248.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this247__$1.end_pos,other248.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this247__$1.__extmap,other248.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$end_DASH_pos,null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__245){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__252 = cljs.core.keyword_identical_QMARK_;
var expr__253 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__255 = cljs.core.cst$kw$type_DASH_tag;
var G__256 = expr__253;
return (pred__252.cljs$core$IFn$_invoke$arity$2 ? pred__252.cljs$core$IFn$_invoke$arity$2(G__255,G__256) : pred__252.call(null,G__255,G__256));
})())){
return (new cljs.pprint.end_block_t(G__245,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__257 = cljs.core.cst$kw$logical_DASH_block;
var G__258 = expr__253;
return (pred__252.cljs$core$IFn$_invoke$arity$2 ? pred__252.cljs$core$IFn$_invoke$arity$2(G__257,G__258) : pred__252.call(null,G__257,G__258));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,G__245,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__259 = cljs.core.cst$kw$start_DASH_pos;
var G__260 = expr__253;
return (pred__252.cljs$core$IFn$_invoke$arity$2 ? pred__252.cljs$core$IFn$_invoke$arity$2(G__259,G__260) : pred__252.call(null,G__259,G__260));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__245,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__261 = cljs.core.cst$kw$end_DASH_pos;
var G__262 = expr__253;
return (pred__252.cljs$core$IFn$_invoke$arity$2 ? pred__252.cljs$core$IFn$_invoke$arity$2(G__261,G__262) : pred__252.call(null,G__261,G__262));
})())){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__245,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__245),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__245){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__245,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__249){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__249),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__249),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__249),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__249),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__249,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(cljs.core.cst$kw$end_DASH_block_DASH_t,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__96__auto__),cljs.core.cst$kw$end_DASH_block_DASH_t);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k265,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__269 = k265;
var G__269__$1 = (((G__269 instanceof cljs.core.Keyword))?G__269.fqn:null);
switch (G__269__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k265,else__22796__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.indent-t{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__264){
var self__ = this;
var G__264__$1 = this;
return (new cljs.core.RecordIter((0),G__264__$1,(6),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$type_DASH_tag,cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((6) + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__270 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-1602780238) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__270(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this266,other267){
var self__ = this;
var this266__$1 = this;
return (!((other267 == null))) && ((this266__$1.constructor === other267.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this266__$1.type_tag,other267.type_tag)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this266__$1.logical_block,other267.logical_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this266__$1.relative_to,other267.relative_to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this266__$1.offset,other267.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this266__$1.start_pos,other267.start_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this266__$1.end_pos,other267.end_pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this266__$1.__extmap,other267.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$type_DASH_tag,null,cljs.core.cst$kw$logical_DASH_block,null,cljs.core.cst$kw$relative_DASH_to,null,cljs.core.cst$kw$offset,null,cljs.core.cst$kw$start_DASH_pos,null,cljs.core.cst$kw$end_DASH_pos,null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__264){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__271 = cljs.core.keyword_identical_QMARK_;
var expr__272 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__274 = cljs.core.cst$kw$type_DASH_tag;
var G__275 = expr__272;
return (pred__271.cljs$core$IFn$_invoke$arity$2 ? pred__271.cljs$core$IFn$_invoke$arity$2(G__274,G__275) : pred__271.call(null,G__274,G__275));
})())){
return (new cljs.pprint.indent_t(G__264,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__276 = cljs.core.cst$kw$logical_DASH_block;
var G__277 = expr__272;
return (pred__271.cljs$core$IFn$_invoke$arity$2 ? pred__271.cljs$core$IFn$_invoke$arity$2(G__276,G__277) : pred__271.call(null,G__276,G__277));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,G__264,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__278 = cljs.core.cst$kw$relative_DASH_to;
var G__279 = expr__272;
return (pred__271.cljs$core$IFn$_invoke$arity$2 ? pred__271.cljs$core$IFn$_invoke$arity$2(G__278,G__279) : pred__271.call(null,G__278,G__279));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__264,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__280 = cljs.core.cst$kw$offset;
var G__281 = expr__272;
return (pred__271.cljs$core$IFn$_invoke$arity$2 ? pred__271.cljs$core$IFn$_invoke$arity$2(G__280,G__281) : pred__271.call(null,G__280,G__281));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__264,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__282 = cljs.core.cst$kw$start_DASH_pos;
var G__283 = expr__272;
return (pred__271.cljs$core$IFn$_invoke$arity$2 ? pred__271.cljs$core$IFn$_invoke$arity$2(G__282,G__283) : pred__271.call(null,G__282,G__283));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__264,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__284 = cljs.core.cst$kw$end_DASH_pos;
var G__285 = expr__272;
return (pred__271.cljs$core$IFn$_invoke$arity$2 ? pred__271.cljs$core$IFn$_invoke$arity$2(G__284,G__285) : pred__271.call(null,G__284,G__285));
})())){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__264,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__264),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$type_DASH_tag,self__.type_tag],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$logical_DASH_block,self__.logical_block],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$relative_DASH_to,self__.relative_to],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start_DASH_pos,self__.start_pos],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end_DASH_pos,self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__264){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__264,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$type_DASH_tag,cljs.core.cst$sym$logical_DASH_block,cljs.core.cst$sym$relative_DASH_to,cljs.core.cst$sym$offset,cljs.core.cst$sym$start_DASH_pos,cljs.core.cst$sym$end_DASH_pos], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__268){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(G__268),cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(G__268),cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(G__268),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__268),cljs.core.cst$kw$start_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__268),cljs.core.cst$kw$end_DASH_pos.cljs$core$IFn$_invoke$arity$1(G__268),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__268,cljs.core.cst$kw$type_DASH_tag,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$logical_DASH_block,cljs.core.cst$kw$relative_DASH_to,cljs.core.cst$kw$offset,cljs.core.cst$kw$start_DASH_pos,cljs.core.cst$kw$end_DASH_pos], 0))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(cljs.core.cst$kw$indent_DASH_t,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__96__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(x__96__auto__),cljs.core.cst$kw$indent_DASH_t);
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__){
return (function (p1__3_SHARP_,p2__2_SHARP_){
return cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(p2__2_SHARP_);
});})(method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__))
,cljs.core.cst$kw$default$,hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$start_DASH_block_DASH_t,(function (this$,token){
var temp__22039__auto___288 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto___288)){
var cb_289 = temp__22039__auto___288;
var G__287_290 = cljs.core.cst$kw$start;
(cb_289.cljs$core$IFn$_invoke$arity$1 ? cb_289.cljs$core$IFn$_invoke$arity$1(G__287_290) : cb_289.call(null,G__287_290));
} else {
}

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
var temp__22039__auto___291 = cljs.core.cst$kw$prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__22039__auto___291)){
var prefix_292 = temp__22039__auto___291;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix_292);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$end_DASH_block_DASH_t,(function (this$,token){
var temp__22039__auto___294 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto___294)){
var cb_295 = temp__22039__auto___294;
var G__293_296 = cljs.core.cst$kw$end;
(cb_295.cljs$core$IFn$_invoke$arity$1 ? cb_295.cljs$core$IFn$_invoke$arity$1(G__293_296) : cb_295.call(null,G__293_296));
} else {
}

var temp__22039__auto__ = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__22039__auto__)){
var suffix = temp__22039__auto__;
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$indent_DASH_t,(function (this$,token){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__297 = cljs.core._EQ_;
var expr__298 = cljs.core.cst$kw$relative_DASH_to.cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((function (){var G__300 = cljs.core.cst$kw$block;
var G__301 = expr__298;
return (pred__297.cljs$core$IFn$_invoke$arity$2 ? pred__297.cljs$core$IFn$_invoke$arity$2(G__300,G__301) : pred__297.call(null,G__300,G__301));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__302 = cljs.core.cst$kw$current;
var G__303 = expr__298;
return (pred__297.cljs$core$IFn$_invoke$arity$2 ? pred__297.cljs$core$IFn$_invoke$arity$2(G__302,G__303) : pred__297.call(null,G__302,G__303));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__298)].join('')));
}
}
})()));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$buffer_DASH_blob,(function (this$,token){
return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$nl_DASH_t,(function (this$,token){
if(cljs.core.truth_((function (){var or__22217__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$mandatory);
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$fill));
if(and__22202__auto__){
return cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__22202__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__21984__auto___304 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__21984__auto___304)){
var tws_305 = temp__21984__auto___304;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_305);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__306 = cljs.core.seq(tokens);
var chunk__307 = null;
var count__308 = (0);
var i__309 = (0);
while(true){
if((i__309 < count__308)){
var token = chunk__307.cljs$core$IIndexed$_nth$arity$2(null,i__309);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__21984__auto___310 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__21984__auto___310)){
var tws_311 = temp__21984__auto___310;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_311);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_312 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__22202__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__22202__auto__)){
return tws_312;
} else {
return and__22202__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_312);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__313 = seq__306;
var G__314 = chunk__307;
var G__315 = count__308;
var G__316 = (i__309 + (1));
seq__306 = G__313;
chunk__307 = G__314;
count__308 = G__315;
i__309 = G__316;
continue;
} else {
var temp__22039__auto__ = cljs.core.seq(seq__306);
if(temp__22039__auto__){
var seq__306__$1 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__306__$1)){
var c__22996__auto__ = cljs.core.chunk_first(seq__306__$1);
var G__317 = cljs.core.chunk_rest(seq__306__$1);
var G__318 = c__22996__auto__;
var G__319 = cljs.core.count(c__22996__auto__);
var G__320 = (0);
seq__306 = G__317;
chunk__307 = G__318;
count__308 = G__319;
i__309 = G__320;
continue;
} else {
var token = cljs.core.first(seq__306__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type_DASH_tag.cljs$core$IFn$_invoke$arity$1(token),cljs.core.cst$kw$nl_DASH_t))){
var temp__21984__auto___321 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__21984__auto___321)){
var tws_322 = temp__21984__auto___321;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_322);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(token));

var tws_323 = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_((function (){var and__22202__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__22202__auto__)){
return tws_323;
} else {
return and__22202__auto__;
}
})())){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws_323);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
}

var G__324 = cljs.core.next(seq__306__$1);
var G__325 = null;
var G__326 = (0);
var G__327 = (0);
seq__306 = G__324;
chunk__307 = G__325;
count__308 = G__326;
i__309 = G__327;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__22217__auto__ = cljs.core.deref(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
var and__22202__auto__ = miser_width;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = maxcol;
if(cljs.core.truth_(and__22202__auto____$1)){
var and__22202__auto____$2 = (cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__22202__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__22202__auto____$2;
}
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__){
return (function (t,_,___$1,___$2){
return cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__,hierarchy__23136__auto__))
,cljs.core.cst$kw$default$,hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$linear,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$miser,(function (newl,this$,section,_){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fill,(function (newl,this$,section,subsection){
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(newl);
var or__22217__auto__ = cljs.core.deref(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
var or__22217__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__22217__auto____$1){
return or__22217__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$mandatory,(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__4_SHARP_){
return cljs.core.not((function (){var and__22202__auto__ = cljs.pprint.nl_t_QMARK_(p1__4_SHARP_);
if(cljs.core.truth_(and__22202__auto__)){
return cljs.pprint.ancestor_QMARK_(cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__4_SHARP_),lb);
} else {
return and__22202__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__5_SHARP_){
var nl_lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(p1__5_SHARP_);
return cljs.core.not((function (){var and__22202__auto__ = cljs.pprint.nl_t_QMARK_(p1__5_SHARP_);
if(cljs.core.truth_(and__22202__auto__)){
var or__22217__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__22217__auto__){
return or__22217__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__22202__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_(cljs.core.cst$kw$done_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_(cljs.core.cst$kw$intra_DASH_block_DASH_nl.cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__328 = cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__328;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);

var lb = cljs.core.cst$kw$logical_DASH_block.cljs$core$IFn$_invoke$arity$1(nl);
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var istr_329 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.deref(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count(prefix))," "));
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),istr_329);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__6_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__6_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__330 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__330,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__330,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__333 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__333,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__333,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__336 = newl;
var G__337 = this$;
var G__338 = section;
var G__339 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__336,G__337,G__338,G__339) : cljs.pprint.emit_nl_QMARK_.call(null,G__336,G__337,G__338,G__339));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = (cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token_string.cljs$core$IFn$_invoke$arity$2(this$,section) : cljs.pprint.write_token_string.call(null,this$,section));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__340 = new_buffer;
buffer = G__340;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__21984__auto__ = cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__21984__auto__)){
var buf = temp__21984__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__22039__auto__ = cljs.core.cst$kw$trailing_DASH_white_DASH_space.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto__)){
var tws = temp__22039__auto__;
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = cljs.core.cst$kw$per_DASH_line_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)))));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$buffering,cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))))){
var oldpos_345 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_346 = (oldpos_345 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_346);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_345,newpos_346));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l);
}

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),"\n");

var seq__341_347 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__342_348 = null;
var count__343_349 = (0);
var i__344_350 = (0);
while(true){
if((i__344_350 < count__343_349)){
var l_351__$1 = chunk__342_348.cljs$core$IIndexed$_nth$arity$2(null,i__344_350);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_351__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__352 = seq__341_347;
var G__353 = chunk__342_348;
var G__354 = count__343_349;
var G__355 = (i__344_350 + (1));
seq__341_347 = G__352;
chunk__342_348 = G__353;
count__343_349 = G__354;
i__344_350 = G__355;
continue;
} else {
var temp__22039__auto___356 = cljs.core.seq(seq__341_347);
if(temp__22039__auto___356){
var seq__341_357__$1 = temp__22039__auto___356;
if(cljs.core.chunked_seq_QMARK_(seq__341_357__$1)){
var c__22996__auto___358 = cljs.core.chunk_first(seq__341_357__$1);
var G__359 = cljs.core.chunk_rest(seq__341_357__$1);
var G__360 = c__22996__auto___358;
var G__361 = cljs.core.count(c__22996__auto___358);
var G__362 = (0);
seq__341_347 = G__359;
chunk__342_348 = G__360;
count__343_349 = G__361;
i__344_350 = G__362;
continue;
} else {
var l_363__$1 = cljs.core.first(seq__341_357__$1);
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),l_363__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var G__364 = cljs.core.next(seq__341_357__$1);
var G__365 = null;
var G__366 = (0);
var G__367 = (0);
seq__341_347 = G__364;
chunk__342_348 = G__365;
count__343_349 = G__366;
i__344_350 = G__367;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$buffering,cljs.core.cst$kw$writing);

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$miser_DASH_width,cljs.core.cst$kw$buffer_DASH_block,cljs.core.cst$kw$pretty_DASH_writer,cljs.core.cst$kw$sections,cljs.core.cst$kw$mode,cljs.core.cst$kw$pos,cljs.core.cst$kw$trailing_DASH_white_DASH_space,cljs.core.cst$kw$base,cljs.core.cst$kw$buffer_DASH_level,cljs.core.cst$kw$buffer],[lb,miser_width,lb,true,null,cljs.core.cst$kw$writing,(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWriter}
 * @implements {cljs.pprint.IPrettyFlush}
*/
cljs.pprint.t_cljs$pprint368 = (function (writer,max_columns,miser_width,lb,fields,meta369){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta369 = meta369;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_370,meta369__$1){
var self__ = this;
var _370__$1 = this;
return (new cljs.pprint.t_cljs$pprint368(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta369__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_370){
var self__ = this;
var _370__$1 = this;
return self__.meta369;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint368.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint368.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__371 = cljs.core._EQ_;
var expr__372 = cljs.core.type(x);
if(cljs.core.truth_((pred__371.cljs$core$IFn$_invoke$arity$2 ? pred__371.cljs$core$IFn$_invoke$arity$2(String,expr__372) : pred__371.call(null,String,expr__372)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$trailing_DASH_white_DASH_space,white_space);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1)));
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__371.cljs$core$IFn$_invoke$arity$2 ? pred__371.cljs$core$IFn$_invoke$arity$2(Number,expr__372) : pred__371.call(null,Number,expr__372)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__372)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint368.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.cljs$pprint$IPrettyFlush$_ppflush$arity$1(null);

return cljs.core._flush(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint368.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint368.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),cljs.core.cst$kw$buffering)){
cljs.pprint.write_tokens(this$__$1,cljs.core.cst$kw$buffer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$__$1))),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$__$1),cljs.core.assoc,cljs.core.cst$kw$buffer,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint368.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$max_DASH_columns,cljs.core.cst$sym$miser_DASH_width,cljs.core.cst$sym$lb,cljs.core.cst$sym$fields,cljs.core.cst$sym$meta369], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint368.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint368.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint368";

cljs.pprint.t_cljs$pprint368.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint368");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint368 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint368(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta369){
return (new cljs.pprint.t_cljs$pprint368(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta369));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint368(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),null,cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

var temp__22039__auto___375 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto___375)){
var cb_376 = temp__22039__auto___375;
var G__374_377 = cljs.core.cst$kw$start;
(cb_376.cljs$core$IFn$_invoke$arity$1 ? cb_376.cljs$core$IFn$_invoke$arity$1(G__374_377) : cb_376.call(null,G__374_377));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),prefix);
} else {
}

var col = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
cljs.core.reset_BANG_(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var suffix = cljs.core.cst$kw$suffix.cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),suffix);
} else {
}

var temp__22039__auto___379 = cljs.core.cst$kw$logical_DASH_block_DASH_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core.truth_(temp__22039__auto___379)){
var cb_380 = temp__22039__auto___379;
var G__378_381 = cljs.core.cst$kw$end;
(cb_380.cljs$core$IFn$_invoke$arity$1 ? cb_380.cljs$core$IFn$_invoke$arity$1(G__378_381) : cb_380.call(null,G__378_381));
} else {
}
} else {
var oldpos_382 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
var newpos_383 = (oldpos_382 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$pos,newpos_383);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_382,newpos_383));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$logical_DASH_blocks,cljs.core.cst$kw$parent.cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(this$),cljs.core.assoc,cljs.core.cst$kw$mode,cljs.core.cst$kw$buffering);

var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = cljs.core.cst$kw$logical_DASH_blocks.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$mode.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))),cljs.core.cst$kw$writing)){
cljs.pprint.write_white_space(this$);

return cljs.core.reset_BANG_(cljs.core.cst$kw$indent.cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__384 = cljs.core._EQ_;
var expr__385 = relative_to;
if(cljs.core.truth_((function (){var G__387 = cljs.core.cst$kw$block;
var G__388 = expr__385;
return (pred__384.cljs$core$IFn$_invoke$arity$2 ? pred__384.cljs$core$IFn$_invoke$arity$2(G__387,G__388) : pred__384.call(null,G__387,G__388));
})())){
return cljs.core.deref(cljs.core.cst$kw$start_DASH_col.cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_((function (){var G__389 = cljs.core.cst$kw$current;
var G__390 = expr__385;
return (pred__384.cljs$core$IFn$_invoke$arity$2 ? pred__384.cljs$core$IFn$_invoke$arity$2(G__389,G__390) : pred__384.call(null,G__389,G__390));
})())){
return cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__385)].join('')));
}
}
})()));
} else {
var pos = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__7_SHARP_){
var temp__22039__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__7_SHARP_));
if(cljs.core.truth_(temp__22039__auto__)){
var v = temp__22039__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__7_SHARP_)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__22202__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__22202__auto__){
return cljs.core.cst$kw$pretty_DASH_writer.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(x)));
} else {
return and__22202__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__22202__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__22202__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__23329__auto__ = [];
var len__23326__auto___409 = arguments.length;
var i__23327__auto___410 = (0);
while(true){
if((i__23327__auto___410 < len__23326__auto___409)){
args__23329__auto__.push((arguments[i__23327__auto___410]));

var G__411 = (i__23327__auto___410 + (1));
i__23327__auto___410 = G__411;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((1) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23330__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stream,true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_395 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_396 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_397 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_398 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_399 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_400 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_401 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_402 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_403 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_404 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_405 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_406 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = cljs.core.cst$kw$circle.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = cljs.core.cst$kw$length.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = cljs.core.cst$kw$miser_DASH_width.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.core.cst$kw$dispatch.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = cljs.core.cst$kw$radix.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = cljs.core.cst$kw$readably.cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = cljs.core.cst$kw$right_DASH_margin.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = cljs.core.cst$kw$suppress_DASH_namespaces.cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,cljs.core.cst$kw$stream))?cljs.core.cst$kw$stream.cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__94__auto___412 = base_writer;
var new_writer__95__auto___413 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__94__auto___412));
var _STAR_out_STAR_407_414 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__95__auto___413)?cljs.pprint.make_pretty_writer(base_writer__94__auto___412,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__94__auto___412);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_407_414;
}} else {
var _STAR_out_STAR_408_415 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_408_415;
}}

if(optval === true){
cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_406;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_405;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_404;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_403;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_402;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_401;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_400;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_399;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_398;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_397;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_396;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_395;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq393){
var G__394 = cljs.core.first(seq393);
var seq393__$1 = cljs.core.next(seq393);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__394,seq393__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__417 = arguments.length;
switch (G__417) {
case (1):
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_418 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_418;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__94__auto__ = writer;
var new_writer__95__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__94__auto__));
var _STAR_out_STAR_419 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__95__auto__)?cljs.pprint.make_pretty_writer(base_writer__94__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__94__auto__);

try{var _STAR_print_pretty_STAR_420_422 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_420_422;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_419;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = (2);

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__22202__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__22202__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__22202__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$linear,null,cljs.core.cst$kw$miser,null,cljs.core.cst$kw$fill,null,cljs.core.cst$kw$mandatory,null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$block,null,cljs.core.cst$kw$current,null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$line,null,cljs.core.cst$kw$section,null,cljs.core.cst$kw$line_DASH_relative,null,cljs.core.cst$kw$section_DASH_relative,null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__23329__auto__ = [];
var len__23326__auto___426 = arguments.length;
var i__23327__auto___427 = (0);
while(true){
if((i__23327__auto___427 < len__23326__auto___426)){
args__23329__auto__.push((arguments[i__23327__auto___427]));

var G__428 = (i__23327__auto___427 + (1));
i__23327__auto___427 = G__428;
continue;
} else {
}
break;
}

var argseq__23330__auto__ = ((((2) < args__23329__auto__.length))?(new cljs.core.IndexedSeq(args__23329__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23330__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq423){
var G__424 = cljs.core.first(seq423);
var seq423__$1 = cljs.core.next(seq423);
var G__425 = cljs.core.first(seq423__$1);
var seq423__$2 = cljs.core.next(seq423__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__424,G__425,seq423__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),"^","\n"].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k430,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__434 = k430;
var G__434__$1 = (((G__434 instanceof cljs.core.Keyword))?G__434.fqn:null);
switch (G__434__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k430,else__22796__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__429){
var self__ = this;
var G__429__$1 = this;
return (new cljs.core.RecordIter((0),G__429__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seq,cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((3) + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__435 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-402038447) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__435(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this431,other432){
var self__ = this;
var this431__$1 = this;
return (!((other432 == null))) && ((this431__$1.constructor === other432.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this431__$1.seq,other432.seq)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this431__$1.rest,other432.rest)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this431__$1.pos,other432.pos)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this431__$1.__extmap,other432.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$seq,null,cljs.core.cst$kw$rest,null,cljs.core.cst$kw$pos,null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__429){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__436 = cljs.core.keyword_identical_QMARK_;
var expr__437 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__439 = cljs.core.cst$kw$seq;
var G__440 = expr__437;
return (pred__436.cljs$core$IFn$_invoke$arity$2 ? pred__436.cljs$core$IFn$_invoke$arity$2(G__439,G__440) : pred__436.call(null,G__439,G__440));
})())){
return (new cljs.pprint.arg_navigator(G__429,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__441 = cljs.core.cst$kw$rest;
var G__442 = expr__437;
return (pred__436.cljs$core$IFn$_invoke$arity$2 ? pred__436.cljs$core$IFn$_invoke$arity$2(G__441,G__442) : pred__436.call(null,G__441,G__442));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,G__429,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__443 = cljs.core.cst$kw$pos;
var G__444 = expr__437;
return (pred__436.cljs$core$IFn$_invoke$arity$2 ? pred__436.cljs$core$IFn$_invoke$arity$2(G__443,G__444) : pred__436.call(null,G__443,G__444));
})())){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__429,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__429),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seq,self__.seq],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rest,self__.rest],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pos,self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__429){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__429,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$seq,cljs.core.cst$sym$rest,cljs.core.cst$sym$pos], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__433){
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(G__433),cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(G__433),cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(G__433),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__433,cljs.core.cst$kw$seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rest,cljs.core.cst$kw$pos], 0))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__446 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__446,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__446,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator))){
var G__449 = navigator;
var G__450 = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__449,G__450) : cljs.pprint.relative_reposition.call(null,G__449,G__450));
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(cljs.core.cst$kw$seq.cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2065299702;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22793__auto__,k__22794__auto__){
var self__ = this;
var this__22793__auto____$1 = this;
return this__22793__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22794__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22795__auto__,k452,else__22796__auto__){
var self__ = this;
var this__22795__auto____$1 = this;
var G__456 = k452;
var G__456__$1 = (((G__456 instanceof cljs.core.Keyword))?G__456.fqn:null);
switch (G__456__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k452,else__22796__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22807__auto__,writer__22808__auto__,opts__22809__auto__){
var self__ = this;
var this__22807__auto____$1 = this;
var pr_pair__22810__auto__ = ((function (this__22807__auto____$1){
return (function (keyval__22811__auto__){
return cljs.core.pr_sequential_writer(writer__22808__auto__,cljs.core.pr_writer,""," ","",opts__22809__auto__,keyval__22811__auto__);
});})(this__22807__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22808__auto__,pr_pair__22810__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__22809__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__451){
var self__ = this;
var G__451__$1 = this;
return (new cljs.core.RecordIter((0),G__451__$1,(4),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$func,cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22791__auto__){
var self__ = this;
var this__22791__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22788__auto__){
var self__ = this;
var this__22788__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22797__auto__){
var self__ = this;
var this__22797__auto____$1 = this;
return ((4) + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22789__auto__){
var self__ = this;
var this__22789__auto____$1 = this;
var h__22586__auto__ = self__.__hash;
if(!((h__22586__auto__ == null))){
return h__22586__auto__;
} else {
var h__22586__auto____$1 = (function (){var fexpr__457 = ((function (h__22586__auto__,this__22789__auto____$1){
return (function (coll__22790__auto__){
return ((-829256337) ^ cljs.core.hash_unordered_coll(coll__22790__auto__));
});})(h__22586__auto__,this__22789__auto____$1))
;
return fexpr__457(this__22789__auto____$1);
})();
self__.__hash = h__22586__auto____$1;

return h__22586__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this453,other454){
var self__ = this;
var this453__$1 = this;
return (!((other454 == null))) && ((this453__$1.constructor === other454.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this453__$1.func,other454.func)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this453__$1.def,other454.def)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this453__$1.params,other454.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this453__$1.offset,other454.offset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this453__$1.__extmap,other454.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22802__auto__,k__22803__auto__){
var self__ = this;
var this__22802__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$func,null,cljs.core.cst$kw$def,null,cljs.core.cst$kw$params,null,cljs.core.cst$kw$offset,null], null), null),k__22803__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22802__auto____$1),self__.__meta),k__22803__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22803__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22800__auto__,k__22801__auto__,G__451){
var self__ = this;
var this__22800__auto____$1 = this;
var pred__458 = cljs.core.keyword_identical_QMARK_;
var expr__459 = k__22801__auto__;
if(cljs.core.truth_((function (){var G__461 = cljs.core.cst$kw$func;
var G__462 = expr__459;
return (pred__458.cljs$core$IFn$_invoke$arity$2 ? pred__458.cljs$core$IFn$_invoke$arity$2(G__461,G__462) : pred__458.call(null,G__461,G__462));
})())){
return (new cljs.pprint.compiled_directive(G__451,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__463 = cljs.core.cst$kw$def;
var G__464 = expr__459;
return (pred__458.cljs$core$IFn$_invoke$arity$2 ? pred__458.cljs$core$IFn$_invoke$arity$2(G__463,G__464) : pred__458.call(null,G__463,G__464));
})())){
return (new cljs.pprint.compiled_directive(self__.func,G__451,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__465 = cljs.core.cst$kw$params;
var G__466 = expr__459;
return (pred__458.cljs$core$IFn$_invoke$arity$2 ? pred__458.cljs$core$IFn$_invoke$arity$2(G__465,G__466) : pred__458.call(null,G__465,G__466));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__451,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__467 = cljs.core.cst$kw$offset;
var G__468 = expr__459;
return (pred__458.cljs$core$IFn$_invoke$arity$2 ? pred__458.cljs$core$IFn$_invoke$arity$2(G__467,G__468) : pred__458.call(null,G__467,G__468));
})())){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__451,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22801__auto__,G__451),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22805__auto__){
var self__ = this;
var this__22805__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$func,self__.func],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$def,self__.def],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params,self__.params],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$offset,self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22792__auto__,G__451){
var self__ = this;
var this__22792__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__451,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22798__auto__,entry__22799__auto__){
var self__ = this;
var this__22798__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22799__auto__)){
return this__22798__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22799__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22798__auto____$1,entry__22799__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$func,cljs.core.cst$sym$def,cljs.core.cst$sym$params,cljs.core.cst$sym$offset], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__22815__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__22815__auto__,writer__22816__auto__){
return cljs.core._write(writer__22816__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__455){
return (new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(G__455),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(G__455),cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(G__455),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(G__455),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__455,cljs.core.cst$kw$func,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$def,cljs.core.cst$kw$params,cljs.core.cst$kw$offset], 0))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__470,navigator){
var vec__471 = p__470;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__471,(0),null);
var vec__474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__471,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__474,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__474,(1),null);
var vec__477 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$parameter_DASH_from_DASH_args))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,cljs.core.cst$kw$remaining_DASH_arg_DASH_count))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__477,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__477,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__480 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__480,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__480,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__22217__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__483 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__483,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__483,(1),null);
var base_output = (function (){var or__22217__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params)) + (1)) * cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__8_SHARP_){
if((p1__8_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__8_SHARP_,base),cljs.core.quot(p1__8_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__9_SHARP_){
if((p1__9_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__9_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__9_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__486 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__486,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__486,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_489 = (arg < (0));
var pos_arg_490 = ((neg_489)?(- arg):arg);
var raw_str_491 = cljs.pprint.opt_base_str(base,pos_arg_490);
var group_str_492 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_489,pos_arg_490,raw_str_491,vec__486,arg,arg_navigator__$1){
return (function (p1__10_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__10_SHARP_);
});})(neg_489,pos_arg_490,raw_str_491,vec__486,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(cljs.core.cst$kw$commainterval.cljs$core$IFn$_invoke$arity$1(params),raw_str_491));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),cljs.core.cst$kw$commachar.cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_491);
var signed_str_493 = ((neg_489)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_492)].join(''):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_492)].join(''):group_str_492
));
var padded_str_494 = (((signed_str_493.length < cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params) - signed_str_493.length),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_493)].join(''):signed_str_493);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padded_str_494], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$colinc,(1),cljs.core.cst$kw$minpad,(0),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__495 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__496 = (pos - (1));
var G__497 = cljs.core.first(remainder);
var G__498 = cljs.core.next(remainder);
acc = G__495;
pos = G__496;
this$ = G__497;
remainder = G__498;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__499 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__499,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__499,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zero"], 0));
} else {
var abs_arg_502 = (((arg < (0)))?(- arg):arg);
var parts_503 = cljs.pprint.remainders((1000),abs_arg_502);
if((cljs.core.count(parts_503) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_504 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_503);
var full_str_505 = cljs.pprint.add_english_scales(parts_strs_504,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_505)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__506 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__506,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__506,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zeroth"], 0));
} else {
var abs_arg_509 = (((arg < (0)))?(- arg):arg);
var parts_510 = cljs.pprint.remainders((1000),abs_arg_509);
if((cljs.core.count(parts_510) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_511 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_510));
var head_str_512 = cljs.pprint.add_english_scales(parts_strs_511,(1));
var tail_str_513 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_510));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((!(cljs.core.empty_QMARK_(head_str_512))) && (!(cljs.core.empty_QMARK_(tail_str_513))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_512),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_513)].join(''):((!(cljs.core.empty_QMARK_(head_str_512)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_512),"th"].join(''):tail_str_513
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));

var low_two_digits_514 = cljs.core.rem(arg,(100));
var not_teens_515 = (((11) < low_two_digits_514)) || (((19) > low_two_digits_514));
var low_digit_516 = cljs.core.rem(low_two_digits_514,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((low_digit_516 === (1))) && (not_teens_515))?"st":((((low_digit_516 === (2))) && (not_teens_515))?"nd":((((low_digit_516 === (3))) && (not_teens_515))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__517 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__517,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__517,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_520 = cljs.pprint.remainders((10),arg);
var acc_521 = cljs.core.PersistentVector.EMPTY;
var pos_522 = (cljs.core.count(digits_520) - (1));
var digits_523__$1 = digits_520;
while(true){
if(cljs.core.empty_QMARK_(digits_523__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_521)], 0));
} else {
var digit_524 = cljs.core.first(digits_523__$1);
var G__525 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_524))?acc_521:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_521,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_522),(digit_524 - (1)))));
var G__526 = (pos_522 - (1));
var G__527 = cljs.core.next(digits_523__$1);
acc_521 = G__525;
pos_522 = G__526;
digits_523__$1 = G__527;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar," ",cljs.core.cst$kw$commachar,",",cljs.core.cst$kw$commainterval,(3),cljs.core.cst$kw$colon,true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$mincol,(0),cljs.core.cst$kw$padchar,(0),cljs.core.cst$kw$commachar,(0),cljs.core.cst$kw$commainterval,(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__528 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__528,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__528,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__531 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__531,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__531,(1),null);
var pred__534_537 = cljs.core._EQ_;
var expr__535_538 = cljs.core.cst$kw$char_DASH_format.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((pred__534_537.cljs$core$IFn$_invoke$arity$2 ? pred__534_537.cljs$core$IFn$_invoke$arity$2("o",expr__535_538) : pred__534_537.call(null,"o",expr__535_538)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__534_537.cljs$core$IFn$_invoke$arity$2 ? pred__534_537.cljs$core$IFn$_invoke$arity$2("u",expr__535_538) : pred__534_537.call(null,"u",expr__535_538)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__534_537.cljs$core$IFn$_invoke$arity$2 ? pred__534_537.cljs$core$IFn$_invoke$arity$2(null,expr__535_538) : pred__534_537.call(null,null,expr__535_538)))){
cljs.pprint.print_char(c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__535_538)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__539 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__539,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__539,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__542 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__542,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__542,(1),null);
var vec__545 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__545,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__545,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__548 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__548,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__548,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__551 = (i - (1));
i = G__551;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__22217__auto__ = d;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__22485__auto__ = (2);
var y__22486__auto__ = w;
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__22485__auto__ = (e + (1));
var y__22486__auto__ = (w__$1 - (1));
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})():(w__$1 + e)
));
var vec__552 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__552,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__552,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__552,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__552,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__555 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__555,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__555,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var vec__558 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__558,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__558,(1),null);
var vec__561 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__561,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__561,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__564 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__564,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__564,(1),null);
var scaled_exp = (exp + cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__22217__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__567 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__567,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__567,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__567,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__22202__auto__ = w;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = d;
if(cljs.core.truth_(and__22202__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_570 = cljs.core.count(fixed_repr__$1);
var signed_len_571 = (cljs.core.truth_(add_sign)?(len_570 + (1)):len_570);
var prepend_zero_572__$1 = (prepend_zero) && (!((signed_len_571 >= w)));
var append_zero_573__$1 = (append_zero) && (!((signed_len_571 >= w)));
var full_len_574 = (((prepend_zero_572__$1) || (append_zero_573__$1))?(signed_len_571 + (1)):signed_len_571);
if(cljs.core.truth_((function (){var and__22202__auto__ = (full_len_574 > w);
if(and__22202__auto__){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_574),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_572__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_573__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__575 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__575,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__575,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__581_591 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__582_592 = G__581_591;
var mantissa_593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__582_592,(0),null);
var exp_594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__582_592,(1),null);
var G__581_595__$1 = G__581_591;
while(true){
var vec__585_596 = G__581_595__$1;
var mantissa_597__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__585_596,(0),null);
var exp_598__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__585_596,(1),null);
var w_599 = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d_600 = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e_601 = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var k_602 = cljs.core.cst$kw$k.cljs$core$IFn$_invoke$arity$1(params);
var expchar_603 = (function (){var or__22217__auto__ = cljs.core.cst$kw$exponentchar.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return "E";
}
})();
var add_sign_604 = (function (){var or__22217__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_605 = (k_602 <= (0));
var scaled_exp_606 = (exp_598__$1 - (k_602 - (1)));
var scaled_exp_str_607 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_606))].join('');
var scaled_exp_str_608__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_603),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_606 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_601)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_601 - cljs.core.count(scaled_exp_str_607)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_607)].join('');
var exp_width_609 = cljs.core.count(scaled_exp_str_608__$1);
var base_mantissa_width_610 = cljs.core.count(mantissa_597__$1);
var scaled_mantissa_611 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_602),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_597__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_600)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_600 - (base_mantissa_width_610 - (1))) - (((k_602 < (0)))?(- k_602):(0))),"0")):null))].join('');
var w_mantissa_612 = (cljs.core.truth_(w_599)?(w_599 - exp_width_609):null);
var vec__588_613 = cljs.pprint.round_str(scaled_mantissa_611,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_602,(0)))?(d_600 - (1)):(((k_602 > (0)))?d_600:(((k_602 < (0)))?(d_600 - (1)):null))),(cljs.core.truth_(w_mantissa_612)?(w_mantissa_612 - (cljs.core.truth_(add_sign_604)?(1):(0))):null));
var rounded_mantissa_614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__588_613,(0),null);
var __615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__588_613,(1),null);
var incr_exp_616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__588_613,(2),null);
var full_mantissa_617 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_614,k_602);
var append_zero_618 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_602,cljs.core.count(rounded_mantissa_614))) && ((d_600 == null));
if(cljs.core.not(incr_exp_616)){
if(cljs.core.truth_(w_599)){
var len_619 = (cljs.core.count(full_mantissa_617) + exp_width_609);
var signed_len_620 = (cljs.core.truth_(add_sign_604)?(len_619 + (1)):len_619);
var prepend_zero_621__$1 = (prepend_zero_605) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_620,w_599)));
var full_len_622 = ((prepend_zero_621__$1)?(signed_len_620 + (1)):signed_len_620);
var append_zero_623__$1 = (append_zero_618) && ((full_len_622 < w_599));
if(cljs.core.truth_((function (){var and__22202__auto__ = (function (){var or__22217__auto__ = (full_len_622 > w_599);
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = e_601;
if(cljs.core.truth_(and__22202__auto__)){
return ((exp_width_609 - (2)) > e_601);
} else {
return and__22202__auto__;
}
}
})();
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_599,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_599 - full_len_622) - ((append_zero_623__$1)?(1):(0))),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_604)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_621__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_617),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_623__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_608__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_604)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_605)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_617),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_618)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_608__$1)].join('')], 0));
}
} else {
var G__624 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_614,(exp_598__$1 + (1))], null);
G__581_595__$1 = G__624;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__625 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__625,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__625,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__628 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__628,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__628,(1),null);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var e = cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,(0)))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__22485__auto__ = cljs.core.count(mantissa);
var y__22486__auto__ = (function (){var x__22499__auto__ = n;
var y__22500__auto__ = (7);
return ((x__22499__auto__ < y__22500__auto__) ? x__22499__auto__ : y__22500__auto__);
})();
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$w,ww,cljs.core.cst$kw$d,dd,cljs.core.cst$kw$k,(0),cljs.core.cst$kw$overflowchar,cljs.core.cst$kw$overflowchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$padchar,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params),cljs.core.cst$kw$at,cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__631 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__631,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__631,(1),null);
var vec__634 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__634,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__634,(1),null);
var d = cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(params);
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params);
var w = cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__22217__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (arg < (0));
}
})();
var vec__637 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__637,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__637,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__637,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__22202__auto__)){
return add_sign;
} else {
return and__22202__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params));
if(and__22202__auto__){
return add_sign;
} else {
return and__22202__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = cljs.core.cst$kw$selector.cljs$core$IFn$_invoke$arity$1(params);
var vec__640 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__640,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__640,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(cljs.core.cst$kw$else$.cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__643 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__643,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__643,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__646 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__646,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__646,(1),null);
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__649 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__649,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__649,(1),null);
var vec__652 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__652,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__652,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__22217__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = max_count;
if(cljs.core.truth_(and__22202__auto__)){
return (count >= max_count);
} else {
return and__22202__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__655 = (count + (1));
var G__656 = iter_result;
var G__657 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__655;
args__$1 = G__656;
last_pos = G__657;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__658 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__658,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__658,(1),null);
var vec__661 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__661,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__661,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__22217__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = max_count;
if(cljs.core.truth_(and__22202__auto__)){
return (count >= max_count);
} else {
return and__22202__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__664 = (count + (1));
var G__665 = cljs.core.next(arg_list__$1);
count = G__664;
arg_list__$1 = G__665;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__666 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__666,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__666,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__22217__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = max_count;
if(cljs.core.truth_(and__22202__auto__)){
return (count >= max_count);
} else {
return and__22202__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__669 = (count + (1));
var G__670 = iter_result;
var G__671 = cljs.core.cst$kw$pos.cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__669;
navigator__$2 = G__670;
last_pos = G__671;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = cljs.core.cst$kw$max_DASH_iterations.cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var vec__672 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__672,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__672,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__22217__auto__ = (cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__22217__auto__){
return or__22217__auto__;
} else {
var and__22202__auto__ = max_count;
if(cljs.core.truth_(and__22202__auto__)){
return (count >= max_count);
} else {
return and__22202__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__675 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__675,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__675,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon_DASH_up_DASH_arrow,cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__678 = (count + (1));
var G__679 = navigator__$3;
count = G__678;
navigator__$2 = G__679;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$right_DASH_params.cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__680 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_683 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_683;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__680,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__680,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$up_DASH_arrow,cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__684 = cljs.core.next(clauses__$1);
var G__685 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__686 = iter_result;
clauses__$1 = G__684;
acc = G__685;
navigator__$1 = G__686;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__687 = (function (){var temp__22039__auto__ = cljs.core.cst$kw$else$.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__22039__auto__)){
var else$ = temp__22039__auto__;
return cljs.pprint.render_clauses(else$,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__690 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__687,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__690,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__687,(1),null);
var navigator__$1 = (function (){var or__22217__auto__ = new_navigator;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return navigator;
}
})();
var vec__693 = (function (){var temp__22039__auto__ = cljs.core.cst$kw$else_DASH_params.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__22039__auto__)){
var p = temp__22039__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__693,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__693,(1),null);
var navigator__$2 = (function (){var or__22217__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__22217__auto__ = cljs.core.first(cljs.core.cst$kw$min_DASH_remaining.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__22217__auto__ = cljs.core.first(cljs.core.cst$kw$max_DASH_columns.cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var vec__696 = cljs.pprint.render_clauses(clauses,navigator__$2,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__696,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__696,(1),null);
var slots = (function (){var x__22485__auto__ = (1);
var y__22486__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = cljs.core.cst$kw$mincol.cljs$core$IFn$_invoke$arity$1(params);
var minpad = cljs.core.cst$kw$minpad.cljs$core$IFn$_invoke$arity$1(params);
var colinc = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__22485__auto__ = minpad;
var y__22486__auto__ = cljs.core.quot(total_pad,slots);
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__22202__auto__ = eol_str;
if(cljs.core.truth_(and__22202__auto__)){
return (((cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([eol_str], 0));
} else {
}

var slots_699__$1 = slots;
var extra_pad_700__$1 = extra_pad;
var strs_701__$1 = strs;
var pad_only_702 = (function (){var or__22217__auto__ = cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_701__$1),(1))) && (cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_701__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(pad_only_702))?cljs.core.first(strs_701__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__22217__auto__ = pad_only_702;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
var or__22217__auto____$1 = cljs.core.next(strs_701__$1);
if(or__22217__auto____$1){
return or__22217__auto____$1;
} else {
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_700__$1 > (0)))?cljs.core.cst$kw$padchar.cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__703 = (slots_699__$1 - (1));
var G__704 = (extra_pad_700__$1 - (1));
var G__705 = (cljs.core.truth_(pad_only_702)?strs_701__$1:cljs.core.next(strs_701__$1));
var G__706 = false;
slots_699__$1 = G__703;
extra_pad_700__$1 = G__704;
strs_701__$1 = G__705;
pad_only_702 = G__706;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint707 = (function (writer,meta708){
this.writer = writer;
this.meta708 = meta708;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_709,meta708__$1){
var self__ = this;
var _709__$1 = this;
return (new cljs.pprint.t_cljs$pprint707(self__.writer,meta708__$1));
});

cljs.pprint.t_cljs$pprint707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_709){
var self__ = this;
var _709__$1 = this;
return self__.meta708;
});

cljs.pprint.t_cljs$pprint707.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint707.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__710 = cljs.core._EQ_;
var expr__711 = cljs.core.type(x);
if(cljs.core.truth_((pred__710.cljs$core$IFn$_invoke$arity$2 ? pred__710.cljs$core$IFn$_invoke$arity$2(String,expr__711) : pred__710.call(null,String,expr__711)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__710.cljs$core$IFn$_invoke$arity$2 ? pred__710.cljs$core$IFn$_invoke$arity$2(Number,expr__711) : pred__710.call(null,Number,expr__711)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__711)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta708], null);
});

cljs.pprint.t_cljs$pprint707.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint707.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint707";

cljs.pprint.t_cljs$pprint707.cljs$lang$ctorPrWriter = (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint707");
});

cljs.pprint.__GT_t_cljs$pprint707 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint707(writer__$1,meta708){
return (new cljs.pprint.t_cljs$pprint707(writer__$1,meta708));
});

}

return (new cljs.pprint.t_cljs$pprint707(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint713 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint713 = (function (writer,meta714){
this.writer = writer;
this.meta714 = meta714;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_715,meta714__$1){
var self__ = this;
var _715__$1 = this;
return (new cljs.pprint.t_cljs$pprint713(self__.writer,meta714__$1));
});

cljs.pprint.t_cljs$pprint713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_715){
var self__ = this;
var _715__$1 = this;
return self__.meta714;
});

cljs.pprint.t_cljs$pprint713.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t_cljs$pprint713.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__716 = cljs.core._EQ_;
var expr__717 = cljs.core.type(x);
if(cljs.core.truth_((pred__716.cljs$core$IFn$_invoke$arity$2 ? pred__716.cljs$core$IFn$_invoke$arity$2(String,expr__717) : pred__716.call(null,String,expr__717)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__716.cljs$core$IFn$_invoke$arity$2 ? pred__716.cljs$core$IFn$_invoke$arity$2(Number,expr__717) : pred__716.call(null,Number,expr__717)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__717)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$meta714], null);
});

cljs.pprint.t_cljs$pprint713.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint713.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint713";

cljs.pprint.t_cljs$pprint713.cljs$lang$ctorPrWriter = (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint713");
});

cljs.pprint.__GT_t_cljs$pprint713 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint713(writer__$1,meta714){
return (new cljs.pprint.t_cljs$pprint713(writer__$1,meta714));
});

}

return (new cljs.pprint.t_cljs$pprint713(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__22202__auto__ = first_QMARK_;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = f;
if(cljs.core.truth_(and__22202__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__22202__auto__ = m;
if(cljs.core.truth_(and__22202__auto__)){
return (m.index + (1));
} else {
return and__22202__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.pprint.t_cljs$pprint719 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint719 = (function (writer,last_was_whitespace_QMARK_,meta720){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta720 = meta720;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_721,meta720__$1){
var self__ = this;
var _721__$1 = this;
return (new cljs.pprint.t_cljs$pprint719(self__.writer,self__.last_was_whitespace_QMARK_,meta720__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_721){
var self__ = this;
var _721__$1 = this;
return self__.meta720;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint719.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint719.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__722 = cljs.core._EQ_;
var expr__723 = cljs.core.type(x);
if(cljs.core.truth_((pred__722.cljs$core$IFn$_invoke$arity$2 ? pred__722.cljs$core$IFn$_invoke$arity$2(String,expr__723) : pred__722.call(null,String,expr__723)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),cljs.core.deref(self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,(function (){var G__725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__725);
})());
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__722.cljs$core$IFn$_invoke$arity$2 ? pred__722.cljs$core$IFn$_invoke$arity$2(Number,expr__723) : pred__722.call(null,Number,expr__723)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_(cljs.core.deref(self__.last_was_whitespace_QMARK_))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

return cljs.core.reset_BANG_(self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__723)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint719.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$last_DASH_was_DASH_whitespace_QMARK_,cljs.core.cst$sym$meta720], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint719.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint719.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint719";

cljs.pprint.t_cljs$pprint719.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint719");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint719 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint719(writer__$1,last_was_whitespace_QMARK___$1,meta720){
return (new cljs.pprint.t_cljs$pprint719(writer__$1,last_was_whitespace_QMARK___$1,meta720));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint719(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
if(typeof cljs.pprint.t_cljs$pprint726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWriter}
*/
cljs.pprint.t_cljs$pprint726 = (function (writer,capped,meta727){
this.writer = writer;
this.capped = capped;
this.meta727 = meta727;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_728,meta727__$1){
var self__ = this;
var _728__$1 = this;
return (new cljs.pprint.t_cljs$pprint726(self__.writer,self__.capped,meta727__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_728){
var self__ = this;
var _728__$1 = this;
return self__.meta727;
});})(capped))
;

cljs.pprint.t_cljs$pprint726.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint726.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__729 = cljs.core._EQ_;
var expr__730 = cljs.core.type(x);
if(cljs.core.truth_((pred__729.cljs$core$IFn$_invoke$arity$2 ? pred__729.cljs$core$IFn$_invoke$arity$2(String,expr__730) : pred__729.call(null,String,expr__730)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not(cljs.core.deref(self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__22202__auto__ = m;
if(cljs.core.truth_(and__22202__auto__)){
return m.index;
} else {
return and__22202__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_(self__.capped,true);
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__729.cljs$core$IFn$_invoke$arity$2 ? pred__729.cljs$core$IFn$_invoke$arity$2(Number,expr__730) : pred__729.call(null,Number,expr__730)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(cljs.core.deref(self__.capped));
if(and__22202__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__22202__auto__;
}
})())){
cljs.core.reset_BANG_(self__.capped,true);

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__730)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint726.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$writer,cljs.core.cst$sym$capped,cljs.core.cst$sym$meta727], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint726.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint726.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint726";

cljs.pprint.t_cljs$pprint726.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__22772__auto__,writer__22773__auto__,opt__22774__auto__){
return cljs.core._write(writer__22773__auto__,"cljs.pprint/t_cljs$pprint726");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint726 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint726(writer__$1,capped__$1,meta727){
return (new cljs.pprint.t_cljs$pprint726(writer__$1,capped__$1,meta727));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint726(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_732 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_732;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_734 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_735 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var current_736 = cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_))));
var space_count_737 = (((current_736 < colnum_734))?(colnum_734 - current_736):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_735,(0)))?(0):(colinc_735 - cljs.core.rem((current_736 - colnum_734),colinc_735))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_737," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_738 = cljs.core.cst$kw$colnum.cljs$core$IFn$_invoke$arity$1(params);
var colinc_739 = cljs.core.cst$kw$colinc.cljs$core$IFn$_invoke$arity$1(params);
var start_col_740 = (colrel_738 + cljs.pprint.get_column(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.core.deref(cljs.core._STAR_out_STAR_)))));
var offset_741 = (((colinc_739 > (0)))?cljs.core.rem(start_col_740,colinc_739):(0));
var space_count_742 = (colrel_738 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_741))?(0):(colinc_739 - offset_741)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_742," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__743 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__743,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__743,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_746_748 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_747_749 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_747_749;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_746_748;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$current:cljs.core.cst$kw$block);
cljs.pprint.pprint_indent(relative_to,cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$mandatory:cljs.core.cst$kw$fill):(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.core.cst$kw$miser:cljs.core.cst$kw$linear));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"A",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__11_SHARP_,p2__12_SHARP_,p3__13_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__11_SHARP_,p2__12_SHARP_,p3__13_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"S",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__14_SHARP_,p2__15_SHARP_,p3__16_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__14_SHARP_,p2__15_SHARP_,p3__16_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"D",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__17_SHARP_,p2__18_SHARP_,p3__19_SHARP_){
return cljs.pprint.format_integer((10),p1__17_SHARP_,p2__18_SHARP_,p3__19_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"B",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__20_SHARP_,p2__21_SHARP_,p3__22_SHARP_){
return cljs.pprint.format_integer((2),p1__20_SHARP_,p2__21_SHARP_,p3__22_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"O",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__23_SHARP_,p2__24_SHARP_,p3__25_SHARP_){
return cljs.pprint.format_integer((8),p1__23_SHARP_,p2__24_SHARP_,p3__25_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"X",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (p1__26_SHARP_,p2__27_SHARP_,p3__28_SHARP_){
return cljs.pprint.format_integer((16),p1__26_SHARP_,p2__27_SHARP_,p3__28_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"R",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$base,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$commachar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),cljs.core.cst$kw$commainterval,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.first(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__29_SHARP_,p2__30_SHARP_,p3__31_SHARP_){
return cljs.pprint.format_integer(cljs.core.cst$kw$base.cljs$core$IFn$_invoke$arity$1(p1__29_SHARP_),p1__29_SHARP_,p2__30_SHARP_,p3__31_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())){
return (function (p1__32_SHARP_,p2__33_SHARP_,p3__34_SHARP_){
return cljs.pprint.format_old_roman(p1__32_SHARP_,p2__33_SHARP_,p3__34_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__35_SHARP_,p2__36_SHARP_,p3__37_SHARP_){
return cljs.pprint.format_new_roman(p1__35_SHARP_,p2__36_SHARP_,p3__37_SHARP_);
});
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__38_SHARP_,p2__39_SHARP_,p3__40_SHARP_){
return cljs.pprint.format_ordinal_english(p1__38_SHARP_,p2__39_SHARP_,p3__40_SHARP_);
});
} else {
return (function (p1__41_SHARP_,p2__42_SHARP_,p3__43_SHARP_){
return cljs.pprint.format_cardinal_english(p1__41_SHARP_,p2__42_SHARP_,p3__43_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"P",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__750 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__750,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__750,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"C",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$char_DASH_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"F",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(5),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"E",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"G",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(7),[cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$e,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$overflowchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),cljs.core.cst$kw$exponentchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"$",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$d,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$w,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"%",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__23117__auto___768 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_769 = (0);
while(true){
if((i_769 < n__23117__auto___768)){
cljs.pprint.prn();

var G__770 = (i_769 + (1));
i_769 = G__770;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"&",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_771 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_771 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__23117__auto___772 = (cnt_771 - (1));
var i_773 = (0);
while(true){
if((i_773 < n__23117__auto___772)){
cljs.pprint.prn();

var G__774 = (i_773 + (1));
i_773 = G__774;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"|",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__23117__auto___775 = cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(params__$1);
var i_776 = (0);
while(true){
if((i_776 < n__23117__auto___775)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\f"], 0));

var G__777 = (i_776 + (1));
i_776 = G__777;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"~",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"\n",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"T",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$colnum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__44_SHARP_,p2__45_SHARP_,p3__46_SHARP_){
return cljs.pprint.relative_tabulation(p1__44_SHARP_,p2__45_SHARP_,p3__46_SHARP_);
});
} else {
return (function (p1__47_SHARP_,p2__48_SHARP_,p3__49_SHARP_){
return cljs.pprint.absolute_tabulation(p1__47_SHARP_,p2__48_SHARP_,p3__49_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"*",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = cljs.core.cst$kw$n.cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"?",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__753 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__753,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__753,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__756 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__756,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__756,(1),null);
var vec__759 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__759,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__759,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"(",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,")",cljs.core.cst$kw$allows_DASH_separator,null,cljs.core.cst$kw$else$,null], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__50_SHARP_,p2__51_SHARP_,p3__52_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__50_SHARP_,p2__51_SHARP_,p3__52_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,")",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"[",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$selector,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,"]",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else$,cljs.core.cst$kw$last], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,";",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(2),[cljs.core.cst$kw$min_DASH_remaining,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$max_DASH_columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$separator,true], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"]",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"{",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$max_DASH_iterations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$right,"}",cljs.core.cst$kw$allows_DASH_separator,false], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__22202__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"}",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"<",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(4),[cljs.core.cst$kw$mincol,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$colinc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),cljs.core.cst$kw$minpad,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),cljs.core.cst$kw$padchar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$colon,null,cljs.core.cst$kw$at,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$right,">",cljs.core.cst$kw$allows_DASH_separator,true,cljs.core.cst$kw$else$,cljs.core.cst$kw$first], null),cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,">",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"^",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(3),[cljs.core.cst$kw$arg1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),cljs.core.cst$kw$arg3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = cljs.core.cst$kw$arg1.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = cljs.core.cst$kw$arg2.cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = cljs.core.cst$kw$arg3.cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.cst$kw$colon_DASH_up_DASH_arrow:cljs.core.cst$kw$up_DASH_arrow);
if(cljs.core.truth_((function (){var and__22202__auto__ = arg1;
if(cljs.core.truth_(and__22202__auto__)){
var and__22202__auto____$1 = arg2;
if(cljs.core.truth_(and__22202__auto____$1)){
return arg3;
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__22202__auto__ = arg1;
if(cljs.core.truth_(and__22202__auto__)){
return arg2;
} else {
return and__22202__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_args.cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(cljs.core.cst$kw$rest.cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"W",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null,cljs.core.cst$kw$pretty,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
if(cljs.core.truth_((function (){var or__22217__auto__ = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$level,null,cljs.core.cst$kw$length,null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pretty,true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__762 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__762,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__762,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__765 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__765,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__765,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$up_DASH_arrow,navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"_",cljs.core.cst$kw$params,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$at,null,cljs.core.cst$kw$colon,null,cljs.core.cst$kw$both,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$directive,"I",cljs.core.cst$kw$params,(new cljs.core.PersistentArrayMap(null,(1),[cljs.core.cst$kw$n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),cljs.core.cst$kw$flags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$colon,null], null), null),cljs.core.cst$kw$bracket_DASH_info,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$generator_DASH_fn,(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$parameter_DASH_from_DASH_args,null,cljs.core.cst$kw$remaining_DASH_arg_DASH_count,null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__778){
var vec__779 = p__778;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__779,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__779,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__779,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__782){
var vec__783 = p__782;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__783,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__783,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["v",null,"V",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$parameter_DASH_from_DASH_args:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.cst$kw$remaining_DASH_arg_DASH_count:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",cljs.core.cst$kw$colon,"@",cljs.core.cst$kw$at], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__786){
var vec__787 = p__786;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__787,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__787,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__787,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error(["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__22202__auto__){
return cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.format_error(["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__22202__auto__){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__22202__auto__;
}
})())){
cljs.pprint.format_error(["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__22202__auto__ = cljs.core.not(cljs.core.cst$kw$both.cljs$core$IFn$_invoke$arity$1(allowed));
if(and__22202__auto__){
var and__22202__auto____$1 = cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__22202__auto____$1)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__22202__auto____$1;
}
} else {
return and__22202__auto__;
}
})())){
return cljs.pprint.format_error(["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__22499__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__22500__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$at.cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__22499__auto__ < y__22500__auto__) ? x__22499__auto__ : y__22500__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__53_SHARP_,p2__54_SHARP_){
var val = cljs.core.first(p1__53_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__54_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error(["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(p2__54_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(val))].join(''),cljs.core.second(p1__53_SHARP_));
} else {
return null;
}
}),params,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__22960__auto__ = (function cljs$pprint$map_params_$_iter__790(s__791){
return (new cljs.core.LazySeq(null,(function (){
var s__791__$1 = s__791;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__791__$1);
if(temp__22039__auto__){
var s__791__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__791__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__791__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__793 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__792 = (0);
while(true){
if((i__792 < size__22959__auto__)){
var vec__794 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__792);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__794,(0),null);
var vec__797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__794,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__797,(0),null);
cljs.core.chunk_append(b__793,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__806 = (i__792 + (1));
i__792 = G__806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__793),cljs$pprint$map_params_$_iter__790(cljs.core.chunk_rest(s__791__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__793),null);
}
} else {
var vec__800 = cljs.core.first(s__791__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__800,(0),null);
var vec__803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__800,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__803,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__790(cljs.core.rest(s__791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__55_SHARP_,p2__56_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__55_SHARP_,p2__56_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__57_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__807 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__807,(0),null);
var vec__810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__807,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__810,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__810,(1),null);
var vec__813 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__813,(0),null);
var vec__816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__813,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__816,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__816,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__816,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error(["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive((function (){var fexpr__819 = cljs.core.cst$kw$generator_DASH_fn.cljs$core$IFn$_invoke$arity$1(def);
return (fexpr__819.cljs$core$IFn$_invoke$arity$2 ? fexpr__819.cljs$core$IFn$_invoke$arity$2(params,offset__$2) : fexpr__819.call(null,params,offset__$2));
})(),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$string,s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__22202__auto__ = cljs.core.cst$kw$separator.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core.cst$kw$colon.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__22202__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__820 = (function (){var G__823 = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
var G__824 = cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$);
var G__825 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__823,G__824,G__825) : cljs.pprint.collect_clauses.call(null,G__823,G__824,G__825));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__820,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__820,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$))], 0)),cljs.core.cst$kw$offset.cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket_info),cljs.core.cst$kw$directive.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$right_DASH_bracket,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$else$,null,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$separator,null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__826){
var vec__827 = p__826;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__827,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__827,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__827,(2),null);
var vec__830 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__830,(0),null);
var vec__833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__830,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__833,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__833,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__833,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__833,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$right_DASH_bracket)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?cljs.core.cst$kw$else$:cljs.core.cst$kw$clauses),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$right_DASH_params,right_params])], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$else$)){
if(cljs.core.truth_(cljs.core.cst$kw$else$.cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$else$.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else$.cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$first,cljs.core.cst$kw$else$.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$else$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$else_DASH_params,else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$separator)){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(cljs.core.cst$kw$allows_DASH_separator.cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = cljs.core.cst$kw$bracket_DASH_info.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_836 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_836){
return (function (p__837){
var vec__838 = p__837;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__838,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__838,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_836))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_836;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__22217__auto__ = cljs.core.cst$kw$pretty.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$flags.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$def.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
var or__22217__auto____$1 = cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__22217__auto____$1)){
return or__22217__auto____$1;
} else {
return cljs.core.some(cljs.pprint.needs_pretty,cljs.core.first(cljs.core.cst$kw$else$.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__841 = cljs.core.next(format__$1);
format__$1 = G__841;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__843 = arguments.length;
switch (G__843) {
case (3):
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (2):
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__22202__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__22202__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_844 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_844;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__845 = cljs.pprint.realize_parameter_list(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__845,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__845,(1),null);
var vec__848 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__848,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__848,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,cljs.core.cst$kw$base_DASH_args,args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = (3);

cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$sym$quote,"'",cljs.core.cst$sym$var$,"#'",cljs.core.cst$sym$clojure$core_SLASH_deref,"@",cljs.core.cst$sym$clojure$core_SLASH_unquote,"~",cljs.core.cst$sym$cljs$core_SLASH_deref,"@",cljs.core.cst$sym$cljs$core_SLASH_unquote,"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__852 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__852) : cljs.pprint.reader_macros.call(null,G__852));
})();
if(cljs.core.truth_((function (){var and__22202__auto__ = macro_char;
if(cljs.core.truth_(and__22202__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__22202__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_853_856 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_854_857 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count855_858 = (0);
var alis_859__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count855_858 < cljs.core._STAR_print_length_STAR_))){
if(alis_859__$1){
cljs.pprint.write_out(cljs.core.first(alis_859__$1));

if(cljs.core.next(alis_859__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__860 = (length_count855_858 + (1));
var G__861 = cljs.core.next(alis_859__$1);
length_count855_858 = G__860;
alis_859__$1 = G__861;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_854_857;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_853_856;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_862_865 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_863_866 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count864_867 = (0);
var aseq_868 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count864_867 < cljs.core._STAR_print_length_STAR_))){
if(aseq_868){
cljs.pprint.write_out(cljs.core.first(aseq_868));

if(cljs.core.next(aseq_868)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__869 = (length_count864_867 + (1));
var G__870 = cljs.core.next(aseq_868);
length_count864_867 = G__869;
aseq_868 = G__870;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_863_866;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_862_865;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__105__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__871__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__871 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__872__i = 0, G__872__a = new Array(arguments.length -  0);
while (G__872__i < G__872__a.length) {G__872__a[G__872__i] = arguments[G__872__i + 0]; ++G__872__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__872__a,0,null);
} 
return G__871__delegate.call(this,args__107__auto__);};
G__871.cljs$lang$maxFixedArity = 0;
G__871.cljs$lang$applyTo = (function (arglist__873){
var args__107__auto__ = cljs.core.seq(arglist__873);
return G__871__delegate(args__107__auto__);
});
G__871.cljs$core$IFn$_invoke$arity$variadic = G__871__delegate;
return G__871;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__874 = ((!(cljs.core.record_QMARK_(amap)))?(function (){var fexpr__877 = new cljs.core.Var(function(){return cljs.core.lift_ns;},cljs.core.cst$sym$cljs$core_SLASH_lift_DASH_ns,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private$,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$core,cljs.core.cst$sym$lift_DASH_ns,"cljs/core.cljs",(15),(1),(9841),(9841),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)]));
return (fexpr__877.cljs$core$IFn$_invoke$arity$1 ? fexpr__877.cljs$core$IFn$_invoke$arity$1(amap) : fexpr__877.call(null,amap));
})():null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__874,(0),null);
var lift_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__874,(1),null);
var amap__$1 = (function (){var or__22217__auto__ = lift_map;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_878_883 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_879_884 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count880_885 = (0);
var aseq_886 = cljs.core.seq(amap__$1);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count880_885 < cljs.core._STAR_print_length_STAR_))){
if(aseq_886){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_881_887 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_882_888 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_886));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_886)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_882_888;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_881_887;
}}


if(cljs.core.next(aseq_886)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__889 = (length_count880_885 + (1));
var G__890 = cljs.core.next(aseq_886);
length_count880_885 = G__889;
aseq_886 = G__890;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_879_884;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_878_883;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__105__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__891__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__891 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__892__i = 0, G__892__a = new Array(arguments.length -  0);
while (G__892__i < G__892__a.length) {G__892__a[G__892__i] = arguments[G__892__i + 0]; ++G__892__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__892__a,0,null);
} 
return G__891__delegate.call(this,args__107__auto__);};
G__891.cljs$lang$maxFixedArity = 0;
G__891.cljs$lang$applyTo = (function (arglist__893){
var args__107__auto__ = cljs.core.seq(arglist__893);
return G__891__delegate(args__107__auto__);
});
G__891.cljs$core$IFn$_invoke$arity$variadic = G__891__delegate;
return G__891;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__22217__auto__ = (function (){var temp__22039__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__22039__auto__)){
var match = temp__22039__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type(cljs.core.type(o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_894_898 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_895_899 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

cljs.pprint.write_out((((function (){var and__22202__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__22202__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__22202__auto__;
}
})())?cljs.core.cst$kw$not_DASH_delivered:cljs.core.deref(o)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_895_899;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_894_898;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__105__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__900__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__900 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__901__i = 0, G__901__a = new Array(arguments.length -  0);
while (G__901__i < G__901__a.length) {G__901__a[G__901__i] = arguments[G__901__i + 0]; ++G__901__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__901__a,0,null);
} 
return G__900__delegate.call(this,args__107__auto__);};
G__900.cljs$lang$maxFixedArity = 0;
G__900.cljs$lang$applyTo = (function (arglist__902){
var args__107__auto__ = cljs.core.seq(arglist__902);
return G__900__delegate(args__107__auto__);
});
G__900.cljs$core$IFn$_invoke$arity$variadic = G__900__delegate;
return G__900;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return cljs.core.cst$kw$queue;
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return cljs.core.cst$kw$deref;
} else {
if((obj instanceof cljs.core.Symbol)){
return cljs.core.cst$kw$symbol;
} else {
if(cljs.core.seq_QMARK_(obj)){
return cljs.core.cst$kw$list;
} else {
if(cljs.core.map_QMARK_(obj)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.vector_QMARK_(obj)){
return cljs.core.cst$kw$vector;
} else {
if(cljs.core.set_QMARK_(obj)){
return cljs.core.cst$kw$set;
} else {
if((obj == null)){
return null;
} else {
return cljs.core.cst$kw$default$;

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default$,hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,cljs.core.cst$kw$default$,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__904 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__904,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__904,(1),null);
var vec__907 = reference;
var seq__908 = cljs.core.seq(vec__907);
var first__909 = cljs.core.first(seq__908);
var seq__908__$1 = cljs.core.next(seq__908);
var keyw = first__909;
var args = seq__908__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_910_926 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_911_927 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

var fexpr__912_928 = (function (){var format_in__105__auto__ = "~w~:i";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args){
return (function() { 
var G__929__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__929 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__930__i = 0, G__930__a = new Array(arguments.length -  0);
while (G__930__i < G__930__a.length) {G__930__a[G__930__i] = arguments[G__930__i + 0]; ++G__930__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__930__a,0,null);
} 
return G__929__delegate.call(this,args__107__auto__);};
G__929.cljs$lang$maxFixedArity = 0;
G__929.cljs$lang$applyTo = (function (arglist__931){
var args__107__auto__ = cljs.core.seq(arglist__931);
return G__929__delegate(args__107__auto__);
});
G__929.cljs$core$IFn$_invoke$arity$variadic = G__929__delegate;
return G__929;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args))
})();
(fexpr__912_928.cljs$core$IFn$_invoke$arity$1 ? fexpr__912_928.cljs$core$IFn$_invoke$arity$1(keyw) : fexpr__912_928.call(null,keyw));

var args_932__$1 = args;
while(true){
if(cljs.core.seq(args_932__$1)){
var fexpr__913_933 = (function (){var format_in__105__auto__ = " ";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (args_932__$1,format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args){
return (function() { 
var G__934__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__934 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__935__i = 0, G__935__a = new Array(arguments.length -  0);
while (G__935__i < G__935__a.length) {G__935__a[G__935__i] = arguments[G__935__i + 0]; ++G__935__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__935__a,0,null);
} 
return G__934__delegate.call(this,args__107__auto__);};
G__934.cljs$lang$maxFixedArity = 0;
G__934.cljs$lang$applyTo = (function (arglist__936){
var args__107__auto__ = cljs.core.seq(arglist__936);
return G__934__delegate(args__107__auto__);
});
G__934.cljs$core$IFn$_invoke$arity$variadic = G__934__delegate;
return G__934;
})()
;
;})(args_932__$1,format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args))
})();
(fexpr__913_933.cljs$core$IFn$_invoke$arity$0 ? fexpr__913_933.cljs$core$IFn$_invoke$arity$0() : fexpr__913_933.call(null));

var arg_937 = cljs.core.first(args_932__$1);
if(cljs.core.sequential_QMARK_(arg_937)){
var vec__914_938 = cljs.pprint.brackets(arg_937);
var start_939__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__914_938,(0),null);
var end_940__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__914_938,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_917_941 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_918_942 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_939__$1,null,end_940__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_937),(3))) && ((cljs.core.second(arg_937) instanceof cljs.core.Keyword))){
var vec__919_943 = arg_937;
var ns_944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__919_943,(0),null);
var kw_945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__919_943,(1),null);
var lis_946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__919_943,(2),null);
var fexpr__922_947 = (function (){var format_in__105__auto__ = "~w ~w ";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (args_932__$1,format_in__105__auto__,cf__106__auto__,vec__919_943,ns_944,kw_945,lis_946,_STAR_current_level_STAR_917_941,_STAR_current_length_STAR_918_942,vec__914_938,start_939__$1,end_940__$1,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args){
return (function() { 
var G__948__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__948 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__949__i = 0, G__949__a = new Array(arguments.length -  0);
while (G__949__i < G__949__a.length) {G__949__a[G__949__i] = arguments[G__949__i + 0]; ++G__949__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__949__a,0,null);
} 
return G__948__delegate.call(this,args__107__auto__);};
G__948.cljs$lang$maxFixedArity = 0;
G__948.cljs$lang$applyTo = (function (arglist__950){
var args__107__auto__ = cljs.core.seq(arglist__950);
return G__948__delegate(args__107__auto__);
});
G__948.cljs$core$IFn$_invoke$arity$variadic = G__948__delegate;
return G__948;
})()
;
;})(args_932__$1,format_in__105__auto__,cf__106__auto__,vec__919_943,ns_944,kw_945,lis_946,_STAR_current_level_STAR_917_941,_STAR_current_length_STAR_918_942,vec__914_938,start_939__$1,end_940__$1,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args))
})();
(fexpr__922_947.cljs$core$IFn$_invoke$arity$2 ? fexpr__922_947.cljs$core$IFn$_invoke$arity$2(ns_944,kw_945) : fexpr__922_947.call(null,ns_944,kw_945));

if(cljs.core.sequential_QMARK_(lis_946)){
var fexpr__923_951 = (function (){var format_in__105__auto__ = ((cljs.core.vector_QMARK_(lis_946))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (args_932__$1,format_in__105__auto__,cf__106__auto__,vec__919_943,ns_944,kw_945,lis_946,_STAR_current_level_STAR_917_941,_STAR_current_length_STAR_918_942,vec__914_938,start_939__$1,end_940__$1,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args){
return (function() { 
var G__952__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__952 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__953__i = 0, G__953__a = new Array(arguments.length -  0);
while (G__953__i < G__953__a.length) {G__953__a[G__953__i] = arguments[G__953__i + 0]; ++G__953__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__953__a,0,null);
} 
return G__952__delegate.call(this,args__107__auto__);};
G__952.cljs$lang$maxFixedArity = 0;
G__952.cljs$lang$applyTo = (function (arglist__954){
var args__107__auto__ = cljs.core.seq(arglist__954);
return G__952__delegate(args__107__auto__);
});
G__952.cljs$core$IFn$_invoke$arity$variadic = G__952__delegate;
return G__952;
})()
;
;})(args_932__$1,format_in__105__auto__,cf__106__auto__,vec__919_943,ns_944,kw_945,lis_946,_STAR_current_level_STAR_917_941,_STAR_current_length_STAR_918_942,vec__914_938,start_939__$1,end_940__$1,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args))
})();
(fexpr__923_951.cljs$core$IFn$_invoke$arity$1 ? fexpr__923_951.cljs$core$IFn$_invoke$arity$1(lis_946) : fexpr__923_951.call(null,lis_946));
} else {
cljs.pprint.write_out(lis_946);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__105__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (args_932__$1,format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_917_941,_STAR_current_length_STAR_918_942,vec__914_938,start_939__$1,end_940__$1,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args){
return (function() { 
var G__955__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__955 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__956__i = 0, G__956__a = new Array(arguments.length -  0);
while (G__956__i < G__956__a.length) {G__956__a[G__956__i] = arguments[G__956__i + 0]; ++G__956__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__956__a,0,null);
} 
return G__955__delegate.call(this,args__107__auto__);};
G__955.cljs$lang$maxFixedArity = 0;
G__955.cljs$lang$applyTo = (function (arglist__957){
var args__107__auto__ = cljs.core.seq(arglist__957);
return G__955__delegate(args__107__auto__);
});
G__955.cljs$core$IFn$_invoke$arity$variadic = G__955__delegate;
return G__955;
})()
;
;})(args_932__$1,format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_917_941,_STAR_current_length_STAR_918_942,vec__914_938,start_939__$1,end_940__$1,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args))
})(),arg_937);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_918_942;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_917_941;
}}


if(cljs.core.next(args_932__$1)){
var fexpr__924_958 = (function (){var format_in__105__auto__ = "~_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (args_932__$1,format_in__105__auto__,cf__106__auto__,vec__914_938,start_939__$1,end_940__$1,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args){
return (function() { 
var G__959__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__959 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__960__i = 0, G__960__a = new Array(arguments.length -  0);
while (G__960__i < G__960__a.length) {G__960__a[G__960__i] = arguments[G__960__i + 0]; ++G__960__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__960__a,0,null);
} 
return G__959__delegate.call(this,args__107__auto__);};
G__959.cljs$lang$maxFixedArity = 0;
G__959.cljs$lang$applyTo = (function (arglist__961){
var args__107__auto__ = cljs.core.seq(arglist__961);
return G__959__delegate(args__107__auto__);
});
G__959.cljs$core$IFn$_invoke$arity$variadic = G__959__delegate;
return G__959;
})()
;
;})(args_932__$1,format_in__105__auto__,cf__106__auto__,vec__914_938,start_939__$1,end_940__$1,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args))
})();
(fexpr__924_958.cljs$core$IFn$_invoke$arity$0 ? fexpr__924_958.cljs$core$IFn$_invoke$arity$0() : fexpr__924_958.call(null));
} else {
}
} else {
cljs.pprint.write_out(arg_937);

if(cljs.core.next(args_932__$1)){
var fexpr__925_962 = (function (){var format_in__105__auto__ = "~:_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (args_932__$1,format_in__105__auto__,cf__106__auto__,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args){
return (function() { 
var G__963__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__963 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__964__i = 0, G__964__a = new Array(arguments.length -  0);
while (G__964__i < G__964__a.length) {G__964__a[G__964__i] = arguments[G__964__i + 0]; ++G__964__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__964__a,0,null);
} 
return G__963__delegate.call(this,args__107__auto__);};
G__963.cljs$lang$maxFixedArity = 0;
G__963.cljs$lang$applyTo = (function (arglist__965){
var args__107__auto__ = cljs.core.seq(arglist__965);
return G__963__delegate(args__107__auto__);
});
G__963.cljs$core$IFn$_invoke$arity$variadic = G__963__delegate;
return G__963;
})()
;
;})(args_932__$1,format_in__105__auto__,cf__106__auto__,arg_937,_STAR_current_level_STAR_910_926,_STAR_current_length_STAR_911_927,vec__904,start,end,vec__907,seq__908,first__909,seq__908__$1,keyw,args))
})();
(fexpr__925_962.cljs$core$IFn$_invoke$arity$0 ? fexpr__925_962.cljs$core$IFn$_invoke$arity$0() : fexpr__925_962.call(null));
} else {
}
}

var G__966 = cljs.core.next(args_932__$1);
args_932__$1 = G__966;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_911_927;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_910_926;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__967 = alis;
var seq__968 = cljs.core.seq(vec__967);
var first__969 = cljs.core.first(seq__968);
var seq__968__$1 = cljs.core.next(seq__968);
var ns_sym = first__969;
var first__969__$1 = cljs.core.first(seq__968__$1);
var seq__968__$2 = cljs.core.next(seq__968__$1);
var ns_name = first__969__$1;
var stuff = seq__968__$2;
var vec__970 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__970,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__970,(1),null);
var vec__973 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__973,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__973,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_976_983 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_977_984 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__978_985 = (function (){var format_in__105__auto__ = "~w ~1I~@_~w";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_976_983,_STAR_current_length_STAR_977_984,vec__967,seq__968,first__969,seq__968__$1,ns_sym,first__969__$1,seq__968__$2,ns_name,stuff,vec__970,doc_str,stuff__$1,vec__973,attr_map,references){
return (function() { 
var G__986__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__986 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__987__i = 0, G__987__a = new Array(arguments.length -  0);
while (G__987__i < G__987__a.length) {G__987__a[G__987__i] = arguments[G__987__i + 0]; ++G__987__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__987__a,0,null);
} 
return G__986__delegate.call(this,args__107__auto__);};
G__986.cljs$lang$maxFixedArity = 0;
G__986.cljs$lang$applyTo = (function (arglist__988){
var args__107__auto__ = cljs.core.seq(arglist__988);
return G__986__delegate(args__107__auto__);
});
G__986.cljs$core$IFn$_invoke$arity$variadic = G__986__delegate;
return G__986;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_976_983,_STAR_current_length_STAR_977_984,vec__967,seq__968,first__969,seq__968__$1,ns_sym,first__969__$1,seq__968__$2,ns_name,stuff,vec__970,doc_str,stuff__$1,vec__973,attr_map,references))
})();
(fexpr__978_985.cljs$core$IFn$_invoke$arity$2 ? fexpr__978_985.cljs$core$IFn$_invoke$arity$2(ns_sym,ns_name) : fexpr__978_985.call(null,ns_sym,ns_name));

if(cljs.core.truth_((function (){var or__22217__auto__ = doc_str;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
var or__22217__auto____$1 = attr_map;
if(cljs.core.truth_(or__22217__auto____$1)){
return or__22217__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
var fexpr__979_989 = (function (){var format_in__105__auto__ = "~@:_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_976_983,_STAR_current_length_STAR_977_984,vec__967,seq__968,first__969,seq__968__$1,ns_sym,first__969__$1,seq__968__$2,ns_name,stuff,vec__970,doc_str,stuff__$1,vec__973,attr_map,references){
return (function() { 
var G__990__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__990 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__991__i = 0, G__991__a = new Array(arguments.length -  0);
while (G__991__i < G__991__a.length) {G__991__a[G__991__i] = arguments[G__991__i + 0]; ++G__991__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__991__a,0,null);
} 
return G__990__delegate.call(this,args__107__auto__);};
G__990.cljs$lang$maxFixedArity = 0;
G__990.cljs$lang$applyTo = (function (arglist__992){
var args__107__auto__ = cljs.core.seq(arglist__992);
return G__990__delegate(args__107__auto__);
});
G__990.cljs$core$IFn$_invoke$arity$variadic = G__990__delegate;
return G__990;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_976_983,_STAR_current_length_STAR_977_984,vec__967,seq__968,first__969,seq__968__$1,ns_sym,first__969__$1,seq__968__$2,ns_name,stuff,vec__970,doc_str,stuff__$1,vec__973,attr_map,references))
})();
(fexpr__979_989.cljs$core$IFn$_invoke$arity$0 ? fexpr__979_989.cljs$core$IFn$_invoke$arity$0() : fexpr__979_989.call(null));
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([doc_str,(function (){var or__22217__auto__ = attr_map;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
var G__981_993 = attr_map;
var G__982_994 = cljs.core.seq(references);
var fexpr__980_995 = (function (){var format_in__105__auto__ = "~w~:[~;~:@_~]";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,G__981_993,G__982_994,_STAR_current_level_STAR_976_983,_STAR_current_length_STAR_977_984,vec__967,seq__968,first__969,seq__968__$1,ns_sym,first__969__$1,seq__968__$2,ns_name,stuff,vec__970,doc_str,stuff__$1,vec__973,attr_map,references){
return (function() { 
var G__996__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__996 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__997__i = 0, G__997__a = new Array(arguments.length -  0);
while (G__997__i < G__997__a.length) {G__997__a[G__997__i] = arguments[G__997__i + 0]; ++G__997__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__997__a,0,null);
} 
return G__996__delegate.call(this,args__107__auto__);};
G__996.cljs$lang$maxFixedArity = 0;
G__996.cljs$lang$applyTo = (function (arglist__998){
var args__107__auto__ = cljs.core.seq(arglist__998);
return G__996__delegate(args__107__auto__);
});
G__996.cljs$core$IFn$_invoke$arity$variadic = G__996__delegate;
return G__996;
})()
;
;})(format_in__105__auto__,cf__106__auto__,G__981_993,G__982_994,_STAR_current_level_STAR_976_983,_STAR_current_length_STAR_977_984,vec__967,seq__968,first__969,seq__968__$1,ns_sym,first__969__$1,seq__968__$2,ns_name,stuff,vec__970,doc_str,stuff__$1,vec__973,attr_map,references))
})();
(fexpr__980_995.cljs$core$IFn$_invoke$arity$2 ? fexpr__980_995.cljs$core$IFn$_invoke$arity$2(G__981_993,G__982_994) : fexpr__980_995.call(null,G__981_993,G__982_994));
} else {
}

var references_999__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_999__$1));

var temp__22039__auto___1000 = cljs.core.next(references_999__$1);
if(temp__22039__auto___1000){
var references_1001__$2 = temp__22039__auto___1000;
cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__1002 = references_1001__$2;
references_999__$1 = G__1002;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_977_984;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_976_983;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__105__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__1003__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1003 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1004__i = 0, G__1004__a = new Array(arguments.length -  0);
while (G__1004__i < G__1004__a.length) {G__1004__a[G__1004__i] = arguments[G__1004__i + 0]; ++G__1004__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1004__a,0,null);
} 
return G__1003__delegate.call(this,args__107__auto__);};
G__1003.cljs$lang$maxFixedArity = 0;
G__1003.cljs$lang$applyTo = (function (arglist__1005){
var args__107__auto__ = cljs.core.seq(arglist__1005);
return G__1003__delegate(args__107__auto__);
});
G__1003.cljs$core$IFn$_invoke$arity$variadic = G__1003__delegate;
return G__1003;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
var fexpr__1006_1009 = (function (){var format_in__105__auto__ = " ~_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__1010__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1010 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1011__i = 0, G__1011__a = new Array(arguments.length -  0);
while (G__1011__i < G__1011__a.length) {G__1011__a[G__1011__i] = arguments[G__1011__i + 0]; ++G__1011__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1011__a,0,null);
} 
return G__1010__delegate.call(this,args__107__auto__);};
G__1010.cljs$lang$maxFixedArity = 0;
G__1010.cljs$lang$applyTo = (function (arglist__1012){
var args__107__auto__ = cljs.core.seq(arglist__1012);
return G__1010__delegate(args__107__auto__);
});
G__1010.cljs$core$IFn$_invoke$arity$variadic = G__1010__delegate;
return G__1010;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
(fexpr__1006_1009.cljs$core$IFn$_invoke$arity$0 ? fexpr__1006_1009.cljs$core$IFn$_invoke$arity$0() : fexpr__1006_1009.call(null));
} else {
var fexpr__1007_1013 = (function (){var format_in__105__auto__ = " ~@_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__1014__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1014 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1015__i = 0, G__1015__a = new Array(arguments.length -  0);
while (G__1015__i < G__1015__a.length) {G__1015__a[G__1015__i] = arguments[G__1015__i + 0]; ++G__1015__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1015__a,0,null);
} 
return G__1014__delegate.call(this,args__107__auto__);};
G__1014.cljs$lang$maxFixedArity = 0;
G__1014.cljs$lang$applyTo = (function (arglist__1016){
var args__107__auto__ = cljs.core.seq(arglist__1016);
return G__1014__delegate(args__107__auto__);
});
G__1014.cljs$core$IFn$_invoke$arity$variadic = G__1014__delegate;
return G__1014;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
(fexpr__1007_1013.cljs$core$IFn$_invoke$arity$0 ? fexpr__1007_1013.cljs$core$IFn$_invoke$arity$0() : fexpr__1007_1013.call(null));
}

var fexpr__1008 = (function (){var format_in__105__auto__ = "~{~w~^ ~_~}";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__1017__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1017 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1018__i = 0, G__1018__a = new Array(arguments.length -  0);
while (G__1018__i < G__1018__a.length) {G__1018__a[G__1018__i] = arguments[G__1018__i + 0]; ++G__1018__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1018__a,0,null);
} 
return G__1017__delegate.call(this,args__107__auto__);};
G__1017.cljs$lang$maxFixedArity = 0;
G__1017.cljs$lang$applyTo = (function (arglist__1019){
var args__107__auto__ = cljs.core.seq(arglist__1019);
return G__1017__delegate(args__107__auto__);
});
G__1017.cljs$core$IFn$_invoke$arity$variadic = G__1017__delegate;
return G__1017;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
return (fexpr__1008.cljs$core$IFn$_invoke$arity$1 ? fexpr__1008.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__1008.call(null,alis));
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
var fexpr__1020 = (function (){var format_in__105__auto__ = " ~_~{~w~^ ~_~}";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__1021__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1021 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1022__i = 0, G__1022__a = new Array(arguments.length -  0);
while (G__1022__i < G__1022__a.length) {G__1022__a[G__1022__i] = arguments[G__1022__i + 0]; ++G__1022__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1022__a,0,null);
} 
return G__1021__delegate.call(this,args__107__auto__);};
G__1021.cljs$lang$maxFixedArity = 0;
G__1021.cljs$lang$applyTo = (function (arglist__1023){
var args__107__auto__ = cljs.core.seq(arglist__1023);
return G__1021__delegate(args__107__auto__);
});
G__1021.cljs$core$IFn$_invoke$arity$variadic = G__1021__delegate;
return G__1021;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
return (fexpr__1020.cljs$core$IFn$_invoke$arity$1 ? fexpr__1020.cljs$core$IFn$_invoke$arity$1(alis) : fexpr__1020.call(null,alis));
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__1024 = alis;
var seq__1025 = cljs.core.seq(vec__1024);
var first__1026 = cljs.core.first(seq__1025);
var seq__1025__$1 = cljs.core.next(seq__1025);
var defn_sym = first__1026;
var first__1026__$1 = cljs.core.first(seq__1025__$1);
var seq__1025__$2 = cljs.core.next(seq__1025__$1);
var defn_name = first__1026__$1;
var stuff = seq__1025__$2;
var vec__1027 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1027,(1),null);
var vec__1030 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1030,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1030,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1033_1038 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1034_1039 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var fexpr__1035_1040 = (function (){var format_in__105__auto__ = "~w ~1I~@_~w";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1033_1038,_STAR_current_length_STAR_1034_1039,vec__1024,seq__1025,first__1026,seq__1025__$1,defn_sym,first__1026__$1,seq__1025__$2,defn_name,stuff,vec__1027,doc_str,stuff__$1,vec__1030,attr_map,stuff__$2){
return (function() { 
var G__1041__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1041 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1042__i = 0, G__1042__a = new Array(arguments.length -  0);
while (G__1042__i < G__1042__a.length) {G__1042__a[G__1042__i] = arguments[G__1042__i + 0]; ++G__1042__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1042__a,0,null);
} 
return G__1041__delegate.call(this,args__107__auto__);};
G__1041.cljs$lang$maxFixedArity = 0;
G__1041.cljs$lang$applyTo = (function (arglist__1043){
var args__107__auto__ = cljs.core.seq(arglist__1043);
return G__1041__delegate(args__107__auto__);
});
G__1041.cljs$core$IFn$_invoke$arity$variadic = G__1041__delegate;
return G__1041;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1033_1038,_STAR_current_length_STAR_1034_1039,vec__1024,seq__1025,first__1026,seq__1025__$1,defn_sym,first__1026__$1,seq__1025__$2,defn_name,stuff,vec__1027,doc_str,stuff__$1,vec__1030,attr_map,stuff__$2))
})();
(fexpr__1035_1040.cljs$core$IFn$_invoke$arity$2 ? fexpr__1035_1040.cljs$core$IFn$_invoke$arity$2(defn_sym,defn_name) : fexpr__1035_1040.call(null,defn_sym,defn_name));

if(cljs.core.truth_(doc_str)){
var fexpr__1036_1044 = (function (){var format_in__105__auto__ = " ~_~w";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1033_1038,_STAR_current_length_STAR_1034_1039,vec__1024,seq__1025,first__1026,seq__1025__$1,defn_sym,first__1026__$1,seq__1025__$2,defn_name,stuff,vec__1027,doc_str,stuff__$1,vec__1030,attr_map,stuff__$2){
return (function() { 
var G__1045__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1045 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1046__i = 0, G__1046__a = new Array(arguments.length -  0);
while (G__1046__i < G__1046__a.length) {G__1046__a[G__1046__i] = arguments[G__1046__i + 0]; ++G__1046__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1046__a,0,null);
} 
return G__1045__delegate.call(this,args__107__auto__);};
G__1045.cljs$lang$maxFixedArity = 0;
G__1045.cljs$lang$applyTo = (function (arglist__1047){
var args__107__auto__ = cljs.core.seq(arglist__1047);
return G__1045__delegate(args__107__auto__);
});
G__1045.cljs$core$IFn$_invoke$arity$variadic = G__1045__delegate;
return G__1045;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1033_1038,_STAR_current_length_STAR_1034_1039,vec__1024,seq__1025,first__1026,seq__1025__$1,defn_sym,first__1026__$1,seq__1025__$2,defn_name,stuff,vec__1027,doc_str,stuff__$1,vec__1030,attr_map,stuff__$2))
})();
(fexpr__1036_1044.cljs$core$IFn$_invoke$arity$1 ? fexpr__1036_1044.cljs$core$IFn$_invoke$arity$1(doc_str) : fexpr__1036_1044.call(null,doc_str));
} else {
}

if(cljs.core.truth_(attr_map)){
var fexpr__1037_1048 = (function (){var format_in__105__auto__ = " ~_~w";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1033_1038,_STAR_current_length_STAR_1034_1039,vec__1024,seq__1025,first__1026,seq__1025__$1,defn_sym,first__1026__$1,seq__1025__$2,defn_name,stuff,vec__1027,doc_str,stuff__$1,vec__1030,attr_map,stuff__$2){
return (function() { 
var G__1049__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1049 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1050__i = 0, G__1050__a = new Array(arguments.length -  0);
while (G__1050__i < G__1050__a.length) {G__1050__a[G__1050__i] = arguments[G__1050__i + 0]; ++G__1050__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1050__a,0,null);
} 
return G__1049__delegate.call(this,args__107__auto__);};
G__1049.cljs$lang$maxFixedArity = 0;
G__1049.cljs$lang$applyTo = (function (arglist__1051){
var args__107__auto__ = cljs.core.seq(arglist__1051);
return G__1049__delegate(args__107__auto__);
});
G__1049.cljs$core$IFn$_invoke$arity$variadic = G__1049__delegate;
return G__1049;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1033_1038,_STAR_current_length_STAR_1034_1039,vec__1024,seq__1025,first__1026,seq__1025__$1,defn_sym,first__1026__$1,seq__1025__$2,defn_name,stuff,vec__1027,doc_str,stuff__$1,vec__1030,attr_map,stuff__$2))
})();
(fexpr__1037_1048.cljs$core$IFn$_invoke$arity$1 ? fexpr__1037_1048.cljs$core$IFn$_invoke$arity$1(attr_map) : fexpr__1037_1048.call(null,attr_map));
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__22217__auto__ = doc_str;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__22217__auto__ = doc_str;
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1034_1039;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1033_1038;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1052_1057 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1053_1058 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count1054_1059 = (0);
var binding_1060 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count1054_1059 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_1060)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1055_1061 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1056_1062 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_1060));

if(cljs.core.next(binding_1060)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(binding_1060));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1056_1062;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1055_1061;
}}


if(cljs.core.next(cljs.core.rest(binding_1060))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__1063 = (length_count1054_1059 + (1));
var G__1064 = cljs.core.next(cljs.core.rest(binding_1060));
length_count1054_1059 = G__1063;
binding_1060 = G__1064;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1053_1058;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1052_1057;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1065_1070 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1066_1071 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
var fexpr__1067_1072 = (function (){var format_in__105__auto__ = "~w ~1I~@_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1065_1070,_STAR_current_length_STAR_1066_1071,base_sym){
return (function() { 
var G__1073__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1073 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1074__i = 0, G__1074__a = new Array(arguments.length -  0);
while (G__1074__i < G__1074__a.length) {G__1074__a[G__1074__i] = arguments[G__1074__i + 0]; ++G__1074__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1074__a,0,null);
} 
return G__1073__delegate.call(this,args__107__auto__);};
G__1073.cljs$lang$maxFixedArity = 0;
G__1073.cljs$lang$applyTo = (function (arglist__1075){
var args__107__auto__ = cljs.core.seq(arglist__1075);
return G__1073__delegate(args__107__auto__);
});
G__1073.cljs$core$IFn$_invoke$arity$variadic = G__1073__delegate;
return G__1073;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1065_1070,_STAR_current_length_STAR_1066_1071,base_sym))
})();
(fexpr__1067_1072.cljs$core$IFn$_invoke$arity$1 ? fexpr__1067_1072.cljs$core$IFn$_invoke$arity$1(base_sym) : fexpr__1067_1072.call(null,base_sym));

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

var G__1069_1076 = cljs.core.next(cljs.core.rest(alis));
var fexpr__1068_1077 = (function (){var format_in__105__auto__ = " ~_~{~w~^ ~_~}";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,G__1069_1076,_STAR_current_level_STAR_1065_1070,_STAR_current_length_STAR_1066_1071,base_sym){
return (function() { 
var G__1078__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1078 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1079__i = 0, G__1079__a = new Array(arguments.length -  0);
while (G__1079__i < G__1079__a.length) {G__1079__a[G__1079__i] = arguments[G__1079__i + 0]; ++G__1079__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1079__a,0,null);
} 
return G__1078__delegate.call(this,args__107__auto__);};
G__1078.cljs$lang$maxFixedArity = 0;
G__1078.cljs$lang$applyTo = (function (arglist__1080){
var args__107__auto__ = cljs.core.seq(arglist__1080);
return G__1078__delegate(args__107__auto__);
});
G__1078.cljs$core$IFn$_invoke$arity$variadic = G__1078__delegate;
return G__1078;
})()
;
;})(format_in__105__auto__,cf__106__auto__,G__1069_1076,_STAR_current_level_STAR_1065_1070,_STAR_current_length_STAR_1066_1071,base_sym))
})();
(fexpr__1068_1077.cljs$core$IFn$_invoke$arity$1 ? fexpr__1068_1077.cljs$core$IFn$_invoke$arity$1(G__1069_1076) : fexpr__1068_1077.call(null,G__1069_1076));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1066_1071;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1065_1070;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__105__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__){
return (function() { 
var G__1081__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1081 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1082__i = 0, G__1082__a = new Array(arguments.length -  0);
while (G__1082__i < G__1082__a.length) {G__1082__a[G__1082__i] = arguments[G__1082__i + 0]; ++G__1082__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1082__a,0,null);
} 
return G__1081__delegate.call(this,args__107__auto__);};
G__1081.cljs$lang$maxFixedArity = 0;
G__1081.cljs$lang$applyTo = (function (arglist__1083){
var args__107__auto__ = cljs.core.seq(arglist__1083);
return G__1081__delegate(args__107__auto__);
});
G__1081.cljs$core$IFn$_invoke$arity$variadic = G__1081__delegate;
return G__1081;
})()
;
;})(format_in__105__auto__,cf__106__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1084_1089 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1085_1090 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var length_count1086_1091 = (0);
var alis_1092__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count1086_1091 < cljs.core._STAR_print_length_STAR_))){
if(alis_1092__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1087_1093 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1088_1094 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_1092__$1));

if(cljs.core.next(alis_1092__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_1092__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1088_1094;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1087_1093;
}}


if(cljs.core.next(cljs.core.rest(alis_1092__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__1095 = (length_count1086_1091 + (1));
var G__1096 = cljs.core.next(cljs.core.rest(alis_1092__$1));
length_count1086_1091 = G__1095;
alis_1092__$1 = G__1096;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1085_1090;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1084_1089;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1097_1102 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1098_1103 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__105__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1097_1102,_STAR_current_length_STAR_1098_1103){
return (function() { 
var G__1104__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1104 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1105__i = 0, G__1105__a = new Array(arguments.length -  0);
while (G__1105__i < G__1105__a.length) {G__1105__a[G__1105__i] = arguments[G__1105__i + 0]; ++G__1105__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1105__a,0,null);
} 
return G__1104__delegate.call(this,args__107__auto__);};
G__1104.cljs$lang$maxFixedArity = 0;
G__1104.cljs$lang$applyTo = (function (arglist__1106){
var args__107__auto__ = cljs.core.seq(arglist__1106);
return G__1104__delegate(args__107__auto__);
});
G__1104.cljs$core$IFn$_invoke$arity$variadic = G__1104__delegate;
return G__1104;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_current_level_STAR_1097_1102,_STAR_current_length_STAR_1098_1103))
})(),alis);

var length_count1099_1107 = (0);
var alis_1108__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count1099_1107 < cljs.core._STAR_print_length_STAR_))){
if(alis_1108__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1100_1109 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1101_1110 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_1108__$1));

if(cljs.core.next(alis_1108__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$miser);

cljs.pprint.write_out(cljs.core.second(alis_1108__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1101_1110;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1100_1109;
}}


if(cljs.core.next(cljs.core.rest(alis_1108__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__1111 = (length_count1099_1107 + (1));
var G__1112 = cljs.core.next(cljs.core.rest(alis_1108__$1));
length_count1099_1107 = G__1111;
alis_1108__$1 = G__1112;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1098_1103;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1097_1102;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_1113 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),"%"]):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_1113,args,nlis){
return (function (p1__58_SHARP_,p2__59_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58_SHARP_,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__59_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_1113,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{var fexpr__1114 = (function (){var format_in__105__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__106__auto__ = ((typeof format_in__105__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__105__auto__) : cljs.pprint.cached_compile.call(null,format_in__105__auto__)):format_in__105__auto__);
return ((function (format_in__105__auto__,cf__106__auto__,_STAR_symbol_map_STAR_1113,args,nlis){
return (function() { 
var G__1115__delegate = function (args__107__auto__){
var navigator__108__auto__ = cljs.pprint.init_navigator(args__107__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__106__auto__,navigator__108__auto__);
};
var G__1115 = function (var_args){
var args__107__auto__ = null;
if (arguments.length > 0) {
var G__1116__i = 0, G__1116__a = new Array(arguments.length -  0);
while (G__1116__i < G__1116__a.length) {G__1116__a[G__1116__i] = arguments[G__1116__i + 0]; ++G__1116__i;}
  args__107__auto__ = new cljs.core.IndexedSeq(G__1116__a,0,null);
} 
return G__1115__delegate.call(this,args__107__auto__);};
G__1115.cljs$lang$maxFixedArity = 0;
G__1115.cljs$lang$applyTo = (function (arglist__1117){
var args__107__auto__ = cljs.core.seq(arglist__1117);
return G__1115__delegate(args__107__auto__);
});
G__1115.cljs$core$IFn$_invoke$arity$variadic = G__1115__delegate;
return G__1115;
})()
;
;})(format_in__105__auto__,cf__106__auto__,_STAR_symbol_map_STAR_1113,args,nlis))
})();
return (fexpr__1114.cljs$core$IFn$_invoke$arity$1 ? fexpr__1114.cljs$core$IFn$_invoke$arity$1(nlis) : fexpr__1114.call(null,nlis));
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_1113;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_1118_1121 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_1119_1122 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(cljs.core.cst$kw$block,(1));

var length_count1120_1123 = (0);
var alis_1124__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count1120_1123 < cljs.core._STAR_print_length_STAR_))){
if(alis_1124__$1){
cljs.pprint.write_out(cljs.core.first(alis_1124__$1));

if(cljs.core.next(alis_1124__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(cljs.core.cst$kw$linear);

var G__1125 = (length_count1120_1123 + (1));
var G__1126 = cljs.core.next(alis_1124__$1);
length_count1120_1123 = G__1125;
alis_1124__$1 = G__1126;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_1119_1122;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_1118_1121;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var iter__22960__auto__ = (function cljs$pprint$two_forms_$_iter__1127(s__1128){
return (new cljs.core.LazySeq(null,(function (){
var s__1128__$1 = s__1128;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__1128__$1);
if(temp__22039__auto__){
var s__1128__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1128__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__1128__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__1130 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__1129 = (0);
while(true){
if((i__1129 < size__22959__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__1129);
cljs.core.chunk_append(b__1130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__1131 = (i__1129 + (1));
i__1129 = G__1131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1130),cljs$pprint$two_forms_$_iter__1127(cljs.core.chunk_rest(s__1128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1130),null);
}
} else {
var x = cljs.core.first(s__1128__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__1127(cljs.core.rest(s__1128__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22960__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__60_SHARP_){
var vec__1132 = p1__60_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1132,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1132,(1),null);
if(cljs.core.not((function (){var or__22217__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__60_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$_DOT_,cljs.core.cst$sym$fn_STAR_,cljs.core.cst$sym$when_DASH_first,cljs.core.cst$sym$if$,cljs.core.cst$sym$condp,cljs.core.cst$sym$_DOT__DOT_,cljs.core.cst$sym$defmacro,cljs.core.cst$sym$defn,cljs.core.cst$sym$loop,cljs.core.cst$sym$struct,cljs.core.cst$sym$doseq,cljs.core.cst$sym$if_DASH_not,cljs.core.cst$sym$when_DASH_not,cljs.core.cst$sym$def,cljs.core.cst$sym$when,cljs.core.cst$sym$with_DASH_open,cljs.core.cst$sym$with_DASH_local_DASH_vars,cljs.core.cst$sym$defonce,cljs.core.cst$sym$when_DASH_let,cljs.core.cst$sym$ns,cljs.core.cst$sym$dotimes,cljs.core.cst$sym$cond,cljs.core.cst$sym$let$,cljs.core.cst$sym$fn,cljs.core.cst$sym$defn_DASH_,cljs.core.cst$sym$locking,cljs.core.cst$sym$_DASH__GT_,cljs.core.cst$sym$if_DASH_let,cljs.core.cst$sym$binding,cljs.core.cst$sym$struct_DASH_map],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__21984__auto__ = (function (){var G__1135 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__1135) : cljs.pprint._STAR_code_table_STAR_.call(null,G__1135));
})();
if(cljs.core.truth_(temp__21984__auto__)){
var special_form = temp__21984__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__21984__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__21984__auto__)){
var arg_num = temp__21984__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__23132__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23133__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23134__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23135__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23136__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,cljs.core.cst$kw$default$,hierarchy__23136__auto__,method_table__23132__auto__,prefer_table__23133__auto__,method_cache__23134__auto__,cached_hierarchy__23135__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$list,cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$symbol,cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$vector,cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$map,cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$set,cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$queue,cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$deref,cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,cljs.core.cst$kw$default$,cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__22485__auto__ = (0);
var y__22486__auto__ = (width - cljs.core.count(s));
return ((x__22485__auto__ > y__22486__auto__) ? x__22485__auto__ : y__22486__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__1137 = arguments.length;
switch (G__1137) {
case (2):
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (1):
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_1138 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_1138){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_1138){
return (function (p1__61_SHARP_){
return cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__61_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_1138))
,rows));
});})(_STAR_print_newline_STAR_1138))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_1138){
return (function (p1__62_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__62_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_1138))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_1138){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__22960__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_1138){
return (function cljs$pprint$iter__1139(s__1140){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_1138){
return (function (){
var s__1140__$1 = s__1140;
while(true){
var temp__22039__auto__ = cljs.core.seq(s__1140__$1);
if(temp__22039__auto__){
var s__1140__$2 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1140__$2)){
var c__22958__auto__ = cljs.core.chunk_first(s__1140__$2);
var size__22959__auto__ = cljs.core.count(c__22958__auto__);
var b__1142 = cljs.core.chunk_buffer(size__22959__auto__);
if((function (){var i__1141 = (0);
while(true){
if((i__1141 < size__22959__auto__)){
var vec__1143 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__22958__auto__,i__1141);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1143,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1143,(1),null);
cljs.core.chunk_append(b__1142,cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__1154 = (i__1141 + (1));
i__1141 = G__1154;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1142),cljs$pprint$iter__1139(cljs.core.chunk_rest(s__1140__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1142),null);
}
} else {
var vec__1146 = cljs.core.first(s__1140__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1146,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1146,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__1139(cljs.core.rest(s__1140__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_1138))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_1138))
;
return iter__22960__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__22960__auto__,widths,spacers,_STAR_print_newline_STAR_1138){
return (function (p1__63_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__63_SHARP_);
});})(iter__22960__auto__,widths,spacers,_STAR_print_newline_STAR_1138))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_1138))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__1149 = cljs.core.seq(rows);
var chunk__1150 = null;
var count__1151 = (0);
var i__1152 = (0);
while(true){
if((i__1152 < count__1151)){
var row = chunk__1150.cljs$core$IIndexed$_nth$arity$2(null,i__1152);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__1155 = seq__1149;
var G__1156 = chunk__1150;
var G__1157 = count__1151;
var G__1158 = (i__1152 + (1));
seq__1149 = G__1155;
chunk__1150 = G__1156;
count__1151 = G__1157;
i__1152 = G__1158;
continue;
} else {
var temp__22039__auto__ = cljs.core.seq(seq__1149);
if(temp__22039__auto__){
var seq__1149__$1 = temp__22039__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__1149__$1)){
var c__22996__auto__ = cljs.core.chunk_first(seq__1149__$1);
var G__1159 = cljs.core.chunk_rest(seq__1149__$1);
var G__1160 = c__22996__auto__;
var G__1161 = cljs.core.count(c__22996__auto__);
var G__1162 = (0);
seq__1149 = G__1159;
chunk__1150 = G__1160;
count__1151 = G__1161;
i__1152 = G__1162;
continue;
} else {
var row = cljs.core.first(seq__1149__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fmt_row("| "," | "," |",row)], 0));

var G__1163 = cljs.core.next(seq__1149__$1);
var G__1164 = null;
var G__1165 = (0);
var G__1166 = (0);
seq__1149 = G__1163;
chunk__1150 = G__1164;
count__1151 = G__1165;
i__1152 = G__1166;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_1138;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = (2);

