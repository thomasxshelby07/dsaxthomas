export const twoPointersData = {
  title: "Two Pointers",
  overview: [
    "Two Pointers = do pointer variables jo ek hi array/string par kaam karte hain.",
    "Isse O(n²) brute-force ko O(n) mai convert kar sakte ho."
  ],
  whenToUse: [
    "Array/String sorted ho ya sorting se help milti ho",
    "Pair / triplet / subarray dhundhna ho with some condition",
    "In-place modification chahiye (remove duplicates, move zeroes)",
    "Palindrome check karna ho"
  ],
  types: [
    "Opposite ends → left=0, right=n-1 (sorted array pe pair dhundhna)",
    "Same direction → slow & fast pointer (duplicates remove, partition)",
    "Two arrays → ek pointer har array mai (merge-style)"
  ],
  questions: [
    {
      num: "Q1",
      diff: "easy",
      title: "Reverse String",
      companies: ["Amazon", "Google", "Apple", "Adobe"],
      lcLink: "https://leetcode.com/problems/reverse-string/",
      lcNum: "LeetCode #344",
      problem: [
        "Write a function that reverses a string. The input string is given as an array of characters `s`.",
        "You must do this by modifying the input array in-place with O(1) extra memory."
      ],
      testCases: [
        { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]', note: "swap in-place" }
      ],
      concept: [
        "<strong>Two Pointers:</strong> Ek pointer starting index `left=0` par aur dusra pointer ending index `right=len(s)-1` par hoga.",
        "• Jab tak `left < right` hai, hum dono positions ke elements ko in-place swap karenge.",
        "• Swap karne ke baad, `left` pointer ko aage badhaenge (`left++`) aur `right` pointer ko peeche laenge (`right--`)."
      ],
      dryRun: [
        {
          step: "Pointers Placement",
          state: "left=0 ('h'), right=4 ('o') | s=['h','e','l','l','o']",
          action: "s[0] aur s[4] ko swap karo. left++, right--"
        },
        {
          step: "Swapping Middle",
          state: "left=1 ('e'), right=3 ('l') | s=['o','e','l','l','h']",
          action: "s[1] aur s[3] ko swap karo. left++, right--"
        },
        {
          step: "Meet in Middle",
          state: "left=2 ('l'), right=2 ('l') | s=['o','l','l','e','h']",
          action: "left < right false ho gayi. Loop finished!"
        }
      ],
      code: `def reverseString(self, s: List[str]) -> None:
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1`,
      timeComp: "O(n)",
      spaceComp: "O(1)",
      note: "• **Interview Pro-Tip:** Swapping tab tak hi chalni chahiye jab tak pointers meet nahi karte (`left < right`). Agar loop `left <= right` tak chalaya toh center element khud se swap ho jayega, jo redundant hai."
    },
    {
      num: "Q2",
      diff: "easy",
      title: "Two Sum II — Sorted Array",
      companies: ["Amazon", "Google"],
      lcLink: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      lcNum: "LeetCode #167",
      problem: [
        "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,",
        "find two numbers such that they add up to a specific target number.",
        "Return the indices of the two numbers (1-indexed) as an integer array [index1, index2]."
      ],
      testCases: [
        { input: "numbers = [2,7,11,15], target = 9", output: "[1, 2]", note: "2+7=9" }
      ],
      concept: [
        "<strong>Core Idea:</strong> Since the array is sorted, we use two pointers starting from opposite ends to find the pair.",
        "• If <code>Sum > Target</code>: We need a smaller sum, so move <code>Right--</code>.",
        "• If <code>Sum < Target</code>: We need a larger sum, so move <code>Left++</code>."
      ],
      dryRun: [
        { 
          step: "Initial", 
          state: "[2, 7, 11, 15] | L=0 (2), R=3 (15)", 
          action: "Sum = 2+15 = 17. Target=9. (17 > 9) → R--" 
        },
        { 
          step: "Iteration 1", 
          state: "[2, 7, 11, 15] | L=0 (2), R=2 (11)", 
          action: "Sum = 2+11 = 13. Target=9. (13 > 9) → R--" 
        },
        { 
          step: "Iteration 2", 
          state: "[2, 7, 11, 15] | L=0 (2), R=1 (7)", 
          action: "Sum = 2+7 = 9. Target=9. Found! Return indices [1, 2]" 
        }
      ],
      code: `def twoSum(self, numbers: List[int], target: int) -> List[int]:
    left, right = 0, len(numbers) - 1
    while left < right:
        curr = numbers[left] + numbers[right]
        if curr == target:
            return [left + 1, right + 1] # 1-indexed
        elif curr < target:
            left += 1
        else:
            right -= 1
    return []`,
      timeComp: "O(n)",
      spaceComp: "O(1)",
      note: "The sorted property is key. We never visit a pair more than once."
    },
    {
      num: "Q3",
      diff: "medium",
      title: "Container With Most Water",
      companies: ["Amazon", "Google", "Meta"],
      lcLink: "https://leetcode.com/problems/container-with-most-water/",
      lcNum: "LeetCode #11",
      problem: [
        "Find two bars that together with the x-axis form a container with maximum water.",
        "Return the maximum amount of water a container can store."
      ],
      testCases: [
        { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }
      ],
      concept: [
        "<strong>Greedy Logic:</strong> The area is limited by the shorter bar. To find a larger area, we must move the pointer at the shorter bar.",
        "• <code>Area = (Right - Left) * min(h[Left], h[Right])</code>",
        "• Moving the taller bar won't help because the width decreases and the height is still limited by the original shorter bar."
      ],
      dryRun: [
        { 
          step: "Start", 
          state: "L=0 (h:1), R=8 (h:7), W=8", 
          action: "Area = 8 * min(1, 7) = 8. Max=8. h[L] (1) < h[R] (7) → L++" 
        },
        { 
          step: "Move L", 
          state: "L=1 (h:8), R=8 (h:7), W=7", 
          action: "Area = 7 * min(8, 7) = 49. Max=49. h[R] (7) < h[L] (8) → R--" 
        },
        { 
          step: "Move R", 
          state: "L=1 (h:8), R=7 (h:3), W=6", 
          action: "Area = 6 * min(8, 3) = 18. Max=49. h[R] (3) < h[L] (8) → R--" 
        }
      ],
      code: `def maxArea(self, height: List[int]) -> int:
    l, r = 0, len(height) - 1
    max_w = 0
    while l < r:
        # Calculate current area
        area = (r - l) * min(height[l], height[r])
        max_w = max(max_w, area)
        
        # Greedy move: move the shorter side
        if height[l] < height[r]:
            l += 1
        else:
            r -= 1
    return max_w`,
      timeComp: "O(n)",
      spaceComp: "O(1)",
      note: "Moving the shorter side is the only way to potentially increase height enough to offset the decreasing width."
    },
    {
      num: "Q4",
      diff: "medium",
      title: "3Sum",
      companies: ["Google", "Amazon", "Meta", "Microsoft"],
      lcLink: "https://leetcode.com/problems/3sum/",
      lcNum: "LeetCode #15",
      problem: [
        "Return all unique triplets [nums[i], nums[j], nums[k]] such that their sum is 0."
      ],
      testCases: [
        { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }
      ],
      concept: [
        "<strong>Approach:</strong>",
        "1. <b>Sort</b> the array (essential for two-pointer search).",
        "2. Iterate with pointer <code>i</code>. Fix <code>nums[i]</code>.",
        "3. Search for <code>nums[l] + nums[r] = -nums[i]</code> using Two Pointers.",
        "4. <b>De-duplication:</b> Skip the same values for <code>i</code>, <code>l</code>, and <code>r</code> to avoid duplicate triplets."
      ],
      dryRun: [
        { 
          step: "Sort", 
          state: "Input: [-1,0,1,2,-1,-4] → Sorted: [-4, -1, -1, 0, 1, 2]", 
          action: "Ready for iteration" 
        },
        { 
          step: "i=0 (-4)", 
          state: "L=1 (-1), R=5 (2)", 
          action: "Sum = -4-1+2 = -3 (<0) → L++. (L=2: -1 again, skip? No, first time L=2)" 
        },
        { 
          step: "i=1 (-1)", 
          state: "L=2 (-1), R=5 (2)", 
          action: "Sum = -1-1+2 = 0. Found! [-1,-1,2]. Move L, R and skip duplicates." 
        }
      ],
      code: `def threeSum(self, nums: List[int]) -> List[List[int]]:
    nums.sort()
    res = []
    for i in range(len(nums)):
        # Avoid duplicate 'i'
        if i > 0 and nums[i] == nums[i-1]: continue
        
        l, r = i + 1, len(nums) - 1
        while l < r:
            total = nums[i] + nums[l] + nums[r]
            if total == 0:
                res.append([nums[i], nums[l], nums[r]])
                # Avoid duplicate 'l' and 'r'
                while l < r and nums[l] == nums[l+1]: l += 1
                while l < r and nums[r] == nums[r-1]: r -= 1
                l += 1; r -= 1
            elif total < 0:
                l += 1
            else:
                r -= 1
    return res`,
      timeComp: "O(n²)",
      spaceComp: "O(n) (sorting space)",
      note: "Sorting takes O(n log n), while nested search takes O(n²)."
    },
    {
      num: "Q5",
      diff: "medium",
      title: "3Sum Closest",
      companies: ["Amazon", "Bloomberg"],
      lcLink: "https://leetcode.com/problems/3sum-closest/",
      lcNum: "LeetCode #16",
      problem: [
        "Given an array nums and a target, find three integers in nums such that the sum is closest to target.",
        "Return the sum of the three integers."
      ],
      testCases: [
        { input: "nums = [-1,2,1,-4], target = 1", output: "2", note: "(-1 + 2 + 1 = 2)" }
      ],
      concept: [
        "<strong>Approach:</strong>",
        "1. Sort the array to use two pointers efficiently.",
        "2. Iterate with <code>i</code>, use <code>l</code> and <code>r</code> to find triplets.",
        "3. Track the sum whose <code>abs(target - sum)</code> is minimal."
      ],
      dryRun: [
        { 
          step: "Initial", 
          state: "Sorted: [-4, -1, 1, 2], Target: 1", 
          action: "i=0 (-4), L=1 (-1), R=3 (2). Sum = -3. Diff = |1 - (-3)| = 4." 
        },
        { 
          step: "Update", 
          state: "Closest Sum: -3", 
          action: "Sum < Target → L++" 
        },
        { 
          step: "Next i", 
          state: "i=1 (-1), L=2 (1), R=3 (2)", 
          action: "Sum = -1+1+2 = 2. Diff = |1 - 2| = 1. New Closest: 2." 
        }
      ],
      code: `def threeSumClosest(self, nums: List[int], target: int) -> int:
    nums.sort()
    closest = float('inf')
    for i in range(len(nums)):
        l, r = i + 1, len(nums) - 1
        while l < r:
            curr_sum = nums[i] + nums[l] + nums[r]
            # If current sum is closer, update closest
            if abs(target - curr_sum) < abs(target - closest):
                closest = curr_sum
            
            if curr_sum < target:
                l += 1
            elif curr_sum > target:
                r -= 1
            else:
                return target # Perfect match
    return closest`,
      timeComp: "O(n²)",
      spaceComp: "O(1)",
      note: "Early exit if sum equals target is a great optimization."
    },
    {
      num: "Q6",
      diff: "medium",
      title: "4Sum",
      companies: ["Amazon", "Microsoft"],
      lcLink: "https://leetcode.com/problems/4sum/",
      lcNum: "LeetCode #18",
      problem: [
        "Return all unique quadruplets [nums[a], nums[b], nums[c], nums[d]] that sum to target."
      ],
      testCases: [
        { input: "nums = [1,0,-1,0,-2,2], target = 0", output: "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]" }
      ],
      concept: [
        "<strong>Approach:</strong>",
        "1. Sort the array.",
        "2. Use <b>Two Nested Loops</b> to fix the first two numbers (<code>i</code> and <code>j</code>).",
        "3. Use <b>Two Pointers</b> (<code>l</code> and <code>r</code>) for the remaining two.",
        "4. Skip duplicates at every level to ensure unique quadruplets."
      ],
      dryRun: [
        { 
          step: "Logic", 
          state: "Fixed i, Fixed j → Search for target - (nums[i] + nums[j])", 
          action: "Reduces O(n⁴) to O(n³)" 
        }
      ],
      code: `def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
    nums.sort()
    res = []
    n = len(nums)
    for i in range(n):
        if i > 0 and nums[i] == nums[i-1]: continue # Skip duplicate i
        for j in range(i + 1, n):
            if j > i + 1 and nums[j] == nums[j-1]: continue # Skip duplicate j
            
            l, r = j + 1, n - 1
            while l < r:
                curr = nums[i] + nums[j] + nums[l] + nums[r]
                if curr == target:
                    res.append([nums[i], nums[j], nums[l], nums[r]])
                    while l < r and nums[l] == nums[l+1]: l += 1
                    while l < r and nums[r] == nums[r-1]: r -= 1
                    l += 1; r -= 1
                elif curr < target: l += 1
                else: r -= 1
    return res`,
      timeComp: "O(n³)",
      spaceComp: "O(n)",
      note: "The O(n³) complexity is optimal for this problem."
    },
    {
      num: "Q7",
      diff: "easy",
      title: "Valid Palindrome",
      companies: ["Meta", "Microsoft", "Amazon"],
      lcLink: "https://leetcode.com/problems/valid-palindrome/",
      lcNum: "LeetCode #125",
      problem: [
        "Check if a string is a palindrome after removing non-alphanumeric chars and ignoring case."
      ],
      testCases: [
        { input: "s = 'A man, a plan, a canal: Panama'", output: "true" }
      ],
      concept: [
        "<strong>Approach:</strong>",
        "1. Start pointers at <code>0</code> and <code>n-1</code>.",
        "2. Skip non-alphanumeric characters (like spaces or punctuation).",
        "3. Compare characters after converting to lowercase.",
        "4. If they mismatch, return <code>False</code>."
      ],
      dryRun: [
        { 
          step: "Start", 
          state: "'A man, a plan...'", 
          action: "L=0 ('A'), R=n-1 ('a'). Match? Yes (a=a)." 
        },
        { 
          step: "Skip", 
          state: "L moves to 'm', R moves to 'm' (skips space/punctuation)", 
          action: "Match? Yes. Continue..." 
        }
      ],
      code: `def isPalindrome(self, s: str) -> bool:
    l, r = 0, len(s) - 1
    while l < r:
        # Move pointers while not alphanumeric
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        
        if s[l].lower() != s[r].lower():
            return False
        l += 1; r -= 1
    return True`,
      timeComp: "O(n)",
      spaceComp: "O(1)",
      note: "The <code>isalnum()</code> method is very useful for cleaning input on-the-fly."
    },
    {
      num: "Q8",
      diff: "easy",
      title: "Valid Palindrome II",
      companies: ["Meta", "Google"],
      lcLink: "https://leetcode.com/problems/valid-palindrome-ii/",
      lcNum: "LeetCode #680",
      problem: [
        "Return true if the string s can be palindrome after deleting at most one character."
      ],
      testCases: [
        { input: "s = 'abca'", output: "true", note: "Delete 'b' or 'c'" }
      ],
      concept: [
        "<strong>Logic:</strong>",
        "We use standard Two Pointers. If we find a mismatch at <code>(L, R)</code>, we have two choices:",
        "1. Skip <code>L</code> and check if <code>s[L+1 ... R]</code> is a palindrome.",
        "2. Skip <code>R</code> and check if <code>s[L ... R-1]</code> is a palindrome.",
        "If either is True, return True."
      ],
      dryRun: [
        { 
          step: "Start", 
          state: "'abca' | L=0 (a), R=3 (a)", 
          action: "Match. L++, R--" 
        },
        { 
          step: "Mismatch", 
          state: "L=1 (b), R=2 (c)", 
          action: "Mismatch! Check 'c' (Skip L) or 'b' (Skip R). Both are palindromes. Return True." 
        }
      ],
      code: `def validPalindrome(self, s: str) -> bool:
    def check(l, r):
        while l < r:
            if s[l] != s[r]: return False
            l += 1; r -= 1
        return True
    
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            # Try skipping left OR skipping right
            return check(l + 1, r) or check(l, r - 1)
        l += 1; r -= 1
    return True`,
      timeComp: "O(n)",
      spaceComp: "O(1)",
      note: "Checking two substrings adds O(n) + O(n), which is still O(n)."
    },
    {
      num: "Q9",
      diff: "hard",
      title: "Trapping Rain Water",
      companies: ["Google", "Amazon", "Microsoft", "Meta"],
      lcLink: "https://leetcode.com/problems/trapping-rain-water/",
      lcNum: "LeetCode #42",
      problem: [
        "Given n non-negative integers representing an elevation map, compute how much water it can trap after raining."
      ],
      testCases: [
        { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6" }
      ],
      concept: [
        "<strong>Optimization:</strong> Instead of calculating <code>l_max</code> and <code>r_max</code> for every index using extra space, we use two pointers to calculate water trapped 'in-place'.",
        "• We move the pointer with the smaller current height because it limits the water level.",
        "• <code>Water at index = max_seen_so_far - current_height</code>."
      ],
      dryRun: [
        { 
          step: "Start", 
          state: "[0,1,0,2] | L=0 (h:0), R=3 (h:2), l_max=0, r_max=0", 
          action: "h[L] < h[R]. Update l_max=0. res=0. L++" 
        },
        { 
          step: "Step 1", 
          state: "L=1 (h:1), R=3 (h:2), l_max=0", 
          action: "h[L] > l_max. Update l_max=1. res=0. L++" 
        },
        { 
          step: "Step 2", 
          state: "L=2 (h:0), R=3 (h:2), l_max=1", 
          action: "h[L] < l_max. res += (1 - 0) = 1. L++" 
        }
      ],
      code: `def trap(self, height: List[int]) -> int:
    if not height: return 0
    l, r = 0, len(height) - 1
    l_max, r_max = 0, 0
    res = 0
    
    while l < r:
        # We only care about the smaller boundary
        if height[l] < height[r]:
            if height[l] >= l_max:
                l_max = height[l]
            else:
                res += l_max - height[l]
            l += 1
        else:
            if height[r] >= r_max:
                r_max = height[r]
            else:
                res += r_max - height[r]
            r -= 1
    return res`,
      timeComp: "O(n)",
      spaceComp: "O(1)",
      note: "The two-pointer logic effectively maintains the minimum of the two outer walls for every inner index."
    }
  ]
};
