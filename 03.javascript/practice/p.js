const form = document.querySelector('form');
const commentList = document.querySelector('.comment-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // 아이디와 댓글 입력 요소 가져오기
  const idInput = document.querySelector('input[name="userid"]');
  const commentInput = document.querySelector('input[name="comment"]');

  // 아이디와 댓글의 값 가져오기
  const userId = idInput.value.trim();
  const comment = commentInput.value.trim();

  // 아이디가 비어있는지 확인
  if (userId === '') {
    alert('아이디를 입력해주세요');
    return;
  }

  // li 태그 생성 및 "아이디 - 댓글내용" 형식으로 설정
  const li = document.createElement('li');
  li.textContent = `${userId} - ${comment}`;

  // ul 태그에 li 추가
  commentList.appendChild(li);

  // 입력 필드 초기화
  idInput.value = '';
  commentInput.value = '';
});

/**
 * 코드에서 몇 가지 수정이 필요합니다:

1. `addEventlistner`에서 오타가 있습니다. `addEventListener`로 수정해야 합니다.
2. `idInput`과 `commentInput`의 값을 가져오는 부분과 `li` 요소에 값을 설정하는 부분이 잘못되었습니다.
3. `commentInput = ''` 대신 `commentInput.value = ''`로 입력 필드를 초기화해야 합니다.

아래는 수정된 코드입니다:

### 설명

1. `addEventListener`로 오타를 수정하여 폼의 `submit` 이벤트를 감지합니다.
2. `idInput.value.trim()`과 `commentInput.value.trim()`으로 아이디와 댓글 내용을 가져옵니다. `.trim()`을 사용하여 앞뒤 공백을 제거했습니다.
3. 아이디가 비어 있을 때 `alert`로 메시지를 표시하고, 반환합니다.
4. 새로운 `li` 요소를 생성하고 `"아이디 - 댓글내용"` 형식으로 텍스트를 설정합니다.
5. `.comment-list` 요소에 `li`를 추가합니다.
6. `idInput.value = ''`와 `commentInput.value = ''`로 입력 필드를 초기화합니다.

이제 아이디와 댓글을 입력한 후 `등록` 버튼을 누르면 새로운 댓글이 추가되고, 입력 필드가 초기화됩니다.
 */
