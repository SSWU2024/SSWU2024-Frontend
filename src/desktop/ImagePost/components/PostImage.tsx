interface postImageProps {
  uploadUrl: string | null;
  fileUrl: string | null;
}

const PostImage = (props: postImageProps) => {
  const { uploadUrl, fileUrl } = props;
  console.log(uploadUrl, fileUrl);
  return (
    <div>
      <p>{uploadUrl}</p>
      <p>{fileUrl}</p>
    </div>
  );
};

export default PostImage;
