from netCDF4 import Dataset

# Ouvrir le fichier NetCDF
file_path = "chemin/vers/le/fichier.nc"
dataset = Dataset(file_path, "r")  # Mode lecture ("r")

# Accéder à une variable spécifique
variable_name = "nom_de_la_variable"
variable_data = dataset.variables[variable_name][:]  # Obtenir les données sous forme de tableau numpy

# Fermer le fichier après utilisation
dataset.close()

