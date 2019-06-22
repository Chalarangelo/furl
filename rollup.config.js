import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
import postprocess from 'rollup-plugin-postprocess';

const NODE_ENV = process.env.NODE_ENV || "development ";
const outputFile = NODE_ENV === "production" ? "./dist/index.js" : "./dist/index_dev.js";
const minimizeCss = NODE_ENV === "production";
const minimizeJs = NODE_ENV === "production";

export default {
  input: "./src/lib/index.js",
  output: {
    file: outputFile,
    format: "esm"
  },
  plugins: [
    postprocess([
      [/^import/,'import "./index.css";import']
    ]),
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**",
      configFile: "./.babelrc"
    }),
    resolve(),
    minimizeJs ? terser() : null
  ],
  external: id => /^react|styled-jsx/.test(id)
};