export type Show={
    id:number,
    url:string,
    name:string,
    genres:string[],
    rating:{average?:number},
    summary:string
    image:{original?:string,medium?:string}
}