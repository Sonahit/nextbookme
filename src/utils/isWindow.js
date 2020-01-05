/**
 *
 * @param {number} px window width
 */
export function widthLessThan(px) {
  return window.innerWidth < px;
}
/**
 *
 * @param {number} px window width
 */
export function widthMoreThan(px) {
  return window.innerWidth > px;
}
/**
 *
 * @param {number} px window width
 */
export function widthMoreOrEqualsThan(px) {
  return window.innerWidth >= px;
}
/**
 *
 * @param {number} px window width
 */
export function widthLessOrEqualsThan(px) {
  return window.innerWidth <= px;
}

/**
 *
 * @returns
 */
export default {
  widthLessThan,
  widthMoreThan,
  widthLessOrEqualsThan,
  widthMoreOrEqualsThan
};
