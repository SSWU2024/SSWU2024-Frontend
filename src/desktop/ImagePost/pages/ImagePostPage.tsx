import { css } from '@emotion/react';
import { useRef, useState } from 'react';
import getPresignedUrl from '../../../libs/apis/getPresignedUrl';
import putImageS3 from '../../../libs/apis/putImageS3';
import PostInfo from '../components/PostInfo';

const CATEGORY = ['work', 'designer', 'main', 'display'];

const ImagePostPage = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [Id, setId] = useState<number | null>(null);

  // 업로드 된 주소 (서버로 POST)
  const [imgPath, setImgPath] = useState<string | null>(null);

  const imgRef = useRef<HTMLInputElement | null>(null);

  const uploadImage = () => {
    const fileInput = imgRef.current;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];

      setFileName(file.name);
      setFileType(file.type);

      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onloadend = async () => {
        if (reader.result !== null) {
          /** Presigned-Url GET */
          const { data } = await getPresignedUrl(
            category,
            file.name,
            file.type,
            Id,
          );

          console.log(data);

          if (data) {
            const { presignedUrl, uploadedFileUrl } = data;
            setImgPath(uploadedFileUrl);

            /** GET해온 url로 PUT */
            await putImageS3(
              presignedUrl,
              reader.result as ArrayBuffer,
              file.type,
            );
          }
        }
      };
    }
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
      <input type="file" onChange={uploadImage} accept="image/*" ref={imgRef} />

      {fileName && fileType && imgPath ? (
        <PostInfo
          fileNm={fileName.split('.')[0]}
          fileFormat={fileType.split('/')[1]}
          imgPath={imgPath}
        />
      ) : (
        <PostInfo />
      )}
    </div>
  );
};

export default ImagePostPage;

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
