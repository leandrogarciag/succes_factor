import os
import sys

def getPath():
    getSctiptPath = os.path.abspath(__file__)
    scriptPath = os.path.dirname(getSctiptPath)
    return scriptPath

customPath = os.path.join(getPath(),'venv','lib', 'python3.8','site-packages')
sys.path.insert(0, customPath)

# --------------------------------------------------------------------------------
# -----------------V.1.0.0 By: Roger Rodriguez - Bot Tuya-------------------------
# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------
# ********************************************************************************
# Generals
from Globlal import *
from Connection import *
from ControlErrores import *
# Others

import glob
import time
import shutil
import warnings
import subprocess
from datetime import datetime
from twocaptcha import TwoCaptcha
# Selenium
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
# Recursividad
sys.setrecursionlimit(10**6) 
warnings.simplefilter("ignore")

# Se reciben variables del body
pathFileConvert = sys.argv[1]  
print(pathFileConvert)
nombreArchivo = sys.argv[2]  
print(nombreArchivo)
userInfobip = sys.argv[3]  
print(userInfobip)
nombreFlujo = sys.argv[4]  
print(nombreFlujo)
proceso = sys.argv[5]  
print(proceso)
insertId = sys.argv[6] 
print(insertId)
fechaSeguimiento = sys.argv[7] 
print(fechaSeguimiento)

# Se reciben variables del body
# pathFileConvert = 'D:/Desarrollo/Node.js/PROYECTOS/TUYA/src/public/doc/base/1685125160970/BASE BIDIRECCIONAL MORA TEMPRANA 11 ABR II.xlsx.xlsx'  
# print(pathFileConvert)
# nombreArchivo = 'BASE BIDIRECCIONAL MORA TEMPRANA 11 ABR II.xlsx'  
# print(nombreArchivo)
# userInfobip = 'Gerencia_Medellin_09'  
# print(userInfobip)
# nombreFlujo = 'MORA TEMPRANA'  
# print(nombreFlujo)
# proceso = 'TTS'  
# print(proceso)
# insertId = '4' 
# print(insertId)
# fechaSeguimiento = '2023-05-31'
# print(fechaSeguimiento)
 
global driver


# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------
# -----------------------------CONTROL WEBDRIVER----------------------------------
# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------

""" Control WebDriver """
# Versión de chrome linux
def obtenerVersionChrome(nombrePrograma):
    try:
        comando = subprocess.run([nombrePrograma, '--version'], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        resultado = str(comando.stdout)  # r: Google Chrome 91.0.4472.114
        resultado = resultado.split(' ')
        resultado = str(resultado[2])  # r: 91.0.4472.114
        resultado = resultado.split('.')
        versionChrome = str(resultado[0])  # r: 91
        print('Version google:', versionChrome)
        return versionChrome
    except Exception as e:
        ControlERROR(e)
        print('Error en obtener version de chrome' + str(e))
        return False
    
# Versión de chrome Windows
def obtenerVersionChromeWindows():
    try:
        resultado = subprocess.check_output(
            r'wmic datafile where name="C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" get Version /value',
        shell = True
        )
        resultado = resultado.decode('utf-8').strip()
        resultado = resultado.split('=')
        resultado = str(resultado[1])
        resultado = resultado.split('.')
        versionChrome = str(resultado[0])
        print('Version google:', versionChrome)
        return versionChrome
    except Exception as e:
        ControlERROR(e)
        print('Error en obtener version de chrome' + str(e))
        return False

#Descarga chrome driver
def rutaChromeDriver():
    my_os = sys.platform
    if my_os == "linux" or my_os == "linux2":
        print('Sistema operativo: ' + my_os)
        versionarchivo = str(obtenerVersionChrome('google-chrome'))
    elif my_os == "win32":
        print('Sistema operativo: ' + my_os)       
        versionarchivo = obtenerVersionChromeWindows()    
    nombreCarpeta = f"chromedriver_{versionarchivo}"
    rutaEjecutablePrograma = obtenerRutas()['rutaEjecutablePrograma']
    rutachromedriver = os.path.join(rutaEjecutablePrograma, nombreCarpeta)
    rutadriversJSON = os.path.join(rutaEjecutablePrograma, "drivers.json")
    if not os.path.exists(rutachromedriver):
        try:
            if not os.path.exists(rutadriversJSON):
                pass
            else:
                os.remove(rutadriversJSON)
            rutaDescarga = ChromeDriverManager(path=rutachromedriver).install()
            shutil.move(rutaDescarga, rutachromedriver)
            return rutachromedriver
        except Exception as e:
            print("Error al obtener datos binarios chromedriver" + str(e))
            ControlERROR(e)            
            False
    else:
        return rutachromedriver

# Parametros chrome driver - selenium
import traceback
def ejecutarChromeDriver():
    global driver
    try:
        rutaEjecutablePrograma = obtenerRutas()['rutaEjecutablePrograma']          
        rutachromedriver = rutaChromeDriver()
        ejecutable = os.path.join(rutachromedriver, 'chromedriver')    
        rutaUserChrome = str(os.path.join(
        rutaEjecutablePrograma, 'DefaultChrome'))   
        perfilChrome = f"--user-data-dir={rutaUserChrome}"
        chrome_option = webdriver.ChromeOptions()       
        # chrome_option.add_argument(perfilChrome)
        chrome_option.add_argument("--start-maximized")#Open Browser in maximized mode
        chrome_option.add_argument("--no-sandbox")#Bypass OS security model
        # chrome_option.add_argument("--headless=new")#Chrome en segundo plano
        chrome_option.add_argument("--disable-dev-shm-usage")#overcome limited resource problems       
        chrome_option.add_experimental_option("excludeSwitches", ["enable-automation"])
        driver = webdriver.Chrome(service=Service(ejecutable), options=chrome_option)
        ContinuarEjecucion = True        
    except Exception as e:
        print(traceback.print_exc())
        print('\nError en el driver =>' + str(e))
        ControlERROR(e)
        ContinuarEjecucion = False
    return ContinuarEjecucion

# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------
# ----------------------------FUNCIONES GENERALES---------------------------------
# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------

""" Funcion Captcha """
#Funcion para lectura de captcha
def captcha():
    FechaActual = datetime.today().strftime('%Y-%m-%d-%H-%M-%S')
    print("Fecha de prueba --------------------------------------------------------------")
    try:
        #Localizo archivo descargado captcha para proceder a moverlo.
        path_doc = "/1tb/NodeJS/COS_RPA_BOTTUYA/src/python/downloads/captcha/"
        print("Ruta del Python3 que se esta ejecutanto:", path_doc)
        captcha_img = driver.find_element(By.XPATH, '//*[@id="viewForm"]/div[3]/div/div[2]/div')
        
        if captcha_img:
            print('>>>>>>>>> Captcha Detected\n')
            nameImage = str(FechaActual)+'.png'
            rutaFinal = os.path.join(path_doc,nameImage)
            print('Ruta final: ', rutaFinal)
            try:
                captcha_img.screenshot(rutaFinal)
                os.chmod(rutaFinal, 0o755)
                api_key = os.getenv('APIKEY_2CAPTCHA', '4fdb8b5738e8fd6dd09e4a6e0366c411')
                solver = TwoCaptcha(api_key)        
                result = solver.normal(rutaFinal)
                print(result)
                pin = result['code']
                print('----- Captcha Decoded: '+pin) 
            except Exception as e:
                print(e)
                sys.exit(e)
            return pin
               
    except NoSuchElementException as e:    
        print('>>>>>>>>> Sin captcha')

# Consulta credenciales de Linkedin en restandar
def consultaCredenciales():
    connectionMySQL = conntDB()
    try:                
        with connectionMySQL.cursor() as cursor:
            sql = "SELECT INF_CUSUARIO, INF_CCONTRASENA FROM " + str(DeCrypt(BaseDatosServidor)).strip(
            ) + ".tbl_rinfobip_users WHERE INF_CUSUARIO = '" + str(userInfobip) + "' AND INF_CESTADO = 'Activo';"
            # print(sql)
            cursor.execute(sql)
            rows = cursor.fetchall()
            if len(rows) > 0:
                for row in rows:
                    usuarioInfobip = row['INF_CUSUARIO']
                    ContrasenaInfobip = row['INF_CCONTRASENA']
                    # print(usuarioInfobip, ContrasenaInfobip)
                    Comprobar = True
                    connectionMySQL.close()
                    break
            else: 
                Comprobar = False
    except Exception as e:
        connectionMySQL.close()
        print('Error consultaCredenciales: ' + str(e))  
        ControlERROR(e)
    return Comprobar, usuarioInfobip, ContrasenaInfobip

#Funcion inicio de sesion en Infobip
def inicioSesionInfobit(UsuarioInfobip, ContrasenaInfobip):
    try:
        driver.get(URL)
        usuario = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.ID, 'username')))
        time.sleep(2)
        usuario.send_keys(str(UsuarioInfobip))
        contraseña = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.ID, 'password')))
        time.sleep(2)
        contraseña.send_keys(str(ContrasenaInfobip))    
        val = captcha()
        if val:
            try:
                WebDriverWait(driver, 50).until(
                    EC.visibility_of_element_located((By.XPATH, '//*[@id="viewForm"]/div[3]/div/div[1]/div/input[2]')))
                driver.find_element(By.XPATH, '//*[@id="viewForm"]/div[3]/div/div[1]/div/input[2]').send_keys(
                str(val))
            except NoSuchElementException as e:    
                print('>>>>>>>>> Error en el path del captcha')
        time.sleep(2)             
        btn = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.ID, 'login-btn')))
        time.sleep(2)
        btn.click()
        try:
            invalid_captcha = driver.find_element(By.XPATH, '/html/body/main/section[1]/div')
            time.sleep(2)
            if invalid_captcha:
                print('>>>>>>>>> Captcha errado! Validando nuevamente...')
                driver.close()
                inicioBot()
        except NoSuchElementException as e:
            print('>>>>>>>>> Captcha Ok')  
            duplicarFlujo()            
            # cargarData()            
    except Exception as e:
        status =  'Sesión'
        statusBot(insertId, status)
        print('Error inicioSesionInfobit: ' + str(e))
        ControlERROR(e)        
        driver.close()

def duplicarFlujo():
    try:
        search = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.NAME, 'search')))
        time.sleep(2)
        search.clear() 
        time.sleep(2)
        search.send_keys(str(proceso +' '+ nombreFlujo +' ORIGINAL'))
        time.sleep(4)        
        tr = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="web-app"]/div[1]/div[2]/div[2]/div/div/div[2]/table/tbody/tr[1]')))
        time.sleep(4)
        actions = ActionChains(driver)
        time.sleep(4)
        actions.move_to_element(tr).perform()        
        btn2 = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="web-app"]/div[1]/div[2]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[5]/span/div')))
        time.sleep(2)        
        btn2.click()
        duplicate = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.ID, 'DUPLICATE')))
        time.sleep(2)
        duplicate.click()   
        nameDuplicate = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="flow-web"]/div[1]/div[4]/div/div[1]/div[2]/div[2]/div/div/div/div/input')))
        time.sleep(12)
        nameDuplicate.click()  
        time.sleep(2)  
        nameDuplicate.clear() 
        time.sleep(2)
        nameDuplicate.send_keys(str(nombreArchivo))
        time.sleep(2)
        crearPeople()
    except Exception as e:
        status =  'Flujo'
        statusBot(insertId, status)
        print('Error duplicarFlujo: ' + str(e))
        ControlERROR(e)
        driver.close()

def crearPeople():
    try:        
        driver.get(URL2)
        time.sleep(4)      
        importPeople = driver.find_element(By.XPATH, '//*[@id="import-tooltip"]/button/span/form/input')
        time.sleep(4)    
        importPeople.send_keys(pathFileConvert)      
        number = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/div[3]/div/div/table/tbody/tr[1]/td[3]/div/div/div/div/div[1]/div/input')))
        time.sleep(2)
        number.click()
        time.sleep(2)  
        number.send_keys('Number')
        time.sleep(2)  
        number.send_keys(Keys.ARROW_DOWN)
        time.sleep(2) 
        number.send_keys(Keys.RETURN)
        time.sleep(2)
        try:
            agregarIndicativo = driver.find_element(By.XPATH, '/html/body/div[3]/main/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/div[3]/div/div/table/tbody/tr[1]/td[4]/div/a')
            time.sleep(2)
            if agregarIndicativo:
                agregarIndicativo.click()
        except NoSuchElementException as e:    
            print('>>>>>>>>> Error en el path de agregarIndicativo')        
        indicativo = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/div[3]/div/div/table/tbody/tr[1]/td[4]/div/div/div/div/div[1]/div/input')))        
        time.sleep(2)
        indicativo.click()
        time.sleep(2) 
        indicativo.clear()
        time.sleep(2) 
        indicativo.send_keys('Colombia')
        time.sleep(2) 
        indicativo.send_keys(Keys.ARROW_DOWN)
        time.sleep(2)
        indicativo.send_keys(Keys.RETURN)    
        valor = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/div[3]/div/div/table/tbody/tr[2]/td[3]/div/div/div/div/div[1]/div/input')))
        time.sleep(2)
        valor.click()        
        agregarCampo = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[12]/div/div/div[2]/div/a/span[2]')))
        time.sleep(2)
        agregarCampo.click()               
        nuevoCampo = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/div[3]/div/div/table/tbody/tr[2]/td[3]/div/div/div/div[1]/input')))
        time.sleep(2)  
        nuevoCampo.send_keys(str(nombreArchivo))        
        nuevoCampoTipo = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/div[3]/div/div/table/tbody/tr[2]/td[4]/div/div[1]/div/div/div[1]')))
        time.sleep(2) 
        nuevoCampoTipo.click()        
        tipo = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="STRING"]')))
        time.sleep(2) 
        tipo.click()           
        btnok = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div[3]/div[1]/div/div[2]/div/div/div[2]/div[2]/div[3]/div/div/table/tbody/tr[2]/td[4]/div/div[2]/button[2]')))
        time.sleep(2)
        btnok.click()        
        btnanalizar = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="analyze"]')))
        time.sleep(2)  
        btnanalizar.click()        
        asignarEtiqueta = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div[3]/div[1]/div/div[2]/div/div/div[2]/div[4]/div[2]/div[2]/div/div/div/div[1]/input')))
        time.sleep(2)  
        asignarEtiqueta.send_keys(str(nombreArchivo))         
        crearEtiqueta = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[9]/div/div/div[2]')))
        time.sleep(2) 
        crearEtiqueta.click()         
        importarData = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="import"]')))
        time.sleep(2)  
        importarData.click() 
        time.sleep(20)  
        cargarData()
    except Exception as e:
        status =  'Importar'
        statusBot(insertId, status)
        print('Error crearPeople: ' + str(e))
        ControlERROR(e)
        driver.close()

def cargarData():
    try:
        driver.get(URL)
        time.sleep(2) 
        search = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.NAME, 'search')))
        time.sleep(4) 
        search.clear() 
        time.sleep(4)
        search.send_keys(str(nombreArchivo))
        time.sleep(4)
        accederFlujo = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="web-app"]/div[1]/div[2]/div[2]/div/div/div[2]/table/tbody/tr[1]/td[1]')))  
        time.sleep(2)      
        accederFlujo.click()        
        audiencia = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="flow-web"]/div[1]/div[2]/div[2]/div[2]/div[1]/div/div[1]')))
        time.sleep(2)        
        audiencia.click()        
        selectParaAudiencia = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="omni-editor-content"]/div/div[2]/div/div[2]/div/div')))
        time.sleep(2)
        selectParaAudiencia.click()
        time.sleep(2)          
        paraAudiencia = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="react-select-2--value"]/div[2]/input')))
        time.sleep(2)
        paraAudiencia.clear() 
        time.sleep(2)
        # paraAudiencia.send_keys(str(nombreArchivo))
        # time.sleep(2)
        paraAudiencia.send_keys(Keys.ARROW_DOWN)
        time.sleep(2)
        paraAudiencia.send_keys(Keys.RETURN)
        time.sleep(2)
        cerrar = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="omni-editor-main"]/div[2]/button')))        
        cerrar.click()
        time.sleep(2) 
        if nombreFlujo == 'MORA MEDIA':
            saldoCancelar = WebDriverWait(driver, 50).until(
                EC.visibility_of_element_located((By.XPATH, '//*[@id="flow-web"]/div[1]/div[2]/div[2]/div[2]/div[4]/div')))
            time.sleep(2)  
            saldoCancelar.click()
        else:
            saldoCancelar = WebDriverWait(driver, 50).until(
                EC.visibility_of_element_located((By.XPATH, '//*[@id="flow-web"]/div[1]/div[2]/div[2]/div[2]/div[4]/div')))
            time.sleep(2)  
            saldoCancelar.click() 
        etiquetaSaldoCancelar = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="omni-editor-content"]/div/div[4]/div/div[1]/div/div/div[2]/div/div/div')))     
        time.sleep(2) 
        etiquetaSaldoCancelar.send_keys(Keys.CONTROL + 'a')
        time.sleep(2)   
        etiquetaSaldoCancelar.send_keys(Keys.BACKSPACE)
        cerrar2 = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="omni-editor-main"]/div[2]/button'))) 
        time.sleep(2)       
        cerrar2.click()
        time.sleep(2)     
        saldoCancelar.click()         
        corchetes = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="omni-editor-content"]/div/div[4]/div/div[1]/div/div/div[1]/div/div/div/button')))   
        time.sleep(2)     
        corchetes.click()        
        nameEtiqueta = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[17]/div/div/div[1]/ul/div/div/div/div[2]/input')))  
        time.sleep(2)      
        nameEtiqueta.click()   
        time.sleep(2)     
        nameEtiqueta.send_keys(str(nombreArchivo))
        time.sleep(2)
        nameEtiqueta.send_keys(Keys.ARROW_DOWN)
        time.sleep(2)
        nameEtiqueta.send_keys(Keys.RETURN)
        time.sleep(2)
        cerrar3 = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="omni-editor-main"]/div[2]/button'))) 
        time.sleep(2)  
        cerrar3.click()
        if fechaSeguimiento != 'N/A':
            agendamiento()
        time.sleep(2)
        validar = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div/div[1]/div[4]/div/div[2]/div/div[2]/button')))
        time.sleep(2)       
        validar.click()
        # lanzarAhora = WebDriverWait(driver, 50).until(
        #     EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div/div[1]/div[2]/div[1]/div[1]/div[4]/button[1]')))  
        # time.sleep(2)  
        # lanzarAhora.click()
        time.sleep(2) 
        status =  'Finalizado'
        statusBot(insertId, status)
        driver.close()      
    except Exception as e:
        status =  'Data'
        statusBot(insertId, status)
        print('Error cargarData: ' + str(e))
        ControlERROR(e)
        driver.close()

def agendamiento():
    try:
        agendar = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div/div[1]/div[4]/div/div[2]/div/button')))
        time.sleep(2)       
        agendar.click()
        # fecha_actual = datetime.now()
        # fecha_formateada_inicial = fecha_actual.strftime("%d/%m/%Y")        
        # fechaInicial = WebDriverWait(driver, 50).until(
        #     EC.visibility_of_element_located((By.XPATH, '//*[@id="flow-schedule-editor"]/div/div[2]/div/div[1]/div[2]/div[1]/div/div/div[1]/input'))) 
        # time.sleep(2)
        # fechaInicial.send_keys(str(fecha_formateada_inicial))
        fecha_objeto  = datetime.strptime(fechaSeguimiento, "%Y-%m-%d")
        fecha_formateada_final = fecha_objeto.strftime("%d/%m/%Y")  
        fechaFinal = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="flow-schedule-editor"]/div/div[2]/div/div[2]/div[2]/div[1]/div/div/div[1]/input'))) 
        time.sleep(2)     
        fechaFinal.send_keys(str(fecha_formateada_final))
        selectHoraFinal = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/main/div/div[1]/div[3]/div/div[1]/div/div[2]/div/div[2]/div[2]/div[2]/div/div/div/div[2]/div'))) 
        time.sleep(2)     
        selectHoraFinal.click()
        horaFinal = WebDriverWait(driver, 50).until(
            EC.visibility_of_element_located((By.XPATH, '//*[@id="1425"]'))) 
        time.sleep(2)     
        horaFinal.click()
        cerrar4 = WebDriverWait(driver, 50).until(
        EC.visibility_of_element_located((By.XPATH, '//*[@id="tf-schedule-editor-close"]'))) 
        time.sleep(2)  
        cerrar4.click()
    except Exception as e:
        status =  'Agendamiento'
        statusBot(insertId, status)
        print('Error agendamiento: ' + str(e))
        ControlERROR(e)
        driver.close()
    
def incioPrograma():
    try: 
        RetornoCredencial = consultaCredenciales()
        if RetornoCredencial[0]:
            inicioSesionInfobit(RetornoCredencial[1], RetornoCredencial[2])
        else:
            print('No existe el usuario y la contraseña para el proceso indicado')
            driver.close()
    except Exception as e:
        print('Error incioPrograma: ' + str(e))
        ControlERROR(e)
        driver.close()

# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------
# -------------------------------INICIO DEL BOT-----------------------------------
# --------------------------------------------------------------------------------
# --------------------------------------------------------------------------------

#Funcion para ejecutar WebDriver
def inicioBot():
    global driver      
    Comprobar = ejecutarChromeDriver()
    print("Iniciando Bot's")
    try:
        if Comprobar: 
            incioPrograma()
        else:
            print('No se ejecuto ChromeDriver')
            status =  'Driver'
            statusBot(insertId, status)
    except Exception as e:
        print('Error InicioBot: ' + str(e))
        ControlERROR(e)
        driver.close()

# Función de arranque
inicioBot()