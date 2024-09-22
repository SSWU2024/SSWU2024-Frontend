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
    }>;
  }

export interface DesignersProps {
    designers: Array<{
      name: string;
      engName: string;
      email: string;
      workTitle: string;
      studioNm: string;
      images: Array<{ imgPath: string; fileFormat: string }>;
    }>;
  }