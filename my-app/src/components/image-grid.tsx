import {CloudinaryImage} from "@/components/cloudinary-image";
import { SearchResult } from "@/app/gallary/page";
import React from "react";
import { ReactNode } from "react";

export  function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  const MAX_COLUMNS = 4;
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => {
      return idx % MAX_COLUMNS === colIndex;
    });
  }
  return (
    <div className="grid grid-cols-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (columns, idx) => (
          <div key={idx} className="m-2">
            {columns.map(getImage)}
          </div>
        )
      )}
    </div>
  );
}
