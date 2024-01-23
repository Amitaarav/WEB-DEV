function PrintNumVowel(str)
{
    let count=0;
    for(const char of str)
    {
        if(char ==='a'|| char==='e'||char==='o'||char==='u'||char==='i')
        {
            count ++;
        }
    }
    return count;
}
let Num=PrintNumVowel("apnaCollege");
console.log(Num);
const countVow=str=>
// here str is an argument ,if multiple arguments are there then use ()
{
    let count=0;
    for(const char of str)
    {
        if(char ==='a'|| char==='e'||char==='o'||char==='u'||char==='i')
        {
            count ++;
        }
    }
    return count;
};

console.log(countVow("Nit Calicut"))

