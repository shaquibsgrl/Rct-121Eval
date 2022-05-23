import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [sortRating, setSortRating] = useState("ASC");



  useEffect(() => {
    fetchData({ page, sortRating })
  }, [page, sortRating])
  console.log(data)

  const fetchData = async ({ page, sortRating }) => {
    setLoading(true)
    axios({
      method: "get",
      url: "https://json-server-mocker-masai.herokuapp.com/candidates",
      params: {
        _page: page,
        _limit: 5,
        _sort: "salary",
        _order: sortRating
      }
    }).then(res => {
      setData(res.data)

      setLoading(false)
    }).catch(err => {
      setError(true);
      setLoading(false)
    })
  }
  const handleOrder = () => {
    if (setSortRating === "ASC") {
      setSortRating("DESC")
    } else {
      setSortRating("ASC")
    }
  }



  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        <Button id="SORT_BUTTON" title={setSortRating == "ASC" ? `sort by Desending Salary` : `Sort by Ascending Salary`} onClick={handleOrder} />
        <Button title="PREV" id="PREV" onClick={() => setPage(page - 1)} disabled={page === 1} />
        <Button id="NEXT" title="NEXT" onClick={() => setPage(page + 1)} />

      </div>
      {data.map((item) => {
        return (
          <CandidateCard key={item.id} {...item} />
        )
      })}
    </div>
  );
}

//given page
//given last page
//create last page

// const PaginationComponent=({
//   currentPage,
//   lastPage,
//   onPageChange
// })=>{
//   const arr=new Array(lastPage).fill(0);
//   return(
//     <div>
//       {
//         arr.map((item,page)=><button onClick={()=>onPageChange(page+1)} disabled={(page+1)===currentPage}>{page+1}</button>)
//       }
//     </div>
//   )
// }
