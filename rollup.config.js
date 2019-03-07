import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";
import postcss from "rollup-plugin-postcss";

const NODE_ENV = process.env.NODE_ENV || "development ";
const outputFile = NODE_ENV === "production" ? "./dist/prod.js" : "./dist/dev.js";

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
    postcss({
      plugins: [],
      extract: true
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve() //,
    // commonjs()
  ],
  external: id => /^react|styled-jsx/.test(id)
};