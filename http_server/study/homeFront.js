async function getUser() {
  try {
    // GET: 읽기
    const res = await axios.get("/users");
    const users = res.data;
    const list = document.getElementById("list");
    list.innerHTML = "";

    Object.keys(users).map(function(key) {
      const userDiv = document.createElement("div");
      const span = document.createElement("span");
      span.textContent = users[key];

      const edit = document.createElement("button");
      edit.textContent = "수정🧑🏻‍🔧";
      // PUT: 수정
      edit.addEventListener("click", async () => {
        const name = prompt("바꿀 이름을 입력하세요");
        if (!name) {
          return alert("이름을 반드시 입력하셔야 합니다");
        }
        try {
          await axios.put("/user/" + key, { name });
          getUser();
        } catch (err) {
          console.error(err);
        }
      });

      const remove = document.createElement("button");
      remove.textContent = "삭제❌";
      // DELETE: 삭제
      remove.addEventListener("click", async () => {
        try {
          await axios.delete("/user/" + key);
          getUser();
        } catch (err) {
          console.error(err);
        }
      });

      const userPage = document.createElement("a");
      userPage.textContent = `유저 아이디는: ${key} 입니다.`;
      userPage.setAttribute("class", "userId");
      userPage.setAttribute("href", `/mypage/${key}`);

      userDiv.appendChild(span);
      userDiv.appendChild(edit);
      userDiv.appendChild(remove);
      userDiv.appendChild(userPage);
      list.appendChild(userDiv);

      console.log(res.data);
    });
  } catch (err) {
    console.error(err);
  }
}

window.onload = getUser; // 화면 로딩 시 getUser 호출

// POST 폼 제출(submit) 시 실행
document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = e.target.username.value;
  if (!name) {
    return alert("이름을 입력하세요");
  }
  try {
    await axios.post("/user", { name });
    getUser();
  } catch (err) {
    console.error(err);
  }
  e.target.username.value = "";
});
