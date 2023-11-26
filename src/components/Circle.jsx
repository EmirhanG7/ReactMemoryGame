export default function Cricle({num,status,changeStatus,id,isFound}) {


    return(
        <div className="centered">
      <button className={`banner ${isFound ? "numberCircle active" : "numberCircle"}`}  onClick={() => {
        if(!status) {changeStatus(id)}
      }}>
      {status && num}
      </button>
      </div>
    )
}