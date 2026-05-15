export const patternsData = [
  {
    id: "01",
    name: "Two Pointer",
    coreRule: "Sorted Array + pair/triplet + sum/target → Two Pointer",
    subPatterns: [
      {
        name: "← → Opposite Ends",
        points: ["Sorted array + pair/triplet sum = target", "Palindrome check", "Reverse array in-place"]
      },
      {
        name: "→ → Same Direction",
        points: ["Duplicate removal / value shift", "In-place modification", "Two sorted arrays: merge / intersect", "Trapping rain water"]
      }
    ],
    keywords: [
      "Sorted array + find pair with given sum", "Remove duplicates from sorted array", "Three sum / four sum problem", "Merge two sorted arrays without extra space", "Valid palindrome check / reverse / compare both ends", "Container with most water"
    ],
    confusionZone: [
      { trigger: "Sorted + pair + target sum", pattern: "Two Pointer ← →" },
      { trigger: "Unsorted + pair + target sum", pattern: "HashMap" },
      { trigger: "Duplicate removal / value shift", pattern: "Two Pointer → →" },
      { trigger: "Two sorted arrays merge/intersect", pattern: "Two Pointer → →" }
    ],
    questions: [
      { 
        isMastery: true, 
        id: "m_rev_str",
        difficulty: "E", 
        name: "Reverse String", 
        companies: ["Amazon", "Google", "Apple"], 
        link: "https://leetcode.com/problems/reverse-string/",
        problemStatement: "Write a function that reverses a string. The input string is given as an array of characters `s`.\nYou must do this by modifying the input array in-place with O(1) extra memory.",
        testCases: [
          { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' }
        ],
        solutions: [
          {
            type: "Optimal (Two Pointer)",
            concept: "Hum **two pointers** use karenge: ek starting mein (`left`) aur ek ending mein (`right`). Har step par hum dono positions ke characters ko **swap** karenge aur pointers ko beech ki taraf move karenge.",
            code: `def reverseString(s):
    # Two pointer approach
    left, right = 0, len(s) - 1
    
    while left < right:
        # Swap characters in-place
        s[left], s[right] = s[right], s[left]
        
        # Move pointers towards each other
        left += 1
        right -= 1`,
            dryRun: [
              "[STATE] s=['h','e','l','l','o'], left=0, right=4 [DESC] Start pointers at both ends. Swap 'h' and 'o'.",
              "[STATE] s=['o','e','l','l','h'], left=1, right=3 [DESC] Swap 'e' and 'l'.",
              "[STATE] s=['o','l','l','e','h'], left=2, right=2 [DESC] Pointers met at index 2. Reverse complete."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "In-place modification ke liye hamesha **Two Pointer** technique standard hai.\nSpace efficiency (O(1)) iski sabse badi strength hai."
      },
      { 
        isMastery: true, 
        id: "m_rev_vowels",
        difficulty: "E", 
        name: "Reverse Vowels of a String", 
        companies: ["Google", "Amazon"], 
        link: "https://leetcode.com/problems/reverse-vowels-of-a-string/",
        problemStatement: "Given a string `s`, reverse only all the vowels in the string and return it.\nThe vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.",
        testCases: [
          { input: 's = "hello"', output: '"holle"' },
          { input: 's = "leetcode"', output: '"leotcede"' }
        ],
        solutions: [
          {
            type: "Optimal (Two Pointer)",
            concept: "Hum string ke dono ends se start karenge. Agar dono pointers par **vowels** milte hain, tabhi swap karenge. Agar ek side vowel nahi hai, toh pointer ko aage badha denge.",
            code: `def reverseVowels(s):
    s = list(s) # Strings are immutable in Python
    vowels = set("aeiouAEIOU")
    l, r = 0, len(s) - 1
    
    while l < r:
        if s[l] not in vowels:
            l += 1
        elif s[r] not in vowels:
            r -= 1
        else:
            # Both are vowels, swap them
            s[l], s[r] = s[r], s[l]
            l += 1
            r -= 1
            
    return "".join(s)`,
            dryRun: [
              "[STATE] s='hello', l=0, r=4 [DESC] 'h' is not a vowel, l moves to 1.",
              "[STATE] s='hello', l=1, r=4 [DESC] 'e' (l=1) and 'o' (r=4) are vowels. Swap them.",
              "[STATE] s='holle', l=2, r=3 [DESC] Pointers pass each other. Done."
            ],
            complexity: "Time: O(N), Space: O(N) to store characters"
          }
        ],
        importantNotes: "Hamesha set ka use karein vowels store karne ke liye for **O(1)** lookup.\nIn-place processing ke liye string ko list mein convert karna zaroori hai Python mein."
      },
      { 
        isMastery: true, 
        id: "m_merge_sorted",
        difficulty: "E", 
        name: "Merge Sorted Array", 
        companies: ["Amazon", "Microsoft", "Meta"], 
        link: "https://leetcode.com/problems/merge-sorted-array/",
        problemStatement: "You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.\nMerge `nums2` into `nums1` as one sorted array in-place.",
        testCases: [
          { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" }
        ],
        solutions: [
          {
            type: "Optimal (Three Pointer)",
            concept: "Since `nums1` has extra space at the end, hum **backwards** merge karenge. Badi values ko last mein rakhte jayenge taaki existing data overwrite na ho.",
            code: `def merge(nums1, m, nums2, n):
    p1, p2, p = m - 1, n - 1, m + n - 1
    
    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1
        
    # Remaining nums2
    while p2 >= 0:
        nums1[p] = nums2[p2]
        p2 -= 1
        p -= 1`,
            dryRun: [
              "[STATE] nums1=[1,2,3,0,0,0], p1=2, p2=2, p=5 [DESC] nums2[2]=6 is bigger than nums1[2]=3. Place 6 at nums1[5].",
              "[STATE] nums1=[1,2,3,0,0,6], p1=2, p2=1, p=4 [DESC] nums2[1]=5 is bigger than nums1[2]=3. Place 5 at nums1[4].",
              "[STATE] nums1=[1,2,3,0,5,6], p1=2, p2=0, p=3 [DESC] nums1[2]=3 is bigger than nums2[0]=2. Place 3 at nums1[3]."
            ],
            complexity: "Time: O(m+n), Space: O(1)"
          }
        ],
        importantNotes: "**Backward Two-Pointer** approach is efficient because it avoids shifting elements.\nHamesha end-to-start logic tab socho jab array mein extra capacity peeche ho."
      },
      { 
        isMastery: true, 
        id: "m_cookies",
        difficulty: "E", 
        name: "Assign Cookies", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/assign-cookies/",
        problemStatement: "Assume you are a parent and want to give your children some cookies. But, you should give each child at most one cookie.\nEach child `i` has a greed factor `g[i]`, and each cookie `j` has a size `s[j]`. If `s[j] >= g[i]`, you can assign the cookie `j` to the child `i`.",
        testCases: [
          { input: "g = [1,2,3], s = [1,1]", output: "1", explanation: "Only one child with greed 1 can be satisfied." }
        ],
        solutions: [
          {
            type: "Greedy + Two Pointer",
            concept: "Pehle dono arrays ko **sort** karenge. Phir small greed wale bacche ko sabse small compatible cookie denge. Agar cookie choti hai greed se, toh next badi cookie check karenge.",
            code: `def findContentChildren(g, s):
    g.sort()
    s.sort()
    
    child_idx = 0
    cookie_idx = 0
    
    while child_idx < len(g) and cookie_idx < len(s):
        if s[cookie_idx] >= g[child_idx]:
            # Satisfied child
            child_idx += 1
        # In both cases, move to next cookie
        cookie_idx += 1
        
    return child_idx`,
            dryRun: [
              "[STATE] g=[1,2,3], s=[1,1], c_i=0, k_i=0 [DESC] s[0]=1 matches g[0]=1. Child 0 satisfied.",
              "[STATE] g=[1,2,3], s=[1,1], c_i=1, k_i=1 [DESC] s[1]=1 is less than g[1]=2. Skip cookie.",
              "[STATE] c_i=1 [DESC] No more cookies. Final satisfied = 1."
            ],
            complexity: "Time: O(N log N) for sorting, Space: O(1)"
          }
        ],
        importantNotes: "Sorting is key to **greedy** problems with Two Pointers.\nAlways satisfy the easiest requirement first (smallest greed)."
      },
      { 
        isMastery: true, 
        id: "m_sort_parity",
        difficulty: "E", 
        name: "Sort Array By Parity", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/sort-array-by-parity/",
        problemStatement: "Given an integer array `nums`, move all the even integers at the beginning of the array followed by all the odd integers.\nReturn any array that satisfies this condition.",
        testCases: [
          { input: "nums = [3,1,2,4]", output: "[2,4,3,1]", explanation: "[4,2,3,1] is also valid." }
        ],
        solutions: [
          {
            type: "Two Pointer (Opposite)",
            concept: "Ek pointer `left` par rakho (looking for odd) aur ek `right` par (looking for even). Jab left par odd aur right par even mile, toh dono ko **swap** kar do.",
            code: `def sortArrayByParity(nums):
    l, r = 0, len(nums) - 1
    
    while l < r:
        if nums[l] % 2 > nums[r] % 2:
            # Odd at left, Even at right -> Swap
            nums[l], nums[r] = nums[r], nums[l]
            
        if nums[l] % 2 == 0: l += 1
        if nums[r] % 2 == 1: r -= 1
        
    return nums`,
            dryRun: [
              "[STATE] nums=[3,1,2,4], l=0, r=3 [DESC] 3(odd) at l and 4(even) at r. Swap them.",
              "[STATE] nums=[4,1,2,3], l=1, r=2 [DESC] 1(odd) at l and 2(even) at r. Swap them.",
              "[STATE] nums=[4,2,1,3], l=2, r=1 [DESC] l met r. Array sorted."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Partitioning problems are classic examples of **In-place Two Pointers**.\nOrder maintain karna zaroori nahi hai yahan, isliye opposite pointers work best."
      },
      { 
        isMastery: true, 
        id: "m_sort_parity_ii",
        difficulty: "E", 
        name: "Sort Array By Parity II", 
        companies: ["Amazon"], 
        link: "https://leetcode.com/problems/sort-array-by-parity-ii/",
        problemStatement: "Given an array of integers `nums`, half of the integers in `nums` are odd, and the other half are even.\nSort the array so that whenever `nums[i]` is odd, `i` is odd, and whenever `nums[i]` is even, `i` is even.",
        testCases: [
          { input: "nums = [4,2,5,7]", output: "[4,5,2,7]", explanation: "[4,7,2,5], [2,5,4,7], [2,7,4,5] are also valid." }
        ],
        solutions: [
          {
            type: "Two Pointer",
            concept: "Hum do pointers maintain karenge: ek `even` index (0, 2, 4...) ke liye aur ek `odd` index (1, 3, 5...) ke liye. Agar even index par odd value milti hai, toh hum next galat odd index wali value se swap kar denge.",
            code: `def sortArrayByParityII(nums):
    n = len(nums)
    even, odd = 0, 1
    
    while even < n and odd < n:
        if nums[even] % 2 == 0:
            even += 2
        elif nums[odd] % 2 == 1:
            odd += 2
        else:
            # Both are in wrong places, swap them
            nums[even], nums[odd] = nums[odd], nums[even]
            even += 2
            odd += 2
            
    return nums`,
            dryRun: [
              "[STATE] nums=[4,2,5,7], even=0, odd=1 [DESC] nums[0]=4 is even (Correct). even moves to 2.",
              "[STATE] nums=[4,2,5,7], even=2, odd=1 [DESC] nums[2]=5 is odd (Wrong) AND nums[1]=2 is even (Wrong). Swap them.",
              "[STATE] nums=[4,5,2,7], even=4, odd=3 [DESC] even reached end. Done."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Index-based partitioning ke liye multiple pointers move karna efficient hota hai.\nCondition check (`% 2`) determine karti hai ki pointer move hoga ya swap."
      },
      { 
        isMastery: true, 
        id: "m_dup_zeros",
        difficulty: "E", 
        name: "Duplicate Zeros", 
        companies: ["Google", "Adobe"], 
        link: "https://leetcode.com/problems/duplicate-zeros/",
        problemStatement: "Given a fixed-length integer array `arr`, duplicate each occurrence of zero, shifting the remaining elements to the right.\nNote that elements beyond the length of the original array are not written. Do the above modifications in-place.",
        testCases: [
          { input: "arr = [1,0,2,3,0,4,5,0]", output: "[1,0,0,2,3,0,0,4]" }
        ],
        solutions: [
          {
            type: "Two Pass (In-place)",
            concept: "Pehle hum count karenge ki total kitne extra spaces chahiye. Phir **backward pass** mein elements ko unki final position par shift karenge. Zeroes ko do baar write karenge.",
            code: `def duplicateZeros(arr):
    n = len(arr)
    zeros = arr.count(0)
    
    # Second pass: fill from backward
    # We use logic to skip elements that go out of bounds
    for i in range(n - 1, -1, -1):
        if i + zeros < n:
            arr[i + zeros] = arr[i]
        if arr[i] == 0:
            zeros -= 1
            if i + zeros < n:
                arr[i + zeros] = 0`,
            dryRun: [
              "[STATE] arr=[1,0,2,3,0,4,5,0], zeros=3 [DESC] Start from last index. Move elements to (i + zeros).",
              "[STATE] i=7, arr[7]=0 [DESC] 7+3=10 > 8. Skip. zeros becomes 2.",
              "[STATE] i=1, arr[1]=0 [DESC] 1+1=2 < 8. Place 0 at arr[2]. Duplicate at arr[1]."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Array shift problems mein **Backward Pass** hamesha overwriting se bachata hai.\nEdge cases (like last element being 0) ko carefully handle karna hota hai."
      },
      { 
        isMastery: true, 
        id: "m_rem_elem",
        difficulty: "E", 
        name: "Remove Element", 
        companies: ["Adobe", "Amazon"], 
        link: "https://leetcode.com/problems/remove-element/",
        problemStatement: "Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed.\nReturn the number of elements in `nums` which are not equal to `val`.",
        testCases: [
          { input: "nums = [3,2,2,3], val = 3", output: "2, nums = [2,2,_,_]" }
        ],
        solutions: [
          {
            type: "Two Pointer (Fast-Slow)",
            concept: "Hum ek `slow` pointer maintain karenge jo sirf 'non-val' elements ki position track karega. `fast` pointer poore array ko scan karega aur valid elements ko `slow` position par move karega.",
            code: `def removeElement(nums, val):
    slow = 0
    for fast in range(len(nums)):
        if nums[fast] != val:
            nums[slow] = nums[fast]
            slow += 1
    return slow`,
            dryRun: [
              "[STATE] nums=[3,2,2,3], val=3, slow=0, fast=0 [DESC] nums[0]==val. fast moves to 1.",
              "[STATE] nums=[3,2,2,3], slow=0, fast=1 [DESC] nums[1]!=val. nums[0]=nums[1]. slow=1.",
              "[STATE] nums=[2,2,2,3], slow=1, fast=2 [DESC] nums[2]!=val. nums[1]=nums[2]. slow=2."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "In-place removal problems ke liye **Two Pointer** (Read & Write) optimal hai.\nSlow pointer represents the length of the new valid array."
      },
      { 
        isMastery: true, 
        id: "m_valid_pal",
        difficulty: "E", 
        name: "Valid Palindrome", 
        companies: ["Meta", "Microsoft"], 
        link: "https://leetcode.com/problems/valid-palindrome/",
        problemStatement: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",
        testCases: [
          { input: 's = "A man, a plan, a canal: Panama"', output: "true" },
          { input: 's = "race a car"', output: "false" }
        ],
        solutions: [
          {
            type: "Two Pointer (Opposite)",
            concept: "Hum dono ends se scan karenge. Agar character alphanumeric nahi hai, toh pointer skip kar denge. Phir compare karenge, agar matching nahi hai toh False return karenge.",
            code: `def isPalindrome(s):
    l, r = 0, len(s) - 1
    
    while l < r:
        if not s[l].isalnum():
            l += 1
        elif not s[r].isalnum():
            r -= 1
        else:
            if s[l].lower() != s[r].lower():
                return False
            l += 1
            r -= 1
            
    return True`,
            dryRun: [
              "[STATE] s='A man...', l=0, r=29 [DESC] 'A' and 'a' match. Move pointers.",
              "[STATE] l=1 [DESC] ' ' is not alnum, skip. l=2.",
              "[STATE] l=10, r=20 [DESC] Comparison continues until pointers meet."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "`isalnum()` function non-alphabet characters ko skip karne ke liye useful hai.\nExtra memory (like creating a new string) se bachne ke liye **Two Pointer** use karein."
      },
      { 
        isMastery: true, 
        id: "m_is_sub",
        difficulty: "E", 
        name: "Is Subsequence", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/is-subsequence/",
        problemStatement: "Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.\nA subsequence is formed by deleting some characters without changing the relative order of the remaining characters.",
        testCases: [
          { input: 's = "abc", t = "ahbgdc"', output: "true" },
          { input: 's = "axc", t = "ahbgdc"', output: "false" }
        ],
        solutions: [
          {
            type: "Two Pointer",
            concept: "Ek pointer `s` par aur ek `t` par rakho. Agar characters match hote hain, toh dono pointers aage badhayenge. Agar nahi, toh sirf `t` wala pointer move hoga.",
            code: `def isSubsequence(s, s_target):
    i, j = 0, 0
    while i < len(s) and j < len(s_target):
        if s[i] == s_target[j]:
            i += 1
        j += 1
        
    return i == len(s)`,
            dryRun: [
              "[STATE] s='abc', t='ahbgdc', i=0, j=0 [DESC] s[0]=='a' matches t[0]. i=1, j=1.",
              "[STATE] i=1, j=1 [DESC] s[1]=='b' doesn't match t[1]=='h'. j=2.",
              "[STATE] i=1, j=2 [DESC] s[1]=='b' matches t[2]. i=2, j=3."
            ],
            complexity: "Time: O(T), Space: O(1)"
          }
        ],
        importantNotes: "Relative order maintain karne ke liye **Greedy matching** with Two Pointer optimal hai.\ni pointer agar `s` ki length tak pahuch gaya, matlab subsequence mil gayi."
      },
      { 
        id: "q_2sum_ii",
        difficulty: "E", 
        name: "Two Sum II — Sorted Array", 
        companies: ["Amazon", "Google"],
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
        problemStatement: "Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific `target` number.\n\nReturn the indices of the two numbers, `index1` and `index2`, added by one as an integer array `[index1, index2]` of length 2.",
        testCases: [
          { input: "numbers = [2,7,11,15], target = 9", output: "[1,2]", explanation: "2 + 7 = 9. 1-based indices are [1, 2]." }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Hum **nested loops** use karenge har possible pair ko check karne ke liye. Agar kisi pair ka sum target ke barabar mil gaya, toh unka index return kar denge.",
            code: `def twoSumBrute(numbers, target):
    n = len(numbers)
    for i in range(n):
        for j in range(i + 1, n):
            # Har pair check karo
            if numbers[i] + numbers[j] == target:
                return [i + 1, j + 1]
    return []`,
            complexity: "Time: O(N^2), Space: O(1)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Kyunki array **sorted** hai, hum `left` aur `right` pointers ka use karke O(N) mein solution nikal sakte hain.\n- Sum chhota hai toh `left` badao.\n- Sum bada hai toh `right` kam karo.",
            code: `class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers) - 1
        
        while left < right:
            current_sum = numbers[left] + numbers[right]
            
            if current_sum == target:
                return [left + 1, right + 1]
            elif current_sum < target:
                left += 1  # Sum badhane ke liye
            else:
                right -= 1 # Sum ghatane ke liye
        return []`,
            dryRun: [
              "[STATE] left=0 (val 2), right=3 (val 15) | sum=17 [DESC] Initial state mein pointers ends par hain. **Sum (17) > target (9)**, isliye sum ghatane ke liye right pointer ko piche lao.",
              "[STATE] left=0 (val 2), right=2 (val 11) | sum=13 [DESC] Abhi bhi **sum (13) > target (9)**, isliye right pointer ko aur piche lao (right--).",
              "[STATE] left=0 (val 2), right=1 (val 7) | sum=9 [DESC] Yay! **Sum (9) == target (9)**. Humein hamara pair mil gaya. Question 1-based index mang raha hai, toh return karenge [1, 2]."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **What we learned:** Sorted array mein Two Pointers use karke hum O(N^2) ke brute force ko O(N) mein convert kar sakte hain.\n• **Where else to use:** Jab bhi target sum find karna ho aur array sorted ho (ya sort kiya ja sake)."
      },
      { 
        id: "q_container_water",
        difficulty: "M", 
        name: "Container With Most Water", 
        companies: ["Amazon", "Google", "Meta"],
        link: "https://leetcode.com/problems/container-with-most-water/",
        problemStatement: "You are given an integer array `height` of length `n`. Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        testCases: [
          { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "Max area is between index 1 (height 8) and index 8 (height 7). Width = 7, Min Height = 7. Area = 49." }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Hum har possible pairs of lines (i, j) ko check karenge aur area calculate karenge: `area = (j - i) * min(height[i], height[j])`.",
            code: `def maxAreaBrute(height):
    max_area = 0
    n = len(height)
    for i in range(n):
        for j in range(i + 1, n):
            # Har possible container ka area check karo
            current_area = (j - i) * min(height[i], height[j])
            max_area = max(max_area, current_area)
    return max_area`,
            complexity: "Time: O(N^2), Space: O(1)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Hum **dono ends** se start karenge. Maximum area ke liye width aur height dono important hain. Width toh maximum tabhi hogi jab pointers dur honge. Jab hum pointers ko move karenge, toh hum hamesha **chhoti height** wali wall ko move karenge kyunki badi wall ko move karne se area kabhi badh nahi sakta (bottleneck hamesha chhoti wall hoti hai).",
            code: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_area = 0
        
        while left < right:
            # Current area calculate karo
            width = right - left
            h = min(height[left], height[right])
            max_area = max(max_area, width * h)
            
            # Choti wall ko move karo taaki shayad aage badi wall mile
            if height[left] < height[right]:
                left += 1
            else:
                right -= 1
                
        return max_area`,
            dryRun: [
              "[STATE] L=0 (h=1), R=8 (h=7) | width=8, area=8 [DESC] Start mein pointers extreme ends par hain. Area = 8*min(1,7) = 8. Ab kyunki **left wall (1) choti hai**, hume use move karna chahiye taaki koi badi wall mile.",
              "[STATE] L=1 (h=8), R=8 (h=7) | width=7, area=49 [DESC] Ab width 7 hai aur heights 8 aur 7 hain. Area = 7*min(8,7) = 49. Yeh humara naya **Max Area** hai. Ab **right wall (7) choti hai**, toh use move karenge (right--).",
              "[STATE] L=1 (h=8), R=7 (h=3) | width=6, area=18 [DESC] Area = 6*min(8,3) = 18. Pichle max area (49) se chota hai. **Right wall (3) choti hai**, isliye right--."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **What we learned:** Area hamesha **shorter wall** se limit hota hai. Isliye choti wall ko move karna hi logic banta hai kyunki badi wall ko move karne se width kam hogi aur area kabhi badh hi nahi sakta.\n• **Where else to use:** Trapping Rain Water aur isi tarah ke array optimization problems mein."
      },
      { 
        id: "q_3sum",
        difficulty: "M", 
        name: "3Sum", 
        companies: ["Google", "Amazon", "Meta", "Microsoft"],
        link: "https://leetcode.com/problems/3sum/",
        problemStatement: "Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.\n\nNotice that the solution set must not contain duplicate triplets.",
        testCases: [
          { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Hum **teen nested loops** chalayenge i, j, k ke liye aur check karenge sum 0 hai ya nahi. Duplicate results handle karne ke liye hum set ka use karenge.",
            code: `def threeSumBrute(nums):
    res = set()
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            for k in range(j + 1, n):
                if nums[i] + nums[j] + nums[k] == 0:
                    # Sort triplet to avoid duplicate combinations in set
                    triplet = tuple(sorted([nums[i], nums[j], nums[k]]))
                    res.add(triplet)
    return [list(t) for t in res]`,
            complexity: "Time: O(N^3), Space: O(Triplets)"
          },
          {
            type: "Optimal (Sort + 2Ptr)",
            concept: "1. Pehle array ko **sort** kardo.\n2. Ek number `i` ko loop se fix karo.\n3. Ab bache hue array mein `left` aur `right` pointers se Two Sum II (target = -nums[i]) lagao.\n4. **Duplicates skip** karna mat bhulna (prev element same ho toh aage badho).",
            code: `class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        
        for i in range(len(nums)):
            # Duplicate skip karo for 'i'
            if i > 0 and nums[i] == nums[i-1]:
                continue
                
            left, right = i + 1, len(nums) - 1
            while left < right:
                three_sum = nums[i] + nums[left] + nums[right]
                if three_sum == 0:
                    res.append([nums[i], nums[left], nums[right]])
                    left += 1
                    # Duplicate skip karo for 'left'
                    while nums[left] == nums[left-1] and left < right:
                        left += 1
                elif three_sum < 0:
                    left += 1
                else:
                    right -= 1
        return res`,
            dryRun: [
              "[STATE] nums=[-4,-1,-1,0,1,2] | i=0 (val -4) [DESC] Pehle array sort kiya. i=-4 ke liye target sum (L+R) hona chahiye 4. Left=-1, Right=2. Sum=1 (<4), left++.",
              "[STATE] i=1 (val -1) | left=2 (val -1), right=5 (val 2) [DESC] Ab target sum (L+R) hona chahiye 1. Left=-1, Right=2. **Sum = 1 == Target!** Triplet mil gaya: [-1, -1, 2].",
              "[STATE] i=1 (val -1) | left=3 (val 0), right=5 (val 2) [DESC] Same 'i' ke liye aage badhe. Sum = -1+0+2 = 1. Ek aur triplet: [-1, 0, 1]."
            ],
            complexity: "Time: O(N^2), Space: O(log N) to O(N) for sorting"
          }
        ],
        importantNotes: "• **What we learned:** Jab bhi humein triplets chahiye, hum ek variable ko fix karke problem ko 'Two Sum' mein reduce kar sakte hain. Duplicates handle karne ke liye sorting best hai.\n• **Where else to use:** 4Sum, k-Sum problems aur unique combinations find karne mein."
      },
      { 
        id: "q_3sum_closest",
        difficulty: "M", 
        name: "3Sum Closest", 
        companies: ["Amazon", "Bloomberg"],
        link: "https://leetcode.com/problems/3sum-closest/",
        problemStatement: "Given an integer array `nums` of length `n` and an integer `target`, find three integers in `nums` such that the sum is closest to `target`.\n\nReturn the sum of the three integers.",
        testCases: [
          { input: "nums = [-1,2,1,-4], target = 1", output: "2", explanation: "The sum that is closest to the target is 2. (-1 + 2 + 1 = 2)." }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Same as 3Sum, teen loops se har triplet check karo aur target se distance (absolute difference) nikalte raho.",
            code: `def threeSumClosestBrute(nums, target):
    closest_sum = float('inf')
    n = len(nums)
    for i in range(n):
        for j in range(i + 1, n):
            for k in range(j + 1, n):
                curr_sum = nums[i] + nums[j] + nums[k]
                if abs(target - curr_sum) < abs(target - closest_sum):
                    closest_sum = curr_sum
    return closest_sum`,
            complexity: "Time: O(N^3), Space: O(1)"
          },
          {
            type: "Optimal (Sort + 2Ptr)",
            concept: "Array sort karo aur `i` ko fix karke `left` aur `right` pointers se target ke paas pahunchne ki koshish karo. Agar current sum target se chota hai, toh `left` badao; bada hai toh `right` kam karo.",
            code: `class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closest_sum = nums[0] + nums[1] + nums[2]
        
        for i in range(len(nums) - 2):
            left, right = i + 1, len(nums) - 1
            while left < right:
                curr_sum = nums[i] + nums[left] + nums[right]
                if curr_sum == target: return curr_sum
                
                if abs(target - curr_sum) < abs(target - closest_sum):
                    closest_sum = curr_sum
                
                if curr_sum < target:
                    left += 1
                else:
                    right -= 1
        return closest_sum`,
            dryRun: [
              "[STATE] nums=[-4,-1,1,2], target=1 | i=-4, L=-1, R=2 [DESC] Initial sum = -3. Distance from 1 is 4.",
              "[STATE] i=-1, L=1, R=2 | sum=2 [DESC] Target 1 hai, sum 2 aaya. **Distance 1 hai**, jo ki pichle -3 (dist 4) se behtar hai. Closest ab 2 hai."
            ],
            complexity: "Time: O(N^2), Space: O(1)"
          }
        ],
        importantNotes: "• **What we learned:** Jab humein 'exact target' nahi milta, tab humein 'absolute difference' ko minimize karna hota hai. Two pointers se hum target ke close pahunch sakte hain.\n• **Where else to use:** K-closest numbers, target sum closest problems mein."
      },
      { 
        id: "q_4sum",
        difficulty: "M", 
        name: "4Sum", 
        companies: ["Amazon", "Microsoft"],
        link: "https://leetcode.com/problems/4sum/",
        problemStatement: "Given an array `nums` of `n` integers, return an array of all the unique quadruplets `[nums[a], nums[b], nums[c], nums[d]]` such that their sum is equal to `target`.",
        testCases: [
          { input: "nums = [1,0,-1,0,-2,2], target = 0", output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Chaar (4) nested loops chalayenge. O(N^4) complexity hogi.",
            code: `# Four nested loops (i, j, k, l) + set to handle duplicates.`,
            complexity: "Time: O(N^4), Space: O(Quadruplets)"
          },
          {
            type: "Optimal (Sort + 2Ptr)",
            concept: "3Sum ka extension hai. **Do loops** (i aur j) se do numbers fix karo, fir baaki do numbers ke liye Two Pointer lagao. Time complexity O(N^3) ho jayegi.",
            code: `class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        res = []
        n = len(nums)
        for i in range(n):
            if i > 0 and nums[i] == nums[i-1]: continue # Skip duplicates
            for j in range(i + 1, n):
                if j > i + 1 and nums[j] == nums[j-1]: continue # Skip duplicates
                
                left, right = j + 1, n - 1
                while left < right:
                    curr_sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if curr_sum == target:
                        res.append([nums[i], nums[j], nums[left], nums[right]])
                        left += 1
                        while left < right and nums[left] == nums[left-1]:
                            left += 1
                    elif curr_sum < target:
                        left += 1
                    else:
                        right -= 1
        return res`,
            dryRun: [
              "[STATE] nums=[-2,-1,0,0,1,2], target=0 | i=-2, j=-1, L=0, R=2 [DESC] i aur j fix hain. Target for L+R should be 3. L=0, R=2, Sum=2 (<3). left++.",
              "[STATE] L=0, R=2 (duplicate check) [DESC] Sum check karke unique quadruplets collect karenge."
            ],
            complexity: "Time: O(N^3), Space: O(1)"
          }
        ],
        importantNotes: "• **What we learned:** Higher order sum problems (4Sum, 5Sum etc.) ko hum nested loops + two pointers se handle kar sakte hain. Time complexity hamesha O(N^(k-1)) hogi.\n• **Where else to use:** Any k-Sum problem, unique quadruple selection tasks."
      },
      { difficulty: "E", name: "Valid Palindrome", companies: ["Meta", "Microsoft", "Amazon"] },
      { difficulty: "E", name: "Valid Palindrome II", companies: ["Meta", "Google"] },
      { difficulty: "H", name: "Trapping Rain Water", companies: ["Google", "Amazon", "Microsoft", "Meta"] },
      { difficulty: "E", name: "Remove Duplicates from Sorted Array", companies: ["Microsoft", "Adobe"] },
      { difficulty: "M", name: "Sort Colors (Dutch Flag)", companies: ["Microsoft", "Amazon", "Adobe"] },
      { difficulty: "E", name: "Move Zeroes", companies: ["Meta", "Bloomberg", "Microsoft"] },
      { difficulty: "E", name: "Remove Element", companies: ["Adobe", "Amazon"] },
      { difficulty: "E", name: "Squares of Sorted Array", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Boats to Save People", companies: ["Amazon"] },
      { difficulty: "E", name: "Backspace String Compare", companies: ["Google", "Amazon", "Microsoft"] },
      { difficulty: "E", name: "Intersection of Two Arrays II", companies: ["Google", "Amazon", "Microsoft"] },
      { difficulty: "M", name: "Minimum Difference Between Highest and Lowest", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Longest Mountain in Array", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Count Pairs Whose Sum is Less Than Target", companies: ["Amazon"] },
      { difficulty: "M", name: "Push Dominoes", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Partition Array Such That Max Diff is K", companies: ["Amazon"] },
      { difficulty: "H", name: "Minimum Window Subsequence", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Number of Subsequences with Sum ≤ Target", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Reverse Words in a String", companies: ["Amazon", "Microsoft", "Apple"] },
      { difficulty: "E", name: "Two Sum (using sorted + two ptr variant)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Max Number of K-Sum Pairs", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find K Closest Elements", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Make String a Subsequence Using Cyclic Increments", companies: ["Google"] },
      { difficulty: "E", name: "Is Subsequence", companies: ["Amazon", "Google", "Adobe"] },
      { difficulty: "M", name: "Minimum Length of String After Deleting Similar Ends", companies: ["Amazon"] },
      { difficulty: "H", name: "Minimum Operations to Reduce X to Zero", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "02",
    name: "Sliding Window",
    coreRule: "Array/String + Subarray/Substring + contiguous + max/min/avg/count → Sliding Window",
    subPatterns: [
      {
        name: "Fixed Size Window (size = k)",
        points: ["Maximum sum subarray of size k", "Average of all subarrays of size k"]
      },
      {
        name: "Variable Size Window",
        points: ["Longest substring ≤ k distinct chars", "Min size subarray with sum ≥ target", "First negative in window of k"]
      }
    ],
    keywords: [
      "Subarray / substring + contiguous + size k → Fixed Window",
      "Longest substring without repeating chars",
      "Longest / shortest subarray with condition ≤k or ≥k → Variable Window",
      "Minimum window containing all chars → Variable Window",
      "Count of subarrays with product < k → Variable Window"
    ],
    confusionZone: [
      { trigger: "Max subarray sum (no condition)", pattern: "Kadane's Algorithm" },
      { trigger: "Fixed size k window", pattern: "Sliding Window (Fixed)" },
      { trigger: "Condition ≤k, ≥k, distinct", pattern: "Sliding Window (Variable)" },
      { trigger: "Exact sum = k", pattern: "Prefix Sum + HashMap" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Maximum Average Subarray I", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/maximum-average-subarray-i/" },
      { isMastery: true, difficulty: "E", name: "Defuse the Bomb", companies: ["Amazon"], link: "https://leetcode.com/problems/defuse-the-bomb/" },
      { isMastery: true, difficulty: "E", name: "Minimum Recolors to Get K Consecutive Black Blocks", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/" },
      { isMastery: true, difficulty: "E", name: "Find the K-Beauty of a Number", companies: ["Amazon"], link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/" },
      { isMastery: true, difficulty: "E", name: "Diet Plan Performance", companies: ["Amazon"], link: "https://leetcode.com/problems/diet-plan-performance/" },
      { isMastery: true, difficulty: "E", name: "Longest Nice Substring", companies: ["Microsoft"], link: "https://leetcode.com/problems/longest-nice-substring/" },
      { isMastery: true, difficulty: "E", name: "Count Vowel Substrings of a String", companies: ["Amazon"], link: "https://leetcode.com/problems/count-vowel-substrings-of-a-string/" },
      { isMastery: true, difficulty: "E", name: "K Radius Subarray Averages", companies: ["Amazon"], link: "https://leetcode.com/problems/k-radius-subarray-averages/" },
      { isMastery: true, difficulty: "E", name: "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold", companies: ["Amazon"], link: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/" },
      { isMastery: true, difficulty: "E", name: "Longest Substring of All Vowels in Order", companies: ["Google"], link: "https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/" },
      { difficulty: "M", name: "Longest Substring Without Repeating Chars", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "H", name: "Minimum Window Substring", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "H", name: "Sliding Window Maximum", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Longest Substring with At Most K Distinct Chars", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Minimum Size Subarray Sum", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Permutation in String", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "M", name: "Find All Anagrams in String", companies: ["Amazon", "Google", "Uber"] },
      { difficulty: "M", name: "Max Consecutive Ones III", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Fruit Into Baskets", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Longest Repeating Character Replacement", companies: ["Google", "Amazon", "Microsoft"] },
      { difficulty: "M", name: "Subarray Product Less Than K", companies: ["Amazon", "Goldman"] },
      { difficulty: "M", name: "Number of Substrings Containing All 3 Chars", companies: ["Google"] },
      { difficulty: "M", name: "Count Occurrences of Anagrams", companies: ["Amazon", "Flipkart"] },
      { difficulty: "M", name: "Max Points You Can Obtain from Cards", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Grumpy Bookstore Owner", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Substring with Concatenation of All Words", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Longest Subarray of 1s After Deleting One Element", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "K Radius Subarray Averages", companies: ["Amazon"] },
      { difficulty: "H", name: "Minimum Window Subsequence", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Diet Plan Performance", companies: ["Amazon"] },
      { difficulty: "M", name: "Max Erasure Value (Unique Subarray)", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Sliding Window Median", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Frequency of Most Frequent Element", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Consecutive Cards to Pick Up", companies: ["Google"] },
      { difficulty: "M", name: "Number of Equal Count Substrings", companies: ["Google"] },
      { difficulty: "M", name: "Maximize Win From Two Segments", companies: ["Amazon"] },
      { difficulty: "M", name: "Take K of Each Character from Left and Right", companies: ["Google"] },
      { difficulty: "M", name: "Minimum Number of Flips to Make Binary Grid Palindrome", companies: ["Amazon"] },
      { difficulty: "M", name: "Longest Nice Subarray", companies: ["Amazon"] },
      { difficulty: "M", name: "Count Number of Nice Subarrays", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "03",
    name: "Prefix Sum & Kadane's",
    coreRule: "Running prefix sums for range queries | Kadane's for max subarray with +/- values",
    subPatterns: [
      {
        name: "Prefix Sum",
        points: ["Range sum queries in O(1)", "Subarray sum = k → Prefix + HashMap"]
      },
      {
        name: "Kadane's Algorithm",
        points: ["Maximum subarray sum (positives + negatives)", "Maximum product subarray", "2D prefix sums for matrix queries"]
      }
    ],
    keywords: [
      "Subarray sum = k (exact) → Prefix Sum + HashMap",
      "Range query sum [l..r] → Prefix Sum",
      "Max subarray sum (positive + negative) → Kadane's",
      "2D matrix range sum → 2D Prefix"
    ],
    confusionZone: [
      { trigger: "Max subarray (Kadane's)", pattern: "Kadane's — no extra space" },
      { trigger: "Subarray sum = exact k", pattern: "Prefix Sum + HashMap" },
      { trigger: "Window sum any size", pattern: "Sliding Window" },
      { trigger: "2D range sum query", pattern: "2D Prefix Sum" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Running Sum of 1D Array", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/running-sum-of-1d-array/" },
      { isMastery: true, difficulty: "E", name: "Find Pivot Index", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/find-pivot-index/" },
      { isMastery: true, difficulty: "E", name: "Find the Middle Index in Array", companies: ["Amazon"], link: "https://leetcode.com/problems/find-the-middle-index-in-array/" },
      { isMastery: true, difficulty: "E", name: "Range Sum Query - Immutable", companies: ["Amazon", "Adobe"], link: "https://leetcode.com/problems/range-sum-query-immutable/" },
      { isMastery: true, difficulty: "E", name: "Minimum Value to Get Positive Step-by-Step Sum", companies: ["Google"], link: "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/" },
      { isMastery: true, difficulty: "E", name: "Left and Right Sum Differences", companies: ["Amazon"], link: "https://leetcode.com/problems/left-and-right-sum-differences/" },
      { isMastery: true, difficulty: "E", name: "Find the Highest Altitude", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/find-the-highest-altitude/" },
      { isMastery: true, difficulty: "E", name: "Shifting Letters", companies: ["Amazon"], link: "https://leetcode.com/problems/shifting-letters/" },
      { isMastery: true, difficulty: "E", name: "Check if Array Is Sorted and Rotated", companies: ["Amazon"], link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/" },
      { isMastery: true, difficulty: "E", name: "Maximum Score After Splitting a String", companies: ["Amazon"], link: "https://leetcode.com/problems/maximum-score-after-splitting-a-string/" },
      { difficulty: "M", name: "Maximum Subarray (Kadane's)", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Subarray Sum Equals K", companies: ["Amazon", "Google", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "Maximum Product Subarray", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "E", name: "Range Sum Query — Immutable", companies: ["Amazon", "Adobe"] },
      { difficulty: "M", name: "Contiguous Array (0s and 1s)", companies: ["Meta", "Amazon", "Google"] },
      { difficulty: "M", name: "Subarray Sum Divisible by K", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "H", name: "Maximum Sum Circular Subarray", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Count Subarrays with XOR = k", companies: ["Amazon", "Flipkart"] },
      { difficulty: "M", name: "Longest Subarray with Sum 0", companies: ["Amazon", "Paytm", "Flipkart"] },
      { difficulty: "M", name: "Product of Array Except Self", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "H", name: "Max Subarray Min Product", companies: ["Amazon"] },
      { difficulty: "M", name: "Number of Subarrays with Bounded Max", companies: ["Google"] },
      { difficulty: "M", name: "Matrix Block Sum", companies: ["Amazon", "Microsoft"] },
      { difficulty: "E", name: "Minimum Value to Get Positive Step-by-Step Sum", companies: ["Google"] },
      { difficulty: "M", name: "Running Sum of 1D Array", companies: ["Amazon"] },
      { difficulty: "M", name: "Minimum Absolute Difference Queries", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Count Triplets That Can Form Two Arrays of Equal XOR", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Range Sum Query 2D — Mutable", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Sum of Beauty of All Substrings", companies: ["Amazon"] },
      { difficulty: "M", name: "Find Pivot Index", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Ways to Make a Fair Array", companies: ["Amazon"] },
      { difficulty: "M", name: "K-Radius Subarray Averages", companies: ["Amazon"] },
      { difficulty: "H", name: "Number of Subarrays with Bounded Maximum", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Maximum Absolute Sum of Any Subarray", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Operations to Make All Array Elements Equal", companies: ["Amazon"] },
      { difficulty: "M", name: "Count Subarrays Where Max Element Appears at Least K Times", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Number of Ways to Split Array", companies: ["Google"] },
      { difficulty: "M", name: "Continuous Subarray Sum", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Make Sum Divisible by P", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Maximum Sum of 3 Non-Overlapping Subarrays", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "04",
    name: "HashMap / HashSet",
    coreRule: "HashMap = memory for fast O(1) decisions — frequency, lookup, grouping, complement",
    subPatterns: [
      {
        name: "Frequency / Count Based",
        points: ["Count character / element occurrences", "Anagram grouping"]
      },
      {
        name: "Grouping Pattern",
        points: ["Group anagrams", "Categorise by sorted key", "Top K frequent elements", "Isomorphic strings"]
      },
      {
        name: "Lookup / Complement Based",
        points: ["Two Sum unsorted (target - x)", "Check if element seen before"]
      },
      {
        name: "Index Mapping",
        points: ["Subarray with sum=k", "Longest subarray sum=0", "Pair with given difference"]
      }
    ],
    keywords: [
      "Count / frequency / occurrences → HashMap",
      "O(1) lookup — 'does X exist?' → HashSet",
      "Duplicate / unique / distinct check → HashSet",
      "Replace O(n²) nested loop → HashMap",
      "Unsorted + pair + sum → HashMap (target - x)",
      "Grouping problems → HashMap"
    ],
    confusionZone: [
      { trigger: "Sorted + pair + target", pattern: "Two Pointer" },
      { trigger: "Unsorted + pair + target", pattern: "HashMap" },
      { trigger: "Prefix + range lookup", pattern: "HashMap + Prefix" },
      { trigger: "Exact word lookup", pattern: "HashMap (not Trie)" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Contains Duplicate II", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/contains-duplicate-ii/" },
      { isMastery: true, difficulty: "E", name: "Unique Number of Occurrences", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/unique-number-of-occurrences/" },
      { isMastery: true, difficulty: "E", name: "Find the Difference of Two Arrays", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/find-the-difference-of-two-arrays/" },
      { isMastery: true, difficulty: "E", name: "Majority Element", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/majority-element/" },
      { isMastery: true, difficulty: "E", name: "How Many Numbers Are Smaller Than the Current Number", companies: ["Amazon"], link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/" },
      { isMastery: true, difficulty: "E", name: "Check if the Sentence Is Pangram", companies: ["Google"], link: "https://leetcode.com/problems/check-if-the-sentence-is-pangram/" },
      { isMastery: true, difficulty: "E", name: "Jewels and Stones", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/jewels-and-stones/" },
      { isMastery: true, difficulty: "E", name: "Ransom Note", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/ransom-note/" },
      { isMastery: true, difficulty: "E", name: "Intersection of Two Arrays II", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/" },
      { isMastery: true, difficulty: "E", name: "Keyboard Row", companies: ["Amazon"], link: "https://leetcode.com/problems/keyboard-row/" },
      { difficulty: "E", name: "Two Sum", companies: ["Amazon", "Google", "Meta", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "Group Anagrams", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "M", name: "Top K Frequent Elements", companies: ["Amazon", "Google", "Meta", "LinkedIn"] },
      { difficulty: "M", name: "Longest Consecutive Sequence", companies: ["Google", "Amazon", "Meta"] },
      { difficulty: "E", name: "Valid Anagram", companies: ["Amazon", "Microsoft", "Adobe"] },
      { difficulty: "E", name: "Isomorphic Strings", companies: ["Amazon", "LinkedIn"] },
      { difficulty: "M", name: "4Sum II", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "M", name: "Subarray Sum Equals K", companies: ["Meta", "Amazon", "Bloomberg"] },
      { difficulty: "E", name: "First Unique Character in String", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "E", name: "Intersection of Two Arrays", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "E", name: "Happy Number", companies: ["Amazon", "Google", "Adobe"] },
      { difficulty: "E", name: "Word Pattern", companies: ["Uber", "Amazon"] },
      { difficulty: "E", name: "Single Number", companies: ["Amazon", "Microsoft", "Adobe"] },
      { difficulty: "E", name: "Contains Duplicate", companies: ["Amazon", "Google", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "Find All Duplicates in Array", companies: ["Amazon", "Adobe"] },
      { difficulty: "M", name: "Longest Substring Without Repeating Chars", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Equal Row and Column Pairs", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Number of Operations to Make Array Continuous", companies: ["Amazon"] },
      { difficulty: "M", name: "Number of Pairs of Interchangeable Rectangles", companies: ["Amazon"] },
      { difficulty: "M", name: "Count Nice Pairs in an Array", companies: ["Google"] },
      { difficulty: "M", name: "Find Players with Zero or One Losses", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Maximum Number of Balls in a Box", companies: ["Amazon"] },
      { difficulty: "M", name: "Check if Two String Arrays are Equivalent", companies: ["Amazon"] },
      { difficulty: "E", name: "Two Out of Three", companies: ["Amazon"] },
      { difficulty: "M", name: "First Letter to Appear Twice", companies: ["Google"] },
      { difficulty: "M", name: "Count Number of Texts", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Largest Unique Number", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "M", name: "K-diff Pairs in an Array", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Minimum Area Rectangle", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Max Points on a Line", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "H", name: "Longest Duplicate Substring", companies: ["Google", "Amazon"] }
    ]
  },
  {
    id: "05",
    name: "Binary Search",
    coreRule: "If search space is SORTED or can be REDUCED monotonically → Binary Search",
    subPatterns: [
      {
        name: "Binary Search on Index",
        points: ["Sorted array + find target element", "First / last occurrence of element"]
      },
      {
        name: "Structured Unsorted",
        points: ["Peak element in mountain array", "Rotated sorted array", "Search in rotated sorted array"]
      }
    ],
    keywords: [
      "Sorted + find/search/index → Binary Search",
      "First / last occurrence → Binary Search",
      "Find minimum in rotated sorted array",
      "Numeric answer range + isValid() check → Binary Search on Answer",
      "'Minimum / Maximum satisfying condition' → Binary Search on Answer",
      "Peak / mountain / rotated sorted → Binary Search",
      "No random access (linked list) → Linear Search"
    ],
    confusionZone: [
      { trigger: "Sorted array, find target", pattern: "Binary Search" },
      { trigger: "Unsorted, no structure", pattern: "Linear Search" },
      { trigger: "Min/max satisfying a condition", pattern: "Binary Search on Answer" },
      { trigger: "Peak / rotated sorted", pattern: "Binary Search (modified)" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Sqrt(x)", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/sqrtx/" },
      { isMastery: true, difficulty: "E", name: "Guess Number Higher or Lower", companies: ["Google", "Microsoft"], link: "https://leetcode.com/problems/guess-number-higher-or-lower/" },
      { isMastery: true, difficulty: "E", name: "First Bad Version", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/first-bad-version/" },
      { isMastery: true, difficulty: "E", name: "Search Insert Position", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/search-insert-position/" },
      { isMastery: true, difficulty: "E", name: "Peak Index in a Mountain Array", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/" },
      { isMastery: true, difficulty: "E", name: "Valid Perfect Square", companies: ["Amazon", "LinkedIn"], link: "https://leetcode.com/problems/valid-perfect-square/" },
      { isMastery: true, difficulty: "E", name: "Find Smallest Letter Greater Than Target", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/find-smallest-letter-greater-than-target/" },
      { isMastery: true, difficulty: "E", name: "Arranging Coins", companies: ["Amazon"], link: "https://leetcode.com/problems/arranging-coins/" },
      { isMastery: true, difficulty: "E", name: "Count Negative Numbers in a Sorted Matrix", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/" },
      { isMastery: true, difficulty: "E", name: "Check If N and Its Double Exist", companies: ["Amazon"], link: "https://leetcode.com/problems/check-if-n-and-its-double-exist/" },
      { difficulty: "E", name: "Binary Search", companies: ["Amazon", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "Search in Rotated Sorted Array", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "M", name: "Find Minimum in Rotated Sorted Array", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Find Peak Element", companies: ["Google", "Meta", "Microsoft"] },
      { difficulty: "M", name: "Koko Eating Bananas", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Capacity to Ship Packages in D Days", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Median of Two Sorted Arrays", companies: ["Google", "Amazon", "Microsoft", "Meta"] },
      { difficulty: "H", name: "Aggressive Cows (GFG)", companies: ["Amazon", "Flipkart", "Atlassian"] },
      { difficulty: "M", name: "Find First and Last Position", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "M", name: "Search a 2D Matrix", companies: ["Amazon", "Microsoft", "Apple"] },
      { difficulty: "H", name: "Split Array Largest Sum", companies: ["Amazon", "Google", "LinkedIn"] },
      { difficulty: "H", name: "Allocate Minimum Pages (GFG)", companies: ["Amazon", "Flipkart"] },
      { difficulty: "E", name: "Sqrt(x)", companies: ["Amazon", "Microsoft"] },
      { difficulty: "E", name: "Guess Number Higher or Lower", companies: ["Google", "Microsoft"] },
      { difficulty: "M", name: "Time Based Key-Value Store", companies: ["Google", "Amazon", "Bloomberg"] },
      { difficulty: "M", name: "Minimum Days to Make Bouquets", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Single Element in Sorted Array", companies: ["Amazon", "Google", "Facebook"] },
      { difficulty: "M", name: "Random Pick with Weight", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Count of Range Sum", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Reach End of Array with Max Score", companies: ["Amazon"] },
      { difficulty: "H", name: "Find in Mountain Array", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Speed to Arrive on Time", companies: ["Amazon"] },
      { difficulty: "M", name: "Maximize Tastiness of Candy Basket", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Kth Smallest Number in Multiplication Table", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Count Negative Numbers in Sorted Matrix", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find Smallest Letter Greater Than Target", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Cutting Ribbons", companies: ["Amazon"] },
      { difficulty: "M", name: "Magnetic Force Between Two Balls", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Maximum Value at a Given Index in a Bounded Array", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Limit of Balls in a Bag", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Nth Magical Number", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "06",
    name: "Stack",
    coreRule: "Order matters + need nearest/prev/next element → Stack | Last seen element decides current → Stack",
    subPatterns: [
      {
        name: "Monotonic Stack",
        points: ["Next Greater Element (right)", "Next Smaller Element (left/right)", "Largest rectangle in histogram"]
      },
      {
        name: "Range / Span",
        points: ["Stock span problem", "Online Stock Span", "Sum of subarray minimums", "Stock span / daily temperatures"]
      },
      {
        name: "Expression / Parsing",
        points: ["Balanced parentheses / bracket matching", "Infix → Postfix / Prefix evaluation", "Decode string"]
      },
      {
        name: "Min / Max Stack",
        points: ["Design stack with O(1) getMin", "Max stack operations"]
      }
    ],
    keywords: [
      "Next / Previous / Nearest + Greater / Smaller → Monotonic Stack",
      "Balanced parentheses / pair matching → Stack",
      "Expression evaluation infix/prefix/postfix → Stack",
      "Largest rectangle / area under histogram → Monotonic Stack",
      "Span / range problems → Monotonic Stack",
      "Undo / back operations → Stack"
    ],
    confusionZone: [
      { trigger: "Next greater/smaller element", pattern: "Monotonic Stack" },
      { trigger: "Balanced brackets", pattern: "Stack" },
      { trigger: "All paths from source", pattern: "DFS (recursive stack)" },
      { trigger: "Level order processing", pattern: "Queue / BFS" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Implement Queue using Stacks", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
      { isMastery: true, difficulty: "E", name: "Implement Stack using Queues", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/implement-stack-using-queues/" },
      { isMastery: true, difficulty: "E", name: "Make The String Great", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/make-the-string-great/" },
      { isMastery: true, difficulty: "E", name: "Crawler Log Folder", companies: ["Amazon"], link: "https://leetcode.com/problems/crawler-log-folder/" },
      { isMastery: true, difficulty: "E", name: "Baseball Game", companies: ["Amazon"], link: "https://leetcode.com/problems/baseball-game/" },
      { isMastery: true, difficulty: "E", name: "Final Prices With a Special Discount in a Shop", companies: ["Amazon"], link: "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/" },
      { isMastery: true, difficulty: "E", name: "Remove Outermost Parentheses", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/remove-outermost-parentheses/" },
      { isMastery: true, difficulty: "E", name: "Remove All Adjacent Duplicates In String", companies: ["Amazon", "Bloomberg"], link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },
      { isMastery: true, difficulty: "E", name: "Min Stack", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { isMastery: true, difficulty: "E", name: "Backspace String Compare", companies: ["Google", "Amazon"] },
      { difficulty: "E", name: "Valid Parentheses", companies: ["Amazon", "Google", "Meta", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Daily Temperatures", companies: ["Amazon", "Google", "Microsoft", "Uber"] },
      { difficulty: "E", name: "Next Greater Element I", companies: ["Amazon", "Microsoft"] },
      { difficulty: "H", name: "Largest Rectangle in Histogram", companies: ["Google", "Amazon", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Min Stack", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Decode String", companies: ["Google", "Amazon", "Bloomberg"] },
      { difficulty: "H", name: "Sum of Subarray Minimums", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Trapping Rain Water (Stack)", companies: ["Google", "Amazon", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Asteroid Collision", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "M", name: "Remove K Digits", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "132 Pattern", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Online Stock Span", companies: ["Amazon", "Microsoft"] },
      { difficulty: "H", name: "Number of Visible People in Queue", companies: ["Amazon"] },
      { difficulty: "M", name: "Evaluate Reverse Polish Notation", companies: ["Amazon", "LinkedIn"] },
      { difficulty: "M", name: "Basic Calculator II", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Simplify Path", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "H", name: "Maximum Rectangle in Binary Matrix", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Score of Parentheses", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Car Fleet", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Remove Duplicate Letters", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Largest Rectangle using Skyline", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Build an Array with Stack Operations", companies: ["Amazon"] },
      { difficulty: "M", name: "Number of Atoms", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Maximal Rectangle", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Next Greater Element II (Circular)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Flatten Nested List Iterator", companies: ["Amazon", "Google", "LinkedIn"] },
      { difficulty: "M", name: "Validate Stack Sequences", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Count Visible People in Queue", companies: ["Amazon"] },
      { difficulty: "M", name: "Remove All Adjacent Duplicates in String", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "H", name: "Maximum Width Ramp", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Make The String Great", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "07",
    name: "Linked List",
    coreRule: "Array + frequent insert/delete/shift → Linked List | Cycle / middle / reverse → Linked List",
    subPatterns: [
      {
        name: "Fast-Slow Pointer",
        points: ["Detect cycle (Floyd's algorithm)", "Find middle of linked list", "Find nth node from end"]
      },
      {
        name: "Merge",
        points: ["Merge two sorted lists", "Merge k sorted lists", "Sort a linked list", "Detect start of cycle"]
      },
      {
        name: "Reversal",
        points: ["Reverse full linked list", "Reverse in k-groups"]
      },
      {
        name: "Design",
        points: ["LRU Cache (Linked List + HashMap)", "Browser history (Doubly LL)", "Reverse between positions l and r"]
      }
    ],
    keywords: [
      "Cycle detection / loop → Fast-Slow Pointer",
      "Find middle / nth from end → Fast-Slow Pointer",
      "Reverse full / k-group / in-place → Linked List Reversal",
      "Merge sorted streams/lists → Linked List",
      "Design LRU / browser history → LL + HashMap",
      "Array causes O(n) shifting on insert/delete → Linked List"
    ],
    confusionZone: [
      { trigger: "Cycle detection", pattern: "Fast-Slow Pointer (Floyd's)" },
      { trigger: "Merge sorted arrays", pattern: "Two Pointer" },
      { trigger: "Merge k sorted lists", pattern: "Heap (min-heap)" },
      { trigger: "LRU Cache design", pattern: "LL + HashMap" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Middle of the Linked List", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
      { isMastery: true, difficulty: "E", name: "Delete Node in a Linked List", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/delete-node-in-a-linked-list/" },
      { isMastery: true, difficulty: "E", name: "Remove Linked List Elements", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/remove-linked-list-elements/" },
      { isMastery: true, difficulty: "E", name: "Remove Duplicates from Sorted List", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list/" },
      { isMastery: true, difficulty: "E", name: "Convert Binary Number in a Linked List to Integer", companies: ["Amazon"], link: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/" },
      { isMastery: true, difficulty: "E", name: "Linked List Components", companies: ["Amazon"], link: "https://leetcode.com/problems/linked-list-components/" },
      { isMastery: true, difficulty: "E", name: "Design HashSet", companies: ["Amazon"], link: "https://leetcode.com/problems/design-hashset/" },
      { isMastery: true, difficulty: "E", name: "Design HashMap", companies: ["Amazon"], link: "https://leetcode.com/problems/design-hashmap/" },
      { isMastery: true, difficulty: "E", name: "Reverse Linked List II", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/reverse-linked-list-ii/" },
      { isMastery: true, difficulty: "E", name: "Intersection of Two Linked Lists", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "E", name: "Reverse Linked List", companies: ["Amazon", "Google", "Microsoft", "Meta", "Adobe"] },
      { difficulty: "E", name: "Detect Cycle in Linked List", companies: ["Amazon", "Microsoft", "Google", "Bloomberg"] },
      { difficulty: "E", name: "Merge Two Sorted Lists", companies: ["Amazon", "Google", "Microsoft", "Meta", "Adobe"] },
      { difficulty: "E", name: "Find Middle of Linked List", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "LRU Cache", companies: ["Amazon", "Google", "Meta", "Microsoft", "Bloomberg"] },
      { difficulty: "H", name: "Reverse Nodes in k-Group", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "H", name: "Merge k Sorted Lists", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Linked List Cycle II", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "M", name: "Remove Nth Node From End", companies: ["Amazon", "Google", "Microsoft", "Adobe"] },
      { difficulty: "E", name: "Palindrome Linked List", companies: ["Amazon", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Add Two Numbers", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Flatten a Multilevel Doubly Linked List", companies: ["Google", "Microsoft"] },
      { difficulty: "M", name: "Copy List with Random Pointer", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Reorder List", companies: ["Amazon", "Meta", "Bloomberg"] },
      { difficulty: "E", name: "Intersection of Two Linked Lists", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Sort List", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Swap Nodes in Pairs", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "M", name: "Odd Even Linked List", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Remove Linked List Elements", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Design Linked List", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Rotate List", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Partition List", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Insert into Sorted Circular Linked List", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Flatten Binary Tree to Linked List", companies: ["Amazon", "Microsoft"] },
      { difficulty: "H", name: "Reverse Linked List II (subrange)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Delete Node in Linked List (no head)", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Next Greater Node in Linked List", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Design Browser History", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Merge In Between Linked Lists", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Maximum Twin Sum of Linked List", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Design Skiplist", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "08",
    name: "Trees (DFS / BFS)",
    coreRule: "Path / depth / subtree → DFS | Level / shortest / nearest → BFS",
    subPatterns: [
      {
        name: "DFS Triggers",
        points: ["Height / depth / diameter of tree", "Root to leaf path / path sum", "Subtree match / sum", "LCA / ancestor tracking"]
      },
      {
        name: "BST Specific",
        points: ["Inorder → sorted sequence", "Validate BST", "Kth smallest / largest element", "Range sum in BST", "Inorder / preorder / postorder"]
      },
      {
        name: "BFS Triggers",
        points: ["Level order traversal", "Zigzag / left / right side view", "K distance from node", "Minimum depth"]
      },
      {
        name: "Path Based",
        points: ["Max path sum (any to any node)", "Diameter of binary tree", "Binary tree paths", "Connect next right pointers"]
      }
    ],
    keywords: [
      "Rooted tree + depth/height/leaf + max/min/count → DFS",
      "Tree + level / zigzag / leftmost / k distance → BFS",
      "LCA / ancestor → DFS + parent tracking",
      "All paths / subtrees → DFS",
      "Shortest path (unweighted tree) → BFS",
      "BST + sorted order → Inorder DFS"
    ],
    confusionZone: [
      { trigger: "Depth / height / diameter", pattern: "DFS" },
      { trigger: "Level-by-level processing", pattern: "BFS" },
      { trigger: "Ancestor / LCA", pattern: "DFS + parent tracking" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Same Tree", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/same-tree/" },
      { isMastery: true, difficulty: "E", name: "Minimum Depth of Binary Tree", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/" },
      { isMastery: true, difficulty: "E", name: "Path Sum", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/path-sum/" },
      { isMastery: true, difficulty: "E", name: "Binary Tree Inorder Traversal", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
      { isMastery: true, difficulty: "E", name: "Search in a Binary Search Tree", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
      { isMastery: true, difficulty: "E", name: "Root Equals Sum of Children", companies: ["Amazon"], link: "https://leetcode.com/problems/root-equals-sum-of-children/" },
      { isMastery: true, difficulty: "E", name: "Evaluate Boolean Binary Tree", companies: ["Amazon"], link: "https://leetcode.com/problems/evaluate-boolean-binary-tree/" },
      { isMastery: true, difficulty: "E", name: "Univalued Binary Tree", companies: ["Amazon"], link: "https://leetcode.com/problems/univalued-binary-tree/" },
      { isMastery: true, difficulty: "E", name: "Merge Two Binary Trees", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/merge-two-binary-trees/" },
      { isMastery: true, difficulty: "E", name: "Sum of Left Leaves", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/sum-of-left-leaves/" },
      { difficulty: "E", name: "Maximum Depth of Binary Tree", companies: ["Amazon", "Google", "Microsoft", "Meta", "Adobe"] },
      { difficulty: "M", name: "Level Order Traversal", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Lowest Common Ancestor of BST", companies: ["Amazon", "Google", "Microsoft", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "Binary Tree Right Side View", companies: ["Amazon", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "Path Sum II", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "H", name: "Binary Tree Maximum Path Sum", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "E", name: "Diameter of Binary Tree", companies: ["Amazon", "Google", "Facebook"] },
      { difficulty: "H", name: "Serialize and Deserialize Binary Tree", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "M", name: "Validate Binary Search Tree", companies: ["Amazon", "Microsoft", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Kth Smallest in BST", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Flatten Binary Tree to Linked List", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Construct Tree from Inorder+Preorder", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "E", name: "Symmetric Tree", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "E", name: "Invert Binary Tree", companies: ["Google", "Amazon", "Microsoft"] },
      { difficulty: "M", name: "Count Good Nodes in Binary Tree", companies: ["Amazon"] },
      { difficulty: "M", name: "Zigzag Level Order Traversal", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "M", name: "All Nodes Distance K in Binary Tree", companies: ["Amazon", "Google", "Meta"] },
      { difficulty: "H", name: "Binary Tree Cameras", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Sum Root to Leaf Numbers", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "House Robber III (Tree DP)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find Duplicate Subtrees", companies: ["Amazon", "Google", "LinkedIn"] },
      { difficulty: "M", name: "Boundary of Binary Tree", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Vertical Order Traversal", companies: ["Amazon", "Google", "Facebook"] },
      { difficulty: "M", name: "Delete Nodes And Return Forest", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Maximum Width of Binary Tree", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Check Completeness of Binary Tree", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Recover Binary Search Tree", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Convert BST to Greater Tree", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Balance a Binary Search Tree", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Trim a Binary Search Tree", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Binary Tree Right Side View + Next Pointers", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "09",
    name: "Graphs",
    coreRule: "Connected components → BFS/DFS | Shortest path unweighted → BFS | Weighted → Dijkstra | Order deps → Topo Sort",
    subPatterns: [
      {
        name: "BFS / DFS Traversal",
        points: ["Island counting / flood fill → DFS", "Connected components count → BFS/DFS", "Shortest path unweighted → BFS", "All paths → DFS"]
      },
      {
        name: "Topological Sort",
        points: ["Prerequisites / task scheduling → Topo Sort", "DAG + ordering → Topo Sort", "Course schedule → Topo Sort (Kahn's)"]
      },
      {
        name: "Shortest Path Algorithms",
        points: ["Unweighted → BFS", "Weighted non-negative → Dijkstra", "Negative weights → Bellman-Ford"]
      },
      {
        name: "Union Find (DSU)",
        points: ["Dynamically connecting components", "Are X and Y connected?", "Cycle detection in undirected graph", "All pairs → Floyd-Warshall"]
      }
    ],
    keywords: [
      "Connected components + count/reachable → BFS/DFS",
      "Shortest path + unweighted → BFS",
      "Shortest path + weighted non-negative → Dijkstra",
      "All paths → DFS",
      "Prerequisites / build order → Topological Sort",
      "Are X and Y connected? → Union Find"
    ],
    confusionZone: [
      { trigger: "Shortest path unweighted", pattern: "BFS" },
      { trigger: "Shortest path weighted", pattern: "Dijkstra" },
      { trigger: "Cycle detection undirected", pattern: "DFS / Union Find" },
      { trigger: "Task scheduling / ordering", pattern: "Topological Sort" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Find if Path Exists in Graph", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
      { isMastery: true, difficulty: "E", name: "Find the Town Judge", companies: ["Amazon"], link: "https://leetcode.com/problems/find-the-town-judge/" },
      { isMastery: true, difficulty: "E", name: "Center of Star Graph", companies: ["Amazon"], link: "https://leetcode.com/problems/find-center-of-star-graph/" },
      { isMastery: true, difficulty: "E", name: "Flood Fill", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/flood-fill/" },
      { isMastery: true, difficulty: "E", name: "Island Perimeter", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/island-perimeter/" },
      { isMastery: true, difficulty: "E", name: "Employee Importance", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/employee-importance/" },
      { isMastery: true, difficulty: "E", name: "Find Center of Star Graph", companies: ["Amazon"], link: "https://leetcode.com/problems/find-center-of-star-graph/" },
      { isMastery: true, difficulty: "E", name: "Check if Path Exists in Graph", companies: ["Amazon"], link: "https://leetcode.com/problems/find-if-path-exists-in-graph/" },
      { isMastery: true, difficulty: "E", name: "Maximum Depth of N-ary Tree", companies: ["Amazon"], link: "https://leetcode.com/problems/maximum-depth-of-n-ary-tree/" },
      { isMastery: true, difficulty: "E", name: "Univalued Binary Tree", companies: ["Amazon"], link: "https://leetcode.com/problems/univalued-binary-tree/" },
      { difficulty: "M", name: "Number of Islands", companies: ["Amazon", "Google", "Meta", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Clone Graph", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "M", name: "Course Schedule", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "M", name: "Network Delay Time (Dijkstra)", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Number of Connected Components", companies: ["LinkedIn", "Amazon", "Google"] },
      { difficulty: "M", name: "Redundant Connection (Union Find)", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Word Ladder", companies: ["Amazon", "Google", "Meta", "Bloomberg"] },
      { difficulty: "H", name: "Alien Dictionary", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "M", name: "Pacific Atlantic Water Flow", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Rotting Oranges", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "01 Matrix (BFS)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Graph Valid Tree", companies: ["LinkedIn", "Amazon", "Google"] },
      { difficulty: "M", name: "Walls and Gates", companies: ["Amazon", "Meta", "Google"] },
      { difficulty: "M", name: "Cheapest Flights K Stops", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "E", name: "Find the Town Judge", companies: ["Amazon"] },
      { difficulty: "M", name: "Accounts Merge (Union Find)", companies: ["Amazon", "Google", "Meta"] },
      { difficulty: "M", name: "Keys and Rooms", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "All Paths from Source to Target", companies: ["Amazon", "Google", "Meta"] },
      { difficulty: "M", name: "Is Graph Bipartite?", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find Eventual Safe States", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Minimum Cost to Connect All Points (Prim's)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Path with Maximum Probability", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Critical Connections in Network", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Number of Vertices to Reach All Nodes", companies: ["Amazon"] },
      { difficulty: "H", name: "Reconstruct Itinerary", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Number of Enclaves", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Swim in Rising Water", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Evaluate Division (Graph BFS)", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Shortest Path in Grid with Obstacles Elimination", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Check if There is Valid Path in Grid", companies: ["Amazon"] },
      { difficulty: "H", name: "Parallel Courses III (Topo + DP)", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "10",
    name: "Backtracking",
    coreRule: "Try all possibilities + undo choices → Backtracking | Multiple choices at each step + need ALL answers → Backtracking",
    subPatterns: [
      {
        name: "Subsets / Combinations",
        points: ["Generate all subsets / power set", "Combinations of size k"]
      },
      {
        name: "Constraint Satisfaction",
        points: ["N-Queens problem", "Sudoku solver", "Combination sum (pick with repetition)", "Word search on grid"]
      },
      {
        name: "Permutations",
        points: ["All permutations of array/string", "Next permutation"]
      },
      {
        name: "Partition",
        points: ["Palindrome partitioning", "Partition equal subset sum (backtrack)", "Letter case permutation"]
      }
    ],
    keywords: [
      "Generate all combinations / subsets → Backtracking",
      "Generate all permutations → Backtracking",
      "'All possible ways' / 'print all' → Backtracking",
      "Decision: pick / not pick + need ALL answers → Backtracking",
      "Constraint + validation (N-Queens, Sudoku, Word Search) → Backtracking"
    ],
    confusionZone: [
      { trigger: "All subsets / permutations", pattern: "Backtracking" },
      { trigger: "Count / max / min (optimize only)", pattern: "DP / Greedy" },
      { trigger: "Does path exist?", pattern: "DFS / BFS" },
      { trigger: "All paths", pattern: "Backtracking" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Binary Watch", companies: ["Amazon"], link: "https://leetcode.com/problems/binary-watch/" },
      { isMastery: true, difficulty: "E", name: "Sum of All Subset XOR Totals", companies: ["Amazon"], link: "https://leetcode.com/problems/sum-of-all-subset-xor-totals/" },
      { isMastery: true, difficulty: "E", name: "Letter Case Permutation", companies: ["Amazon"], link: "https://leetcode.com/problems/letter-case-permutation/" },
      { isMastery: true, difficulty: "E", name: "All Paths From Source to Target", companies: ["Amazon"], link: "https://leetcode.com/problems/all-paths-from-source-to-target/" },
      { isMastery: true, difficulty: "E", name: "Combination Sum (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/combination-sum/" },
      { isMastery: true, difficulty: "E", name: "Subsets (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/subsets/" },
      { isMastery: true, difficulty: "E", name: "Permutations (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/permutations/" },
      { isMastery: true, difficulty: "E", name: "Generating Parentheses (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/generate-parentheses/" },
      { isMastery: true, difficulty: "E", name: "Word Search (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/word-search/" },
      { isMastery: true, difficulty: "E", name: "N-Queens (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/n-queens/" },
      { difficulty: "M", name: "Subsets", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Subsets II (with duplicates)", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Permutations", companies: ["Amazon", "Google", "Microsoft", "Meta", "LinkedIn"] },
      { difficulty: "M", name: "Permutations II (duplicates)", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Combination Sum", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Combination Sum II", companies: ["Amazon", "Microsoft"] },
      { difficulty: "H", name: "N-Queens", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "H", name: "Sudoku Solver", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Word Search", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Palindrome Partitioning", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Letter Combinations of Phone Number", companies: ["Amazon", "Google", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "Generate Parentheses", companies: ["Amazon", "Google", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "Restore IP Addresses", companies: ["Amazon", "Microsoft"] },
      { difficulty: "H", name: "Word Break II", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Path Sum III", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Beautiful Arrangement", companies: ["Amazon"] },
      { difficulty: "M", name: "Combination Sum III", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Gray Code", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "N-Queens II (count solutions)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find All Possible Recipes from Ingredients", companies: ["Amazon"] },
      { difficulty: "M", name: "Count Numbers with Unique Digits", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Matchsticks to Square", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Partition to K Equal Subsets", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Expression Add Operators", companies: ["Amazon", "Google", "Meta"] },
      { difficulty: "M", name: "Numbers with Same Consecutive Differences", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Binary Watch", companies: ["Amazon"] },
      { difficulty: "H", name: "Remove Invalid Parentheses", companies: ["Amazon", "Google", "Meta"] },
      { difficulty: "M", name: "Letter Case Permutation", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find Unique Binary String", companies: ["Amazon"] },
      { difficulty: "M", name: "Maximum Length of a Concatenated String with Unique Characters", companies: ["Amazon"] },
      { difficulty: "H", name: "24 Game", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "11",
    name: "Heap / Priority Queue",
    coreRule: "Sorting too slow + only need k elements → Heap | Best element repeatedly → Heap",
    subPatterns: [
      {
        name: "Top K / Kth Element",
        points: ["Top K frequent elements", "Kth largest element"]
      },
      {
        name: "K-way Merge",
        points: ["Merge k sorted lists", "Smallest range covering K lists", "K closest points to origin", "Kth smallest in sorted matrix"]
      },
      {
        name: "Greedy + Heap",
        points: ["Task scheduler", "Reorganize string", "Meeting rooms II"]
      },
      {
        name: "Running Median",
        points: ["Median of data stream (two heaps)", "Sliding window median", "Huffman encoding"]
      }
    ],
    keywords: [
      "Top K / Kth element → Heap",
      "Best (min/max) element repeatedly → Heap",
      "Priority / scheduling → Heap",
      "Stream + maintain top elements → Heap",
      "Merge k sorted lists/arrays → Min Heap",
      "Running / stream median → Two Heaps"
    ],
    confusionZone: [
      { trigger: "Top K elements", pattern: "Heap (not full sort)" },
      { trigger: "Full sorted array", pattern: "Sorting" },
      { trigger: "Exact lookup", pattern: "HashMap" },
      { trigger: "Range / window", pattern: "Sliding Window" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Last Stone Weight", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/last-stone-weight/" },
      { isMastery: true, difficulty: "E", name: "Relative Ranks", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/relative-ranks/" },
      { isMastery: true, difficulty: "E", name: "Kth Largest Element in a Stream", companies: ["Amazon"], link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
      { isMastery: true, difficulty: "E", name: "The K Weakest Rows in a Matrix", companies: ["Amazon"], link: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/" },
      { isMastery: true, difficulty: "E", name: "Make Array Zero by Subtracting Equal Amounts", companies: ["Amazon"], link: "https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/" },
      { isMastery: true, difficulty: "E", name: "Minimum Amount of Time to Fill Cups", companies: ["Amazon"], link: "https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/" },
      { isMastery: true, difficulty: "E", name: "Take Gifts From the Richest Pile", companies: ["Amazon"], link: "https://leetcode.com/problems/take-gifts-from-the-richest-pile/" },
      { isMastery: true, difficulty: "E", name: "Kth Largest Element in Array (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
      { isMastery: true, difficulty: "E", name: "Minimize Result by Adding Parentheses to Expression", companies: ["Amazon"], link: "https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/" },
      { isMastery: true, difficulty: "E", name: "Find K Closest Points (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/k-closest-points-to-origin/" },
      { difficulty: "M", name: "Kth Largest Element in Array", companies: ["Amazon", "Google", "Meta", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Top K Frequent Elements", companies: ["Amazon", "Google", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "K Closest Points to Origin", companies: ["Amazon", "Google", "Meta", "Bloomberg"] },
      { difficulty: "H", name: "Merge K Sorted Lists", companies: ["Amazon", "Google", "Microsoft", "Meta", "Bloomberg"] },
      { difficulty: "H", name: "Find Median from Data Stream", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Task Scheduler", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Meeting Rooms II", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Reorganize String", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Kth Smallest in Sorted Matrix", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Find K Pairs with Smallest Sums", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Smallest Range Covering K Lists", companies: ["Google", "Amazon"] },
      { difficulty: "H", name: "IPO", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Seat Reservation Manager", companies: ["Amazon"] },
      { difficulty: "E", name: "Last Stone Weight", companies: ["Amazon", "Google"] },
      { difficulty: "E", name: "Relative Ranks", companies: ["Amazon", "Microsoft"] },
      { difficulty: "H", name: "Maximum CPU Load", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "H", name: "Sliding Window Median", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Furthest Building You Can Reach", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Single-Threaded CPU", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Maximum Performance of Team", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find the Kth Largest Integer in Array", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Minimize Deviation in Array", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Reduce Array Size to Half", companies: ["Amazon"] },
      { difficulty: "H", name: "Trapping Rain Water II (3D)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Process Tasks Using Servers", companies: ["Amazon"] },
      { difficulty: "M", name: "Minimum Cost to Hire K Workers", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Design Twitter (Heap-based feed)", companies: ["Amazon", "Google", "Twitter"] },
      { difficulty: "M", name: "Find K-th Smallest Pair Distance", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Course Schedule III (Greedy+Heap)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Kth Largest Element in Stream", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Find Median from Two Sorted Arrays (Heap approach)", companies: ["Amazon", "Google", "Microsoft"] }
    ]
  },
  {
    id: "12",
    name: "Trie (Prefix Tree)",
    coreRule: "Prefix-based search / matching on strings → Trie",
    subPatterns: [
      {
        name: "Prefix Based",
        points: ["Autocomplete / search suggestions", "'Starts with' prefix check", "Count words with given prefix"]
      },
      {
        name: "Bitwise Trie",
        points: ["Maximum XOR of two numbers", "Find pair with maximum XOR", "Longest common prefix"]
      }
    ],
    keywords: [
      "Prefix search / autocomplete → Trie",
      "'Starts with' / 'count words with prefix' → Trie",
      "Pattern matching with wildcard → Trie",
      "Multiple words search on same grid → Trie + DFS",
      "Longest common prefix → Trie",
      "Maximum XOR of numbers → Bitwise Trie"
    ],
    confusionZone: [
      { trigger: "Prefix search / autocomplete", pattern: "Trie" },
      { trigger: "Exact word lookup", pattern: "HashMap" },
      { trigger: "Substring search", pattern: "Sliding Window / KMP" },
      { trigger: "Multi-word search on grid", pattern: "Trie + DFS" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Longest Common Prefix", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/longest-common-prefix/" },
      { isMastery: true, difficulty: "E", name: "Prefix and Suffix Search (Easy)", companies: ["Amazon"], link: "https://leetcode.com/problems/prefix-and-suffix-search/" },
      { isMastery: true, difficulty: "E", name: "Implement Trie (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
      { isMastery: true, difficulty: "E", name: "Add and Search Words (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
      { isMastery: true, difficulty: "E", name: "Maximum XOR of Two Numbers (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/" },
      { isMastery: true, difficulty: "E", name: "Word Search II (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/word-search-ii/" },
      { isMastery: true, difficulty: "E", name: "Palindrome Pairs (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/palindrome-pairs/" },
      { isMastery: true, difficulty: "E", name: "Replace Words (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/replace-words/" },
      { isMastery: true, difficulty: "E", name: "Search Suggestions System (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/search-suggestions-system/" },
      { isMastery: true, difficulty: "E", name: "Stream of Characters (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/stream-of-characters/" },
      { difficulty: "M", name: "Implement Trie (Prefix Tree)", companies: ["Amazon", "Google", "Microsoft", "Meta", "Bloomberg"] },
      { difficulty: "H", name: "Word Search II", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Design Add and Search Words", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "E", name: "Longest Common Prefix", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Maximum XOR of Two Numbers", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Replace Words", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "M", name: "Search Suggestions System", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Concatenated Words", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Palindrome Pairs", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Short Encoding of Words", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Stream of Characters", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Map Sum Pairs", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "H", name: "Word Squares", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Sum of Prefix Scores of Strings", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Number of Distinct Substrings in a String", companies: ["Amazon"] },
      { difficulty: "H", name: "Maximum XOR With an Element From Array", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Count Words Obtained After Adding a Letter", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Implement Magic Dictionary", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Index Pairs of a String", companies: ["Amazon"] },
      { difficulty: "M", name: "Word Filter (Prefix & Suffix)", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Lexicographical Numbers", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "K-th Smallest in Lexicographical Order", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Longest Word in Dictionary through Deleting", companies: ["Amazon"] },
      { difficulty: "M", name: "Maximum Genetic Difference Query", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Count Pairs With XOR in Range", companies: ["Amazon"] },
      { difficulty: "M", name: "Prefix and Suffix Search", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Count Distinct Substrings using Trie", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "13",
    name: "Dynamic Programming",
    coreRule: "Overlapping subproblems + optimal substructure → DP | Same STATE solved multiple times → DP",
    subPatterns: [
      {
        name: "Linear DP (1D)",
        points: ["Longest Increasing Subsequence", "House Robber", "Climbing Stairs / Fibonacci", "Max sum with conditions"]
      },
      {
        name: "Grid DP (2D)",
        points: ["Unique Paths", "Minimum Path Sum", "Dungeon Game", "Obstacles in grid"]
      },
      {
        name: "Knapsack DP",
        points: ["0/1 Knapsack", "Coin Change (unbounded)", "Partition Equal Subset Sum", "Target Sum"]
      },
      {
        name: "String DP",
        points: ["LCS / Edit Distance", "Wildcard / Regex Matching", "Longest Palindromic Subsequence"]
      }
    ],
    keywords: [
      "'How many ways' / 'is it possible' / 'minimum cost' → DP",
      "Overlapping subproblems + state repeats → DP",
      "Pick/not pick + count/max/min → DP (Knapsack)",
      "Left/right range (l,r) as state → Interval DP",
      "Coordinates (row,col) as state → Grid DP",
      "Two sequences (i,j) as state → String DP"
    ],
    confusionZone: [
      { trigger: "Count / max / min / possible", pattern: "DP" },
      { trigger: "All answers / print all", pattern: "Backtracking" },
      { trigger: "Independent subproblems", pattern: "Divide & Conquer" },
      { trigger: "Overlapping subproblems", pattern: "DP" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Fibonacci Number", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/fibonacci-number/" },
      { isMastery: true, difficulty: "E", name: "N-th Tribonacci Number", companies: ["Amazon"], link: "https://leetcode.com/problems/n-th-tribonacci-number/" },
      { isMastery: true, difficulty: "E", name: "Divisor Game", companies: ["Amazon"], link: "https://leetcode.com/problems/divisor-game/" },
      { isMastery: true, difficulty: "E", name: "Min Cost Climbing Stairs", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
      { isMastery: true, difficulty: "E", name: "Get Maximum in Generated Array", companies: ["Amazon"], link: "https://leetcode.com/problems/get-maximum-in-generated-array/" },
      { isMastery: true, difficulty: "E", name: "Counting Bits (DP variant)", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/counting-bits/" },
      { isMastery: true, difficulty: "E", name: "Pascals Triangle", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/pascals-triangle/" },
      { isMastery: true, difficulty: "E", name: "Pascals Triangle II", companies: ["Amazon"], link: "https://leetcode.com/problems/pascals-triangle-ii/" },
      { isMastery: true, difficulty: "E", name: "Is Subsequence (DP approach)", companies: ["Amazon"], link: "https://leetcode.com/problems/is-subsequence/" },
      { isMastery: true, difficulty: "E", name: "Best Time to Buy and Sell Stock (Easy DP)", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
      { difficulty: "E", name: "Climbing Stairs", companies: ["Amazon", "Google", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "House Robber", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "House Robber II", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Longest Increasing Subsequence", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Coin Change", companies: ["Amazon", "Google", "Microsoft", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "Unique Paths", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "H", name: "Edit Distance", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "H", name: "Burst Balloons", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Partition Equal Subset Sum", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Longest Common Subsequence", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Word Break", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "H", name: "Maximum Profit in Job Scheduling", companies: ["Google", "Amazon"] },
      { difficulty: "H", name: "Regular Expression Matching", companies: ["Google", "Amazon", "Microsoft", "Meta"] },
      { difficulty: "H", name: "Wildcard Matching", companies: ["Google", "Amazon", "Microsoft"] },
      { difficulty: "M", name: "Decode Ways", companies: ["Amazon", "Meta", "Bloomberg", "Microsoft"] },
      { difficulty: "M", name: "Minimum Path Sum", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Jump Game VI", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Cherry Pickup II", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Strange Printer", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Longest Palindromic Subsequence", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Minimum Falling Path Sum", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Out of Boundary Paths", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Ones and Zeroes (2D Knapsack)", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Minimum Cost to Cut a Stick", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Count Vowels Permutation", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Profitable Schemes", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Longest Turbulent Subarray (DP)", companies: ["Amazon"] },
      { difficulty: "M", name: "Best Time to Buy and Sell Stock with Cooldown", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Best Time to Buy and Sell Stock with Fee", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Distinct Subsequences", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "H", name: "Number of Music Playlists", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "14",
    name: "Greedy Algorithms",
    coreRule: "Locally best choice at each step → trust it leads to global best → Greedy (no backtracking)",
    subPatterns: [
      {
        name: "Interval / Activity",
        points: ["Activity selection (earliest finish)", "Non-overlapping intervals", "Minimum number of interval removals"]
      },
      {
        name: "Jump / Reach",
        points: ["Jump Game I / II", "Minimum jumps to reach end", "Meeting rooms minimum count"]
      },
      {
        name: "Scheduling Greedy",
        points: ["Job scheduling with deadlines", "Task scheduler (CPU)"]
      },
      {
        name: "Others",
        points: ["Huffman coding / min cost tree", "Minimum coins (standard denominations)", "Deadline-based profit maximisation"]
      }
    ],
    keywords: [
      "Activity selection / interval scheduling → Greedy",
      "'Maximum events / tasks you can attend' → Greedy",
      "'Minimum platforms / meeting rooms needed' → Greedy",
      "Job scheduling with deadlines → Greedy",
      "Jump game / reach end → Greedy",
      "Sort + pick best option at each step → Greedy"
    ],
    confusionZone: [
      { trigger: "Interval scheduling / activity", pattern: "Greedy" },
      { trigger: "Knapsack fractional", pattern: "Greedy" },
      { trigger: "0/1 Knapsack", pattern: "DP" },
      { trigger: "Coin change (arbitrary denominations)", pattern: "DP" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Lemonade Change", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/lemonade-change/" },
      { isMastery: true, difficulty: "E", name: "Assign Cookies", companies: ["Amazon"], link: "https://leetcode.com/problems/assign-cookies/" },
      { isMastery: true, difficulty: "E", name: "Can Place Flowers", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/can-place-flowers/" },
      { isMastery: true, difficulty: "E", name: "Maximum 69 Number", companies: ["Amazon"], link: "https://leetcode.com/problems/maximum-69-number/" },
      { isMastery: true, difficulty: "E", name: "Minimum Sum of Four Digit Number After Splitting Digits", companies: ["Amazon"], link: "https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/" },
      { isMastery: true, difficulty: "E", name: "Split a String in Balanced Strings", companies: ["Amazon"], link: "https://leetcode.com/problems/split-a-string-in-balanced-strings/" },
      { isMastery: true, difficulty: "E", name: "Maximum Units on a Truck", companies: ["Amazon"], link: "https://leetcode.com/problems/maximum-units-on-a-truck/" },
      { isMastery: true, difficulty: "E", name: "Minimum Operations to Make the Array Increasing", companies: ["Amazon"], link: "https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/" },
      { isMastery: true, difficulty: "E", name: "Minimum Cost to Move Chips to The Same Position", companies: ["Amazon"], link: "https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/" },
      { isMastery: true, difficulty: "E", name: "Calculate Money in Leetcode Bank", companies: ["Amazon"], link: "https://leetcode.com/problems/calculate-money-in-leetcode-bank/" },
      { difficulty: "M", name: "Jump Game", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Jump Game II", companies: ["Amazon", "Google", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "Non-overlapping Intervals", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Meeting Rooms II", companies: ["Amazon", "Google", "Meta", "Bloomberg"] },
      { difficulty: "M", name: "Gas Station", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "H", name: "Candy", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Task Scheduler", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Minimum Number of Arrows to Burst Balloons", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Partition Labels", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Queue Reconstruction by Height", companies: ["Amazon", "Google"] },
      { difficulty: "E", name: "Assign Cookies", companies: ["Amazon"] },
      { difficulty: "E", name: "Lemonade Change", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Platforms (GFG)", companies: ["Amazon", "Flipkart", "Paytm"] },
      { difficulty: "M", name: "Car Fleet", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Hand of Straights", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Largest Number", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Two City Scheduling", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Number of Refueling Stops", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Video Stitching", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Remove Covered Intervals", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Maximum Units on Truck", companies: ["Amazon"] },
      { difficulty: "E", name: "Check if Array Is Sorted and Rotated", companies: ["Amazon"] },
      { difficulty: "M", name: "Boats to Save People", companies: ["Amazon"] },
      { difficulty: "M", name: "Bag of Tokens", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Maximum Bags With Full Capacity", companies: ["Amazon"] },
      { difficulty: "M", name: "Earliest Possible Day of Full Bloom", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find the Minimum Number of Fibonacci Numbers Whose Sum Is K", companies: ["Amazon"] },
      { difficulty: "M", name: "Reduce Array Size to Half", companies: ["Amazon"] },
      { difficulty: "H", name: "IPO (Greedy+Heap)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Minimum Cost to Move Chips", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Break a Palindrome", companies: ["Amazon", "Google"] }
    ]
  },
  {
    id: "15",
    name: "Divide & Conquer",
    coreRule: "Divide → Solve independently → Combine → D&C; | No overlapping subproblems (else DP)",
    subPatterns: [
      {
        name: "Sorting Based",
        points: ["Merge Sort", "Quick Sort"]
      },
      {
        name: "Other",
        points: ["Pow(x,n) — fast exponentiation", "Majority element (Boyer-Moore variant)", "Count inversions (Merge Sort)"]
      }
    ],
    keywords: [
      "Split into left/right halves + combine results → D&C;",
      "Independent subproblems (no shared work) → D&C;",
      "Sorting / inversion type problems → D&C;",
      "Count inversions → Merge Sort (D&C;)",
      "Kth largest / Quick Select → D&C;"
    ],
    confusionZone: [
      { trigger: "Independent subproblems", pattern: "Divide & Conquer" },
      { trigger: "Overlapping subproblems", pattern: "DP" },
      { trigger: "Sorted + find element", pattern: "Binary Search" },
      { trigger: "Kth largest", pattern: "Quick Select (D&C;) or Heap" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Merge Sort (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/sort-an-array/" },
      { isMastery: true, difficulty: "E", name: "Quick Sort (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/sort-an-array/" },
      { isMastery: true, difficulty: "E", name: "Binary Search (D&C; Approach)", companies: ["Amazon"], link: "https://leetcode.com/problems/binary-search/" },
      { isMastery: true, difficulty: "E", name: "Maximum Depth of Binary Tree (D&C;)", companies: ["Amazon"], link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
      { isMastery: true, difficulty: "E", name: "Diameter of Binary Tree (D&C;)", companies: ["Amazon"], link: "https://leetcode.com/problems/diameter-of-binary-tree/" },
      { isMastery: true, difficulty: "E", name: "Invert Binary Tree (D&C;)", companies: ["Amazon"], link: "https://leetcode.com/problems/invert-binary-tree/" },
      { isMastery: true, difficulty: "E", name: "Same Tree (D&C;)", companies: ["Amazon"], link: "https://leetcode.com/problems/same-tree/" },
      { isMastery: true, difficulty: "E", name: "Search in a Binary Search Tree (D&C;)", companies: ["Amazon"], link: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
      { isMastery: true, difficulty: "E", name: "Fibonacci Number (D&C;)", companies: ["Amazon"], link: "https://leetcode.com/problems/fibonacci-number/" },
      { isMastery: true, difficulty: "E", name: "Balanced Binary Tree (D&C;)", companies: ["Amazon"], link: "https://leetcode.com/problems/balanced-binary-tree/" },
      { difficulty: "M", name: "Sort an Array (Merge Sort impl.)", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "M", name: "Count Inversions in Array", companies: ["Amazon", "Microsoft", "Goldman", "Flipkart"] },
      { difficulty: "M", name: "Kth Largest Element (Quick Select)", companies: ["Amazon", "Google", "Meta", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Pow(x, n)", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "E", name: "Majority Element", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Majority Element II", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "M", name: "Maximum Subarray (D&C; approach)", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "H", name: "Median of Two Sorted Arrays", companies: ["Amazon", "Google", "Microsoft", "Meta"] },
      { difficulty: "M", name: "Find K Closest Elements", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Different Ways to Add Parentheses", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Beautiful Array", companies: ["Google"] },
      { difficulty: "M", name: "Construct BST from Preorder Traversal", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Sort Colors (3-way partition)", companies: ["Amazon", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "Wiggle Sort II", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Count of Smaller Numbers After Self", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "H", name: "Reverse Pairs", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find the Duplicate Number (Floyd + D&C;)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Search a 2D Matrix II", companies: ["Amazon", "Microsoft", "Apple"] },
      { difficulty: "H", name: "The Skyline Problem", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "H", name: "Count of Range Sum", companies: ["Google", "Amazon"] },
      { difficulty: "M", name: "Super Pow", companies: ["Amazon"] },
      { difficulty: "M", name: "Longest Nice Substring", companies: ["Amazon"] },
      { difficulty: "M", name: "Find K-th Largest XOR Coordinate Value", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Maximum Product of Splitted Binary Tree", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Closest Pair of Points", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Balanced BST from Sorted Array", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Construct Quad Tree", companies: ["Amazon", "Microsoft"] }
    ]
  },
  {
    id: "16",
    name: "String Algorithms",
    coreRule: "Pattern matching → KMP/Z | Anagram/window → Sliding Window | Palindrome center → Manacher's | Rolling hash → Rabin-Karp",
    subPatterns: [
      {
        name: "KMP / Z-Algorithm",
        points: ["Pattern search in O(n+m)", "Failure function / LPS array", "Repeated substring pattern"]
      },
      {
        name: "Manacher's Algorithm",
        points: ["Longest palindromic substring in O(n)", "Count all palindromic substrings", "Expand around center (simple variant)", "Z-array for prefix matching"]
      },
      {
        name: "Rabin-Karp (Rolling Hash)",
        points: ["Multi-pattern search", "Duplicate substring detection", "Longest duplicate substring"]
      },
      {
        name: "String Hashing & Misc",
        points: ["Lexicographic comparison", "String rotation checks", "Anagram / isomorphic checks", "String plagiarism check"]
      }
    ],
    keywords: [
      "Find pattern in text efficiently → KMP or Rabin-Karp",
      "Longest / all palindromic substrings → Manacher's or Expand-Center",
      "Repeated / duplicate substrings → Rolling Hash",
      "String rotation / cyclic check → KMP on doubled string",
      "Count distinct substrings → Suffix Array / Trie",
      "String compression / encoding → Greedy + Two Pointer"
    ],
    confusionZone: [
      { trigger: "Exact pattern search", pattern: "KMP (not brute force O(n*m))" },
      { trigger: "Palindrome substring", pattern: "Manacher's / Expand Center" },
      { trigger: "Anagram in window", pattern: "Sliding Window + HashMap" },
      { trigger: "Prefix match / autocomplete", pattern: "Trie" },
      { trigger: "Duplicate substring", pattern: "Rabin-Karp / Binary Search + Hash" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Reverse String", companies: ["Amazon"], link: "https://leetcode.com/problems/reverse-string/" },
      { isMastery: true, difficulty: "E", name: "Valid Palindrome", companies: ["Meta", "Microsoft"], link: "https://leetcode.com/problems/valid-palindrome/" },
      { isMastery: true, difficulty: "E", name: "Valid Anagram", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/valid-anagram/" },
      { isMastery: true, difficulty: "E", name: "Isomorphic Strings", companies: ["Amazon", "LinkedIn"], link: "https://leetcode.com/problems/isomorphic-strings/" },
      { isMastery: true, difficulty: "E", name: "Word Pattern", companies: ["Amazon", "Uber"], link: "https://leetcode.com/problems/word-pattern/" },
      { isMastery: true, difficulty: "E", name: "Longest Common Prefix", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/longest-common-prefix/" },
      { isMastery: true, difficulty: "E", name: "First Unique Character in a String", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
      { isMastery: true, difficulty: "E", name: "Is Subsequence", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/is-subsequence/" },
      { isMastery: true, difficulty: "E", name: "Length of Last Word", companies: ["Amazon", "Apple"], link: "https://leetcode.com/problems/length-of-last-word/" },
      { isMastery: true, difficulty: "E", name: "Add Strings", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/add-strings/" },
      { difficulty: "M", name: "Longest Palindromic Substring", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Palindromic Substrings (count all)", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Longest Palindrome (by chars)", companies: ["Amazon", "Google"] },
      { difficulty: "E", name: "Valid Palindrome", companies: ["Meta", "Microsoft", "Amazon"] },
      { difficulty: "M", name: "Implement strStr() / KMP", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Repeated Substring Pattern", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Shortest Palindrome (KMP)", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Longest Duplicate Substring (Rabin-Karp)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "String to Integer (atoi)", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "E", name: "Reverse String", companies: ["Amazon", "Microsoft", "Adobe"] },
      { difficulty: "E", name: "Reverse Words in a String III", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Reverse Words in a String", companies: ["Amazon", "Microsoft", "Apple"] },
      { difficulty: "M", name: "Group Anagrams", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "E", name: "Valid Anagram", companies: ["Amazon", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "Longest Common Prefix", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Encode and Decode Strings", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Minimum Window Substring", companies: ["Amazon", "Google", "Meta", "Microsoft"] },
      { difficulty: "M", name: "Find All Anagrams in a String", companies: ["Amazon", "Google", "Uber"] },
      { difficulty: "M", name: "Permutation in String", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "H", name: "Regex Matching (DP+String)", companies: ["Google", "Amazon", "Microsoft"] },
      { difficulty: "H", name: "Wildcard Matching", companies: ["Google", "Amazon", "Microsoft"] },
      { difficulty: "M", name: "Count and Say", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Decode String", companies: ["Google", "Amazon", "Bloomberg"] },
      { difficulty: "M", name: "Zigzag Conversion", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "M", name: "Multiply Strings", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "H", name: "Text Justification", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Compare Version Numbers", companies: ["Amazon", "Microsoft"] },
      { difficulty: "E", name: "Longest Common Subsequence (string)", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Isomorphic Strings", companies: ["Amazon", "LinkedIn"] },
      { difficulty: "M", name: "Word Pattern", companies: ["Uber", "Amazon"] },
      { difficulty: "H", name: "Palindrome Pairs (Trie+String)", companies: ["Amazon", "Google", "Bloomberg"] }
    ]
  },
  {
    id: "17",
    name: "Math & Number Theory",
    coreRule: "Divisibility → GCD/LCM | Primes → Sieve | Bits → XOR/AND tricks | Overflow → modular arithmetic",
    subPatterns: [
      {
        name: "Number Theory",
        points: ["GCD / LCM (Euclidean algorithm)", "Prime checking / Sieve of Eratosthenes", "Prime factorization"]
      },
      {
        name: "Combinatorics",
        points: ["nCr with modular inverse", "Pascal's triangle", "Catalan numbers", "Modular arithmetic & inverse", "Permutation counting"]
      },
      {
        name: "Bit Manipulation",
        points: ["XOR tricks (find missing/duplicate)", "AND/OR masking", "Bit counting (popcount)"]
      },
      {
        name: "Math Tricks",
        points: ["Fast exponentiation (Pow in O(log n))", "Digit DP / digit sum", "Geometry (area, distance)", "Power of 2 checks"]
      }
    ],
    keywords: [
      "Find GCD / LCM → Euclidean algorithm",
      "All primes up to N → Sieve of Eratosthenes",
      "Find missing / duplicate with no extra space → XOR",
      "Count set bits / check power of 2 → Bit Manipulation",
      "Large powers / factorials mod M → Fast Exponentiation + Modular Inverse",
      "Combinations nCr mod prime → Lucas / Fermat's little theorem",
      "Digit-by-digit problems → Digit DP"
    ],
    confusionZone: [
      { trigger: "Find missing number", pattern: "XOR or Math sum formula" },
      { trigger: "All primes to N", pattern: "Sieve (not trial division)" },
      { trigger: "Power x^n", pattern: "Fast Expo O(log n), not O(n)" },
      { trigger: "Count set bits", pattern: "Brian Kernighan or popcount" },
      { trigger: "Large nCr mod p", pattern: "Modular inverse + Fermat" }
    ],
    questions: [
      { isMastery: true, difficulty: "E", name: "Number of 1 Bits", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/number-of-1-bits/" },
      { isMastery: true, difficulty: "E", name: "Reverse Bits", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/reverse-bits/" },
      { isMastery: true, difficulty: "E", name: "Power of Two", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/power-of-two/" },
      { isMastery: true, difficulty: "E", name: "Palindrome Number", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/palindrome-number/" },
      { isMastery: true, difficulty: "E", name: "Excel Sheet Column Number", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/excel-sheet-column-number/" },
      { isMastery: true, difficulty: "E", name: "Add Binary", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/add-binary/" },
      { isMastery: true, difficulty: "E", name: "Hamming Distance", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/hamming-distance/" },
      { isMastery: true, difficulty: "E", name: "Binary Number with Alternating Bits", companies: ["Amazon"], link: "https://leetcode.com/problems/binary-number-with-alternating-bits/" },
      { isMastery: true, difficulty: "E", name: "Prime Number of Set Bits in Binary Representation", companies: ["Amazon"], link: "https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/" },
      { isMastery: true, difficulty: "E", name: "Counting Bits (Mastery Edition)", companies: ["Amazon"], link: "https://leetcode.com/problems/counting-bits/" },
      { difficulty: "E", name: "Single Number (XOR)", companies: ["Amazon", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "Single Number II", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Single Number III", companies: ["Amazon", "Bloomberg"] },
      { difficulty: "E", name: "Number of 1 Bits (popcount)", companies: ["Amazon", "Microsoft"] },
      { difficulty: "E", name: "Reverse Bits", companies: ["Amazon", "Microsoft"] },
      { difficulty: "E", name: "Power of Two", companies: ["Amazon", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "Counting Bits", companies: ["Amazon", "Microsoft", "Google"] },
      { difficulty: "M", name: "Sum of Two Integers (no +)", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Bitwise AND of Numbers Range", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Missing Number (XOR/math)", companies: ["Amazon", "Google", "Microsoft", "Adobe"] },
      { difficulty: "M", name: "Pow(x, n) — Fast Expo", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Sqrt(x) — Newton's method", companies: ["Amazon", "Microsoft"] },
      { difficulty: "E", name: "Palindrome Number", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Excel Sheet Column Number", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Happy Number", companies: ["Amazon", "Google", "Adobe"] },
      { difficulty: "M", name: "Count Primes — Sieve", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "GCD of Strings", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Ugly Number II — Min Heap / Math", companies: ["Amazon", "Microsoft"] },
      { difficulty: "M", name: "Super Ugly Number", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Largest Number (custom sort)", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "H", name: "Maximum XOR of Two Numbers in Array", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "XOR Queries of a Subarray", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Find the Difference (XOR)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Total Hamming Distance", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Number of Valid Words for Each Puzzle (Bitmask)", companies: ["Amazon", "Google"] },
      { difficulty: "M", name: "Divide Two Integers (no * or /)", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Fraction to Recurring Decimal", companies: ["Amazon", "Google", "Bloomberg"] },
      { difficulty: "M", name: "Factorial Trailing Zeroes", companies: ["Amazon", "Google", "Microsoft"] },
      { difficulty: "M", name: "Perfect Squares (BFS/Math)", companies: ["Amazon", "Google"] },
      { difficulty: "H", name: "Integer to English Words", companies: ["Amazon", "Microsoft", "Bloomberg"] },
      { difficulty: "M", name: "Random Pick with Weight", companies: ["Amazon", "Google"] }
    ]
  }
];
