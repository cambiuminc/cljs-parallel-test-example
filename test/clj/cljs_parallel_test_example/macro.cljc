(ns cljs-parallel-test-example.macro
  (:require [cljs.analyzer.api :as ana-api]
            [cljs.analyzer :as ana]
            [cljs.test :refer-macros [run-tests-block test-ns-block]]))

(defn get-testable-nss []
  (->> (ana-api/all-ns)
       (filter
        #(re-matches
          (-> (str *ns*)
              (clojure.string/split #"\.")
              (first)
              (str "\\..*")
              (re-pattern))
          (name %)))))

(defmacro gen-ns-test-calls []
  (let [nspaces (get-testable-nss)]
    `[~@(for [nspace nspaces]

;just notes here
          

          `(cljs.test/test-ns-block
            (update (cljs.test/get-current-env)
                      :testing-contexts
                      #(conj % (str (quote ~nspace))))
            (quote ~nspace)))]))


