var arr = [1,3,20,4,1,0];
var n = arr.length;
function findPeak(arr,n)
{
 if (n==1)
 return 0;
 if (arr[0] >= arr[1])
 return 0;
 if(arr[n-1] >= arr[n-2])
 return n-1;
 for(var i=0;i< n-1;i++)
 {
    if(arr[i] > arr[i-1] && arr[i] >= arr[i+1])
    return i;
 }
}

console.log(findPeak(arr,n));
