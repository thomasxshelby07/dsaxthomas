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
      diff: "easy", // easy, medium, hard
      title: "Two Sum II — Input Array Is Sorted",
      companies: ["Amazon", "Google"],
      lcLink: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      lcNum: "LeetCode #167",
      problem: [
        "Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,",
        "find two numbers such that they add up to a specific target number.",
        "Return the indices of the two numbers (1-indexed) as an integer array [index1, index2].",
        "You may not use the same element twice. There is exactly one solution."
      ],
      testCases: [
        { input: "numbers = [2,7,11,15], target = 9", output: "[1, 2]", note: "2+7=9" },
        { input: "numbers = [2,3,4], target = 6", output: "[1, 3]", note: "2+4=6" },
        { input: "numbers = [-1,0], target = -1", output: "[1, 2]", note: "-1+0=-1" }
      ],
      concept: [
        "Array SORTED hai, isliye Opposite Ends Two Pointer use karenge.",
        "left=0 (chhota), right=n-1 (bada). Sum check karo:",
        "  sum < target  →  left++  (bada element chahiye)",
        "  sum > target  →  right-- (chhota element chahiye)",
        "  sum == target →  answer mil gaya!"
      ],
      dryRun: [
        { step: "Init", state: "L=0 (val=2), R=3 (val=15), target=9", action: "Start" },
        { step: "Step 1", state: "L=0 (val=2), R=3 (val=15), sum=17>9", action: "R-- → R=2" },
        { step: "Step 2", state: "L=0 (val=2), R=2 (val=11), sum=13>9", action: "R-- → R=1" },
        { step: "Step 3", state: "L=0 (val=2), R=1 (val=7), sum=9==9", action: "return [1,2] ✓" }
      ],
      code: `def twoSum(self, numbers: List[int], target: int) -> List[int]:
    left, right = 0, len(numbers) - 1
    
    while left < right:
        curr_sum = numbers[left] + numbers[right]
        
        if curr_sum == target:
            return [left + 1, right + 1]  # 1-indexed
        elif curr_sum < target:
            left += 1   # sum badana hai
        else:
            right -= 1  # sum ghatana hai
            
    return []  # guaranteed solution, yahan nahi pahunchenge`,
      timeComp: "O(n)",
      spaceComp: "O(1)",
      note: "Important: Array is 1-indexed, so we return [left + 1, right + 1]"
    },
    {
      num: "Q2",
      diff: "medium",
      title: "Container With Most Water",
      companies: ["Amazon", "Google", "Meta"],
      lcLink: "https://leetcode.com/problems/container-with-most-water/",
      lcNum: "LeetCode #11",
      problem: [
        "Given n non-negative integers height[i] representing bars of a histogram,",
        "find two bars that together with the x-axis form a container with maximum water.",
        "Return the maximum amount of water a container can store."
      ],
      testCases: [
        { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", note: "bars 8 and 7, width=7" },
        { input: "height = [1,1]", output: "1", note: "width=1, height=1" }
      ],
      concept: [
        "Area = min(height[L], height[R]) * (R - L)",
        "Greedy insight: Chhotee height wali side move karo.",
        "  Agar left < right → left++ (left side limit kar rahi hai)",
        "  Agar right < left → right-- (right side limit kar rahi hai)",
        "Why? Badi wali side rakhe raho; chhotee change karke hi improvement possible hai."
      ],
      dryRun: [
        { step: "Init", state: "L=0(h=1), R=8(h=7), w=8", action: "area=min(1,7)*8=8, max=8" },
        { step: "Step 1", state: "L=1(h=8), R=8(h=7), w=7", action: "L moved (h[0]<h[8]); area=7*7=49, max=49" },
        { step: "Step 2", state: "L=1(h=8), R=7(h=3), w=6", action: "R moved (h[8]<h[1]); area=3*6=18, max=49" },
        { step: "...", state: "continue till L>=R", action: "Final ans = 49 ✓" }
      ],
      code: `def maxArea(self, height: List[int]) -> int:
    left, right = 0, len(height) - 1
    max_water = 0
    
    while left < right:
        # width * min height
        width = right - left
        h = min(height[left], height[right])
        area = width * h
        max_water = max(max_water, area)
        
        # Chhotee height wali taraf move karo
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
            
    return max_water`,
      timeComp: "O(n)",
      spaceComp: "O(1)",
      note: "Greedy Approach: Start with maximum width and only sacrifice width if we might find a taller line to compensate."
    }
  ]
};
