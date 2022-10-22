import { render, Dynamic } from "solid-js/web";
import { createSignal, Switch, Match, For } from "solid-js";
import { createStore } from "solid-js/store";
import { createWorker } from "tesseract.js";

const worker = createWorker();
//Create effect listens for signal
//Create memo makes it only calculate and display once upon signal
