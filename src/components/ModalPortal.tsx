import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal');
  return ReactDOM.createPortal(children, el as Element | DocumentFragment);
};

export default ModalPortal;
