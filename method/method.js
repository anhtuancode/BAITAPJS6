function tinhtong(a,b){
    var sum = 0;
    // Thiết lặp điều kiện lặp i = 1 vì a mũ 0 = 1 nên ta lấy a mũ 1 = a 
    // Bước nhảy + 1 đơn vị
    for(var i = 1; i <= b; i++){
        //xử lí hàm tính tổng
        sum = sum + Math.pow(a,i);
    }
    //Trả về giá trị 
    return sum;
}

//Hàm kiểm tra số nguyên tố
function SNT(n){
    //output kiểm tra có phải là số nt không
    // Đặt 1 biến mặc định
    var checkSNT = true;
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            checkSNT = false;
            break;
        }
    }
    //Trả về giá trị đúng
    return checkSNT;
}