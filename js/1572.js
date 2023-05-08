const diagonalSum = mat => {
    let sum = 0;
    for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
        sum += mat[i][i];
        if (j !== i) sum += mat[j][i];
    }
    return sum;
}
