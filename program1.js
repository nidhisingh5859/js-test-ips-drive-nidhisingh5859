def smallest_missing_positive_integer(nums):
    nums = set(nums)
    i = 1
    while True:
        if i not in nums:
            return i
        i += 1
pass 
  
  
