import matplotlib.pyplot as plt
def generarGrafica(dataFrame):
    #Agrupar datos del dataframe segun el analisis de Filtro de arboles en Medellin
    '''
    promedioSemillas=dataFrame.groupby('Nombre')['Ventas'].mean()
    #0. generando lista de colores
    colores=["#27AE60","#58D68D","#82E0AA"]
    #1. Generar una figura 
    plt.figure(figsize=(10,10))
    #2. Genero la grafica que deseo
    plt.bar(promedioSemillas.index, promedioSemillas.values, color=colores)
    #3. Agrego titulo a la gráfica
    plt.title("Promedios de Ventas de semillas Mas Vendidas", fontsize=16)
    #4. Etiqueta o nombre del eje X
    plt.xlabel("Semillas", fontsize=14)
    #5. Etiqueta o nombre del eje y
    plt.ylabel("Cantidad de Ventas",fontsize=14)
    #6. Activar el grid
    plt.grid(True)
    #7. rotar los labels X
    plt.xticks(rotation=45)
    plt.yticks(fontsize=12)  # Aumentar el tamaño de los números en el eje y
    plt.xticks(fontsize=12)
    #7. Guardando nuestra grafica
    plt.savefig("./graphs/promedioSemillas.png")
    print(promedioSemillas)
    '''
    '''
    promedioFertilizantes=dataFrame.groupby('Nombre')['Ventas'].mean()
    #0. generando lista de colores
    colores=["#27AE60","#58D68D","#82E0AA"]
    #1. Generar una figura 
    plt.figure(figsize=(10,10))
    #2. Genero la grafica que deseo
    plt.bar(promedioFertilizantes.index, promedioFertilizantes.values, color=colores)
    #3. Agrego titulo a la gráfica
    plt.title("Promedios de Ventas de fertilizantes Mas Vendidos", fontsize=16)
    #4. Etiqueta o nombre del eje X
    plt.xlabel("Fertilizantes", fontsize=14)
    #5. Etiqueta o nombre del eje y
    plt.ylabel("Cantidad de Ventas",fontsize=14)
    #6. Activar el grid
    plt.grid(True)
    #7. rotar los labels X
    plt.xticks(rotation=45)
    plt.yticks(fontsize=12)  # Aumentar el tamaño de los números en el eje y
    plt.xticks(fontsize=12)
    #7. Guardando nuestra grafica
    plt.savefig("./graphs/promedioFertilizantes.png")
    print(promedioFertilizantes)
   '''
    '''
    promedioHerramientas=dataFrame.groupby('Nombre')['Ventas'].mean()
    #0. generando lista de colores
    colores=["#27AE60","#58D68D","#82E0AA"]
    #1. Generar una figura 
    plt.figure(figsize=(10,10))
    #2. Genero la grafica que deseo
    plt.bar(promedioHerramientas.index, promedioHerramientas.values, color=colores)
    #3. Agrego titulo a la gráfica
    plt.title("Promedios de Ventas de Herramientas Mas Vendidas", fontsize=16)
    #4. Etiqueta o nombre del eje X
    plt.xlabel("herramientas", fontsize=14)
    #5. Etiqueta o nombre del eje y
    plt.ylabel("Cantidad de Ventas",fontsize=14)
    #6. Activar el grid
    plt.grid(True)
    #7. rotar los labels X
    plt.xticks(rotation=45)
    plt.yticks(fontsize=12)  # Aumentar el tamaño de los números en el eje y
    plt.xticks(fontsize=12)
    #7. Guardando nuestra grafica
    plt.savefig("./graphs/promedioHerramientas.png")
    print(promedioHerramientas)
    '''
    '''
    promedioSustratos=dataFrame.groupby('Nombre')['Ventas'].mean()
    #0. generando lista de colores
    colores=["#27AE60","#58D68D","#82E0AA"]
    #1. Generar una figura 
    plt.figure(figsize=(10,10))
    #2. Genero la grafica que deseo
    plt.bar(promedioSustratos.index, promedioSustratos.values, color=colores)
    #3. Agrego titulo a la gráfica
    plt.title("Promedios de Ventas de Sustratos Mas Vendidos", fontsize=16)
    #4. Etiqueta o nombre del eje X
    plt.xlabel("Sustratos", fontsize=14)
    #5. Etiqueta o nombre del eje y
    plt.ylabel("Cantidad de Ventas",fontsize=14)
    #6. Activar el grid
    plt.grid(True)
    #7. rotar los labels X
    plt.xticks(rotation=45)
    plt.yticks(fontsize=12)  # Aumentar el tamaño de los números en el eje y
    plt.xticks(fontsize=12)
    #7. Guardando nuestra grafica
    plt.savefig("./graphs/promedioSustratos.png")
    print(promedioSustratos)
    '''
    
    promedioAromaticas=dataFrame.groupby('Nombre')['Ventas'].mean()
    #0. generando lista de colores
    colores=["#27AE60","#58D68D","#82E0AA"]
    #1. Generar una figura 
    plt.figure(figsize=(10,10))
    #2. Genero la grafica que deseo
    plt.bar(promedioAromaticas.index, promedioAromaticas.values, color=colores)
    #3. Agrego titulo a la gráfica
    plt.title("Promedios de Ventas de Aromaticas Mas Vendidas", fontsize=16)
    #4. Etiqueta o nombre del eje X
    plt.xlabel("Aromaticas", fontsize=14)
    #5. Etiqueta o nombre del eje y
    plt.ylabel("Cantidad de Ventas",fontsize=14)
    #6. Activar el grid
    plt.grid(True)
    #7. rotar los labels X
    plt.xticks(rotation=45)
    plt.yticks(fontsize=12)  # Aumentar el tamaño de los números en el eje y
    plt.xticks(fontsize=12)
    #7. Guardando nuestra grafica
    plt.savefig("./graphs/promedioAromaticas.png")
    print(promedioAromaticas)



    