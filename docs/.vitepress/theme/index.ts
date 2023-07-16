import Theme from "vitepress/theme";
import AnZUI from "../../../src/entry";
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import { useComponents } from './useComponents'
import "./style/var.css";

export default {
  ...Theme,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    const { app } = ctx
    useComponents(app)
    app.use(AnZUI);
  },
};
