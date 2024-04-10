import mysql.connector

def conectar_db():
    try:
        conexion = mysql.connector.connect(
            host="localhost",
            user="cos_crm",
            password="gestiongeneralcos:2020",
            database="dbp_creacionusuarios"
        )
        print("Conexión exitosa")
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
        print("Conexión cerrada exitosamente")

def probar_conexion():
    conexion = conectar_db()
    cerrar_db(conexion)

# Si este script se ejecuta como el principal, probará la conexión.
if __name__ == "__main__":
    probar_conexion()
