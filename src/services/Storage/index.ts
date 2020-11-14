import AsyncStorage from '@react-native-async-storage/async-storage';
import CurrentFormState from 'models/CurrentFormState.interface';

export const storeStringData = async (
  key: string,
  value: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

export const storeObjectData = async (
  key: string,
  value: Record<string, any>,
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error(error);
  }
};

export const getStringData = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const getObjectData = async (
  key: string,
): Promise<CurrentFormState | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log(jsonValue);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error(error);
  }
  return null;
};
