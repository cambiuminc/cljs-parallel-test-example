(ns cljs-parallel-test-example.prod
  (:require [cljs-parallel-test-example.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
