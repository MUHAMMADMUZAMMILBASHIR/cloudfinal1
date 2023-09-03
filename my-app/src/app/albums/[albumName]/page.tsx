import React from "react";

import cloudinary from "cloudinary";
import ForceRefresh from "@/components/force-refresh";
import AlbumGrid from "./album-grid";




export type SearchResult = {
  public_id: string;
  tags: string[];
};

export default async function GallaryPage({params : {albumName}}: { params: {albumName: string}} ) {
  const result = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}` )
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

 

  return (
    <section>
      <ForceRefresh />
      <div className=" flex flex-col gap-8">
        <div className="flex space-between px-4 py-6 w-full">
                  <h1 className="text-4xl font-bold w-full">Album{ albumName}</h1>
        </div>
        <AlbumGrid images={result.resources} />
      </div>
    </section>
  );
}
