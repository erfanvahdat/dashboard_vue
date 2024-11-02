
import os
from dotenv import load_dotenv
import requests as req

load_dotenv('../../.env') 

envvalue = os.environ.get('VITE_GET_BALANCE_DB')
print(envvalue)  # Print to check if the value is loaded


def A():
    api  =  req.get(envvalue).json()
    return api


obj = A()

total_balance = sum(float(item['balance']) for item in obj['data'])

a = 0

for item in obj['data']:
    print(item)






# # print(total_balance  / len(obj) )

# print(len(obj['data'][0]))

