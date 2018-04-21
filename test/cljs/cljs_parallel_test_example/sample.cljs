(ns cljs-parallel-test-example.sample
  (:require [cljs.test :refer-macros [deftest is]]))

(deftest addition
  (is (= 4 (+ 3 1))))

(deftest subtraction
  (is (= 4 (- 55 51))))
