import axios from 'axios';

export interface IGeneratedLink {
  download: () => void;
  revoke: () => void;
}

const download = async (uri: string, filename: string): Promise<void> => {
  if (typeof document === 'undefined') return;
  if (!uri) {
    throw new Error('`uri` must be url');
  }
  const response = await axios.get(uri, { responseType: 'blob' });
  const { download, revoke } = generateLink(response.data, filename);
  download();
  setTimeout(() => {
    revoke();
  }, 500);
};

export const generateLink = (blob: Blob, filename: string): IGeneratedLink => {
  if (typeof document === 'undefined') {
    return {
      download: () => undefined,
      revoke: () => undefined,
    };
  }
  const url = window.URL
    .createObjectURL(new Blob([blob]));
  const link = document.createElement('a');
  link.style.visibility = 'hidden';
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  return {
    download: () => link.click(),
    revoke: () => {
      URL.revokeObjectURL(url);
      link.remove();
    }
  };
};

export default download;