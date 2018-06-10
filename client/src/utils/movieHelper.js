import { IMAGE_BASE_URL } from "../constants";

export const constructImageUrl = (widthSize, posterPath) => {
  return `${IMAGE_BASE_URL}${widthSize}${posterPath}`;
};

export const constructThumbnailUrl = videoId => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};
