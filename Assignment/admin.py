import mysql.connector as connection
from flask_restful import Resource,reqparse
from user import UserLogin

constant_capacity = 3
default_booked = 0


class Rooms(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument('roomType', type=str, required=True)

    def post(self):

        global constant_capacity,default_booked
        data = Rooms.parser.parse_args()
        database = connection.connect(host="localhost", user="root", passwd="root", database="user",
                                      auth_plugin='mysql_native_password')
        cursor = database.cursor()
        query = "insert into rooms values( %s , %s, %s)"
        cursor.execute(query, (data['roomType'], constant_capacity,default_booked))


        database.commit()
        cursor.close()
        database.close()
        return True


class Room_Booking(Resource):
    global constant_capacity, default_booked

    parser = reqparse.RequestParser()
    parser.add_argument('Customer',type=str,required=True)
    parser.add_argument('roomType', type=str, required=True)
    parser.add_argument('checkIn', type=str, required=True)
    parser.add_argument('checkOut', type=str, required=True)
    parser.add_argument('guests', type=str, required=True)

    def post(self):
        global constant_capacity
        data = Room_Booking.parser.parse_args()
        database = connection.connect(host="localhost", user="root", passwd="root", database="user",
                                      auth_plugin='mysql_native_password')
        cursor = database.cursor()
        query = "select sum(booked_status=%s) from rooms where roomType=%s"
        cursor.execute(query,(default_booked,data['roomType'],))
        result = cursor.fetchone()
        number = result[0]
        if(number==0):
            return False
        else:
           query = "select * from booking where roomType = %s and checkIn BETWEEN %s and %s"
           cursor.execute(query,(data['roomType'],data['checkIn'],data['checkOut'],))
           result = cursor.fetchall()

           if len(result)==0:
            query = "insert into booking values(%s, %s , %s, %s,%s)"
            if(int(data['guests'])>constant_capacity):
                data['guests']=constant_capacity
            cursor.execute(query, (data['Customer'],data['roomType'], data['checkIn'], data['checkOut'], data['guests'],))
            query = "update rooms set booked_status = 1 where roomType = %s and booked_status=0 LIMIT 1 "
            cursor.execute(query, (data['roomType'],))

            database.commit()
            cursor.close()
            database.close()
            return True
           else:
            return False


class check_Availability(Resource):
    def post(self):
        data = Room_Booking.parser.parse_args()
        database = connection.connect(host="localhost", user="root", passwd="root", database="user",
                                      auth_plugin='mysql_native_password')
        cursor = database.cursor()
        query = "select * from booking where roomType = %s and checkIn BETWEEN %s and %s"
        cursor.execute(query, (data['roomType'], data['checkIn'], data['checkOut'],))
        result = cursor.fetchall()
        if not result:
            return True
        else:
            return False


class Update(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('guests', type=str)
    parser.add_argument('roomType', type=str)
    parser.add_argument('checkIn', type=str)

    parser.add_argument('checkIn', type=str, required=True)



    def put(self):

        data = Update.parser.parse_args()
        database = connection.connect(host="localhost", user="root", passwd="root", database="user",
                                      auth_plugin='mysql_native_password')
        cursor = database.cursor()
        query = "update booking set guests = %s where roomType = %s and checkIn = %s LIMIT 1"
        cursor.execute(query,(data['guests'],data['roomType'],data['checkIn'],))
        query = "select roomType,checkIn,guests from booking where roomType = %s and checkIn = %s and guests = %s"
        cursor.execute(query,(data['roomType'],data['checkIn'],data['guests'],))

        result = cursor.fetchone()
        print('-------------------',result)
        resultFinal = list(result)

        resultFinal[1] = resultFinal[1].strftime("%Y:%D:%M")


        print("-------------------------------------",resultFinal)



        return  {'roomType' : resultFinal[0],'Date' : resultFinal[1],'Capacity-Increased' : resultFinal[2]}


class Fetch(Resource):

    def post(self):


        data = Update.parser.parse_args()
        database = connection.connect(host="localhost", user="root", passwd="root", database="user",
                                      auth_plugin='mysql_native_password')
        cursor = database.cursor()

        query = "select * from booking where checkIn=%s"
        cursor.execute(query,(data['checkIn'],))

        results = cursor.fetchall()
        res = [list(ele) for ele in results]
        for i in res:
            i[2] = i[2].strftime("%Y:%D:%M")
            i[3] = i[3].strftime("%Y:%D:%M")

        print('----------------',res)



        return {'Bookings' : res}


















