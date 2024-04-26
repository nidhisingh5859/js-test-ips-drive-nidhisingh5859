class Solution:
    def length_of_longest_substr(s: str) -> int:
        result = 0
        hash_map = {}
        i = 0
        j = 0
        while j < len(s):
            char = s[j]
            if char in hash_map:
                i = max(hash_map[char], i)
            result = max(result, j - i + 1)
            hash_map[char] = j + 1
        return result
