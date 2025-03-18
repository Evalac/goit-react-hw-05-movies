import { ThreeDots } from 'react-loader-spinner';

import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="120"
        width="150"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass={css.loader}
      />
    </div>
  );
}

export default Loader;
