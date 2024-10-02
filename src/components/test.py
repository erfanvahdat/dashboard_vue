import requests

def get_live_trade_data():
    url = 'http://192.168.1.104:7000/api/v1/open-orders/'
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODI2OTMyLCJpYXQiOjE3Mjc4MDg5MzIsImp0aSI6ImMwYjYzNzdiMmQyMzQ2MDY4MTQ5Njk5OTMyMDE5Mjk0IiwidXNlcl9pZCI6NH0.Ewtsgst3CLWZlVz7mPcZKk0jhnMXa6yi7LQin7EOnMo'
    
    headers = {
        'Authorization': f'Token {token}',
        'Content-Type': 'application/json'
    }
    
    try:
        response = requests.get(url, headers=headers)
        
        # Check if the response is successful
        if response.status_code != 200:
            raise Exception(f'HTTP error! status: {response.status_code}')
        
        # Parse the JSON data
        data = response.json()
        print('Live trade data:', data)
        return data
    
    except Exception as error:
        print('Error fetching live trade data:', error)

# Call the function
get_live_trade_data()
