function shuffleElements() {
    const content = document.getElementById('content');
    const items = Array.from(content.getElementsByTagName('item'));

    // تفريغ الـ div content
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    // ترتيب العناصر بشكل عشوائي
    items.sort(() => Math.random() - 0.5);

    // إعادة إضافة العناصر إلى الـ div content
    items.forEach(item => content.appendChild(item));
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = shuffleElements;