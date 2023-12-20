import React from "react";
import Image from "next/image";
import clsx from "clsx";
// import { checkValue } from "@/lib";
import Types from "@/types";
import styles from "@/styles/modules/avatar.module.scss";

interface Props {
  src: any;
  shortDesc: string;
  imgW?: number;
  imgH?: number;
  size: Types.Sizes;
  theme: Types.Themes;
  aspectRatio?: string;
}

export default function Avatar({
  src,
  shortDesc = 'Short description for Image',
  imgW,
  imgH,
  size = 'md',
  theme = 'default',
  aspectRatio = 'auto',
}: Props) {
  const isSizeExists = () => Object.values(Types.Sizes).includes(size) && true;
  const isThemeExists = () => Object.values(Types.Themes).includes(theme) && true;
  const baseClass = clsx(
    styles.base,
    !!isSizeExists && styles[`${size}`],
    !!isThemeExists && styles[`${theme}`]
  );

  return (
    <span className={baseClass}>
      <Image
        src={src}
        width={imgW || 500}
        height={imgH || 500}
        alt={shortDesc}
      />
    </span>
  )
};

// export default Avatar;
