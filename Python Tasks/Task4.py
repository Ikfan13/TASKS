def main():
    string=input("Enter the String : ")
    size=len(string)
    print(size)
    dict={}
    
    for i in range(size):
     count=0
     for j in range(size):
        if(string[i]==string[j]):
          count=count+1
     dict[string[i]]=count 
    print(dict)
                 

if __name__=="__main__":
      main()