import axios from 'axios';

const putImageS3 = async (
  url: string,
  data: ArrayBuffer,
  contentType: string,
): Promise<void> => {
  await axios.put(url, data, {
    headers: {
      'Content-Type': contentType,
    },
  });
};

export default putImageS3;
