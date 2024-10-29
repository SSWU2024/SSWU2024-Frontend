interface designer {
  designerId: number;
  name: string;
  engName: string;
  email: string;
  works: work[];
}

interface work {
  workId: number;
  workTitle: string;
  images: { imgPath: string; fileFormat?: string };
}

interface image {
  sort: number;
  imgPath: string;
  fileFormat?: string;
}

// WorkInfo.tsx
export interface WorkInfoProps {
  title: string;
  description: string;
  engDescription: string;
  designers: designer[];
}

// WorkImage.tsx
export interface WorkImageProps {
  images: image[];
}

// DesignerList.tsx
export interface designer_list {
  designerId: number;
  name: string;
  engName: string;
  email: string;
  works: work[];
}
