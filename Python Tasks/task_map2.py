def numberonly(val):
    string=val.split('-')
    for i in string:
        if i != 'HEM':
            return i 
  

def main():
    product_id = ['HEM-234','HEM-123','HEM-566']
    map_list=list(map(numberonly,product_id))
    print('Map List:',map_list)
    
    

if __name__=="__main__":
    main()