import requests

while(True):
    url = 'http://testing-api.com/get-users'
    response = requests.get(url)
    data = response.json()
    print(data)
