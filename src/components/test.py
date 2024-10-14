


import pandas as pd;



a= [1,2,3,4,5]
df =  pd.DataFrame(a)


b = df.drop(df.index[0:4])  # Dropping rows from index 0 to 3


print(b)