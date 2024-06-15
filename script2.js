document.getElementById('add-event-form').addEventListener('submit', function(e) {  
    e.preventDefault(); // 阻止表单默认提交行为  
    var eventName = document.getElementById('event-name').value;  
    if (eventName) {  
        // 模拟添加活动到列表  
        var list = document.getElementById('event-list');  
        var li = document.createElement('li');  
        li.textContent = eventName; // 简单地将活动名称设置为文本内容  
  
        // 添加修改和删除按钮（这里只是模拟，不会真正修改或删除）  
        var modifyBtn = document.createElement('button');  
        modifyBtn.textContent = '修改';  
        modifyBtn.addEventListener('click', function() {  
            // TODO: 实现修改逻辑（需要弹窗或表单来输入新数据）  
            alert('修改功能尚未实现');  
        });  
  
        var deleteBtn = document.createElement('button');  
        deleteBtn.textContent = '删除';  
        deleteBtn.addEventListener('click', function() {  
            // TODO: 实现删除逻辑（需要后端支持，这里只是模拟）  
            showDeleteConfirmation(li);  
        });  
  
        li.appendChild(document.createTextNode(' ')); // 添加一个空格分隔按钮  
        li.appendChild(modifyBtn);  
        li.appendChild(deleteBtn);  
        list.appendChild(li);  
  
        // 重置输入框以便添加新活动  
        document.getElementById('event-name').value = '';  
    }  
});  
  
function showDeleteConfirmation(li) {  
    // 使用confirm方法询问用户是否要删除  
    if (confirm('您确定要删除这个活动吗?')) {  
        // 如果用户点击了"确定"，则删除列表项  
        var list = document.getElementById('event-list');  
        list.removeChild(li);  
    }  
} 
  