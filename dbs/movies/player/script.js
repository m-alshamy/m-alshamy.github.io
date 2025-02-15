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