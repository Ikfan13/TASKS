#using for loop you havve to create a list of square numbers
import math
def square(list,size):
 for i in range(size):
  num=int(input("Enter the number : "))
  value=num*num
  list.append(value)
 return list 

def main():
  
 squarelist=[]
 size=int(input("Enter the size of List"))
 print("the list of square is",square(squarelist,size))

if __name__=="__main__":
      main()