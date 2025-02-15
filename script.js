

function openInNewTab() {
    // الحصول على الرابط من الإطار
    const iframeSrc = document.getElementById('frame').src;
    const FrameId = getIdFromURL();
    if (FrameId != null) {
    // فتح الرابط في علامة تبويب جديدة
        window.open(iframeSrc, '_blank');
    }
}
// دالة لتغيير قائمة التشغيل
function changeFrame(FrameId) {
    document.getElementById('frame').src = `./dbs/${FrameId}`;
}

// قراءة معرف قائمة التشغيل من الرابط
function getIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page');
}

// تعيين قائمة التشغيل عند تحميل الصفحة
window.onload = function () {
    const FrameId = getIdFromURL();
    if (FrameId) {
        changeFrame(FrameId);
    }
    else{
        document.getElementById('frame').src = `./dbs/main`;
        showCustomAlert('مرحبا محمد الشامي', 'normal');
    }
};