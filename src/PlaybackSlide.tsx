import * as React from "react";

import {Utils} from "ractive-player";
const {during, from} = Utils.authoring;

// import {PlaybackScript} from "./script";

export default function PlaybackSlide() {
  return (
    <section id="sec-playback" {...during("playback/")}>
      <h2>Playback</h2>
      <ul>
        <li {...from("playback/loop")}>animation loop simulating a media element advancing in time</li>

        <li {...from("playback/html")}>imitates (but does not fully implement) the <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement">HTMLMediaElement</a> interface</li>

        <li {...from("playback/hub")}>emits events through <a href="https://nodejs.org/api/events.html#events_class_eventemitter">EventEmitter</a> <code>playback.hub</code></li>
      </ul>
      {/*<PlaybackScript/>*/}
    </section>
  );
}