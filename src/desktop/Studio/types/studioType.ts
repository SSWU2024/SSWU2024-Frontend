export interface StudioInfoProps {
  info: {
    studio: string;
    advisor: string;
    description: string;
  };
}

export interface TotalWorksProps {
  id: number;
}

export interface WorkType {
  workId: number;
  workTitle: string;
  images: Array<{
    imgPath: string;
    fileFormat: string;
  }>;
  designers: Array<{ name: string }>;
  workEngTitle: string;
}
