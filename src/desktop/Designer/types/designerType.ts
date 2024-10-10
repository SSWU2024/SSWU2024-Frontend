export interface DesignerContactProps {
    email: string;
    instagram: string;
    behance: string;
  }

export interface DesignerWorksProps {
    works: Array<{
      workId: number;
      workTitle: string;
      workEngTitle: string;
      studioNm: string;
      images: Array<{
        imgPath: string;
        fileFormat: string;
      }>;
    }>;
  }