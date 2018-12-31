
//revesre string pipe
function reverse(string) {
    var str = '';
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        str = char + str;
    }
    return str;
}

function reverse2(str) {
    return str.split('').reverse().join("");
}
console.log(reverse('Vaibhav'));
console.log(reverse2('Hello'));

//repeat
function repeat(str, separator, n) {
    if (n <= 0) {
        return '';
    }
    return str + separator + repeat(str, separator, n - 1);
}
console.log(repeat('Javascript', '@', 5));

//shorten
function shorten(str, n, notation) {
    var short = str.slice(0, n);
    if (str.length <= n) {
        notation = '';
    }
    return short + notation;
}
console.log(shorten('Javscript is awesome', 20, '...'));

//first letter uppercase in word
function ucfirst(string) {
    var text = string.charAt(0).toUpperCase() + string.slice(1);
    return text;
}
console.log(ucfirst('vaivbac lax'));

//uppercase first letter of each word
function ucwords(string) {
    return string.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}
console.log(ucwords('javascript is awesome'));

//slugify 
//Foo bar => foo-bar
let slugify = (string) => string.split(" ").map((word) => {
    return word.toLowerCase();
}).join('-');
console.log('=====>', slugify('vaibhav-bar'));


//camelize
//foo_bar => fooBar
let camelize = (string) => string.split(/[_-\s]/)
    .filter((val) => !!val)
    .map((word, key) => {
        let txt = !key ? word.toLowerCase() : word.slice(0, 1).toUpperCase() + word.slice(1) ;
        return txt;
    }).join("");
console.log('=====>', camelize('Vaibhav_laxman-patil uttut'));

//undersore
//javascriptIsAweoms => javascriipt_is_awesome)

let underscore = (str)=> {
    return str.replace(/\s/g, '')
    .replace(/[A-Z]/g, (word, key)=> {
    return key ? `_${word.toLowerCase()}` : word.toLowerCase();
    })
    }
    console.log(underscore('javascriiptIsAewosme'));

//find factorial
function pow(a,n) {
    let factorial = a;
      for(var i = 1; i< n ; i++) {
        factorial *= a;
      }
      return factorial;
  }
  console.log(pow(2,3))

 function pow2(a, n) {
     return (a**n)
 };
 console.log(pow2(5,3));
 
//flatten given array
function flatten(array) {
    return array.reduce((arr, ele) => {
        if (Array.isArray(ele)) {
            return arr.concat(flatten(ele));
        }
        return arr.concat(ele);
    }, [])
}

var items = [1, 2, 3, [4, 5, 6, [7, 8, 9], [10, 11, 12, 13, [14], [15], [16, [17]]]]];
console.log(flatten(items));

