import os
import sys
def getPath():
    getSctiptPath = os.path.abspath(__file__)
    scriptPath = os.path.dirname(getSctiptPath)
    return scriptPath
customPath = os.path.join(getPath(),'venv','lib', 'python3.8','site-packages')
sys.path.insert(0, customPath)


import mysql.connector
def conectar_db():
    try:
        conexion = mysql.connector.connect(
            host="localhost",
            user="cos_crm",
            password="gestiongeneralcos:2020",
            database="dbp_creacionusuarios"
        )
        return conexion
    except mysql.connector.Error as err:
        print(f"Error de conexión a la base de datos: {str(err)}")
        return None
    except Exception as e:
        print(f"Error inesperado: {str(e)}")
        return None

def cerrar_db(conexion):
    if conexion:
        conexion.close()
