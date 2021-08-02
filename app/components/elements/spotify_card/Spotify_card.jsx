import axios from 'axios';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import noMusicPic from '../../../../public/Music_Monochromatic(1).svg';

const Spotify_card = () => {
  const { isSuccess, data: song } = useQuery(['spotify'], async () => {
    const { data } = await axios.get('/api/spotify');

    return data;
  });
  let card;
  if (isSuccess && song.isPlaying) {
    return (
      <article className="flex items-center border border-secondaryLight p-2 rounded mb-5 mt-2 lg:max-w-1/2  relative">
        <div className="flex items-center mr-2 w-16 h-16   sm:w-20 sm:h-20">
          <div className="unset-img relative ">
            <Image
              src={song.albumImageUrl}
              alt={song.artist + ' picture'}
              layout="fill"
              className="custom-img rounded"
            />
          </div>
        </div>

        <div className="pr-9 sm:pr-12 self-start">
          <p className="font-semibold text-secondaryLight md:text-lg">
            {song.title}
          </p>
          <p className="text-xs text-neutralGray sm:text-sm md:text-base">
            {song.artist}
          </p>
        </div>
        <FontAwesomeIcon
          className="absolute top-2 right-2 text-3xl text-green-500 md:text-4xl"
          icon={faSpotify}
        />
      </article>
    );
  } else if (isSuccess && !song.isPlaying) {
    return (
      <article className="flex items-center border border-secondaryLight p-2 rounded mb-5 mt-2 lg:max-w-1/2  relative">
        <div className="flex items-center mr-2 w-16 h-16   sm:w-20 sm:h-20">
          <div className="unset-img relative ">
            <Image
              src={noMusicPic}
              alt={'No music Image'}
              layout="fill"
              className="custom-img rounded"
            />
          </div>
        </div>

        <div className="pr-9 sm:pr-12 self-start">
          <p className="font-semibold text-secondaryLight md:text-lg">
            Not Listening
          </p>
          <p className="text-xs text-neutralGray sm:text-sm md:text-base">
            Spotify
          </p>
        </div>
        <FontAwesomeIcon
          className="absolute top-2 right-2 text-2xl text-green-500 md:text-3xl"
          icon={faSpotify}
        />
      </article>
    );
  } else if (!isSuccess) {
    return null;
  }

  return { card };
};

export default Spotify_card;
