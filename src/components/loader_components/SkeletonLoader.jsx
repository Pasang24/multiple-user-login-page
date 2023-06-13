import "./SkeletonLoader.css";

function SkeletonLoader() {
  return (
    <div className="skeleton-div">
      <div className="innerskeleton-div skeleton"></div>
      <div className="innerskeleton-div skeleton"></div>
      <div className="innerskeleton-div skeleton"></div>
      <div className="innerskeleton-div skeleton"></div>
      <div className="lastskeleton-div skeleton"></div>
    </div>
  );
}

export default SkeletonLoader;
