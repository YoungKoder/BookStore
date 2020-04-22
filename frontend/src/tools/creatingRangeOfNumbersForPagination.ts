
interface paramsForRange{
    from:number,
    to:number,
    step?:number|null
}
export const range = (paramsForRange:paramsForRange):any[]=>{
    const {from, to, step:stepFromParams} = paramsForRange;

   const step =  typeof stepFromParams === 'number'? stepFromParams: 1
   let i = from;
   const range = [];
   while(i<=to){
       range.push(i);
       i+=step;
   }
   return range;
}