def main():
    name=input("Enter the string:")
    special_characters = ['~', ':', "'", '+', '[', '\\', '@', '^', '{', '%', '(', '-', '"', '*', '|', ',', '&', '<', '`', '}', '.', '_', '=', ']', '!', '>', ';', '?', '#', '$', ')', '/']
    flag=0
    for i in name:
        if i in special_characters:
            flag=0
            print("String has special characters")
            break
        else:
            flag=1
    if flag:
        print("String has no special characters")

if __name__=="__main__":
    main()