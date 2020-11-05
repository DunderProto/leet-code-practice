/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let dummy = new ListNode(0, null);
    let curr_node = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            curr_node.next = l1;
            l1 = l1.next;
        } else {
            curr_node.next = l2;
            l2 = l2.next;
        }
        
        curr_node = curr_node.next;
    }
    
    if (l1 != null) {
        curr_node.next = l1;
    }
    
    if (l2 != null) {
        curr_node.next = l2;
    }
    
    return dummy.next;
    
};