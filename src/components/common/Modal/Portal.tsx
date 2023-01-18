import ReactDOM from 'react-dom';

function Portal({ children }: React.PropsWithChildren) {
  const portal = document.getElementById('portal-modal');

  if (!portal) {
    return null;
  }

  return ReactDOM.createPortal(children, portal);
}

export default Portal;
