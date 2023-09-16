import React from "react";
import { Tweet } from "react-tweet";

const Tweets = () => {
  return (
    <div className="tweet-main flex justify-center ">
      <div className="w-10/12">
        <div className="flex justify-center">
          <h1 className="feature-h1">Hear from our Community</h1>
        </div>

        <div
          className="App justify-items-center sm:grid-cols-1 grid lg:grid-cols-3 gap-8"
          data-theme="light"
        >
          {/* <Tweet id="1659273134879514624" /> */}
          <Tweet id="1686463982092132352" />
          <Tweet id="1699796869260751101" />
          <Tweet id="1680924494225895431" />

          {/* <Tweet id="1680924487032659969" /> */}
        </div>
      </div>
    </div>
  );
};

export default Tweets;
