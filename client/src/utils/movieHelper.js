import {IMAGE_BASE_URL} from '../constants'

export const constructImageUrl = (widthSize, posterPath) => {
  return `${IMAGE_BASE_URL}${widthSize}${posterPath}`;
};
