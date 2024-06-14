// src/utils/localStorage.js

export const saveDataToLocalStorage = (key, data) => {
  try {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  } catch (error) {
    console.error("Failed to save data to local storage:", error);
  }
};

export const loadDataFromLocalStorage = (key) => {
  try {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error("Failed to load data from local storage:", error);
    return null;
  }
};
