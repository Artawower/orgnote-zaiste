export default {
  onMounted: async (api) => {
    api.ui.applyTheme({
      blue: "#0098dd",
      red: "#e45649",
      bg: "#f8f8ff",
      bgAlt: "#fafafa",
      fg: "#383a42",
      fgAlt: "#c6c7c7",
      white: "#efefef",
      green: "#50a14f",
      orange: "#da8548",
      yellow: "#bda800",
      violet: "#823ff1",
      cyan: "#0184bc",
      base7: "#efefef",
    });
  },
};

export const manifest = {
  category: "theme",
  name: "Zaiste Theme",
  apiVersion: "0.13.4",
  version: "0.0.1",
  description: "Zaiste theme for OrgNote!",
  keywords: ["ui", "theme"], //
  repo: "https://github.com/artawower/orgnote-zaiste",
};
