def addition(addlist):
    sum=0
    for i in range(len(addlist)):
        sum=sum+addlist[i]
    return sum

def maximum(list):
    max=0
    for i in range(len(list)-1):
        if list[i]>list[i+1]:
            max=list[i]
        else:
            max=list[i+1]
    return max


def main():
    size=int(input("Enter the Size : "))
    list=[]
    for i in range(size):
        num=int(input(f'enter the number {i} :'))
        list.append(num)
    print(list)
    print("Added Value of elements in the list is ",addition(list))
    print("Maximum Element in the List is ",maximum(list))


if __name__== "__main__":
    main()