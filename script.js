// script.js  
window.onload = function() {  
    // 选项卡切换逻辑  
    var tabLinks = document.querySelectorAll('.tab-link');  
    var tabPanes = document.querySelectorAll('.tab-pane');  
  
    tabLinks.forEach(function(link) {  
        link.addEventListener('click', function(event) {  
            event.preventDefault(); // 阻止默认的点击行为（例如，阻止跳转）  
  
            // 移除所有选项卡链接和内容区域的激活状态  
            tabLinks.forEach(function(link) {  
                link.classList.remove('active');  
            });  
            tabPanes.forEach(function(pane) {  
                pane.classList.remove('active');  
            });  
  
            // 根据点击的链接设置新的激活状态  
            var tabId = this.dataset.tab;  
            document.getElementById(tabId + '-tab').classList.add('active');  
            document.getElementById(tabId + '-content').classList.add('active');  
        });  
    });  
  
    // 导航高亮逻辑  
    var currentPage = window.location.pathname.split('/').pop().replace('.html', ''); // 假设文件扩展名为.html，并移除它  
    var navLinks = document.querySelectorAll('#navbar li a.nav-link');  
  
    // 移除所有链接上的高亮类（如果有的话）  
    navLinks.forEach(function(link) {  
        link.classList.remove('nav-link-active');  
    });  
  
    // 根据当前页面添加高亮类到对应的链接上  
    navLinks.forEach(function(link) {  
        var linkId = link.id.replace('-link', ''); // 移除链接ID中的"-link"后缀以匹配页面文件名  
        if (linkId === currentPage || (currentPage === '' && linkId === 'home')) { // 处理首页的特殊情况  
            link.classList.add('nav-link-active');  
        }  
    });  
};
let clickCount = 0;    
const clickThreshold = 3; // 设定点击阈值为3    
const tabHeader = document.getElementById('tab-header');    
const adminBtn = document.querySelector('.admin-btn');    
  
// 初始隐藏管理员入口按钮    
adminBtn.style.display = 'none';    
  
function handleTabHeaderClick(event) {  
    // 忽略非直接点击在#tab-header上的事件（例如，点击子元素）    
    if (event.target === tabHeader) {    
        clickCount++;  
  
        // 如果点击次数达到阈值，切换管理员入口按钮的显示状态，并重置点击计数  
        if (clickCount >= clickThreshold) {  
            adminBtn.style.display = adminBtn.style.display === 'none' ? 'block' : 'none';  
            clickCount = 0; // 重置点击计数  
        }  
    }  
}  
  
// 添加点击事件监听器  
tabHeader.addEventListener('click', handleTabHeaderClick);  
  
// 假设这是用于管理员面板操作的函数  
function toggleAdminPanel() {    
    const adminPanel = document.getElementById('admin-panel');    
    adminPanel.style.display = adminPanel.style.display === 'none' ? 'block' : 'none';    
} 
  
function addEvent() {  
    // 假设用户输入了活动信息（这里只是示例数据）  
    const newEvent = { title: '新活动', date: '2023-04-05' };  
    adminEvents.push(newEvent); // 将新活动添加到管理员活动数组中  
    renderAdminEventList(); // 渲染管理员面板的活动列表  
    updateUserEventList(); // 更新用户可见的活动列表（如果需要）  
}  
  
function renderAdminEventList() {  
    const adminEventList = document.getElementById('admin-event-list');  
    adminEventList.innerHTML = ''; // 清空当前的活动列表  
    adminEvents.forEach((event, index) => {  
        const eventItem = document.createElement('div');  
        eventItem.classList.add('admin-event-item');  
        eventItem.innerHTML = `  
            <h3>${event.title}</h3>  
            <p>日期: ${event.date}</p>  
            <button onclick="editEvent(${index})">编辑</button>  
            <button onclick="deleteEvent(${index})">删除</button>  
        `;  
        adminEventList.appendChild(eventItem);  
    });  
}  
  
function editEvent(index) {  
    // 假设adminEvents数组已经包含了所有活动的信息  
    const event = adminEvents[index];  
      
    // 使用prompt函数来获取用户输入的新标题和日期（这里只是示例）  
    // 在实际应用中，你会使用更复杂的UI组件如模态框  
    const newTitle = prompt('请输入新的活动标题', event.title);  
    const newDate = prompt('请输入新的活动日期', event.date);  
      
    // 检查用户是否输入了新的信息  
    if (newTitle && newDate) {  
        // 更新活动信息  
        event.title = newTitle;  
        event.date = newDate;  
          
        // 重新渲染管理员面板的活动列表以显示更改  
        renderAdminEventList();  
          
        // 可能还需要更新用户可见的活动列表  
        // updateUserEventList();  
    }  
}  
  
function deleteEvent(index) {  
    adminEvents.splice(index, 1); // 从数组中删除活动  
    renderAdminEventList(); // 重新渲染管理员面板的活动列表  
    updateUserEventList(); // 更新用户可见的活动列表（如果需要）  
}  
  
function exitAdminPanel() {  
    toggleAdminPanel(); // 调用切换函数来隐藏管理员面板  
}  
  
function updateUserEventList() {  
    // 这个函数用于更新用户可见的活动列表  
    // 你可以从adminEvents数组中选择需要展示的活动，并渲染到#event-list中  
    // ...（渲染逻辑）  
}  
  
// 初始加载时渲染管理员面板的活动列表（如果有的话）  
function checkEnrollment(event, btnId) {  
    // 构造localStorage的键名，包含按钮的ID（如果有多个按钮则需要这个ID来区分）  
    var storageKey = 'enrollClickCount_' + btnId;  
  
    // 从localStorage中获取点击次数，如果不存在则默认为0  
    var clickCount = parseInt(localStorage.getItem(storageKey), 10) || 0;  
  
    if (clickCount > 5) {  
        // 如果点击次数大于0，表示已经报名过了  
        alert('已经报名成功了！');  
        event.preventDefault(); // 阻止默认的链接跳转  
    } else {  
        // 如果点击次数为0，表示还未报名  
        localStorage.setItem(storageKey, clickCount + 1); // 增加点击次数  
        // 由于没有阻止默认行为，浏览器将会跳转到对应的报名页面  
    }  
}