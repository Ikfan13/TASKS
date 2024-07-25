def sort_dict(nameandage):
    sorted_name = sorted(nameandage, key=lambda x: x['name'])
    return sorted_name
def main():
    details= [
        {'name':'shreya','age':15},
        {'name':'pratiksha','age':13},
        {'name':'prerna','age':15}
 
    ]
    sorted_list=list(map(sort_dict,[details]))
    print('Sorted List:',sorted_list)

if __name__=="__main__":
    main()