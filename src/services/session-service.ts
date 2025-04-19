import AsyncStorage from '@react-native-async-storage/async-storage';
import Logger from './log-service';

//-----------------------------------
export default class SessionService {
  static storeString = async (key: string, value: string) => {
    try {
      AsyncStorage.setItem(key, value)?.then(() => Promise.resolve());
    } catch (e) {
      Logger.log('async_storage', e);
    }
  };

  static storeObject = async (key: string, value: any) => {
    try {
      const jsonValue = JSON.stringify(value);
      AsyncStorage.setItem(key, jsonValue).then(() => Promise.resolve());
    } catch (e) {
      Logger.log('async_storage', e);
    }
  };

  static getString = async (key: string, defaultValue?: string) => {
    return AsyncStorage.getItem(key)
      .then(value => (value !== null ? value : defaultValue))
      .catch(error => {
        Logger.log('async_storage', error);
        return defaultValue;
      });
  };

  static getObject = async (key: string, defaultValue: any = null) => {
    return AsyncStorage.getItem(key)
      .then(jsonValue =>
        jsonValue != null ? JSON?.parse(jsonValue) : defaultValue,
      )
      .catch(error => {
        Logger.log('async_storage', error);
        return defaultValue;
      });
  };

  static clearKey = async (key: string) =>
    AsyncStorage.removeItem(key)?.then(() => Promise.resolve());

  static clear = async () => await AsyncStorage.clear();
}
