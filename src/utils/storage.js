export const getStorageItem = (
  key,
  fallback = null
) => {
  try {
    const item =
      localStorage.getItem(key);

    return item
      ? JSON.parse(item)
      : fallback;
  } catch (error) {
    console.error(
      "Storage Read Error:",
      error
    );

    return fallback;
  }
};

export const setStorageItem = (
  key,
  value
) => {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.error(
      "Storage Write Error:",
      error
    );
  }
};


export const removeStorageItem = (
  key
) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(
      "Storage Remove Error:",
      error
    );
  }
};