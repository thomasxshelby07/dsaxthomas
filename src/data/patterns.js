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
            type: "Brute Force",
            concept: "Array ke dono ends se characters ko swap karte huye middle ki taraf aao. Isse bina extra memory ke string reverse ho jayegi.",
            code: `def reverseString(s):
    # Python slicing is O(N) space
    res = s[::-1]
    for i in range(len(s)):
        s[i] = res[i]`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Dono pointers ko swap karo aur ek-ek step andar move karo. Yeh O(1) space ka best tarika hai.",
            code: `def reverseString(s):
    l, r = 0, len(s) - 1
    while l < r:
        # Swap in-place
        s[l], s[r] = s[r], s[l]
        l += 1
        r -= 1`,
            dryRun: [
              "**Step 1: Start**<br>• **State:** s=['h','e','l','l','o'], L=0 ('h'), R=4 ('o')<br>• **Action:** Swap s[0] and s[4]. Move L to 1, R to 3.<br>• **Result:** s=['o','e','l','l','h']",
              "**Step 2: Middle Swap**<br>• **State:** s=['o','e','l','l','h'], L=1 ('e'), R=3 ('l')<br>• **Action:** Swap s[1] and s[3]. Move L to 2, R to 2.<br>• **Result:** s=['o','l','l','e','h']",
              "**Step 3: Finish**<br>• **State:** L=2, R=2<br>• **Action:** L is no longer < R. Stop loop.<br>• **Result:** Final reversed array: ['o','l','l','e','h']"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Interview Tip:** In-place modification ke liye hamesha **Two Pointer** technique standard hai. Space efficiency (O(1)) iski sabse badi strength hai."
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
            type: "Brute Force",
            concept: "String se saare vowels nikal kar ek list mein rakho, use reverse karo, aur fir wapas string mein bhar do.",
            code: `def reverseVowels(s):
    vowels = "aeiouAEIOU"
    extracted = [c for c in s if c in vowels]
    extracted.reverse()
    
    res = list(s)
    idx = 0
    for i in range(len(res)):
        if res[i] in vowels:
            res[i] = extracted[idx]
            idx += 1
    return "".join(res)`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Dono ends se pointers chalao. Jab dono pointers kisi vowel par rukein, tab unhe swap kardo.",
            code: `def reverseVowels(s):
    s = list(s)
    vowels = set("aeiouAEIOU")
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] not in vowels: l += 1
        elif s[r] not in vowels: r -= 1
        else:
            s[l], s[r] = s[r], s[l]
            l += 1; r -= 1
    return "".join(s)`,
            dryRun: [
              "**Step 1: Searching**<br>• **State:** s='hello', L=0 ('h'), R=4 ('o')<br>• **Action:** 'h' is NOT a vowel, move L. 'o' IS a vowel, keep R.<br>• **Result:** L=1 ('e'), R=4 ('o')",
              "**Step 2: Both Vowels**<br>• **State:** L=1 ('e'), R=4 ('o')<br>• **Action:** Both are vowels! Swap them. Move L to 2, R to 3.<br>• **Result:** s='holle', L=2 ('l'), R=3 ('l')",
              "**Step 3: End**<br>• **State:** L=2, R=3. Both 'l' are NOT vowels. L moves to 3, R moves to 2.<br>• **Action:** L (3) > R (2). Stop loop.<br>• **Result:** Final: 'holle'"
            ],
            complexity: "Time: O(N), Space: O(N)"
          }
        ],
        importantNotes: "• **Logic Hint:** Hamesha set ka use karein vowels store karne ke liye for **O(1)** lookup. Python mein string immutable hai, isliye pehle list mein convert karna padta hai."
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
            type: "Brute Force",
            concept: "Dono arrays ko merge karke ek naya array banao aur use sort kardo.",
            code: `def merge(nums1, m, nums2, n):
    # Copy nums2 to the end of nums1
    for i in range(n):
        nums1[m + i] = nums2[i]
    # Sort the combined array
    nums1.sort()`,
            complexity: "Time: O((m+n) log (m+n)), Space: O(1)"
          },
          {
            type: "Optimal (Three Pointer)",
            concept: "Peeche se (end se) elements ko compare karo aur `nums1` ke khali space mein bharte jao. Isse overwriting nahi hogi.",
            code: `def merge(nums1, m, nums2, n):
    # p1, p2 are pointers for original elements
    # p is the pointer for the write location
    p1, p2, p = m - 1, n - 1, m + n - 1
    
    while p1 >= 0 and p2 >= 0:
        if nums1[p1] > nums2[p2]:
            nums1[p] = nums1[p1]
            p1 -= 1
        else:
            nums1[p] = nums2[p2]
            p2 -= 1
        p -= 1
        
    # Copy remaining elements from nums2
    while p2 >= 0:
        nums1[p] = nums2[p2]
        p2 -= 1; p -= 1`,
            dryRun: [
              "**Step 1: Compare Ends**<br>• **State:** nums1=[1,2,3,0,0,0], nums2=[2,5,6], p1=2 (val 3), p2=2 (val 6), write=5<br>• **Action:** 6 > 3. Write 6 at index 5. Move p2 and write pointer.<br>• **Result:** nums1=[...,6], p2=1 (5), write=4",
              "**Step 2: Next Largest**<br>• **State:** p1=2 (3), p2=1 (5), write=4<br>• **Action:** 5 > 3. Write 5 at index 4. Move p2 and write pointer.<br>• **Result:** nums1=[...,5,6], p2=0 (2), write=3",
              "**Step 3: Overlap**<br>• **State:** p1=2 (3), p2=0 (2), write=3<br>• **Action:** 3 > 2. Write 3 at index 3. Move p1 and write pointer.<br>• **Result:** nums1=[1,2,3,3,5,6], p1=1 (2), write=2"
            ],
            complexity: "Time: O(m+n), Space: O(1)"
          }
        ],
        importantNotes: "• **Key Logic:** **Backward Two-Pointer** approach tab use karo jab array mein peeche extra space ho. Isse shift karne ki zaroorat nahi padti."
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
            type: "Brute Force",
            concept: "Saare combinations check karo ki kaunsa cookie kis bache ko satisfy karega. Yeh O(N*M) lega.",
            code: `def findContentChildren(g, s):
    # This is a conceptual BF; sorting is usually required even for BF
    g.sort(); s.sort()
    count = 0
    used = [False] * len(s)
    for greed in g:
        for i in range(len(s)):
            if not used[i] and s[i] >= greed:
                count += 1
                used[i] = True
                break
    return count`,
            complexity: "Time: O(N*M), Space: O(M)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Dono ko sort karo. Sabse chote greed wale bache ko sabse chota fit cookie dene ki koshish karo.",
            code: `def findContentChildren(g, s):
    g.sort(); s.sort()
    child = cookie = 0
    while child < len(g) and cookie < len(s):
        if s[cookie] >= g[child]:
            child += 1 # Satisfied
        cookie += 1 # Move to next cookie anyway
    return child`,
            dryRun: [
              "**Step 1: Satisfy Small**<br>• **State:** g=[1,2], s=[1,2,3], child=0 (1), cookie=0 (1)<br>• **Action:** 1 >= 1. Child 0 satisfied. Move child and cookie pointers.<br>• **Result:** child=1, cookie=1",
              "**Step 2: Satisfy Next**<br>• **State:** child=1 (2), cookie=1 (2)<br>• **Action:** 2 >= 2. Child 1 satisfied. Move child and cookie pointers.<br>• **Result:** child=2, cookie=2",
              "**Step 3: Finish**<br>• **State:** child=2 (len reached)<br>• **Action:** No more children to satisfy. Stop.<br>• **Result:** Returns 2"
            ],
            complexity: "Time: O(N log N), Space: O(1)"
          }
        ],
        importantNotes: "• **Greedy Logic:** Sorting hamesha greedy problems mein help karti hai. Pehle sabse kam demand (smallest greed) ko satisfy karo."
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
            type: "Brute Force",
            concept: "Do alag lists banao (even aur odd), fir unhe concatenate (join) kardo.",
            code: `def sortArrayByParity(nums):
    evens = [x for x in nums if x % 2 == 0]
    odds = [x for x in nums if x % 2 != 0]
    return evens + odds`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "L and R pointers ka use karke Even ko aage aur Odd ko peeche swap karte jao.",
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
              "**Step 1: Found Mismatch**<br>• **State:** nums=[3, 1, 2, 4], L=0 (3), R=3 (4)<br>• **Action:** 3 is Odd, 4 is Even. Swap! Move both inwards.<br>• **Result:** nums=[4, 1, 2, 3], L=1, R=2",
              "**Step 2: Second Mismatch**<br>• **State:** L=1 (1), R=2 (2)<br>• **Action:** 1 is Odd, 2 is Even. Swap! Move both inwards.<br>• **Result:** nums=[4, 2, 1, 3], L=2, R=1",
              "**Step 3: Terminate**<br>• **State:** L=2, R=1<br>• **Action:** L > R. Stop.<br>• **Result:** Final Parity Array: [4, 2, 1, 3]"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Pointer Logic:** Partitioning problems mein humesha in-place swap optimal hota hai. Relative order matter nahi karta toh opposite pointers best hain."
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
            type: "Brute Force",
            concept: "Ek naya array banao aur even values ko even indices par aur odd values ko odd indices par bharte jao.",
            code: `def sortArrayByParityII(nums):
    n = len(nums)
    res = [0] * n
    even, odd = 0, 1
    for x in nums:
        if x % 2 == 0:
            res[even] = x; even += 2
        else:
            res[odd] = x; odd += 2
    return res`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Dono pointers (even aur odd index) ko maintain karo aur misplaced elements ko swap kardo.",
            code: `def sortArrayByParityII(nums):
    even, odd = 0, 1
    n = len(nums)
    while even < n and odd < n:
        if nums[even] % 2 == 0: even += 2
        elif nums[odd] % 2 == 1: odd += 2
        else:
            # Both misplaced, swap
            nums[even], nums[odd] = nums[odd], nums[even]
            even += 2; odd += 2
    return nums`,
            dryRun: [
              "**Step 1: Check Even Index**<br>• **State:** nums=[4, 2, 5, 7], even=0 (4), odd=1 (2)<br>• **Action:** nums[0] is even (Correct). Move even pointer by 2.<br>• **Result:** even=2 (5), odd=1 (2)",
              "**Step 2: Detect Double Misplaced**<br>• **State:** even=2 (5), odd=1 (2)<br>• **Action:** nums[2] is odd (Wrong!) AND nums[1] is even (Wrong!). Swap them and move both pointers.<br>• **Result:** nums=[4, 5, 2, 7], even=4, odd=3",
              "**Step 3: End**<br>• **State:** even=4, odd=3 (7)<br>• **Action:** even is out of bounds. Stop.<br>• **Result:** Array is [4, 5, 2, 7]"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Index-based partitioning ke liye multiple pointers move karna efficient hota hai. Condition check (`% 2`) determine karti hai ki pointer move hoga ya swap."
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
            type: "Brute Force",
            concept: "Ek naya list banao aur jab bhi 0 mile, use do baar append kardo.",
            code: `def duplicateZeros(arr):
    n = len(arr)
    res = []
    for x in arr:
        res.append(x)
        if x == 0: res.append(0)
    # Truncate and copy back
    for i in range(n):
        arr[i] = res[i]`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Pehle zeros count karo, fir backward pass karke elements ko unki final position par shift kardo.",
            code: `def duplicateZeros(arr):
    n = len(arr)
    zeros = arr.count(0)
    
    # Fill from backward to avoid overwriting
    for i in range(n - 1, -1, -1):
        if i + zeros < n:
            arr[i + zeros] = arr[i]
        if arr[i] == 0:
            zeros -= 1
            if i + zeros < n:
                arr[i + zeros] = 0`,
            dryRun: [
              "**Step 1: Count Zeros**<br>• **State:** arr=[1,0,2,3,0,4,5,0], n=8, zeros=3<br>• **Action:** Perform backward pass to shift elements. p1=7 (val 0).<br>• **Result:** Last zero doesn't fit in size 8. Move to next.",
              "**Step 2: Copy Elements**<br>• **State:** i=5 (4). i+zeros = 5+3=8 (Out of bounds).<br>• **State:** i=4 (0). i+zeros = 4+2=6. Write 0 at index 6 and 5. decrement zeros.<br>• **Result:** arr=[1,0,0,2,3,0,0,4]"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Array shift problems mein **Backward Pass** hamesha overwriting se bachata hai. Edge cases (like last element being 0) ko carefully handle karna hota hai."
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
            type: "Brute Force",
            concept: "Naya array banao jisme target value (val) na ho.",
            code: `def removeElement(nums, val):
    temp = [x for x in nums if x != val]
    for i in range(len(temp)):
        nums[i] = temp[i]
    return len(temp)`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Slow pointer ko 'write-head' ki tarah use karo jo sirf non-val elements ko likhega.",
            code: `def removeElement(nums, val):
    slow = 0
    for fast in range(len(nums)):
        if nums[fast] != val:
            nums[slow] = nums[fast]
            slow += 1
    return slow`,
            dryRun: [
              "**Step 1: Found Match**<br>• **State:** nums=[3,2,2,3], val=3, slow=0, fast=0 (3)<br>• **Action:** nums[fast] is the target value. DO NOT write. increment fast.<br>• **Result:** slow=0, fast=1",
              "**Step 2: Found Valid**<br>• **State:** slow=0, fast=1 (2)<br>• **Action:** 2 != 3. Write 2 at nums[slow]. Increment both.<br>• **Result:** nums=[2, 2, 2, 3], slow=1, fast=2",
              "**Step 3: Finish**<br>• **Action:** After loop, slow represents the new length.<br>• **Result:** Returns 2"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "In-place removal problems ke liye **Two Pointer** (Read & Write) optimal hai. Slow pointer represents the length of the new valid array."
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
            type: "Brute Force",
            concept: "String ko pehle saaf (clean) karo aur fir check karo ki reverse karne par same hai ya nahi.",
            code: `def isPalindrome(s):
    cleaned = "".join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Pointers ko ends se move karo aur non-alphanumeric characters ko skip karte jao.",
            code: `def isPalindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        if not s[l].isalnum(): l += 1
        elif not s[r].isalnum(): r -= 1
        else:
            if s[l].lower() != s[r].lower(): return False
            l += 1; r -= 1
    return True`,
            dryRun: [
              "**Step 1: Start**<br>• **State:** s='A man, a canal...', L=0 ('A'), R=30 ('a')<br>• **Action:** 'A'.lower() == 'a'.lower(). Match! Move both pointers.<br>• **Result:** L=1, R=29",
              "**Step 2: Skip Logic**<br>• **State:** L=1 (' '), R=29 (' ')<br>• **Action:** Both are spaces (not alnum). Skip them.<br>• **Result:** L=2 ('m'), R=28 ('m')",
              "**Step 3: Match**<br>• **Action:** 'm' == 'm'. Continue until L and R meet in center.<br>• **Result:** True"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "`isalnum()` function non-alphabet characters ko skip karne ke liye useful hai. Extra memory (like creating a new string) se bachne ke liye **Two Pointer** use karein."
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
            type: "Brute Force",
            concept: "String `t` ki saari possible subsequences generate karo aur check karo ki `s` usme hai ya nahi. (Bahut slow!)",
            code: `# This is conceptual; complexity is 2^N
def isSubsequenceBF(s, t):
    # Using recursive generation (not recommended)
    pass`,
            complexity: "Time: O(2^T), Space: O(T)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Ek pointer `s` ke liye rakho aur use tabhi aage badao jab `t` mein match mil jaye.",
            code: `def isSubsequence(s, t):
    i = j = 0
    while i < len(s) and j < len(t):
        if s[i] == t[j]:
            i += 1 # Found match for current char of s
        j += 1 # Always move pointer for t
    return i == len(s)`,
            dryRun: [
              "**Step 1: Match**<br>• **State:** s='abc', t='ahbgdc', i=0 ('a'), j=0 ('a')<br>• **Action:** Match! move both pointers.<br>• **Result:** i=1 ('b'), j=1 ('h')",
              "**Step 2: Skip**<br>• **State:** i=1 ('b'), j=1 ('h')<br>• **Action:** No match. Move j to find next 'b'.<br>• **Result:** i=1, j=2 ('b') -> Match! i=2, j=3",
              "**Step 3: Finish**<br>• **Action:** i (3) reached len(s).<br>• **Result:** Return True"
            ],
            complexity: "Time: O(T), Space: O(1)"
          }
        ],
        importantNotes: "Relative order maintain karne ke liye **Greedy matching** with Two Pointer optimal hai. i pointer agar `s` ki length tak pahuch gaya, matlab subsequence mil gayi."
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
              "**Step 1: Init Pointers**<br>• **Array State:** `[2, 7, 11, 15]`<br>• **Pointers:** `left=0` (2), `right=3` (15). Sum = 17.<br>• **Logic:** Sum (17) target (9) se bada hai, isliye hum `right` ko piche move karenge.",
              "**Step 2: Moving Right**<br>• **Pointers:** `left=0` (2), `right=2` (11). Sum = 13.<br>• **Logic:** Abhi bhi bada hai, firse `right` ko piche move kiya.",
              "**Step 3: Found Match**<br>• **Pointers:** `left=0` (2), `right=1` (7). Sum = **9!**<br>• **Result:** Return indices `[1, 2]`."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **What we learned:** Sorted array mein Two Pointers use karke hum O(N^2) ke brute force ko O(N) mein convert kar sakte hain.\n• **Where else to use:** Jab bhi target sum find karna ho aur array sorted ho (ya sort kiya ja sake)."
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
            concept: "Teen nested loops chalao (i, j, k) aur unique triplets dhoondo. O(N³) complexity.",
            code: `# Triple nested loops + set to store unique triplets`,
            complexity: "Time: O(N³), Space: O(Triplets)"
          },
          {
            type: "Optimal (Sort + 2Ptr)",
            concept: "Array sort karo, ek number `i` fix karo, aur bache huye array mein Two Sum sorted wala logic lagao.",
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
              "**Step 1: Sorting**<br>• **Array State:** `[-4, -1, -1, 0, 1, 2]`<br>• **Logic:** Pehle array ko sort kiya. Phir `i=0` (-4) ko fix kiya.<br>• **Pointers:** `L=1` (-1), `R=5` (2). Sum = -4 + (-1) + 2 = -3. Chota hai, L++.",
              "**Step 2: Finding Triplet**<br>• **i Value:** `i=1` (-1). Humein bacha hua sum 1 chahiye.<br>• **Pointers:** `L=2` (-1), `R=5` (2). **Sum = 0!** Triplet: `[-1, -1, 2]` found.<br>• **Action:** Skip duplicate value for L and move pointers.",
              "**Step 3: Another Match**<br>• **Pointers:** `L=3` (0), `R=4` (1). **Sum = 0!** Triplet: `[-1, 0, 1]` found."
            ],
            complexity: "Time: O(N^2), Space: O(log N) to O(N) for sorting"
          }
        ],
        importantNotes: "• **What we learned:** Jab bhi humein triplets chahiye, hum ek variable ko fix karke problem ko 'Two Sum' mein reduce kar sakte hain. Duplicates handle karne ke liye sorting best hai.\n• **Sorted Array Benefit:** Sorted data mein Two Pointer O(N) mein solution de deta hai. Unsorted hota toh hum HashMap use karte."
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
            concept: "Teen nested loops chalao aur har triplet ka sum check karo target ke close.",
            code: `def threeSumClosest(nums, target):
    closest_sum = float('inf')
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            for k in range(j + 1, len(nums)):
                curr_sum = nums[i] + nums[j] + nums[k]
                if abs(target - curr_sum) < abs(target - closest_sum):
                    closest_sum = curr_sum
    return closest_sum`,
            complexity: "Time: O(N³), Space: O(1)"
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
        importantNotes: "• **Distance logic:** Jab humein 'exact sum' nahi milta, tab hum target aur sum ke 'absolute difference' ko minimize karte hain."
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
            concept: "Chaar nested loops (i, j, k, l) chalao aur unique triplets dhoondo. O(N⁴) complexity.",
            code: `# Four nested loops (i, j, k, l) + set to handle duplicates.`,
            complexity: "Time: O(N⁴), Space: O(Quadruplets)"
          },
          {
            type: "Optimal (Sort + 2Ptr)",
            concept: "3Sum ka advanced version. Do numbers fix karo aur baaki do ke liye Two Pointer lagao. Time O(N³) ho jayegi.",
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
        importantNotes: "• **Recursive Logic:** K-Sum problem ko solve karne ke liye hamesha (K-2) loops + 1 Two Pointer use hota hai."
      },
      {
        id: "q_container_water",
        difficulty: "M", 
        name: "Container With Most Water", 
        companies: ["Amazon", "Google", "Meta"],
        link: "https://leetcode.com/problems/container-with-most-water/",
        problemStatement: "Given an array `height`, find two lines that form a container with the most water.",
        testCases: [
          { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Har possible pair (i, j) check karo aur area calculate karo. O(N²) time.",
            code: `def maxArea(height):
    max_a = 0
    for i in range(len(height)):
        for j in range(i + 1, len(height)):
            max_a = max(max_a, (j - i) * min(height[i], height[j]))
    return max_a`,
            complexity: "Time: O(N²), Space: O(1)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Dono ends se start karo. Bottleneck hamesha choti wall hoti hai, isliye choti wall ko move karo.",
            code: `def maxArea(height):
    l, r = 0, len(height) - 1
    max_a = 0
    while l < r:
        max_a = max(max_a, (r - l) * min(height[l], height[r]))
        if height[l] < height[r]: l += 1
        else: r -= 1
    return max_a`,
            dryRun: [
              "**Step 1: Start**<br>• **State:** L=0 (1), R=8 (7), width=8<br>• **Action:** Area = 8 * min(1,7) = 8. L chota hai, move L.<br>• **Result:** L=1, R=8",
              "**Step 2: Match**<br>• **State:** L=1 (8), R=8 (7), width=7<br>• **Action:** Area = 7 * min(8,7) = 49. NEW MAX!<br>• **Result:** max_area = 49"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Hinglish Tip:** Badi wall ko move karne se width kam hogi aur area kabhi nahi badhega. Isliye hamesha choti wall move karo."
      },
      {
        id: "q_valid_pal",
        difficulty: "E",
        name: "Valid Palindrome",
        companies: ["Meta", "Microsoft"],
        link: "https://leetcode.com/problems/valid-palindrome/",
        problemStatement: "Check if a string is a palindrome after cleaning non-alphanumeric characters.",
        testCases: [
          { input: 's = "A man, a plan..."', output: "true" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Pehle string ko 'clean' karo aur lowercase karo, fir reverse karke check karo.",
            code: `def isPalindrome(s):
    cleaned = "".join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Dono ends se pointers move karo aur non-alphanumeric skip karte jao.",
            code: `def isPalindrome(s):
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum(): l += 1
        while l < r and not s[r].isalnum(): r -= 1
        if s[l].lower() != s[r].lower(): return False
        l += 1; r -= 1
    return True`,
            dryRun: [
              "**Step 1: Compare**<br>• **State:** s='A man...', L=0 ('A'), R=30 ('a')<br>• **Action:** Match! L=1, R=29.<br>• **Result:** L=1 (' '), R=29 (' ')"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Logic Zone:** In-place modification se space O(1) ho jata hai."
      },
      {
        id: "q_valid_pal_ii",
        difficulty: "E",
        name: "Valid Palindrome II",
        companies: ["Meta"],
        link: "https://leetcode.com/problems/valid-palindrome-ii/",
        problemStatement: "At most one character delete karke palindrome ban sakta hai?",
        testCases: [{ input: 's = "abca"', output: "true" }],
        solutions: [
          {
            type: "Optimal (Two Pointer)",
            concept: "Pehla mismatch milte hi dono options (skip L or skip R) check karo.",
            code: `def validPalindrome(s):
    def is_pal(i, j):
        while i < j:
            if s[i] != s[j]: return False
            i += 1; j -= 1
        return True
    l, r = 0, len(s) - 1
    while l < r:
        if s[l] != s[r]:
            return is_pal(l+1, r) or is_pal(l, r-1)
        l += 1; r -= 1
    return True`,
            dryRun: [
              "**Step 1: Mismatch**<br>• **State:** s='abca', L=1 ('b'), R=2 ('c')<br>• **Action:** 'b' != 'c'. Check 'c' is pal (True) OR 'b' is pal (True).<br>• **Result:** Return True"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Note:** Branching sirf ek baar hoti hai, isliye linear time hai."
      },
      {
        id: "q_trap_rain",
        difficulty: "H",
        name: "Trapping Rain Water",
        companies: ["Google", "Amazon"],
        link: "https://leetcode.com/problems/trapping-rain-water/",
        problemStatement: "Elevation map mein kitna paani trap hoga?",
        testCases: [{ input: "height = [0,1,0,2...]", output: "6" }],
        solutions: [
          {
            type: "Optimal (Two Pointer)",
            concept: "Dono ends se pointers chalao. Jo wall choti hai, wahan se water trap hone ka chance hota hai.",
            code: `def trap(height):
    l, r = 0, len(height) - 1
    l_max = r_max = res = 0
    while l < r:
        if height[l] < height[r]:
            if height[l] >= l_max: l_max = height[l]
            else: res += l_max - height[l]
            l += 1
        else:
            if height[r] >= r_max: r_max = height[r]
            else: res += r_max - height[r]
            r -= 1
    return res`,
            dryRun: [
              "**Step 1: Trap**<br>• **State:** L=2 (0), l_max=1<br>• **Action:** 0 < 1. Trap 1 unit water.<br>• **Result:** res=1"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Hinglish Tip:** Bottleneck hamesha choti wall hoti hai."
      },
      {
        id: "q_rem_dups",
        difficulty: "E",
        name: "Remove Duplicates from Sorted Array",
        companies: ["Microsoft", "Adobe"],
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
        problemStatement: "Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.",
        testCases: [
          { input: "nums = [1,1,2]", output: "2, nums = [1,2,_]" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Ek extra Set ya List use karo unique elements store karne ke liye, fir unhe original array mein wapas copy kardo.",
            code: `def removeDuplicates(nums):
    unique = sorted(list(set(nums)))
    for i in range(len(unique)):
        nums[i] = unique[i]
    return len(unique)`,
            complexity: "Time: O(N log N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Array sorted hai, iska fayda uthao! `slow` pointer unique element rakhega aur `fast` pointer naye element dhundega.",
            code: `def removeDuplicates(nums):
    if not nums: return 0
    slow = 0
    for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
            slow += 1
            nums[slow] = nums[fast]
    return slow + 1`,
            dryRun: [
              "**Step 1: Init**<br>• **State:** nums=[1, 1, 2], slow=0 (val 1), fast=1 (val 1)<br>• **Action:** Dono same hain, skip write. fast aage badho.<br>• **Result:** slow=0, fast=2",
              "**Step 2: New Unique**<br>• **State:** fast=2 (val 2)<br>• **Action:** 2 != 1. slow ko 1 par lao aur wahan 2 likh do.<br>• **Result:** nums=[1, 2, 2], slow=1"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Hinglish Logic:** Sorted array mein duplicates hamesha padosi (neighbors) hote hain. Bas `nums[slow]` aur `nums[fast]` ko compare karo."
      },
      {
        id: "q_sort_colors",
        difficulty: "M",
        name: "Sort Colors (Dutch Flag)",
        companies: ["Microsoft", "Amazon", "Adobe"],
        link: "https://leetcode.com/problems/sort-colors/",
        problemStatement: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue (0, 1, and 2).",
        testCases: [
          { input: "nums = [2,0,2,1,1,0]", output: "[0,0,1,1,2,2]" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Pehle counts nikal lo kitne 0s, 1s, aur 2s hain. Fir array ko un counts ke hisaab se overwrite kardo.",
            code: `def sortColors(nums):
    counts = {0: 0, 1: 0, 2: 0}
    for n in nums: counts[n] += 1
    i = 0
    for color in [0, 1, 2]:
        for _ in range(counts[color]):
            nums[i] = color
            i += 1`,
            complexity: "Time: O(N), Space: O(1)"
          },
          {
            type: "Optimal (3 Pointer)",
            concept: "Teen pointers use karo: `low` (for 0s), `mid` (for current), aur `high` (for 2s). Isse single pass mein sort ho jayega.",
            code: `def sortColors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1; mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[high], nums[mid] = nums[mid], nums[high]
            high -= 1`,
            dryRun: [
              "**Step 1: Found 2**<br>• **State:** nums=[2,0,1], low=0, mid=0 (2), high=2<br>• **Action:** 2 ko `high` ke saath swap karo. high moves to 1.<br>• **Result:** nums=[1,0,2], mid=0, high=1",
              "**Step 2: Found 1**<br>• **State:** mid=0 (1)<br>• **Action:** 1 correct position par hai (temporarily). mid aage badao.<br>• **Result:** mid=1",
              "**Step 3: Found 0**<br>• **State:** mid=1 (0)<br>• **Action:** 0 ko `low` ke saath swap karo. low++, mid++.<br>• **Result:** nums=[0,1,2]"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Logic Zone:** Isse Dutch National Flag algorithm kehte hain. Mid pointer poore array ko scan karta hai."
      },
      {
        id: "q_move_zeroes",
        difficulty: "E",
        name: "Move Zeroes",
        companies: ["Meta", "Bloomberg", "Microsoft"],
        link: "https://leetcode.com/problems/move-zeroes/",
        problemStatement: "Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.",
        testCases: [
          { input: "nums = [0,1,0,3,12]", output: "[1,3,12,0,0]" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Naya array banao, pehle saare non-zero elements daalo, fir bache hue space mein zero bhar do.",
            code: `def moveZeroes(nums):
    non_zeros = [x for x in nums if x != 0]
    for i in range(len(nums)):
        if i < len(non_zeros): nums[i] = non_zeros[i]
        else: nums[i] = 0`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Swapping technique use karo. `last_non_zero` pointer track karega ki agla non-zero element kahan aana chahiye.",
            code: `def moveZeroes(nums):
    last_non_zero = 0
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[last_non_zero], nums[i] = nums[i], nums[last_non_zero]
            last_non_zero += 1`,
            dryRun: [
              "**Step 1: Found Zero**<br>• **State:** nums=[0, 1, 0, 3], i=0<br>• **Action:** 0 mila, skip kardo.<br>• **Result:** last_non_zero=0",
              "**Step 2: Swap!**<br>• **State:** i=1 (val 1), last_non_zero=0<br>• **Action:** 1 ko index 0 ke saath swap karo. last_non_zero moves to 1.<br>• **Result:** nums=[1, 0, 0, 3]"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Pro Tip:** In-place swap karne se relative order maintain rehta hai automatically."
      },
      {
        id: "q_sq_sorted",
        difficulty: "E",
        name: "Squares of Sorted Array",
        companies: ["Google", "Amazon"],
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
        problemStatement: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
        testCases: [
          { input: "nums = [-4,-1,0,3,10]", output: "[0,1,9,16,100]" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Pehle saare numbers ka square nikal lo, fir result array ko sort kardo.",
            code: `def sortedSquares(nums):
    res = [x*x for x in nums]
    res.sort()
    return res`,
            complexity: "Time: O(N log N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Dono ends se absolute value compare karo. Jo badi hai, uska square result array ke 'end' mein daalo.",
            code: `def sortedSquares(nums):
    n = len(nums)
    res = [0] * n
    l, r = 0, n - 1
    for i in range(n - 1, -1, -1):
        if abs(nums[l]) > abs(nums[r]):
            res[i] = nums[l] ** 2
            l += 1
        else:
            res[i] = nums[r] ** 2
            r -= 1
    return res`,
            dryRun: [
              "**Step 1: Compare Ends**<br>• **State:** nums=[-4, -1, 0, 3], L=0 (-4), R=3 (3)<br>• **Action:** |-4| (4) > |3| (3). (-4)^2 = 16 ko last index par daalo. L pointer aage badao.<br>• **Result:** res=[_, _, _, 16], L=1",
              "**Step 2: Next Largest**<br>• **State:** L=1 (-1), R=3 (3)<br>• **Action:** |3| > |-1|. 3^2 = 9 ko index 2 par daalo. R pointer peeche lao.<br>• **Result:** res=[_, _, 9, 16]"
            ],
            complexity: "Time: O(N), Space: O(N)"
          }
        ],
        importantNotes: "• **Logic Hint:** Sorted array mein squares ki sabse badi values hamesha 'ends' par hoti hain."
      },
      {
        id: "q_rem_elem_practice",
        difficulty: "E",
        name: "Remove Element",
        companies: ["Adobe", "Amazon"],
        link: "https://leetcode.com/problems/remove-element/",
        problemStatement: "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed.",
        testCases: [
          { input: "nums = [3,2,2,3], val = 3", output: "2, nums = [2,2,_,_]" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Ek naya array banao aur usme sirf wahi elements daalo jo `val` ke equal nahi hain.",
            code: `def removeElement(nums, val):
    res = [x for x in nums if x != val]
    for i in range(len(res)): nums[i] = res[i]
    return len(res)`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Write head (`slow`) ko tracking ke liye use karo. Jab bhi koi valid element mile, use `slow` par likh do.",
            code: `def removeElement(nums, val):
    slow = 0
    for fast in range(len(nums)):
        if nums[fast] != val:
            nums[slow] = nums[fast]
            slow += 1
    return slow`,
            dryRun: [
              "**Step 1: Match**<br>• **State:** nums=[3, 2], val=3, slow=0, fast=0 (3)<br>• **Action:** 3 matches val! Skip writing.<br>• **Result:** slow=0",
              "**Step 2: Copy**<br>• **State:** fast=1 (2)<br>• **Action:** 2 is valid! Write it at nums[slow=0]. slow++.<br>• **Result:** nums=[2, 2], slow=1"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Key point:** Slow pointer hamesha new array ki current length batata hai."
      },
      {
        id: "q_rem_dups_ii",
        difficulty: "M",
        name: "Remove Duplicates from Sorted Array II",
        companies: ["Meta", "Amazon"],
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
        problemStatement: "Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice.",
        testCases: [
          { input: "nums = [1,1,1,2,2,3]", output: "5, nums = [1,1,2,2,3,_]" }
        ],
        solutions: [
          {
            type: "Optimal (Two Pointer)",
            concept: "Har element ko tabhi select karo jab woh apne 'pichle-se-pichle' element (slow-2) se alag ho.",
            code: `def removeDuplicates(nums):
    if len(nums) <= 2: return len(nums)
    slow = 2
    for fast in range(2, len(nums)):
        if nums[fast] != nums[slow - 2]:
            nums[slow] = nums[fast]
            slow += 1
    return slow`,
            dryRun: [
              "**Step 1: Duplicate Found**<br>• **State:** nums=[1,1,1,2], slow=2, fast=2 (val 1)<br>• **Action:** nums[2] (1) matches nums[slow-2] (1). 3rd occurrence! Skip.<br>• **Result:** slow=2",
              "**Step 2: Valid Element**<br>• **State:** fast=3 (val 2)<br>• **Action:** 2 != nums[slow-2] (1). write 2 at slow index. slow++.<br>• **Result:** nums=[1,1,2,2], slow=3"
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "• **Advanced Tip:** `slow - K` logic se hum 'at most K' duplicates handle kar sakte hain."
      },
      { 
        isMastery: true, 
        id: "m_backspace_compare",
        difficulty: "E", 
        name: "Backspace String Compare", 
        companies: ["Google", "Amazon", "Microsoft"], 
        link: "https://leetcode.com/problems/backspace-string-compare/",
        problemStatement: "Given two strings `s` and `t`, return `true` if they are equal when both are typed into empty text editors. `#` means a backspace character.",
        testCases: [
          { input: 's = "ab#c", t = "ad#c"', output: "true" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Process both strings fully using a stack (or list) to simulate backspaces.",
            code: `def backspaceCompare(s, t):
    def process(string):
        res = []
        for char in string:
            if char != '#': res.append(char)
            elif res: res.pop()
        return "".join(res)
    return process(s) == process(t)`,
            complexity: "Time: O(N+M), Space: O(N+M)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Iterate backwards and keep track of pending backspaces to skip characters.",
            code: `def backspaceCompare(s, t):
    def get_valid_idx(string, idx):
        skip = 0
        while idx >= 0:
            if string[idx] == '#':
                skip += 1
            elif skip > 0:
                skip -= 1
            else:
                break
            idx -= 1
        return idx
        
    i, j = len(s) - 1, len(t) - 1
    while i >= 0 or j >= 0:
        i = get_valid_idx(s, i)
        j = get_valid_idx(t, j)
        
        if i >= 0 and j >= 0:
            if s[i] != t[j]: return False
        elif (i >= 0) != (j >= 0):
            # One string ended but the other didn't
            return False
        i -= 1; j -= 1
    return True`,
            dryRun: [
              "**Step 1: Process Backwards**<br>• s='ab#c', t='ad#c'. Both have 'c' at end. Match.",
              "**Step 2: Handle Backspace**<br>• s has '#' then 'b'. 'b' is skipped. Next valid is 'a'.",
              "**Step 3: Compare Final**<br>• Both strings have 'a' remaining. Match! Return True."
            ],
            complexity: "Time: O(N+M), Space: O(1)"
          }
        ],
        importantNotes: "• **Key Takeaway:** Processing strings from the end is often better when handling backspaces as it allows us to 'know' which characters will be deleted before we reach them."
      },
      { 
        isMastery: true, 
        id: "m_intersect_ii",
        difficulty: "E", 
        name: "Intersection of Two Arrays II", 
        companies: ["Google", "Amazon", "Microsoft"], 
        link: "https://leetcode.com/problems/intersection-of-two-arrays-ii/",
        problemStatement: "Given two integer arrays `nums1` and `nums2`, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays.",
        testCases: [
          { input: "nums1 = [1,2,2,1], nums2 = [2,2]", output: "[2,2]" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Use a Hash Map (Dictionary) to count occurrences in one array, then check against the second array.",
            code: `def intersect(nums1, nums2):
    counts = {}
    for n in nums1: counts[n] = counts.get(n, 0) + 1
    res = []
    for n in nums2:
        if counts.get(n, 0) > 0:
            res.append(n)
            counts[n] -= 1
    return res`,
            complexity: "Time: O(N+M), Space: O(min(N,M))"
          },
          {
            type: "Optimal (Sort + 2Ptr)",
            concept: "Sort both and move pointers based on comparison. Equal values are added to result.",
            code: `def intersect(nums1, nums2):
    nums1.sort(); nums2.sort()
    i = j = 0
    res = []
    while i < len(nums1) and j < len(nums2):
        if nums1[i] == nums2[j]:
            res.append(nums1[i])
            i += 1; j += 1
        elif nums1[i] < nums2[j]:
            i += 1
        else:
            j += 1
    return res`,
            dryRun: [
              "**Step 1: Match**<br>• nums1=[1,2,2,1], nums2=[2,2]. Sorted: [1,1,2,2], [2,2].",
              "**Step 2: Searching**<br>• i=0 (1), j=0 (2). 1 < 2, move i to 1. Still 1 < 2, move i to 2 (val 2).",
              "**Step 3: Collect**<br>• i=2 (2), j=0 (2). Match! Add 2. i=3, j=1. Match! Add 2."
            ],
            complexity: "Time: O(N log N + M log M), Space: O(min(N,M))"
          }
        ],
        importantNotes: "• **Key Takeaway:** If the arrays are already sorted, Two Pointers is the most space-efficient way to find the intersection. If not, a Hash Map is generally faster."
      },
      { 
        isMastery: true, 
        id: "m_rev_words",
        difficulty: "M", 
        name: "Reverse Words in a String", 
        companies: ["Amazon", "Microsoft", "Apple"], 
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
        problemStatement: "Given an input string `s`, reverse the order of the words.",
        testCases: [
          { input: 's = "the sky is blue"', output: '"blue is sky the"' }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Split the string into words, reverse the list of words, and join them with spaces.",
            code: `def reverseWords(s):
    # s.split() handles multiple spaces automatically
    words = s.split()
    words.reverse()
    return " ".join(words)`,
            complexity: "Time: O(N), Space: O(N)"
          },
          {
            type: "Optimal (Two Pointer)",
            concept: "Reverse the entire string, then reverse each word in-place while handling spaces. (Conceptual in Python due to immutability).",
            code: `def reverseWords(s):
    # Python strings are immutable, so splitting is usually optimal.
    # A true two-pointer approach would involve a deque.
    from collections import deque
    l, r = 0, len(s) - 1
    while l <= r and s[l] == ' ': l += 1
    while l <= r and s[r] == ' ': r -= 1
    
    d, word = deque(), []
    while l <= r:
        if s[l] == ' ' and word:
            d.appendleft("".join(word))
            word = []
        elif s[l] != ' ':
            word.append(s[l])
        l += 1
    d.appendleft("".join(word))
    return " ".join(d)`,
            dryRun: [
              "**Step 1: Trim**<br>• '  hello world  ' -> 'hello world'.",
              "**Step 2: Collect Word**<br>• Find 'hello', push to front of deque: ['hello'].",
              "**Step 3: Finish**<br>• Find 'world', push to front: ['world', 'hello']. Join them."
            ],
            complexity: "Time: O(N), Space: O(N)"
          }
        ],
        importantNotes: "• **Key Takeaway:** In Python, <code>split()</code> and <code>join()</code> are highly optimized. For a pure Two-Pointer approach, you would reverse the whole string and then reverse each word."
      },
      { 
        isMastery: true, 
        id: "m_boats",
        difficulty: "M", 
        name: "Boats to Save People", 
        companies: ["Amazon"], 
        link: "https://leetcode.com/problems/boats-to-save-people/",
        problemStatement: "You are given an array `people` where `people[i]` is the weight of the i-th person, and an infinite number of boats where each boat can carry a maximum weight of `limit`. Each boat carries at most two people at the same time.",
        testCases: [
          { input: "people = [3,2,2,1], limit = 3", output: "3", explanation: "(1,2), (2), (3)" }
        ],
        solutions: [
          {
            type: "Brute Force",
            concept: "Try every pair of people to see if they fit in a boat. (Complexity would be factorial/exponential).",
            code: `# This is conceptually extremely slow.
# Practically, even a BF for this needs sorting.`,
            complexity: "Time: O(N!), Space: O(N)"
          },
          {
            type: "Optimal (Sort + 2Ptr)",
            concept: "Pair the heaviest person with the lightest person if their weight is within the limit.",
            code: `def numRescueBoats(people, limit):
    people.sort()
    l, r = 0, len(people) - 1
    boats = 0
    while l <= r:
        # Heaviest always takes a boat
        # Can the lightest person join?
        if people[l] + people[r] <= limit:
            l += 1 # Lightest person joins
        r -= 1 # Heaviest person moves on
        boats += 1
    return boats`,
            dryRun: [
              "**Step 1: Pair**<br>• people=[1,2,2,3], limit=3. L=0 (1), R=3 (3). 1+3=4 > 3. Heavy (3) goes alone. boats=1, R=2.",
              "**Step 2: Success**<br>• L=0 (1), R=2 (2). 1+2=3 <= 3. Both go! boats=2, L=1, R=1.",
              "**Step 3: Last**<br>• L=1 (2), R=1 (2). Last person goes. boats=3."
            ],
            complexity: "Time: O(N log N), Space: O(log N)"
          }
        ],
        importantNotes: "• **Key Takeaway:** Sorting allows us to greedily pair the heaviest with the lightest, maximizing the utilization of each boat's capacity."
      }
    ],
    conceptBoosters: [
      {
        q: "Opposite Direction Two Pointer kaise kaam karta hai?",
        a: "Isme hum ek pointer `left=0` aur dusra `right=n-1` par rakhte hain. Sorted array mein agar humein sum badhana ho toh hum `left++` karte hain (kyunki right side badi values hain). Agar sum kam karna ho toh `right--` karte hain. Yeh simple logic O(N^2) ko O(N) bana deta hai."
      },
      {
        q: "Same Direction (Fast & Slow) pointer kab use karein?",
        a: "Jab humein array ko in-place modify karna ho (jaise duplicates hatana ya zeroes move karna). Ek pointer (`fast`) array scan karta hai aur dusra (`slow`) valid elements ki position track karta hai."
      },
      {
        q: "Two Sum sorted wala dry run logic samjhao.",
        a: "Input: `[2, 7, 11, 15]`, Target: 9<br>1. **Step 1:** `L=2, R=15` -> Sum=17 (>9). 17 target se bada hai, isliye humein sum kam karna hoga. Sorted array mein right side badi values hoti hain, toh R ko piche (left) move kiya.<br>2. **Step 2:** `L=2, R=11` -> Sum=13 (>9). Abhi bhi sum bada hai, firse R को piche move kiya.<br>3. **Step 3:** `L=2, R=7` -> Sum=9 (Match!). Answer mil gaya: `[1, 2]`."
      }
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
      { 
        isMastery: true, 
        id: "m_max_avg_sub",
        difficulty: "E", 
        name: "Maximum Average Subarray I", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/maximum-average-subarray-i/",
        problemStatement: "You are given an integer array `nums` consisting of `n` elements, and an integer `k`.\nFind a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value.",
        testCases: [
          { input: "nums = [1,12,-5,-6,50,3], k = 4", output: "12.75000", explanation: "Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75" }
        ],
        solutions: [
          {
            type: "Optimal (Fixed Window)",
            concept: "Hum `k` size ki **Fixed Window** banayenge. Pehle pehli window ka sum nikalenge, fir window ko aage shift karte waqt agla element add aur pichla element remove karenge. Isse har window ka sum **O(1)** mein mil jayega.",
            dryRun: [
              "**Step 1: Fix First**<br>• **State:** nums=[-1, 0, 1, 2, -1, -4], Sorted=[-4, -1, -1, 0, 1, 2], i=1 (-1)<br>• **Action:** L=2 (-1), R=5 (2). Sum = -1 + (-1) + 2 = 0. Match! Add to res.<br>• **Result:** res=[[-1,-1,2]]",
              "**Step 2: Move and Skip**<br>• **State:** L moves to 3 (0), R moves to 4 (1).<br>• **Action:** Sum = -1 + 0 + 1 = 0. Match! Add to res.<br>• **Result:** res=[[-1,-1,2], [-1,0,1]]"
            ],
            code: `def findMaxAverage(nums, k):
    # Pehli window ka sum
    curr_sum = sum(nums[:k])
    max_sum = curr_sum
    
    # Window ko aage shift karo
    for i in range(k, len(nums)):
        curr_sum += nums[i] - nums[i-k]
        max_sum = max(max_sum, curr_sum)
        
    return max_sum / k`,
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Fixed size window mein hamesha `sum += new_element - old_element` wala logic use karein.\nAverage ki jagah Sum par compare karna safer hota hai floating point errors se bachne ke liye."
      },
      { 
        isMastery: true, 
        id: "m_defuse_bomb",
        difficulty: "E", 
        name: "Defuse the Bomb", 
        companies: ["Amazon"], 
        link: "https://leetcode.com/problems/defuse-the-bomb/",
        problemStatement: "You have a bomb to defuse, and its code is a circular array `code` of length `n`.\nIf `k > 0`, replace the i-th number with the sum of the next `k` numbers.\nIf `k < 0`, replace the i-th number with the sum of the previous `|k|` numbers.\nIf `k == 0`, replace the i-th number with 0.",
        testCases: [
          { input: "code = [5,7,1,4], k = 3", output: "[12,10,16,13]" }
        ],
        solutions: [
          {
            type: "Optimal (Sliding Window)",
            concept: "Kyunki array **circular** hai, hum array ko double kar sakte hain ya modulo operator use kar sakte hain. Hum ek fixed window ka sum maintain karenge aur use move karenge.",
            code: `def decrypt(code, k):
    n = len(code)
    if k == 0: return [0] * n
    
    res = [0] * n
    # Define window range based on k
    l, r = (1, k) if k > 0 else (n + k, n - 1)
    
    # Initial window sum
    curr_sum = 0
    for i in range(l, r + 1):
        curr_sum += code[i % n]
        
    for i in range(n):
        res[i] = curr_sum
        # Slide window
        curr_sum -= code[l % n]
        l += 1
        r += 1
        curr_sum += code[r % n]
        
    return res`,
            dryRun: [
              "[STATE] code=[5,7,1,4], k=3, l=1, r=3, curr_sum=12 [DESC] Initial window [7,1,4] sum = 12. res[0]=12.",
              "[STATE] i=0 -> Slide: 12 - code[1] + code[4%4=0] = 12 - 7 + 5 = 10. res[1]=10.",
              "[STATE] i=1 -> Slide: 10 - code[2] + code[5%4=1] = 10 - 1 + 7 = 16. res[2]=16."
            ],
            complexity: "Time: O(N), Space: O(N) for result"
          }
        ],
        importantNotes: "Circular array handling ke liye `% n` (modulo) best tool hai.\nWindow range correctly decide karna (l, r) iska main part hai."
      },
      { 
        isMastery: true, 
        id: "m_min_recolors",
        difficulty: "E", 
        name: "Minimum Recolors to Get K Consecutive Black Blocks", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/",
        problemStatement: "You are given a 0-indexed string `blocks` of length `n`, where `blocks[i]` is either 'W' (white) or 'B' (black). You are also given an integer `k`.\nReturn the minimum number of white blocks that need to be recolored to black so that there are at least `k` consecutive black blocks.",
        testCases: [
          { input: 'blocks = "WBBWWBBWBW", k = 7', output: "3", explanation: "One way is to color indices 0, 3, and 4 to Black." }
        ],
        solutions: [
          {
            type: "Optimal (Fixed Window)",
            concept: "Humein `k` length ki aisi window dhundni hai jisme **White (W)** blocks minimum hon. Hum sliding window se har possible window ke 'W' count karenge.",
            code: `def minimumRecolors(blocks, k):
    # Initial window of size k
    curr_w = blocks[:k].count('W')
    min_w = curr_w
    
    for i in range(k, len(blocks)):
        # Slide window
        if blocks[i] == 'W': curr_w += 1
        if blocks[i-k] == 'W': curr_w -= 1
        min_w = min(min_w, curr_w)
        
    return min_w`,
            dryRun: [
              "[STATE] blocks='WBBWWBB...', k=7, curr_w=3 [DESC] First 7 chars [WBBWWBB] contain 3 'W's. min_w=3.",
              "[STATE] i=7, new='B', old='W' [DESC] Slide: next char 'B' (no change), old char 'W' (removed). curr_w = 3 - 1 = 2.",
              "[STATE] i=8, new='W', old='B' [DESC] Slide: next char 'W' (added), old char 'B' (no change). curr_w = 2 + 1 = 3."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Sliding window se hum range queries ko optimize karte hain.\nCounting problems mein update sirf tab karein jab incoming/outgoing element relevant ho."
      },
      { 
        isMastery: true, 
        id: "m_k_beauty",
        difficulty: "E", 
        name: "Find the K-Beauty of a Number", 
        companies: ["Amazon"], 
        link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/",
        problemStatement: "The k-beauty of a number `num` is the number of substrings of `num` when it is read as a string that meet the following conditions:\n1. It has length `k`.\n2. It is a divisor of `num`.",
        testCases: [
          { input: "num = 240, k = 2", output: "2", explanation: "Substrings are '24', '40'. Both divide 240." }
        ],
        solutions: [
          {
            type: "String Sliding Window",
            concept: "Pehle number ko string mein convert karenge. Phir `k` size ki sliding window se har substring nikalenge aur check karenge ki woh number ko divide karta hai ya nahi.",
            code: `def divisorSubstrings(num, k):
    s = str(num)
    count = 0
    
    for i in range(len(s) - k + 1):
        # Extract k-length substring
        sub = int(s[i : i+k])
        if sub != 0 and num % sub == 0:
            count += 1
            
    return count`,
            dryRun: [
              "**Step 1: First Window**<br>• **State:** `num=240`, `k=2`, `s='240'`<br>• **Window:** i=0 (val '24'). 240 % 24 == 0. **Count = 1**.",
              "**Step 2: Second Window**<br>• **Window:** i=1 (val '40'). 240 % 40 == 0. **Count = 2**.",
              "**Step 3: End**<br>• **Result:** Final count is 2."
            ],
            complexity: "Time: O(N), Space: O(N) to store string"
          }
        ],
        importantNotes: "Number manipulation mein string conversion kabhi kabhi simplest solution hota hai.\n**Divide by Zero** case ka humesha dhyan rakhein (`sub != 0`)."
      },
      { 
        isMastery: true, 
        id: "m_diet_plan",
        difficulty: "E", 
        name: "Diet Plan Performance", 
        companies: ["Amazon"], 
        link: "https://leetcode.com/problems/diet-plan-performance/",
        problemStatement: "A dieter consumes `calories[i]` calories on the i-th day. Given `k` (consecutive days), they calculate total calories `T` for every window of `k` days.\nScore +1 if `T > upper`, Score -1 if `T < lower`, else 0.",
        testCases: [
          { input: "calories = [1,2,3,4,5], k = 1, lower = 3, upper = 3", output: "0" }
        ],
        solutions: [
          {
            type: "Optimal (Fixed Window)",
            concept: "Fixed size `k` window ka sum maintain karenge. Har window ke khatam hone par score calculate karenge aur window ko slide karenge.",
            code: `def dietPlanPerformance(calories, k, lower, upper):
    curr_sum = sum(calories[:k])
    score = 0
    
    def get_score(s):
        if s < lower: return -1
        if s > upper: return 1
        return 0
        
    score += get_score(curr_sum)
    
    for i in range(k, len(calories)):
        curr_sum += calories[i] - calories[i-k]
        score += get_score(curr_sum)
        
    return score`,
            dryRun: [
              "**Step 1: Init Window**<br>• **Array State:** `[1, 2, 3, 4, 5]`<br>• **Pointers:** `k=1`, `sum=1`. score = -1 (since 1 < 3).",
              "**Step 2: Slide 1**<br>• **State:** `sum=2` (new element 2, removed 1).<br>• **Compare:** 2 < 3, toh `score = -1 + (-1) = -2`.",
              "**Step 3: Slide 2**<br>• **State:** `sum=3` (new 3, removed 2).<br>• **Compare:** 3 == range, `score = -2 + 0 = -2`."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Sliding window ka generic structure same rehta hai: initial window + loop to shift.\nLogic simplified rakhne ke liye helper function (`get_score`) use karein."
      },
      { 
        isMastery: true, 
        id: "m_longest_nice",
        difficulty: "E", 
        name: "Longest Nice Substring", 
        companies: ["Microsoft"], 
        link: "https://leetcode.com/problems/longest-nice-substring/",
        problemStatement: "A string `s` is nice if, for every letter of the alphabet that `s` contains, it appears both in uppercase and lowercase.\nReturn the longest nice substring of `s`.",
        testCases: [
          { input: 's = "YazaAay"', output: '"aAa"' }
        ],
        solutions: [
          {
            type: "Divide & Conquer (Sliding Window Variant)",
            concept: "Hum poori string ko check karenge. Agar koi aisa character milta hai jiska uppercase ya lowercase missing hai, toh woh character kisi bhi 'nice' substring ka part nahi ho sakta. Hum string ko us point par split karke dono sides check karenge.",
            dryRun: [
              "**Step 1: Pair Found**<br>• **State:** nums=[2, 7, 11, 15], Target=9, L=0 (2), R=1 (7)<br>• **Action:** 2+7=9. Perfect Match!<br>• **Result:** Returns indices [1, 2]"
            ],
            code: `def longestNiceSubstring(s):
    if len(s) < 2: return ""
    
    char_set = set(s)
    for i, c in enumerate(s):
        if c.swapcase() not in char_set:
            # s[i] is a bad character
            s1 = longestNiceSubstring(s[:i])
            s2 = longestNiceSubstring(s[i+1:])
            return s1 if len(s1) >= len(s2) else s2
            
    return s`,
            dryRun: [
              "**Step 1: Check String**<br>• **State:** `s='YazaAay'`, `char_set={Y,a,z,A,y}`<br>• **Logic:** 'z' (idx 2) ka lowercase 'Z' missing hai! Humein yahan se split karna hoga.",
              "**Step 2: Split Logic**<br>• **Split:** `s1='Ya'`, `s2='aAay'`<br>• **Recursive Call:** 'Ya' nice nahi hai. 'aAay' ko check kiya.",
              "**Step 3: Found Result**<br>• **Result:** 'aAa' is the longest nice substring found."
            ],
            complexity: "Time: O(N^2) in worst case, Space: O(N) for recursion"
          }
        ],
        importantNotes: "Kuch problems Sliding Window se zyada Divide & Conquer se solve hoti hain jab condition 'poore window' par depend kare.\n`swapcase()` function check karne ke liye bahut handy hai."
      },
      { 
        isMastery: true, 
        id: "m_count_vowels",
        difficulty: "E", 
        name: "Count Vowel Substrings of a String", 
        companies: ["Amazon"], 
        link: "https://leetcode.com/problems/count-vowel-substrings-of-a-string/",
        problemStatement: "A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has at least one of each vowel.",
        testCases: [
          { input: 's = "aeiouu"', output: "2", explanation: '"aeiou" and "aeiouu" are both vowel substrings.' }
        ],
        solutions: [
          {
            type: "Brute Force (Sliding Window)",
            concept: "Choti constraints (N=100) ki wajah se hum har possible substring check kar sakte hain. Substring sirf vowels ki honi chahiye aur usme saare 5 vowels hone chahiye.",
            code: `def countVowelSubstrings(s):
    count = 0
    vowels = set("aeiou")
    n = len(s)
    
    for i in range(n):
        curr_set = set()
        for j in range(i, n):
            if s[j] not in vowels:
                break
            curr_set.add(s[j])
            if len(curr_set) == 5:
                count += 1
                
    return count`,
            dryRun: [
              "**Step 1: Check Window**<br>• **State:** `s='aeiouu'`, `i=0`<br>• **Action:** Index 0 se start hone wali substrings: 'aeiou' (saare vowels hain) aur 'aeiouu'. **Count = 2**.",
              "**Step 2: Next i**<br>• **State:** `i=1` (char 'e'). Substring 'eiouu' mein 'a' missing hai. Invalid.",
              "**Step 3: End**<br>• **Result:** Total 2 substrings beautiful hain."
            ],
            complexity: "Time: O(N^2), Space: O(1)"
          }
        ],
        importantNotes: "Jab problem mein 'at least one of each' ho, toh `set()` ka size use karein.\nSliding window optimization (O(N)) iska complex hai, but N=100 ke liye O(N^2) is perfectly fine."
      },
      { 
        isMastery: true, 
        id: "m_k_radius",
        difficulty: "E", 
        name: "K Radius Subarray Averages", 
        companies: ["Amazon"], 
        link: "https://leetcode.com/problems/k-radius-subarray-averages/",
        problemStatement: "You are given a 0-indexed array `nums` and an integer `k`.\nThe k-radius average for index `i` is the average of all elements in `nums` between `i-k` and `i+k` (inclusive). If there are less than `k` elements before or after `i`, the average is -1.",
        testCases: [
          { input: "nums = [7,4,3,9,1,8,5,2,6], k = 3", output: "[-1,-1,-1,5,4,4,-1,-1,-1]" }
        ],
        solutions: [
          {
            type: "Optimal (Sliding Window)",
            concept: "Window size hamesha `2*k + 1` hogi. Hum window sum maintain karenge aur result index `i` (jo window ka center hai) par average store karenge.",
            code: `def getAverages(nums, k):
    n = len(nums)
    res = [-1] * n
    window_size = 2 * k + 1
    
    if n < window_size: return res
    
    curr_sum = sum(nums[:window_size])
    for i in range(k, n - k):
        res[i] = curr_sum // window_size
        # Slide window if not at end
        if i + k + 1 < n:
            curr_sum += nums[i + k + 1] - nums[i - k]
            
    return res`,
            dryRun: [
              "**Step 1: First Radius**<br>• **Array State:** `[7, 4, 3, 9, 1, 8, 5]` (First 7 elements)<br>• **State:** Sum = 37. `res[3] = 37 // 7 = 5`.",
              "**Step 2: Slide Window**<br>• **State:** `Sum = 37 - 7 + 2 = 32`. `res[4] = 32 // 7 = 4`.",
              "**Step 3: Final Array**<br>• **Array State:** `[-1, -1, -1, 5, 4, 4, -1, -1, -1]`."
            ],
            complexity: "Time: O(N), Space: O(N) for result"
          }
        ],
        importantNotes: "Window center logic mein range hamesha `[i-k, i+k]` hoti hai.\nInteger division (`//`) ensure karta hai floor average."
      },
      { 
        isMastery: true, 
        id: "m_sub_threshold",
        difficulty: "E", 
        name: "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold", 
        companies: ["Amazon"], 
        link: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",
        problemStatement: "Given an array of integers `arr` and two integers `k` and `threshold`, return the number of sub-arrays of size `k` and average greater than or equal to `threshold`.",
        testCases: [
          { input: "arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4", output: "3" }
        ],
        solutions: [
          {
            type: "Optimal (Sliding Window)",
            concept: "Average calculation ke liye hum target sum nikal lenge: `target_sum = k * threshold`. Phir sliding window se har window ka sum check karenge.",
            code: `def numOfSubarrays(arr, k, threshold):
    target_sum = k * threshold
    curr_sum = sum(arr[:k])
    count = 0
    
    if curr_sum >= target_sum: count += 1
    
    for i in range(k, len(arr)):
        curr_sum += arr[i] - arr[i-k]
        if curr_sum >= target_sum:
            count += 1
            
    return count`,
            dryRun: [
              "**Step 1: Target**<br>• **State:** `k=3, threshold=4`. Target Sum = 12.<br>• **Window 1:** `[2, 2, 2]` Sum=6. Not valid.",
              "**Step 2: Slide**<br>• **Window 2:** `[2, 2, 5]` Sum=9. Not valid.<br>• **Window 3:** `[2, 5, 5]` Sum=12. **Count = 1**.",
              "**Step 3: Found More**<br>• **Window 4:** `[5, 5, 5]` Sum=15. **Count = 2**."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Hamesha average ki jagah multiplication logic use karein (`sum >= k * threshold`) taaki division se bach sakein.\nFixed size window optimization hamesha O(N) hoti hai."
      },
      { 
        isMastery: true, 
        id: "m_vowels_order",
        difficulty: "E", 
        name: "Longest Substring of All Vowels in Order", 
        companies: ["Google"], 
        link: "https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/",
        problemStatement: "A string is considered beautiful if it only consists of vowels and all five vowels appear in order: 'a' < 'e' < 'i' < 'o' < 'u'.\nReturn the length of the longest beautiful substring.",
        testCases: [
          { input: 'word = "aeiauoaeiouuuaeiou"', output: "13" }
        ],
        solutions: [
          {
            type: "Optimal (Sliding Window)",
            concept: "Hum string ko scan karenge. Agar current char pichle se bada ya barabar hai, toh beautiful sequence continue hai. Agar nahi, toh sequence break ho gayi. Hum count karenge kitne unique vowels mile.",
            code: `def longestBeautifulSubstring(word):
    ans = 0
    n = len(word)
    i = 0
    while i < n:
        if word[i] == 'a':
            curr_len = 1
            unique_count = 1
            j = i + 1
            while j < n and word[j] >= word[j-1]:
                if word[j] > word[j-1]:
                    unique_count += 1
                curr_len += 1
                j += 1
            if unique_count == 5:
                ans = max(ans, curr_len)
            i = j
        else:
            i += 1
    return ans`,
            dryRun: [
              "[STATE] word='aeiauo...', i=0 [DESC] starts with 'a'. j moves to 'e', 'i', then 'a' breaks it. unique=3. invalid.",
              "[STATE] word='...aeiouuu...', i=6 [DESC] starts with 'a'. j moves through all vowels in order. unique=5. len=13.",
              "[STATE] Done. ans=13."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Sequence order problems mein condition `word[j] >= word[j-1]` bahut useful hoti hai.\nSirf 'a' se start hone wali strings hi beautiful ho sakti hain."
      },
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
    ],
    conceptBoosters: [
      {
        q: "Sliding Window ka basic idea kya hai?",
        a: "Socho ek 'window' hai jo array ke upar se nikal rahi hai. Jab window aage badhti hai, toh ek naya element 'add' hota hai aur ek purana element 'remove' hota hai. Humein poori window ka sum firse calculate nahi karna padta, bas `sum = sum + new - old` karna hota hai. Isse performance O(N) ho jati hai."
      },
      {
        q: "Fixed vs Variable Window mein kya farak hai?",
        a: "Fixed window mein window ka size (k) hamesha same rehta hai (e.g., Max sum of k elements). Variable window mein window 'expand' hoti hai condition meet karne ke liye aur 'shrink' hoti hai condition maintain karne ke liye (e.g., Smallest subarray with sum > X)."
      },
      {
        q: "Variable Window (Expand/Shrink) ka dry run samjhao.",
        a: "Humein sum >= 7 chahiye. Array: `[2, 3, 1, 2, 4, 3]`<br>1. **Expand:** Right pointer ko move kiya jab tak sum 7 ya usse bada na ho: `[2, 3, 1, 2]` (Sum=8).<br>2. **Shrink:** Left pointer ko move karke window choti karo jab tak condition valid rahe: `[3, 1, 2]` (Sum=6 - invalid).<br>3. **Loop:** Firse expand kiya: `[3, 1, 2, 4]` (Sum=10). Firse shrink kiya... aise hi minimum length mil jayegi."
      }
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
      { 
        isMastery: true, 
        id: "m_running_sum",
        difficulty: "E", 
        name: "Running Sum of 1d Array", 
        companies: ["Google", "Amazon", "Apple"], 
        link: "https://leetcode.com/problems/running-sum-of-1d-array/",
        problemStatement: "Given an array `nums`. We define a running sum of an array as `runningSum[i] = sum(nums[0]…nums[i])`.\nReturn the running sum of `nums`.",
        testCases: [
          { input: "nums = [1,2,3,4]", output: "[1,3,6,10]" }
        ],
        solutions: [
          {
            type: "Optimal (Prefix Sum)",
            concept: "Hum array ko traverse karenge aur har element mein pichle element ka sum add karte jayenge. `nums[i] = nums[i] + nums[i-1]`.",
            code: `def runningSum(nums):
    for i in range(1, len(nums)):
        nums[i] += nums[i-1]
    return nums`,
            dryRun: [
              "**Step 1: Starting**<br>• **Array State:** `[1, 2, 3, 4]`<br>• **Logic:** Loop index `i=1` (value 2). Humein pichli value (1) isme add karni hai.<br>• **Result:** `2 + 1 = 3`. Array ab: `[1, 3, 3, 4]`.",
              "**Step 2: Accumulating**<br>• **Array State:** `[1, 3, 3, 4]`<br>• **Logic:** Loop index `i=2` (value 3). Pichli value (3) add ki.<br>• **Result:** `3 + 3 = 6`. Array ab: `[1, 3, 6, 4]`.",
              "**Step 3: Final Sum**<br>• **Array State:** `[1, 3, 6, 10]`<br>• **Logic:** Loop index `i=3` (value 4). Pichli value (6) add ki.<br>• **Result:** `4 + 6 = 10`."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Prefix sum basic build block hai range sum problems ke liye.\nIn-place modification space save karti hai."
      },
      { 
        isMastery: true, 
        id: "m_pivot_index",
        difficulty: "E", 
        name: "Find Pivot Index", 
        companies: ["Amazon", "Google", "Facebook"], 
        link: "https://leetcode.com/problems/find-pivot-index/",
        problemStatement: "The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.",
        testCases: [
          { input: "nums = [1,7,3,6,5,6]", output: "3" }
        ],
        solutions: [
          {
            type: "Optimal (Prefix Sum)",
            concept: "Pehle total sum nikal lo. Phir left_sum maintain karo. Har index `i` par check karo: `left_sum == (total_sum - left_sum - nums[i])`. Agar barabar hai toh `i` pivot hai.",
            code: `def pivotIndex(nums):
    total = sum(nums)
    left_sum = 0
    for i, x in enumerate(nums):
        if left_sum == (total - left_sum - x):
            return i
        left_sum += x
    return -1`,
            dryRun: [
              "**Step 1: Total Sum**<br>• **Array State:** `[1, 7, 3, 6, 5, 6]`<br>• **Values:** Total Sum = **28**, `left_sum = 0`<br>• **Logic:** Pehle poore array ka sum nikal liya.",
              "**Step 2: Iterating**<br>• **Pointers:** `i=0` (x=1). Check: `0 == (28-0-1)`? False.<br>• **Pointers:** `i=1` (x=7). Check: `1 == (28-1-7)`? False.<br>• **Pointers:** `i=2` (x=3). Check: `8 == (28-8-3)`? False.",
              "**Step 3: Pivot Found**<br>• **Pointers:** `i=3` (x=6). Check: `11 == (28-11-6)`? **True!**<br>• **Result:** Index 3 pivot hai."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Left side ka sum pata hai, toh right side automatically `total - left - current` hota hai.\nEdge cases: index 0 and last index."
      },
      { 
        isMastery: true, 
        id: "m_kadanes",
        difficulty: "M", 
        name: "Maximum Subarray (Kadane's Algorithm)", 
        companies: ["Amazon", "Google", "Meta", "Microsoft"], 
        link: "https://leetcode.com/problems/maximum-subarray/",
        problemStatement: "Given an integer array `nums`, find the subarray with the largest sum and return its sum.",
        testCases: [
          { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6" }
        ],
        solutions: [
          {
            type: "Optimal (Kadane's)",
            concept: "Hum har point par decide karenge: kya purana sum continue karein ya naya start karein? `curr_sum = max(nums[i], curr_sum + nums[i])`. Isse hum local maximum track karte hain.",
            code: `def maxSubArray(nums):
    max_sum = curr_sum = nums[0]
    for i in range(1, len(nums)):
        curr_sum = max(nums[i], curr_sum + nums[i])
        max_sum = max(max_sum, curr_sum)
    return max_sum`,
            dryRun: [
              "**Step 1: Initial**<br>• Array: `[-2, 1, -3, 4, -1, 2, 1, -5, 4]`<br>• `curr_sum = -2`, `max_sum = -2`.",
              "**Step 2: Decisions**<br>• i=1 (x=1): `max(1, -2+1) = 1`. (Naya start kiya). `max_sum = 1`.<br>• i=2 (x=-3): `max(-3, 1-3) = -2`. (Purana continue). `max_sum = 1`.",
              "**Step 3: Finding Max**<br>• i=3 (x=4): `max(4, -2+4) = 4`. (Naya start). `max_sum = 4`.<br>• i=4,5,6 follow karenge... end mein `max_sum = 6` milega."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Agar `curr_sum` negative ho jaye, toh naya subarray start karna hi behtar hai.\nYe algorithm array mein kam se kam ek number mangta hai."
      },
      { 
        isMastery: true, 
        id: "m_subarray_sum_k",
        difficulty: "M", 
        name: "Subarray Sum Equals K", 
        companies: ["Google", "Amazon", "Meta"], 
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
        problemStatement: "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.",
        testCases: [
          { input: "nums = [1,1,1], k = 2", output: "2" }
        ],
        solutions: [
          {
            type: "Optimal (Prefix Sum + HashMap)",
            concept: "Hum running sum track karenge. Agar `curr_sum - k` pehle kabhi dekha gaya hai, iska matlab us point se ab tak ka sum `k` hai. HashMap mein frequency store karenge.",
            code: `def subarraySum(nums, k):
    count = 0
    curr_sum = 0
    sums_map = {0: 1} # Base case
    
    for x in nums:
        curr_sum += x
        if curr_sum - k in sums_map:
            count += sums_map[curr_sum - k]
        sums_map[curr_sum] = sums_map.get(curr_sum, 0) + 1
        
    return count`,
            dryRun: [
              "**Step 1: Setup**<br>• nums: `[1, 1, 1]`, k=2, Map: `{0: 1}` (Base case).<br>• i=0 (x=1): `curr_sum = 1`. `1 - 2 = -1` (Not in map). Map: `{0: 1, 1: 1}`.",
              "**Step 2: Subarray Found**<br>• i=1 (x=1): `curr_sum = 2`. `2 - 2 = 0` (Found in map! frequency=1). `count = 1`. Map: `{0: 1, 1: 1, 2: 1}`.",
              "**Step 3: Another Match**<br>• i=2 (x=1): `curr_sum = 3`. `3 - 2 = 1` (Found in map! frequency=1). `count = 2`. Map: `{0: 1, 1: 1, 2: 1, 3: 1}`.<br>• Result: 2."
            ],
            complexity: "Time: O(N), Space: O(N)"
          }
        ],
        importantNotes: "HashMap mein `{0: 1}` dalna mat bhulna, ye tab kaam aata hai jab pure prefix ka sum `k` ho.\nNegative numbers hone par sliding window fail ho jata hai, isliye Prefix Sum best hai."
      },
      { 
        isMastery: true, 
        id: "m_range_sum",
        difficulty: "E", 
        name: "Range Sum Query - Immutable", 
        companies: ["Facebook", "Amazon"], 
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
        problemStatement: "Given an integer array `nums`, handle multiple queries of the sum of elements between indices `left` and `right` inclusive.",
        testCases: [
          { input: "nums = [-2, 0, 3, -5, 2, -1], sumRange(0, 2)", output: "1" }
        ],
        solutions: [
          {
            type: "Optimal (Prefix Sum)",
            concept: "Constructor mein hi prefix sum calculate kar lo. Kisi bhi range `[L, R]` ka sum `prefix[R+1] - prefix[L]` se O(1) mein mil jayega.",
            code: `class NumArray:
    def __init__(self, nums):
        self.prefix = [0] * (len(nums) + 1)
        for i in range(len(nums)):
            self.prefix[i+1] = self.prefix[i] + nums[i]

    def sumRange(self, left, right):
        return self.prefix[right+1] - self.prefix[left]`,
            dryRun: [
              "[STATE] nums=[-2, 0, 3], prefix=[0, -2, -2, 1] [DESC] query(0,2): prefix[3] - prefix[0] = 1 - 0 = 1.",
              "[STATE] query(1,2): prefix[3] - prefix[1] = 1 - (-2) = 3."
            ],
            complexity: "Init: O(N), Query: O(1), Space: O(N)"
          }
        ],
        importantNotes: "Padding (0 at index 0) use karne se boundary conditions handle karna aasan ho jata hai.\nMultiple queries ke liye humesha pre-computation behtar hai."
      },
      { 
        isMastery: true, 
        id: "m_product_subarray",
        difficulty: "M", 
        name: "Maximum Product Subarray", 
        companies: ["Amazon", "Google", "Microsoft"], 
        link: "https://leetcode.com/problems/maximum-product-subarray/",
        problemStatement: "Given an integer array `nums`, find a subarray that has the largest product, and return the product.",
        testCases: [
          { input: "nums = [2,3,-2,4]", output: "6" }
        ],
        solutions: [
          {
            type: "Optimal (Min-Max Kadane's)",
            concept: "Products mein negative number milne se min value max ban sakti hai. Isliye hum har step par `max_so_far` aur `min_so_far` dono track karenge.",
            code: `def maxProduct(nums):
    res = max(nums)
    curr_min = curr_max = 1
    
    for x in nums:
        if x == 0:
            curr_min = curr_max = 1
            continue
        tmp = curr_max * x
        curr_max = max(tmp, curr_min * x, x)
        curr_min = min(tmp, curr_min * x, x)
        res = max(res, curr_max)
        
    return res`,
            dryRun: [
              "**Step 1: Tracking Min/Max**<br>• nums: `[2, 3, -2, 4]`. `curr_max = curr_min = res = 2` (first element).",
              "**Step 2: Accumulating**<br>• i=1 (x=3): `curr_max = max(3, 6, 3) = 6`, `curr_min = min(3, 6, 3) = 3`. `res = 6`.",
              "**Step 3: Negative Impact**<br>• i=2 (x=-2): `tmp = 6 * -2 = -12`. `curr_max = max(-2, 3 * -2, -12) = -2`. `curr_min = min(-2, -6, -12) = -12`. `res = 6`. (Note how max became small due to negative).",
              "**Final:** `res = 6`."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "0 encounter hone par product reset karna padta hai.\nNegative numbers ke swap potential ke liye `curr_min` zaroori hai."
      },
      { 
        isMastery: true, 
        id: "m_cont_subarray_sum",
        difficulty: "M", 
        name: "Continuous Subarray Sum", 
        companies: ["Facebook", "Amazon"], 
        link: "https://leetcode.com/problems/continuous-subarray-sum/",
        problemStatement: "Given an integer array `nums` and an integer `k`, return `true` if `nums` has a continuous subarray of size at least two whose elements sum up to a multiple of `k`.",
        testCases: [
          { input: "nums = [23,2,4,6,7], k = 6", output: "true" }
        ],
        solutions: [
          {
            type: "Optimal (Prefix Remainder)",
            concept: "Hum prefix sum ka remainder store karenge (`sum % k`). Agar wahi remainder pehle mil chuka hai aur distance >= 2 hai, matlab beech ka sum `k` ka multiple hai.",
            code: `def checkSubarraySum(nums, k):
    rem_map = {0: -1}
    curr_sum = 0
    
    for i, x in enumerate(nums):
        curr_sum += x
        rem = curr_sum % k
        if rem in rem_map:
            if i - rem_map[rem] >= 2:
                return True
        else:
            rem_map[rem] = i
            
    return False`,
            dryRun: [
              "[STATE] nums=[23,2,4...], k=6, map={0:-1} [DESC] i=0 (23): rem=23%6=5. map={0:-1, 5:0}.",
              "[STATE] i=1 (2): curr=25, rem=25%6=1. map={0:-1, 5:0, 1:1}.",
              "[STATE] i=2 (4): curr=29, rem=29%6=5. 5 in map! i-map[5] = 2-0=2 (>=2). Return True."
            ],
            complexity: "Time: O(N), Space: O(N)"
          }
        ],
        importantNotes: "Remainder logic: `(a - b) % k == 0` implies `a % k == b % k`.\nSize 2 constraint ke liye index store karna padta hai."
      },
      { 
        isMastery: true, 
        id: "m_subarray_div_k",
        difficulty: "M", 
        name: "Subarray Sums Divisible by K", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/subarray-sums-divisible-by-k/",
        problemStatement: "Given an integer array `nums` and an integer `k`, return the number of non-empty subarrays that have a sum divisible by `k`.",
        testCases: [
          { input: "nums = [4,5,0,-2,-3,1], k = 5", output: "7" }
        ],
        solutions: [
          {
            type: "Optimal (Prefix Remainder HashMap)",
            concept: "Wahi remainder logic, but is baar frequency count karni hai. Jitni baar ek remainder pehle aaya hai, utne naye subarrays banenge.",
            code: `def subarraysDivByK(nums, k):
    count = 0
    curr_sum = 0
    rem_map = {0: 1}
    
    for x in nums:
        curr_sum += x
        rem = curr_sum % k
        # Handle negative remainders in Python
        if rem < 0: rem += k 
        
        if rem in rem_map:
            count += rem_map[rem]
            rem_map[rem] += 1
        else:
            rem_map[rem] = 1
            
    return count`,
            dryRun: [
              "[STATE] nums=[4,5,0...], k=5, map={0:1} [DESC] x=4: rem=4. map={0:1, 4:1}.",
              "[STATE] x=5: curr=9, rem=4. rem in map (val=1). count=1. map={0:1, 4:2}.",
              "[STATE] x=0: curr=9, rem=4. rem in map (val=2). count=3. map={0:1, 4:3}."
            ],
            complexity: "Time: O(N), Space: O(K) for map"
          }
        ],
        importantNotes: "Python mein `%` operator negatives ko handle kar leta hai but safe rehne ke liye `rem < 0` check kar sakte hain.\nPrefix remainders divisible logic ka extension hai."
      },
      { 
        isMastery: true, 
        id: "m_mid_index",
        difficulty: "E", 
        name: "Find the Middle Index in Array", 
        companies: ["Amazon", "Adobe"], 
        link: "https://leetcode.com/problems/find-the-middle-index-in-array/",
        problemStatement: "Return the leftmost `middleIndex` that satisfies: `nums[0] + ... + nums[middleIndex-1] == nums[middleIndex+1] + ... + nums[nums.length-1]`.",
        testCases: [
          { input: "nums = [2,3,-1,8,4]", output: "3" }
        ],
        solutions: [
          {
            type: "Optimal (Total Sum - Left Sum)",
            concept: "Ye 'Find Pivot Index' ka identical problem hai. Total sum nikalo aur left sum update karte hue check karo.",
            code: `def findMiddleIndex(nums):
    total = sum(nums)
    left = 0
    for i, x in enumerate(nums):
        if left == total - left - x:
            return i
        left += x
    return -1`,
            dryRun: [
              "[STATE] nums=[2,3,-1,8,4], total=16 [DESC] i=3 (x=8): left=4. 16-4-8 = 4. 4==4. Return 3."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Problem statements different ho sakte hain but core logic same rehta hai.\nHamesha leftmost pucha jaye toh standard loop index 0 se hi start karein."
      },
      { 
        isMastery: true, 
        id: "m_circular_sum",
        difficulty: "M", 
        name: "Maximum Sum Circular Subarray", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
        problemStatement: "Given a circular integer array `nums` of length `n`, return the maximum possible sum of a non-empty subarray.",
        testCases: [
          { input: "nums = [1,-2,3,-2]", output: "3" }
        ],
        solutions: [
          {
            type: "Optimal (Modified Kadane's)",
            concept: "Circular sum do tareeke se ho sakta hai: (1) Normal subarray (Kadane) ya (2) Wrapped subarray (`Total - Min Subarray`). Hum dono ka max lenge.",
            code: `def maxSubarraySumCircular(nums):
    total = sum(nums)
    # Standard Kadane for Max
    cur_max, max_sum = 0, nums[0]
    # Standard Kadane for Min
    cur_min, min_sum = 0, nums[0]
    
    for x in nums:
        cur_max = max(x, cur_max + x)
        max_sum = max(max_sum, cur_max)
        cur_min = min(x, cur_min + x)
        min_sum = min(min_sum, cur_min)
        
    if max_sum < 0: return max_sum # All negative case
    return max(max_sum, total - min_sum)`,
            dryRun: [
              "[STATE] nums=[1,-2,3,-2], total=0 [DESC] Max Kadane = 3. Min Kadane = -2. total - (-2) = 2. res = max(3, 2) = 3."
            ],
            complexity: "Time: O(N), Space: O(1)"
          }
        ],
        importantNotes: "Wrapped sum ka logic: 'Subarray humesha beech mein min sum chhod degi toh baki circular max ban jayega'.\nSpecial case: Agar saare numbers negative hain, toh `total - min_sum` zero de dega but array non-empty chahiye, isliye `max_sum` return karein."
      },
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
      { 
        isMastery: true, 
        difficulty: "E", 
        name: "Contains Duplicate", 
        companies: ["Amazon", "Google", "Microsoft"], 
        link: "https://leetcode.com/problems/contains-duplicate/",
        problemStatement: "Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.",
        testCases: [{ input: "nums = [1,2,3,1]", output: "true" }],
        solutions: [{
          type: "Optimal (HashSet)",
          concept: "Hum ek **HashSet** maintain karenge. Har number ko check karenge ki woh set mein pehle se hai ya nahi. Agar hai, toh duplicate mil gaya (True). Agar nahi, toh set mein add kar denge.",
          code: "def containsDuplicate(nums):\n    seen = set()\n    for x in nums:\n        if x in seen:\n            return True\n        seen.add(x)\n    return False",
          dryRun: [
            "1. nums = [1, 2, 3, 1], seen = set().",
            "2. x = 1: Seen mein nahi hai. Set: {1}.",
            "3. x = 2: Seen mein nahi hai. Set: {1, 2}.",
            "4. x = 3: Seen mein nahi hai. Set: {1, 2, 3}.",
            "5. x = 1: Set mein pehle se hai! Return True."
          ],
          complexity: "Time: O(N), Space: O(N)"
        }]
      },
      { 
        isMastery: true, 
        difficulty: "E", 
        name: "Two Sum", 
        companies: ["Amazon", "Google", "Meta"], 
        link: "https://leetcode.com/problems/two-sum/",
        problemStatement: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
        testCases: [{ input: "nums = [2,7,11,15], target = 9", output: "[0,1]" }],
        solutions: [{
          type: "Optimal (HashMap)",
          concept: "Hum numbers ko traverse karenge aur check karenge ki kya `target - current_number` HashMap mein hai. Agar hai, toh humein pair mil gaya. Agar nahi, toh current number aur uska index HashMap mein daal denge.",
          code: "def twoSum(nums, target):\n    prevMap = {} # val : index\n    for i, n in enumerate(nums):\n        diff = target - n\n        if diff in prevMap:\n            return [prevMap[diff], i]\n        prevMap[n] = i",
          dryRun: [
            "**Step 1: Setup**<br>• Input: `nums = [2, 7, 11, 15]`, Target: `9`<br>• HashMap: `{}` (Khali)<br>• **Iteration 1 (i=0):** n=2. Humein 9 banane ke liye 7 chahiye (`9 - 2 = 7`). Check kiya Map mein: 7 nahi hai. Map update: `{2: 0}`.",
            "**Step 2: Found Match**<br>• **Iteration 2 (i=1):** n=7. Humein 9 banane ke liye 2 chahiye (`9 - 7 = 2`). Check kiya Map mein: **2 mil gaya index 0 par!**<br>• **Result:** Return indices `[0, 1]`.",
            "**Why this works?** Humne sirf ek baar array ghooma aur Map ki madad se piche wali values ko 'yaad' rakha."
          ],
          complexity: "Time: O(N), Space: O(N)"
        }]
      },
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
    ],
    conceptBoosters: [
      {
        q: "HashMap O(1) kaise hota hai? Iska piche ka logic kya hai?",
        a: "HashMap ek **Hash Function** use karta hai jo aapki 'Key' ko ek unique index (bucket) mein convert kar deta hai. Isliye jab aap key search karte ho, toh direct us index par pahuch jaate ho. Average case mein ye O(1) hota hai. Worst case O(N) tab hota hai jab saari keys ek hi index par 'collide' ho jayein (lekin modern languages ise handle kar leti hain)."
      },
      {
        q: "HashSet aur HashMap mein kya difference hai?",
        a: "HashSet sirf unique **Values** (keys) store karta hai. HashMap **Key-Value** pairs store karta hai. Internally, Python ka `set()` ek aisi dictionary hai jisme values nahi hoti, sirf keys hoti hain."
      },
      {
        q: "Frequency Map kab use karein?",
        a: "Jab aapko 'gin-na' (count) ho ki koi element kitni baar aaya hai (jaise Anagrams mein). Dry run: `s = 'apple'` -> Map: `{'a':1, 'p':2, 'l':1, 'e':1}`."
      },
      {
        q: "Two Sum: HashMap vs Two Pointer?",
        a: "Agar array **Sorted** hai, toh Two Pointer use karo (O(1) space). Agar array **Unsorted** hai, toh HashMap use karo (O(N) space) kyunki sorting O(N log N) time legi."
      }
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
      { 
        isMastery: true, 
        id: "m_sqrt",
        difficulty: "E", 
        name: "Sqrt(x)", 
        companies: ["Amazon", "Microsoft"], 
        link: "https://leetcode.com/problems/sqrtx/",
        problemStatement: "Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.",
        testCases: [{ input: "x = 8", output: "2", explanation: "The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned." }],
        solutions: [{
          type: "Optimal (Binary Search)",
          concept: "Square root hamesha `1` aur `x` ke beech hota hai. Hum Binary Search se ek number `mid` dhundenge jiska `mid * mid <= x` ho.",
          code: `def mySqrt(x):
    if x < 2: return x
    l, r = 1, x // 2
    res = 0
    while l <= r:
        mid = (l + r) // 2
        if mid * mid == x:
            return mid
        if mid * mid < x:
            res = mid
            l = mid + 1
        else:
            r = mid - 1
    return res`,
          dryRun: [
            "**Step 1: Initial Range**<br>• x = 8. Range: `l=1`, `r=4` (x//2).<br>• `mid = (1+4)//2 = 2`.<br>• `2 * 2 = 4`. `4 < 8`, toh `res = 2` aur hum badi values check karenge (`l = 3`).",
            "**Step 2: Narrowing**<br>• Range: `l=3`, `r=4`.<br>• `mid = (3+4)//2 = 3`.<br>• `3 * 3 = 9`. `9 > 8`, toh range choti karenge (`r = 2`).",
            "**Step 3: Finish**<br>• `l=3`, `r=2`. Loop break ho gaya (`l > r`).<br>• **Final Result:** `res = 2`."
          ],
          complexity: "Time: O(log X), Space: O(1)"
        }]
      },
      { isMastery: true, difficulty: "E", name: "Guess Number Higher or Lower", companies: ["Google", "Microsoft"], link: "https://leetcode.com/problems/guess-number-higher-or-lower/" },
      { isMastery: true, difficulty: "E", name: "First Bad Version", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/first-bad-version/" },
      { 
        isMastery: true, 
        id: "m_search_insert",
        difficulty: "E", 
        name: "Search Insert Position", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/search-insert-position/",
        problemStatement: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
        testCases: [{ input: "nums = [1,3,5,6], target = 5", output: "2" }],
        solutions: [{
          type: "Optimal (Binary Search)",
          concept: "Ye simple Binary Search hai, bas twist ye hai ki agar element nahi milta, toh `left` pointer humesha sahi insertion position par rukta hai.",
          code: `def searchInsert(nums, target):
    l, r = 0, len(nums) - 1
    while l <= r:
        mid = (l + r) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            l = mid + 1
        else:
            r = mid - 1
    return l`,
          dryRun: [
            "**Step 1: Start**<br>• nums: `[1, 3, 5, 6]`, target: `5`<br>• `l=0, r=3`. `mid = 1` (val 3).<br>• `3 < 5`, toh `l = 2`.",
            "**Step 2: Match**<br>• `l=2, r=3`. `mid = 2` (val 5).<br>• `5 == 5`. Return index `2`.",
            "**Scenario 2 (Insertion):** target=2.<br>• i=0: mid=1 (3). 3>2, r=0.<br>• i=1: mid=0 (1). 1<2, l=1.<br>• l>r, return l=1. Perfect!"
          ],
          complexity: "Time: O(log N), Space: O(1)"
        }]
      },
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
      { 
        isMastery: true, 
        id: "m_valid_parentheses",
        difficulty: "E", 
        name: "Valid Parentheses", 
        companies: ["Amazon", "Google", "Meta"], 
        link: "https://leetcode.com/problems/valid-parentheses/",
        problemStatement: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        testCases: [{ input: "s = '()[]{}'", output: "true" }],
        solutions: [{
          type: "Optimal (Stack)",
          concept: "Jab bhi opening bracket aaye, use stack mein push karo. Jab closing aaye, check karo ki stack ke top par uska matching pair hai ya nahi.",
          code: `def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return not stack`,
          dryRun: [
            "**Step 1: Opening**<br>• s = `()[]{}`, stack = `[]`.<br>• char = `(`: Opening hai, stack mein push kiya. Stack: `['(']`.",
            "**Step 2: Closing Match**<br>• char = `)`: Closing hai. Stack se pop kiya: `(`. Match ho gaya! Stack: `[]`.",
            "**Step 3: Continue**<br>• char = `[`: Push. Stack: `['[']`.<br>• char = `]`: Pop match. Stack: `[]`.",
            "**Final:** Stack khali hai, iska matlab saare pair valid hain. Return True."
          ],
          complexity: "Time: O(N), Space: O(N)"
        }]
      },
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
      { 
        isMastery: true, 
        id: "m_middle_ll",
        difficulty: "E", 
        name: "Middle of the Linked List", 
        companies: ["Amazon", "Microsoft"], 
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
        problemStatement: "Given the `head` of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.",
        testCases: [{ input: "head = [1,2,3,4,5]", output: "[3,4,5]" }],
        solutions: [{
          type: "Optimal (Fast & Slow Pointer)",
          concept: "Hum do pointers use karenge: `slow` jo 1 step chalega aur `fast` jo 2 steps chalega. Jab `fast` end par pahuchega, `slow` exact middle mein hoga.",
          code: `def middleNode(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow`,
          dryRun: [
            "**Step 1: Start**<br>• List: `1 -> 2 -> 3 -> 4 -> 5`<br>• `slow` at 1, `fast` at 1.",
            "**Step 2: First Jump**<br>• `slow` moves to 2.<br>• `fast` moves to 3 (two steps).",
            "**Step 3: Second Jump**<br>• `slow` moves to 3.<br>• `fast` moves to 5.",
            "**Step 4: End**<br>• `fast.next` is null. Loop ends.<br>• **Result:** `slow` is at 3. Return node 3."
          ],
          complexity: "Time: O(N), Space: O(1)"
        }]
      },
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
      { 
        isMastery: true, 
        id: "m_same_tree",
        difficulty: "E", 
        name: "Same Tree", 
        companies: ["Amazon", "Google"], 
        link: "https://leetcode.com/problems/same-tree/",
        problemStatement: "Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.",
        testCases: [{ input: "p = [1,2,3], q = [1,2,3]", output: "true" }],
        solutions: [{
          type: "Optimal (DFS Recursion)",
          concept: "Hum dono trees ko ek saath traverse karenge. Agar dono nodes `null` hain, toh sahi hai. Agar ek `null` aur ek nahi, ya phir values alag hain, toh false. Phir left aur right subtrees ke liye check karenge.",
          code: `def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q or p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`,
          dryRun: [
            "**Step 1: Root Check**<br>• Tree P: `1(root) -> 2(L), 3(R)`<br>• Tree Q: `1(root) -> 2(L), 3(R)`<br>• P.val (1) == Q.val (1). Root match! Ab left bacho ko check karo.",
            "**Step 2: Left Subtree**<br>• Node P: 2, Node Q: 2. Values match! Ab inke bacho ko check karo (Null, Null). True.",
            "**Step 3: Right Subtree**<br>• Node P: 3, Node Q: 3. Values match! Inke bacho ko check karo (Null, Null). True.",
            "**Final:** Saare checks True hain, toh output True."
          ],
          complexity: "Time: O(N), Space: O(H) where H is height"
        }]
      },
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
