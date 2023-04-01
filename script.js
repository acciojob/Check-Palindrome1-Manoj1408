// complete the given function

function palindrome(str){

	str.replaceAll(" ","");
	start = 0;
	end = str.length-1;
	while(start <end){
		if(str.charAt(start) != str.charAt(end)){
			return false;
		}
		start++;
		end--;
	}
	return true;
}
module.exports = palindrome
