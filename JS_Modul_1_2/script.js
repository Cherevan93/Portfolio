var x = prompt("Введите число.", "");
var z = prompt("Введите степень.", "");
function pow(x, z) {
    var rez = x;
    if (z < 0) {
        z = z * (-1);
        for (var i = 1; i <= z; i++) {
            rez = rez * x;
        }
        rez = 1 / rez;
    }
    for (var i = 1; i < z; i++) {
        rez = rez * x;
    }
    alert(rez);
}
pow(x, z);
//---------------------------------------------
var names = [];
for (var i = 0; i < 5; i++) {
    names[i] = prompt("Введите имя.", "");
}
var login = prompt("Введите свое имя.", "");
var flag = 0;
var name = '';
for (var i = 0; i < 5; i++) {
    if (login == names[i]) {
        flag = 1;
        name = names[i];
    }
}
if (flag==1){
    alert(name+' вы успешно вошли!');
} else {alert('Cовпадений не найдено!');}
