(ns cljs-parallel-test-example.test-2
  (:require
   [cljs.test :refer-macros [deftest is]]))


(deftest ident
  (is (= 2 2)))
