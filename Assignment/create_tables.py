import mysql.connector
database = mysql.connector.connect(host="localhost",user="root",passwd="root",database = "user")
cursor = database.cursor()



create_table_users = "create table if not exists users(username text,password text,email text,mobile text)"
cursor.execute(create_table_users)


create_room_table = "create table if not exists rooms(roomType text,capacity text,booked_status text)"
cursor.execute(create_room_table)





