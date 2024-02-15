let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for(const element of mat){
    let bag = []
    for(let j = 0; j < mat.length; j++){
        // console.log(mat[i][j],"mat[i][j]")
        bag.push((element[j] + 1))
    }
    console.log(bag)
}


let mat1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
]

let N = 3;
let M = 4;

for(let i = 0; i < 3; i++){
    let bag1 = []
    for(let j = 0; j < 4; j++){
        // console.log(mat[i][j],"mat[i][j]")
        bag1.push((mat1[i][j] + 1))
    }
    console.log(bag1)
}

