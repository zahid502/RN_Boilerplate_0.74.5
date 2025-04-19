import {height_screen, width_screen} from '@app-utils/dimensions';
import {setIsConnected} from '@redux/slice/common/net-info-slice';
import {setToastMessage} from '@redux/slice/common/toast-slice';
import store from '@redux/store';
import {showMessage} from 'react-native-flash-message';

export class HelperService {
  private static _instance: HelperService;
  private constructor() {}

  public static getInstance = () => {
    if (!HelperService._instance) {
      HelperService._instance = new HelperService();
    }

    return HelperService._instance;
  };

  //------------------------------------------------------------------------
  getParsedData = (data: string) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  };

  //------------------------------------------------------------------------
  getIsDeviceMobile = () => {
    const aspectRatio = height_screen / width_screen;
    // You can adjust the threshold based on your criteria for what defines a tablet
    //aspectRatio > 1.6 is Example threshold, you may need to adjust this
    if (aspectRatio > 1.6) {
      return true;
    } else {
      return false;
    }
  };

  //------------------------------------------------------------------------
  removePlusFromNumber = (number: string) => {
    if (number.startsWith('+')) {
      return number.slice(1); // Remove the first character
    }
    return number;
  };

  //------------------------------------------------------------------------

  isNetAvailable = () => {
    const netInfo = store.store.getState()?.netInfo?.isConnected;
    const dispatch = store.store.dispatch;
    if (!netInfo) {
      dispatch(setToastMessage('Internet unavailable!'));
      return false;
    } else {
      return true;
    }
  };

  //------------------------------------------------------------------------
  showNetworkStatus = (isConnected: boolean) => {
    const prevStatus = store.store.getState()?.netInfo?.isConnected;
    const dispatch = store.store.dispatch;

    if (prevStatus != isConnected) {
      dispatch(setIsConnected(isConnected));
      if (!isConnected) {
        showMessage({
          type: 'danger',
          icon: 'warning',
          message: 'Internet unavailable!',
          autoHide: false,
          hideOnPress: true,
        });
      } else {
        showMessage({
          type: 'success',
          icon: 'success',
          message: 'Back Online!',
          duration: 2000,
          hideOnPress: true,
        });
      }
    }
  };
}
