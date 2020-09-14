from flask import Flask
from flask_restful import Api
from user import UserRegister,UserLogin,AdminLogin
from admin import Rooms,Room_Booking,check_Availability,Update,Fetch

app = Flask(__name__)
api = Api(app)


api.add_resource(UserRegister , '/register')
api.add_resource(UserLogin,'/login')
api.add_resource(Rooms,'/add_rooms')
api.add_resource(Room_Booking,'/book')
api.add_resource(check_Availability,'/available')
api.add_resource(Update,'/update')
api.add_resource(Fetch,'/fetch')
api.add_resource(AdminLogin,'/admin')
if __name__ == '__main__':
    app.run(debug=True)