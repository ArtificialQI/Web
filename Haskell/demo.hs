
import System.Directory.Internal.Prelude (RealFloat)
main :: IO()
main = putStrLn "Hello World!"
-- simple functions
doubleMe :: Num a => a -> a
doubleMe x = x + x

doubleUs :: Num a => a -> a -> a
doubleUs x y = doubleMe x + doubleMe y
-- conditions
doubleSmallNumber :: (Num a, Ord a) => a -> a
doubleSmallNumber x = (if x > 100 then x else x * 2) + 1 

length' :: Num a => [t] -> a
length' xs = sum [1 | _ <- xs]
-- comprehensions list
removeNonUppercase :: [Char] -> [Char]
removeNonUppercase st = [ c | c <- st, c `elem` ['A'..'Z']]

nestedList :: Integral a => [[a]] -> [[a]]
nestedList xxs = [ [ x | x <- xs, even x ] | xs <- xxs]
--tuples
{-
    let triangles = [ (a,b,c) | c <- [1..10], b <- [1..10], a <- [1..10] ]
    let rightTriangles = [ (a,b,c) | c <- [1..10], b <- [1..c], a <- [1..b], a^2 + b^2 == c^2]
-}
-- types & typeclasses
factorial :: (Num a, Enum a) => a -> a
factorial n = product [1..n]

fact :: (Eq p, Num p) => p -> p
fact n = if n == 0 then 1 else n * fact(n - 1)

circumference :: Floating a => a -> a
circumference r = 2 * pi * r

circumference' :: Double -> Double  
circumference' r = 2 * pi * r  

-- fromIntegral (length [1,2,3,4]) + 3.2

--Syntax in Function

lucky :: (Integral a) => a -> String  
lucky 7 = "LUCKY NUMBER SEVEN!"  
lucky x = "Sorry, you're out of luck, pal!"

factorial_ :: (Integral a) => a -> a  
factorial_ 0 = 1  
factorial_ n = n * factorial (n - 1)  

charName :: Char -> String  
charName 'a' = "Albert"  
charName 'b' = "Broseph"  
charName 'c' = "Cecil"

addVectors :: (Num a) => (a, a) -> (a, a) -> (a, a)  
addVectors (x1, y1) (x2, y2) = (x1 + x2, y1 + y2) 

first :: (a, b, c) -> a  
first (x, _, _) = x  
  
second :: (a, b, c) -> b  
second (_, y, _) = y  
  
third :: (a, b, c) -> c  
third (_, _, z) = z 

head' :: [a] -> a
head' [] = error "Can't call head on an empty list, dummy!"  
head' (x:_) = x 

tell :: (Show a) => [a] -> String  
tell [] = "The list is empty"  
tell [x] = "The list has one element: " ++ show x  
tell [x, y] = "The list has two elements: " ++ show x ++ " and " ++ show y  
tell (x:y:_) = "This list is long. The first two elements are: " ++ show x ++ " and " ++ show y

length'' :: (Num b) => [a] -> b  
length'' [] = 0  
length'' (_:xs) = 1 + length' xs  

{-
sum' :: (Num a) => [a] -> a  
sum' [] = 0  
sum' (x:xs) = x + sum' xs
-} 


capital :: String -> String  
capital "" = "Empty string, whoops!"  
capital all@(x:xs) = "The first letter of " ++ all ++ " is " ++ [x] 

--Guards Pattern matching

{-
bmiTell :: (RealFloat a) => a -> String  
bmiTell bmi  
    | bmi <= 18.5 = "You're underweight, you emo, you!"  
    | bmi <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"  
    | bmi <= 30.0 = "You're fat! Lose some weight, fatty!"  
    | otherwise   = "You're a whale, congratulations!"
-}

max' :: (Ord a) => a -> a -> a  
max' a b   
    | a > b     = a  
    | otherwise = b  

myCompare :: (Ord a) => a -> a -> Ordering  
a `myCompare` b  
    | a > b     = GT  
    | a == b    = EQ  
    | otherwise = LT 

bmiTell :: (RealFloat a) => a -> a -> String
bmiTell weight height  
    | bmi <= skinny = "You're underweight, you emo, you!"  
    | bmi <= normal = "You're supposedly normal. Pffft, I bet you're ugly!"  
    | bmi <= fat = "You're fat! Lose some weight, fatty!"  
    | otherwise   = "You're a whale, congratulations!"  
    where bmi = weight / height ^ 2 
          (skinny, normal, fat) = (18.5, 25.0, 30.0)

initials :: String -> String -> String  
initials firstname lastname = [f] ++ ". " ++ [l] ++ "."  
    where (f:_) = firstname  
          (l:_) = lastname 

calcBmis :: (RealFloat a) => [(a, a)] -> [a]  
calcBmis xs = [bmi w h | (w, h) <- xs]  
    where bmi weight height = weight / height ^ 2 

--let bindings

cylinder :: (RealFloat a) => a -> a -> a  
cylinder r h = 
    let sideArea = 2 * pi * r * h  
        topArea = pi * r ^2  
    in  sideArea + 2 * topArea

calcBmis' :: (RealFloat a) => [(a, a)] -> [a]  
calcBmis' xs = [bmi | (w, h) <- xs, let bmi = w / h ^ 2]

--case expressions

head'' :: [a] -> a  
head'' [] = error "No head for empty lists!"  
head'' (x:_) = x  

head''' :: [a] -> a  
head''' xs = case xs of [] -> error "No head for empty lists!"  
                        (x:_) -> x

describeList :: [a] -> String  
describeList xs = "The list is " ++ case xs of [] -> "empty."  
                                               [x] -> "a singleton list."   
                                               xs -> "a longer list."  


describeList' :: [a] -> String  
describeList' xs = "The list is " ++ what xs  
    where what [] = "empty."  
          what [x] = "a singleton list."  
          what xs = "a longer list." 

--Recursion






                                                                                                                                                                                                                                                                                                                                                                            