(ns cljs-parallel-test-example.test-1
  (:require
   [cljs.test :refer-macros [deftest is]]))


(deftest ident
  (is (= 1 1)))
