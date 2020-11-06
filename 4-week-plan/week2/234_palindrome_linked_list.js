/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head == null) {
        return true;
    }
    
    let arr = [];
    let curr_node = head;
    
    while (curr_node != null) {
        arr.push(curr_node.val);
        curr_node = curr_node.next;
    }
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        if (arr[left] != arr[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    
    return true;
};