import os
import sys

def getPath():
    getSctiptPath = os.path.abspath(__file__)
    scriptPath = os.path.dirname(getSctiptPath)
    return scriptPath

customPath = os.path.join(getPath(),'venv','lib', 'python3.8','site-packages')
sys.path.insert(0, customPath)

from Connection import *
from Globlal import *
import time



# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------
# -----------------------------CONTROL DE ERRORES---------------------------------
# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------


""" Funciones para el programa """
# Tiempo de ejecución pagina
def paginaCargada(driver, tiempoEspera=60):
    contador = 0
    while True:
        if contador >= tiempoEspera:
            return False
        estadoPagina = driver.execute_script('return document.readyState;')
        if estadoPagina == 'complete':
            return True
        else:
            time.sleep(1)
        contador = contador + 1

# Control de errores
def ControlERROR(e):
    connectionMySQL = conntDB()
    try:
        with connectionMySQL.cursor() as cursor:
            # Limpiamos la cadena
            cadena1 = str(e).replace('"','*')
            cadena2 = cadena1.replace("'","*")
            sql2 = "INSERT INTO " + str(DeCrypt(BaseDatosServidor)) + \
                ".tbl_rlog_detalle (LOG_ERROR_LOG, LOG_NAME_BOT) VALUES ('" + str(cadena2) + "', '" + str(NombrePrograma) + "');"
            cursor.execute(sql2)
            connectionMySQL.close()
    except Exception as e:   
        print('Error ControlERROR', e)
        connectionMySQL.close()

def statusBot(id, status):
    connectionMySQL = conntDB()
    try:
        with connectionMySQL.cursor() as cursor:
            sql = "UPDATE " + str(DeCrypt(BaseDatosServidor)) + \
                ".tbl_status SET STA_CESTADO = '" + str(status) + "' WHERE PKSTA_NCODIGO = " + str(id) + ";"
            print(sql)
            cursor.execute(sql)
            connectionMySQL.close()
    except Exception as e:   
        print('Error statusBot', e)
        connectionMySQL.close()