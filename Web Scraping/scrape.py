import requests
from bs4 import BeautifulSoup
import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="",
  database="itlexp7"

)

print(mydb)

result = requests.get("https://www.iplt20.com/stats/all-time")

print(result.status_code)

# print(result.headers)

src = result.content

# print(src)

soup = BeautifulSoup(src,'html.parser')

# print(soup.find_all('li'))

li_tag = soup.find_all('li',class_="content-slider__item")

title_of_player = []

for a in li_tag:
    head = a.find('div',class_="leaderHeader").get_text()
    title_of_player.append(head.strip())
    
stat_tag = soup.find_all('div',class_="stat-content")

names = []
for b in stat_tag:
    name = b.find('h1').get_text()
    names.append(name.strip())

stats_cont = soup.find_all('div',class_="stat-container")

stats_val1 = []

for c in stats_cont:
    val1 = c.find('span',class_="digits").get_text()
    val2 = c.find('span',class_="statLabel").get_text()
    stats_val1.append(val1.strip() + " " + val2.strip())

print(stats_val1)
print(names)
print(title_of_player)

mycursor = mydb.cursor()

for d in range(0,10):
    sql = "INSERT INTO stats (name, record, value) VALUES (%s,%s,%s)"
    val = (names[d],title_of_player[d],stats_val1[d])
    mycursor.execute(sql, val)
    mydb.commit()
    print(mycursor.rowcount, "record inserted.")
