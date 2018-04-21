(ns cljs-parallel-test-example.test-3
  (:require
   [cljs.test :refer-macros [deftest is]]))


(deftest ident
  (js* "for (var j = 0; j<10; j++){for (i = 0; i<1000000000;i++){}}")
  (is (= 4 3))
  (try (throw (js/Error. "This is an error..."))))
