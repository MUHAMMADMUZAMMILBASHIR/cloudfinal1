
import React from "react";
//import UploadButton from "./upload-button";
import cloudinary from "cloudinary";
import { CldImage } from "next-cloudinary";
import {CloudinaryImage} from "../../components/cloudinary-image";
import { useRouter } from "next/navigation";
import {ImageGrid} from "@/components/image-grid";
import { ReactNode } from "react";
import { AlbumCard } from "./album-card";

//import GallaryGrid from "./gallary-grid";

export type Folder = { name: string; path: string };

export default async function AlbumsPage() {
    const {folders} = (await cloudinary.v2.api.root_folders()) as {
        map: any;
        folders: Folder[];
    }
   

  return (
    <section>
      <div className=" px-4 pt-8">
        <div className="flex space-between px-4 py-6 w-full">
          <h1 className="text-4xl font-bold w-full">Albums</h1>
        </div>
              {folders.map((folder) => (
                  <AlbumCard key={ folder.path} folder={folder} />
              ))}
        
        
      </div>
    </section>
  );
}
