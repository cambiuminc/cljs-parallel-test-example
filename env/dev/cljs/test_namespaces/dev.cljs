(ns ^:figwheel-no-load test-namespaces.dev
  (:require
    [test-namespaces.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
