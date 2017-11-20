function promediame(arr){
	var finalstate=arr.reduce(function(state,a) { state.sum+=a;state.count+=1; return state },
		{sum:0,count:0});
		return finalstate.sum/finalstate.count
}

