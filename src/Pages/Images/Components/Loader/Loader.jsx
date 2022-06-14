import { TailSpin } from  'react-loader-spinner'
import { LoaderStyled } from './LoaderStyled';

const Loader = () => {
  return (
   <LoaderStyled>
<TailSpin color="#00BFFF" height={80} width={80} />
</LoaderStyled>
  );
};

export default Loader;