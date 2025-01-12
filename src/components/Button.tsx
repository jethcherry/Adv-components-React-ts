import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  el: "anchor";
} & ComponentPropsWithoutRef<"button">;

export default function Button(props: ButtonProps | AnchorProps) {
  if (props.el === "anchor") {
    return <a   ></a>;
  }
  return <button></button>;
}
