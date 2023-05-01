func twoSum(nums []int, target int) []int {
    result := make([]int, 2)
    bag := make(map[int]int, len(nums)) 
    for i := 0; i < len(nums); i++ {
        val, ok := bag[target - nums[i]]
        if ok {
            result[0] = val
            result[1] = i
            break;
        }
        bag[nums[i]] = i
    }
    return result
}
