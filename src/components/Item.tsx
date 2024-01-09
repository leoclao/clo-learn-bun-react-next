import React from "react";
import clsx from "clsx";
import Types from "@/types";

import styles from "@/styles";

interface Props {
  animate?: Types.Animations;
  orientation: Types.Orientations;
  tag: Types.Tags;
  size: Types.Sizes;
  theme: Types.Themes;
  rounded?: Types.Rounded;
  children: React.ReactElement;
}