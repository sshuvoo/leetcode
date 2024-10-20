class ListNode {
   val: number
   next: ListNode | null
   constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val
      this.next = next === undefined ? null : next
   }
}

const listOne = new ListNode(1)
listOne.next = new ListNode(2)
listOne.next.next = new ListNode(4)

const listTwo = new ListNode(1)
listTwo.next = new ListNode(3)
listTwo.next.next = new ListNode(4)

function mergeTwoLists(
   list1: ListNode | null,
   list2: ListNode | null
): ListNode | null {
   const head = new ListNode()
   const curr = head;
   while(list1?.next && list2?.next){
      if(list1?.val>list2?.val){
         head.next = list2
         console.log("before", list2);
         console.log("head", head);
         list2 = list2.next
         console.log("after", list2);
      } else {
         head.next = list1
         list1 = list1.next
      }
   }
   return head.next
}

console.log(mergeTwoLists(listOne, listTwo))

// const mergetwoSortedArray = (arr1: number[], arr2: number[]): number[] => {
//    const sortedArray: number[] = []
//    let i = 0
//    let j = 0
//    while (arr1[i] && arr2[j]) {
//       if (arr1[i] > arr2[j]) {
//          sortedArray.push(arr2[j])
//          j++
//       } else {
//          sortedArray.push(arr1[i])
//          i++
//       }
//    }
//    if (arr1[i]) {
//       sortedArray.push(...arr1.slice(i))
//    }
//    if(arr2[j]){
//       sortedArray.push(...arr2.slice(j))
//    }
//    return sortedArray
// }

// console.log(mergetwoSortedArray([1, 2, 4], [1, 3, 4]))
