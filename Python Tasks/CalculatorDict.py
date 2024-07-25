def addition(value1, value2):
    
    Ans = value1+value2
    return Ans

def subtraction(value1, value2):
    
    Ans = value1-value2
    return Ans

def multiply(value1, value2):
    
    Ans = value1*value2
    return Ans

def division(value1, value2):
    
    Ans = value1/value2
    return Ans

def main():
    num1=int(input("Enter the Number 1 :"))
    num2=int(input("Enter the Number 2 :"))
    Calcualtor={
          "+":addition,
          "-":subtraction,
          "*":multiply,
          "/":division
    }
    while True:
        print("1.Add ")
        print("2. Subtract ")
        print("3. Multiply")
        print("4. divide")
        print("5. Exit")
        choice = int(input("Enter choice from 1 to 5: ")) 
        if choice==1:
           print("************ADDED*********")
           print(f'Added Value is {Calcualtor["+"](num1,num2)}')
           print("___________________________ ") 
        elif choice==2:
            print("************Subtracted*********")
            print(f'subtracted Value is {Calcualtor["-"](num1,num2)}')
            print("___________________________ ") 
        elif choice==3:
            print("************MULTIPLIED*********")
            print(f'multiplied Value is {Calcualtor["*"](num1,num2)}')
            print("___________________________ ")       
        elif choice==4:
            print("************DIVIDED*********")
            print(f'divided Value is { Calcualtor["/"](num1,num2)}')
            print("___________________________ ") 
        if choice==5:
            print("Exited...")
            break
    

if __name__=="__main__":
        main()