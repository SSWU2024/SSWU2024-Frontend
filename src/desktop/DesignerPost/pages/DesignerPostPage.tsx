import { css } from '@emotion/react';
import { useState } from 'react';
import { postDesignerInfo } from '../../../libs/apis/postDesignerInfo';
import { colors } from '../../../styles/theme';

interface inputType {
  name: string;
  engName: string;
  major: string;
  email: string;
  instagram?: string | null;
  behance?: string | null;
  imgId: number;
}

const DesignerPostPage = () => {
  const [input, setInput] = useState<inputType>({
    name: '',
    engName: '',
    major: '',
    email: '',
    instagram: null,
    behance: null,
    imgId: 0,
  });

  const onClickSubmitBtn = async () => {
    console.log('input:', input);

    if (
      confirm(`request body : { 
      name: ${input.name}, 
      engName: ${input.engName},
      major: ${input.major},
      email: ${input.email},
      instagram: ${input.instagram},
      behance: ${input.behance},
      imgId: ${input.imgId}}`)
    ) {
      const { code } = await postDesignerInfo(input);
      alert(code);
    }
  };

  return (
    <div css={container}>
      <h1>Designer POST</h1>
      <div css={inputWrapper}>
        <span>Name*</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              name: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>English Name*</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              engName: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Major*</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              major: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Email*</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Instagram</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              instagram: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Behance</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              behance: e.target.value,
            }));
          }}
        />
      </div>
      <div css={inputWrapper}>
        <span>Image Id*</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              imgId: Number(e.target.value),
            }));
          }}
        />
      </div>

      {input.name &&
      input.engName &&
      input.major &&
      input.email &&
      input.imgId ? (
        <button css={submitBtn} onClick={onClickSubmitBtn}>
          서버로 가랏
        </button>
      ) : null}
    </div>
  );
};

export default DesignerPostPage;

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
