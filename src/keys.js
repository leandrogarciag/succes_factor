require('./index')

//Variables Database Server
IPServidor = 'localhost'
UsuarioServidor = 'cos_crm'
ContrasenaServidor = 'gestiongeneralcos:2020'
BaseDatosServidor = 'dbp_creacionusuarios'


//Variables Database Local
// IPServidor = 'localhost'
// UsuarioServidor = 'root'
// ContrasenaServidor = '123456'
// BaseDatosServidor = 'dbp_bot_claro'


//Variables de usuario active directorty
url = 'LDAP://172.70.7.11:389'
baseDN = 'dc=groupcos,dc=com'
username = ''
password = ''



module.exports = {
    database: {
        host: IPServidor,
        user: UsuarioServidor,
        password: ContrasenaServidor,
        database: BaseDatosServidor,
        dateStrings: true,
        encoding: 'utf8',
        charset: 'utf8mb4'
    },
    config: {
        url: url,
        baseDN: baseDN,
        username: username,
        password: password,
    }
}