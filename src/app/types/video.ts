export type Video = {
  key: string;
  site: string;
};

export type VideosDto = {
  results: Video[];
  id: string;
};

export type Image = {
  file_path: string;
};

export type ImagesDto = {
  backdrops: Image[];
};

export type Cast = {
  name: string;
  profile_path: string;
  character: string;
};

export type CreditsDto = {
  cast: Cast[];
};
