function maxVowels(s: string, k: number): number {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let cur = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.includes(s[i])) {
            cur++;
        }
    }
    let max = cur;
    
    let i = k;
    while (i < s.length) {
        if (vowels.includes(s[i])) cur++;
        if (vowels.includes(s[i - k])) cur--;
        if (cur > max) max = cur;
        i++;
    }

    return max;
}
