String "fhrh"  "534" "true" 'grg' '3534' 'false'
Number 8478  8467847687  48978.87648
Boolean true/false

////Es5////
////Es6////
Ecma Script  

//Es5//
var a = 10
var b = "hi"
var c = true

var a = 10
undefined
typeof(a)
"number"
var b = "aaa"
undefined
typeof(b)
"string"
var b = "10"
undefined
typeof(b)
"string"
var c = true
undefined
typeof(c)
"boolean"

//Es6//
let
const



var a =10
var a (decalration)
a=10(assignment)

var => we can redecalre and reassign
let => we cannot redecalre but we can reassign
const => we cannot redecalre nor reassign

//Operation////
var a = 10
var b = 20

> var b = 20
undefined
> a+b
30
> a-b
-10
> a*b
200
> a/b
0.5
> a%b
10
> 4%2
0
> 4%3
1
> 2%4
2
> 100/101
0.9900990099009901
> 100%101
100
////////////
> var a = "hi"
undefined
> var b =" JavaScript"
undefined
> a+b
'hi JavaScript'
> var a = "1"
undefined
> var b = '1'
undefined
> a+b
'11'
> var c = true
undefined
> var b = true
undefined
> c+b
2
> true+false+true+true
3
> true+5
6
> true+"true"
'truetrue'
> 1+"1"
'11'
> c


string+string = string
string+number = string
number+string = string
number+number = number
bool+bool = number

10+10+"10"="2010"
"10"+10+10="101010"
10+"10"+10="101010"

10+10+"10"-1 =2009
"10"+10+10-1 = 101009
10+"10"+10-1 = 101009

> '1'+'1'
'11'
> '1'-'1'
0
> '1'/'1'
1
> '1'*'1'
1

var a = 10
var b = "my age is "
var c ="my age is "+a
"my age is 10"
`my age is ${a}`

//es5
function add(a,b){
    return a+b
}

add(1,2)

//es6
let add = (a,b) => { return a+b }
add(1,2)

//es5
var a = require('abc')
module.exports = a
//es6
import a from 'abc';
export default a;


