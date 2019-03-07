import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import postcss from "rollup-plugin-postcss";

const NODE_ENV = process.env.NODE_ENV || "development ";
const outputFile = NODE_ENV === "production" ? "./dist/bundle.js" : "./dist/dev.js";
const minimizeCss = NODE_ENV === "production";

export default {
  input: "./src/components/index.js",
  output: {
    file: outputFile,
    format: "esm"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    babel({
      exclude: "node_modules/**",
      configFile: "./.babelrc"
    }),
    postcss({
      extract: true,
      minimize: minimizeCss
    }),
    resolve()
  ],
  external: id => /^react|styled-jsx/.test(id)
};