// Builds a URL to a file in /public that also works under the GitHub Pages sub-path.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
