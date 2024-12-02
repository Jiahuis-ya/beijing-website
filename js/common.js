let submitBtn = document.querySelector('.my-submit-button');
let nameInput = document.querySelector('#userName');
let commentInput = document.querySelector('#userComment');
submitBtn.onclick = function() {
    if(!nameInput.value && !commentInput.value) {
        alert("当前输入内容为空！");
    } else {
        alert("提交成功");
        nameInput.value='';
        commentInput.value='';
    }
};
