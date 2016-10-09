/**
 * Created by Jason on 2016/10/9.
 */


//这个函数是Action Creator
export  const plus  = (number)=>({
    type:'PLUS',
    number:number,
})
//plus(1)
//{type:'PLUS',number:1}  action
//并没有推荐格式的action method  自定义