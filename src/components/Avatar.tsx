import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { checkValueArray } from "@/lib";
import { Size } from "@/types";
import styles from "@/styles/modules/avatar.module.scss";

interface Props {
  src: any;
  shortDesc: string;
  imgW?: number;
  imgH?: number;
  size: Size;
  aspectRatio?: string;
}

const Avatar: React.FC<Props> = ({
  src,
  shortDesc = 'Short description for Image',
  imgW,
  imgH,
  size = 'md',
  aspectRatio
}) => {
  type sizeString = keyof typeof Size;
  // const isSize = checkValueArray(size, Size);
  // console.log(sizeString);
  // console.log(isSize);
  const baseClass = clsx(styles.base, size && styles[`${size}`]);

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
}

export default Avatar;
