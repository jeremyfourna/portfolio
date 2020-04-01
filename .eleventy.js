module.exports = (function(eleventyConfig) {
	eleventyConfig.addFilter("stars", function(nbStars) {
    return '⭐'.repeat(nbStars);
  });

  eleventyConfig.addFilter("projectStructure", function(location) {
    if (location === null) {
      return '';
    } else {
      return location;
    }
  });
});