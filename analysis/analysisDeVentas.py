import pandas as pd
from helpers.creacionGrafica import generarGrafica


def analizarRegistroVentas():
    
    tabla=pd.read_csv('./data/bdplantas.csv',encoding='utf-8')

    #3. Aplico filtros para limpiar o seleccionar datos
    #Filtro de Semillas con ventas superiores a 4000
    filtroVentasSemillas=tabla.query(" (Categoria == 'Semillas') and (Ventas > 400 ) ") 
    (filtroVentasSemillas,"filtroVentasSemillas")
    
    #Filtro de Fertilizantes
    filtroVentasFertilizantes=tabla.query(" (Categoria == 'Fertilizantes') and (Ventas > 600 ) ") 
    (filtroVentasFertilizantes,"filtroVentasFertilizantes")

    filtroVentasSustratos=tabla.query(" (Categoria == 'Sustratos') and (Ventas > 600 ) ") 
    (filtroVentasSustratos,"filtroVentasSustratos")

    filtroVentasherramientas=tabla.query(" (Categoria == 'Herramientas') and (Ventas > 500 ) ") 
    (filtroVentasherramientas,"filtroVentasherramientas")

    filtroVentasAromaticas=tabla.query(" (Categoria == 'Aromaticas') and (Ventas > 500 ) ") 
    (filtroVentasAromaticas,"filtroVentasAromaticas")


    

    #4. Graficando los dataframes
    
     #4. Graficando los dataframes
    
    #generarGrafica(filtroVentasSemillas)
    #generarGrafica(filtroVentasFertilizantes)
    #generarGrafica(filtroVentasherramientas)
    #generarGrafica(filtroVentasSustratos)
    generarGrafica(filtroVentasAromaticas)