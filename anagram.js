//Frequency Counter - validAnagram
//given two strings, write a function to determine if the second string is an anagram of the first.
// examples::: validAnagram('aaz', 'zza') // false
            // validAnagram('qwerty', 'qeywrt') // true

            function validAnagram(str1, str2){
                // takes two strings 
                // if str1 && str2 do not have same length
                if (str1.length !== str2.length) {
                    // return false
                    return false
                }
                // create counter object 
                const counter ={}
                for (let i = 0; i < str1.length; i++){
                    let letter = str1[i];
                    // if letter exists, increment, otherwise set to 1;
                    counter[letter] ? counter[letter] +=1 : counter[letter] = 1;
                }

                for (let i = 0; i < str2.length; i++) {
                    let letter = str2[i]
                    // cant find letter or letter is zero 
                    // then it is not an anagram
                    if (!counter[letter]) {
                        return false;
                    } else {
                        counter[letter] -= 1;
                    }
                }
                return true;
              }

              // create object of key: being the letter[i] in string
                                // value: being the number of times letter occurs 