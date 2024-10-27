import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import { postDisplayWork } from '../../../libs/apis/postDisplayWork';
import { colors } from '../../../styles/theme';

interface inputType {
  workId: number;
  imgIds: number[];
}

const DisplayWorkPostPage = () => {
  const [input, setInput] = useState<inputType>({
    workId: 0,
    imgIds: [],
  });

  const idStr = useRef<string>('');

  const onClickSubmitBtn = async () => {
    if (input.workId && input.imgIds.length !== 0) {
      if (
        confirm(
          `request body{ workId: ${input.workId}, imgIds: [${input.imgIds}]}를 전송하시겠습니까?`,
        )
      ) {
        const { code } = await postDisplayWork(input);

        alert(code);
      }
    }
  };

  const addIds = () => {
    const idList = idStr.current.split(' ').map((item) => Number(item));
    console.log(idList);
    setInput((prev) => ({
      ...prev,
      imgIds: idList,
    }));
  };

  return (
    <div css={container}>
      <h1>Display Work POST (현장 사진 작품에 추가)</h1>
      <div css={inputWrapper}>
        <span>Work Id*</span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            setInput((prev) => ({
              ...prev,
              workId: Number(e.target.value),
            }));
          }}
        />
      </div>

      <div css={inputWrapper}>
        <span>img Ids*</span>
        <div>
          <input
            type="text"
            css={inputCss}
            required
            onChange={(e) => (idStr.current = e.target.value)}
          />
          <button css={buttonCss} onClick={addIds}>
            완료
          </button>
        </div>
      </div>

      <button css={submitBtn} onClick={onClickSubmitBtn}>
        서버로 가랏
      </button>
    </div>
  );
};

export default DisplayWorkPostPage;

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
