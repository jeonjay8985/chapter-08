//GitHubUser.js
//프로미스 객체 상태 처리
//HTTP요청과 프로미스에는 3가지 상태: 1.진행중(pending), 2.성공(처리 완료), 3.실패(거부)
//useEffect: 화면이 완전히 그려지고 나서 실행
import { useEffect } from "react"
import { useState } from "react"

export default function GitHubUser ({login}) {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState()

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
    //   if(data.message)
    //     return (
    //     <div>
    //         <p>{data.message}</p>
    //         <a href={data.documencation_url}/>
    //     </div> )
      if(!data) return null
      return (
        <div className="githubUser">
          {console.log(data)}
          {/*<img src={data.avatar_url} alt="avatar"
        style={{width:200}}/> */}
            <div>
                <h1>{data.login}</h1> 
                {data.name&&<p>{data.name}</p>} {/*name이 true경우에만*/}
                {data.location&&<p>{data.location}</p>}  
            </div>
        </div>
            
      )
    }
   //{login}) //랜더링 될때마다 useEffect되는것이 아니고 login 되었을때만 실행됨
