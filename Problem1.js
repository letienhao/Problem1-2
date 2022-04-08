
function isChar(x) {
    return ((x >= 'A' && x <= 'Z') || (x >= 'a' && x <= 'z'));
}
function reverseSpecialString(string) {
    let str = string.split(''); // tách mảng thành chuỗi dữ liệu
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (!isChar(str[i])) { //check vị trí i không phải là chữ cái thì tăng i lên
            console.log('i', i)
            ++i;
        }
        if (!isChar(str[j])) {
            console.log('j', j)
            --j;
        }
        if (isChar(str[i]) && isChar(str[j])) {
            var tempChar = str[i];
            str[i] = str[j];
            str[j] = tempChar;
            ++i;
            --j;
        }
    }
    return str.join('');
}
var str = 'Ab,c,de!$'
console.log(reverseSpecialString(str));
