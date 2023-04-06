import { Players } from '../src/api/Players';
import useSWR from 'swr';

export function TopScore() {
  const playerApi = new Players({ baseURL: process.env.NEXT_PUBLIC_API_URL });

  const { data: playerTopRank } = useSWR('/players', () =>
    playerApi.playersControllerGetPlayerTopRank().then((res) => res.data)
  );

  const getClassRankFromOrder = (order: number) => {
    switch (order) {
      case 1:
        return 'top-1st';
      case 2:
        return 'top-2nd';
      case 3:
        return 'top-3rd';
    }
    return 'top-1st';
  };

  return (
    <>
      <div className="top-score">
        {playerTopRank?.[1] && (
          <div className="top-2nd hover:scale-105 transition-transform">
            <p className="text-h1 opacity-60">2</p>
            <p className="text-big-score -translate-y-5">
              {playerTopRank?.[1].highScore}
            </p>
            <p className="text-u-name -translate-y-7">
              {playerTopRank?.[1].name}
            </p>
          </div>
        )}
        {playerTopRank?.[0] && (
          <div className="top-1st hover:scale-105 transition-transform">
            <p className="text-h1 opacity-60">1</p>
            <p className="text-big-score">{playerTopRank?.[0].highScore}</p>
            <p className="text-u-name">{playerTopRank?.[0].name}</p>
          </div>
        )}
        {playerTopRank?.[2] && (
          <div className="top-3rd hover:scale-105 transition-transform">
            <p className="text-h1 opacity-60">3</p>
            <p className="text-big-score -translate-y-5">
              {playerTopRank?.[2].highScore}
            </p>
            <p className="text-u-name -translate-y-7">
              {playerTopRank?.[2].name}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
