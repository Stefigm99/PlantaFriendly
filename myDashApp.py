import pandas as pd
import dash
from dash import dcc, html, Input, Output
import plotly.express as px

# Leer los datos
df = pd.read_csv('data/bdplantas.csv')

# Calcular las ventas totales por producto
ventas_por_producto = df.groupby(['Nombre', 'Categoria'])['Ventas'].sum().reset_index()

# Iniciar la aplicación Dash
app = dash.Dash(__name__)

# Definir una paleta de colores personalizada
colores_personalizados = {
    "Semillas": "#1f77b4",
    "Fertilizantes": "#ff7f0e",
    "Herramientas": "#2ca02c",
    "Sustratos": "#d62728",
    "Aromaticas": "#9467bd"
}

# Definir el layout del dashboard
app.layout = html.Div([
    html.H1('Dashboard interactivo de productos', style={'font-family': 'Times New Roman', 'margin-bottom': '20px', 'font-size': '32px', 'margin-left':'10px'}),
    html.Div([
        html.Label('Selecciona una categoría:',style={'font-family': 'Times New Roman', 'margin-bottom': '10px', 'font-size': '25px', 'margin-left':'10px'}),
        dcc.Dropdown(
            id='categoria-dropdown',
            options=[{'label': cat, 'value': cat} for cat in df['Categoria'].unique()],
            value=df['Categoria'].unique()[0]
        )
    ]),
    dcc.Graph(id='productos')
])

# Definir la lógica de actualización del gráfico
@app.callback(
    Output('productos', 'figure'),
    [Input('categoria-dropdown', 'value')]
)
def update_graph(selected_category):
    filtered_df = ventas_por_producto[ventas_por_producto['Categoria'] == selected_category]
    fig = px.bar(filtered_df, x='Nombre', y='Ventas', color='Categoria',
                 title=f'Ventas de Productos: {selected_category}', color_discrete_map=colores_personalizados)
    return fig

# Ejecutar la aplicación Dash
if __name__ == '__main__':
    app.run_server(debug=True)
