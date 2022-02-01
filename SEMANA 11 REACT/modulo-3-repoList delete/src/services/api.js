function getDataApi(){
    return fetch("https://api.github.com/orgs/Adalab/repos")
    .then((response) => response.json())
    .then((data)=> data.map((objApi)=>({
        id:objApi.id,
        fullname:objApi.full_name,
        image:objApi.owner.avatar_url,
        description:objApi.description
    }) ))
}
export default getDataApi;
