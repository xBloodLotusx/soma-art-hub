import React from "react";

const photos = [
  "/photos/photo1.svg",
  "/photos/photo2.svg",
  "/photos/photo3.svg",
];

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {photos.map((src, i) => (
        <div key={i} className="overflow-hidden rounded-2xl border border-ink/10 bg-card p-2">
          <img src={src} alt={`Gallery ${i + 1}`} className="h-56 w-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
