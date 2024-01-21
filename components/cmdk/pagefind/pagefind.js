// @ts-check

/** @type {import('./types').Pagefind} */
const pagefind = {
  debouncedSearch: async () => ({
    results: [],
    unfilteredResultCount: 0,
    filters: {},
    totalFilters: {},
    timings: {
      preload: 0,
      search: 0,
      total: 0,
    },
  }),
};

module.exports = pagefind;
