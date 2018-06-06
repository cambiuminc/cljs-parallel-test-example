(ns ^:figwheel-no-load cljs-parallel-test-example.dev
  (:require
   [cljs-parallel-test-example.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
