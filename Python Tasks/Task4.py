def main():
    string=input("Enter the String : ")
    size=len(string)
    print(size)
    vis=[False for i in range(len(string))]
    print(vis)
    
    for i in range(size):
     count=0
     if vis[i]==False: 
      for j in range(size):
        if(string[i]==string[j]):
          vis[j]=True         
          count=count+1
      print(f'{string[i]} : {count} ')
    
                 

if __name__=="__main__":
      main()