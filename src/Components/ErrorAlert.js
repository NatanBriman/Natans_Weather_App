import SweetAlert from 'react-bootstrap-sweetalert';
import { useDispatch, useSelector } from 'react-redux';
import { forecastActions } from '../Redux/Store';

export default function ErrorAlert({ title, text }) {
  const dispatch = useDispatch();
  const isShowAlert = useSelector((state) => state.isShowAlert);
  const { setIsShowAlert } = forecastActions;

  const handleConfirm = () => dispatch(setIsShowAlert(false));

  return (
    <SweetAlert
      confirmBtnText='סבבה'
      type='error'
      title={title}
      onConfirm={handleConfirm}
      show={isShowAlert}
    >
      {text}
    </SweetAlert>
  );
}
