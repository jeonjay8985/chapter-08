//GitHubUser.js
//프라미스 상태 처리
//HTTP요청과 프라미스에는 3가지 상태
//진행중(pending),성공(처리 완료),실패(거부)
import {useEffect, useState} from "react"

export default function GitHubUser({login}){
  const [data,setData]=useState()
  const [error,setError]=useState()
  const [loading,setLoading]=useState()

  useEffect(()=>{
    if(!login) return
    setLoading(true)
    fetch(`https://api.github.com/users/${login}`)
      .then(data=>data.json())
      .then(setData)
      .then(()=>setLoading(false))
      .catch(setError)
  },[login])

  if(loading) return <h1>loading...</h1>
  if(error)
    return <pre>{JSON.stringify(error)}</pre>
  if(!data) return null
  return (
    <div className="githubUser">
      {console.log(data)}
      <img src={data.avatar_url} alt="avatar"
        style={{width:200}}/>
      <div>
        <h1>{data.login}</h1>
        {data.name&&<p>{data.name}</p>}
        {data.location&&<p>{data.location}</p>}
      </div>
    </div>
  )
}