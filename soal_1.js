function CekBilanganPrima(angka) {
    if (angka <= 1) {
        return false;
    }
    if (angka <= 3) {
        return true;
    }
    if (angka % 2 === 0 || angka % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= angka) {
        if (angka % i === 0 || angka % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}

console.log("Bilangan prima dari 1 hingga 1000:");
for (let num = 1; num <= 1000; num++) {
    if (CekBilanganPrima(num)) {
        console.log(num);
    }
}
