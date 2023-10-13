// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 || l2) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

// Helper function to convert an array to a linked list
function arrayToList(arr) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummyHead.next;
}

// Helper function to convert a linked list to an array
function listToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

const l1 = arrayToList([2, 4, 3]);
const l2 = arrayToList([5, 6, 4]);

const result = addTwoNumbers(l1, l2);
console.log(listToArray(result)); // Output: [7, 0, 8]
