"use client";

import React, { useEffect, useState } from "react";
import {CloudinaryImage} from "@/components/cloudinary-image";
import { SearchResult } from "../gallary/page";
import {ImageGrid} from "@/components/image-grid";

export default function FavoritesList({
  initialResources,
}: {
  initialResources: SearchResult[];
}) {
  //   const result = (await cloudinary.v2.search
  //     .expression("resource_type:image AND tags=favorite")
  //     .sort_by("created_at", "desc")
  //     .with_field("tags")
  //     .max_results(30)
  //     .execute()) as { resources: SearchResult[] };

  //console.log(result)
  const [resources, setResources] = useState(initialResources);
  useEffect(() => {
    setResources(initialResources);
  }, [initialResources]);
  return (
    <ImageGrid
      images={resources}
      getImage={(imageData: SearchResult) => {
        return (
          <CloudinaryImage
            //path = "/favorites"
            key={imageData.public_id}
            //src={result.public_id}
            // publicId={result.public_id}
            imageData={imageData}
            width="400"
            height="300"
            alt={"An Image of Something"}
            onUnHeart={(unHeartedResources) => {
              setResources((currentResources) => {
                return currentResources.filter((resources) => {
                  return resources.public_id !== unHeartedResources.public_id;
                });
              });
            }}
          />
        );
      }}
    />
  );
}
