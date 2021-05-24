function reducer(prevstate,action){
    if(action.type === "INCREMENT"){
        return{number:prevstate.number+1};
    }else if(action.type ==="DECREMENT"){
        return{number:prevstate.number-1};
    }else{
        return null
    }
}

export default reducer;