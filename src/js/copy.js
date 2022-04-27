const copyBtns = document.querySelectorAll(".btn--copy");
const emailAddress = "seungyeon533@gmail.com";
const textArea = document.createElement("textarea");
textArea.value = emailAddress;

const bubbleMessage = document.querySelectorAll(".copy-bubble");

for (let i = 0; i < copyBtns.length; i++) {
  let copyBtn = copyBtns[i];
  let bubble = bubbleMessage[i];

  copyBtn.addEventListener("click", function () {
    bubble.innerText = "복사되었습니다!!";
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  });

  copyBtn.addEventListener("mouseenter", function () {
    if ((bubble.innerText = "복사되었습니다!")) {
      bubble.innerText = "이메일 주소 복사하기!";
    }
  });
}
