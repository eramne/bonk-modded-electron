function SafeTrig(){


}

SafeTrig.safeSin = function (r) {		
	r = Math.sin(r);
	r *= 10000000;
	r = Math.round(r);
	r /= 10000000;
	return r;
}

SafeTrig.safeCos = function(r) {
			
	r = Math.cos(r);
	r *= 10000000;
	r = Math.round(r);
	r /= 10000000;
	return r;
			
}
		
SafeTrig.safeTan = function(r) {
		
	r = Math.tan(r);
	r *= 10000000;
	r = Math.round(r);
	r /= 10000000;
	return r;
			
}
		
SafeTrig.safeASin = function(r) {
			
	r = Math.asin(r);
	r *= 10000000;
	r = Math.round(r);
	r /= 10000000;
	return r;
			
}
		
SafeTrig.safeACos = function(r) {
			
	r = Math.acos(r);
	r *= 10000000;
	r = Math.round(r);
	r /= 10000000;
	return r;
			
}
		
SafeTrig.safeATan = function(r) {
	
	r = Math.atan(r);
	r *= 10000000;
	r = Math.round(r);
	r /= 10000000;
	return r;
			
}
		
SafeTrig.safeATan2 = function(y, x) {
	
	var r = Math.atan2(y,x);
	r *= 10000000;
	r = Math.round(r);
	r /= 10000000;
	return r;
			
}