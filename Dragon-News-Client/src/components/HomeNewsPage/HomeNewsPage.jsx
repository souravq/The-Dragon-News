import NewsBigCard from "../NewsBigCard/NewsBigCard";
import "./HomeNewsPage.css";

export default function HomeNewsPage() {
  return (
    <div>
      <div style={{marginBottom:"10px"}}>
        <span className="homeTitle">Dragon News Home</span>
      </div>
      <div>
        <NewsBigCard/>
        <NewsBigCard/>
        <NewsBigCard/>
      </div>
    </div>
  )
}
