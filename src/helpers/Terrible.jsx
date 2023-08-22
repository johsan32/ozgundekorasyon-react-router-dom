import React from "react";
import { TERipple } from "tw-elements-react";

export default function RippleImage(){
  return (
    <TERipple>
      <img
        src="https://tecdn.b-cdn.net/img/new/standard/city/043.jpg"
        className="h-auto max-w-sm cursor-pointer"
        alt=""
      />
    </TERipple>
  );
}
