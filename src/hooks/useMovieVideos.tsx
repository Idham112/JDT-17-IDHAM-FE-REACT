import { getMovieVideos, type MovieVideo } from '../service/MovieDetails'
import { useEffect, useState } from 'react'

export const useMovieVideos = (id: string) => {
    const [videos, setVideos] = useState<MovieVideo[]>([]);

    useEffect(() => {
      if(id){
        getMovieVideos(id).then((data) => {
            if(data) setVideos(data.results);
        })
      }
    }, [id])
    
  return {videos}
}

