//FetchTest.je => Fetch함수 쓰기("요청"을 보낼 수 있음)
//then메서드(콜백함수, 결과값을 넣어주기) response:객체
//자바스크립트 - 비동기식 언어(위에서 아래로 차례로 실행->동기식)
//json(): 데이터를 json으로 파싱함 ->객체처럼 접근 가능
//fetch()함수로 반환되는 객체는 프로미스(프로미스 안에 then(),catch()있음)
//프로미스는 비동기식 실행 방식을 보완하기 위해 최근 자바스크립트에 추가된 객체

export default function FetchTest(){
    fetch(`https://api.github.com/users/moonhighway`).then(response=>response.json())
    //.then(response=>console.log(response.json()))
    //console.log("next fetch line") //=>밑에 적은 얘가 먼저 실행됨
    .then(console.log)
    .catch(console.error)
    
    // console.log("log색") 
    // console.error("error색") 
    // console.warn("warn색") 

    let title = "title"
    let content = "content"
    fetch("https://jsonplaceholder.org/posts/1",{
        method:"GET", //method:GET(BY ID)/PUT/PATCH/DELETE, POST는 잘 사용하지 않음
        body: JSON.stringify({title, content}) //JSON.stringify({JSON형태로 변환해줌})
    })

}

//async문법과 await문법 - 비동기식 실행 방식을 보완하기 위해 최근 자바스크립트에 추가된 문법
//await: 그 줄의 실행이 끝나야 다음 문장으로 넘어갈 수 있음
// export async function requestGithubUser(githublogin){
//     const response = await fetch(`https://api.github.com/users/${githublogin}`)
//     const userData = response.json()
//     console.log(userData)
// }