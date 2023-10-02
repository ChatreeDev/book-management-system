bookList = []

// addBook function ใช้สำหรับเพิ่มหนังสือเข้าไปใน bookList
addBook = (bookList,book)=>{
    return [...bookList,book];
}

// viewBooks function ใช้สำหรับแสดงรายละเอียดของหนังสือแต่ละเล่ม
viewBooks = (item)=>{
    alert(`book name : ${item['name']}`)
    alert(`author ${item['author']}`)
    alert(`publish year ${item['year']}`)
    alert(`price ${item['price']}`)
}

// editBook function ใช้สำหรับแก้ไขรายละเอียดของหนังสือ
editBook = (bookList,bookName,newData)=>{
    newBookList = bookList.map((book)=>{
        if(book['name']===bookName)
            return newData
        return c
    })
    return newBookList;
}

// deleteBook function ใช้สำหรับลบหนังสือออกจาก bookList
deleteBooks = (bookList,bookName)=>{
    return bookList.filter((book)=>{
        book['name']===bookName
    });
}

// Main Program
let mode = ''
do{
    mode = prompt('select your mode read, add, delete, edit, quit');
    switch(mode) {
        case 'read':
            bookList.forEach(viewBooks);
          break;
        case 'add':
            book = {};
            book['name'] = prompt('พิมพ์ชื่อหนังสือที่คุณต้องการเพิ่ม');
            book['author'] = prompt('ผู้เขียน');
            book['year'] = prompt('ปีที่ตีพิมพ์');
            book['price'] = prompt('ราคา');
            bookList = addBook(bookList,book);
          break;
        case'delete':
            deleteName = prompt('ชื่อหนังสือที่ต้องการลบ');
            bookList = deleteBooks(bookList,deleteName);
            bookList.forEach(viewBooks);
            break;
        case'edit':
            book = {}
            book['name'] = prompt('ชื่อหนังสือที่ต้องการแก้ไข');
            book['author'] = prompt('ชื่อผู้เขียน');
            book['year'] = prompt('ปีที่ตีพิมพ์');
            book['price'] = prompt('ราคา');
            bookList = editBook(bookList,book['name'],book)     
      }
}while(mode!='quit')