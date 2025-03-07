        // دالة لتغيير قائمة التشغيل
        function changePlaylist(playlistId) {
            document.getElementById('video').src = `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
        }

        // قراءة معرف قائمة التشغيل من الرابط
        function getPlaylistIdFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('id');
        }

        // تعيين قائمة التشغيل عند تحميل الصفحة
        window.onload = function () {
            const playlistId = getPlaylistIdFromURL();
            if (playlistId) {
                changePlaylist(playlistId);
            }
        };
                // دالة لإضافة عنصر جديد
        function addNewItem() {
            const itemName = document.getElementById('newItemName').value;
            const itemId = document.getElementById('newItemId').value;

            if (itemName && itemId) {
                // حفظ العنصر في قاعدة البيانات
                database.ref('items').push({
                    name: itemName,
                    id: itemId
                }).then(() => {
                    alert('تمت إضافة العنصر بنجاح!');
                    document.getElementById('newItemName').value = '';
                    document.getElementById('newItemId').value = '';
                }).catch((error) => {
                    console.error('Error adding item: ', error);
                });
            } else {
                alert('يرجى ملء جميع الحقول!');
            }
        }
        function filterFunction() {
            var input, filter, content, txt, i;
            input = document.getElementById('filterBox');
            filter = input.value.toUpperCase();
            content = document.getElementsByTagName('button');
        
            for (i = 0; i < content.length; i++) {
                txt = content[i];
                if (txt.innerText.toUpperCase().indexOf(filter) > -1) {
                    content[i].style.display = '';
                } else {
                    content[i].style.display = 'none';
                }
            }
        }