# Conserjeria_Digital
## Mockup:

https://www.figma.com/proto/uVGl9OITHSvW5qhHennFXj/Conserjeria-Digital?type=design&node-id=1-696&t=D3PuWvGalArBcqLx-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A107&mode=design






## Dependencias: 



### Api - esta en el repositorio 
https://github.com/Zilenox/ApiConserjeriaDigital.git

para poder ejecutar el sistema completo se requiere instalar:

### Visual Studio 
link version comunity:
https://visualstudio.microsoft.com/es/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false

### Docker Desktop
https://www.docker.com/products/docker-desktop/

se recomienda reiniciar el equipo posterior a la instalacion de ambos.

## Levantar la api
para levantar la Api, iniciar Visual estudio y clonar el repositorio de la api:
https://github.com/Zilenox/ApiConserjeriaDigital.git

- iniciar Docker-desktop e ignorarlo, solo se requiere el motor de contenedores en background.
- una vez clonado el repositorio, ejecutar el proyecto con el icono de play verde al costado de "docker-compose" en visual estudio.
- puede confirmar que la api esta funcionando desde la web que abrira automaticamente para visualizar los endpoints, 
tambien puede acceder manualmente desde la direccion:


https://localhost:8081/swagger/index.html


## aplicacion mobile
En cuanto a la aplicacion, puede clonar el sistema directamente desde Visual Studio Code 
- ejecutar con :


ionic serve 

posiblemente pedira instalar @angular/cli, escribir "Y"

npm.cmd i -D -E @angular/cli


la app tiene unos usuarios de prueba base para su comodidad:

Residentes:
- rut: 172223330
- pass: password
- depto: 103


- rut: 173334440
- pass: password
- depto: 205


Conserje:
- rut: 180001110
- pass: password


Administrador:
- rut: 196665550
- pass: password

- puede crear encomiendas y cartas desde el perfil "conserje" 
- puede crear nuevos usuarios y publicaciones desde el perfil "administrador"
- puede tener acceso a su casilla y ver las encomiendas disponibles desde el perfil "residente"

  ### Video
  https://drive.google.com/file/d/1l2s5nHV9E3g9zGrM8orjNt4PyvCXVduR/view?usp=sharing
  

-Condiciones:
los paquetes deben ser del tipo "Carta" o "Encomienda" - Se va a modificar por un combobox para comodidad
los paquetes deben ser dirigidos a usuarios existentes (numero de depto existe)
al crear un nuevo usuario, la clave por defecto es "password"


