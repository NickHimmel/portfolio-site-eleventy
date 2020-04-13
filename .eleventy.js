module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode('excerpt', article => {
    return article.templateContent
  });
};
