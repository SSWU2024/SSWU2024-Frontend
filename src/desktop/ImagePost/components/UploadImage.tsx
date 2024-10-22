import { css } from '@emotion/react';

const CATEGORY = ['work', 'designer', 'main', 'display'];

interface uploadImageProps {
  setFileName: React.Dispatch<React.SetStateAction<string | null>>;
  setFileType: React.Dispatch<React.SetStateAction<string | null>>;
  setCategory: React.Dispatch<React.SetStateAction<string | null>>;
  setId: React.Dispatch<React.SetStateAction<number | null>>;
}
const UploadImage = (props: uploadImageProps) => {
  const { setFileName, setFileType, setCategory, setId } = props;

  const setFileInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.substring(
      e.target.value.lastIndexOf('\\') + 1,
    );

    const [name, type] = value.split('.');
    setFileName(name);
    setFileType(type.toLowerCase());
  };

  return (
    <div css={container}>
      {/* 카테고리 선택 */}
      <div css={categoryCss}>
        <span>Category : </span>
        {CATEGORY.map((item) => (
          <label key={item}>
            <input
              type="radio"
              name="category"
              value={item}
              css={radioBtn}
              onClick={(e) => setCategory(e.currentTarget.value)}
            />
            {item}
          </label>
        ))}
      </div>

      {/* id 작성 */}
      <div>
        <span>Id : </span>
        <input
          type="text"
          css={numberInput}
          onChange={(e) => setId(Number(e.currentTarget.value))}
        />
      </div>

      {/* 파일 업로드 */}
      <input type="file" onChange={setFileInfo} />
    </div>
  );
};

export default UploadImage;

const container = css`
  display: flex;
  gap: 4rem;
  flex-direction: column;

  padding: 5rem 4rem;

  font-size: 1.6rem;
`;

const categoryCss = css`
  display: flex;
  gap: 2rem;
`;

const radioBtn = css`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;

  border: 1px solid #ccc;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  :checked {
    border: 3px solid white;
    background-color: blue;
    box-shadow: 0 0 0 1.6px blue;
  }
`;

const numberInput = css`
  padding: 0 1rem;

  border: 1px solid gray;
  border-radius: 1rem;
`;
