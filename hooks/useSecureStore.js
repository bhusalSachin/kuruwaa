import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { variables } from "../components/variables";

const useSecureStore = (key, initialValue) => {
  const prefixedKey = variables.SECURE_KEY_PREFIX + key;
  const [value, setValue] = useState(async () => {
    const existedValue = await SecureStore.getItemAsync(prefixedKey);
    if (existedValue != null) return JSON.parse(existedValue);
    if (typeof initialValue === "function") return initialValue();
    else return initialValue;
  });

  useEffect(() => {
    SecureStore.setItemAsync(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};

export default useSecureStore;
