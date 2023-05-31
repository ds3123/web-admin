/* eslint-disable @next/next/no-img-element */

import React, { useState, useCallback , useRef } from "react";


interface ImageUploadFormProps {
    onUpload: (files: File[]) => void;
}



const ImageUploadForm: React.FC< ImageUploadFormProps > = ( { onUpload } ) => {


  const fileInputRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<File[]>([]);

  const onImageChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
        onUpload(files);
      }
    },
    [onUpload]
  );



  const onDrop = useCallback(

    ( e : React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const files = Array.from(e.dataTransfer.files);
        setImages((prevImages) => [...prevImages, ...files]);
        onUpload(files);
      }
    } ,
    [ onUpload ]

  );

  
  const removeImage = (index: number, e : React.MouseEvent<HTMLButtonElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };


  return <>
        
            <input ref       = { fileInputRef }
                   type      = "file"
                   accept    = "image/*"
                   multiple
                   onChange  = { onImageChange }
                   className = "hidden" />

            { /* 上傳圖片區塊 */ }
            <div className  = "w-full h-32 border-2 border-dashed border-gray-300 rounded-md p-4 mb-4 text-center cursor-pointer relative"
                 onDragOver = { e => e.preventDefault() }
                 onDrop     = { onDrop }
                 onClick    = { () => fileInputRef.current?.click() } >


                { images.length === 0 ? 
                            <p className="text-gray-500">點擊或拖曳圖片到此區域上傳</p> :
                            images.map( ( image , index ) => 
                            
                                        <div key={index} className="w-16 h-16 relative inline-block mx-2 mb-2">

                                            <img src       = {URL.createObjectURL(image)}
                                                alt       = "uploaded preview"
                                                className ="rounded w-full h-full object-cover" />

                                            <button type = "button" className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs"
                                                    onClick = { e => removeImage( index , e ) } > x
                                            </button>

                                        </div>

                                      )

                }
                
            </div>

         </>


}


export default ImageUploadForm
       