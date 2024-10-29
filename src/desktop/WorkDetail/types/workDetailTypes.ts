export interface DetailsProps {
  workTitle: string;
  designers: Array<{ name: string }>;
  workBody: string;
  workEngBody: string;
}

export interface DetailImagesProps {
  images: Array<{
    sort: number;
    imgPath: string;
    fileFormat: string;
  }>;
}

export interface DesignersProps {
  currentWorkId: number;
  designers: Array<{
    designerId: number;
    name: string;
    engName: string;
    email: string;
    works: Array<{
      workId: number;
      workTitle: string;
      studioNm: string;
      images: Array<{ imgPath: string; fileFormat: string }>;
    }>;
  }>;
}
