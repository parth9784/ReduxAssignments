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

export const fetchshow_new = async(keyword: string) => {
  try{
    const response=await axios.get("https://api.tvmaze.com/search/shows?q=" + keyword)
    const show= response.data.map((item: any) => item.show);
    // console.log("Shows are",show)
    const output=[];
    for(let i=0;i<show.length;i++){
      const s=show[i];
      // console.log("curr",s);
      const castres=await axios.get("https://api.tvmaze.com/shows/"+s.id+"/cast");
      const cast=castres.data.map((i:any)=>i.person)
      console.log("cast is",cast);
      output.push({show:s,cast:cast})
  }
  return output;
}
  catch{
    console.log("Error in FetchShowNew...")
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
