const generateMatrix = n => {
    let res = new Array(n).fill(0).map(_ => new Array(n).fill(0))
    let l = 0;
    let r = n - 1;
    let t = 0;
    let b = n - 1;
    let k = 0;

    while(l <= r && t <= b){
        for(let i = l; i <= r; i++) res[t][i] = ++k;
        t++;

        for(let i = t; i <= b; i++) res[i][r] = ++k;
        r--;

        if (!(l <= r && t <= b)) break;

        for(let i = r; i >= l; i--) res[b][i] = ++k;
        b--;

        for(let i = b; i >= t; i--) res[i][l] = ++k;
        l++;
    }

    return res;
}
