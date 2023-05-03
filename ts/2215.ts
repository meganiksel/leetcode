function findDifference(nums1: number[], nums2: number[]): number[][] {
    let unique1 = [...new Set(nums1)];
    let unique2 = [...new Set(nums2)];

    return  [ 
                unique1.filter(el => !unique2.includes(el)),
                unique2.filter(el => !unique1.includes(el))
            ]
}
