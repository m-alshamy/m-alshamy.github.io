// الحصول على زر التكبير/التصغير
const fullscreenBtn = document.getElementById('fullscreen-btn');

// تغيير الأيقونة بناءً على حالة الشاشة
function updateIcon() {
    const icon = fullscreenBtn.querySelector('i');
    if (document.fullscreenElement) {
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
    } else {
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
    }
}

// دالة تكبير الشاشة
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        // الدخول إلى وضع ملء الشاشة
        showCustomAlert('تمكين وضع الشاشة الكاملة', 'normal')
        document.documentElement.requestFullscreen();
    } else {
        // الخروج من وضع ملء الشاشة
        showCustomAlert('اغلاق وضع الشاشة الكاملة', 'warning')
        document.exitFullscreen();
    }
    // تحديث الأيقونة بعد تغيير الحالة
    updateIcon();
}

// إضافة حدث النقر إلى الزر
fullscreenBtn.addEventListener('click', toggleFullscreen);

// تحديث الأيقونة عند تغيير حالة الشاشة
document.addEventListener('fullscreenchange', updateIcon);