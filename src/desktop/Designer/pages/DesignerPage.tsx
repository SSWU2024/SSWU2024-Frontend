import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { fonts } from '../../../styles/theme';

const DesignerPage = () => {
  const { name } = useParams();
  return (
    <div css={test}>
      <p>{name}</p>
    </div>
  );
};

export default DesignerPage;

const test = css`
  ${fonts.desktop_title_semi_40};
`;
