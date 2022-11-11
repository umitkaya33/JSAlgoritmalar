export const userValidation = (str) =>{
  if(
    str.length >= 4 && str.length <= 25 &&
    (/[a-zA-Z]/).test(str.slice(0,1)) && // charAt(0)
    (/^\w+$/).test(str) &&
    (/[a-zA-Z0-9]/).test(str.slice(-1)) // str.charAt(str.lenght-1)
  )
  {
  return true
}else{
  return false
}
}
// And Operator
// .length property

// Reg exp
// .charAt() .slice()
// .test

/* Rules
# 1. The username is between 4 and 25 characters.
# 2. It must start with a letter.
# 3. It can only contain letters, numbers, and the underscore character.
# 4. It cannot end with an underscore character.

#If the username is valid then your program should return the string `true`, otherwise return the string `false`.
u_hello_world123
*/
