import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";
import ImageBox from "./components/ImageBox";

function App() {
  const inpRef = useRef<HTMLInputElement>(null);

  const [imageList, setImageList] = useState<string[]>([]);
  // console.log(imageList);
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    // Do something with the files
      if (acceptedFiles.length) {
        for (const file of acceptedFiles) {
          // console.log(file.name);
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = (event) => {
            setImageList((prev) => [...prev, event.target?.result as string]);
          };
        }
      }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="container">
      <div className={"gallery-box " + (imageList.length > 0 && "row")}>
        {imageList.length === 0 && (
          <div className="text-center">
            no image.
            <br />
            Please add images.
          </div>
        )}

        {imageList.map((el, idx) => (
          <ImageBox key={el + idx} src={el} />
        ))}
        <div className="plus-box" {...getRootProps()}>
          <input {...getInputProps()} />+
        </div>
      </div>
    </div>
  );
}

export default App;
