import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      white: string;
      gray100: string;
      gray200: string;
      gray300: string;
      gray500: string;
      gray900: string;
      pink: string;
      pink300: string;
      gray_graphic: string;
      blue: string;
      orange: string;
    };
    fonts: {
      desktop_title_reg_60: SerializedStyles;
      desktop_title_reg_54: SerializedStyles;
      desktop_title_semi_40: SerializedStyles;
      desktop_title_semi_28: SerializedStyles;
      desktop_title_semi_24: SerializedStyles;
      desktop_title_reg_24: SerializedStyles;

      desktop_body_semi_20: SerializedStyles;
      desktop_body_reg_20: SerializedStyles;
      desktop_body_semi_18: SerializedStyles;
      desktop_body_reg_18_desc: SerializedStyles;
      desktop_body_reg_18: SerializedStyles;
      desktop_body_reg_16: SerializedStyles;
      desktop_body_lig_16: SerializedStyles;

      desktop_cap_reg_14: SerializedStyles;

      // mobile
      mobile_title_reg_32: SerializedStyles;
      mobile_title_reg_20: SerializedStyles;
      mobile_title_med_18: SerializedStyles;
      mobile_title_reg_18: SerializedStyles;

      mobile_body_semi_14: SerializedStyles;
      mobile_body_reg_14: SerializedStyles;
      mobile_body_lig_14: SerializedStyles;

      mobile_cap_reg_12: SerializedStyles;
    };
  }
}
