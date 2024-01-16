var str = "Hello"
var obj = {}

for(var i = 0;i<str.length; i++){
      var char  = str[i]

      obj[str[i]] =  (obj[str[i]] || 0) + 1
}

console.log(obj)