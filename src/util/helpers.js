/**
 * Create field object from array.
 * @param {Array} fields - array of form fields.
 * @returns {Object} fields reduced to object representation.
 */
export function populateFieldsOnError(fields) {
  return fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: {
        value: field.value,
        error: field.error,
        validate: field.validate
      }
    }),
    {}
  );
}

/**
 * Creates array of numbers with length of `total` parameter.
 * Array starts from 1.
 * @param {Number} total - number of elements to create.
 * @returns {number[]} array of numbers starting from 1 to `total`.
 */
function createArrayFromNumber(total) {
  return Array(total)
    .fill(null)
    .map((t, idx) => idx + 1);
}

/**
 * Filters out pages that are bigger than totalPages.
 * @param visiblePages pages that should be displayed.
 * @param totalPages total number of pages.
 * @returns {Array} filtered valid pages.
 */
export function filterValidPages(visiblePages, totalPages) {
  return visiblePages.filter(page => page <= totalPages);
}

/**
 * Get 3 or less pages that should be displayed.
 * @param page current active page
 * @param total total pages.
 * @returns {Array} array of pages that need to be displayed.
 */
export function getVisiblePages(page, total) {
  if (total < 3) {
    return createArrayFromNumber(total);
  }

  if (page <= 1 || !page) {
    const currentPage = 1;
    return filterValidPages([currentPage, currentPage + 1, currentPage + 2], total);
  }

  if (page === total) {
    return filterValidPages([page - 2, page - 1, page], total);
  }

  return filterValidPages([page - 1, page, page + 1], total);
}
