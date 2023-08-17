from netCDF4 import Dataset
import json

# Chemin vers le fichier NetCDF
file_path = "chemin/vers/le/fichier.nc"

# Ouvrir le fichier NetCDF en mode lecture ("r")
with Dataset(file_path, "r") as dataset:
    # Accéder à une variable spécifique
    variable_name = "nom_de_la_variable"
    variable_data = dataset.variables[variable_name][:]  # Obtenir les données sous forme de tableau numpy

# Traiter les données si nécessaire (exemple : normalisation)
normalized_data = (variable_data - variable_data.min()) / (variable_data.max() - variable_data.min())

# Convertir les données en un format JSON
data_for_threejs = normalized_data.tolist()
data_json = json.dumps(data_for_threejs)

# Écrire les données dans un fichier JSON
with open("data_for_threejs.json", "w") as json_file:
    json_file.write(data_json)