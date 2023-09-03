"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";
import React  from "react";
import { useState } from "react";
import Image from "next/image";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, setTransformation] = useState<
    undefined | "generative-fill" | "blur" | "grayscale" | "bg-remove "| "pixelate"
  >();
  const [pendingPrompt, setPendingPrompt] = useState("");
  const [prompt, setPrompt] = useState("");

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  return (
    <>
      <section>
        <div className=" px-4 pt-8">
          <div className="flex space-between px-4 py-6 w-full">
            <h1 className="text-4xl font-bold w-full">Edit {publicId}</h1>
          </div>
          <Button
            className="w-full my-3"
            variant="default"
            onClick={() => {
              setTransformation("generative-fill");
              setPrompt(pendingPrompt);
            }}
          >
            Generative Fill
          </Button>
          <Input
            value={pendingPrompt}
            onChange={(e) => setPendingPrompt(e.currentTarget.value)}
            className="my-3"
          />
          <Button
            className="w-full my-3"
            variant="default"
            onClick={() => setTransformation("pixelate")}
          >
            PIXealate
          </Button>

          

          <div className="grid grid-cols-2 gap-12">
            <CldImage src={publicId} width={300} height={200} alt="Image" />
            
            {transformation === "pixelate" && (
              <Image
                src={`https://res.cloudinary.com/${cloudName}/image/upload/e_pixelate:20/${publicId}`}
                width={300}
                height={200}
                alt="Image"
                
              />
            )}
           
            
          </div>
          <Button
            className="w-full my-3"
            variant="ghost"
            onClick={() => setTransformation(undefined)}
          >
            Clear Work
          </Button>
        </div>
      </section>
    </>
  );
}
