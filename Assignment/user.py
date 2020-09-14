import mysql.connector as connection
from flask_restful import Resource,reqparse

class UserRegister(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument('username', type=str, required=True)
    parser.add_argument('password', type=str, required=True)
    parser.add_argument('email',type=str,required = True)
    parser.add_argument('mobile',type=str,required=True)


    def post(self):
            data = UserRegister.parser.parse_args()

            if User.find_by_username(data['username']):
               return False

            database = connection.connect(host="localhost",user="root",passwd="root",database = "user",auth_plugin='mysql_native_password')
            cursor = database.cursor()
            query = "insert into users values( %s , %s, %s , %s)"
            cursor.execute(query, (data['username'], data['password'],data['email'],data['mobile']))


            database.commit()
            cursor.close()
            database.close()
            return True


class UserLogin(Resource):

    parser = reqparse.RequestParser()
    parser.add_argument('username', type=str, required=True, help='cannot be blank')
    parser.add_argument('password', type=str, required=True, help='cannot be blank')

    def post(self):
             data = UserLogin.parser.parse_args()

             database = connection.connect(host="localhost", user="root", passwd="root", database="user")
             cursor = database.cursor()
             query = "select * from users where username = %s and password = %s"
             cursor.execute(query, (data['username'],data['password'],))

             result = cursor.fetchone()
             print(result)

             if result is not None:
                 return True
             else:
                 return False




class User:
    def __init__(self,username,password):


        self.username = username
        self.password = password

    @classmethod
    def find_by_username(cls, username):

        database = connection.connect(host="localhost", user="root", passwd="root", database="user")
        cursor = database.cursor()
        query = "select * from users where username = %s"
        cursor.execute(query, (username,))
        row = cursor.fetchone()

        if row:
             user = cls(row[0], row[1])
        else :
             user = None

        return user



class AdminLogin(Resource) :
    parser = reqparse.RequestParser()
    parser.add_argument('username', type=str, required=True, help='cannot be blank')
    parser.add_argument('password', type=str, required=True, help='cannot be blank')


    def post(self):
     data = UserLogin.parser.parse_args()

     if(data['username']=='admin' and data['password']=='admin'):
        return True
     else:
        return False





