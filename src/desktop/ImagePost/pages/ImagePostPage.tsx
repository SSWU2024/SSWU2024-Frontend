import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import useGetPresignedUrl from '../../../libs/hooks/useGetPresignedUrl';
import PostImage from '../components/PostImage';
import UploadImage from '../components/UploadImage';

const ImagePostPage = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [Id, setId] = useState<number | null>(null);

  // 업로드 할 주소 (해당 주소로 PUT)
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  // 업로드 된 주소 (서버로 POST)
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const { response } = useGetPresignedUrl(category, fileName, fileType, Id);

  useEffect(() => {
    if (response) {
      const { presignedUrl, uploadedFileUrl } = response.data;
      setUploadUrl(presignedUrl);
      setFileUrl(uploadedFileUrl);
    }
  }, [response, fileName, fileType, category, Id]);

  return (
    <div css={container}>
      <UploadImage
        setFileName={setFileName}
        setFileType={setFileType}
        setCategory={setCategory}
        setId={setId}
      />
      <PostImage uploadUrl={uploadUrl} fileUrl={fileUrl} />
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
