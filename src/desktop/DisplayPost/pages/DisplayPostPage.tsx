import { css } from '@emotion/react';
import { useRef } from 'react';
import { postDisplayImg } from '../../../libs/apis/postDisplayImg';
import { colors } from '../../../styles/theme';

interface inputType {
  displayId: number;
  imgIds: number[];
}

const DisplayPostPage = () => {
  // const [input, setInput] = useState<inputType>({
  //   displayId: 0,
  //   imgIds: [],
  // });

  const displayId = useRef<number>();
  const idList: number[] = [];
  const idItem = useRef<number>();

  const onClickSubmitBtn = async () => {
    if (displayId.current && idList.length !== 0) {
      if (
        confirm(
          `request body{ displayId: ${displayId.current}, imgIds: [${idList}]}를 전송하시겠습니까?`,
        )
      ) {
        const { code } = await postDisplayImg(displayId.current, idList);

        alert(code);
      }
    }
  };

  const addIds = () => {
    if (idItem.current) {
      idList.push(idItem.current);
    }

    console.log('idList: ', idList);
  };

  return (
    <div css={container}>
      <h1>Display POST</h1>
      <div css={inputWrapper}>
        <span>
          displayId* (1: 가온전시실-시디A,B,모션그래픽스,디자인씽킹 /
          2:파이룸-정보경험,공간디자인,공간연출)
        </span>
        <input
          type="text"
          css={inputCss}
          required
          onChange={(e) => {
            displayId.current = Number(e.target.value);
          }}
        />
      </div>

      <div css={inputWrapper}>
        <span>Image Ids* (추가되는 id들은 콘솔창으로 확인)</span>
        <div>
          <input
            type="text"
            css={inputCss}
            required
            onChange={(e) => (idItem.current = Number(e.target.value))}
          />
          <button css={buttonCss} onClick={addIds}>
            추가
          </button>
        </div>
      </div>

      <button css={submitBtn} onClick={onClickSubmitBtn}>
        서버로 가랏
      </button>
    </div>
  );
};

export default DisplayPostPage;

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
