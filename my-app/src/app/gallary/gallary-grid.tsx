"use client";
import {CloudinaryImage} from "@/components/cloudinary-image";
import React from "react";
import { SearchResult } from "./page";
import {ImageGrid }from "@/components/image-grid";


export default function GallaryGrid({ images }: { images: SearchResult[] }) {
  //console.log(result)

  return (
    <ImageGrid
      images={images}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            key={imageData.public_id}
            // src={result.public_id}
            // publicId={result.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt={"An Image of Something"}
          />
        );
      }}
    />
  );
}
