import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { postImgCommon } from '../../../libs/apis/postImgCommon';
import { colors } from '../../../styles/theme';

interface postImageInfoProps {
  fileNm?: string;
  fileFormat?: string;
  imgPath?: string;
}

interface inputType {
  imgNm: string;
  imgTp: string;
  sort: number;
  imgPath: string;
  fileFormat?: string;
}

const PostInfo = (props: postImageInfoProps) => {
  const { fileNm, fileFormat, imgPath } = props;

  useEffect(() => {
    if (fileNm && fileFormat && imgPath) {
      setInput({
        imgNm: fileNm,
        imgTp: '',
        sort: 0,
        imgPath: imgPath,
        fileFormat: fileFormat,
      });
    }
  }, [fileNm, fileFormat, imgPath]);

  const [input, setInput] = useState<inputType>({
    imgNm: '',
    imgTp: '',
    sort: 0,
    imgPath: '',
    fileFormat: '',
  });

  /** 서버로 이미지/비디오 POST */
  const onClickSubmit = async () => {
    const bodyData = [];
    bodyData.push(input);

    const { data } = await postImgCommon(bodyData);
    console.log('response: ', data);
  };

  return (
    <div css={postImgInfoContainer}>
      <div css={inputWrapper}>
        <span>ImgNm(Image Name)</span>
        <input
          type="text"
          defaultValue={fileNm}
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              imgNm: e.target.value,
            }));
          }}
        />
      </div>

      <div css={inputWrapper}>
        <span>ImgTp(Image Type)</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              imgTp: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>sort</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              sort: Number(e.target.value),
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>imgPath</span>
        <input
          type="text"
          defaultValue={imgPath}
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              imgPath: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>fileFormat</span>
        <input
          type="text"
          css={inputCss}
          defaultValue={input.fileFormat}
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              fileFormat: e.target.value,
            }));
          }}
        />
      </div>

      {input.imgNm && input.imgPath && input.imgTp && input.sort ? (
        <button css={submitBtn} onClick={onClickSubmit}>
          이미지 업로드
        </button>
      ) : null}
    </div>
  );
};

export default PostInfo;

const postImgInfoContainer = css`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  width: 100%;
`;
const inputCss = css`
  width: 40rem;
  padding: 0 1rem;

  border: 1px solid gray;
`;

const inputWrapper = css`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const submitBtn = css`
  width: 15rem;
  height: 3rem;

  border: 1px solid ${colors.gray500};
  border-radius: 1rem;
  background-color: ${colors.white};
  color: black;

  :hover {
    background-color: ${colors.gray500};
    color: white;
  }
`;
