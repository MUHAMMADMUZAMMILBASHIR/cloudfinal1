"use client";

import Heart from "@/components/icons/heart";
import { CldImage, CldImageProps } from "next-cloudinary";
import React, { ComponentProps, useState } from "react";

import actions from "@/app/gallary/actions";
import { useTransition } from "react";
import FullHeart from "@/components/icons/full-heart";
import { SearchResult } from "../app/gallary/page";
import { ImageMenu } from "./image-menu";

export  function CloudinaryImage(
  props: {
    imageData: SearchResult;
    onUnHeart?: (unHeartedResources: SearchResult) => void;
  } & Omit<CldImageProps, "src">
) {
  const [transition, startTransition] = useTransition();
  const { imageData, onUnHeart } = props;
  // const isFavorited = imageData.tags.includes("favorite");

  const [isFavorited, setIsFavorited] = useState(
    imageData.tags.includes("favorite")
  );

  return (
    <div className="relative">
      <CldImage {...props} src={imageData.public_id} />
      {isFavorited ? (
        <FullHeart
          onClick={() => {
            onUnHeart?.(imageData);
            setIsFavorited(false);
            startTransition(() => {
              actions(imageData.public_id, false);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
        />
      ) : (
        <Heart
          onClick={() => {
            setIsFavorited(true);
            startTransition(() => {
              actions(imageData.public_id, true);
            });
          }}
          className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
        />
      )}
      <ImageMenu image={imageData}/>
    </div>
  );
}
