(ns cljs-parallel-test-example.test-1
  (:require
   [cljs.test :refer-macros [deftest is]]))


(deftest ident-1
  (is (= 1 1)))
