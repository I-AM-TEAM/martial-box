export function TopScore() {
  return (
    <>
      <div className="top-score">
        <div className="top-2nd hover:scale-105 transition-transform">
          <p className="text-h1 opacity-60">2</p>
          <p className="text-big-score -translate-y-5">236</p>
          <p className="text-u-name -translate-y-7">MyName</p>
        </div>
        <div className="top-1st hover:scale-105 transition-transform">
          <p className="text-h1 opacity-60">1</p>
          <p className="text-big-score">523</p>
          <p className="text-u-name">TeamTeam</p>
        </div>
        <div className="top-3rd hover:scale-105 transition-transform">
          <p className="text-h1 opacity-60">3</p>
          <p className="text-big-score -translate-y-5">32</p>
          <p className="text-u-name -translate-y-7">GuBoy</p>
        </div>
      </div>
    </>
  );
}
