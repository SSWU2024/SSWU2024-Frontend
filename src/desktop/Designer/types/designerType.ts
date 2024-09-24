export interface DesignerContactProps {
    email: string;
    instagram: string;
    behance: string;
  }

export interface DesignerWorksProps {
    works: Array<{
      url: string;
      workTitle: string;
      studioNm: string;
      images: Array<{
        imgPath: string;
        fileFormat: string;
      }>;
    }>;
  }