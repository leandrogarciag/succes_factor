import os
import sys

def getPath():
    getSctiptPath = os.path.abspath(__file__)
    scriptPath = os.path.dirname(getSctiptPath)
    return scriptPath

customPath = os.path.join(getPath(),'venv','lib', 'python3.8','site-packages')
sys.path.insert(0, customPath)

from Connection import conectar_db, cerrar_db
from datetime import datetime, timedelta
import mysql.connector
import re


async def ejecutar_consulta(query):
    conexion = conectar_db()
    print(conexion)
    if conexion:
        cursor = None  # Inicializa cursor a None
        try:
            cursor = conexion.cursor()
            cursor.execute(query)
            results = cursor.fetchall()
            # Procesa los resultados según sea necesario
            for fila in results:
                print('')
        except mysql.connector.Error as err:
            print(f"Error al ejecutar la consulta: {str(err)}")
        finally:
            if cursor:
                cursor.close()
            cerrar_db(conexion)
    return fila

async def get_employes(query):

    try:
        conexion = conectar_db()
        
        if conexion:
            cursor = None
            try:
                cursor = conexion.cursor()  # Usamos dictionary=True para obtener resultados como diccionarios
                cursor.execute(query)
                results = cursor.fetchall()
                results_array = []
                for row in results:
                    result_dict = {}
                    for i, column_name in enumerate(cursor.column_names):
                        result_dict[column_name] = row[i]
                    results_array.append(result_dict)
                # return results_array
                res = await delete_parentheses(results_array)
                return res
            except mysql.connector.Error as err:
                print(f"Error al ejecutar la consulta: {str(err)}")
            finally:
                if cursor:
                    cursor.close()
                cerrar_db(conexion)
    except Exception as err:
        print(f"Error en get_employes: {str(err)}")

async def delete_parentheses(req):
    try:
        new_data = []
        for dictionary in req:
            new_dict = {}
            for key, value in dictionary.items():
                if isinstance(value, str):
                    # Usar expresiones regulares para eliminar los paréntesis y su contenido
                    new_value = re.sub(r'\([^)]*\)', '', value)
                    # Eliminar espacios en blanco al final de la cadena
                    new_value = new_value.strip()
                    new_dict[key] = new_value
                else:
                    new_dict[key] = value  # Mantener otros tipos de valores sin cambios
            new_data.append(new_dict)

        return new_data
    except Exception as err:
        print(f"Error en delete_parentheses: {str(err)}")

async def excel_date_to_python_date(excel_date_str):
    try:
        # Convertir el string a un número entero
        excel_date = int(excel_date_str)
        # La fecha base de Excel es el 1 de enero de 1900
        excel_base_date = datetime(1900, 1, 1)
        # Convertir el número de Excel a una fecha en Python
        python_date = excel_base_date + timedelta(days=excel_date - 2)
        # Convertir la fecha a formato "ddmmyy"
        formatted_date = python_date.strftime('%d%m%y')
        return formatted_date
    except Exception as err:
        print(f"Error en excel_date_to_python_date: {str(err)}")


async def sql_employers(query,data):
    try:
        conexion = conectar_db()
        
        if conexion:
            cursor = None
            cursor = conexion.cursor()  # Usamos dictionary=True para obtener resultados como diccionarios
            cursor.execute(query,data)
            conexion.commit()
        
    except Exception as err:
        print(f"Error en insert_logs: {str(err)} {query}")