import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { postWorkContent } from '../../../libs/apis/postWorkContent';
import { colors } from '../../../styles/theme';

interface inputType {
  workTitle: string;
  workEngTitle: string;
  workBody: string;
  workEngBody: string;
  studioId: number;
  imgIds: number[];
  designerIds: number[];
}

const WorkPostPage = () => {
  const [input, setInput] = useState<inputType>({
    workTitle: '',
    workEngTitle: '',
    workBody: '',
    workEngBody: '',
    studioId: 0,
    imgIds: [],
    designerIds: [],
  });

  const ImgIdArr = useRef<string>('');
  const DesignerIdArr = useRef<string>('');

  const onClickSubmitBtn = async () => {
    console.log('input:', input);

    if (
      confirm(`request body: {
      workTitle: ${input.workTitle},
      workEngTitle: ${input.workEngTitle},
      workBody: ${input.workBody},
      workEngBody: ${input.workEngBody}
      studioId: ${input.studioId},
      imgIds: ${input.imgIds},
      designerIds: ${input.designerIds},
      }`)
    ) {
      const { code } = await postWorkContent(input);
      alert(code);
    }
  };

  const renderIdList = (state: 'designer' | 'img') => {
    if (state === 'img') {
      const imgIdList = ImgIdArr.current.split(' ').map((item) => Number(item));
      setInput((prev) => ({
        ...prev,
        imgIds: imgIdList,
      }));

      console.log(imgIdList);
    } else if (state === 'designer') {
      const designerIdList = DesignerIdArr.current
        .split(' ')
        .map((item) => Number(item));

      setInput((prev) => ({
        ...prev,
        designerIds: designerIdList,
      }));
      console.log(designerIdList);
    }
  };

  return (
    <div css={container}>
      <h1>Work POST</h1>
      <div css={inputWrapper}>
        <span>Work Title*</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              workTitle: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Work English Title*</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              workEngTitle: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Work Body (설명)*</span>
        <textarea
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              workBody: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Work English Body (영문설명)*</span>
        <textarea
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              workEngBody: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Studio Id</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              studioId: Number(e.target.value),
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Img Ids*</span>
        <div>
          <input
            type="text"
            css={inputCss}
            required
            onChange={(e) => {
              ImgIdArr.current = e.target.value;
            }}
          />
          <button css={buttonCss} onClick={() => renderIdList('img')}>
            완료
          </button>
        </div>
      </div>
      <div css={inputWrapper}>
        <span>Designer Ids*</span>
        <div>
          <input
            type="text"
            css={inputCss}
            required
            onChange={(e) => {
              DesignerIdArr.current = e.target.value;
            }}
          />
          <button css={buttonCss} onClick={() => renderIdList('designer')}>
            완료
          </button>
        </div>
      </div>

      {input.imgIds.length > 0 &&
      input.designerIds.length > 0 &&
      input.workTitle &&
      input.workEngTitle &&
      input.workEngBody &&
      input.workBody &&
      input.studioId ? (
        <button css={submitBtn} onClick={onClickSubmitBtn}>
          서버로 가랏
        </button>
      ) : null}
    </div>
  );
};

export default WorkPostPage;

const container = css`
  display: flex;
  gap: 2rem;
  flex-direction: column;

  width: 100%;
  padding: 5rem 4rem;

  font-size: 1.6rem;
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

const buttonCss = css`
  padding: 0.2rem 2rem;
  margin-left: 2rem;

  border: 1px solid ${colors.gray500};
  border-radius: 1rem;
`;
