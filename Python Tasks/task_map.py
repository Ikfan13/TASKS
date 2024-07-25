def filterout(course):
    if course=='':
      return False

    spcl=['~', ':', "'", '+', '[', '\\', '@', '^', '{', '%', '(', '-', '"', '*', '|', ',', '&', '<', '`', '}', '.', '_', '=', ']', '!', '>', ';', '?', '#', '$', ')', '/']
    for i in spcl:
        if  i in course:
            return False
    return True



def main():
  course=['',"Java","Python",";$","PhP","angu;lar"]

  filter_list=list(filter(filterout,course))

  print(filter_list)


if __name__=="__main__":
   
   main()






