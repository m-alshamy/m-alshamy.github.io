const alertTypes = {
    normal: {
        className: 'normal',
        icon: 'fas fa-info-circle'
    },
    success: {
        className: 'success',
        icon: 'fas fa-check-circle'
    },
    error: {
        className: 'error',
        icon: 'fas fa-times-circle'
    },
    warning: {
        className: 'warning',
        icon: 'fas fa-exclamation-triangle'
    },
  };
  
  let alertTimeout = null; // متغير لتخزين المؤقت
  
  /**
  * دالة لعرض رسالة مخصصة
  * @param {string} message - النص الذي تريد عرضه
  * @param {string} type - نوع الرسالة (مثل 'normal', 'success', 'error', 'warning')
  */
  function showCustomAlert(message, type = 'normal') {
    const alertBox = document.getElementById('customAlert');
    const alertIcon = alertBox.querySelector('.alert-icon');
    const alertMessage = alertBox.querySelector('.alert-message');
    const alertProgress = alertBox.querySelector('.alert-progress'); // الخط السفلي (العداد)
  
    // الحصول على الإعدادات بناءً على النوع
    const alertType = alertTypes[type] || alertTypes.normal;
  
    // تعيين النص والأيقونة
    alertMessage.textContent = message;
    alertIcon.className = `alert-icon ${alertType.icon}`;
  
    // تعيين النوع
    alertBox.className = `custom-alert ${alertType.className}`;
    alertBox.style.display = 'flex'; // عرض الرسالة
  
    // إعادة تعيين عرض الخط السفلي (العداد)
    alertProgress.style.width = '100%'; // نبدأ من العرض الكامل
    alertProgress.style.transition = 'none'; // إيقاف الانتقال مؤقتًا
    void alertProgress.offsetWidth; // إعادة تدفق الصفحة لإعادة تشغيل الحركة
    alertProgress.style.transition = 'width 3s linear'; // تعيين الانتقال
    alertProgress.style.width = '0%'; // البدء في تقليل العرض
  
    // إلغاء المؤقت السابق إذا كان موجودًا
    if (alertTimeout) {
        clearTimeout(alertTimeout);
    }
  
    // تعيين مؤقت جديد لإخفاء الرسالة بعد 3 ثوانٍ
    alertTimeout = setTimeout(function() {
        alertBox.style.display = 'none';
    }, 3000);
  }

// إرسال رسالة ترحيب تلقائية عند تحميل الصفحة

  // إرسال رسالة ترحيب تلقائية عند تحميل الصفحة
  
  // أمثلة لاستخدام الدالة
  // showCustomAlert('هذه رسالة عادية', 'normal');
  // setTimeout(() => showCustomAlert('نجاح! العملية تمت بنجاح', 'success'), 3000);
  // setTimeout(() => showCustomAlert('خطأ! حدث شيء ما', 'error'), 6000);
  // setTimeout(() => showCustomAlert('تحذير! يرجى الانتباه', 'warning'), 9000);