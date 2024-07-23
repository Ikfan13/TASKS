def addingstarter(starter):
    addstarter=input("Enter the Starter You want to add : ")
    starter.append(addstarter)
    print("Added Successfully")
    return starter
def updatestarter(starter):
    startertoupdate=input("Enter the existing starter to update : ")
    updatestarter=input("Enter the new starter to update the existing starter : ")
    for i in range(len(starter)):
        if starter[i]==startertoupdate:
            starter[i]=updatestarter
    print("Updated Successfully")
    return starter
def removestarter(starter):
    removestarter=input("Enter the Starter You want to Remove : ")
    starter.remove(removestarter)
    print("Removed Successfully")
    return starter

def tasks(menu):
   
   print("1:Add\n2:Update\n3:Remove")
   option=int(input("Enter the Option to perform : "))
   if(option==1):
    
     return addingstarter(menu)

   elif(option==2):
     
     return updatestarter(menu)
   
   elif(option==3):
      
      return removestarter(menu)

def main():
 veg_starter=['panneer 65','chilly panneer','veg crispy']
 num=0
 menu_card=veg_starter
 while(num==0):
    menu_card=tasks(menu_card)
    for starter in menu_card:
       print(starter)
    num=int(input("Enter 0 to Continue "))
 

    

 
 
if __name__=="__main__":
  main()

