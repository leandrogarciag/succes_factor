import os
import sys


def getPath():
    getSctiptPath = os.path.abspath(__file__)
    scriptPath = os.path.dirname(getSctiptPath)
    return scriptPath

customPath = os.path.join(getPath(),'venv','lib', 'python3.8','site-packages')
sys.path.insert(0, customPath)

from inicioSesion import main
import json
from Sentences import get_employes, sql_employers, excel_date_to_python_date
import asyncio
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.webdriver.chrome.options import Options
from datetime import datetime
import re
import traceback
import time


def configure_webdriver():
    try:
        dir_path = os.path.dirname(os.path.realpath(__file__))
        chrome_driver_path = os.path.join(dir_path, 'chromedriver')
        service = Service(chrome_driver_path)
        # Configuración para iniciar Chrome en modo headless
        chrome_options = Options()
        chrome_options.add_argument('--headless=new')
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--remote-debugging-ng-port=9222')
        chrome_options.add_argument('--disable-gpu')
        chrome_options.add_argument('--start-maximized')
        chrome_options.add_argument('--disable-setuid-sandbox')
        return webdriver.Chrome(service=service, options=chrome_options)
    except Exception as e:
        print(f"Error en configure_webdriver(): {e}")

# def configure_webdriver():
#     dir_path = os.path.dirname(os.path.realpath(__file__))
#     chrome_driver_path = os.path.join(dir_path, 'chromedriver.exe')
#     service = Service(chrome_driver_path)
#     return webdriver.Chrome(service=service)

def fill_boxes(xpath,req,driver):
    wait = WebDriverWait(driver, 20)
    input_element = wait.until(EC.presence_of_element_located((By.XPATH, xpath)))
    input_element.send_keys(Keys.CONTROL+'a') #selecciona todo
    time.sleep(1)
    input_element.send_keys(Keys.BACKSPACE)#borrar
    input_element.send_keys(req)

def click_boxes(xpath,driver):
    wait = WebDriverWait(driver, 5)
    search_box = wait.until(EC.visibility_of_element_located((By.XPATH, xpath)))
    search_box.click()#click

def select(xpath,req,driver,xpath_pop_up):#funcion para elementos desplegables
    actions = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.XPATH, xpath)))
    actions.send_keys(Keys.CONTROL+'a') #selecciona todo
    actions.send_keys(Keys.BACKSPACE)#borrar
    actions.send_keys(req)
    actions = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.XPATH, xpath_pop_up)))
    time.sleep(1.5)
    actions[0].click()
    
def select_element(xpath,req,driver):
    actions = WebDriverWait(driver, 20).until(
        EC.visibility_of_element_located((By.XPATH, xpath)))
    actions.send_keys(Keys.CONTROL+'a') #selecciona todo
    actions.send_keys(Keys.BACKSPACE)#borrar
    actions.send_keys(req)
    time.sleep(2.5)
    actions.send_keys(Keys.ARROW_DOWN)
    time.sleep(2)
    actions.send_keys(Keys.RETURN)

def estrato(xpath, num, driver):
    actions = WebDriverWait(driver, 20).until(
        EC.visibility_of_element_located((By.XPATH, xpath)))
    actions.send_keys(Keys.ARROW_DOWN)
    stract = int(num)
    time.sleep(1)
    for _ in range(stract):  # Usamos range para repetir la acción stract veces
        actions.send_keys(Keys.ARROW_DOWN)
        time.sleep(0.5)
    actions.send_keys(Keys.RETURN)

def click_on_most_recent_date_element(driver, ul_xpath, li_base_xpath, date_base_xpath):
    # Verificar la existencia de la lista UL
    item_number = extract_item_number_from_li(driver, ul_xpath)
    
    if item_number is None:
        print("No se pudo extraer el número de item.")
        return
    # Inicializar la fecha más reciente como una fecha muy antigua
    most_recent_date = datetime.min
    most_recent_element = None

    i = 0
    consecutive_failures = 0  # Contador para fallos consecutivos
    max_consecutive_failures = 3  # Número máximo de fallos consecutivos permitidos
    while True:
        try:
            li_xpath = li_base_xpath.format(item_number,i)
            date_xpath = date_base_xpath.format(i)
            current_date = extract_date_from_element(driver, date_xpath)
            
            if current_date > most_recent_date:
                most_recent_date = current_date
                most_recent_element = WebDriverWait(driver, 10).until(
                                        EC.presence_of_element_located((By.XPATH, li_xpath)))
                consecutive_failures = 0  # Restablecer el contador de fallos
            else:
                consecutive_failures += 1  # Incrementar el contador de fallos

            if consecutive_failures >= max_consecutive_failures:
                break
            i += 1
        except:
            # Si no hay más elementos li, romper el bucle
            break
    # Hacer clic en el elemento con la fecha más reciente
    if most_recent_element:
        most_recent_element.click()

def extract_item_number_from_li(driver, ul_xpath):
    # Verificar la existencia de la lista UL
    try:
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, ul_xpath)))
    except:
        print("La lista UL no se encuentra en la página.")
        return None

    # Buscar todos los elementos li que coincidan con el patrón
    li_elements = WebDriverWait(driver, 10).until(EC.visibility_of_all_elements_located((By.XPATH, "//li[starts-with(@id, '__item') and contains(@id, '-UserSearchResult--newHireUserMatchList-')]")))
    


    # Si no se encontraron elementos, retornar None
    if not li_elements:
        return None

    li_id = li_elements[0].get_attribute("id")

    # Extraer el número de item usando una expresión regular
    match = re.search(r"__item(\d+)-UserSearchResult--newHireUserMatchList-", li_id)
    if match:
        return match.group(1)
    else:
        return None

def extract_date_from_element(driver, xpath):
    try:
        date_element = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, xpath)))
        date_text = date_element.text
        # Extraer la fecha del texto
        date_str = date_text.split(" ")[-1]
        return datetime.strptime(date_str, "%d/%m/%Y")
    except:
        return datetime.min

def inicio_sesion(data_credential):
    driver = configure_webdriver()
    driver.get(data_credential['url_claro'])
    fill_boxes('//*[@id="__input1-inner"]',data_credential['user_name'],driver)#input
    fill_boxes('//*[@id="__input2-inner"]',data_credential['password'],driver)#input
    click_boxes('//*[@id="__button2-inner"]',driver)
    return driver

async def error_in_process(driver,text,xpath):
    try:
        error_message_element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, xpath)) # Reemplaza con el selector adecuado para el mensaje de error
        )
        error_message = error_message_element.text
        if text in error_message:
            return True
    except:
        return False

async def rpa_main():
    try:
        print("*****Inicio de proceso de bot******")
        logs_query = "INSERT INTO tbl_rlog_detalle (LOG_NAME_BOT, LOG_MENSSAJE) VALUES (%s,%s)"
        update_status_query = "UPDATE tbl_rcontratacion SET USU_CESTADO = %s WHERE PKUSU_NCODIGO = %s"
        credencials = await main()
        data_credential ={
            "user_name": credencials[2],
            "password": credencials[3],
            "url_claro": credencials[5]
        }
        driver=inicio_sesion(data_credential)

        if await error_in_process(driver,'Nombre de usuario o contraseña no válidos para ', '//*[@id="__html6"]'):  # Llama a la función y verifica su valor de retorno
            logs =('code01','Fallo inicio de sesión en la plataforma SuccessFactory')
            await sql_employers(logs_query, logs)
        else:
            logs =('code02','Correcto inicio de sesión en la plataforma SuccessFactory')
            await sql_employers(logs_query, logs)
            users_to_contratation = await get_employes("SELECT * FROM tbl_rcontratacion WHERE USU_CESTADO = 'NO_INICIADO'")
            for i in range(len(users_to_contratation)):
                try:
                    driver.get('https://performancemanager8.successfactors.com/xi/ui/peopleprofile/pages/newhire.xhtml?&_s.crb=ZqyrEeSwE4E79Mlg%2fZnj24TSD9WzmnvEGkYupICuREQ%3d')
                    pkusu_ncodigo = ('EN_PROGRESO',users_to_contratation[i].get('PKUSU_NCODIGO'))
                    await sql_employers(update_status_query, pkusu_ncodigo)
                    logs =('code03',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO')) + ' Inicio de registro')
                    await sql_employers(logs_query, logs)
                #1. primer stage
                    select('//*[@id="__box0-inner"]',users_to_contratation[i].get('USU_CEMPRESA'),driver,'//*[@id="__box0-popup-cont"]')
                    select('//*[@id="__box1-inner"]',users_to_contratation[i].get('USU_CMOTIVO_EVENTO'),driver,'//*[@id="__box1-popup-cont"]')
                    select('//*[@id="__box2-inner"]',users_to_contratation[i].get('USU_CPLANTILLA'),driver,'//*[@id="__box2-popup-cont"]')
                    time.sleep(2)
                    click_boxes('//*[@id="__button1-BDI-content"]',driver)
                #información del nombre
                    fill_boxes('//*[@id="__input0-inner"]',users_to_contratation[i].get('USU_CNOMBRES'),driver)
                    fill_boxes('//*[@id="__input1-inner"]',users_to_contratation[i].get('USU_CAPELLIDOS'),driver)
                    select_element('//*[@id="__box6-inner"]',users_to_contratation[i].get('USU_CTRATO'),driver)
                 #Información biografica
                    fecha_nacimiento = await excel_date_to_python_date(users_to_contratation[i].get('USU_CFECHA_NACIMIENTO'))
                    fill_boxes('//*[@id="__picker3-inner"]',fecha_nacimiento,driver)
                    select('//*[@id="__box7-inner"]',users_to_contratation[i].get('USU_CPAIS_NACIMIENTO'),driver,'//*[@id="__box7-popup-cont"]')
                    select('//*[@id="__box8-inner"]',users_to_contratation[i].get('USU_CDEPARTAMENTO_NACIMIENTO'),driver,'//*[@id="__box8-popup-cont"]')
                    time.sleep(1)
                    select('//*[@id="__box9-inner"]',users_to_contratation[i].get('USU_CCIUDAD_NACIMIENTO'),driver,'//*[@id="__box9-popup-cont"]')
                #Información del empleado
                    fill_boxes('//*[@id="__input8-inner"]',users_to_contratation[i].get('USU_CNOMBRE_USUARIO'),driver)
                    click_boxes('//*[@id="__button26-BDI-content"]',driver)
                #Documento de identidad
                    select('//*[@id="__box10-inner"]',users_to_contratation[i].get('USU_CPAIS_EXPEDICION'),driver,'//*[@id="__box10-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box11-inner"]',users_to_contratation[i].get('USU_CTIPO_DOCUMENTO'),driver,'//*[@id="__box11-popup-cont"]')
                    fill_boxes('//*[@id="__input11-inner"]',users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'),driver)
                    select('//*[@id="__box12-inner"]',users_to_contratation[i].get('USU_CES_PRIMARIO'),driver,'//*[@id="__box12-popup-cont"]')
                    fecha_expedicion = await excel_date_to_python_date(users_to_contratation[i].get('USU_CFECHA_EXPEDICION'))
                    fill_boxes('//*[@id="__picker4-inner"]',fecha_expedicion,driver)
                    select('//*[@id="__box13-inner"]',users_to_contratation[i].get('USU_CDEPARTAMENTO_EXPEDICION'),driver,'//*[@id="__box13-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box14-inner"]',users_to_contratation[i].get('USU_CCIUDAD_EXPEDICION'),driver,'//*[@id="__box14-popup-cont"]')
                    click_boxes('//*[@id="__button25-BDI-content"]',driver)
                    logs =('code31',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'))+' Información biográfica y de empleado completada!')
                    await sql_employers(logs_query, logs)
                    #Cuadro para seleccionar coincidencias
                    time.sleep(3)
                    
                    click_on_most_recent_date_element(driver,
                                                      '//*[@id="UserSearchResult--newHireUserMatchList-listUl"]',
                                                      '//*[@id="__item{}-UserSearchResult--newHireUserMatchList-{}"]',
                                                      '//*[@id="__label58-UserSearchResult--newHireUserMatchList-{}-bdi"]')
                    
                    
                    time.sleep(2)
                    click_boxes('//*[@id="__button29-content"]',driver)
                    #time.sleep(2)
                    #click_boxes('//*[@id="__mbox-btn-1"]',driver)
                    time.sleep(2)
                    #fill_boxes('//*[@id="__picker6-inner"]',fecha_ingreso,driver)
                    select('//*[@id="__box16-inner"]',users_to_contratation[i].get('USU_CEMPRESA'),driver,'//*[@id="__box16-popup-cont"]')
                    select('//*[@id="__box17-inner"]',users_to_contratation[i].get('USU_CMOTIVO_EVENTO'),driver,'//*[@id="__box17-popup-cont"]')
                    select('//*[@id="__box18-inner"]',users_to_contratation[i].get('USU_CPLANTILLA'),driver,'//*[@id="__box18-popup-cont"]')
                    time.sleep(2)
                    #click_boxes('//*[@id="__button33-content"]',driver)
                    click_boxes('//*[@id="__button34-content"]',driver)

                    #2
                    #Vuelve al formulario
                    #Información de nombre
                    select_element('//*[@id="__box22-inner"]',users_to_contratation[i].get('USU_CTRATO'),driver)
                    #Información de empleado
                    fill_boxes('//*[@id="__input22-inner"]',users_to_contratation[i].get('USU_CNOMBRE_USUARIO'),driver)
                    #Documento de identificación
                    time.sleep(2)
                    select('//*[@id="__box30-inner"]',users_to_contratation[i].get('USU_CCIUDAD_EXPEDICION'),driver,'//*[@id="__box30-popup-cont"]')
                    time.sleep(2)
                    click_boxes('//*[@id="__button58-BDI-content"]',driver)
                    #Información personal
                    select('//*[@id="__box31-inner"]',users_to_contratation[i].get('USU_CGENERO'),driver,'//*[@id="__box31-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box32-inner"]',users_to_contratation[i].get('USU_CESTADO_CIVIL'),driver,'//*[@id="__box32-popup-cont"]')
                    select('//*[@id="__box33-inner"]',users_to_contratation[i].get('USU_CNACIONALIDAD'),driver,'//*[@id="__box33-popup-cont"]')
                    select('//*[@id="__box35-inner"]',users_to_contratation[i].get('USU_CLENGUA_NATIVA'),driver,'//*[@id="__box35-popup-cont"]')
                    click_boxes('//*[@id="detailsBtn_0-BDI-content"]',driver)
                    fill_boxes('//*[@id="__input28-inner"]',users_to_contratation[i].get('USU_CCONFIGURACION_REGIONAL_PREDETERMINADA'),driver)
                    select('//*[@id="__box39-inner"]',users_to_contratation[i].get('USU_CMODO_DESPLAZAMIENTO_CASA_TRABAJO_CASA'),driver,'//*[@id="__box39-popup-cont"]')
                    select('//*[@id="__box44-inner"]',users_to_contratation[i].get('USU_CTIPO_DIRECCION'),driver,'//*[@id="__box44-popup-cont"]')
                    select('//*[@id="__box45-inner"]',users_to_contratation[i].get('USU_PAIS_REGION'),driver,'//*[@id="__box45-popup-cont"]')
                    select('//*[@id="__box46-inner"]',users_to_contratation[i].get('USU_CDEPARTAMENTO'),driver,'//*[@id="__box46-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box47-inner"]',users_to_contratation[i].get('USU_CCIUDAD'),driver,'//*[@id="__box47-popup-cont"]')
                    # strat_num=int(strat)
                    estrato('//*[@id="__box48-inner"]',users_to_contratation[i].get('USU_CESTRATO'),driver)
                    select('//*[@id="__box49-inner"]',users_to_contratation[i].get('USU_CTIPO_VIVIENDA'),driver,'//*[@id="__box49-popup-cont"]')
                        #click_boxes('//*[@id="__button52-content"]',driver)
                    logs =('code33',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'))+' Información de telefono y direcciones completada!')
                    await sql_employers(logs_query, logs)
                    time.sleep(2)
                    click_boxes('//*[@id="__button84-BDI-content"]',driver)
                    time.sleep(2)
                    select('//*[@id="__box58-inner"]',users_to_contratation[i].get('USU_CPOSICION'),driver,'//*[@id="__box58-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box63-inner"]',users_to_contratation[i].get('USU_CUBICACION'),driver,'//*[@id="__box63-popup-cont"]')
                    time.sleep(2)
                    
                    click_boxes('//*[@id="detailsBtn_1-BDI-content"]',driver)#CLICK AÑADIR MAS
                    # #Información del puesto
                    fecha_periodo_prueba = await excel_date_to_python_date(users_to_contratation[i].get('USU_CFECHA_FIN_PERIODO_PRUEBA'))
                    fill_boxes('//*[@id="__picker14-inner"]',fecha_periodo_prueba,driver)
                  
 
                    select('//*[@id="__box76-inner"]',users_to_contratation[i].get('USU_CAPLICA_RED_MAESTRA'),driver,'//*[@id="__box76-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box78-inner"]',users_to_contratation[i].get('USU_CTIPO_OPERACION'),driver,'//*[@id="__box78-popup-cont"]')
                    select('//*[@id="__box79-inner"]',users_to_contratation[i].get('USU_CCANAL'),driver,'//*[@id="__box79-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box80-inner"]',users_to_contratation[i].get('USU_CSUBCANAL'),driver,'//*[@id="__box80-popup-cont"]')
                    select('//*[@id="__box86-inner"]',users_to_contratation[i].get('USU_CGV_REGION'),driver,'//*[@id="__box86-popup-cont"]')
                    select('//*[@id="__box94-inner"]',users_to_contratation[i].get('USU_CCOMISION_SIN_COMISION'),driver,'//*[@id="__box94-popup-cont"]')
                    select('//*[@id="__box95-inner"]',users_to_contratation[i].get('USU_DEPARTAMENTO'),driver,'//*[@id="__box95-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box96-inner"]',users_to_contratation[i].get('USU_CIUDAD'),driver,'//*[@id="__box96-popup-cont"]')
                    select('//*[@id="__box97-inner"]',users_to_contratation[i].get('USU_CCLASIFICACION_BONO'),driver,'//*[@id="__box97-popup-cont"]')
                    select('//*[@id="__box98-inner"]',users_to_contratation[i].get('USU_CNIVEL_CARGO'),driver,'//*[@id="__box98-popup-cont"]')
                    select('//*[@id="__box99-inner"]',users_to_contratation[i].get('USU_CTIPO_POSICION'),driver,'//*[@id="__box99-popup-cont"]')
                    select('//*[@id="__box103-inner"]',users_to_contratation[i].get('USU_CEPS'),driver,'//*[@id="__box103-popup-cont"]')
                    select('//*[@id="__box104-inner"]',users_to_contratation[i].get('USU_CAFP'),driver,'//*[@id="__box104-popup-cont"]')
                    select('//*[@id="__box105-inner"]',users_to_contratation[i].get('USU_CARL'),driver,'//*[@id="__box105-popup-cont"]')
                    select('//*[@id="__box106-inner"]',users_to_contratation[i].get('USU_CCAJA_COMPENSACION'),driver,'//*[@id="__box106-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box107-inner"]',users_to_contratation[i].get('USU_CCESANTIAS'),driver,'//*[@id="__box107-popup-cont"]')
                    select('//*[@id="__box111-inner"]',users_to_contratation[i].get('USU_CTIPO_CONTRATO'),driver,'//*[@id="__box111-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box112-inner"]',users_to_contratation[i].get('USU_CREGION'),driver,'//*[@id="__box112-popup-cont"]')
                    # #Información de hora
                    select_element('//*[@id="__box115-inner"]',users_to_contratation[i].get('USU_CPERFIL_TIEMPOS'),driver)
                    time.sleep(2)

                    
                    click_boxes('//*[@id="__button108-BDI-content"]',driver)
                    #Relaciones del puesto
                    logs =('code35',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'))+' Información del puesto completada!')
                    await sql_employers(logs_query, logs)
                    # #Perfil de accesps/familia
                    select('//*[@id="__box123-inner"]',users_to_contratation[i].get('USU_CES_NUEVO_PERFIL'),driver,'//*[@id="__box123-popup-cont"]')
                    click_boxes('//*[@id="__button117-BDI-content"]',driver)
                    # #INFORMACION Conpensacion
                    select('//*[@id="__box126-inner"]',users_to_contratation[i].get('USU_CAREA_NOMINA'),driver,'//*[@id="__box126-popup-cont"]')
                    select('//*[@id="__box127-inner"]',users_to_contratation[i].get('USU_CES_ELEGIBLE_BENEFICIOS'),driver,'//*[@id="__box127-popup-cont"]')
                    select('//*[@id="__box128-inner"]',users_to_contratation[i].get('USU_CPERTENECE_SINDICATO'),driver,'//*[@id="__box128-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box129-inner"]',users_to_contratation[i].get('USU_CFIJO_VARIABLE'),driver,'//*[@id="__box129-popup-cont"]')
                    click_boxes('//*[@id="detailsBtn_2-BDI-content"]',driver)
                    select('//*[@id="__box135-inner"]',users_to_contratation[i].get('USU_CPACTO_COLECTIVO'),driver,'//*[@id="__box135-popup-cont"]')
                    select('//*[@id="__box136-inner"]',users_to_contratation[i].get('USU_CINTEGRALES_SIN_FIRMA_PACTO'),driver,'//*[@id="__box136-popup-cont"]')
                    select('//*[@id="__box137-inner"]',users_to_contratation[i].get('USU_CESTA_FLEXIBILIZADO'),driver,'//*[@id="__box137-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box138-inner"]',users_to_contratation[i].get('USU_CTIPO_PLAN_BENEFICIOS'),driver,'//*[@id="__box138-popup-cont"]')
                    time.sleep(2)
                    select('//*[@id="__box139-inner"]',users_to_contratation[i].get('USU_CPLAN_BENEFICIOS'),driver,'//*[@id="__box139-popup-cont"]')
                    select('//*[@id="__box141-inner"]',users_to_contratation[i].get('USU_CTIPO_SALARIO'),driver,'//*[@id="__box141-popup-cont"]')
                    click_boxes('//*[@id="__button123-BDI-content"]',driver)
                    #Compensación
                    select('//*[@id="__box142-inner"]',users_to_contratation[i].get('USU_CCONCEPTO_PAGO'),driver,'//*[@id="__box142-popup-cont"]')
                    time.sleep(3)
                    fill_boxes('//*[@id="__field0-inner"]',users_to_contratation[i].get('USU_CVALOR'),driver)
                    select('//*[@id="__box143-inner"]',users_to_contratation[i].get('USU_CMONEDA'),driver,'//*[@id="__box143-popup-cont"]')
                    time.sleep(1)
                    select('//*[@id="__box144-inner"]',users_to_contratation[i].get('USU_CFRECUENCIA'),driver,'//*[@id="__box144-popup-cont"]')
                    logs =('code36',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'))+' Información de compensación completada!')
                    await sql_employers(logs_query, logs)
                    time.sleep(5)
                    click_boxes('//*[@id="__button43-BDI-content"]',driver)
                    
                    if await error_in_process(driver,"Error : Está ingresando una fecha extemporánea, recuerde que los Ingresos o reingresos no se realizan en fechas posteriores al día de hoy",'//*[@id="__html17"]'):
                        time.sleep(1)
                        logs =('code05',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'))+' Fallo en fecha de ingreso, se esta ingresando una fecha posterior al día de hoy.')
                        await sql_employers(logs_query, logs)
                        click_boxes('//*[@id="__mbox-btn-0-BDI-content"]',driver)#cerrar
                        pkusu_ncodigo = ('ERROR',users_to_contratation[i].get('PKUSU_NCODIGO'))
                        await sql_employers(update_status_query, pkusu_ncodigo)
                    else:
                        logs =('code011',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'))+' Se ha registrado correctamente.')
                        await sql_employers(logs_query, logs)
                        pkusu_ncodigo = ('COMPLETADO',users_to_contratation[i].get('PKUSU_NCODIGO'))
                        await sql_employers(update_status_query, pkusu_ncodigo)
                except Exception as e:
                    logs =('code012',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'))+' Ha salido algo mal, revise que este ingresando correctamente todos los parametros, esto incluye tildes, espacios etc.. ')
                    await sql_employers(logs_query, logs)
                    pkusu_ncodigo = ('ERROR',users_to_contratation[i].get('PKUSU_NCODIGO'))
                    await sql_employers(update_status_query, pkusu_ncodigo)
                    driver.quit()
                    driver=inicio_sesion(data_credential)
                    continue
            logs =('code09',' Se ha finalizado con el registro de los colaboradores')
            await sql_employers(logs_query, logs)
    except Exception as e:
        logs =('code012',str(users_to_contratation[i].get('USU_CNUMERO_DOCUMENTO'))+' Ha salido algo mal, revise que este ingresando correctamente todos los parametros, esto incluye tildes, espacios etc.. ')
        await sql_employers(logs_query, logs)
        pkusu_ncodigo = ('ERROR',users_to_contratation[i].get('PKUSU_NCODIGO'))
        await sql_employers(update_status_query, pkusu_ncodigo)
        print(f"Se ha encontrado un error en rap_main: {str(e)}")

    finally:
        driver.quit()

if __name__ == "__main__":
    asyncio.run(rpa_main())