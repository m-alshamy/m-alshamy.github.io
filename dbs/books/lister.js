        // دالة لقراءة الملف النصي
        async function readFile(file) {
            const response = await fetch(file);
            const text = await response.text();
            return text.split('\n').filter(line => line.trim() !== '');
        }

        // دالة لإضافة الكتب إلى الجدول
        function addBooksToTable(books) {
            const table = document.getElementById('booksTable');
            books.forEach(book => {
                const row = document.createElement('tr');
                const categoryCell = document.createElement('td');
                const bookCell = document.createElement('td');

                categoryCell.textContent = 'ديني';
                bookCell.textContent = book.trim();

                row.appendChild(categoryCell);
                row.appendChild(bookCell);
                table.appendChild(row);
            });
        }

        // تشغيل الدوال عند تحميل الصفحة
        window.onload = async function() {
            const books = await readFile('books.txt');
            addBooksToTable(books);
        };