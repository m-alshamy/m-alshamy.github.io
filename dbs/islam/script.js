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
    // تهيئة Firebase
    const firebaseConfig = {

        apiKey: "AIzaSyAnwrlJYLrnnFZKvwCLTOurOh7QEFxeeZQ",
    
        authDomain: "islamiclist-39c35.firebaseapp.com",
    
        databaseURL: "https://islamiclist-39c35-default-rtdb.firebaseio.com",
    
        projectId: "islamiclist-39c35",
    
        storageBucket: "islamiclist-39c35.firebasestorage.app",
    
        messagingSenderId: "566938957357",
    
        appId: "1:566938957357:web:10fa09d807285f4dabaaa4",
    
        measurementId: "G-MB2T07MPXR"
    
        };
    
    
        // Initialize Firebase
    
        const app = initializeApp(firebaseConfig);
    
        const analytics = getAnalytics(app);
    

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