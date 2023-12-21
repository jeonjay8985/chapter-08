//func.js

//async await-비동기식 실행 방식을 보완하기 위해
//최근 자바스크립트에서 추가된 문법
//RequestGitUser.js
export default function RequestGitUser({githubLogin}){
  async function requestGithubUser(githubLogin){
    try{
      const response=await fetch(
        `https://api.github.com/users/${githubLogin}`)
      const userData=await response.json()
      console.log(userData)
    }catch(error){
      console.log(error)
    }
  }
  requestGithubUser(githubLogin)
}