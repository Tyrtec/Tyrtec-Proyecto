#!/bin/bash
opcion=$(yad --list \
                 --title="Gestion de Usuarios" \
                 --height=400 \
                 --width=350 \
                 --button=Aceptar:0 \
                 --button=Cancelar:1 \
                 --center \
                 --text="Seleccione la opcion deseada:" \
                 --radiolist \
                 --column="" \
                 --column="opcion" \
                 1 "Crear Usuario" 2 "Eliminar Usuario" 3 "Crear grupo" 4 "Eliminar grupo" 5 "Cambiar contrasena de un usuario" 6 "Ver datos de un usuario")
ans=$?
if [$ans -eq 0]
then
    echo "Has elegido: ${opcion}"
else
    echo "No has elegido ninguna opcion"
fi