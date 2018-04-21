(ns cljs-parallel-test-example.runner
  (:require
   [cljs-parallel-test-example.ns-split :refer-macros [gen-ns-test-calls]]
   [cljs.test :refer [run-block empty-env get-current-env set-env!] :refer-macros [test-ns-block]]
   [cljs.analyzer.api :as ana-api]
   [cljs-parallel-test-example.sample]
   [cljs-parallel-test-example.test-1]
   [cljs-parallel-test-example.test-2]
   [cljs-parallel-test-example.test-3]
   [cljs-parallel-test-example.test-4]))

(enable-console-print!)

(def tests-block-seq
  (gen-ns-test-calls))

(defn get-total-namespaces [] (count tests-block-seq))

(defn run-ns-block [n]
  (set-env! (empty-env))
  (try  (run-block (tests-block-seq n))
        (catch js/Error e
          (println e)))
  (clj->js (:report-counters (get-current-env))))
