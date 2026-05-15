// ─── Two Pointers — Question Data ─────────────────────────────────────────
// All questions from 2pointer.py — currently showing Q1 & Q2

export const patternOverview = {
  title: "TWO POINTERS",
  subtitle: "Complete Pattern Notes — LeetCode Questions",
  description:
    "Two Pointers = do pointer variables jo ek hi array/string par kaam karte hain. Isse O(n²) brute-force ko O(n) mai convert kar sakte ho.",
  whenToUse: [
    "Array/String sorted ho ya sorting se help milti ho",
    "Pair / triplet / subarray dhundhna ho with some condition",
    "In-place modification chahiye (remove duplicates, move zeroes)",
    "Palindrome check karna ho",
  ],
  types: [
    {
      name: "Opposite Ends",
      desc: "left=0, right=n-1  →  sorted array pe pair dhundhna",
      time: "O(n)",
      space: "O(1)",
      key: "Move toward center till they meet",
    },
    {
      name: "Same Direction",
      desc: "slow & fast pointer  →  duplicates remove, partition",
      time: "O(n)",
      space: "O(1)",
      key: "Fast reads, slow writes",
    },
    {
      name: "Two Arrays",
      desc: "ek pointer har array mai  →  merge-style",
      time: "O(n)",
      space: "O(1)",
      key: "Fix one + Two Ptr",
    },
  ],
};

export const questions = [
  // ─── Q1: Two Sum II ───────────────────────────────────────────────────────
  {
    id: "q1",
    num: "Q1",
    difficulty: "Easy",
    title: "Two Sum II — Input Array Is Sorted",
    leetcode: "LeetCode #167",
    companies: ["Amazon", "Google"],
    pattern: "Opposite Ends",

    problem: `Given a **1-indexed** array of integers \`numbers\` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific \`target\` number.

Return the indices of the two numbers **(1-indexed)** as an integer array \`[index1, index2]\`.

- You may **not** use the same element twice.
- There is **exactly one solution**.`,

    functionSig: "def twoSum(self, numbers: List[int], target: int) -> List[int]:",

    testCases: [
      {
        input: "numbers = [2, 7, 11, 15],  target = 9",
        output: "[1, 2]",
        note: "2 + 7 = 9",
      },
      {
        input: "numbers = [2, 3, 4],  target = 6",
        output: "[1, 3]",
        note: "2 + 4 = 6",
      },
      {
        input: "numbers = [-1, 0],  target = -1",
        output: "[1, 2]",
        note: "-1 + 0 = -1",
      },
    ],

    concept: [
      "Array **SORTED** hai, isliye **Opposite Ends Two Pointer** use karenge.",
      "`left = 0` (chhota end), `right = n-1` (bada end). Sum check karo:",
      "  → `sum < target`  :  **left++**  (bada element chahiye)",
      "  → `sum > target`  :  **right--** (chhota element chahiye)",
      "  → `sum == target` :  **Answer mil gaya! 🎯**",
      "Kyun kaam karta hai? Array sorted hai, toh left badhane se sum badhega aur right ghatane se sum ghatega.",
    ],

    dryRun: {
      input: "numbers = [2, 7, 11, 15],  target = 9",
      headers: ["Step", "Pointers / State", "Action / Result"],
      rows: [
        ["Init",  "L=0 (val=2),  R=3 (val=15),  target=9", "Start"],
        ["Step 1","L=0 (val=2),  R=3 (val=15),  sum=17 > 9","R-- → R=2"],
        ["Step 2","L=0 (val=2),  R=2 (val=11),  sum=13 > 9","R-- → R=1"],
        ["Step 3","L=0 (val=2),  R=1 (val=7),   sum=9 == 9","return [1, 2] ✓"],
      ],
    },

    code: `def twoSum(self, numbers: List[int], target: int) -> List[int]:
    # Opposite ends pointers
    left, right = 0, len(numbers) - 1

    while left < right:
        curr_sum = numbers[left] + numbers[right]

        if curr_sum == target:
            # 1-indexed answer return karo
            return [left + 1, right + 1]

        elif curr_sum < target:
            left += 1    # sum badana hai → left aage badho

        else:
            right -= 1   # sum ghatana hai → right peeche aao

    return []  # guaranteed solution hogi, yahan nahi pahunchenge`,

    complexity: { time: "O(n)", space: "O(1)" },

    importantNotes: [
      "Array sorted hona MUST hai — tabhi opposite ends kaam karta hai.",
      "1-indexed answer return karna hai (left+1, right+1), 0-indexed nahi.",
      "Same element twice use nahi kar sakte (left < right condition ensure karta hai).",
      "Exactly one solution guaranteed hai — empty return sirf safety ke liye hai.",
    ],
  },

  // ─── Q2: Container With Most Water ───────────────────────────────────────
  {
    id: "q2",
    num: "Q2",
    difficulty: "Medium",
    title: "Container With Most Water",
    leetcode: "LeetCode #11",
    companies: ["Amazon", "Google", "Meta"],
    pattern: "Opposite Ends",

    problem: `Given \`n\` non-negative integers \`height[i]\` representing bars of a histogram, find two bars that together with the x-axis form a **container** with maximum water.

Return the **maximum amount of water** a container can store.

**Note:** You cannot slant the container.`,

    functionSig: "def maxArea(self, height: List[int]) -> int:",

    testCases: [
      {
        input: "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
        output: "49",
        note: "bars 8 and 7, width = 7  →  7 × 7 = 49",
      },
      {
        input: "height = [1, 1]",
        output: "1",
        note: "width=1, height=min(1,1)=1",
      },
    ],

    concept: [
      "**Area** = `min(height[L], height[R])  ×  (R - L)`",
      "**Greedy insight:** Chhotee height wali side move karo — badi wali side rakhne se width ghata but height improve ho sakti hai.",
      "  → `height[L] < height[R]`  :  **left++**  (left limit kar raha hai)",
      "  → `height[R] <= height[L]` :  **right--** (right limit kar raha hai)",
      "**Kyun?** Agar chhoti side nahi badhate, toh width ghati aur height same rahegi → area aur chota hoga. Isliye chhotee wali side move karna hi rational hai.",
    ],

    dryRun: {
      input: "height = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
      headers: ["Step", "Pointers / State", "Action / Result"],
      rows: [
        ["Init",  "L=0(h=1), R=8(h=7), width=8", "area=min(1,7)×8=8,  max=8"],
        ["Step 1","L=1(h=8), R=8(h=7), width=7", "h[0]<h[8] → L moved; area=7×7=49, max=49"],
        ["Step 2","L=1(h=8), R=7(h=3), width=6", "h[8]<h[1] → R moved; area=3×6=18, max=49"],
        ["Step 3","L=1(h=8), R=6(h=8), width=5", "equal → R--; area=8×5=40, max=49"],
        ["...",   "continue till L >= R",          "Final answer = 49 ✓"],
      ],
    },

    code: `def maxArea(self, height: List[int]) -> int:
    left, right = 0, len(height) - 1
    max_water = 0

    while left < right:
        # Width aur height calculate karo
        width  = right - left
        h      = min(height[left], height[right])
        area   = width * h

        # Maximum update karo
        max_water = max(max_water, area)

        # Chhotee height wali taraf move karo (greedy)
        if height[left] < height[right]:
            left += 1    # left chhota hai → use improve karne ki koshish
        else:
            right -= 1   # right chhota/equal hai → use improve karo

    return max_water`,

    complexity: { time: "O(n)", space: "O(1)" },

    importantNotes: [
      "Array sorted NAHI hona chahiye — ye greedy approach kisi bhi array pe kaam karti hai.",
      "Chhotee height ko move karna key insight hai — badi rakhne ka koi fayda nahi (width to ghategii).",
      "Equal height pe kuch bhi move kar sakte ho (dono try karke same result milega).",
      "Brute force O(n²) hota — do nested loops se sab pairs check karo. Two pointer ne isse O(n) banaya.",
    ],
  },
];
