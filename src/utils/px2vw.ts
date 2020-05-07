/**
 * Idea taken for this article
 * https://dev.to/carloscne/creating-responsive-and-adaptive-layouts-with-react-and-styled-components-1ghi
 */
const px2vw = (size: number, width: number = 1440) =>
  `${(size / width) * 100}vw`

export default px2vw
