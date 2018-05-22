export class Multiple 
{
    constructor(upperLimit)
    {
        this.upperLimit = upperLimit;
    }
    addMultiples() 
    {
        var sum = 0;
        for(var i=0; i<this.upperLimit; i++)
        {
            if (i%3 == 0 || i%5 == 0)
            {
                sum += i;
            }
        }
        return sum;
    }
}