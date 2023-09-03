import React from "react";
import UploadButton from "@/app/gallary/upload-button";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import {CloudinaryImage} from "@/components/cloudinary-image";
import { useRouter } from "next/navigation";
import { SearchResult } from "../gallary/page";
import ForceRefresh from "@/components/force-refresh";
import FavoritesList from "./favorites-list";

export default async function FavoritesPage() {
  const result = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  //console.log(result)

  return (
    <section>
      <ForceRefresh />
      <div className=" px-4 pt-8">
        <div className="flex space-between px-4 py-6 w-full">
          <h1 className="text-4xl font-bold w-full">Favorites</h1>
          {/* <UploadButton /> */}
        </div>

        <FavoritesList initialResources={result.resources} />
      </div>
    </section>
  );
}
