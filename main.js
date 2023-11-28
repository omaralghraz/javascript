function hello(  ...numbers   )
{ let res=0
    for(let i=0;i<numbers.length;i++)
    {
res+=numbers[i];
    }
    console.log(res)
}
hello(1,2,3,4,5)