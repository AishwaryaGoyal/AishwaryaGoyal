let var1: string = 'Hello World'
console.log(var1)
var a:number[]=[2,1,4]
var b=[...a]
console.log(a.indexOf(2))

var candles:number[]=[], j:number

for(j=0; j<10000;j++)
candles[j]=1000;

candles = candles.sort()
    var total = candles.length
    var tallest = candles[total-1]
    var totalTallest=1, i
    
    for(i=total-2; i>=0; i--)
    {
        if (candles[i]==tallest)
        totalTallest++
        else
        break;
    }
    console.log(totalTallest)

    // Write your code here
    var s="12:05:45AM"
    var hour:string, mint:string, sec:string, arr:string[], time:string=""
    arr=s.split(":")
    
    hour=arr[0]
    mint=arr[1]
    sec=arr[2]

    //If time is in pm then only conversion needed
    if(sec.charAt(2)=="P")
    {
        if(hour=="12")
        hour="12";
        else
        hour = String(+hour+12)
    }
    else
    {
        if(hour=="12")
        hour="00";
    }
    
    sec=sec.substring(0,2)
    time= time.concat(hour,":", mint,":", sec)
    console.log(time)





