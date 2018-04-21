(ns test-namespaces.prod
  (:require [test-namespaces.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
