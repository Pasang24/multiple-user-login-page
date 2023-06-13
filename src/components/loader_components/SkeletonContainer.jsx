import SkeletonLoader from "./SkeletonLoader";
import "./SkeletonContainer.css";

function SkeletonContainer({ times }) {
  let renderSkeleton = [];
  for (let i = 0; i < times; i++)
    renderSkeleton[i] = <SkeletonLoader key={i} />;
  return <div className="skeleton-container">{renderSkeleton}</div>;
}

export default SkeletonContainer;
