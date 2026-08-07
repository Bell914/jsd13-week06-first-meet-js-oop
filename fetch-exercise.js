const url = "https://api.api-ninjas.com/v1/animals?name=cat";


async function getPost(){ // async ทำให้สามารถใช้ await ข้างในฟังก์ชันได้
    try { // โค้ดในนี้จะฟีลลองรันดูก่อน ถ้า error จะกระโดดไปที่ catch ทันที
        const response = await fetch(url, { // fetch เพื่อยิง http request ไปที่ url ที่กำหนดไว้
            headers: {
                "X-Api-Key": "NmEQmGcDApy8ObeCjgIR9iPFdeiprrajw1DjGIHe"
                // await คือ ต้องรอให้มี response กลับมาก่อน ถึงจะทำงานอันต่อไปได้
            }
        });
        const data = await response.json(); // แปลง response ให้เป็น java ที่ใช้งานได้จริง
        console.log(data);
    } catch (error) {
        console.error("Something went wrong!", error);
    }
}

getPost();