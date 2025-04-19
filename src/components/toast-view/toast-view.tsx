import {setToastMessage} from '@redux/slice/common/toast-slice';
import store, {RootState} from '@redux/store';
import React, {useEffect, useRef} from 'react';
import Toast from 'react-native-toast-notifications';
import {connect} from 'react-redux';
import styles from './styles';

//-------------------------------------------
interface ToastViewProps {
  dark?: boolean;
  message?: string;
  offset?: number;
}

//-------------------------------------------
const mapStateToProps = (state: RootState) => {
  return {
    message: state.toast.message,
  };
};

const ToastView = ({dark, message, offset}: ToastViewProps) => {
  const toastRef: any = useRef();

  const dispatch = store.store.dispatch;

  useEffect(() => {
    if (message) {
      toastRef.current.hideAll();
      toastRef.current.show(message);
      dispatch(setToastMessage(''));
    }
  }, [message]);

  return (
    <Toast
      ref={toastRef}
      textStyle={[dark ? styles.darkTextStyle : styles.textStyle]}
      style={[dark ? styles.darkContainer : styles.container]}
      duration={3000}
      placement={'top'}
      type={'normal'}
      animationType={'slide-in'}
      offset={offset ?? 30}
    />
  );
};

export default connect(mapStateToProps)(ToastView);
