import os
import sys


def getPath():
    getSctiptPath = os.path.abspath(__file__)
    scriptPath = os.path.dirname(getSctiptPath)
    return scriptPath

customPath = os.path.join(getPath(),'venv','lib', 'python3.8','site-packages')
sys.path.insert(0, customPath)

import codecs
import base64

""" Funciones de Encriptación """


def Encrypt(O0OO00OOOOOOOO00O):
    if O0OO00OOOOOOOO00O.strip() == '' or O0OO00OOOOOOOO00O.strip() == None:
        return 'Error'
    O0OO00OOOOOOOO00O = str(O0OO00OOOOOOOO00O.strip())
    try:
        O0OO00OOOOOOOO00O = ''.join(hex(ord(O0O00O0O000OO000O))[
                                    2:] for O0O00O0O000OO000O in O0OO00OOOOOOOO00O)
    except:
        return 'Error'
    O0OO00OOOOOOOO00O = O0OO00OOOOOOOO00O.upper()
    try:
        O0OO00OOOOOOOO00O = base64.b64encode(O0OO00OOOOOOOO00O.encode(
            str(''.join([chr(int(''.join(c), 16)) for c in zip('7574662D38'[0::2], '7574662D38'[1::2])]))))
        O0OO00OOOOOOOO00O = str(O0OO00OOOOOOOO00O, str(
            ''.join([chr(int(''.join(c), 16)) for c in zip('7574662D38'[0::2], '7574662D38'[1::2])])))
        O0OO00OOOOOOOO00O = codecs.encode(O0OO00OOOOOOOO00O, str(
            ''.join([chr(int(''.join(c), 16)) for c in zip('726F745F3133'[0::2], '726F745F3133'[1::2])])))
    except:
        return 'Error'
    try:
        O0OO00OOOOOOOO00O = ''.join(
            hex(ord(OOO00000OOOO00OO0))[2:] for OOO00000OOOO00OO0 in O0OO00OOOOOOOO00O)  # line:21
    except:
        return 'Error'
    O0OO00OOOOOOOO00O = O0OO00OOOOOOOO00O.upper()
    O0OO00OOOOOOOO00O = str(O0OO00OOOOOOOO00O.strip())
    return O0OO00OOOOOOOO00O


def DeCrypt(OOOOOOOO000000OO0):
    if OOOOOOOO000000OO0.strip() == '' or OOOOOOOO000000OO0.strip() == None:
        return 'Error'
    OOOOOOOO000000OO0 = str(OOOOOOOO000000OO0.strip())
    try:
        OOOOOOOO000000OO0 = ''.join([chr(int(''.join(O0O000000O0O00O00), 16)) for O0O000000O0O00O00 in
                                     zip(OOOOOOOO000000OO0[0::2], OOOOOOOO000000OO0[1::2])])
    except:
        return 'Error'
    try:
        OOOOOOOO000000OO0 = codecs.decode(OOOOOOOO000000OO0, str(
            ''.join([chr(int(''.join(c), 16)) for c in zip('726F745F3133'[0::2], '726F745F3133'[1::2])])))
    except:
        return 'Error'
    try:
        OOOOOOOO000000OO0 = OOOOOOOO000000OO0.encode(
            str(''.join([chr(int(''.join(c), 16)) for c in zip('6173636969'[0::2], '6173636969'[1::2])])))
        OOOOOOOO000000OO0 = base64.b64decode(OOOOOOOO000000OO0)
        OOOOOOOO000000OO0 = OOOOOOOO000000OO0.decode(
            str(''.join([chr(int(''.join(c), 16)) for c in zip('6173636969'[0::2], '6173636969'[1::2])])))
    except:
        return 'Error'
    try:
        OOOOOOOO000000OO0 = ''.join([chr(int(''.join(OO0O0O0OOOO0O0000), 16)) for OO0O0O0OOOO0O0000 in
                                     zip(OOOOOOOO000000OO0[0::2], OOOOOOOO000000OO0[1::2])])
    except:
        return 'Error'
    OOOOOOOO000000OO0 = str(OOOOOOOO000000OO0.strip())
    return OOOOOOOO000000OO0