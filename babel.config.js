module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      [
        "module-resolver",
        {
          alias: {
            "@Components": "./src/components/index",
            "@Stores": "./src/redux/store",
            "@Assets": "./assets",
            "@Theme": "./src/theme/theme",
            "@Hooks": "./src/redux/hooks/hooks",
            "@Slices": "./src/redux/slices/dataSlice",
            "@Auth": "./src/services/auth/index"
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
