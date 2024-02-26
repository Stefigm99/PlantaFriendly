from flask import Flask, render_template, request, jsonify
import pyodbc

app = Flask(__name__)

# Configuración de la conexión a la base de datos
server = 'LAPTOP-86592LS1\\SQLEXPRESS'
database = 'plantafriendly'  
connection_string = f'DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={server};DATABASE={database};Trusted_Connection=yes;'

@app.route('/')
def formulario_registro():
    return render_template('loginRegister.html')

@app.route('/registro', methods=['POST'])
def procesar_registro():
    nombre = request.form['nombre']
    apellido = request.form['apellido']
    correo = request.form['correo']
    contrasena = request.form['contrasena']

    try:
        # Conectar a la base de datos
        connection = pyodbc.connect(connection_string)

        # Crear un cursor para ejecutar consultas
        cursor = connection.cursor()

        # Insertar datos en la tabla 'usuarios'
        cursor.execute(f"INSERT INTO usuario (nombre_usuario, apellido_usuario, correo, contraseña) VALUES (?, ?, ?, ?)",
                       (nombre, apellido, correo, contrasena))

        # Confirmar los cambios en la base de datos
        connection.commit()

        # Registro exitoso, devolver un mensaje de éxito al frontend
        return jsonify({"success": True})

    except Exception as e:
        # Si ocurre un error, devolver un mensaje de error al frontend
        return jsonify({"success": False, "error": str(e)})

    finally:
        # Cerrar la conexión
        if 'connection' in locals():
            connection.close()

if __name__ == '__main__':
    app.run(debug=True)
