def connect_db(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://evandrosilva:ZXZhbmRyb3Np@jobs.visie.com.br:3306/evandrosilva'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False