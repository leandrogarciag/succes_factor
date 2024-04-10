import os
import sys

def getPath():
    getSctiptPath = os.path.abspath(__file__)
    scriptPath = os.path.dirname(getSctiptPath)
    return scriptPath

customPath = os.path.join(getPath(),'venv','lib', 'python3.8','site-packages')
sys.path.insert(0, customPath)

from flask import Flask, request, make_response
from waitress import serve
import subprocess
import json

app = Flask(__name__)

@app.route('/ejecutar-python', methods=['POST'])
def ejecutar_python():
    #data = request.get_json()
    try:
        proceso_python = subprocess.Popen(
            ['python3', '/1tb/NodeJS/COS_RPA_CRMSUCCESFACTOR/src/python/botStart.py'],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        stdout, stderr = proceso_python.communicate()
        print(stdout)

        if stderr:
            return make_response(stderr, 500)
        else:
            return make_response(stdout, 200)

    except Exception as e:
        return make_response(str(e), 500)
    

if __name__ == "__main__":
    host = "localhost"
    port = 5090
    print("En linea en Host: ", host, " y Puerto: ", port)
    serve(app, host=host, port=port)