for (let i = 1; i <= 30; i++) {
    if (i > 15) {
        break
    }
    // console.log(i);
}

for (let i = 1; i <= 40; i++) {
    if (i % 7 == 0) {
        continue
    }
    // console.log("skip 1 to 40 number which number divisible by 7:", i)
}

for (let i = 1; i <= 15; i++) {
    if (i == 9) {
        continue
    }
    // console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i == 12) {
        continue
    }
    // console.log(i);
}

for (let i = 1; i <= 25; i++) {
    if (i % 3 == 0) {
        continue
    }
    // console.log("skip 1 to 25 number which number divisible by 3:", i)
}

for (let i = 91; i <= 120; i++) {
    if (i % 10 == 0) {
        break
    }
    console.log("skip 91 to 120 number which number divisible by 10 then break:", i)
}