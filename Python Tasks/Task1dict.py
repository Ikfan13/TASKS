def add(menu):
    ind=1
    print('Choose an option:')
    for key,value in  menu.items():
        print(f'{ind}. {key}')
        ind+=1
    keys=list(menu.keys())
    option = int(input("Enter option: "))
    starter = input("Enter dish: ")
    menu[keys[option-1]].append(starter)
    print("\nDish added successfully!")
    print("\nUpdated Menu:")
    display(menu)
    return menu

def display(menu):
    print("\n-- Menu --")
    for i in menu:
        print(f"\n#### {i} ####")
        for j in menu[i]:
            print(f"- {j}")
    print("\n----------------")

def update(menu):
    ind=1
    print('Choose an option:')
    for key,value in  menu.items():
        print(f'{ind}. {key}')
        ind+=1
    option = int(input("Enter option: "))
    keys=list(menu.keys())
    dishes=menu[keys[option-1]]
    print("Select a dish:", dishes)
    select = input("Enter dish name: ")
    if select in dishes:
        ind = dishes.index(select)
        updated=input("Enter updated name: ")
        dishes[ind]=updated
        print("\nDish updated successfully!")
        menu[keys[option-1]]=dishes
        display(menu)
        return menu
    print("Dish not found in menu.")
    return menu
    
def remove(menu):
    ind=1
    print('Choose an option:')
    for key,value in  menu.items():
        print(f'{ind}. {key}')
        ind+=1
    option = int(input("Enter option: "))
    keys=list(menu.keys())
    dishes=menu[keys[option-1]]
    print("Select a dish:",dishes)
    select = input("Enter dish name: ")
    if select in dishes:
        dishes.remove(select)
        print("\nDish removed successfully!")
        menu[keys[option-1]]=dishes
        display(menu)
        return menu
    print("Dish not found in menu.")
    return menu
def main():
    menu = {
'vegstarter': ['paneer 65', 'chilly paneer', 'veg crispy'],
'nonvegstarters': ['Chicken 65', 'Fish Fingers', 'Mutton Seekh Kebab'],
'RiceDishes':['Chicken Biryani', 'Prawn Fried Rice', 'Mutton Pulao']
}
    while True:
        print("1. Display Menu Card")
        print("2. Add Menu Card")
        print("3. Update Menu Card")
        print("4. Remove Menu Card")
        print("5. Exit")
        choice = int(input("Enter choice: ")) 
        if choice==1:
            display(menu)
        elif choice==2:
            menu=add(menu)
        elif choice==3:
            menu=update(menu)
        elif choice==4:
            menu=remove(menu)
        if choice==5:
            print("Exited...")
            break
        

if __name__== "__main__":
    main()
