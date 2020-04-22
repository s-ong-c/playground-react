import storage from './storage';

export function getState<T>(name: string, defaultValue: T) {
  const rawData = storage.getItem('STORAGE_ITEMS');

  if (!rawData) {
    return defaultValue;
  }

  return rawData[name] || defaultValue;
}

export function setState<T>(val: T) {
  return storage.setItem('STORAGE_ITEMS', val);
}
