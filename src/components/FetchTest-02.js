//FetchTest.js
//자바스크립트 - 비동기식 언어
export default function FetchTest(){
  //fetch()함수로 반환되는 객체는 프로미스
  //프로미스안에 then(), catch()
  //프로미스는 비동기식 실행 방식을 보완하기 위해
  //최근 자바스크립트에 추가된 객체
  //json() 데이터를 json으로 파싱합니다
  fetch(`https://api.github.com/users/moonhighway`)
    .then(response=>response.json())
    .then(console.log)
    .catch(console.error)
  // console.log("log 색")
  // console.error("error 색")
  // console.warn("warn 색")
  let title="title"
  let content="content"
  fetch("https://jsonplaceholder.org/posts/1",{
    method:"GET",
    //method:"GET/PUT/PATCH/DELETE"
    body:JSON.stringify({title,content})
  })

}
