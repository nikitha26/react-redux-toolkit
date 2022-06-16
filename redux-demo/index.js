const CAKE_ORDERED = CAKE_ORDERED;

function orderCake(){     //Action Creator
   return{     //return Action Obj
        type:CAKE_ORDERED,
        quanity:1
    }
}
