document.addEventListener('DOMContentLoaded', function() {      
    // 图片数组，存储图片的路径      
    var images = ['image/1.webp', 'image/2.webp', 'image/3.webp'];      
    // 获取图片元素和按钮元素      
    var imageElement = document.getElementById('slideshow');      
    var imageButtons = document.querySelectorAll('.imageBtn');      
    var currentIndex = 0; // 当前显示的图片索引  
  
    // 初始设置第一个按钮为选中状态  
    imageButtons[currentIndex].classList.add('active');  
  
    // 更新图片  
    function updateImage(index) {  
        imageElement.src = images[index];  
        // 移除所有按钮的选中状态  
        imageButtons.forEach(function(button) {  
            button.classList.remove('active');  
        });  
        // 设置当前按钮为选中状态  
        imageButtons[index].classList.add('active');  
    }  
  
    // 为每个按钮添加点击事件监听器      
    imageButtons.forEach(function(button, index) {      
        button.addEventListener('click', function() {      
            updateImage(index);  
        });      
    });      
  
    // 初始加载时显示第一张图片  
    updateImage(currentIndex);  
});