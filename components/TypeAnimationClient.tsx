"use client";

import dynamic from "next/dynamic";
import type { ComponentProps, ComponentType } from "react";

type TypeAnimationComponentProps = ComponentProps<
  (typeof import("react-type-animation"))["TypeAnimation"]
>;

const TypeAnimationClient = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false },
) as ComponentType<TypeAnimationComponentProps>;

export default TypeAnimationClient;
