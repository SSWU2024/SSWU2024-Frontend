// StudioPage.tsx
export interface studioInfoType {
  studio: string;
  advisor: string;
  description: string;
  imgSrc: string;
}

// StudioInfo.tsx
export interface studioInfoProps {
  info: {
    studio: string;
    advisor: string;
    description: string;
    mobileImgSrc: string;
  };
}
