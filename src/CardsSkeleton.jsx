import Skeleton from "react-loading-skeleton"

export const CardSkeleton=({cards})=>{

    return<div className="Grid-Container">
      {Array(cards).fill(0).map((_, index) => (
        <div className="Card" key={index}>
          <div className="upper-card">
            <Skeleton height={150} />
          </div>
          <div className="lower-card" style={{ padding: '10px' }}>
            <Skeleton height={20} width={`80%`} />
            <Skeleton height={20} width={`60%`} />
          </div>
        </div>
      ))}
    </div>
    
}