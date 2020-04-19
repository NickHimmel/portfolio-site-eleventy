module.exports = function (eleventyConfig) {

  eleventyConfig.addShortcode('extractUrls', (title, posts) => {
    const current = posts.findIndex(post => post.data.title === title);
    const previous = posts[current===0?posts.length-1:current-1];
    const next = posts[current===posts.length-1?0:current+1];
    const previousLink = `<a href=${previous.url} class="footer-link"><span class="footer-desktop"><span class="link-light">Previous project:</span> ${previous.data.title}</span><span class="footer-mobile">←</span></a>`;
    const nextLink = `<a href=${next.url} class="footer-link"><span class="footer-desktop"><span class="link-light">Next project:</span> ${next.data.title}</span><span class="footer-mobile">→</span></a>`
    return previousLink + nextLink;
  });

  eleventyConfig.addPassthroughCopy("css");
};
