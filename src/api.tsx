import axios from "axios";

export const fetchshow = async(keyword: string) => {
  try{
    const result=await axios
    .get("https://api.tvmaze.com/search/shows?q=" + keyword)
    return result.data.map((item: any) => item.show);
  }
  catch{
    console.log("Error in FetchShow...")
  }
  
};

export const fetchshowbyid=async(id:number)=>{
  try{
    const result=await axios.get(`https://api.tvmaze.com/shows/${id}`)
    return(result.data);
  }
  catch{
    console.log("Error in FetchShowById...")
  }
 
}
