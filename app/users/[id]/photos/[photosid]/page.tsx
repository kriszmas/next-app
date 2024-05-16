import React from "react";

interface Props {
  params: { id: number; photosid: number };
}
const PhotosPage = ({ params: { id, photosid } }: Props) => {
  return (
    <div>
      PhotosPage{id}
      {photosid}
    </div>
  );
};

export default PhotosPage;
