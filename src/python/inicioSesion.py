import os
import sys


def getPath():
    getSctiptPath = os.path.abspath(__file__)
    scriptPath = os.path.dirname(getSctiptPath)
    return scriptPath

customPath = os.path.join(getPath(),'venv','lib', 'python3.8','site-packages')
sys.path.insert(0, customPath)

from Sentences import ejecutar_consulta
import asyncio

async def connection_db():
    try:
        query = "SELECT * FROM tbl_rclarousers"
        res = await ejecutar_consulta(query)
        print(res)
        return res
    except Exception as e:
        print(f"se ha producido un error: {str(e)}")

async def main():
    try:
        inicio = await connection_db()
    except Exception as e:
        print(f"Se ha encontrado un error: {str(e)}")
    return inicio
    
asyncio.run(main())