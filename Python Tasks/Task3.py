def Addition(value1, value2):
    Ans = value1+value2
    return Ans

def Subtraction(value1, value2):
    Ans = value1-value2
    return Ans

def Multiplication(value1, value2):
    Ans = value1*value2
    return Ans

def Division(value1, value2):
    Ans = value1/value2
    return Ans



def main():
    while True:
        print('Choose operation')
        print('1.Addition\n2.Subtration\n3.Multiplication\n4.Division\n5.exit')
        select = int(input('Select 1/2/3/4'))
  
        if(select == 1):
            num01 = int(input('Enter 1st num'))
            num02 = int(input('Enter 2st num'))
            Ans = Addition(num01,num02)
            print(f'Addition {num01} and {num02}:',Ans)
        elif(select == 2):
            num01 = int(input('Enter 1st num'))
            num02 = int(input('Enter 2st num'))
            Ans = Subtraction(num01,num02)
            print(f'Subtration {num01} and {num02}:',Ans)
        elif(select == 3):
            num01 = int(input('Enter 1st num'))
            num02 = int(input('Enter 2st num'))
            Ans = Multiplication(num01,num02)
            print(f'Mutiplication {num01} and {num02}:',Ans)
        elif(select == 4):
            num01 = int(input('Enter 1st num'))
            num02 = int(input('Enter 2st num'))
            Ans = Division(num01,num02)
            print(f'Division {num01} and {num02}:',Ans)
        else:
            break

if __name__=="__main__":
    main()