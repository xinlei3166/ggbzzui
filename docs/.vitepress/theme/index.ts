import Theme from "vitepress/theme";
import AnZUI from "../../../src/entry";
import "./style/var.css";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(AnZUI);
  },
};
