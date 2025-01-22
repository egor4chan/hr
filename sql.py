import pymysql

class Data:
    
    def __init__(self):
        self.connection = pymysql.connect(
            host='83.222.8.33',
            user='gen_user',
            password='<zP%niM9hp(Xp<',
            database='default_db',
            port=3306,
            cursorclass=pymysql.cursors.DictCursor
    ) 
        
    def CreateDataTable(self):
        with self.connection.cursor() as cursor:
            create_table_query = "CREATE TABLE `data6` (user_id varchar(32) UNIQUE, username tinytext(20), refer_id varchar(32), balance varchar(32))"

            cursor.execute(create_table_query)
            print('Success')
        
    def Auth(self, user_id, username, refer_id):
        try:
            with self.connection.cursor() as cursor:
                insert_query = f"INSERT INTO `data6` (user_id, username, refer_id, balance) VALUES ({user_id}, '{username}', {refer_id}, 0);"
                cursor.execute(insert_query)
                self.connection.commit()
                return True
        except:
            return False

    # Возвращает False если рефера нет, возвращает рефера, если он есть
    def GetUserRefer(self, user_id):
        with self.connection.cursor() as cursor:
            query = f"SELECT refer_id FROM `data6` WHERE user_id = {user_id}"
            cursor.execute(query)

            response = cursor.fetchone()
            if response == None:
                return False
            else:
                return response['refer_id']

    def PrintAllData(self):
        with self.connection.cursor() as cursor:
            print("#" * 20)
            select_all_rows = "SELECT * FROM `data6`"
            cursor.execute(select_all_rows)

            rows = cursor.fetchall()
            for row in rows:
                print(row)
            print("#" * 20)

    def GetReferrals(self, user_id):
        with self.connection.cursor() as cursor:
            select_all_rows = f"SELECT user_id FROM `data6` WHERE refer_id = {user_id}"
            cursor.execute(select_all_rows)

            rows = cursor.fetchall()

            return rows
        
    def GetReferralsCount(self, user_id):
        with self.connection.cursor() as cursor:
            select_all_rows = f"SELECT user_id FROM `data6` WHERE refer_id = {user_id}"
            cursor.execute(select_all_rows)

            rows = cursor.fetchall()
            return len(rows)
            

    def DeleteAll(self):
        try:
            with self.connection.cursor() as cursor:
                insert_query = f"DELETE * FROM `data6`"
                cursor.execute(insert_query)
                self.connection.commit()
                self.connection.close()
                return True
        except:
            print('FALSE')
            return False

data = Data()
data.PrintAllData()
