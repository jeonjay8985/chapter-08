//async문법과 await문법 - 비동기식 실행 방식을 보완하기 위해 최근 자바스크립트에 추가된 문법
//await: 그 줄의 실행이 끝나야 다음 문장으로 넘어갈 수 있음
//async함수 안에 await 키워드 사용 가능

//import { requestGithubUser } from "./FetchTest"

//await 키워드가 붙여진 문장 실행 후에 다음 문장이 실행됨
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