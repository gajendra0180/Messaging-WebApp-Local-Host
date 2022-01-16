import React, { useEffect, useState } from "react";

const PREFIX = "whatsapp-clone-";
export default function useLocalStorage(key, initialValue) {
  const prefixedKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // sending to backend
  const PostData = async (e) => {
    console.log(value);
    const res = await fetch("/saveLocalStorageToDatabase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "Gajendra", localStore: value }),
    })
      .then((res) => res.text())
      .then((text) => console.log(JSON.parse(text)))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (value) localStorage.setItem(prefixedKey, JSON.stringify(value));
    console.log("Data Sent from client");
    PostData();
  }, [prefixedKey, value]);

  return [value, setValue];
}
