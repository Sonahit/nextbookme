const withSass = require("@zeit/next-sass");
const path = require("path");
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]"
  },
  webpack(config, options) {
    config.resolve.alias["@components"] = path.join(__dirname, "components");
    config.resolve.alias["@styles"] = path.join(__dirname, "styles");
    config.resolve.alias["@svg"] = path.join(__dirname, "components/svg");
    config.resolve.alias["@layouts"] = path.join(
      __dirname,
      "components/layouts"
    );
    config.resolve.alias["@layoutStyles"] = path.join(
      __dirname,
      "components/layouts/styles"
    );
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
});
