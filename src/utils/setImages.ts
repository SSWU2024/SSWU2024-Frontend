export interface imageType {
  sort: number;
  imgPath: string;
  fileFormat: string;
}

export const setImages = (images: imageType[]) => {
  images.sort((a, b) => a.sort - b.sort);
  return images;
};
