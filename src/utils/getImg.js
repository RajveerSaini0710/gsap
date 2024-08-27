const getImg = (iconName, isDarkMode) => {
  if (iconName) {
    if (isDarkMode) {
      return new URL(
        `../assets/images/dark-mode/dark-${iconName}`,
        import.meta.url
      ).href;
    } else {
      return new URL(`../assets/images/${iconName}`, import.meta.url).href;
    }
  }
};

export default getImg;
