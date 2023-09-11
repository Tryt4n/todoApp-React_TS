import { useCallback, useState, useEffect } from "react";

interface CustomStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

interface useStorageType {
  key: string;
  defaultValue: unknown;
}

export function useLocalStorage({ key, defaultValue }: useStorageType) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage({ key, defaultValue }: useStorageType) {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage(key: string, defaultValue: unknown, storageObject: CustomStorage) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
