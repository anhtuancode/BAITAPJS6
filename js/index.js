// B1: Xác định yếu tố thay đổi(Khởi tạo bước nhảy)
// B2: Thiết lặp điều kiện lặp
// B3: Cài đặt khối xử lí
// B4: Thay đổi giá trị bước nhảy



// Bài tập 1: tìm số nguyên duyên nhỏ nhất sao cho 1 + 2 + ... + n > 10000
document.getElementById('btnkq').onclick = function () {
    var sum = 0;
    var n = 0;
    // output: sum > 10000 và n là biến cần tìm

    // Thiết lặp điều kiện lặp
    while (sum < 10000) { // điều kiện lặp
        // Bước nhảy
        n++;
        // Xử lí
        sum += n;
    }

    document.getElementById('ketqua').innerHTML = n + ' là biến để cho biếu thức 1 + 2 + ... + n > 10000 ';
}


// Bài tập 2: Viết chương trình nhập vào 2 số x, n tính tổng sao cho S(n) = x + x^2 + x^3 + ... + x^n
document.getElementById('btnkq2').onclick = function(){

    // input: x và n
    var x = Number(document.getElementById('number1').value);
    var n = Number(document.getElementById('number2').value);

    //output: sum
    var sum = tinhtong(x,n);
    document.getElementById('ketqua2').innerHTML = 'Vậy tổng S(n) = ' + sum;
}

// Bài tập 3: Tính giai thừa sao cho 1*2*..*n
document.getElementById('btnkq3').onclick = function(){
    // input: n
    var n = Number(document.getElementById('number3').value);

    // output: sum
    var sum = 1;

    // Bước nhảy + 1 đơn vị
    for(var i = 1; i <= n ; i++){
        //thực thi khối xử lí
        sum = sum * i;
    }
    document.getElementById('ketqua3').innerHTML = n + '! có kết quả là: ' + sum;
}

// Bài tập 4: Hiển thị button
document.getElementById('btnkq4').onclick = function(){
    // output: output
    var output = '';
    for(var i = 1; i <= 10 ; i++){
        //xử lí chia chẵn lẻ để phân màu cho thẻ div 
        if(i % 2 == 0){
            var div = '<div class="pt-3 pb-3 mb-3 mt-3 bg-danger text-white">Thẻ div vị trí chẵn</div>'
        }else{
            var div = '<div class="pt-3 pb-3 mb-3 mt-3 bg-primary text-white">Thẻ div vị trí lẻ</div>'
        }
        output += div;
    }
    document.getElementById('ketqua4').innerHTML = output;
}


// Bài tập 5: Các số nguyên tố từ 1 đến n 
document.getElementById('btnkq5').onclick = function(){
    // input: n
    var n = Number(document.getElementById('number5').value);
    //output : string
    var ketqua = '';

    for(var i = 2; i <= n; i++){
        //chạy từ 2 -> n kiểm tra từng số có phải là snt không r gán kết quả vào output
        var checkSNT = SNT(i);
        if(checkSNT){
            ketqua += i + ' '; 
        }
    }
    document.getElementById('ketqua5').innerHTML = 'Các số nguyên tố từ 1 đến ' + n + ' là: ' + ketqua;
}
