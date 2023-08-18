from netCDF4 import Dataset
import json

# Chemin vers le fichier NetCDF
file_path = "../../data/gebco_tid.nc"
# Ouvrir le fichier NetCDF en mode lecture ("r")
with Dataset(file_path, "r") as dataset:
    # Parcourir toutes les variables disponibles dans le fichier
    for variable_name in dataset.variables.keys():
        # Accéder à la variable
        variable_data = dataset.variables[variable_name][:]
        
        # Traiter les données si nécessaire (exemple : normalisation)
        normalized_data = (variable_data - variable_data.min()) / (variable_data.max() - variable_data.min())
        
        # Convertir les données en un format JSON
        data_for_threejs = normalized_data.tolist()
        data_json = json.dumps(data_for_threejs)
        
        # Écrire les données dans un fichier JSON
        json_filename = f"data_for_threejs_{variable_name}.json"
        with open(json_filename, "w") as json_file:
            json_file.write(data_json)
            
        print(f"Données pour la variable {variable_name} écrites dans {json_filename}")