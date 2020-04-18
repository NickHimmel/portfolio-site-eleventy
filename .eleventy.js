module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode('extractUrls', (title, posts) => {
    const current = posts.findIndex(post => post.data.title === title);
    const previous = posts[current===0?posts.length-1:current-1];
    const next = posts[current===posts.length-1?0:current+1];
    return `<a href=${previous.url}><span class="footer-link">Previous project:</span> ${previous.data.title}</a><a href=${next.url}><span class="footer-link">Next project:</span> ${next.data.title}</a>`;
  });

  eleventyConfig.addPassthroughCopy("css");
};
