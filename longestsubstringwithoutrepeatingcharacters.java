//Java Solution

class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> set = new HashSet<>();
        int left = 0;
        int right = 0;
        int ans = 0;
        
        while (right < s.length()) {
            if (!set.contains(s.charAt(right))) {
                set.add(s.charAt(right++));
                ans = Math.max(ans, right - left);
            } else {
                set.remove(s.charAt(left++));
            }
        }
        
        return ans;
    }
}